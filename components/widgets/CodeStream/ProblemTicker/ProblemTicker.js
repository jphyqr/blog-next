import React, { useRef, useEffect } from 'react'

import PassiveTicker from '../../components/PassiveTicker'




const ProblemTicker = ({record, ...props}) => {
 

    const renderScrollItems = () =>{
       
        return (<span className='scroll-text'><span className='label'>Next Problem: </span><span className='body'>{record?.problem}</span>
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

export default ProblemTicker