import React, { useRef, useEffect } from 'react'

import PassiveTicker from '../../components/PassiveTicker'



const TitleTicker = ({record, ...props}) => {
 

    const renderScrollItems = () =>{
       
    return (<span className='scroll-text'>{`${record?.courseTitle}`}
    <style jsx>
        {`
        .scroll-text{
            font-size: 26px;
            font-weight: bold;
            text-transform:uppercase;
        }
        `}
    </style>
    </span>)
        
               
           }
        
        




           return <PassiveTicker renderScrollItems={renderScrollItems} {...props} />




}

export default TitleTicker