
import {withRedux} from '../lib/redux';
import { Provider } from 'react-redux';
import { initializeStore } from '../config/store';
import firebase from '../firebase'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
function MyApp({ Component,  store, ...rest }) {


    // const rrfConfig = {
    //     userProfile: 'users',
    //     useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
    //   }

    // const rrfProps = {
    //     firebase,
    //     config: rrfConfig,
    //     dispatch: store.dispatch,
    //      createFirestoreInstance // <- needed if using firestore
    //   }

    return (
      
            <Component {...rest} />
         
    );
}


export default withRedux(MyApp);