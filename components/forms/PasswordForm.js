
import React, { useCallback } from 'react'
import { useFirestore, useFirebase } from 'react-redux-firebase';
import { sendEmailLink } from '../../actions/authActions';
import { withRedux } from '../../lib/redux';

const PasswordForm = () =>{

const firebase = useFirebase()

    const handleSetPassword = useCallback(
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
    handleSetPassword(e.target.email.value)


}

    return (
        <form onSubmit={handleSubmit}>
            <h3>Password Form</h3>
            <input type='password' id='password'/>
            <button type='submit'>Set Password</button>
        </form>
    )
}



export default withRedux(PasswordForm)