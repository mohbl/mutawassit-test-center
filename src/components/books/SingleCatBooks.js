import React from 'react';
import { SimpleGrid, Box, Image, Text, Heading } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ translate, country, category, getBooks }) {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getBooks(category, country, translate);
      console.log(category);
      console.log(res);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [category, country, translate]);

  return (
    <Box>
      <Box d="flex" m="4">
        <Link
          to={`/books?category=دراسات المركز&countryCode=${country}&translate=0`}
        >
          <Heading
            fontFamily="diodrum-med !important"
            fontWeight="normal"
            size="md"
            m="2"
          >
            عربي
          </Heading>
        </Link>
        <Link
          to={`/books?category=دراسات المركز&countryCode=${country}&translate=1`}
        >
          <Heading
            fontFamily="diodrum-med !important"
            fontWeight="normal"
            size="md"
            m="2"
          >
            مترجم
          </Heading>
        </Link>
      </Box>
      <SimpleGrid columns={[1, 2, 3, 5]}>
        {data &&
          data.books &&
          data.books.length !== 0 &&
          data.books.map(book => (
            <Link key={book.id} to={`/book/${book.id}`}>
              <Box fontFamily="diodrum-med !important" mb="4" cursor="pointer">
                <Image
                  w="225px"
                  h="350px"
                  m="0 auto"
                  shadow="lg"
                  src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                ></Image>
                <Box mt="4" textAlign="center">
                  <Text fontWeight="500" fontSize="xl">
                    {book.title}
                  </Text>
                  <Box
                    fontSize="2xl"
                    className="content"
                    dangerouslySetInnerHTML={{ __html: book.description }}
                  ></Box>

                  <Text fontWeight="bold">${book.price}</Text>
                </Box>
              </Box>
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    getBooks: (category, country, translate) =>
      dispatch(getBooks(category, country, translate)),
  };
};

export default connect(null, mapDispatchToProps)(CatBooks);
