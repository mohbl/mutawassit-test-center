import React from 'react';

import {
  Box,
  Flex,
  useColorMode,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Input,
  Image,
  SimpleGrid,
  Heading,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearch } from '../../redux/actions/searchActions';

import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Index,
  connectHits,
  connectSearchBox,
  connectStateResults,
} from 'react-instantsearch-dom';

import { FaSearch, FaDollarSign } from 'react-icons/fa';
import Newsletter from './NewsLetter';

const searchClient = algoliasearch(
  process.env.REACT_APP_algoliaAppKey,
  process.env.REACT_APP_algoliaAdminKey
);

function Navbar({ getSearch }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };

  const Books = ({ hits }) => (
    <Box>
      {hits[0] !== undefined && <Heading m="8">كتب</Heading>}

      <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
        {hits &&
          hits.map(hit => (
            <Link onClick={onClose} key={hit.objectID} to={`/book/${hit.id}`}>
              <Image
                src={`${process.env.REACT_APP_STORAGE}/${hit.cover}`}
              ></Image>
              <Heading size="md" mt="2">
                {hit.title}
              </Heading>
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
  const Authors = ({ hits }) => (
    <Box>
      {hits[0] !== undefined && <Heading m="8">كتاب</Heading>}

      <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
        {hits &&
          hits.map(hit => (
            <Link onClick={onClose} key={hit.objectID} to={`/author/${hit.id}`}>
              <Image
                src={`${process.env.REACT_APP_STORAGE}/${hit.image}`}
              ></Image>
              <Heading size="md" mt="2">
                {hit.name}
              </Heading>
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
  const Articles = ({ hits }) => (
    <Box>
      {hits[0] !== undefined && <Heading m="8">مقالات</Heading>}

      <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
        {hits &&
          hits.map(hit => (
            <Link
              onClick={onClose}
              key={hit.objectID}
              to={`/singlePost?id=${hit.id}`}
            >
              <Image
                src={`${process.env.REACT_APP_STORAGE}/${hit.image}`}
              ></Image>
              <Heading size="md" mt="2">
                {hit.title}
              </Heading>
            </Link>
          ))}
      </SimpleGrid>
    </Box>
  );
  const CustomSearchBox = ({ currentRefinement, refine }) => (
    <Input
      className="search-box"
      color="black"
      bg="white"
      placeholder=" ابحث عن الكتب,المقالات,الكتاب ..."
      type="search"
      value={currentRefinement}
      onChange={event => refine(event.currentTarget.value)}
    ></Input>
  );

  const BooksHits = connectHits(Books);
  const BooksResults = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? <BooksHits></BooksHits> : null
  );
  const AuthorsHits = connectHits(Authors);
  const AuthorsResults = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? <AuthorsHits></AuthorsHits> : null
  );
  const ArticlesHits = connectHits(Articles);
  const ArticlesResults = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? <ArticlesHits></ArticlesHits> : null
  );
  const SearchBox = connectSearchBox(CustomSearchBox);

  return (
    <Flex
      h="70px"
      borderBottom="1px solid #ddd"
      style={{ position: 'fixed', width: '100%', zIndex: '99', top: 0 }}
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      //   shadow="lg"
      color={color[colorMode]}
      bg={bg[colorMode]}
    >
      <Box
        ml="8%"
        // display={{ base: show ? 'block' : 'none', md: 'flex' }}
        d="flex"
        // width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <Box fontSize="18px">
          {/* <FaSearch onClick={onOpen}></FaSearch> */}
          <Box
            rounded="5px"
            onClick={onOpen}
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            fontSize="28px"
          >
            <FaSearch></FaSearch>
          </Box>
          <Drawer
            placement="bottom"
            onClose={onClose}
            isOpen={isOpen}
            size="full"
          >
            <DrawerOverlay>
              <DrawerContent bg="black" color="white">
                <DrawerCloseButton
                  position="absolute"
                  top="10px"
                  left="10px"
                  right="none"
                />

                <DrawerHeader fontSize="36px">بحث</DrawerHeader>
                <DrawerBody>
                  {/* <Input
                    color="black"
                    placeholder=" ابحث عن الكتب,المقالات,الكتاب ..."
                  ></Input>
                  <Box h="400px">
                    <Text>هنا ستكون نتيجة البحث</Text>
                  </Box> */}
                  <InstantSearch indexName="books" searchClient={searchClient}>
                    <SearchBox />
                    <Index indexName="books">
                      {/* <BooksHits></BooksHits> */}
                      <BooksResults></BooksResults>
                    </Index>

                    <Index indexName="articles">
                      <ArticlesResults />
                    </Index>
                    <Index indexName="authors">
                      <AuthorsResults />
                    </Index>
                  </InstantSearch>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
        {/* <Box
          rounded="5px"
          bg={bgIcon[colorMode]}
          color={color[colorMode]}
          m="3px"
          p="10px"
          fontSize="28px"
        >
          <FaShoppingCart></FaShoppingCart>
        </Box> */}
        <Newsletter></Newsletter>
        <a
          rel="noreferrer"
          target="_blank"
          href={`${process.env.REACT_APP_SHOP}`}
        >
          <Box
            rounded="5px"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            fontSize="28px"
          >
            <FaDollarSign></FaDollarSign>
          </Box>
        </a>
      </Box>
    </Flex>
  );
}

const mapDispatchToProps = dispatch => {
  return { getSearch: id => dispatch(getSearch(id)) };
};

export default connect(null, mapDispatchToProps)(Navbar);
