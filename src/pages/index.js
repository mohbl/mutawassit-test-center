import React, { useState, useEffect } from 'react';
import Masonry from 'react-masonry-css';
import { Helmet } from 'react-helmet';

import {
  Heading,
  Box,
  Image,
  Skeleton,
  Spinner,
  Text,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/core';
import { Link } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getHome } from '../redux/actions/homeActions';

function Home({ getHome }) {
  const { colorMode } = useColorMode();
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');

  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const bg = { light: 'white', dark: '#151a23' };

  const breakpointColumnsObj = {
    default: 3,
    1300: 3,
    1000: 2,
    600: 1,
  };
  const breakpointColumns = {
    default: 4,
    1300: 3,
    1100: 3,
    1000: 2,
    700: 1,
  };

  useEffect(() => {
    async function getData() {
      const res = await getHome();
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, []);

  const imageLoaded = () => {
    setLoaded(true);
  };

  return (
    <Box px={isSmallerThan500 ? '1em' : '8%'} mt="100px" mb="100px">
      <Helmet>
        <title>مركز دراسات ثقافات المتوسط</title>
      </Helmet>
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}
      <Box mb="2em">
        <Text mb="2">{data && data.image.name}</Text>
        <Image
          loading="lazy"
          src={`${process.env.REACT_APP_STORAGE}/${data && data.image.image}`}
        />
      </Box>
      <Box>
        <Box mb="2em" d="flex" justifyContent="center">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data &&
              data.articles &&
              data.articles.map(article => (
                <Box mb="1.5em" mx={isSmallerThan500 ? '0' : '1em'}>
                  <Link to={`/singlePost?id=${article.id}`}>
                    <Box
                      bg={bg[colorMode]}
                      w="100%"
                      shadow="lg"
                      pb="4"
                      mt="8"
                      cursor="pointer"
                    >
                      <Skeleton w="100%" isLoaded={loaded}>
                        <Image
                          loading="lazy"
                          w="100%"
                          onLoad={imageLoaded}
                          src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                        />
                      </Skeleton>
                      <Box p="1em">
                        <Text fontFamily="diodrum-med !important" mb="4">
                          {article.author}
                        </Text>
                        <Heading fontFamily="diodrum-bold !important" mb="4">
                          {article.title}
                        </Heading>
                        <Box
                          fontSize="xl"
                          className="content books__content event-body"
                        >
                          <Box
                            dangerouslySetInnerHTML={{ __html: article.body }}
                          />
                        </Box>
                      </Box>
                    </Box>
                  </Link>
                </Box>
              ))}
          </Masonry>
        </Box>
        <Box d="flex" justifyContent="center">
          <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {data &&
              data.books &&
              data.books.map(book => (
                <Box mb="1.5em" mx="1em">
                  <Link to={`/book/${book.id}`}>
                    <Box my="8" pb="4" shadow="lg" bg={bg[colorMode]}>
                      <Image
                        loading="lazy"
                        mt="2"
                        w="100%"
                        src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                      />
                      <Box p="1em">
                        <Text fontFamily="diodrum-med !important" mb="4">
                          {' '}
                          {book?.author[0]?.name}{' '}
                        </Text>
                        <Heading fontFamily="diodrum-bold !important" mb="4">
                          {' '}
                          {book.title}{' '}
                        </Heading>

                        <Box
                          fontSize="xl"
                          className="content books__content"
                          dangerouslySetInnerHTML={{ __html: book.overview }}
                        />
                      </Box>
                    </Box>
                  </Link>
                </Box>
              ))}
          </Masonry>
        </Box>
      </Box>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getHome: () => dispatch(getHome()) };
};

export default connect(null, mapDispatchToProps)(Home);
