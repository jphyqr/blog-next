
import React from 'react'
import Modal from "./Modal"
import PasswordForm from "../forms/PasswordForm"

  const Password = () =>{

          const passwordForm = <PasswordForm/>

    return (

        <Modal content={passwordForm} />
    )
}


export default Password