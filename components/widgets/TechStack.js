import React, { useMemo, useState, useEffect } from 'react'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import firebase from '../../firebase'
import { techStackWidgetMap, techTickerMap, newsTickerMap } from '../../utils/helpers';
import Ticker from '../Ticker/Ticker';
import Card from '../common/Cards/Card';
import TickerManager from '../Ticker/TickerManager';
import FocusesTicker from '../Ticker/FocusesTicker';
import TechStackTicker from '../Ticker/TeckStackTicker';
import ProblemTicker from '../Ticker/ProblemTicker';
import ProfileTicker from '../Ticker/ProfileTicker';


const TechStack = ({id, widget}) =>{







    let tickerComponent = {};
  
    tickerComponent[techTickerMap.FocusesTicker] = FocusesTicker;
    tickerComponent[techTickerMap.TechStackTicker] = TechStackTicker;
    tickerComponent[newsTickerMap.ProblemTicker] = ProblemTicker;
    tickerComponent[newsTickerMap.ProfileTicker] = ProfileTicker
     
 











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
     console.log('record is loaded',isLoaded(record))
     console.log('record is empty',isEmpty(record))
     const [loadingRecord, setLoaded] = useState(true);
     //should wego ShowStack ? [ShowFocuses]




 const filterObjFromObj = (original, filter) =>{

console.log({original})
console.log({filter})


//loop over the original, and if the filter has that property,
//do nothing, if not delete it.
let filtered = {}

Object.keys(original).map(key=>{
     console.log({key})
     if(filter.hasOwnProperty(key)){
  console.log('filter has', key)
        filtered[`${key}`] = original[`${key}`]
     }
      
 })

 console.log('after filter', filtered)

 return filtered

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
        
       {!loadingRecord && !_.isEmpty(record)&&
       <div className='test'>
       <TickerManager key={1} name={'TechTicker'} record={record} filteredTickers={filterObjFromObj(tickerComponent, techTickerMap)} />
     

    <TickerManager key={2} name={'NewsTicker'} record={record} filteredTickers={filterObjFromObj(tickerComponent, newsTickerMap)}/>
    </div>
       }
    
        
{/*         
         <Ticker  name={'problem'} scrollTime={scrollTimeMap[`problem`]} calculateScrollTime={calculateScrollTime} handleRenderItems={()=>{return record?.problem}} />
     */}
     
          
        </div>
        <style jsx>
            {`


.test{
    display:flex;
    flex-direction: column;
    width: 100%;
}
.container{
    
    display:flex;
    flex-direction: column;
    background-color: black;
    position:relative;
    
    overflow: hidden;
    
}

                       .body {
                        width: 100%;
                        padding:5px 0px 5px 0px;
                        background-color: black;
                        display:flex;
                        justify-content: center;
                        align-items: center;
                        
                       overflow: hidden;
                       
                       
                    }


    .footer{
        display:flex;
        width:100%;
        padding:5px 0px 5px 0px;
        font-size: 26px;
        color: white;
        
        overflow: hidden;
    }

    .fixed-label{
        background-color: red;
        margin-right: 5px;
        bottom: 0;
        position: absolute;
        font-size: 26px;

    }


                  
        
        `}
        </style>
        </div>
    )
}


export default TechStack