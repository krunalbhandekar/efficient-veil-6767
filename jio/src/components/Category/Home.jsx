import React, { useEffect } from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import {getProducts} from "../"
import { Product } from './Product';
import { useSearchParams, useLocation } from 'react-router-dom';

const Home = () => {
  const data = useSelector((state) => state.reducer.data);
  

  const dispacth = useDispatch();
  const [searchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const category = searchParams.getAll('category');
    const sortBy = searchParams.get('sortBY');

    if (data.length === 0 || location.search) {
      const datasort = {
        params: {
          category: searchParams.getAll('category'),
          _sort: sortBy && 'price',
          _order: sortBy,
        },
      };
      dispacth(getProducts(datasort));
    }
  }, [location.search, dispacth]);
 

  return (
    <Box>
      <Box
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridGap: '10px',
          paddingLeft: '150px',
          marginTop: '50px',
        }}>
        {data.map((item) => {
          return <Product item={item} />;
        })}
      </Box>
    </Box>
  );
};
export { Home };
