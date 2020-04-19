import React, { useState, useRef, useEffect } from 'react'
import { themeColors } from '../layout/themeConstants'


const EditableString = ({value, onBlur, isSelected, index, selectIndex}) => {
    const [_value, setValue] = useState(value)
 
    const handleOnChange = (e) =>{
        console.log('setValue', e.target.value) 
        setValue(e.target.value)
   
    }

const inputRef = useRef(null)

useEffect(()=>{
console.log('ref changed to', inputRef.current)
inputRef?.current?.focus()
}, [inputRef?.current?.focus])

return (<div  onKeyPress={e=>e.key==='Enter'&&onBlur(_value)}  className='container'>

{isSelected ? 
   
<input
 autoFocus
 id={index}
 type='text'
 value={_value}
 
 onBlur={()=>onBlur(_value)} 
 onChange={e=>handleOnChange(e)}// setValue(e.target.value)}
></input>

:

<div> 
<span onDoubleClick={() => selectIndex(index)}>
 {_value}
</span>
</div>
}




<style jsx>
{`
.container{
  background-color: ${themeColors.Secondary};
  padding: 5px;
  border: ${isSelected? '3px solid red' : '0px solid red'};
 
  border-radius: 5px;
  height: auto;
  width: auto;
  color: white;
  margin-right: 10px;
}
`}
</style>
</div>)


}

export default EditableString