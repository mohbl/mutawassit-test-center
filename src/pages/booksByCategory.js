import React from 'react';
import { useLocation } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

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
    <Box mt="160px" mb="100px">
      <BooksFilter></BooksFilter>
      <Helmet>
        <title>كتب ميسك</title>
      </Helmet>
        <Box pr={["10%",'5%','5%',"3%"]} pl={["10%",'5%','5%',"3%"]}  mt={["0","170px","170px","170px"]} mb="100px">
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
