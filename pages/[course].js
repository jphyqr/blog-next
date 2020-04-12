import React from 'react'


console.log('process.env.test', process.env.test)
const Course = () => {
    return (
        <div>
          I am a  new course  
          {process.env.test||'No key'}
        </div>
    )
}

export default Course
