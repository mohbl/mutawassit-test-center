import React, { useState } from 'react';
import Carousel from 'react-elastic-carousel';
import { Helmet } from 'react-helmet';
// import parse from 'html-react-parser';

import {
  Box,
  Image,
  Heading,
  Text,
  Divider,
  Grid,
  Flex,
  Skeleton,
  useColorMode,
  Button,
} from '@chakra-ui/react';
import { useParams, useLocation, Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { getArticle } from '../redux/actions/articleActions';

import GlobalShare from '../util/GlobalShare';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function SingleBlog({ getArticle }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const color = { light: 'black', dark: 'white' };
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  let query = useQuery();
  let id = query.get('id');
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    async function getData() {
      const res = await getArticle(id);
      console.log('API response:', res.data);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [id]);
  const ar = data && data.article_body;

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 3 },
    { width: 1900, itemsToShow: 4 },
  ];
  const bookBreakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4, itemsToScroll: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 4 },
  ];
  return (
    <Box mt={['1.5em', '1.5em', '6em']} p="1em">
      {data && (
        <Box>
          <Helmet>
            <title>{data.title}</title>
          </Helmet>
          <Box
            pr={['2%', '2%', '7%', '7%']}
            pl={['2%', '2%', '7%', '7%']}
            mb="8"
            textAlign={['center', 'center', 'right']}
          >
            <Heading fontFamily="diodrum-bold !important" mb="2">
              {' '}
              {data.title}{' '}
            </Heading>
            <Text fontSize="2xl" fontFamily="diodrum-med !important">
              {data.sub_title}
            </Text>
          </Box>
          <Flex justifyContent="center">
            <Box mb="8">
              <Skeleton w="100%" isLoaded={loaded}>
                <Image
                  loading="lazy"
                  w="100%"
                  onLoad={imageLoaded}
                  src={`${process.env.REACT_APP_STORAGE}/${data.image}`}
                ></Image>
              </Skeleton>
            </Box>
          </Flex>

          <Grid
            d={['block', 'block', 'grid', 'grid']}
            pr={['2%', '2%', '7%', '7%']}
            pl={['2%', '2%', '7%', '7%']}
            templateColumns={['1fr', '1fr', '0.5fr 2fr', '0.5fr 2fr']}
            gap="10px"
          >
            <Box position="relative">
              <Box
                position="sticky"
                top="0"
                display={['block', 'block', 'block', 'block']}
                textAlign={['center', 'start', 'start', 'start']}
              >
                <Box mb="8">
                  {data.author_image && (
                    //                 <Box
                    //                   mt="2"
                    //                   mb="4"
                    //                   style={{
                    //                     background: `
                    // url('${process.env.REACT_APP_STORAGE}/${data.author_image}')`,
                    //                   }}
                    //                   className="detail-image"
                    //                   w="80%"
                    //                   h="270px"
                    //                 ></Box>
                    <img
                      mt="2"
                      className="detail-image"
                      mb="4"
                      w="70%"
                      src={`${process.env.REACT_APP_STORAGE}/${data.author_image}`}
                    />
                  )}
                  <Heading mb="4" fontFamily="diodrum-med !important" size="md">
                    {data.author}
                  </Heading>
                  {data.author_optional && (
                      <Heading
                          mb="4"
                          fontFamily="diodrum-med !important"
                          size="md"
                      >
                        {data.author_optional}
                      </Heading>
                  )}
                    <Heading
                      mb="4"
                      fontFamily="diodrum-med !important"
                      size="md"
                    >
                      {data.author}
                    </Heading>
                  )}

                  {data.translator && (
                    <Heading fontFamily="diodrum-med !important" size="sm">
                      ترجمة: {data.translator}
                    </Heading>
                  )}
                  {data.reference && (
                    <Box
                      fontSize="md"
                      dangerouslySetInnerHTML={{
                        __html: data.reference,
                      }}
                    ></Box>
                  )}
                  {data.pdf && (
                    <Box
                      mt="4"
                      fontFamily="diodrum-med !important"
                      fontSize="lg"
                      fontWeight="bold"
                      //   textDecoration="underline"
                    >
                      <a
                        href={`${process.env.REACT_APP_STORAGE}/${data.pdf}`}
                        download
                        target="_blank"
                        rel="noreferrer"
                      >
                        <Button
                          _hover={{ bg: '#212121' }}
                          bg="black"
                          color="white"
                        >
                          تحميل
                        </Button>
                      </a>
                    </Box>
                  )}
                </Box>
              </Box>
            </Box>
            <Box>
              <Box
                fontSize="2xl"
                mb="8"
                pl={['2%', '2%', '15%', '15%']}
                pr={['2%', '2%', '0%', '0%']}
                className="dont-break-out"
                dangerouslySetInnerHTML={{
                  __html: data.body,
                }}
              ></Box>

              <Box
                pl={['2%', '2%', '15%', '15%']}
                pr={['2%', '2%', '0%', '0%']}
                dangerouslySetInnerHTML={{
                  __html: data.soundcloud_link,
                }}
              ></Box>
              <Flex mb="8" justifyContent="center">
                <Box
                  pl={['2%', '2%', '15%', '15%']}
                  pr={['2%', '2%', '0%', '0%']}
                  dangerouslySetInnerHTML={{
                    __html: data.youtube_link,
                  }}
                ></Box>
              </Flex>
            </Box>
          </Grid>

          <GlobalShare></GlobalShare>
          {data && data.books && data.books.length > 0 &&(
            <Box
              pr="5%"
              pl="3%"
              //   bg={bg[colorMode]}
              bg="black"
              borderBottom="1px solid white"
            >
              <Box
                mt="100px"
                mb="4"
                //    color={color[colorMode]}
                color="white"
              >
                <Heading
                  fontFamily="diodrum-med !important"
                  mr="6%"
                  p="4"
                  size="lg"
                >
                  كتب ذات صلة
                </Heading>
              </Box>
              <Carousel
                breakPoints={bookBreakPoints}
                isRTL={true}
                style={{
                  //   marginTop: 100,

                  paddingBottom: 10,
                }}
                // itemsToScroll={3}
                // itemsToShow={3}
              >
                {data.books.map(book => (
                  <Box mx=".5em">
                    <Link key={book.id} to={`/book/${book.id}`}>
                      <Box mb="4" pb="4" cursor="pointer">
                        <Image
                          loading="lazy"
                          w="225px"
                          h="350px"
                          m="0 auto"
                          shadow="lg"
                          src={`${process.env.REACT_APP_STORAGE}/${book.cover}`}
                        ></Image>
                        <Box mt="4" textAlign="center">
                          <Text
                            color="white"
                            fontFamily="diodrum-med !important"
                            fontWeight="500"
                            fontSize="xl"
                            mb="8"
                          >
                            {book.title}
                          </Text>
                          {/* <Text fontSize="md">{book.sub_title}</Text>
                        <Text fontSize="sm">{book.author}</Text>
                      <Text fontWeight="bold">${book.price}</Text> */}
                        </Box>
                      </Box>
                    </Link>
                  </Box>
                ))}
              </Carousel>
            </Box>
          )}
          {data && data.maitres && data.maitres.length (
            <Box
              pr="5%"
              pl="3%"
              bg={bg[colorMode]}
              color="black"
              borderBottom="1px solid white"
            >
              <Box mb="4" color={color[colorMode]}>
                <Heading
                  fontFamily="diodrum-med !important"
                  mr="5%"
                  p="4"
                  size="lg"
                >
                  مقالات ذات صلة
                </Heading>
              </Box>
              <Carousel
                breakPoints={breakPoints}
                isRTL={true}
                style={{
                  //   marginTop: 100,

                  paddingBottom: 10,
                }}
                // itemsToScroll={3}
                // itemsToShow={3}
              >
                {data.maitres.map(article => (
                  <Box mx=".5em">
                    <a href={`/singlePost?id=${article.id}`}>
                      <Box
                        bg="white"
                        // p="2"
                        pb="4"
                        m="4"
                        m="0 auto"
                        shadow="lg"
                        cursor="pointer"
                      >
                        <Box>
                          <Skeleton w="100%" isLoaded={loaded}>
                            <Image
                              loading="lazy"
                              w="100%"
                              onLoad={imageLoaded}
                              src={`${process.env.REACT_APP_STORAGE}/${article.image}`}
                            />
                          </Skeleton>
                          <Text
                            m="2"
                            mt="4"
                            fontSize="lg"
                            fontFamily="diodrum-med !important"
                          >
                            {' '}
                            {article.author}{' '}
                          </Text>
                          <Heading
                            fontFamily="diodrum-med !important"
                            m="2"
                            size="lg"
                          >
                            {article.title}
                          </Heading>
                          <Box
                            m="4"
                            fontSize="xl"
                            className="content event-body"
                          >
                            <Box
                              dangerouslySetInnerHTML={{ __html: article.body }}
                            />
                          </Box>
                        </Box>
                      </Box>
                    </a>
                  </Box>
                ))}
              </Carousel>
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getArticle: id => dispatch(getArticle(id)) };
};

export default connect(null, mapDispatchToProps)(SingleBlog);
