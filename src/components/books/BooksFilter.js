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
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link, NavLink } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

// import { connect } from 'react-redux';
// import { getSeries } from '../../redux/actions/seriesActions';
import { countires } from './countires';

export default function Navbar() {
  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  //   console.log(countires);

  const { colorMode } = useColorMode();

  const bg = { light: '#f5f2ef', dark: '#1a202c' };
  const filter = { light: '#000000', dark: '#1a202c' };
  const onOpened = () =>{
    document.body.style.overflow = "hidden";
  }

  const onClosed = () =>{
    document.body.style.overflow = "";
  }
  return (
    <Flex
      h="70px"
      borderBottom="1px solid #ddd"
      className={'filterNavTop'}
      as="nav"
      align="center"
      //   justify="space-between"

      //   padding="0.5rem"
      //   shadow="lg"
      //   color={color[colorMode]}
      bg={bg[colorMode]}
      overflowX={{ base: 'auto', sm: 'auto' }}
      wrap={['nowrap', 'nowrap', 'wrap', 'wrap']}
      direction={['row', 'row', 'row', 'row']}
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
            fontSize={['lg', '2xl']}
            fontFamily="diodrum-med !important"
          >
            جميعها
          </Text>
        </Flex>
      </NavLink>

      <Menu
          onOpen={onOpened}
          onClose={onClosed}
      >
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
            // h="500px"
            flexWrap="wrap"
            // columns={5}
            // overflow="scroll"
          >
            {countires.map(([code, country]) => (
              <Link
                // style={{ margin: '50px !important' }}
                onClick={handleToggle}
                to={`/books?category=دراسات المركز&countryCode=${code}`}
              >
                <Box>
                  <MenuItem
                    _focus={{ bg: 'white', color: 'black' }}
                    _hover={{ bg: 'white', color: 'black' }}
                    fontSize="xl"
                  >
                    <Box>
                      <Text
                        fontFamily="diodrum-med !important"
                        fontSize={['md', 'md', 'lg', 'lg']}
                      >
                        {country}
                      </Text>
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
