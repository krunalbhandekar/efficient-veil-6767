import React from 'react';
import { Box, Text, Button, Heading } from '@chakra-ui/react';

export const Product = ({ item }) => {
  return (
    <Box
      style={{
        border: '1px solid black',
        borderRadius: '5%',
        width: '300px',
        height: '350px',
        // alignContent: 'center',
      }}>
      <Box h={'50%'} w={'70%'} m={'auto'}>
        <img width='100%' height='100%' src={item.image} alt='' />
      </Box>
      <Box h={'30%'} w={'70%'} m={'10%'}>
        <Heading size={"sm"}>{item.description}</Heading>
        <p>{item.price}</p>
        <Button> Add to Cart </Button>
      </Box>
    </Box>
  );
};
