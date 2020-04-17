import React, { useRef, useEffect } from 'react'
import { techStackWidgetMap, themeColors } from '../../utils/helpers'
import Card from '../common/Cards/Card'
import Ticker from './Ticker'


const TechStackTicker = ({record, ...props}) => {




    const renderFocuses = () =>{
        //return one scroll item, which has all the cards
            //build up a new array from our others
            const {focus, not_a_focus} = record || []
             
            let allCards = [];
            allCards.push({
                label:"Tech Stack",
                value: ":",
                color: themeColors.Positive
            })      

 Object.keys(techStackWidgetMap).map((field,i)=>{

    allCards.push({
        label:field,
        value:record[`${field}`],
        color: themeColors.Grey
    })

 })
         
        
    
      return allCards.map((item, i)=>{
                    return(
                    <Card key={i} color={item.color} body={item.value} heading={item.label} />
           
                    )
                   })     
        
               
           }
        
        




    return <Ticker renderScrollItems={renderFocuses} {...props} />


}

export default TechStackTicker