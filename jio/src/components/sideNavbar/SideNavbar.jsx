import React from 'react'
import "./sideNavbar.css"
import { Heading,Text,Box} from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import UserAvatar from './UserAvatar'
import {AiOutlineClose} from "react-icons/ai"
import apple from "../../images/footer/ios_store.png"
import google from "../../images/footer/play_store.png"

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
                    <Link to="/login" style={{fontSize:"20px",fontWeight:"500"}} onClick={closeBar}> Hello, { isAuth ?  username : ' Sign In'}</Link>
                    <AiOutlineClose onClick={closeBar} style={{ cursor: 'pointer'}}/>
                </div>
                <div style={{fontWeight:"800"}}>
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

              <Heading size="md" my="2" style={{ textAlign: 'left' }}>Contact Us</Heading>

              <Box my="2">
               <Text className='mail_txt' >
                WhatsApp us :
                <a
                  href='https://wa.me/917000370003?text=Hi'
                >
                  <span style={{color:"#008ecc"}}>70003 70003</span>
                </a>
              </Text>
              </Box>
             
             <Box my="2">

              <Text> Call Us : <span className='mail_txt' style={{color:"#008ecc"}}><a href='tel:1800 890 1222'>
                    1800 890 1222</a></span></Text>

              <Text>6:00 AM to 8:00 PM, 365 days</Text>

             </Box>

             <Box my="2">
              <Text> Please note that you are accessing the BETA Version of <span> <a href='https://www.jiomart.com/' style={{ color: '#008ecc' }}>
                  www.jiomart.com
                </a></span></Text>
             </Box>


              <Box my="2">
                <Text>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on <a href='mailto:cs@jiomart.com' style={{ color: '#008ecc' }}>
                  cs@jiomart.com
                </a></Text>
              </Box>

              <Heading size="md" my="3" style={{ textAlign: 'left' }}>Download App</Heading>
             
             <Box display="flex" gap="17px"  >
                <Box><img src={google} alt="google store" /></Box>
                <Box><img src={apple} alt="ios store" /></Box>
            </Box>
            
            </div>
          </section>
        </div>

        </div>
    </div>
  )
}

export default SideNavbar