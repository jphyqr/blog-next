import React, { useEffect, useState, Component } from "react";
import Carousel from "../components/Carousel/Carousel";
import firebase from "../firebase";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN , LOGOUT, SET_MODAL} from "../constants/reducerConstants";
import Modal from "../components/modals/Modal";
import  _ from 'lodash'
import RegisterModal from "../components/modals/RegisterModal";
import { modals } from "../constants/modalConstants";
import Password from "../components/modals/Password";
import { verificationMap } from "../constants/verificationConstants";
const firestore = firebase.firestore();

//WHY REACT?
//LIFECYCLE METHOD
//componentDidMount, compinentDidUpdate, componentWillReceiveProps
//combined these into one thing caled the useEffect hook.



const index = () => {
  const [courses, setCourses] = useState([]);
  const dispatch = useDispatch()
  const auth = useSelector(state=>state.firebase.auth||{})
  const profile = useSelector(state=>state.firebase.profile|| {})
  const modal = useSelector(state=>state.modal||{})
  // hook into the 
  const router = useRouter();


   let modalComponent = {};
  
   modalComponent[modals.RegisterModal] = RegisterModal;
   modalComponent[modals.Password] = Password;
    


   const renderModal = () =>{
     //If someone clicks to show a model.. then show it


   

  let ShowModal;
     if(!_.isEmpty(modal)){
    ShowModal = modalComponent[`${modal}`]
    return <ShowModal/>
     }

  
  
     if(profile.isLoaded&&!profile.isEmpty)
     Object.keys(verificationMap).map(modal=>{
       console.log('checking profile for', modal)
             if(!profile[`${modal}`]){
               dispatch({type:SET_MODAL, payload:modals[`${modal}`]})
             }
     })


    return <div></div>
  
   
  }


   

  const handleCreateClick = async () => {
    let newCourse = await firestore.collection("courses").add({
      creationDate: Date.now(),
      title: 'Set Title',
      author: 'AUTHOR ONCE AUTH DONE',
      description: 'Set Description'
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


  useEffect(()=>{

    const showNextVerification = () =>{
      if(profile.isLoaded&&!profile.isEmpty){
        Object.keys(verificationMap).map(modal=>{
                if(!profile[`${modal}`]){
                  dispatch({
                    type:SET_MODAL,
                    payload: modal 
          
                 })
  
                 
                }
        })
  
      }

    }

     showNextVerification()
  }, [profile])

  //Thunk-> dispatch when its async,
  //dont need to dispatch when its not async
  return (
    <div>
     {renderModal()}
      <h1> It works! Now What??  </h1>

      {!auth.isEmpty ?
      //true case
      <div id='auth-true'>
       <button onClick={()=>firebase.auth().signOut()}>Logout</button>

<button   onClick={handleCreateClick}>Create Course</button>
      
      </div>
      :
      //false case
      <div id='auth-false'>
       <button onClick={()=>dispatch({
          type:SET_MODAL,
          payload: modals.RegisterModal 

       })}>Login</button>
      </div>
      }
      <button onClick={()=>dispatch({
          type:SET_MODAL,
          payload: modals.Password 

       })}>Set Password</button>
     {/* {courses.map(course => (
        <Carousel key={course.id} course={course} />
      ))} */}
    </div>
  );
};

export default index;
