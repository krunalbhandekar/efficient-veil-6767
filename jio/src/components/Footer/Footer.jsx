import apple from "../../images/footer/ios_store.png"
import google from "../../images/footer/play_store.png"
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  useColorModeValue,
} from '@chakra-ui/react';


const ListHeader = ({ children })=> {
  return (
    <Text fontWeight={'650'} fontSize={'13'} mb={2}>
      {children}
    </Text>
  );
};

const Textcomp = ({ children })=> {
  return (
    <Text fontWeight={'350'} fontSize={'13'} mb={2}>
      {children}
    </Text>
  );
};

const Spancomp = ({ children })=> {
  return (
    <Text fontWeight={'550'} fontSize={'sm'} mb={2} color="#008ed0">
      {children}
    </Text>
  );
};


export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('#ededef', '#ededef')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10} >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={8}>

          <Stack align={'flex-start'} >
            <ListHeader>MOST POPULAR CATEGORIES</ListHeader>
            <Textcomp><Link href={'#'}>Staples</Link></Textcomp>
            <Textcomp> <Link href={'#'}>Beverages</Link></Textcomp>
            <Textcomp><Link href={'#'}>Personal Care</Link></Textcomp>
            <Textcomp> <Link href={'#'}>Fruits and vegetables</Link></Textcomp>
            <Textcomp><Link href={'#'}>Baby Care</Link></Textcomp>
            <Textcomp><Link href={'#'}>Snacks & Branded Foods</Link></Textcomp>
            <Textcomp> <Link href={'#'}>Dairy & Bakery</Link></Textcomp>
          </Stack>

          <Stack align={'flex-start'} borderRight="1px solid #b5b4b4">
            <ListHeader>CUSTOMER SERVICES</ListHeader>
             <Textcomp><Link href={'#'}>About Us</Link></Textcomp>
             <Textcomp><Link href={'#'}>FAQ</Link> </Textcomp>
             <Textcomp><Link href={'#'}>Terms and conditions</Link></Textcomp>
             <Textcomp> <Link href={'#'}>Privacy policy</Link></Textcomp>
             <Textcomp><Link href={'#'}>E-waste Policy</Link></Textcomp>
             <Textcomp><Link href={'#'}>Cancellation and return policy</Link></Textcomp> 
          </Stack>

        

          <Stack align={'flex-start'} >
            <ListHeader>CONTACT US</ListHeader>
            <Textcomp>WhatsApp us :<a
                  href='https://wa.me/917000370003?text=Hi'
                > 
               <Spancomp>70003 70003</Spancomp> </a></Textcomp>
            <Textcomp>Call Us :<a href='tel:1800 890 1222'><Spancomp>1800 890 1222</Spancomp></a></Textcomp>
            <Textcomp>8:00 AM to 8:00 PM, 365 days</Textcomp>
            <Textcomp>Please note that you are accessing the BETA Version of </Textcomp>
            <Spancomp><a href="https://www.jiomart.com" target="_blank">www.jiomart.com</a></Spancomp>
            <Textcomp>Should you encounter any bugs, glitches, lack of functionality, delayed deliveries, billing errors or other problems on the beta website, please email us on  <a href='mailto:cs@jiomart.com'><Spancomp>cs@jiomart.com</Spancomp></a></Textcomp>
           
            <ListHeader>DOWNLOAD APP</ListHeader>
            
            <Box display="flex" gap="17px"  >
                <Box><img src={google} alt="google store" /></Box>
                <Box><img src={apple} alt="ios store" /></Box>
            </Box>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('#b5b4b4', '#b5b4b4')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={2}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Textcomp>Best viewed on Microsoft Edge 81+, Mozilla Firefox 75+, Safari 5.1.5+, Google Chrome 80+</Textcomp>
          <Textcomp>© 2022 All rights reserved. Reliance Retail Ltd.</Textcomp>
          
        </Container>
      </Box>
    </Box>
  );
}