import { SELECT_VIDEO } from "../constants/reducerConstants"

export const videoReducer = (state={}, action) =>{
    //only doing one thing... setting video... many things -> switch statement
    switch(action.type){
        case SELECT_VIDEO :
            return Object.assign({}, state, {
                video: action.payload
            } )  
        default:
               return state

    }

}