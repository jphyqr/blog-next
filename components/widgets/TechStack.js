import React, { useMemo, useState, useEffect } from 'react'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import firebase from '../../firebase'
import { techTickerMap,highPriorityTickerMap, newsTickerMap, tickerSpeeds, tickerManagerHeights, widgetHeights, themeColors } from '../../utils/helpers';

import TickerManager from '../Ticker/TickerManager';
import FocusesTicker from '../Ticker/FocusesTicker';
import TechStackTicker from '../Ticker/TeckStackTicker';
import ProblemTicker from '../Ticker/ProblemTicker';
import ProfileTicker from '../Ticker/ProfileTicker';
import ScheduleTicker from '../Ticker/ScheduleTicker';


const TechStack = ({id, widget}) =>{


console.log({highPriorityTickerMap})


     const widgetHeight=widgetHeights.Medium;

    let tickerComponent = {};
  
    tickerComponent[techTickerMap.FocusesTicker] = FocusesTicker;
    tickerComponent[techTickerMap.TechStackTicker] = TechStackTicker;
    tickerComponent[highPriorityTickerMap.ProblemTicker] = ProblemTicker;
    tickerComponent[newsTickerMap.ProfileTicker] = ProfileTicker
    tickerComponent[newsTickerMap.ScheduleTicker] = ScheduleTicker
 











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

 console.log(`after filter of ${Object.keys(filter)[0]} from ${original}`, filtered)

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

       {!loadingRecord && !_.isEmpty(record)&&(
       <div className='compound-row'>

        <div className='logo-square'>
          <img  className='logo' src={'/File.jpg'}/>
            </div>
       <div className='ticker-column'>
           <div className='fade-to-black-left'/>
           <div className='fade-to-black-right'/>
           <TickerManager widgetHeight={widgetHeight} color={themeColors.Negative} height={tickerManagerHeights.Third} key={0} speed={tickerSpeeds.Crawl}   name={'HighPriorityStaticTicker'} record={record} filteredTickers={filterObjFromObj(tickerComponent, highPriorityTickerMap)} />
     
       <TickerManager widgetHeight={widgetHeight} color={themeColors.Background} height={tickerManagerHeights.Third} key={1} speed={tickerSpeeds.Slow} name={'TechTicker'} autoScroll record={record} filteredTickers={filterObjFromObj(tickerComponent, techTickerMap)} />
     

    <TickerManager widgetHeight={widgetHeight} color={themeColors.Background} height={tickerManagerHeights.Third} key={2} speed={tickerSpeeds.Medium} name={'NewsTicker'} autoScroll record={record} filteredTickers={filterObjFromObj(tickerComponent, newsTickerMap)}/>
    </div>
     </div>
    )
       }
    
        
{/*         
         <Ticker  name={'problem'} scrollTime={scrollTimeMap[`problem`]} calculateScrollTime={calculateScrollTime} handleRenderItems={()=>{return record?.problem}} />
     */}
     
          
        </div>
        <style jsx>
            {`

.compound-row{
    display:flex;
    width:100%;
    
}


.logo{
    height:100%;
    width: 100%;
}

.logo-square{
    display:flex;
    align-items: center;
    justify-content:center;
    height:100%;
    width:${widgetHeight}px;
    background-color: grey;
    border: 2px solid red;
    box-sizing: border-box;
}

.ticker-column{
    display:flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    height:100%;
    overflow: hidden;
    position:relative;

}

.fade-to-blac-left{

   
      height:  ${widgetHeight}px;
      position: absolute;
      width: ${widgetHeight}px;
      left: 0px;
         max-width:25%;
      background-image: linear-gradient(to left, rgba(255,255,255, 0) 0%, rgba(0,0,0, 1) 100%);
     z-index: 5;
 



}


.fade-to-black-right{

   
    height:  ${widgetHeight}px;
    position: absolute;
    width: ${widgetHeight/1.5}px;
    right: 0px;
       max-width:25%;
    background-image: linear-gradient(to right, rgba(255,255,255, 0) 0%, rgba(0,0,0, 1) 100%);
   z-index: 15;




}

.container{
    
    display:flex;
    background-color: black;
    position:relative;
    height:${widgetHeight}px;
    
    
    
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