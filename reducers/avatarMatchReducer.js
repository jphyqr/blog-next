//REDUCERS AER PURE FUNCTIONS

import { SET_AVATAR_MATCH } from "../constants/reducerConstants";

//expor because we are going to combine in combineReducers
export const avatarMatchReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_AVATAR_MATCH:
      return action.payload;
    default:
      return state;
  }
};
