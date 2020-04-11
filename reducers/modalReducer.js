


//REDUCERS AER PURE FUNCTIONS

import { SET_MODAL } from "../constants/reducerConstants"

//expor because we are going to combine in combineReducers
export const modalReducer = (state={}, action) => {
    switch(action.type){
        case SET_MODAL : 
        return action.payload
        default: return state
    }
}