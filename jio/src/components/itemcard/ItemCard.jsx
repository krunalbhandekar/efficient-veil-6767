import React from 'react'
import style from "./itemcard.module.css"
import { Link } from "react-router-dom"
function ItemCard(props) {
    let color=props.color 
        return (
            <div style={{ backgroundColor:color }} className={style.BannerCard}>
                <div className={style.BannerOffer}>
                    <h5 style={{ textAlign: "center", paddingTop: "8px", color: "#fff",fontWeight:"bold" }}>{props.offer}</h5>
                </div>
                <div className={style.BannerItem}>
                    <Link to={props.itemUrl}>
                        <div className={style.BannerItemInner}>
                            <img className={style.BannerImg} src={props.url}  />
                            <h4 style={{ fontSize: "16px", fontWeight: "bold" }} >{props.item}</h4>
                        </div>
                    </Link>
                </div>
            </div>
        )
   
}

export default ItemCard
