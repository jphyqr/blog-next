import React from 'react'
const env = 'undefined' !== process ? process.env.test : null


console.log('process.env.test', process)
const Course = () => {
    return (
        <div>
          I am a  new course  
          {process.env.test||'No key'}
        </div>
    )
}

export default Course
