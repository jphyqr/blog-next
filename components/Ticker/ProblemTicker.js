import React, { useRef, useEffect } from 'react'

import Card from '../common/Cards/Card'


const ProblemTicker = ({record, name, scrollTime, calculateScrollTime}) => {
    const scrollItemRef = useRef(null)
  

    console.log('Focuses  Ticker name', name)

    const renderFocuses = () =>{
        //return one scroll item, which has all the cards
            //build up a new array from our others
            const {focus, not_a_focus} = record || []
             
            let allCards = [];
           
            allCards.push({
                label:'Focus',
                value:"Focuses",
                style:"title-positive"
            })
        
            focus?.forEach(f=>{
               allCards.push({
                   value:f,
                   label:'Focus',
                   style:"block-positive"
               })
            })
        
            allCards.push({
                value:"Not a Focus",
                label:'Not a Focus',
                style:"title-negative"
            })
        
            not_a_focus?.forEach(f=>{
                allCards.push({
                    label:'Not a Focus',
                    value:f,
                    style:"block-negative"
                })
             })
        
                return allCards.map((item, i)=>{
                    return(
                    <Card key={i} color={'red'} body={item.value} heading={item.label} />
           
                    )
                   })     
        
               
           }
        
        



    useEffect(()=>{
        console.log('useEffect ProblemTicker' , scrollItemRef)
     calculateScrollTime(scrollItemRef?.current, name)
    })

    return (
        <div className='horizontal-scroll'>
        <span className='scroll-item' ref={scrollItemRef} >{renderFocuses()}</span>
     
          
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

export default ProblemTicker