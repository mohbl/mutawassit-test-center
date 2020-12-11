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
  SimpleGrid,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { FaChevronDown } from 'react-icons/fa';

import {
  FaGoogle,
  FaFacebookF,
  FaHamburger,
  FaShoppingCart,
  FaDollarSign,
  FaSearch,
  FaNewspaper,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
// import { connect } from 'react-redux';
// import { getSeries } from '../../redux/actions/seriesActions';
import { countires } from './countires';

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  console.log(countires);

  const { colorMode, toggleColorMode } = useColorMode();

  const bg = { light: '#fff', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };
  const [data, setData] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);
  const imageLoaded = () => {
    setLoaded(true);
  };
  //   React.useEffect(() => {
  //     async function getData() {
  //       const res = await getSeries();
  //       console.log(res);
  //       if (res) {
  //         setData(res.data);
  //       }
  //     }
  //     getData();
  //   }, []);

  return (
    <Flex
      h="70px"
      borderBottom="1px solid #ddd"
      style={{ position: 'fixed', width: '100%', zIndex: '99', top: '70px' }}
      as="nav"
      align="center"
      //   justify="space-between"

      padding="0.5rem"
      //   shadow="lg"
      //   color={color[colorMode]}
      bg={bg[colorMode]}
      overflowX={{ base: 'auto', sm: 'auto' }}
      wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
      direction={['row', 'row', 'row', 'row']}
    >
      <Menu>
        <MenuButton
          display="block"
          // px={4}
          // py={2}
          whiteSpace="nowrap"
          as={Text}
          //   mt={{ base: 4, md: 0 }}
          ml={8}
          mr="8"
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
          ></FaChevronDown>{' '}
        </MenuButton>
        <MenuList w="100vw" color="white" bg={filter[colorMode]} shadow="xl">
          <Flex
            pl={['5%', '5%', '20%', '20%']}
            pr={['5%', '5%', '20%', '20%']}
            h="500px"
            flexWrap="wrap"
            // columns={5}
            overflow="scroll"
          >
            {countires.map(([code, country]) => (
              <Link
                style={{ margin: '50px !important' }}
                onClick={handleToggle}
                to={`/books?category=دراسات المركز&countryCode=${code}`}
              >
                <Box>
                  <MenuItem
                    _focus={{ bg: 'white', color: 'black' }}
                    _hover={{ bg: 'white', color: 'black' }}
                    fontSize="xl"
                  >
                    <Box display="flex">
                      <Heading
                        fontFamily="diodrum-med !important"
                        fontSize={['md', 'md', 'lg', 'lg']}
                      >
                        {country}
                      </Heading>
                    </Box>
                  </MenuItem>
                </Box>
              </Link>
            ))}
          </Flex>
        </MenuList>
      </Menu>
    </Flex>
  );
}
