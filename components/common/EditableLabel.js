import React, { useEffect, useState } from 'react'
import { themeColors } from '../layout/themeConstants'


const EditableLabel = ({onBlur, key, value, field, isSelected, selectField}) => {

    const [_value, setValue] = useState(value)
 
    useEffect(()=>{
       setValue(value)  
    }, [value])


    const handleOnChange = (e) =>{
        console.log('setValue', e.target.value) 
        setValue(e.target.value)
   
    }
return (

    <div className='card' key={key}>
    <label className='label'>{field}</label>
    {isSelected ? (
<div>
<input
 id={field}
 autoFocus
 type='text'
 value={_value}
 onBlur={()=>onBlur(_value)} 
 onChange={e=>handleOnChange(e)}// setValue(e.target.value)}
></input>
</div>
) : (
<div> 
<span onDoubleClick={() => selectField(field)}>
 {_value}
</span>
</div>
)}




    <style jsx>{`

  .card{
      
      display: flex;
      
  }

   .card:nth-child(odd){
     background-color:lightgrey;
   }

   input{
     width:100%;
     flex-grow: 1;
   }

  .label{    
   background-color: ${themeColors.Secondary};
      width: 150px;
    color:white;
    font-weight: bold;
    padding: 5px;
  }
 `}</style>    
</div>


)


}

export default EditableLabel