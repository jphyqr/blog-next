import React, { useEffect, useState, Component } from "react";
import Carousel from "../components/Carousel/Carousel";
import firebase from "../firebase";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, SET_MODAL } from "../constants/reducerConstants";
import Modal from "../components/modals/Modal";
import _ from "lodash";
import { verificationCheck } from "../utils/helpers";
import RegisterModal from "../components/modals/RegisterModal";
import Password from "../components/modals/Password";
import { withRedux } from "../lib/redux";
import { modals, verificationMap } from "../components/modals/modalConstants";
import DisplayName from "../components/modals/DisplayName";
const firestore = firebase.firestore();

//WHY REACT?
//LIFECYCLE METHOD
//componentDidMount, compinentDidUpdate, componentWillReceiveProps
//combined these into one thing caled the useEffect hook.

const Index = () => {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.firebase.auth || {});
  const profile = useSelector((state) => state.firebase.profile || {});
  const modal = useSelector((state) => state.modal || {});
  const [, profileChanged] = useState(false);
  // hook into the
  const router = useRouter();

  let modalComponent = {};

  modalComponent[modals.RegisterModal] = RegisterModal;
  modalComponent[modals.Password] = Password;
  modalComponent[modals.DisplayName] = DisplayName;
  const renderModal = () => {
    let ShowModal;
    if (!_.isEmpty(modal)) {
      ShowModal = modalComponent[`${modal}`];
      return <ShowModal />;
    }

    if (profile.isLoaded && !profile.isEmpty)
      Object.keys(verificationMap).map((modal) => {
        if (!profile[`${modal}`]) {
          dispatch({ type: SET_MODAL, payload: modals[`${modal}`] });
        }
      });

    return <div></div>;
  };

  const handleCreateClick = async () => {
    let newCourse = await firestore.collection("courses").add({
      creationDate: Date.now(),
      title: "Set Title",
      author: "AUTHOR ONCE AUTH DONE",
      description: "Set Description",
    });
    console.log(newCourse.id);
    router.push("/[courseId]/edit", `/${newCourse.id}/edit`);
  };

  useEffect(() => {
    const loadCourses = async () => {
      const courseRef = firestore.collection("courses");
      let courseSnapShot = await courseRef.get();

      let loadedCourses = [];

      courseSnapShot.forEach((doc) => {
        loadedCourses.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      setCourses(loadedCourses);
    };

    loadCourses();
  }, []); //[] only run, when whats in the [] changes

  useEffect(() => {
    profileChanged(true);
    const showNextVerification = () => {
      if (profile.isLoaded && !profile.isEmpty) {
        Object.keys(verificationMap).map((modal) => {
          if (!profile[`${modal}`]) {
            dispatch({
              type: SET_MODAL,
              payload: modal,
            });
          } else {
            dispatch({
              type: SET_MODAL,
              payload: {},
            });
          }
        });
      }
    };

    showNextVerification();
  }, [profile]);

  //Thunk-> dispatch when its async,
  //dont need to dispatch when its not async
  return (
    <div>
      {renderModal()}
      <h1> It works! Now What?? </h1>

      {!auth.isEmpty ? (
        //true case
        <div id="auth-true">
          <button onClick={() => firebase.auth().signOut()}>Logout</button>

          <button
            onClick={() =>
              verificationCheck(profile, [modals.DisplayName], dispatch)
                ? () => handleCreateClick
                : () => {}
            }
          >
            Create Course
          </button>
          <button
            onClick={() =>
              router.push("/widgets/user/[userId]", `/widgets/user/${auth.uid}`)
            }
          >
            Widgets
          </button>
        </div>
      ) : (
        //false case
        <div id="auth-false">
          <button
            onClick={() =>
              dispatch({
                type: SET_MODAL,
                payload: modals.RegisterModal,
              })
            }
          >
            Login
          </button>
        </div>
      )}
      <button
        onClick={() =>
          dispatch({
            type: SET_MODAL,
            payload: modals.Password,
          })
        }
      >
        Set Password
      </button>
      {/* {courses.map(course => (
        <Carousel key={course.id} course={course} />
      ))} */}
    </div>
  );
};

Index.getInitialProps = async (context) => {
  console.log("GIP", context);
  return {
    props: { test: "test" },
  };
};

export default Index;
