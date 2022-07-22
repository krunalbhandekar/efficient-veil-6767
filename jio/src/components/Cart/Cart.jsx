import { Box,Flex, Heading, Input, Button } from "@chakra-ui/react";
import React from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import {MdOutlinePayment} from "react-icons/md"
import "./cart.css";

const Cart = () => {
  return (
      <Flex direction="column" backgroundColor="rgb(236,236,237)">
        <Flex direction="row"  padding="30px">
          <Flex direction="row" marginLeft="140px" height="60px">
            <Box width="700px" ><Heading fontSize="23px">My Cart</Heading></Box>
          </Flex>
          <Flex direction="row" marginLeft="40px" height="60px">
            <Box width="500px" >
              <ul style={{"display":"flex","list-style-type": "none"}}>
                <li><HiShoppingCart size="22px" color="rgb(0,142,204)" /></li>
                <li><Heading fontSize="13px" fontWeight="90px">My Cart</Heading></li>
                <li><div className="line"/></li>
                <li><BsClipboardCheck size="21px" color="rgb(0,142,204)" /></li>
                <li><Heading fontSize="13px" fontWeight="90px">Order Summary</Heading></li>
                <li><div className="line"/></li>
                <li><MdOutlinePayment size="21px" color="rgb(0,142,204)"/></li>
                <li><Heading fontSize="13px" fontWeight="90px">Payment</Heading></li>
              </ul>
            </Box>
          </Flex>
        </Flex>
        <Flex direction="row" padding="30px">
          <Flex direction="column" marginLeft="140px">
            <Box width="700px" backgroundColor="white" height="700px" border= "1px solid red">
              {/* add to cart will show here */}
            </Box>
          </Flex>
          <Flex direction="column" marginLeft="40px">
            <Box width="500px" height="700px">
              <br/>
              <div style={{"padding":"10px", "backgroundColor":"white"}}>
                <Heading fontSize="21px" padding="10px">Apply Coupon</Heading>
                <Input placeholder="Enter Coupon Code" size='sm' variant='flushed' padding="10px"/>
                <Button colorScheme='blue'size='md' variant="link"  padding="10px">Apply</Button>
              </div>
              <br/>
              <div style={{"backgroundColor":"white"}}>
                <Heading fontSize="21px" padding="10px">Payment Details</Heading>
                <Heading color="gray" fontSize="15px" fontWeight="90px"  padding="10px">MRP Total</Heading>
                <hr style={{"color":"gray"}}/>
                <Heading color="gray" fontSize="15px" fontWeight="90px"  padding="10px">Discount</Heading>
                <hr style={{"color":"gray"}}/>
                <Heading fontSize="15px"   padding="10px">Total Amount</Heading>
              </div>
              <Button colorScheme='blue' variant='solid' width="230px" margin="10px 0 0 270px">Place Order</Button>
            </Box>
          </Flex>
        </Flex>
      </Flex>
  );
};

export default Cart;
