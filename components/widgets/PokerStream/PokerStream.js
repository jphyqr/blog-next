import React, { useMemo, useState, useEffect } from 'react'
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import firebase from '../../../firebase'
import { techTickerMap,highPriorityTickerMap, newsTickerMap, tickerSpeeds, tickerManagerHeights, widgetHeights, themeColors, titleTickerMap, mainTickerMap, footerTickerMap } from '../../../utils/helpers';


import ProfileTicker from '../../Ticker/ProfileTicker';
import ScheduleTicker from '../../Ticker/ScheduleTicker';
import TournamentTicker from './tickers/TournamentTicker';
import TitleTicker from '../../Ticker/TitleTicker';
import SponsorTicker from './tickers/SponsorTicker';
import TickerManager from '../../Ticker/TickerManager';



const PokerStream = ({id, widget}) =>{




     const widgetHeight=widgetHeights.Medium;

    let tickerComponent = {};
  
    tickerComponent[mainTickerMap.TournamentTicker] = TournamentTicker;
    
    // tickerComponent[highPriorityTickerMap.TitleTicker] = TitleTicker
    // tickerComponent[highPriorityTickerMap.ProblemTicker] = ProblemTicker;
    // tickerComponent[highPriorityTickerMap.TeachingTicker] = TeachingTicker;
    // tickerComponent[highPriorityTickerMap.LearningTicker] = LearningTicker;
     tickerComponent[footerTickerMap.ProfileTicker] = ProfileTicker
    tickerComponent[footerTickerMap.ScheduleTicker] = ScheduleTicker


    tickerComponent[titleTickerMap.TitleTicker] = TitleTicker
    tickerComponent[titleTickerMap.SponsorTicker] = SponsorTicker

 










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
  


 const filterObjFromObj = (original, filter) =>{


let filtered = {}

Object.keys(original).map(key=>{
     if(filter.hasOwnProperty(key)){
        filtered[`${key}`] = original[`${key}`]
     }
      
 })


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
           <TickerManager widgetHeight={widgetHeight} color={themeColors.Secondary} height={tickerManagerHeights.Third} key={0} speed={tickerSpeeds.Fixed15}   name={'TitleTicker'} record={record} filteredTickers={filterObjFromObj(tickerComponent, titleTickerMap)} />
     
       <TickerManager widgetHeight={widgetHeight} color={themeColors.Background} height={tickerManagerHeights.Third} key={1} speed={tickerSpeeds.Slow} name={'MainTicker'} autoScroll record={record} filteredTickers={filterObjFromObj(tickerComponent, mainTickerMap)} />
     

    <TickerManager widgetHeight={widgetHeight} color={themeColors.Background} height={tickerManagerHeights.Third} key={2} speed={tickerSpeeds.Fixed20} name={'FooterTicker'} autoScroll record={record} filteredTickers={filterObjFromObj(tickerComponent, footerTickerMap)}/>
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
    border: 2px solid ${themeColors.Secondary};
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

.fade-to-black-left{

   
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


export default PokerStream