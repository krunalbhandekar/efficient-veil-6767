import React from 'react'
import { Box ,Text,Flex,Image,Heading,Button} from '@chakra-ui/react'
import { FiUser } from 'react-icons/fi';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../Redux/login/action';
import { useDispatch } from 'react-redux';


const Account = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const handlelogout=()=>{
       dispatch(logout());
        navigate("/login");
    }
  return (
    <div>
        <Heading size="md" my="5" mx="20">My Account</Heading>
        <Flex direction="row" justifyContent="space-between" w="90%" margin="auto">
            {/* left start*/}
            <Flex direction="column" w="40%">

           
                <Flex direction="column" color="white" gap="15px" backgroundColor="#008ecc" p="5" borderRadius="15px">

                <div style={{display:"flex", gap:"30px",  color:"white"}}>
                    <div style={{borderRadius:"50%",backgroundColor:"white",display:"flex",justifyContent:"center",alignItems:"center",width:"70px", height:"70px" }}  ><FiUser size="50px" color="#008ecc"/></div>
                    <Box>
                        <Text>Krunal Bhandekar</Text>
                        <Text color="#66bbe0" fontWeight="600" fontStyle="italic">krunalbhandekar10@gmail.com</Text>
                        <Text color="#66bbe0" fontWeight="600">+91-9158291878</Text>
                    </Box>
                </div>
                    <div style={{display:"flex",justifyContent:"space-between"}}>
                        <div style={{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#66bbe0",padding:"8px 15px 8px 8px",width:"48%",borderRadius:"10px"}}>
                            <BsFillCreditCardFill/>
                            <p>Payment Methods</p>
                        </div>

                        <div style={{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#66bbe0",padding:"8px 15px 8px 8px",width:"48%",borderRadius:"10px"}}>
                            <BsFillCreditCardFill/>
                            <p>Order History</p>
                        </div>
                    </div>
                    
                    <div style={{display:"flex",alignItems:"center",gap:"10px",backgroundColor:"#66bbe0",padding:"8px 15px 8px 8px",width:"100%",borderRadius:"10px"}}>
                            <BsFillCreditCardFill/>
                            <p>Delivery Addresses</p>
                        </div>

             </Flex>

                <div style={{margin:"40px 0",padding:"15px"}}>
                    <div style={{margin:"18px 0",fontWeight:"500", borderBottom:"0.1px solid #cbcdd4",paddingBottom:'5px', cursor:"pointer"}}><p>My List</p></div>
                    <div style={{margin:"18px 0",fontWeight:"500", borderBottom:"0.1px solid #cbcdd4",paddingBottom:'5px', cursor:"pointer"}}><p>WishList</p></div>
                    <div style={{margin:"18px 0",fontWeight:"500", borderBottom:"0.1px solid #cbcdd4",paddingBottom:'5px', cursor:"pointer"}}><p>Legal Information</p></div>
                    <div style={{margin:"18px 0",fontWeight:"500", borderBottom:"0.1px solid #cbcdd4",paddingBottom:'5px', cursor:"pointer"}}><p>Need Help</p></div>
                    <div style={{margin:"18px 0",fontWeight:"500", borderBottom:"0.1px solid #cbcdd4",paddingBottom:'5px', cursor:"pointer"}}> <p>Contact us</p></div>
                    <div onClick={()=>handlelogout()} style={{margin:"18px 0",fontWeight:"500",borderBottom:"0.1px solid #cbcdd4",paddingBottom:'5px',cursor:"pointer"}}> <p >Logout</p></div>
                   
                </div>

            </Flex>
            <Box w="55%" p="3px 0px 5px 8px">
                <Heading size="md" my="5" >Account Information</Heading>
                <Flex direction="column">
                    <Flex gap="200px" my="3">
                         <div>
                        <p style={{color:"gray"}}>Full Name</p>
                        <Heading size="sm" >Krunal Bhandekar</Heading>
                    </div>
                    <div>
                        <p style={{color:"gray"}}>AGE</p>
                        <Heading size="sm" >24</Heading>
                    </div>
                    </Flex>
                    <Flex gap="90px">
                         <div>
                        <p style={{color:"gray"}}>Email id</p>
                        <Heading size="sm" >krunalbhandekar10@gmail.com</Heading>
                    </div>
                    <div>
                        <p style={{color:"gray"}}>Mobile Number</p>
                        <Heading size="sm" >+91 - 9158291878</Heading>
                    </div>
                    </Flex>
                </Flex>
            </Box>
        </Flex>
    </div>
  )
}

export default Account