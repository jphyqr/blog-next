import React, { useRef, useEffect } from 'react'

import PassiveTicker from '../../components/PassiveTicker'



const LearningTicker = ({record, ...props}) => {
 

    const renderScrollItems = () =>{
       
        return (<span className='scroll-text'><span className='label'>Learning: </span><span className='body'>{record?.learning}</span>
        <style jsx>
            {`
            .scroll-text{
                font-size: 20px;
             
              
            }
            
            .label{

                text-transform:uppercase;
            }
    
            .body{
                font-style: italic;
            }
            `}
        </style>
    </span>)
        
               
           }
        
        




           return <PassiveTicker renderScrollItems={renderScrollItems} {...props} />




}

export default LearningTicker