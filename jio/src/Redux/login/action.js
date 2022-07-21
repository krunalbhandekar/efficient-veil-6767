import * as types from "./action.types"
import axios from "axios"

export const loginPhone=(otp)=>dispatch=>{
    
    dispatch({type:types.LOGIN_REQUEST})
    dispatch({type:types.LOGIN_SUCCESS})
    dispatch({type:types.LOGIN_FAILURE})

}