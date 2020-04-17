import React, { useRef, useEffect } from 'react'
import { techStackWidgetMap } from '../../utils/helpers'
import Card from '../common/Cards/Card'


const TechStackTicker = ({record, name, scrollTime, calculateScrollTime}) => {
    const scrollItemRef = useRef(null)
  

    console.log('Tech Stack Ticker name', name)

    const renderCards = () =>{
     
        return Object.keys(techStackWidgetMap).map((field,i)=>{
            console.log({field})
            return(
    
                <Card key={i} color={'green'}  heading={field} body={record[`${field}`]} />
 
    
            )
        })
    }



    useEffect(()=>{
        console.log('useEffect techsteckticker' , scrollItemRef)
     calculateScrollTime(scrollItemRef?.current, name)
    })


  

    return (
        <div className='horizontal-scroll'>
        <span className='scroll-item' ref={scrollItemRef} >{renderCards()}</span>
     
          
        <style jsx>
            {`
                  .horizontal-scroll{
                      
                    transform:translateX(20%);
                    height: 100px;	
                    width: auto;
                   position: relative;
                   opacity: 1;
                   animation: fade 3s linear;
                    

                }

                

                .scroll-item{
                    display:flex;
                    font-size: 2em;
                    color: white;
                    position: absolute;
                    width: auto;
                    height: 100%;
                    margin: 0;
                    white-space: nowrap;
                    line-height: 50px;
                    text-align: center;
                    /* Starting position */
                    -moz-transform:translateX(0%);
                    -webkit-transform:translateX(0%);	
                    transform:translateX(0%);
                    /* Apply animation to this element */	
                    -moz-animation: example1 ${scrollTime}s linear infinite ;
                    -webkit-animation: example1 ${scrollTime}s linear infinite;
                    animation: example1 ${scrollTime}s linear infinite;
                    

                }

            

                @-moz-keyframes example1 {
                    0%   { -moz-transform: translateX(0%); }
                    10%   { -moz-transform: translateX(0%); }
                    100% { -moz-transform: translateX(-200%); }
                   }
                   @-webkit-keyframes example1 {
                    0%   { -webkit-transform: translateX(0%); }
                    10%   { -webkit-transform: translateX(0%); }
                    100% { -webkit-transform: translateX(-200%); }
                   }
                   @keyframes example1 {
                    0%   { 
                    -moz-transform: translateX(0%); /* Firefox bug fix */
                    -webkit-transform: translateX(0%); /* Firefox bug fix */
                    transform: translateX(0%); 	
                    opacity: 0	
                    }
                    10%   { 
                       
                        opacity: 1
                        -moz-transform: translateX(0%); /* Firefox bug fix */
                        -webkit-transform: translateX(0%); /* Firefox bug fix */
                        transform: translateX(0%); 		
                        }
                        50%   { 
                       
                            opacity: 	1
                            }
                            90%   { 
                       
                                opacity: 	.9
                                }
                    100% { 
                    -moz-transform: translateX(-200%); /* Firefox bug fix */
                    -webkit-transform: translateX(-200%); /* Firefox bug fix */
                    transform: translateX(-200%); 
                    opacity: .9;
                    }
            
            `}
        </style>
        </div>
    )


}

export default TechStackTicker