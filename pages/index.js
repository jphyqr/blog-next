import React, { useEffect, useState, Component } from "react";

import firebase from "../firebase";

import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL } from "../constants/reducerConstants";

import _ from "lodash";

import { modals, verificationMap } from "../components/modals/modalConstants";
import MainLayout from "../components/layout/MainLayout";
const firestore = firebase.firestore();

//WHY REACT?
//LIFECYCLE METHOD
//componentDidMount, compinentDidUpdate, componentWillReceiveProps
//combined these into one thing caled the useEffect hook.

const Index = () => {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch();

  // hook into the

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

  //Thunk-> dispatch when its async,
  //dont need to dispatch when its not async
  return (
    <MainLayout>
      <div>
        <h1> It works! Now What?? </h1>

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
    </MainLayout>
  );
};

export default Index;
