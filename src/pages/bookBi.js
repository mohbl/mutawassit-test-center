import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';

import {
  Box,
  Heading,
  Text,
  Image,
  Divider,
  Button,
  Grid,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  List,
  ListItem,
  Flex,
  Skeleton,
  useColorMode,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  AccordionItem,
  Accordion,
  Spinner,
  AspectRatio,
  useBreakpointValue,
  useMediaQuery,
} from '@chakra-ui/react';
import { useParams, Link } from 'react-router-dom';
import moment from 'moment';
import { connect } from 'react-redux';
import { getBook } from '../redux/actions/booksActions';

import GlobalShare from '../util/GlobalShare';

function Book({ getBook }) {
  const { colorMode } = useColorMode();
  const { id } = useParams();
  const [breakPointMd] = useMediaQuery('(min-width: 48em)');
  const [isSmallerThan965] = useMediaQuery('(max-width: 965px)');
  console.log('isSmallerThan965', isSmallerThan965);

  const [data, setData] = useState(null);
  const [loaded, setLoaded] = useState(false);

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const color = { light: 'black', dark: 'white' };
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

  useEffect(() => {
    async function getData() {
      const res = await getBook(id);
      if (res) {
        setData(res.data);
      }
    }
    getData();
  }, [id]);

  const imageLoaded = () => {
    setLoaded(true);
  };

  return (
    <Box mt="160px">
      {!data && (
        <Box textAlign="center">
          <Spinner size="xl" />
        </Box>
      )}

      {data && (
        <>
          <Helmet>
            <title>{data.title}</title>
          </Helmet>
          <Flex
            direction={['column', 'column', 'column', 'row']}
            px={['2%', '2%', '5%', '5%']}
            gap="10px"
          >
            <Box w={{ base: '100%', lg: '30%' }} maxW="400px" mx="auto">
              <Box>
                <Skeleton isLoaded={loaded}>
                  <Image
                    laading="lazy"
                    onLoad={imageLoaded}
                    shadow="lg"
                    mx="auto"
                    src={`${process.env.REACT_APP_STORAGE}/${data.cover}`}
                  />
                </Skeleton>
              </Box>
              <Flex direction="column" align="center" py="1.5em">
                <a
                  target="_blank"
                  href={`${process.env.REACT_APP_SHOP}/book/${data.id}`}
                  style={{ width: '100%' }}
                >
                  <Button
                    rounded="20px"
                    mt="4"
                    w="100%"
                    colorScheme="red"
                    fontFamily="diodrum-med !important"
                  >
                    لشراء الكتاب المس هنا
                  </Button>
                </a>
                <Box mt="4" w="90%">
                  <GlobalShare />
                </Box>
                {data.podcast && (
                  <Box>
                    <iframe
                      title={data.title}
                      width="100%"
                      height="100"
                      scrolling="no"
                      frameborder="no"
                      allow="autoplay"
                      src={data.podcast}
                    ></iframe>
                  </Box>
                )}
                {data.video && (
                  <AspectRatio ratio={1}>
                    <Box
                      fontSize="2xl"
                      className="content"
                      dangerouslySetInnerHTML={{ __html: data.video }}
                    ></Box>
                  </AspectRatio>
                )}
              </Flex>
            </Box>
            <Box
              w={{ base: '100%', lg: '70%' }}
              mr={{ base: '0', lg: '1.5em' }}
              p="1em"
            >
              <Box>
                <Heading fontFamily="diodrum-med !important" mb="4">
                  {data.title}
                </Heading>
                <Divider />
                <Text fontFamily="diodrum-med !important" fontSize="2xl">
                  {data.sub_title}
                </Text>
                {data.author.map(author => (
                  <Box key={author.id} d="inline-block">
                    <Link key={author.id} to={`/author/${author.id}`}>
                      <Text
                        _hover={{
                          bg: 'black',
                          color: 'white',
                          textDecoration: 'underline',
                        }}
                        mt="2"
                        fontSize="2xl"
                        color="gray.500"
                      >
                        {author.name}
                      </Text>
                    </Link>
                  </Box>
                ))}
                <Divider />
                {data.translate_from && (
                  <Text mt="2" fontSize="2xl">
                    ترجم عن : {data.translate_from}
                  </Text>
                )}
                <Box
                  my="4"
                  fontSize="2xl"
                  className="content"
                  dangerouslySetInnerHTML={{ __html: data.overview }}
                />
                <Divider />
              </Box>
              {breakPointMd && (
                <Tabs>
                  <TabList className="booktablist">
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      عن الكتاب
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      عن المؤلف
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      فهرس الكتاب
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      من الكتاب
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      {' '}
                      في الصحافة
                    </Tab>
                    <Tab whiteSpace="nowrap" fontSize="18px">
                      معلومات الكتاب
                    </Tab>
                  </TabList>

                  <TabPanels>
                    {data.description && (
                      <TabPanel>
                        <Box
                          fontSize="2xl"
                          className="content"
                          style={{ WebkitUserSelect: 'none' }}
                          dangerouslySetInnerHTML={{
                            __html: data.description,
                          }}
                        />
                      </TabPanel>
                    )}
                    {data.author && (
                      <TabPanel>
                        {data.author.map(author => (
                          <Box key={author.id}>
                            <Heading size="lg">{author.name}</Heading>
                            <Text m="2" fontSize="2xl">
                              {author.author_bio}
                            </Text>
                          </Box>
                        ))}
                      </TabPanel>
                    )}
                    {data.index && (
                      <TabPanel fontSize="xl">
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{ __html: data.index }}
                        />
                      </TabPanel>
                    )}
                    {data.from_book && (
                      <TabPanel fontSize="xl">
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{
                            __html: data.from_book,
                          }}
                        />
                      </TabPanel>
                    )}
                    {data.press_external_link && (
                      <TabPanel>
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{
                            __html: data.press_external_link,
                          }}
                        />
                      </TabPanel>
                    )}
                    <TabPanel fontSize="xl">
                      <List mt="4">
                        <ListItem>الناشر : {data.publisher} </ListItem>
                        <ListItem>
                          تاريخ النشر :{' '}
                          {moment(data.publish_date).format('yyyy/MM/DD')}
                        </ListItem>
                        <ListItem>عدد الصفحات : {data.page_number} </ListItem>
                        <ListItem dir="ltr"> {data.isbn} : ISBN </ListItem>
                        <ListItem>السعر : {data.price}€</ListItem>
                        <ListItem>
                          هاشتاغ :{' '}
                          <Box
                            d="inline"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.hashtag,
                            }}
                          />
                        </ListItem>
                      </List>
                    </TabPanel>
                  </TabPanels>
                </Tabs>
              )}
              {!breakPointMd && (
                <Accordion defaultIndex={[0]} allowToggle allowMultiple={true}>
                  {data.description && (
                    <AccordionItem>
                      <AccordionButton>
                        <Text whiteSpace="nowrap" fontSize="1.5em">
                          عن الكتاب
                        </Text>
                        <AccordionIcon mb="-5px" mr="5px" />
                      </AccordionButton>
                      <AccordionPanel p="0" pb="1em">
                        <Box
                          fontSize="2xl"
                          className="content"
                          style={{ WebkitUserSelect: 'none' }}
                          dangerouslySetInnerHTML={{
                            __html: data.description,
                          }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.author && (
                    <AccordionItem>
                      <AccordionButton>
                        <Text whiteSpace="nowrap" fontSize="1.5em">
                          عن المؤلف
                        </Text>
                        <AccordionIcon mb="-5px" mr="5px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        {data.author.map(author => (
                          <Box key={author.id}>
                            <Heading size="lg">{author.name}</Heading>
                            <Text m="2" fontSize="2xl">
                              {author.author_bio}
                            </Text>
                          </Box>
                        ))}
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.index && (
                    <AccordionItem>
                      <AccordionButton>
                        <Text whiteSpace="nowrap" fontSize="1.5em">
                          فهرس الكتاب
                        </Text>
                        <AccordionIcon mb="-5px" mr="5px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{ __html: data.index }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.from_book && (
                    <AccordionItem>
                      <AccordionButton>
                        <Text whiteSpace="nowrap" fontSize="1.5em">
                          من الكتاب
                        </Text>
                        <AccordionIcon mb="-5px" mr="5px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{
                            __html: data.from_book,
                          }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  {data.press_external_link && (
                    <AccordionItem>
                      <AccordionButton>
                        <Text whiteSpace="nowrap" fontSize="1.5em">
                          في الصحافة
                        </Text>
                        <AccordionIcon mb="-5px" mr="5px" />
                      </AccordionButton>
                      <AccordionPanel pb={4}>
                        <Box
                          fontSize="xl"
                          className="content"
                          dangerouslySetInnerHTML={{
                            __html: data.press_external_link,
                          }}
                        />
                      </AccordionPanel>
                    </AccordionItem>
                  )}
                  <AccordionItem>
                    <AccordionButton>
                      <Text whiteSpace="nowrap" fontSize="1.5em">
                        معلومات الكتاب
                      </Text>
                      <AccordionIcon mb="-5px" mr="5px" />
                    </AccordionButton>
                    <AccordionPanel fontSize="xl" pb={4}>
                      <List>
                        <ListItem>الناشر : {data.publisher} </ListItem>
                        <ListItem>
                          تاريخ النشر :{' '}
                          {moment(data.publish_date).format('yyyy/MM/DD')}
                        </ListItem>
                        <ListItem>عدد الصفحات : {data.page_number} </ListItem>
                        <ListItem dir="ltr"> {data.isbn} : ISBN </ListItem>
                        <ListItem>السعر : {data.price}€</ListItem>
                        <ListItem>
                          هاشتاغ :{' '}
                          <Box
                            d="inline"
                            className="content"
                            dangerouslySetInnerHTML={{
                              __html: data.hashtag,
                            }}
                          />
                        </ListItem>
                      </List>
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              )}
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
}

const mapDispatchToProps = dispatch => {
  return { getBook: id => dispatch(getBook(id)) };
};

export default connect(null, mapDispatchToProps)(Book);
