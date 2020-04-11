//this is our CSS really, our reusable modal used all over


import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL } from "../../constants/reducerConstants";

const Modal = ({title, error, content, action, back, onClose, onBackClick, onActionClick, secondary, onSecondaryClick }) => {
  const dispatch = useDispatch();

 // const screenType = useSelector(state=>state.screenType)
  const handleClick = e => {
    if (node.current.contains(e.target)) {
     console.log('inside click')
      return;
    }
    // outside click 
    console.log('outsider click')
  
    dispatch({type:SET_MODAL, payload:{}})
  };
  
  useEffect(() => {
    // add when mounted
    document.addEventListener("mousedown", handleClick);
    // return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);
  
  
  
  const node = useRef();
  
  





  return (
    <div id='myModal' className='modal'>



      
      <section className='modal-content'  ref={node}>

      <section className='header'>
     
    
  <h3 className='title'>{title}</h3>
      </section>

      <main>
       {content}
      </main>

 

      </section>

      <style jsx>
        {`
          .modal {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            position: fixed; /* Stay in place */
            z-index: 20; /* Sit on top */
            left: 0;
            top: 0;
            width: 50%; /* Full width */
            height: 50%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0, 0, 0); /* Fallback color */
            background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
          }
          .header {
            display: flex;
            flex-direction: column;
            margin-bottom: 10px;
          }
          .header h3{
              color: red;
          }
          /* Modal Content/Box */
          .modal-content {
            display: flex;
            flex-direction: column;
            align-content: center;
            background-color: #fefefe;
            margin: "15% auto"; /* 15% from the top and centered */
            
            padding: 20px;
            border: 1px solid #888;
            width:  "50%"; /* Could be more or less, depending on screen size */
          }
          .top-bar {
            display: flex;
            justify-content: flex-end;
          }
          main{
            margin-bottom:10px;
          }
          .bottom-stack {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .actions{
              display:flex;
              
          }
          .link {
            text-decoration: underline;
            color: blue;
            font-size: 12x;
          }
          /* The Close Button */
          .close {
            color: #aaa;
            align-self: flex-end;
            font-size: 28px;
            font-weight: bold;
          }
          .close:hover,
          .close:focus {
            color: black;
            text-decoration: none;
            cursor: pointer;
          }
        `}
      </style>
    </div>
  );
};

export default Modal;