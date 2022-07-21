import React from 'react';
import styles from './Product.module.css'

export const Product = ({elem}) => {
  return (
    <div className={styles.product}>
        <img src={elem.image} alt={elem.name}/>
        <p style={{fontSize:"13px", fontWeight:"bold"}}>{elem.name}</p>
        <div style={{display:"flex", justifyContent:"space-around", top:"-10px"}}>
        <p style={{fontSize:"15px", fontWeight:"bold"}}> ₹ {elem.price1}</p>
        <div style={{display:"flex", gap:"10px"}}>
        <p>M.R.P.</p>
        <p style={{textDecoration:"line-through"}}>₹ {elem.price2}</p>
        </div>
        
        </div>
        <div className={styles.addtoCart}>
          <div style={{fontSize:"15px", fontWeight:"normal"}}>Add to Cart</div>
          <div style={{fontSize:"15px", fontWeight:"normal"}}>+</div>
        </div>
       
        
    </div>
  )
}
