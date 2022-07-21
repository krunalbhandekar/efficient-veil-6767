import React from 'react'
import { Box ,Input,Text,Flex,Heading} from '@chakra-ui/react'
import { HiOutlineViewList,HiLocationMarker } from "react-icons/hi";
import {BsFillCartFill} from "react-icons/bs"
import { FaUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import {Link} from "react-router-dom"
import { kitchen1,kitchen2,fashion1,fruits1,fruits2,Groceries1,Groceries2,electronics,beauty } from '../helper/navbarhelper';
import JioMart from "../../images/landing page/logo/jiomartBeta.jpg"
import "./Navbar.css"



const Navbar = ({setsidebarVisible}) => {

  return (
    <>
    <Flex direction="column" >
        <Flex direction="row" h="70px" justifyContent="space-between" alignItems="center" px="5" backgroundColor="#008ecc" color="white"> 
          <Box onClick={()=>setsidebarVisible(true)}>
            <HiOutlineViewList size="30" />
          </Box>
          <Box w="140px" >
            {/* <Image src={JioMart} alt='JioMart' size="100%"/> */}
            <Heading fontWeight="500"><a href='/'>JioMart</a></Heading>
          </Box>
          <Flex backgroundColor="white" w="650px" borderRadius="5px">
            <Input placeholder='Search essentials, groceries, and more ...' border="none" outline="none" color="black" fontWeight="600"/>
          </Flex>
            
              <Flex alignItems="center" gap="2">
                <FaUser/>
                <Text fontWeight="600"><Link to="/login">Sign in / Sign up</Link></Text>
              </Flex>
              <Flex alignItems="center" gap="2">
                <BsFillCartFill/>
                <Text fontWeight="600"><Link to="/cart">Cart</Link></Text> 
              </Flex> 
        </Flex>
        <Flex justifyContent="space-between" px="8" backgroundColor="#ececed">
          <Flex alignItems="center" gap="2">
            <HiLocationMarker color='#868784' fontSize="25px"/>
          <Box>
            <p style={{fontSize:"14px",color:"gray",fontWeight:"bold"}}>Deliver to</p>
            <p style={{fontSize:"14px",fontWeight:"500"}}>400020</p>
          </Box>
          </Flex>

          <div className='dropdown'>
            <div className="dropbtn"><Text>Groceries</Text> <IoIosArrowDown/></div>

              <div class="dropdown-content one">
                <div style={{display:"flex"}}>
                  <div style={{width:"50%",borderRight:"1px solid #b5b4b4"}}>
                    {Groceries1.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
                  </div>

                  <div style={{width:"50%"}}>
                    {Groceries2.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
                  </div>
                
                </div>
            </div>
           

          </div>

          <div className='dropdown'>
            <div className="dropbtn"><Text>Premium Fruits</Text><IoIosArrowDown/></div>

            

              <div class="dropdown-content two">
                <div style={{display:"flex"}}>
                  <div style={{width:"50%",borderRight:"1px solid #b5b4b4"}}>
                    {fruits1.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
                  </div>
                  <div style={{width:"50%"}}>
                    {fruits2.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
                  </div>
                
                </div>
            </div>

          </div>

          <div className='dropdown'>
           <div className="dropbtn"><Text>Home & Kitchen</Text><IoIosArrowDown/></div>



           <div class="dropdown-content three">
                <div style={{display:"flex"}}>
                  <div style={{width:"50%",borderRight:"1px solid #b5b4b4"}}>
                    {kitchen1.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
                    
                  </div>
                  
                  <div style={{width:"50%"}}>
                     {kitchen2.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
                  </div>
                
                </div>
            </div>

          </div>

          <div className='dropdown'>
          <div className="dropbtn"><Text>Fashion</Text><IoIosArrowDown/></div>

           <div class="dropdown-content four">
              <div>
                 {fashion1.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
              </div> 
             </div>
          </div>

          <div className='dropdown'>
          <div className="dropbtn"><Text>Electronics</Text><IoIosArrowDown/></div>
         

           <div class="dropdown-content five">
              <div>
                 {electronics.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
              </div> 
             </div>
          </div>

          <div className='dropdown'>
          <div className="dropbtn"><Text>Beauty</Text><IoIosArrowDown/></div>
          

           <div class="dropdown-content five">
              <div>
                 {beauty.map((e)=>(
                      <a href={e.link} key={e.cat}>{e.cat}</a>
                    ))}
              </div> 
             </div>

          </div>

          <div className='dropdown'>
          <div className="dropbtn"><Text>Jewellery</Text><IoIosArrowDown/></div>

           <div class="dropdown-content six">
              <div>
                <a href="#">Fine Jewellery</a>
              </div> 
             </div>
          </div>
         
        </Flex>
    </Flex>
    </>

  )
}

export default Navbar