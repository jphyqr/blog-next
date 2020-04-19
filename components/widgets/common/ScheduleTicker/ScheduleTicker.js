import React, { useRef, useEffect, useState } from 'react'

import Card from '../../../common/Cards/Card'

import { themeColors } from '../../../layout/themeConstants'
import PassiveTicker from '../../components/PassiveTicker'


const ScheduleTicker = ({record, ...props}) => {

    const renderFocuses = () =>{
        //return one scroll item, which has all the cards
            //build up a new array from our others
            const {schedule} = record || []
             
            let allCards = [];
           

            allCards.push({
                label:"Schedule",
                value: ":",
                color: themeColors.Secondary
            })
     
            schedule.forEach(f=>{
               allCards.push({
                   value:f.time,
                   label:f.day,
                   color: themeColors.Secondary
               })
            })
        
       
     
        
                return allCards.map((item, i)=>{
                    return(
                    <Card key={i} color={item.color} body={item.value} heading={item.label} />
           
                    )
                   })     
        
               
           }
        
        

    return <PassiveTicker renderScrollItems={renderFocuses} {...props} />


}

export default ScheduleTicker