import React, { useRef, useEffect } from 'react'
import Ticker from './Ticker'
import PassiveTicker from './PassiveTicker'



const ProfileTicker = ({record, ...props}) => {

    const renderScrollItems = () =>{
       
        const {author, twitter, github} = record || {}

     return (<span className='scroll-text'>{`Author: ${author} ${twitter? `| twitter: ${twitter}`   : "" } ${github? ` | github: ${github}`:``}`} 
        <style jsx>
        {`
        .scroll-text{
            font-size: 18px;
            font-weight: bold;
        }
        `}
    </style>
     
     
     </span>)
         
                
            }


    return <PassiveTicker renderScrollItems={renderScrollItems} {...props} />


}

export default ProfileTicker



