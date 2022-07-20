import React from 'react'
import { Box ,Input,Text,Flex,Heading} from '@chakra-ui/react'
import { HiOutlineViewList,HiLocationMarker } from "react-icons/hi";
import {BsFillCartFill} from "react-icons/bs"
import { FaUser } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';
import {Link} from "react-router-dom"
import JioMart from "../../images/landing page/logo/jiomartBeta.jpg"

const Flexba = ({ children })=> {
  return (
    <Flex alignItems="center" gap="2" fontWeight="500">
      {children}
    </Flex>
  );
};

const Navbar = ({setsidebarVisible}) => {
  return (
    <>
    <Flex direction="column">
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
        <Flex justifyContent="space-between" px="5" backgroundColor="#ececed">
          <Flex alignItems="center" gap="2">
            <HiLocationMarker color='#868784' fontSize="25px"/>
          <Box>
            <p>Deliver to</p>
            <h3>400020</h3>
          </Box>
          </Flex>
         
          <Flexba><Text>Groceries</Text> <IoIosArrowDown/></Flexba>
          <Flexba><Text>Premium Fruits</Text><IoIosArrowDown/></Flexba>
          <Flexba><Text>Home & Kitchen</Text><IoIosArrowDown/></Flexba>
          <Flexba><Text>Fashion</Text><IoIosArrowDown/></Flexba>
          <Flexba><Text>Electronics</Text><IoIosArrowDown/></Flexba>
          <Flexba><Text>Beauty</Text><IoIosArrowDown/></Flexba>
          <Flexba><Text>Jewellery</Text><IoIosArrowDown/></Flexba>
        </Flex>
    </Flex>
    </>

  )
}

export default Navbar