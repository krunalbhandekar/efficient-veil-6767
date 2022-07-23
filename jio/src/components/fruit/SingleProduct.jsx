import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Product.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { getSingleProducts } from '../../Redux/fruit/action';
import axios from 'axios';

export const SingleProduct = ({ pinDetails, pincode, setPinDetials, setPincode }) => {
    let cart = JSON.parse(localStorage.getItem("CartData")) || []
    const { id } = useParams()
    let dispatch = useDispatch();
    let data = useSelector((state) => state.data.products);

    const [showpin, setShowPin] = useState(false)
    const searchPin = () => {
        axios({
            method: "GET",
            url: `https://api.postalpincode.in/pincode/${pincode}`
        }).then((res) => { setPinDetials(res.data[0].PostOffice); setShowPin(true) }).catch((err) => err.data)
    }

    const [quantity, setQuantity] = useState(0)

    const [currentElement] = useState(() => {
        return cart.find((el) => el.id === id && setQuantity(el.qty))
      })
    useEffect(() => {
        dispatch(getSingleProducts(id))
    }, [])

    
    const deleteItem = (index) => {
        cart.splice(index, 1)
        localStorage.setItem('CartData', JSON.stringify(cart));
        
    }

    useEffect(() => {
        if (quantity <= 0) {
            cart.find((item, index) => item.id === data.id && deleteItem(index))
        }

    }, [deleteItem])


    const increment = () => {
        cart.find((item) => item.id === data.id && item.qty++ && setQuantity(item.qty))
        localStorage.setItem('CartData', JSON.stringify(cart));
    }

    const decrement = () => {
        cart.find((item) => item.id === data.id && item.qty > 0 && item.qty-- && setQuantity(item.qty))
        localStorage.setItem('CartData', JSON.stringify(cart));
    }

    const addtoCart = () => {
        cart.push(data);
        localStorage.setItem('CartData', JSON.stringify(cart));
        cart.find((el) => el.id === data.id && setQuantity(el.qty))
    }

    const pincodeInput=(e)=>{
        if(e.target.value.length<=6)
        {
            setPincode(e.target.value)
        }
        
    }   


    return (
        <div style={{ display: "flex", marginLeft: "150px", marginTop: "50px", gap: "40px" }}>
            <div>
                <img style={{ height: "400px", width: "400px" }} src={data.image} />
            </div>
            <div style={{ display: "grid", gridTemplateRows: "auto", width: "450px" }}>
                <p style={{ fontWeight: "bold", fontSize: "20px" }}>{data.name}</p>
                <div style={{ display: "flex", gap: "40px" }}>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}>₹ {data.price1}.00</p>
                    <div style={{ display: "flex", gap: "20px" }}>
                        <p style={{ fontSize: "20px" }}>M.R.P: </p>
                        <p style={{ fontSize: "20px", textDecoration: "line-through" }}>₹ {Math.floor(Number(data.price2))}.00</p>
                    </div>
                </div>
                <div style={{ display: "flex", gap: "20px" }}>
                    <p style={{ fontSize: "20px" }}>You Save: <b style={{ color: "green" }}>₹ {Math.floor(Number(data.price2)) - data.price1} </b></p>
                    <p style={{ fontSize: "20px" }}> Inclusive of all taxes</p>
                </div>
                <br />
                <p style={{ fontSize: "17px", color: "green" }}> In Stock</p>
                <br />
                <p style={{ fontSize: "15px" }}> Sold by  <b style={{ color: "blue" }}>Reliance Retail</b></p>
                <p style={{ fontSize: "18px" }}> Inaugural Offer <b>Free Shipping</b></p>
                <br />
                <div style={{ width: "150px" }}>
                    {quantity > 0 ? <div style={{ display: "flex", justifyContent: "right", gap:"10px"}}><div style={{ justifyContent: "center", textAlign: "center", fontSize: "25px", cursor: "pointer", backgroundColor: "rgb(0,142,204)", height: "40px", width: "40px", color: "white", borderRadius: "50%" }} onClick={decrement}>-</div><div style={{ height: "30px", width: "35px", fontSize: "20px"}}>{quantity}</div>
                        <div style={{marginLeft:"-15px", justifyContent: "center", textAlign: "center", fontSize: "25px", cursor: "pointer", backgroundColor: "rgb(0,142,204)", height: "40px", width: "40px", color: "white", borderRadius: "50%" }} onClick={increment}>+</div></div>
                        : <div className={styles.addtoCart2} onClick={addtoCart}>
                            <div style={{ fontSize: "15px", fontWeight: "normal" }}>Add to Cart</div>
                            <div style={{ fontSize: "15px", fontWeight: "normal" }}>+</div>
                        </div>}
                </div>
                <br />
                <div>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}> Delivery</p>
                    <div style={{ display: "flex" }}>
                        <input className={styles.pinInput} maxLength="6" type="number" value={pincode} placeholder='Enter your Pincode' onChange={pincodeInput} />
                        <button style={{ cursor: "pointer" }} onClick={searchPin} disabled={pincode.length === 0}>Check</button>
                    </div>
                    {showpin && pinDetails !== null ? <p style={{ color: "green", fontSize: "13px", fontStyle: "oblique" }}>Delivery available! <br />{pinDetails[0].District}, {pinDetails[0].State} </p> : pinDetails === null && <p style={{ color: "red", fontSize: "13px", fontStyle: "oblique" }}>Invalid pincode</p>}
                </div>
                <br />
                <div>
                    <p style={{ fontWeight: "bold", fontSize: "20px" }}> Offers</p>
                    <div style={{ display: "block" }}>
                        <p style={{ cursor: "pointer" }}>{"--> "} Get Sugar at Rs.9 only on Grocery Shopping of Min. 1499. T&C Apply.</p>
                        <p style={{ cursor: "pointer" }}>{"--> "}Paytm - Pay using Paytm Wallet & Get up to Rs. 750/- Cashback T&C Apply</p>
                    </div>
                </div>

                <br />
                <br />
            </div>
        </div>
    )
}
