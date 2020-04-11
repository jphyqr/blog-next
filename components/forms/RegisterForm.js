
import React, { useCallback } from 'react'
import { useFirestore, useFirebase } from 'react-redux-firebase';
import { sendEmailLink } from '../../actions/authActions';

const RegisterForm = () =>{

const firebase = useFirebase()

    const handleLogin = useCallback(
        async email => {
          console.log("handeLogin", email);
          await sendEmailLink({firebase}, email, '/');
      //    toggleForm(false);
        },
        []
      );

const handleSubmit = (e, values) =>{
e.preventDefault()
    console.log('handleSubmit', e.target.email.value)
   handleLogin(e.target.email.value)


}

    return (
        <form onSubmit={handleSubmit}>
            <h3>Register Form</h3>
            <input type='text' id='email'/>
            <button type='submit'>Send Link</button>
        </form>
    )
}



export default RegisterForm