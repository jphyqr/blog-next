import React, { useRef, useEffect } from 'react'

const Ticker = ({name, calculateScrollTime, scrollTime, handleRenderItems, cardMap}) =>{
const scrollItemRef = useRef(null)


useEffect(()=>{
    console.log({scrollItemRef})
 calculateScrollTime(scrollItemRef?.current, name)
})


   
}


export default Ticker