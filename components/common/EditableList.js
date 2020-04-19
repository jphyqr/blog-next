import React, { useState } from 'react'
import EditableLabel from './EditableLabel'
import EditableString from './EditableString'
import EditableObject from './EditableObject';


const EditableList = ({isSelected, updatedItem, label,field, selectField, list}) => {

    const [_list, updateList] = useState(list);
    const [selectedIndex, selectIndex] = useState(-1)

    const listBlurred = async (value) => {
    console.log('LIST BLURRED')
        let newState = _list;
        newState[selectedIndex] = value;
        updateList(newState);

        updatedItem(newState)
   
    
    selectIndex(-1)
 
    
    }
    
const renderItems = () =>{

const editField = {}

   return list.map((item, index) =>{
        if(typeof(item)=='string'){
            console.log('should show', item)
        return(
    
            <EditableString onBlur={listBlurred} isSelected={isSelected&&(selectedIndex==index)} selectIndex={selectIndex}  index={index}   value={item} /> 
    
        
             
         
    
       )} else          if(!Array.isArray(item)&&typeof(item)=='object'){
        console.log('is AN OBJECT', item)
          return(
  
               <EditableObject  onBlur={()=>{}}   field={field}  value={item} isSelected={field} selectField={()=>{}} /> 
    
      
          
  
        )
         }
    })

}


return (<div  onDoubleClick={()=>selectField(field)} className='wrapped-list'>

<span className='label'>{label} : </span>
{

renderItems()


}





<style jsx>
{`

.label{
    text-transform: uppercase;
    margin:right 5px;
    font-size: 24px;
}
.wrapped-list{
    display:flex;
    align-items:center;
    flex-wrap:wrap;
    background-color: grey;

}

.wrapped-list:nth-child(odd){
    background-color: yellow;
}
`}
</style>
</div>)


}

export default EditableList