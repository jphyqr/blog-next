import { combineReducers } from "redux";
import { videoReducer } from "./videoReducer";
import { authReducer } from "./authReducer";
import { modalReducer } from "./modalReducer";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";
import { scrollItemReducer } from "./scrollItemReducer";
import { avatarMatchReducer } from "./avatarMatchReducer";

const rootReducer = combineReducers({
  video: videoReducer,
  auth: authReducer,
  modal: modalReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  scrollItem: scrollItemReducer,
  avatarMatch: avatarMatchReducer,
});

export default rootReducer;
