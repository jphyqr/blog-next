import React, { useEffect, useState } from "react";
import _ from "lodash";
import firebase from "../../../firebase";

import { rel } from "../../../utils/dataConstants";
import { relicMap } from "../../relics/relicConstants";
import Animations from "../../relics/Animations";

const ExpandedView = ({ showDataSource }) => {
  const [, rerender] = useState(false);
  const [_record, setRecord] = useState({});
  const [loading, setLoaded] = useState(true);
  const firestore = firebase.firestore();
  const [show, setShow] = useState(false);

  let dataComponent = {};

  dataComponent[relicMap.Animations] = Animations;

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
        const recordRef = firestore.collection("relics").doc(showDataSource);
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
            height: 450px;
            background-color: green;
  
            z-Index:30;
            animation: example1 ${_record.duration || "2"}s linear forwards;

          } 
         


         @keyframes open {
            0% { transform: translateY(450px);
            
             opacity: 0;
            }
            20% { transform : translateY(0px);
             opacity: 1;
            }
        } 

         @keyframes close {

         }

           @keyframes example1 {
            0%   { 

            transform: translateY(450px); 	
             opacity: 0;
            }

            10%,90% { 
           
                transform: ${show ? `translateY(0px)` : `translateY(450px)`}; 
               opacity: 1;
                }
       
            100% { 
                 transform: translateY(450px); 	
                 opacity: 0;
            }

        `}
      </style>
    </div>
  );
};

export default ExpandedView;
