import React from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Spinner,
  useColorMode,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getBooks } from '../../redux/actions/booksActions';

function CatBooks({ translate, country, category, getBooks }) {
  const { colorMode } = useColorMode();

  const bg = { light: 'white', dark: '#151a23' };
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
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="30px">
        {data &&
          data.books &&
          data.books.length !== 0 &&
          data.books.map(book => (
            <Box key={book.id}>
              <Link to={`/book/${book.id}`}>
                <Box mt="4" pb="4" shadow="lg" bg={bg[colorMode]}>
                  <Image
                    loading="lazy"
                    w="100%"
                    src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                    alt={book.title}
                  />
                  <Box p="0.8em">
                    <Text fontFamily="diodrum-med !important" mb="2" fontSize="sm">
                      {book?.author[0]?.name}
                    </Text>
                    <Heading fontFamily="diodrum-bold !important" mb="2" size="sm">
                      {book.title}
                    </Heading>
                    <Box
                      fontSize="xs"
                      className="content books__content"
                      dangerouslySetInnerHTML={{ __html: book.overview }}
                    />
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
      </SimpleGrid>
      {data && data.books && data.books.length === 0 && (
        <Text textAlign="center" fontSize="1.5rem">
          لا يوجد كتاب حاليا
        </Text>
      )}
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