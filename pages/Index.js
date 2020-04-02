import React, { useEffect, useState } from "react";
import Carousel from "../components/Carousel/Carousel";
import firebase from "../firebase";
import { useRouter } from "next/router";
const firestore = firebase.firestore();

//WHY REACT?
//LIFECYCLE METHOD
//componentDidMount, compinentDidUpdate, componentWillReceiveProps
//combined these into one thing caled the useEffect hook.

const Index = () => {
  const [courses, setCourses] = useState([]);
  const router = useRouter();

  const handleCreateClick = async () => {
    let newCourse = await firestore.collection("courses").add({
      creationDate: Date.now()
    });
    console.log(newCourse.id);
    router.push("/[courseId]/edit", `/${newCourse.id}/edit`);
  };

  useEffect(() => {
    console.log("UseEffect Index.js");


    const loadCourses = async () => {
      const courseRef = firestore.collection("courses");
      let courseSnapShot = await courseRef.get();
      //console.log('courseData.docs', courseData.docs);

      let loadedCourses = [];

      courseSnapShot.forEach(doc => {
        console.log(doc.data());
        loadedCourses.push({
          id: doc.id,
          ...doc.data()
        });
      });

      setCourses(loadedCourses);
    };

    loadCourses();

    
  }, []); //[] only run, when whats in the [] changes

  return (
    <div>
      <h1> JOHNS COURSES </h1>
      <button onClick={handleCreateClick}>Create Course</button>
      {courses.map(course => (
        <Carousel key={course.id} course={course} />
      ))}
    </div>
  );
};

export default Index;
