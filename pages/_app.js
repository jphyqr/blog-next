import withRedux from "next-redux-wrapper";
import { Provider } from "react-redux";
import { initializeStore } from "../config/store";
import firebase from "../firebase";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { createFirestoreInstance } from "redux-firestore";
import App from "next/app";

function MyApp({ Component, pageProps, store, ...otherProps }) {
  const rrfConfig = {
    userProfile: "users",
    useFirestoreForProfile: true, // Firestore for Profile instead of Realtime DB
  };

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance, // <- needed if using firestore
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Component {...otherProps} {...pageProps} />
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext);
  console.log({ appProps });
  return { ...appProps };
};

export default withRedux(initializeStore)(MyApp);
