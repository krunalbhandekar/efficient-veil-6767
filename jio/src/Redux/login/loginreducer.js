import { saveData,loadData } from "../../components/utils/localstorage"
import * as types from "./action.types"
const initialstate={
    isAuth:loadData("token") ? true : false,
    token:loadData("token") || "",
    isLoading:false,
    isError:false,
}

const Loginreducer=(state=initialstate,action)=>{
    const{type,payload}=action
    switch(type){
        case types.REGISTER_REQUEST:
            return {...state,isLoading:true}
        case types.REGISTER_SUCCESS:
            return {...state,isLoading:false}
        case types.REGISTER_FAILURE:
            return {...state,isLoading:false,isError:true}

        case types.LOGIN_REQUEST:
            return {...state,isLoading:true}
        case types.LOGIN_SUCCESS:
            saveData("token",payload)
            return {...state,isLoading:false,isAuth:true,token:payload}
        case types.LOGIN_FAILURE:
            return {...state,isLoading:false,isError:true,isAuth:false,token:""}

         case types.LOGOUT_SUCCESS:
                localStorage.removeItem("token");
                localStorage.removeItem("user");
             return {
              ...state,
                 isAuth: false,
             };    

           

        default:
            return state
    }
}

export {Loginreducer}