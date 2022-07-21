import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Image,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from '@chakra-ui/react';
import sign from "../../images/sign/signup.jpg"
import { Link as RouterLink} from 'react-router-dom';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

function reducer(state,action){
  switch(action.type){
    case "name":
       return {
        ...state,
        name:action.payload
       }
    case "email":
       return {
        ...state,
        email:action.payload
       }
    case "password":
       return {
        ...state,
        password:action.payload
       }
    case "username":
       return {
        ...state,
        username:action.payload
       }
    case "mobile":
       return {
        ...state,
        mobile:action.payload
       }
    case "description":
       return {
        ...state,
        description:action.payload
       }
       default:
        return state
  }
}
const initialstate={
  name:"",
  email:"",
  password:"",
  username:"",
  mobile:0,
  description:"",
}

export default function Signup() {
  


  return (
    <Flex justifyContent="space-between">
      <Box w="45%" p="5">
        <Image src={sign} w="100%"/>
      </Box>
    <Flex w="45%"
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our products 
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="Name" isRequired>
                  <FormLabel>Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="userName" isRequired>
                  <FormLabel>userName</FormLabel>
                  <Input type="text"/>
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                   >
                    <ViewIcon />  <ViewOffIcon />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
             <Box>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
              <Box>
                <Editable defaultValue='Description'>
                <EditablePreview />
                  <EditableTextarea  />
                </Editable>
              </Box>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg="#008ecc"
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }} >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <RouterLink to="/login" style={{color:"#008ecc"}}>Login</RouterLink>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    </Flex>

  );
}