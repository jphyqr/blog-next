
import React from 'react'
import Modal from "./Modal"
import RegisterForm from '../forms/RegisterForm'


  const RegisterModal = () =>{

          const registerForm = <RegisterForm/>

    return (

        <Modal content={registerForm} />
    )
}


export default RegisterModal