


import React from 'react'

const Card = ({key, heading, body, color}) => {


    return (
        <div className='card' key={key}>
                
        <label className='heading'>{heading}</label>
       
 
 <div> 
   <label className='body' >
     
     {body}
   </label>
 </div>

  

 



 <style jsx>{`

.card{

display: flex;
flex-direction: column;
margin-right: 10px;
border-radius: 5px;
padding: 5px; 
background-color: ${color};      

}
.heading{    

width: 100%;
text-align: center;
text-transform: uppercase;
white-space: nowrap;
}

.body{
font-style: italic; 
white-space: nowrap;
}
`}</style>     
 </div>  
    )
}


//Card

//FancyCard returns Card + stuff

export default Card