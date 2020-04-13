import App from 'next/app';
import { Provider } from "react-redux";
import withRedux from "next-redux-wrapper";
import { initializeStore } from '../config/store';
import  firebase from '../firebase'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }



  let reduxStore
const getOrInitializeStore = initialState => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return initializeStore(initialState)
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = initializeStore(initialState)
  }

  return reduxStore
}



// class MyApp extends App {



    
//   static async getInitialProps({Component, ctx}) {
//     //Preload from the server side

//     return {
//       pageProps: {
//         ...(Component.getInitialProps ? await 
//           Component.getInitialProps(ctx) : {})
//       }
//     }
//   }
//   render() {
//     const { Component, pageProps, store } = this.props;
//   // const store = getOrInitializeStore(initialReduxState)
   
//     const rrfProps = {
//       firebase,
//       config: rrfConfig,
//       dispatch: store.dispatch,
//        createFirestoreInstance // <- needed if using firestore
//     }
    
//     const allProps = Object.assign(pageProps, this.props)
//     console.log({allProps})
//     return (
//       <Provider store={store}>
//         <div>
//         <ReactReduxFirebaseProvider {...rrfProps}>
//           <Component {...allProps} />
//           </ReactReduxFirebaseProvider>
//         </div>
//       </Provider>
//     );
//   }
// }




function MyApp({Component,   ...props
}){
console.log('MyApp', props)

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
  }
  
  const store = getOrInitializeStore({})
    const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
       createFirestoreInstance // <- needed if using firestore
    }


    return (
        <Provider store={store} >
             <ReactReduxFirebaseProvider {...rrfProps}>
          <Component {...props} />
          </ReactReduxFirebaseProvider>
          </Provider>
 
    );
}
export default (MyApp);





