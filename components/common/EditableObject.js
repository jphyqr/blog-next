import React, { useEffect, useState } from 'react'
import { themeColors } from '../layout/themeConstants'
import EditableLabel from './EditableLabel'


const EditableObject = ({onBlur, key, value, field, isSelected, selectField}) => {

    const [_value, setValue] = useState(value)
    const [editProperty, selectProperty] = useState({});
    const [objectData, updateObject] = useState(value);
    const [counter, incrementCounter] = useState(0) //force update on state when we update just a child of records state
   
    useEffect(()=>{
       setValue(value)  
    }, [value])


    const handleOnChange = (e) =>{
        console.log('setValue', e.target.value) 
        setValue(e.target.value)
   
    }



    const handleInputBlur = async (value) => {
    
        let newState = objectData;
        newState[`${editProperty}`] = value;
        updateObject(newState);
         incrementCounter(counter+1);

      // updateDocument(formData)
   
    
        selectField({})
 
    
    }
    



     const renderProperties = () =>{
        
         return _value&&Object.keys(_value).map((f, index)=>{
           const property = value[`${f}`]
           console.log({f})
           return  <EditableLabel  onBlur={handleInputBlur}  key={index} field={f}  value={property} isSelected={editProperty == f} selectField={selectProperty} /> 

         })

     }

return (

    <div className='card' key={key}>
  

    {renderProperties()}
   




    <style jsx>{`

  .card{
      
      display: flex;
      flex-direction:column;
      
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

export default EditableObject