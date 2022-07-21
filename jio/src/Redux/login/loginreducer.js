import * as types from "./action.types"
import { loadData,saveData } from "../../components/utils/localstorage"

const initialstate={
    isAuth: loadData("Auth") || false,
    isLoading:false,
    isError:false
}

export const Loginreducer=(state=initialstate,action)=>{
    const {type,payload}=action
    switch(type){
        case types.LOGIN_REQUEST:
            return{
                isLoading:true,isError:false
            }
        case types.LOGIN_SUCCESS:
            saveData("Auth",true)
            return{
                isAuth:true
            }
        case types.LOGIN_FAILURE:
            return{
                isAuth:false,
                isLoading:false,
                isError:true
            }
            default:
                return state
    }

}