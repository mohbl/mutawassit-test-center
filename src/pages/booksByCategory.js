import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import SingleCatBooks from '../components/books/SingleCatBooks';
import BooksFilter from '../components/books/BooksFilter';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let category = query.get('category');
  let countryCode = query.get('countryCode');
  let translate = query.get('translate');
  return (
    <Box>
      <BooksFilter></BooksFilter>

      <Box mr={['0', '80px']} mt="160px" mb="100px">
        {/* <Box m="8">
          <Heading>{category}</Heading>
        </Box> */}
        <SingleCatBooks
          country={countryCode}
          category={category}
          translate={translate}
        ></SingleCatBooks>
      </Box>
    </Box>
  );
}
