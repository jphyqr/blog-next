import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'
import 'firebase/storage'
import * as keys from './config/keys'

console.log('key', keys.firebaseKey)
console.log('key', process.env.react_app_firebase_key)
console.log('key', process.env.REACT_APP_FIREBASE_KEY)
console.log('key', process.env)
const firebaseConfig = {
  apiKey: keys.firebaseKey,

  authDomain: "blog-c191f.firebaseapp.com",
  databaseURL: "https://blog-c191f.firebaseio.com",
  projectId: "blog-c191f",
  storageBucket: "blog-c191f.appspot.com",
  messagingSenderId: "438992407423",
  appId: "1:438992407423:web:657cb902838c29c469e84a"
};

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    firebase.firestore();
    firebase.storage()
    
}


  
  export default firebase;