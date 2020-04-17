import { SET_SCROLL_ITEM_WIDTH } from "../constants/reducerConstants";



export const scrollItemReducer = (state={}, action) =>{
    switch(action.type){
        case SET_SCROLL_ITEM_WIDTH :
            return Object.assign({}, state, {
                width: action.payload
            } )  
        default:
               return state

    }

}