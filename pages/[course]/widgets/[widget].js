import React, { useEffect, useState, useMemo } from 'react'
import { techStackWidgetMap } from '../../../utils/helpers'
import _ from 'lodash'
import firebase from '../../../firebase'
import { withRedux } from '../../../lib/redux'
//import { useFirestoreConnect } from 'react-redux-firebase'
import { useSelector } from 'react-redux'
const Widget = ({url}) =>{

    const firestore = firebase.firestore()

    // const widgetQuery = useMemo(() => ({
    //     collection: 'courses',
    //     doc: url.query.course,
    //     subcollections: [{collection: 'widgets', doc:url.query.widget}],
    //     storeAs: 'widgetConfig'
    // }), [url.query.course, url.query.widget]);
    // useFirestoreConnect(widgetQuery);
  //  const widgetConfig = useSelector(state => (state.firestore.ordered.widgetConfig && state.firestore.ordered.widgetConfig[0]) || {});
    
    const [id, setId] = useState(url.query.course || {});
    const [editField, selectField] = useState({});
   const [widget, setWidget] = useState(url.query.widget || {})
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
    setId(url.query.course);
    setWidget(url.query.widget);
    
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


}, [widget, id])



    return(
        <div>

     
    <div className='container'>
  {renderTextFields(techStackWidgetMap)}

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




export default withRedux(Widget)