import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes";


const initState={
    products:[],
    isLoading:false,
    isError:false
}

export const reducer=(state=initState,action)=>{
    const {type,payload}=action;

    switch(type)
    {
        case GET_PRODUCTS_REQUEST:
            return {
                products:[],
                isLoading:true,
                isError:false
            }
            case GET_PRODUCTS_SUCCESS:
                return {
                    products:payload,
                    isLoading:false,
                    isError:false,
                }
            case GET_PRODUCTS_FAILURE:
                return {
                    isLoading:false,
                    isError:true,
                }   
            default:
                return state
    }
}