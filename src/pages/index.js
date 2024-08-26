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
import { connect } from 'react-redux';
import { getHome } from '../redux/actions/homeActions';

function Home({ getHome }) {
  const { colorMode } = useColorMode();
  const [isSmallerThan500] = useMediaQuery('(max-width: 500px)');

  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [shuffledItems, setShuffledItems] = useState([]);

  const bg = { light: 'white', dark: '#151a23' };

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
        
        // Combine and shuffle articles and books
        const combinedItems = [
          ...(res.data.articles || []).map(item => ({ ...item, type: 'article' })),
          ...(res.data.books || []).map(item => ({ ...item, type: 'book' }))
        ];
        setShuffledItems(shuffleArray(combinedItems));
      }
    }
    getData();
  }, []);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const imageLoaded = () => {
    setLoaded(true);
  };

  const renderItem = (item) => {
    if (item.type === 'article') {
      const articleBody = item.body?.split('\n');
      const body =
        articleBody && articleBody.length > 1
          ? articleBody[0] + '' + articleBody[1]
          : articleBody?.[0] || '';

      return (
        <Box mb="1.5em" mx={isSmallerThan500 ? '0' : '1em'} key={item.id}>
          <Link to={`/singlePost?id=${item.id}`}>
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
                  src={`${process.env.REACT_APP_STORAGE}/${item.image}`}
                />
              </Skeleton>
              <Box p="1em">
                <Text fontFamily="diodrum-med !important" mb="4">
                  {item.author || item.author_optional}
                </Text>
                <Heading fontFamily="diodrum-bold !important" mb="4">
                  {item.title}
                </Heading>
                <Box
                  fontSize="xl"
                  className="content books__content event-body"
                >
                  <Box dangerouslySetInnerHTML={{ __html: body }} />
                </Box>
              </Box>
            </Box>
          </Link>
        </Box>
      );
    } else if (item.type === 'book') {
      return (
        <Box mb="1.5em" mx="1em" key={item.id}>
          <Link to={`/book/${item.id}`}>
            <Box my="8" pb="4" shadow="lg" bg={bg[colorMode]}>
              <Image
                loading="lazy"
                mt="2"
                w="100%"
                src={`${process.env.REACT_APP_STORAGE}/${item.cover}`}
              />
              <Box p="1em">
                <Text fontFamily="diodrum-med !important" mb="4">
                  {item?.author?.[0]?.name || item?.author?.[0]?.author_optional}
                </Text>
                <Heading fontFamily="diodrum-bold !important" mb="4">
                  {item.title}
                </Heading>
                <Box
                  fontSize="xl"
                  className="content books__content"
                  dangerouslySetInnerHTML={{ __html: item.overview }}
                />
              </Box>
            </Box>
          </Link>
        </Box>
      );
    }
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
        <Box d="flex" justifyContent="center">
          <Masonry
            breakpointCols={breakpointColumns}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {shuffledItems.map(item => renderItem(item))}
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