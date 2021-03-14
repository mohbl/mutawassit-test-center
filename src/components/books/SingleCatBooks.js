import React from 'react';
import {
  SimpleGrid,
  Box,
  Image,
  Text,
  Heading,
  Spinner,
  useColorMode,
} from '@chakra-ui/core';
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
    700: 2,
  };

  return (
    <Box>
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      {/* <Box d="flex" m="4">
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
      </Box> */}
      {/* <SimpleGrid columns={[1, 2, 3, 5]}> */}
      <Masonry
        breakpointCols={breakpointColumns}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data &&
          data.books &&
          data.books.length !== 0 &&
          data.books.map(book => (
            // <Link key={book.id} to={`/book/${book.id}`}>
            //   <Box fontFamily="diodrum-med !important" mb="4" cursor="pointer">
            //     <Image
            //       w="225px"
            //       h="350px"
            //       m="0 auto"
            //       shadow="lg"
            //       src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
            //     ></Image>
            //     <Box mt="4" textAlign="center">
            //       <Text fontWeight="500" fontSize="xl">
            //         {book.title}
            //       </Text>
            //       <Box
            //         fontSize="2xl"
            //         className="content"
            //         dangerouslySetInnerHTML={{ __html: book.sub_title }}
            //       ></Box>

            //       <Text fontWeight="bold">${book.price}</Text>
            //     </Box>
            //   </Box>
            // </Link>
            <Link to={`/book/${book.id}`}>
              <Box mt="8" pb="4" shadow="lg" bg={bg[colorMode]}>
                <Image
                  mt="2"
                  w="100%"
                  src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                ></Image>
                <Heading m="4"> {book.title} </Heading>
                <Text m="2"> {book?.author[0]?.name} </Text>

                <Box
                  m="4"
                  fontSize="xl"
                  className="content"
                  dangerouslySetInnerHTML={{ __html: book.overview }}
                ></Box>
              </Box>
            </Link>
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
