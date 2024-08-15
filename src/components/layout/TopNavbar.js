import React, { useCallback } from 'react';
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
  useBreakpointValue,
  Center,
  Spinner,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSearch } from '../../redux/actions/searchActions';
import { FaSearch } from 'react-icons/fa';
import { AiOutlineShop } from 'react-icons/ai';
import Newsletter from './NewsLetter';
import hdark from '../../images/hdark.png';
import hlight from '../../images/hlight.png';
import { connectHits, connectSearchBox, connectStateResults, InstantSearch, Index } from 'react-instantsearch-dom';
import algoliasearch from 'algoliasearch/lite';

const searchClient = algoliasearch(
  process.env.REACT_APP_algoliaAppKey,
  process.env.REACT_APP_algoliaAdminKey
);

function Navbar({ getSearch, searchResults, isLoading }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const bgIcon = { light: '#000', dark: '#fff' };
  const color = { light: 'white', dark: 'black' };

  const handleSearch = useCallback((query) => {
    if (query.trim()) {
      getSearch(query);
    }
  }, [getSearch]);

  const CustomSearchBox = ({ currentRefinement, refine }) => (
    <Input
      className="search-box"
      color="black"
      bg="white"
      placeholder="ابحث عن الكتب, المقالات, الكتاب ..."
      type="search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
  );

  const Books = ({ hits }) => (
    <Box>
      {hits[0] && <Heading m="8">كتب</Heading>}
      <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
        {hits.map(hit => (
          <Link onClick={onClose} key={hit.objectID} to={`/book/${hit.id}`}>
            <Image loading="lazy" src={`${process.env.REACT_APP_STORAGE}/${hit.cover}`} />
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
      {hits[0] && <Heading m="8">كتاب</Heading>}
      <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
        {hits.map(hit => (
          <Link onClick={onClose} key={hit.objectID} to={`/author/${hit.id}`}>
            <Image loading="lazy" src={`${process.env.REACT_APP_STORAGE}/${hit.image}`} />
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
      {hits[0] && <Heading m="8">مقالات</Heading>}
      <SimpleGrid spacing={8} columns={[2, 2, 3, 8]}>
        {hits.map(hit => (
          <Link onClick={onClose} key={hit.objectID} to={`/article/${hit.id}`}>
            <Image loading="lazy" src={`${process.env.REACT_APP_STORAGE}/${hit.image}`} />
            <Heading size="md" mt="2">
              {hit.title}
            </Heading>
          </Link>
        ))}
      </SimpleGrid>
    </Box>
  );

  const BooksHits = connectHits(Books);
  const BooksResults = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? <BooksHits /> : null
  );
  const AuthorsHits = connectHits(Authors);
  const AuthorsResults = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? <AuthorsHits /> : null
  );
  const ArticlesHits = connectHits(Articles);
  const ArticlesResults = connectStateResults(({ searchState }) =>
    searchState && searchState.query ? <ArticlesHits /> : null
  );

  const SearchBox = connectSearchBox(CustomSearchBox);

  const navClassName = useBreakpointValue({ base: '', md: 'topNavbar' });

  return (
    <Flex
      h="70px"
      className={navClassName}
      borderBottom="1px solid #ddd"
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="0.5rem"
      color={color[colorMode]}
      bg={bg[colorMode]}
    >
      <Box
        ml="8%"
        d="flex"
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <a href={process.env.REACT_APP_HOME} target="_blank" rel="noreferrer">
          <Box
            cursor="pointer"
            d="flex"
            rounded="5px"
            color={color[colorMode]}
            m="3px"
            w="50px"
            h="50px"
            fontSize="30px"
            position="relative"
            fontWeight="bold"
            justifyContent="center"
          >
            {colorMode === 'light' ? (
              <Image rounded="5px" w="50px" h="50px" src={hdark} />
            ) : (
              <Image rounded="5px" w="50px" h="50px" src={hlight} />
            )}
          </Box>
        </a>

        <Box fontSize="18px">
          <Box
            rounded="5px"
            onClick={onOpen}
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            w="50px"
            h="50px"
            fontSize="28px"
          >
            <FaSearch />
          </Box>
          <Drawer
            placement="bottom"
            onClose={onClose}
            isOpen={isOpen}
            size="full"
          >
            <DrawerOverlay>
              <DrawerContent pt={['100px', '0']} bg="black" color="white">
                <DrawerCloseButton
                  position="absolute"
                  top="50px"
                  left="10px"
                  right="none"
                  mt={['100px', '0']}
                />
                <DrawerHeader fontSize="36px">بحث</DrawerHeader>
                <DrawerBody>
                  <InstantSearch indexName="books" searchClient={searchClient}>
                    <SearchBox />
                    <Index indexName="books">
                      <BooksResults />
                    </Index>
                    <Index indexName="authors">
                      <AuthorsResults />
                    </Index>
                    <Index indexName="articles">
                      <ArticlesResults />
                    </Index>
                  </InstantSearch>
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>
        </Box>
        <Newsletter />
        <a target="_blank" rel="noreferrer" href={process.env.REACT_APP_SHOP}>
          <Box
            rounded="5px"
            bg={bgIcon[colorMode]}
            color={color[colorMode]}
            m="3px"
            p="10px"
            w="50px"
            h="50px"
            fontSize="28px"
          >
            <AiOutlineShop />
          </Box>
        </a>
      </Box>
    </Flex>
  );
}

const mapStateToProps = state => ({
  searchResults: state.search.results,
  isLoading: state.search.isLoading,
});

const mapDispatchToProps = {
  getSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
