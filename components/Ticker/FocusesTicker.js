import React, { useRef, useEffect, useState } from 'react'

import Card from '../common/Cards/Card'
import Ticker from './Ticker'
import { themeColors } from '../../utils/helpers'


const FocusesTicker = ({record, ...props}) => {

    const renderFocuses = () =>{
        //return one scroll item, which has all the cards
            //build up a new array from our others
            const {focus, not_a_focus} = record || []
             
            let allCards = [];
           
     
            focus?.forEach((f,i)=>{
               allCards.push({
                   value:f,
                   label: `Focus#${i+1}`,
                   color: themeColors.Grey
               })
            })
        
       
            not_a_focus?.forEach(f=>{
                allCards.push({
                    label:'Not a Focus',
                    value:f,
                    style:"block-negative",
                    color: themeColors.Grey,
                    inverted:true,
                    dimmed:true
                })
             })
        
                return allCards.map((item, i)=>{
                    return(
                    <Card key={i} dimmed={item.dimmed} inverted={item.inverted}  color={item.color} body={item.value} heading={item.label} />
           
                    )
                   })     
        
               
           }
        
        

    return <Ticker renderScrollItems={renderFocuses} {...props} />


}

export default FocusesTicker