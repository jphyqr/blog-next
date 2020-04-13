
import withRedux from 'next-redux-wrapper';
import { Provider } from 'react-redux';
import { initializeStore } from '../config/store';
import firebase from '../firebase'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
function MyApp({ Component, pageProps, store, ...rest }) {


    const rrfConfig = {
        userProfile: 'users',
        useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
      }

    const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
         createFirestoreInstance // <- needed if using firestore
      }

    return (
        <Provider store={store}>
              <ReactReduxFirebaseProvider {...rrfProps}>
            <Component {...pageProps} />
            </ReactReduxFirebaseProvider>
        </Provider>
    );
}


export default withRedux(initializeStore)(MyApp);