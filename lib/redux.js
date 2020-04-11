import React from 'react'
import {Provider} from 'react-redux'
import { initializeStore } from '../config/store'
import App from 'next/app'
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {createFirestoreInstance} from 'redux-firestore'
import firebase from '../firebase'

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
}

export const withRedux = (PageComponent, {ssr=true}={}) => {
   //a function that wraps our child and we return it with the above withRedux
   const WithRedux = ({initialReduxState, ...props}) =>{
      const store = getOrInitializeStore(initialReduxState)
      const rrfProps = {
        firebase,
        config: rrfConfig,
        dispatch: store.dispatch,
         createFirestoreInstance // <- needed if using firestore
      }

    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
      <PageComponent {...props}/>
      </ReactReduxFirebaseProvider>
      </Provider>
    )
   }
  

     // Make sure people don't use this HOC on _app.js level
  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc =
      PageComponent === App || PageComponent.prototype instanceof App
    if (isAppHoc) {
      throw new Error('The withRedux HOC only works with PageComponents')
    }
  }


    // Set the correct displayName in development
    if (process.env.NODE_ENV !== 'production') {
        const displayName =
          PageComponent.displayName || PageComponent.name || 'Component'
    
        WithRedux.displayName = `withRedux(${displayName})`
      }



      if (ssr || PageComponent.getInitialProps) {
        WithRedux.getInitialProps = async context => {
          // Get or Create the store with `undefined` as initialState
          // This allows you to set a custom default initialState
          const reduxStore = getOrInitializeStore()
    
          // Provide the store to getInitialProps of pages
          context.reduxStore = reduxStore
    
          // Run getInitialProps from HOCed PageComponent
          const pageProps =
            typeof PageComponent.getInitialProps === 'function'
              ? await PageComponent.getInitialProps(context)
              : {}
    
          // Pass props to PageComponent
          return {
            ...pageProps,
            initialReduxState: reduxStore.getState(),
          }
        }
      }
    


    return WithRedux

}



//SHOULD BE IN ANOTHER FILe.. some sort of configStore file.

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