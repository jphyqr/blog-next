


export const sendEmailLink = async ({firebase}, email, redirectPath) =>{

    console.log('SEND EMAIL LINK')
    //WHERE WE DO THE HEAVY LIFTING
try{
    const actionCodeSettings = {
        // Your redirect URL
        url: `http://localhost:3000/passwordlessSignin?${redirectPath}`,
        handleCodeInApp: true
      };

      await firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function() {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch(function(error) {});  
    
    
    } catch (error) {
   
        console.log(error);
       
  }
    

}