


import React from 'react'
import _ from 'lodash'
const Card = ({key, dimmed, inverted, heading, body, color}) => {


    return (
        <div className='card' key={key}>
                
      <div className='heading'>{heading}</div>
       
 

      {!_.isEmpty(heading)&&  <div className='body' >
     
     {body}
   </div>

}

  

 



 <style jsx>{`

.card{

display: flex;
border: 2px solid ${color};  
align-items: center;
border-radius: 3px;
margin-right: 10px;
font-size: 24px;
justify-content:space-around;
opacity: ${dimmed? 0.7: 1};


}
.heading{    

width: 100%;
background-color:  ${ inverted ? "white" : color};
color: ${inverted? "black" : "black"};
text-align: center;
text-transform: uppercase;
padding: 0 5px;
white-space: nowrap;
font-weight: lighter;

}

.body{
white-space: nowrap;
font-weight: bolder;
padding: 0 5px;
color: white;
}
`}</style>     
 </div>  
    )
}


//Card

//FancyCard returns Card + stuff

export default Card