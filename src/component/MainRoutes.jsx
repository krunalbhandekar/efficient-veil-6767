import React from 'react';
import { Box } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import { Product } from '../pages/Product';
import Single from '../pages/Single';

const MainRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path='/' element={<Product />} />
        <Route path='/Product/:id' element={<Single />} />
      </Routes>
    </Box>
  );
};

export default MainRoutes;
