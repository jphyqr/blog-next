import React, { useState, useEffect } from 'react'
import { themeColors } from './layout/themeConstants';
import EditableLabel from './common/EditableLabel';
import EditableList from './common/EditableList';
import EditableObject from './common/EditableObject';


const DocumentEditor = ({document, updateDocument}) => {

    const [counter, incrementCounter] = useState(0) //force update on state when we update just a child of records state
    const [editField, selectField] = useState({});
    const [formData, updateFormData] = useState(document, {});

 

    useEffect(()=>{
    updateFormData(document);
    }, [document])



 
    const renderObjects = () =>{

      return document&&Object.keys(document).map((field,i)=>{
        const value = document[`${field}`]
         console.log({value})
         if(!Array.isArray(value)&&typeof(value)=='object'){
        console.log('is AN OBJECT', field)
          return(
  
              // <EditableObject  onBlur={handleInputBlur}  key={i} field={field}  value={value} isSelected={editField == field} selectField={selectField} /> 
    
          <div></div>
              
          
  
        )
         } else {
           console.log('NOT a 1:1 object', field)
           return <div></div>
         }
  
      })
  }




    const renderTextFields = () =>{

        return document&&Object.keys(document).map((field,i)=>{

           if(typeof(document[`${field}`])=='string'){
        
            return(
    
                <EditableLabel  onBlur={handleInputBlur}  key={i} field={field}  value={formData[`${field}`]} isSelected={editField == field} selectField={selectField} /> 
      
            
                
            
    
          )
           } else {
             console.log('NOT a 1:1 object', field)
             return <div></div>
           }
    
        })
    }
    


    const renderArrays = () =>{

        

        return document&&Object.keys(document).map((field,i)=>{
           const value = document[`${field}`]
            if(Array.isArray(value)){
          
              return <EditableList  updatedItem={handleInputBlur} isSelected={field==editField} selectField={selectField} field={field} label={field} list={value}/>
            } else {
              console.log('NOT a 1:1 object', field)
              return <div></div>
            }
     
         })


    }



      const handleInputBlur = async (value) => {
    
        let newState = formData;
        newState[`${editField}`] = value;
        updateFormData(newState);
         incrementCounter(counter+1);

       updateDocument(formData)
   
    
        selectField({})
 
    
    }
    
      

return (<div className='container'>
<h3>Fields</h3>
{renderTextFields()}
<hr/>
<h3>Lists</h3>
{renderArrays()}

<h3>Object Maps</h3>
{renderObjects()}
<style jsx>
{`
     .container {
        background-color: gainsboro;
        display:flex;
        flex-direction:column;
        justify-content: space-around;
    }
`}
</style>
</div>)


}

export default DocumentEditor