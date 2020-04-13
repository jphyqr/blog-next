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


class MyApp extends App {



    
  static async getInitialProps({Component, ctx}) {
    //Preload from the server side
   
    return {
      pageProps: {
        ...(Component.getInitialProps ? await 
          Component.getInitialProps(ctx) : {})
      }
    }
  }
  render() {
    const { Component, pageProps, store } = this.props;
    
   // const store = getOrInitializeStore(initialReduxState)
   
    const rrfProps = {
      firebase,
      config: rrfConfig,
      dispatch: store.dispatch,
       createFirestoreInstance // <- needed if using firestore
    }
    
    return (
      <Provider store={store}>
        <div>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Component {...pageProps} />
          </ReactReduxFirebaseProvider>
        </div>
      </Provider>
    );
  }
}
export default withRedux(initializeStore)(MyApp);