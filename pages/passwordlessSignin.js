
import React, { useCallback } from "react";
import firebase from "../firebase";
import Router from "next/router";
import { useDispatch } from "react-redux";

import { useFirebase, useFirestore } from "react-redux-firebase";


const passwordlessSignin = ({ url }) => {
  const dispatch = useDispatch();

  const { query } = url || {};
  console.log({ query });
  const firestore = useFirestore();


  const signIn = async query => {
    console.log("signIn", query);
    if (process.browser) {
      if (firebase.auth().isSignInWithEmailLink(window.location.href)) {
        // Additional state parameters can also be passed via URL.
        // This can be used to continue the user's intended action before triggering
        // the sign-in operation.
        // Get the email if available. This should be available if the user completes
        // the flow on the same device where they started it.

        try {
          var email = await window.localStorage.getItem("emailForSignIn");
          console.log({ email });
          if (!email) {
            // User opened the link on a different device. To prevent session fixation
            // attacks, ask the user to provide the associated email again. For example:
            email = window.prompt("Please provide your email for confirmation");
          }
          // The client SDK will parse the code from the link for you.
          let result = await firebase
            .auth()
            .signInWithEmailLink(email, window.location.href);

          // Clear email from storage.
          await window.localStorage.removeItem("emailForSignIn");
          // You can access the new user via result.user
          console.log("result.user", result.user);
          if (result.user.displayName == null) {
            //new user
            console.log("NEW USER");
            await result.user.updateProfile({
              displayName: result.user.email
            });

            let newUser = {
              displayName: result.user.email,
              createdAt: firestore.FieldValue.serverTimestamp(),
            };

            await firestore.set(`users/${result.user.uid}`, { ...newUser });

       
          } else {
            console.log('Not a new user')
          }

          console.log("result", result);
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser

          console.log("windows href", window.location.href);

          if(typeof(query)=='undefined')
          Router.push(`/`)

          if (query&&query.redirect) {
            // await dispatch({
            //   type: "SET_PATH",
            //   // payload: {path:`${game.eventSearchable}/${game.gameSearchable}`}
            //   payload: { path: query.redirect }
            // });
          }

          //  if(typeof(path)!='undefined')


        //   if (query&&query.courseId) {
        //     handleGetCourse({ id: query.gameId });
        //   }

          Router.push(`/`)
        } catch (error) {
          alert(error)
          console.log({
            error
          });
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
        }
      }
    }
  };

 signIn(query);

  return <div>Redirecting...</div>;
};

export default passwordlessSignin;

