import { Box, Heading, Button, Text, Select } from '@chakra-ui/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import './Category.css';
import { useDispatch } from 'react-redux';
import { getProducts } from '../../Redux/fruit/action';

export const Category = () => {
  const dispacth = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();
  const urlCategory = searchParams.getAll('category');
  const urlSortBy = searchParams.get('sortBy');
  const [category, setCategory] = useState(urlCategory || []);
  const [sortBy, setSortBy] = useState(urlSortBy || '');

  const [currentPage, setCurrentPage] = useState(1);
  const [postPerpage, setpostPerpage] = useState(12);
  const [totalpost, setTotalpost] = useState(0);

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

  useEffect(() => {
    if (category) {
      setSearchParams({ category });

      dispacth(
        getProducts({
          params: { category },
          // page: { currentPage },
          // limit: { postPerpage },
        })
      );
    }
  }, [category, setSearchParams, sortBy, dispacth]);

  // const index_LastPost = currentPage * postPerpage;
  // const inde_FirstPost = index_LastPost - postPerpage;
  // const currentPosts = posts.slice(inde_FirstPost, index_LastPost);

  return (
    <Box>
      <Box
        style={{
          padding: '50px',
          gap: '10px',
          marginTop: '50px',
        }}>
        <Box>
          <Heading>Category</Heading>
          <br />
          <Box>
            <input
              type='checkbox'
              value='citrus-mango-grapes'
              onChange={handleCategory}
              defaultChecked={category.includes('citrus-mango-grapes')}
            />
            <label>citrus-mango-grapes</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='cherries-berries-exotic-fruits'
              onChange={handleCategory}
              defaultChecked={category.includes(
                'cherries-berries-exotic-fruits'
              )}
            />
            <label>cherries-berries-exotic-fruits</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='avocado-peach-plum'
              onChange={handleCategory}
              defaultChecked={category.includes('avocado-peach-plum')}
            />
            <label>avocado-peach-plum</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='apples-pears'
              onChange={handleCategory}
              defaultChecked={category.includes('apples-pears')}
            />
            <label>apples-pears</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='banana-melons-coconu'
              onChange={handleCategory}
              defaultChecked={category.includes('banana-melons-coconu')}
            />
            <label>banana-melons-coconu</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='dates'
              onChange={handleCategory}
              defaultChecked={category.includes('dates')}
            />
            <label>dates</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='premium'
              onChange={handleCategory}
              defaultChecked={category.includes('premium')}
            />
            <label>premium</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='kitchen'
              onChange={handleCategory}
              defaultChecked={category.includes('kitchen')}
            />
            <label>kitchen</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='personal'
              onChange={handleCategory}
              defaultChecked={category.includes('personal')}
            />
            <label>personal</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='dates'
              onChange={handleCategory}
              defaultChecked={category.includes('dates')}
            />
            <label>dates</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='mom-baby'
              onChange={handleCategory}
              defaultChecked={category.includes('mom-baby')}
            />
            <label>mom-baby</label>
            {/* men-s-grooming */}
          </Box>
          <Box>
            <input
              type='checkbox'
              value='men-s-grooming'
              onChange={handleCategory}
              defaultChecked={category.includes('men-s-grooming')}
            />
            <label>men-s-grooming</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='tools'
              onChange={handleCategory}
              defaultChecked={category.includes('tools')}
            />
            <label>tools</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='fine-jwellery'
              onChange={handleCategory}
              defaultChecked={category.includes('fine-jwellery')}
            />
            <label>fine-jwellery</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='wellness'
              onChange={handleCategory}
              defaultChecked={category.includes('wellness')}
            />
            <label>wellness</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='fitness'
              onChange={handleCategory}
              defaultChecked={category.includes('fitness')}
            />
            <label>fitness</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='ayush'
              onChange={handleCategory}
              defaultChecked={category.includes('ayush')}
            />
            <label>ayush</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='treatments'
              onChange={handleCategory}
              defaultChecked={category.includes('treatments')}
            />
            <label>treatments</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='fitness'
              onChange={handleCategory}
              defaultChecked={category.includes('fitness')}
            />
            <label>fitness</label>
          </Box>
          <Box>
            <input
              type='checkbox'
              value='fitness'
              onChange={handleCategory}
              defaultChecked={category.includes('fitness')}
            />
            <label>fitness</label>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
