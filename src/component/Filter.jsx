import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll('category');
  const urlSortBy = searchParams.get('sortBy');
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSortBy || '');

  const handleCategory = (e) => {
    let option = e.target.value;
    let newCategory = [...category];

    if (category.includes(option)) {
      newCategory.splice(newCategory.indexOf(option), 1);
    } else {
      newCategory.push(option);
    }
    setCategory(newCategory);
  };

  // sort
  const handlesort = (e) => {
    setSortBy(e.target.value);
  };
  // console.log(sortBy);

  useEffect(() => {
    if (category || sortBy) {
      let params = {};
      params && (params.category = category);
      params && (params.sortBy = sortBy);
      setSearchParams(params);
    }
  }, [category, setSearchParams, sortBy]);

  return (
    <Box>
      <Box border={'1px solid black'} marginLeft={'100px'}>
        <input
          type='radio'
          value='Asc'
          name='sortBy'
          onChange={handlesort}
          defaultChecked={sortBy === 'Asc'}
        />
        <label>Ascending</label>
        <input
          type='radio'
          value='Desc'
          name='sortBy'
          onChange={handlesort}
          defaultChecked={sortBy === 'Desc'}
        />
        <label>Dscending</label>
      </Box>

      <Box
        style={{
          border: '1px solid black',
          padding: '50px',
          gap: '10px',
          marginTop: '50px',
        }}>
        <Heading>Category</Heading>
        <br />
        <Box>
          <input
            type='checkbox'
            value='Fresh Vegitables'
            onChange={handleCategory}
            defaultChecked={category.includes('Fresh Vegitables')}
          />
          <label>Fresh Vegitables</label>
        </Box>
        <Box>
          <input
            type='checkbox'
            value='exotic-fruits-vegetables'
            onChange={handleCategory}
            defaultChecked={category.includes('exotic-fruits-vegetables')}
          />
          <label>exotic-fruits-vegetables</label>
        </Box>
        <Box>
          <input
            type='checkbox'
            value='Dairy'
            onChange={handleCategory}
            defaultChecked={category.includes('Dairy')}
          />
          <label>Dairy</label>
        </Box>
        <Box>
          <input
            type='checkbox'
            value='Cheese'
            onChange={handleCategory}
            defaultChecked={category.includes('Cheese')}
          />
          <label>Cheese</label>
        </Box>
        <Box>
          <input
            type='checkbox'
            value='Ghee'
            onChange={handleCategory}
            defaultChecked={category.includes('Ghee')}
          />
          <label>Ghee</label>
        </Box>
      </Box>
    </Box>
  );
};

export default Filter;
