import React, { useState } from 'react'
import { beauty, fruits1, Groceries1, Groceries2, kitchen1, kitchen2 } from '../helper/navbarhelper';

import { useParams } from 'react-router-dom';

import {IoIosArrowForward} from "react-icons/io"

import styles from './Categories.module.css';

export const Categories = () => {
    const [showDropdown, setShowDropdown] = useState(0)
    let marks=showDropdown

    const {category}=useParams()
    console.log(category)
    const handleClick=(e)=>{
       if(marks!==e.target.title)
       {
            setShowDropdown(e.target.title)
       }
       else
       {
            setShowDropdown(0)
       }
    }

    return (
        <div>

            <div className={styles.sidenav}>
                <div>
                    <p style={{ fontSize: "20px", textAlign: "left" ,marginLeft:"20px"}}>Categories</p>
                </div>
                <br/>
                <div className="categories" >
                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="1">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Fruits & Vegetables</button>
                        <div style={{display: showDropdown==="1" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries1.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="2">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Premium Fruits</button>
                        <div style={{display: showDropdown==="2" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {fruits1.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="3">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Dairy & Bakery</button>
                        <div style={{display: showDropdown==="3" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries1.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="4">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Staples</button>
                        <div style={{display: showDropdown==="4" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries1.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="5">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Snacks & Branded Foods</button>
                        <div style={{display: showDropdown==="5" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries1.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="6">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Beverages</button>
                        <div style={{display: showDropdown==="6" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries1.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="7">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Personal Care</button>
                        <div style={{display: showDropdown==="7" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries2.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>


                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="8">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Home Care</button>
                        <div style={{display: showDropdown==="8" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries2.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>

                    <div>

                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="9">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Home & Kitchen</button>
                        <div style={{display: showDropdown==="9" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {kitchen1.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>

                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="10">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Mom & Baby Care</button>
                        <div style={{display: showDropdown==="10" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {beauty.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="11">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Books</button>
                        <div style={{display: showDropdown==="11" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {kitchen2.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>
                    </div>

                    <div>

                        <button className={`${styles.dropdownbtn} ${showDropdown} && ${styles.active}`} onClick={handleClick} title="12">{<div style={{marginTop:"5px"}}><IoIosArrowForward/></div>}Pets</button>
                        <div style={{display: showDropdown==="12" ? "flex" : "none", flexDirection:"column" , backgroundColor:"#ffffff", color:"9c9797", marginLeft:"35px", fontSize:"15px"}}>
                            {Groceries2.map((e) => (
                                <a className={styles.linkHover} href={e.link} key={e.cat}>{e.cat}</a>
                            ))}
                        </div>
                    </div>


                </div>


            </div>

        </div>
    )
}
