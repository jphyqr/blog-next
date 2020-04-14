


import React, { useEffect, useState, useMemo } from 'react'
import { techStackWidgetMap, techStackEditables } from '../../../../utils/helpers'
import _ from 'lodash'
import firebase from '../../../../firebase'
//import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import  Router  from 'next/router'
const EditWidget = ({router}) =>{

    const auth = useSelector(state=>state.firebase.auth|| {})
    
    if(auth.isLoaded&&auth.isEmpty)
      Router.push('/')
    

    const firestore = firebase.firestore() //in prod this would have failed
     
    const widgetQuery = useMemo(() => ({
        collection: 'courses',
        doc: router.query.course,
        subcollections: [{collection: 'widgets', doc:router.query.widget}],
        storeAs: 'widgetConfig'
    }), [router.query.course, router.query.widget]);
    useFirestoreConnect(widgetQuery);
   const widgetConfig = useSelector(state => (state.firestore.ordered.widgetConfig && state.firestore.ordered.widgetConfig[0]) || {});
    
    const [id, setId] = useState(router?.query?.course || {});
    const [editField, selectField] = useState({});
   const [widget, setWidget] = useState(router?.query?.widget || {})
    const [record, setRecord] = useState({});
    const [loadingRecord, setLoaded] = useState(true);
    const [counter, incrementCounter] = useState(0) //force update on state when we update just a child of records state
    

const handleInputBlur = async () => {
    

   
    setLoaded(true)
    await firestore.collection("courses").doc(id).collection('widgets').doc(widget).set(
      {
  ...record,
  updateDate: Date.now()
   }
   
   ); 
 
 
 
   setLoaded(false)







    selectField({})




}


    const updateFormState = e => {
     
    
     
        let newState = record;
       newState[`${e.target.id}`] = e.target.value;
        setRecord(newState);
        incrementCounter(counter+1);
        
      };
    



const renderTextFields = (map) =>{

    return Object.keys(map).map((field,i)=>{
        return(


            <div className='card' key={i}>
               <h1>EDIT</h1>
                   <label className='label'>{field}</label>
                   {editField == field ? (
            <div>
              <input
                id={field}
                type='text'
                value={record[`${field}`]}
                onBlur={handleInputBlur} 
                onChange={e=>updateFormState(e)}
              ></input>
            </div>
          ) : (
            <div> 
              <h3 onDoubleClick={() => selectField(field)}>
                {record[`${field}`]}
              </h3>
            </div>
          )}
             

            
   
                   <style jsx>{`
  
                 .card{
                     background-color:green;
                     max-height:200px;
                     display: flex;
                     flex-direction: column;
                     
                 }
                 .label{    
                     background-color: yellow;
                     width: 100%;
                     text-align: center;
                 }
                `}</style>    
            </div>
            
              
          

        )
    })
}

//params: course and widget
useEffect(()=>{
    setId(router?.query?.course);
    setWidget(router?.query?.widget);
    
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



    return(
        <div>

     
    <div className='container'>
  {renderTextFields(techStackEditables)}

    </div>
    <style jsx>
        {`
                   .container {
                    height: 200px;
                    width: 600px;
                    background-color: gainsboro;
                    display:flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                }
    
    `}
    </style>
    </div>
      
    ) 

}




export default EditWidget