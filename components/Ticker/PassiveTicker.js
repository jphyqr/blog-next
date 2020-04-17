import React, { useRef, useEffect, useState } from 'react'


const PassiveTicker = ({ name, color, widgetHeight, height, scrollTime, calculateScrollTime, renderScrollItems}) => {
    const scrollItemRef = useRef(null)


      const tickerHeight = parseFloat(height/100)*parseInt(widgetHeight);
 console.log(`tickerHeight for ${name}`, tickerHeight)
       const [forceRerender, takeOff] = useState(false)
 




    useEffect(()=>{
     calculateScrollTime(scrollItemRef?.current, name)
    }, [scrollItemRef?.current?.offsetWidth])




    return (
        <div className='horizontal-scroll'>
        <div className='scroll-item' ref={scrollItemRef} >{renderScrollItems()}</div>
     
          
        <style jsx>
            {`
                  .horizontal-scroll{
                      
                    
                    display:flex;
                    height: ${tickerHeight}px;	
                    width: auto;
                   position: relative;
                   opacity: 1;
                   animation: fade 3s linear;
                   background-color:${color};
                    z-index: 10;

                }

                

                .scroll-item{
                    display:flex;
                    width: 100%;
                    align-items: center;
                    justify-content:center;
                    
                    text-align: center;
                    font-size: 2em;
                    color: white;
                    position: absolute;
                    height: ${tickerHeight}px;	
                   
                    margin: 0;
                    white-space: nowrap;
                    text-align: center;
                    /* Starting position */
                    -moz-transform:translateX(0%);
                    -webkit-transform:translateX(0%);	
                    transform:translateX(0%);
                    /* Apply animation to this element */	
          
                    

                }

            

                @-moz-keyframes example1 {
                    0%   { -moz-transform: translateX(0%); }
                    10%   { -moz-transform: translateX(0%); }
                    100% { -moz-transform: translateX(-130%); }
                   }
                   @-webkit-keyframes example1 {
                    0%   { -webkit-transform: translateX(0%); }
                    10%   { -webkit-transform: translateX(0%); }
                    100% { -webkit-transform: translateX(-130%); }
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
                    -moz-transform: translateX(-130%); /* Firefox bug fix */
                    -webkit-transform: translateX(-130%); /* Firefox bug fix */
                    transform: translateX(-130%); 
                    opacity: .9;
                    }
            
            `}
        </style>
        </div>
    )


}

export default PassiveTicker