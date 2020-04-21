


import React, { useEffect, useState, useMemo } from 'react'

import _ from 'lodash'
import firebase from '../../../../firebase'
import { useSelector } from 'react-redux'
import { useFirestoreConnect } from 'react-redux-firebase'
import  Router  from 'next/router'
import DocumentEditor from '../../../../components/DocumentEditor'




const EditWidget = ({router}) =>{
  const firestore= firebase.firestore()
    const auth = useSelector(state=>state.firebase.auth|| {})
    
    if(auth.isLoaded&&auth.isEmpty)
      Router.push('/')
    

    const widgetQuery = useMemo(() => ({
        collection: 'courses',
        doc: router.query.course,
        subcollections: [{collection: 'widgets', doc:router.query.widget}],
        storeAs: 'widgetConfig'
    }), [router.query.course, router.query.widget]);
    useFirestoreConnect(widgetQuery);
   const widgetConfig = useSelector(state => (state.firestore.ordered.widgetConfig && state.firestore.ordered.widgetConfig[0]) || {});
    
    const [id, setId] = useState(router?.query?.course || {});

   const [widget, setWidget] = useState(router?.query?.widget || {})
    const [record, setRecord] = useState({});
    const [loadingRecord, setLoaded] = useState(true);
  



  






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

const handleUpdateRecord = async (record) =>{

  await firestore.collection("courses").doc(id).collection('widgets').doc(widget).set(
    {
...record,
updateDate: Date.now()
 }
 
 ); 

console.log('handleUpdateRecord', record)
}



    return(
        <div>

    <h1>Edit {widget} for course: {record?.courseTitle}</h1>
 
    <DocumentEditor updateDatabase={handleUpdateRecord} loading={loadingRecord} document={record} />

      </div>
    ) 

}




export default EditWidget