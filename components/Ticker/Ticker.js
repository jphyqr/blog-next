import React, { useRef, useEffect, useState } from 'react'


const Ticker = ({ name, color, widgetHeight, height, scrollTime, calculateScrollTime, renderScrollItems}) => {
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
                      font-family: arial;
                      
                    transform:translateX(0%);
                    display:flex;
                    height: ${tickerHeight}px;	
                    width: auto;
                   position: relative;
                   opacity: 1;
                   animation: fade 3s linear;
                   background-color:${color};
                    

                }

                

                .scroll-item{
                    display:flex;
                    align-items: center;
                    justify-content: center;
                    width:100%;
                    font-size: 2em;
                    color: white;
                    position: absolute;
                    height: ${tickerHeight}px;	
                    margin: 0;
                    white-space: nowrap;
                    text-align: center;
                    /* Starting position */
                    -moz-transform:translateX(100%);
                    -webkit-transform:translateX(100%);	
                    transform:translateX(100%);
                    /* Apply animation to this element */	
                    -moz-animation:  example1 ${scrollTime}s linear infinite ;
                    -webkit-animation: example1 ${scrollTime}s linear infinite;
                    animation:   example1 ${scrollTime}s linear infinite;
                    

                }

            

                @-moz-keyframes example1 {
                    0%   { -moz-transform: translateX(100%); }
              
                    100% { -moz-transform: translateX(-150%); }
                   }
                   @-webkit-keyframes example1 {
                    0%   { -moz-transform: translateX(100%); }
                 
                    100% { -moz-transform: translateX(-150%); }
                   }
                   @keyframes example1 {
                    0%   { 
                    -moz-transform: translateX(100%); /* Firefox bug fix */
                    -webkit-transform: translateX(100%); /* Firefox bug fix */
                    transform: translateX(100%); 	
                 	
                    }
               
                    100% { 
                    -moz-transform: translateX(0%); /* Firefox bug fix */
                    -webkit-transform: translateX(0%); /* Firefox bug fix */
                    transform: translateX(-150%); 
                 
                    }
            
            `}
        </style>
        </div>
    )


}

export default Ticker