import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

import SingleCatBooks from '../components/books/SingleCatBooks';
import BooksFilter from '../components/books/BooksFilter';
import Headroom from 'react-headroom';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Books() {
  let query = useQuery();
  let category = query.get('category');
  let countryCode = query.get('countryCode');
  let translate = query.get('translate');

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <Box mt={isSmallScreen ? '0' : '70px'} mb="100px">
      <BooksFilter />
      <Helmet>
        <title>كتب ميسك</title>
      </Helmet>
      <Box px={['10%', '5%', '5%', '3%']} mb="100px" mt="3em">
        {/* <Box m="8">
          <Heading>{category}</Heading>
        </Box> */}
        <SingleCatBooks
          country={countryCode}
          category={category}
          translate={translate}
        />
      </Box>
    </Box>
  );
}
