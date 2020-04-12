import React from 'react'

const Course = () => {
    return (
        <div>
          I am a  new course  
          {process.env.test||'No key'}
        </div>
    )
}

export default Course
