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
import Masonry from 'react-masonry-css';

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

  const breakpointColumns = {
    default: 4,
    1300: 4,
    1100: 3,
    1000: 2,
    850: 1,
  };

  return (
    <Box>
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}

      <Masonry breakpointCols={breakpointColumns}>
        {data &&
          data.books &&
          data.books.length !== 0 &&
          data.books.map(book => (
            <Box mx="1em" mb="2em">
              <Link to={`/book/${book.id}`} key={book.id}>
                <Box mt="8" pb="4" shadow="lg" bg={bg[colorMode]}>
                  <Image
                    loading="lazy"
                    mt="2"
                    w="100%"
                    src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                  ></Image>
                  <Box p="1em">
                    <Text fontFamily="diodrum-med !important" m="4">
                      {' '}
                      {book?.author[0]?.name}{' '}
                    </Text>
                    <Heading fontFamily="diodrum-bold !important" m="4">
                      {' '}
                      {book.title}{' '}
                    </Heading>

                    <Box
                      m="4"
                      fontSize="xl"
                      className="content books__content"
                      dangerouslySetInnerHTML={{ __html: book.overview }}
                    ></Box>
                  </Box>
                </Box>
              </Link>
            </Box>
          ))}
      </Masonry>
      {/* </SimpleGrid> */}
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
