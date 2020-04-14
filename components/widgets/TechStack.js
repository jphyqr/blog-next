import React, { useMemo, useState, useEffect } from 'react'
import { useFirestoreConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import firebase from '../../firebase'
import { techStackWidgetMap } from '../../utils/helpers';


const TechStack = ({id, widget}) =>{

const firestore = firebase.firestore()

  const widgetQuery = useMemo(() => ({
        collection: 'courses',
        doc: id,
        subcollections: [{collection: 'widgets', doc:widget}],
        storeAs: 'widgetConfig'
    }), [id, widget]);
    useFirestoreConnect(widgetQuery);
   const widgetConfig = useSelector(state => (state.firestore.ordered.widgetConfig && state.firestore.ordered.widgetConfig[0]) || {});
    
     const [record, setRecord] = useState(widgetConfig);
     const [loadingRecord, setLoaded] = useState(true);
   
     const renderCards = (map) =>{
     
        return Object.keys(map).map((field,i)=>{
            console.log({field})
            return(
    
    <div>
                <div className='card' key={i}>
                
                       <label className='label'>{field}</label>
                      
                
                <div> 
                  <label className='info' >
                    
                    {record[`${field}`]}
                  </label>
                </div>
             
                 
    
                
       
           
                </div>
                <style jsx>{`
      
      .card{
          
          max-height:200px;
          display: flex;
          flex-direction: column;
          margin-right: 10px;
          border-radius: 5px;
          padding: 5px; 
          background-color: gainsboro;      
          
      }
      .label{    
         
          width: 100%;
          text-align: center;
          text-transform: uppercase;
      }

      .info{
          font-style: italic; 
      }
     `}</style>     
                </div>
                  
              
    
            )
        })
    }
     useEffect(()=>{
 
        const getRecordById = async () => {
         
            if ((!_.isEmpty(id))&&(!_.isEmpty(widget))) {
              const recordRef = firestore.collection("courses").doc(id).collection("widgets").doc(widget);
              let recordSnap = await recordRef.get();
              let record = recordSnap.data();
      
              setRecord(record);
              setLoaded(false);
            }
      
            return record;
          };
    
          getRecordById();
    
    
    }, [widgetConfig])

    return (
        <div>

        <div className='container'>
        {renderCards(techStackWidgetMap)}   
        </div>
        <style jsx>
            {`
                       .container {
                        height: 200px;
                        width: 1000px;
                        background-color: black;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                       
                    }
        
        `}
        </style>
        </div>
    )
}


export default TechStack