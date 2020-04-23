import React, { useEffect, useState } from "react";
import _ from "lodash";
import firebase from "../../../firebase";
import { dataSourceComponents } from "../../../pages/dataConstants";
import ExplainNext from "../../../pages/ExplainNext";
import SQLVSNoSQL from "../../../pages/SQLVSNoSQL";
const ExpandedView = ({ showDataSource }) => {
  const [, rerender] = useState(false);
  const [_record, setRecord] = useState({});
  const [loading, setLoaded] = useState(true);
  const firestore = firebase.firestore();
  const [show, setShow] = useState(false);

  let dataComponent = {};

  dataComponent[dataSourceComponents.ExplainNext] = ExplainNext;
  dataComponent[dataSourceComponents.SQLVSNoSQL] = SQLVSNoSQL;

  const renderDataComponent = () => {
    let ShowDataComponent;
    if (!_.isEmpty(_record.component)) {
      ShowDataComponent = dataComponent[`${_record.component}`];
      return <ShowDataComponent />;
    }

    return <div></div>;
  };

  useEffect(() => {
    rerender(true);

    //get the record it should have
    const getDataSourceById = async () => {
      if (!_.isEmpty(showDataSource)) {
        const recordRef = firestore
          .collection("data_sources")
          .doc(showDataSource);
        let recordSnap = await recordRef.get();
        let record = recordSnap.data();

        await setRecord(record);
        setLoaded(false);
        setShow(true);
        rerender(true);
      } else {
        setRecord({});
        setShow(false);
      }
    };

    getDataSourceById();
  }, [showDataSource, show]);

  return (
    <div className="container">
      {renderDataComponent()}
      <style jsx>
        {`
          .container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 300px;
            background-color: green;
  
            z-Index:30;
            animation: example1 ${_record.duration || "2"}s linear forwards;

          } 
          @-moz-keyframes example1 {
            0%   { -moz-transform: translateY(50px); }
      
            100% { -moz-transform: translateY(0px); }
           }
           @-webkit-keyframes example1 {
            0%   { -moz-transform: translateY(100%); }
         
            100% { -moz-transform: translateY(-150%); }
           }
           @keyframes example1 {
            0%   { 
            -moz-transform: translateY(300px); /* Firefox bug fix */
            -webkit-transform: translateY(300px); /* Firefox bug fix */
            transform: translateY(300px); 	
             
            }

            20%,80% { 
                -moz-transform: ${
                  show ? `translateY(0px)` : `translateY(300px)`
                };  /* Firefox bug fix */
                -webkit-transform: ${
                  show ? `translateY(0px)` : `translateY(300px)`
                };  /* Firefox bug fix */
                transform: ${show ? `translateY(0px)` : `translateY(300px)`}; 
             
                }
       
            100% { 
                -moz-transform: translateY(300px); /* Firefox bug fix */
                -webkit-transform: translateY(300px); /* Firefox bug fix */
                transform: translateY(300px); 	
            }

        `}
      </style>
    </div>
  );
};

export default ExpandedView;
