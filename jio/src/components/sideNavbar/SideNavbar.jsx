import React from 'react'
import "./sideNavbar.css"
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import UserAvatar from './UserAvatar'
import {AiOutlineClose} from "react-icons/ai"

const SideNavbar = ({sidebarVisible,setsidebarVisible}) => {
    const isAuth =useSelector((state)=>state.log.isAuth)
    let username=localStorage.getItem("user")
    console.log('isAuth:', isAuth)
    let closeBar=()=>{
        setsidebarVisible(false)
    }
  return (
    <div  className={sidebarVisible ? "sideBarContainerActive" : "sideBarContainer"}>
        <div className='sidebar'>
            <section className='sideBarsects'>
                <div>
                    <UserAvatar/>
                    <Link to="/login" onClick={closeBar}> { isAuth ? username : 'Hello, Sign In'}</Link>
                    <AiOutlineClose onClick={closeBar} style={{ cursor: 'pointer'}}/>
                </div>
                <div>
                    <Link to="/account" onClick={closeBar}> Account </Link>
                    <Link to="/cart" onClick={closeBar}> Orders </Link>
                </div>
            </section>

            <div className='sectionOverflow'>
          <section className='sideBarsects'>
            <ul>
              <li>
                <Link to="/" onClick={closeBar}>Home</Link>
              </li>
              <li>
                <Link  to="/" onClick={closeBar}>Shop by Category</Link>
              </li>
              <li>
                <Link to="/" onClick={closeBar}>My List</Link>
              </li>
              <li>
                <Link to="/" onClick={closeBar}>My Subscription</Link>
              </li>
              <li>
                <Link to="/" onClick={closeBar}>JioMart Wallet</Link>
              </li>
              <li>
                <Link to="/" onClick={closeBar}>All Offers</Link>
              </li>
            </ul>
          </section>

          <section className='sideBarsects'>
            <ul>
              <Link to="/account" onClick={closeBar}>
                <li> My Account </li>
              </Link>
              <Link  to="/" onClick={closeBar}>
                <li> Need Help </li>
              </Link>
              <Link to="/" onClick={closeBar}>
                <li> About us </li>
              </Link>
              <Link to="/" onClick={closeBar}>
                <li> Guide </li>
              </Link>
            </ul>
          </section>
          <section className='sideBarsects'>
            <div className='hmenu_contact'>
              <h1 style={{ textAlign: 'left' }}>Contact Us</h1>
              <span className='mail_txt'>
                WhatsApp us :
                <a
                  href='https://wa.me/917000370003?text=Hi'
                >
                  70003 70003
                </a>
              </span>
              <br />
              <span className='mail_txt'>
                <span className='mail_txt'>
                  Call Us :
                  <a href='tel:1800 890 1222' >
                    1800 890 1222
                  </a>
                  <br />
                </span>
              </span>
              <p>6:00 AM to 8:00 PM, 365 days</p>
              <p className='textmsg1'>
                Please note that you are accessing the BETA Version of
                <a href='https://www.jiomart.com/' style={{ color: '#008ecc' }}>
                  www.jiomart.com
                </a>
              </p>
              <p className='textmsg2'>
                Should you encounter any bugs, glitches, lack of functionality,
                delayed deliveries, billing errors or other problems on the beta
                website, please email us on
                <a href='mailto:cs@jiomart.com' style={{ color: '#008ecc' }}>
                  cs@jiomart.com
                </a>
              </p>
              <h1 style={{textAlign:"left"}}>Download App</h1>
              <a
                href='https://play.google.com/store/apps/details?id=com.jpl.jiomart'
                
              >
                <img
                  src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/play_store.png'
                  alt='Download Jiomart App for Android from Play Store'
                />
              </a>
              <a
                href='https://apps.apple.com/in/app/jiomart/id1522085683'
               
              >
                <img
                  src='https://www.jiomart.com/images/cms/wysiwyg/app-icons/ios_store.png'
                  alt='Download Jiomart App for iOs from App Store'
                />
              </a>
            </div>
          </section>
        </div>

        </div>
    </div>
  )
}

export default SideNavbar