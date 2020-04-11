import { LOGIN, LOGOUT } from "../constants/reducerConstants";



export const authReducer = (state={}, action) =>{

 switch(action.type){
     case LOGIN:
         return Object.assign({}, state, {
             auth: true,
             user: action.payload
         })
         case LOGOUT:
            return Object.assign({}, state, {
                auth: false,
                user: {}
            })    
            default:
                return state
 }   

}