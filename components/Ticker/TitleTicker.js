import React, { useRef, useEffect } from 'react'
import Ticker from './Ticker'
import PassiveTicker from './PassiveTicker'



const TitleTicker = ({record, ...props}) => {
 

    const renderScrollItems = () =>{
       
    return (<span className='scroll-text'>{`${record?.courseTitle} [${record?.courseCaedence}]`}
    <style jsx>
        {`
        .scroll-text{
            font-size: 26px;
            font-weight: bold;
        }
        `}
    </style>
    </span>)
        
               
           }
        
        




           return <PassiveTicker renderScrollItems={renderScrollItems} {...props} />




}

export default TitleTicker