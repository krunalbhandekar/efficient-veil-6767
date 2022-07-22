import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Product } from "./Product"
import { createSearchParams, useParams, useSearchParams } from "react-router-dom"
import { getProducts } from '../../Redux/fruit/action';

export const MainProduct = () => {
  let cart = JSON.parse(localStorage.getItem("CartData")) || []

  const [searchParams, setSearchParams] = useSearchParams()

  let SortParams = searchParams.getAll("sortby")[0]

  let dispatch = useDispatch();
  let products = useSelector((state) => state.data.products);

  let data = products

  const { category } = useParams()


  useEffect(() => {
    dispatch(getProducts(category))
  }, [category, dispatch])

  if (SortParams === "h2l") {
    data = data.sort((a, b) => b.price1 - a.price1)
  }
  else if (SortParams === "l2h") {
    data = data.sort((a, b) => a.price1 - b.price1)
  }
  else {
    data = data.sort((a, b) => b.discount - a.discount)
  }

  return (

    <div style={{ width: "70%", justifyContent: "center", alignItems: "center" , marginTop: "15px"}}>
      
      <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
        <div style={{ fontSize: "20px" }}>Showing <b>{products.length}</b> items</div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "space-between", fontSize: "15px"}}>

    <div style={{ width: "70%", justifyContent: "center", alignItems: "center" }}>
      
      <div style={{ display: "flex", justifyContent: "space-between", margin: "auto" }}>
        <div style={{ fontSize: "20px" }}>Showing <b>{products.length}</b> items</div>
        <div style={{ display: "flex", gap: "20px", justifyContent: "space-between", fontSize: "15px" }}>

          <div>Sort By:</div>
          <div style={{ border: "0.3px solid black", padding: "0px 10px 0px 10px", borderRadius: "10%", cursor: "pointer" }} onClick={(e) => setSearchParams(createSearchParams({ sortby: "h2l" }))}>High to Low</div>
          <div style={{ border: "0.3px solid black", padding: "0px 10px 0px 10px", borderRadius: "10%", cursor: "pointer" }} onClick={(e) => setSearchParams(createSearchParams({ sortby: "l2h" }))}>Low to High</div>
          <div style={{ border: "0.3px solid black", padding: "0px 10px 0px 10px", borderRadius: "10%", cursor: "pointer" }} onClick={(e) => setSearchParams(createSearchParams({ sortby: "discount" }))}>Discount</div>
        </div>
      </div>

      <br />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "20px" }}>
        {data.map((elem, index) => {
          return <div key={elem.id}><Product elem={elem} cart={cart} qty={elem.qty} /></div>
        })}

      </div>

    </div>


  )


}

}

