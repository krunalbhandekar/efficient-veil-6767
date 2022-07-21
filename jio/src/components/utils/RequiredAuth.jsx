import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'


const RequiredAuth = ({children}) => {
    let location=useLocation()
    let isAuth =useSelector((state)=>state.log.isAuth)

     if(isAuth){
        return children
     }else{
         return <Navigate to="/login" state={{from:location}}/>
     }


}

export default RequiredAuth