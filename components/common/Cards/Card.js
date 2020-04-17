


import React from 'react'

const Card = ({key, heading, body, color}) => {


    return (
        <div className='card' key={key}>
                
        <div className='heading'>{heading}</div>
       
 

   <div className='body' >
     
     {body}
   </div>


  

 



 <style jsx>{`

.card{

display: flex;
border: 2px solid ${color};  
align-items: stretch;
padding: 1px;
border-radius: 3px;
margin-right: 10px;
font-size: 18px;
justify-content:space-around;


}
.heading{    

width: 100%;
background-color: ${color};
color: white;
text-align: center;
text-transform: uppercase;
white-space: nowrap;
font-weight: lighter;

}

.body{
white-space: nowrap;
font-weight: bolder;
padding: 0 0 5px 5px;
color: white;
}
`}</style>     
 </div>  
    )
}


//Card

//FancyCard returns Card + stuff

export default Card