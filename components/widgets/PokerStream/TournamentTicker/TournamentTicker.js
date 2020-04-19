import React, { useRef, useEffect, useState } from 'react'

import Card from '../../../common/Cards/Card'
import Ticker from '../../components/Ticker'
import { themeColors } from '../../../layout/themeConstants'

const TournamentTicker = ({record, ...props}) => {

    const renderFocuses = () =>{
        //return one scroll item, which has all the cards
            //build up a new array from our others
            const {tournaments} = record || {}
             
            let allCards = [];
           

            
     
            tournaments&&Object.keys(tournaments).map((f,i)=>{
               allCards.push({
                   value:f,
                   label: `Tournament#${i+1}`,
                   color: themeColors.Grey
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

export default TournamentTicker