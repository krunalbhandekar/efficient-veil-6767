import React, { useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { getfruitsvegData } from '../Redux/Action';
import { Product } from './Product';

const Home = () => {
  const data = useSelector((state) => state.reducer.data);
  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getfruitsvegData());
  }, []);

  return (
    
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        gridGap: '10px',
        paddingLeft:"150px",
        marginTop:"50px"
      }}>
        
      {data.map((item) => {
        return <Product item={item} />;
      })}
    </div>
  );
};

export default Home;
