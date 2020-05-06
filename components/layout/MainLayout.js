import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import firebase from "../../firebase";
import { modals, verificationMap } from "../modals/modalConstants";
import RegisterModal from "../modals/RegisterModal";
import Password from "../modals/Password";
import DisplayName from "../modals/DisplayName";
import { SET_MODAL, SET_AVATAR_MATCH } from "../../constants/reducerConstants";
import { verificationCheck } from "../../utils/helpers";
import _ from "lodash";
import { useRouter } from "next/router";
import AvatarSquare from "../widgets/common/AvatarSquare/AvatarSquare";
const MainLayout = ({ children }) => {
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
  const router = useRouter();
  const dispatch = useDispatch();

  const auth = useSelector((state) => state.firebase.auth || {});
  const profile = useSelector((state) => state.firebase.profile || {});
  const modal = useSelector((state) => state.modal || {});
  const [, profileChanged] = useState(false);
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

  return (
    <div className="container">
      <div className="nav-bar">
        <div className="nav-start">
          <AvatarSquare navbar />
        </div>
        <div className="nav-middle">
          {!auth.isEmpty && (
            <button
              onClick={() =>
                verificationCheck(profile, [modals.DisplayName], dispatch)
                  ? () => handleCreateClick
                  : () => {}
              }
            >
              Create Course
            </button>
          )}
          {!auth.isEmpty && (
            <button
              onClick={() =>
                router.push(
                  "/widgets/user/[userId]",
                  `/widgets/user/${auth.uid}`
                )
              }
            >
              Widgets
            </button>
          )}
        </div>
        <div className="nav-end">
          {!auth.isEmpty ? (
            //true case
            <div id="auth-true">
              <button onClick={() => firebase.auth().signOut()}>Logout</button>
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
        </div>
      </div>
      <div className="body">
        {renderModal()}
        {children}
      </div>

      <style jsx>
        {`
          .container {
            display: flex;
            flex-direction: column;
          }
          .nav-bar {
            width: 100%;
            height: auto;
            background-color: purple;
            display: grid;
            grid-template-columns: [start] auto [middle] auto [end] 100px [fin];
          }

          .nav-start {
            grid-column-start: start;
          }
          .nav-middle {
            grid-column-start: middle;
          }
          .nav-end {
            grid-column-start: end;
          }
          .body {
            width: 100%;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>
    </div>
  );
};

export default MainLayout;
