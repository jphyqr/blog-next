


export const sendEmailLink = async ({firebase}, email, redirectPath) =>{

    console.log('SEND EMAIL LINK')
    //WHERE WE DO THE HEAVY LIFTING
try{

  let rootOfPath;
  console.log('node env', process.env.NODE_ENV)
  if(process.env.NODE_ENV == 'production')
   rootOfPath = 'https://itworksnowwhat.com'
   else
   rootOfPath = 'http://localhost:3000'

    const actionCodeSettings = {
        // Your redirect URL

   
        url: `${rootOfPath}/passwordlessSignin?${redirectPath}`,
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