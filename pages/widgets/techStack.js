import React from 'react'


const TechStack = () =>{

    return(
        <div className='container'>
<div className='card'>
   
       <label className='label'>DB</label>
       <text>Firestore</text>
 
</div>

<div className='card'>
  
       <label className='label'>Server</label>
       <text>Google Cloud Functions</text>
    
</div>

<div className='card'>
  
       <label className='label'>UI</label>
       <text>React (Next.js)</text>
   
</div>

    <style jsx>{`
     .container {
         height: 200px;
         width: 600px;
         background-color: gainsboro;
         display:flex;
         flex-wrap: wrap;
         justify-content: space-around;
     }
     .card{
         background-color:green;
         max-height:200px;
         display: flex;
         flex-direction: column;
         
     }
     .label{    
         background-color: yellow;
         width: 100%;
         text-align: center;
     }
    `}</style>
</div>
    ) 

}




export default TechStack