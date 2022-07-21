import React from 'react'
import { Box ,Text,Flex,Image,Heading,Button} from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'
import loginimage from "../../images/sign/login.jpg"

const Login = () => {
  return (
    <Box>
        <Flex  w="97%" py="3rem" margin="auto" gap="13rem">
            <Box >
                <Image src={loginimage} alt="Login Image" borderLeftRadius="20px"/>
            </Box>
            <Box marginTop="10">
                <Box>
                    <Heading fontSize="27px" mb="2">Login</Heading>
                <Text>Login to access your Orders, Offers and Wishlist.</Text>
                </Box>

                <Flex alignItems="center" gap="5px" my="12">
                <input placeholder='Username' style={{border:'none', outline:"none",fontWeight:"500"}}/>
                </Flex>
                <form>
                    <Box my="12">
                         <input placeholder='Password' style={{border:'none', outline:"none",fontWeight:"500"}}/>
                    </Box>
                    <Box>
                         <Button type='submit' backgroundColor="#008ecc" color="white" w="30rem">Verify</Button>
                    </Box>
                </form>

                 <Text align={'center'}>
                Don't have an account? <RouterLink to="/signup" style={{color:'#008ecc'}}>Signup</RouterLink>
              </Text>

                
            </Box>
        </Flex>
        <Box textAlign="center">
            <Text fontSize="sm" fontWeight="500">By continuing you agree to our <span style={{color:"red"}}>Terms of service</span></Text>
            <Text fontSize="sm" fontWeight="500">and <span style={{color:"red"}}>Privacy & Legal Policy.</span></Text>
        </Box>
    </Box>
  )
}

export default Login