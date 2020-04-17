import React, { useRef, useEffect } from 'react'
import { techStackWidgetMap } from '../../utils/helpers'
import Card from '../common/Cards/Card'
import Ticker from './Ticker'


const TechStackTicker = ({record, ...props}) => {

    const renderCards = () =>{
     
        return Object.keys(techStackWidgetMap).map((field,i)=>{
            console.log({field})
            return(
    
                <Card key={i} color={'green'}  heading={field} body={record[`${field}`]} />
 
    
            )
        })
    }



    return <Ticker renderScrollItems={renderCards} {...props} />


}

export default TechStackTicker