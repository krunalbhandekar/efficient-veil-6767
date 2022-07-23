import axios from "axios"
import { GET_PRODUCTS_FAILURE, GET_PRODUCTS_REQUEST, GET_PRODUCTS_SUCCESS } from "./actionTypes"


export const getProductRequest=()=>{
    return {
        type:GET_PRODUCTS_REQUEST
    }
}

export const getProductSuccess=(payload)=>{
    return {
        type:GET_PRODUCTS_SUCCESS,
        payload
    }
}

export const getProductFailure=()=>{
    return {
        type:GET_PRODUCTS_FAILURE
    }
}
export const getProducts=(category)=>(dispatch)=>{
    dispatch(getProductRequest())
    axios({
        method:"GET",
        url:"http://localhost:8080/prod"
    }).then((res)=>dispatch(getProductSuccess(res.data.filter((elem)=>elem.category===category)))).catch((err)=>dispatch(getProductFailure()))
}

export const getSingleProducts=(id)=>(dispatch)=>{
    dispatch(getProductRequest())
    axios({
        method:"GET",
        url:"http://localhost:8080/prod"
    }).then((res)=>dispatch(getProductSuccess(res.data.find((elem)=>elem.id===id)))).catch((err)=>dispatch(getProductFailure()))
}

