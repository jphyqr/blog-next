import React, { useState, useEffect } from 'react'
import { techTickerMap } from '../../utils/helpers';

import _ from 'lodash'

const TickerManager = ({record, filteredTickers}) => {

    const [currentTickerName, setCurrentTickerName] = useState({})
    const [scrollTimeMap, updateScrollTimeMap] = useState({})

 

const getNextPropertyOfObject = (obj, currentKey) =>{
    let nextProperty = {}
    nextProperty=   Object.keys(obj)[0]
    Object.keys(obj).map((key,i)=>{
        if(key==currentKey){
           if(i==Object.keys(obj).length-1)
            nextProperty=   Object.keys(obj)[0]
            else
            nextProperty=   Object.keys(obj)[i+1]
        }
    })


    return nextProperty;
}


    const renderTicker = () =>{
 
   let ShowTicker;
   if(!_.isEmpty(currentTickerName)){ 
          console.log({filteredTickers})
          console.log({currentTickerName})
     ShowTicker = filteredTickers[`${currentTickerName}`]
     console.log({ShowTicker})
     if(typeof(ShowTicker)!='undefined')
     return <ShowTicker 
     record={record}
     name={currentTickerName}
     scrollTime={scrollTimeMap[`${currentTickerName}`]}
      calculateScrollTime={calculateScrollTime}
     
     />
      }

  
 
   

 
     return <div></div>
   
    
   }
 









    useEffect(()=>{
        const delay = scrollTimeMap[`${currentTickerName}`]*1000 || 5000
            
        const timer = setTimeout(() => {
         
           setCurrentTickerName(getNextPropertyOfObject(filteredTickers, currentTickerName))
        
        
          }, delay);
          
    
       },[currentTickerName])
    


    const calculateScrollTime = (currentRef, tickerName) =>{

  console.log('calculate scroll time', currentRef)
  console.log('calculate scroll time name', tickerName)
  
        const updatedMap = scrollTimeMap;
        updatedMap[`${tickerName}`] = currentRef.offsetWidth/200
        updateScrollTimeMap(updatedMap)
    
    }



return (<div className='TickerManager'>

  

{renderTicker()}





<style jsx>
{`
.TickerManager{
height:auto;
width:auto;
}
`}
</style>
</div>)


}

export default TickerManager