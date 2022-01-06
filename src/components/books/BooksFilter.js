import React from 'react';

import {
  Box,
  Flex,
  Text,
  useColorMode,
  useDisclosure,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  useMediaQuery,
} from '@chakra-ui/react';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

// import { connect } from 'react-redux';
// import { getSeries } from '../../redux/actions/seriesActions';
import { countires } from './countires';

export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const [isLargerThan715] = useMediaQuery('(min-width: 715px)');
  const [isLargerThan430] = useMediaQuery('(min-width: 430px)');
  const handleToggle = () => setShow(!show);
  //   console.log(countires);

  const countriesHalfIndex = parseInt(countires.length / 2);
  const countriesQuarterIndex = parseInt(countires.length / 3) - 1;
  console.log('countriesQuarterIndex', countriesQuarterIndex);

  // Small
  const countriesBoxOne = countires.filter(
    (c, idx) => idx <= countriesHalfIndex
  );
  const countriesBoxTwo = countires.filter(
    (c, idx) => idx > countriesHalfIndex
  );

  // Large
  const largeCountriesBoxOne = countires.filter(
    (c, idx) => idx <= countriesQuarterIndex
  );
  const largeCountriesBoxTwo = countires.filter(
    (c, idx) =>
      idx > countriesQuarterIndex && idx <= countriesQuarterIndex * 2 + 1
  );
  const largeCountriesBoxThree = countires.filter(
    (c, idx) => idx > countriesQuarterIndex * 2 + 1
  );

  const { colorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };
  const onOpened = () => {
    document.body.style.overflow = 'hidden';
  };

  const onClosed = () => {
    document.body.style.overflow = '';
  };
  return (
    <Flex
      borderBottom="1px solid #ddd"
      className={'filterNavTop'}
      as="nav"
      align="center"
      bg={bg[colorMode]}
      overflowX={{ base: 'auto', sm: 'auto' }}
      wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
      direction={['row', 'row', 'row', 'row']}
      px="1.5em"
    >
      <NavLink
        activeStyle={{
          fontWeight: 'bold',
          color: 'white',
          backgroundColor: 'black',
          height: '100%',
          marginLeft: 5,
        }}
        to="/books?category=دراسات المركز"
      >
        <Flex h="100%" direction="column" justifyContent="center">
          <Text
            whiteSpace="nowrap"
            fontWeight="bold"
            ml="4"
            mr="4"
            py=".5em"
            pb="1em"
            px="1em"
            fontSize={['lg', '2xl']}
            fontFamily="diodrum-med !important"
          >
            جميعها
          </Text>
        </Flex>
      </NavLink>

      <Menu onOpen={onOpened} onClose={onClosed}>
        <MenuButton
          display="block"
          // px={4}
          // py={2}
          whiteSpace="nowrap"
          as={Text}
          py=".5em"
          pb=".8em"
          px="1em"
          fontSize={['lg', '2xl']}
          fontWeight="bold"
          transition="all 0.2s"
          // _hover={{ bg: 'gray.100' }}
          // _focus={{ outline: 0, boxShadow: 'outline' }}
          fontFamily="diodrum-med !important"
        >
          البلدان
          <FaChevronDown
            style={{
              display: 'inline',
              fontSize: 15,
              marginRight: 3,
              marginTop: 5,
            }}
          />
        </MenuButton>
        <MenuList
          w="100vw"
          color="white"
          bg={filter[colorMode]}
          shadow="xl"
          py="1em"
        >
          <Flex
            px={['5%', '5%', '20%', '20%']}
            gap={isLargerThan430 ? '5em' : '2em'}
          >
            {isLargerThan715 && (
              <>
                <Box w="min-content">
                  {largeCountriesBoxOne.map(([code, country]) => (
                    <Link
                      key={code}
                      onClick={handleToggle}
                      to={`/books?category=دراسات المركز&countryCode=${code}`}
                    >
                      <Box>
                        <MenuItem
                          _focus={{ bg: 'white', color: 'black' }}
                          _hover={{ bg: 'white', color: 'black' }}
                          fontSize="xl"
                          pb=".5em"
                          px="1em"
                        >
                          <Box>
                            <Text
                              fontFamily="diodrum-med !important"
                              fontSize={['md', 'md', 'lg', 'lg']}
                              textAlign="right"
                            >
                              {country}
                            </Text>
                          </Box>
                        </MenuItem>
                      </Box>
                    </Link>
                  ))}
                </Box>
                <Box w="min-content">
                  {largeCountriesBoxTwo.map(([code, country]) => (
                    <Link
                      key={code}
                      // style={{ margin: '50px !important' }}
                      onClick={handleToggle}
                      to={`/books?category=دراسات المركز&countryCode=${code}`}
                    >
                      <Box>
                        <MenuItem
                          _focus={{ bg: 'white', color: 'black' }}
                          _hover={{ bg: 'white', color: 'black' }}
                          fontSize="xl"
                          pb=".5em"
                          px="1em"
                        >
                          <Box>
                            <Text
                              fontFamily="diodrum-med !important"
                              fontSize={['md', 'md', 'lg', 'lg']}
                              textAlign="right"
                            >
                              {country}
                            </Text>
                          </Box>
                        </MenuItem>
                      </Box>
                    </Link>
                  ))}
                </Box>
                <Box w="min-content">
                  {largeCountriesBoxThree.map(([code, country]) => (
                    <Link
                      key={code}
                      // style={{ margin: '50px !important' }}
                      onClick={handleToggle}
                      to={`/books?category=دراسات المركز&countryCode=${code}`}
                    >
                      <Box>
                        <MenuItem
                          _focus={{ bg: 'white', color: 'black' }}
                          _hover={{ bg: 'white', color: 'black' }}
                          fontSize="xl"
                          pb=".5em"
                          px="1em"
                        >
                          <Box>
                            <Text
                              fontFamily="diodrum-med !important"
                              fontSize={['md', 'md', 'lg', 'lg']}
                              textAlign="right"
                            >
                              {country}
                            </Text>
                          </Box>
                        </MenuItem>
                      </Box>
                    </Link>
                  ))}
                </Box>
              </>
            )}
            {!isLargerThan715 && (
              <>
                <Box w="min-content">
                  {countriesBoxOne.map(([code, country]) => (
                    <Link
                      key={code}
                      // style={{ margin: '50px !important' }}
                      onClick={handleToggle}
                      to={`/books?category=دراسات المركز&countryCode=${code}`}
                    >
                      <Box>
                        <MenuItem
                          _focus={{ bg: 'white', color: 'black' }}
                          _hover={{ bg: 'white', color: 'black' }}
                          fontSize="xl"
                          pb=".5em"
                          px="1em"
                        >
                          <Box>
                            <Text
                              fontFamily="diodrum-med !important"
                              fontSize={['md', 'md', 'lg', 'lg']}
                              textAlign="right"
                            >
                              {country}
                            </Text>
                          </Box>
                        </MenuItem>
                      </Box>
                    </Link>
                  ))}
                </Box>
                <Box w="min-content">
                  {countriesBoxTwo.map(([code, country]) => (
                    <Link
                      key={code}
                      // style={{ margin: '50px !important' }}
                      onClick={handleToggle}
                      to={`/books?category=دراسات المركز&countryCode=${code}`}
                    >
                      <Box>
                        <MenuItem
                          _focus={{ bg: 'white', color: 'black' }}
                          _hover={{ bg: 'white', color: 'black' }}
                          fontSize="xl"
                          pb=".5em"
                          px="1em"
                        >
                          <Box>
                            <Text
                              fontFamily="diodrum-med !important"
                              fontSize={['md', 'md', 'lg', 'lg']}
                              textAlign="right"
                            >
                              {country}
                            </Text>
                          </Box>
                        </MenuItem>
                      </Box>
                    </Link>
                  ))}
                </Box>
              </>
            )}
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}
