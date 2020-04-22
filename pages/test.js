import React from "react";
import firebase from "../firebase";

const Name = () => {
  const checkMetadata = async () => {
    var storageRef = firebase.storage().ref();
    var forestRef = storageRef.child("assets/File.jpg");

    // Get metadata properties
    forestRef
      .getMetadata()
      .then(function (metadata) {
        console.log("metadata", metadata); // Metadata now contains the metadata for 'images/forest.jpg'
      })
      .catch(function (error) {
        // Uh-oh, an error occurred!
        console.log({ error });
      });
  };

  return (
    <div className="className">
      <button onClick={checkMetadata}> check metadata</button>

      <style jsx>
        {`
          .className {
          }
        `}
      </style>
    </div>
  );
};

Name.getInitialProps = async () => {
  console.log("SSR");
  return { test: "test" };
};

export default Name;
