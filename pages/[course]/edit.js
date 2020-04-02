import React, { useEffect, useState, useRef } from "react";
import firebase from "../../firebase";
import _ from "lodash";
const edit = ({ url }) => {
  const firestore = firebase.firestore();

  const [id, setId] = useState(url.query.course || {});
  const [record, setRecord] = useState({});
  const [loadingRecord, setLoaded] = useState(true);
  const [editField, selectField] = useState({});

  const renderTextFields = () => {
    //maop over every property in record and make a field
    return Object.keys(record).map(field => {
      return (
        <div className='root-div'>
          {editField == field ? (
            <div>
              <input
                id={field}
                type='text'
                onBlur={e => updateFormState(e)}
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

  const updateFormState = e => {
    console.log(e.target.value);
    console.log(e.target.id);

    let newState = record;
    newState[`${e.target.id}`] = e.target.value;
    setRecord(newState);
    selectField({});
  };

  useEffect(() => {
    setId(url.query.course);

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

  return (
    <div>
      {loadingRecord ? (
        <div className='show-while-loaded'>
          <h1>Loading Record...</h1>
        </div>
      ) : (
        renderTextFields()

        // <div className='show-after-loaded'>
        //   {editField == "title" ? (
        //     <input
        //     className='title'
        //     id='title'
        //       type='text'
        //       onBlur={e =>
        //         updateFormState(e)
        //       }
        //     ></input>
        //   ) : (
        //     <h1 onDoubleClick={() => selectField("title")}>
        //       {record.title || "Set Title"}
        //     </h1>
        //   )}
        //   {editField == "description" ? (
        //     <input
        //     id='description'
        //     type='text'
        //     onBlur={e =>
        //       updateFormState(e)
        //     }

        //     ></input>
        //   ) : (
        //     <h3 onDoubleClick={() => selectField("description")}>
        //       {record.description || "Set Description"}
        //     </h3>
        //   )}
        // </div>
      )}
    </div>
  );
};

export default edit;
