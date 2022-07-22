import { Center } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import styles from './Product.module.css'

export const Product = ({ elem, cart, qty }) => {

  const [quantity, setQuantity] = useState(0)


  const [currentElement] = useState(() => {
    return cart.find((el) => el.id === elem.id && setQuantity(el.qty))
  })


  const deleteItem = (index) => {
    cart.splice(index, 1)
    localStorage.setItem('CartData', JSON.stringify(cart));
    window.location.reload()
  }

  useEffect(() => {
    if (quantity <= 0) {
      cart.find((item, index) => item.id === elem.id && deleteItem(index))
    }

  }, [deleteItem])


  const increment = () => {
    cart.find((item) => item.id === elem.id && item.qty++ && setQuantity(item.qty))
    localStorage.setItem('CartData', JSON.stringify(cart));
  }

  const decrement = () => {
    cart.find((item) => item.id === elem.id && item.qty > 0 && item.qty-- && setQuantity(item.qty))
    localStorage.setItem('CartData', JSON.stringify(cart));
  }

  const addtoCart = () => {
    setQuantity(qty)
    cart.push(elem);
    localStorage.setItem('CartData', JSON.stringify(cart));
    cart.find((el) => el.id === elem.id && setQuantity(el.qty))
  }





  return (
    <div className={styles.product}>
      <div style={{display: "flex", justifyContent: "space-between",zIndex:"1"}}>
        <div style={{height: "39px", width: "38px",color:"white",textAlign:"center",backgroundImage:`url("https://www.jiomart.com/assets/version1657814599/smartweb/images/icons/offer_bg.svg")`}}><div style={{fontWeight:"bold",fontSize:"10px",marginTop:"5px"}}>{elem.discount}% <br/> OFF</div></div>
        <div style={{ textAlign:"right" ,height: "25px", width: "25px" }}><img src="https://www.jiomart.com/assets/jiomsite/images/icons/new-veg.svg" /></div>
      </div>
      
      <Center><div style={{marginTop:"-30px",zIndex:"-1"}}><img src={elem.image} alt={elem.name} /></div></Center>
      <div style={{ textAlign:"left",marginTop:"20px",fontSize: "15px", fontWeight: "bold" ,lineHeight:"20px", overflow:"hidden",height:"40px"}}>{elem.name}</div>
      <div style={{ display: "flex", justifyContent: "space-around", top: "-10px" }}>
        <p style={{ fontSize: "15px", fontWeight: "bold" }}> ₹ {elem.price1}</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>M.R.P.</p>
          <p style={{ textDecoration: "line-through" }}>₹ {Math.floor(Number(elem.price2))}</p>
        </div>

      </div>
      <br />
      {quantity > 0 ? <div style={{ display: "flex", justifyContent: "right" }}><div style={{ justifyContent: "center", textAlign: "center", fontSize: "25px", cursor: "pointer", backgroundColor: "rgb(0,142,204)", height: "40px", width: "40px", color: "white", borderRadius: "50%" }} onClick={decrement}>-</div><div style={{ height: "30px", width: "35px", fontSize: "20px" }}>{quantity}</div>
        <div style={{ justifyContent: "center", textAlign: "center", fontSize: "25px", cursor: "pointer", backgroundColor: "rgb(0,142,204)", height: "40px", width: "40px", color: "white", borderRadius: "50%" }} onClick={increment}>+</div></div>
        : <div className={styles.addtoCart} onClick={addtoCart}>
          <div style={{ fontSize: "15px", fontWeight: "normal" }}>Add to Cart</div>
          <div style={{ fontSize: "15px", fontWeight: "normal" }}>+</div>
        </div>}


    </div>
  )
}
