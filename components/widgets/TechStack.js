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
          
          max-height:100px;
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
        <span className='fixed-label'>Next Problem</span>
        
        <div className='body'>
        {renderCards(techStackWidgetMap)} 
        </div>

         <span className='horizontal-scroll'>
            <span className='scroll-item'>{record?.problem}</span>
            </span>
           
     
          
        </div>
        <style jsx>
            {`
.container{
    width:1000px;
    display:flex;
    flex-direction: column;
    background-color: black;
    position:relative;
    
}

                       .body {
                        width: 100%;
                        padding:5px 0px 5px 0px;
                        background-color: black;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                       
                       
                    }


    .footer{
        display:flex;
        width:100%;
        padding:5px 0px 5px 0px;
        font-size: 26px;
        color: white;
    }

    .fixed-label{
        background-color: red;
        margin-right: 5px;
        bottom: 0;
        position: absolute;
        font-size: 26px;

    }


                    .horizontal-scroll{
                      
                        width: 80%;
                        transform:translateX(20%);
                        height: 50px;	
                       overflow: hidden;
                       position: relative;

                        

                    }

                    .scroll-item{
                        font-size: 2em;
                        color: white;
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        margin: 0;
                        line-height: 50px;
                        text-align: center;
                        /* Starting position */
                        -moz-transform:translateX(100%);
                        -webkit-transform:translateX(100%);	
                        transform:translateX(100%);
                        /* Apply animation to this element */	
                        -moz-animation: example1 15s linear infinite;
                        -webkit-animation: example1 15s linear infinite;
                        animation: example1 15s linear infinite;

                    }

                    @-moz-keyframes example1 {
                        0%   { -moz-transform: translateX(100%); }
                        100% { -moz-transform: translateX(-100%); }
                       }
                       @-webkit-keyframes example1 {
                        0%   { -webkit-transform: translateX(100%); }
                        100% { -webkit-transform: translateX(-100%); }
                       }
                       @keyframes example1 {
                        0%   { 
                        -moz-transform: translateX(100%); /* Firefox bug fix */
                        -webkit-transform: translateX(100%); /* Firefox bug fix */
                        transform: translateX(100%); 		
                        }
                        100% { 
                        -moz-transform: translateX(-100%); /* Firefox bug fix */
                        -webkit-transform: translateX(-100%); /* Firefox bug fix */
                        transform: translateX(-100%); 
                        }
        
        `}
        </style>
        </div>
    )
}


export default TechStack