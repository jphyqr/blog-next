import React from 'react'

const Course = () => {
    return (
        <div>
          I am a  new course  
          {process.env.react_app_firebase_key||'No key'}
        </div>
    )
}

export default Course
