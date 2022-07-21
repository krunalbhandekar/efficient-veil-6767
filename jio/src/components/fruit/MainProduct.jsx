import React, { useEffect } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import {Product} from "./Product"
import {useParams} from "react-router-dom"
import { getProducts } from '../../Redux/fruit/action';


export const MainProduct = () => {
  let dispatch=useDispatch();
  let products=useSelector((state)=>state.data.products);
 

  const {category}=useParams()
  // console.log(category)
  
  useEffect(()=>{
    dispatch(getProducts(category));
  },[])

  

  return (
    <div style={{display:"grid", gridTemplateColumns:"repeat(4,1fr)",gap:"20px"}}>
      {products.map((elem)=>{
        return <div key={elem.id}><Product elem={elem}/></div>
      })}
      
    </div>
   
  )
  
}
