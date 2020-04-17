import React, { useRef, useEffect } from 'react'
import Ticker from './Ticker'
import PassiveTicker from './PassiveTicker'



const ProblemTicker = ({record, ...props}) => {
 

    const renderScrollItems = () =>{
       
    return (<span className='scroll-text'>Next Problem: {record?.problem}
    <style jsx>
        {`
        .scroll-text{
            font-size: 22px;
        }
        `}
    </style>
    </span>)
        
               
           }
        
        




           return <Ticker renderScrollItems={renderScrollItems} {...props} />




}

export default ProblemTicker