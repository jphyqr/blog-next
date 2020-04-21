import React, { useEffect, useState, useRef } from "react";
import firebase from "../../firebase";
import _ from "lodash";

import cuid from "cuid";
import Carousel from "../../components/Carousel/Carousel";
import withRedux from "next-redux-wrapper";

const edit = ({ router }) => {
  const firestore = firebase.firestore();
  const courseConstants = {
    name: "name",
  };

  const [id, setId] = useState(router?.query?.course || {});
  const [record, setRecord] = useState({});
  const [loadingRecord, setLoaded] = useState(true);
  const [editField, selectField] = useState({});
  const [fieldsChanged, setFieldsChanged] = useState(false);
  const [courseVideos, setCourseVideos] = useState([]);
  const [loadingVideo, loadVideo] = useState(false);
  const [counter, incrementCounter] = useState(0); //force update on state when we update just a child of records state
  const renderTextFields = () => {
    //maop over every property in record and make a field

    return Object.keys(courseConstants).map((field) => {
      return (
        <div className="root-div">
          {editField == field ? (
            <div>
              <input
                id={field}
                type="text"
                value={record[`${field}`]}
                onBlur={() => selectField({})}
                onChange={(e) => updateFormState(e)}
              ></input>
            </div>
          ) : (
            <div>
              <h3 onDoubleClick={() => selectField(field)}>
                {record[`${field}`]}
              </h3>
            </div>
          )}
        </div>
      );
    });
  };

  const handleSelectFile = async (e) => {
    loadVideo(true);
    console.log("handle Select File", typeof e.target.value);

    var myUploadedFile = document.getElementById("videoUpload").files[0];
    console.log({ myUploadedFile });

    const imageName = cuid();
    var storageRef = firebase.storage().ref();
    var ref = storageRef.child(`course_videos/${imageName}`);
    let uploadTaskSnapshot = await ref.put(myUploadedFile);

    let downloadURL = await uploadTaskSnapshot.ref.getDownloadURL();

    //have the url, need to make sub collection inside course and add it.

    await firestore
      .collection("courses")
      .doc(id)
      .collection("course_videos")
      .doc(imageName)
      .set({
        videoURL: downloadURL,
      });

    loadVideo(false);
  };

  const handleSubmit = async () => {
    setLoaded(true);
    await firestore
      .collection("courses")
      .doc(id)
      .set({
        ...record,
        updateDate: Date.now(),
      });

    setFieldsChanged(false);

    setLoaded(false);
  };

  const updateFormState = (e) => {
    console.log("update Form State", e.target.value);
    setFieldsChanged(true);

    let newState = record;
    console.log("newStatev before", newState);
    newState[`${e.target.id}`] = e.target.value;
    console.log("newStatev after", newState);
    setRecord(newState);
    incrementCounter(counter + 1);
  };

  useEffect(() => {
    setId(router?.query?.course);

    const getRecordById = async () => {
      console.log("id", id);
      if (!_.isEmpty(id)) {
        const recordRef = firestore.collection("courses").doc(id);
        let recordSnap = await recordRef.get();
        let record = recordSnap.data();

        setRecord(record);
        setLoaded(false);
      }

      return record;
    };

    let record = getRecordById();
  }, [id]); //ONLY RERENDER WHEN ID CHANGES

  //we should get the videos for this course, when the course changes, and when a video is changed

  useEffect(() => {
    const getVideosForCourse = async () => {
      if (!_.isEmpty(id) && !loadingVideo) {
        const courseVideosRef = firestore
          .collection("courses")
          .doc(id)
          .collection("course_videos");

        let courseVideoSnapShot = await courseVideosRef.get();
        let loadedVideos = [];
        courseVideoSnapShot.forEach((doc) => {
          loadedVideos.push({
            id: doc.id,
            ...doc.data(),
          });
        });

        setCourseVideos(loadedVideos);
      }
    };

    getVideosForCourse();
  }, [id, loadingVideo]);

  return (
    <div>
      {loadingVideo ? (
        <div className="show-while-loaded">
          <h1>Uploading Video...</h1>
        </div>
      ) : loadingRecord ? (
        <div className="show-while-loaded">
          <h1>Loading Record...</h1>
        </div>
      ) : (
        renderTextFields()
      )}

      <label>File Upload</label>
      <input onChange={handleSelectFile} id="videoUpload" type="file"></input>

      <button onClick={handleSubmit} disabled={!fieldsChanged}>
        Save Record
      </button>

      {/* <Carousel items = {courseVideos} /> */}
    </div>
  );
};

export default edit;
