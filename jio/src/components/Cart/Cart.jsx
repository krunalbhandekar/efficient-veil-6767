import { Box,Flex, Heading, Input, Button } from "@chakra-ui/react";
import React from "react";
import { BsClipboardCheck } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi";
import {MdOutlinePayment} from "react-icons/md"
import "./cart.css";

const Cart = () => {
  let cart = JSON.parse(localStorage.getItem("CartData"));
  console.log(cart);
  return (
  
      <Flex direction="column" backgroundColor="rgb(236,236,237)">
        {/* //parent */}
        <Flex direction="row"  padding="30px 50px"  justifyContent="space-between">

          <Box><Heading fontSize="23px">My Cart</Heading></Box>

          <Box> <ul style={{"display":"flex","list-style-type": "none"}}>
                <li><HiShoppingCart size="22px" color="rgb(0,142,204)" /></li>
                <li><Heading fontSize="13px" fontWeight="90px">My Cart</Heading></li>
                <li><div className="line"/></li>
                <li><BsClipboardCheck size="21px" color="rgb(0,142,204)" /></li>
                <li><Heading fontSize="13px" fontWeight="90px">Order Summary</Heading></li>
                <li><div className="line"/></li>
                <li><MdOutlinePayment size="21px" color="rgb(0,142,204)"/></li>
                <li><Heading fontSize="13px" fontWeight="90px">Payment</Heading></li>
              </ul></Box>
           </Flex>

          
        <Flex direction="row" justifyContent="space-between" padding="30px"  px="30px">

          <Box width="55%">
             <Box  backgroundColor="white" height="auto" >
              <Heading fontSize="23px" padding="30px">Basket </Heading>
              {/* add to cart will show here */}
              {cart.map((e)=>{
                return (
                  <div style={{"padding":"10px"}}>
                  <div style={{"padding":"10px", "display":"flex"}}>
                    <div style={{"display":"flex","width":"150px","height":"150px"}}>
                      <img src={e.image}/>
                    </div>
                    <div>
                    <Heading fontSize="18px" padding="10px">{e.name}</Heading>
                    <div style={{"display":"flex"}}>
                      <Heading fontSize="14px" padding="10px" >{e.price1}</Heading>
                      <Heading fontSize="14px" padding="10px">{e.price2}</Heading>
                    </div>
                    <div style={{"display":"flex"}}>
                      <Heading  fontSize="13px" fontWeight="90px" padding="10px">Category :</Heading>
                      <Heading fontSize="13px" fontWeight="90px" padding="10px" color="rgb(0,142,204)">{e.category}</Heading>
                    </div>
                    <div style={{"display":"flex"}}>
                      <Heading fontSize="13px" fontWeight="90px" padding="10px" >Sold By</Heading>
                      <Heading fontSize="13px" fontWeight="90px" padding="10px" color="rgb(0,142,204)">Reliance Retail</Heading>
                      {/* button below */}

                      
                      <Button colorScheme='blue' variant='solid' ></Button>
                    </div>
                    </div>
                  </div>
                  <div className="line" style={{"width":"100%"}}></div>
                  </div>
                )
              })}
            </Box>
          </Box>



          <Box  width="40%">
             <Flex direction="column" gap="30px">
             
              <div style={{"padding":"10px", "backgroundColor":"white"}}>
                <Heading fontSize="21px" padding="10px">Apply Coupon</Heading>
                <Input placeholder="Enter Coupon Code" size='sm' variant='flushed' padding="10px"/>
                <Button colorScheme='blue'size='md' variant="link"  padding="10px">Apply</Button>
              </div>
           
              <div style={{"backgroundColor":"white"}}>
                <Heading fontSize="21px" padding="10px">Payment Details</Heading>
                <Heading color="gray" fontSize="15px" fontWeight="90px"  padding="10px">MRP Total</Heading>
                <hr style={{"color":"gray"}}/>
                <Heading color="gray" fontSize="15px" fontWeight="90px"  padding="10px">Discount</Heading>
                <hr style={{"color":"gray"}}/>
                <Heading fontSize="15px"   padding="10px">Total Amount</Heading>
              </div>
              <Button colorScheme='blue' variant='solid' width="230px" marginLeft="auto">Place Order</Button>
            </Flex>
          </Box>

          
        </Flex>
        
      </Flex>
      
      
  );
};

export default Cart;