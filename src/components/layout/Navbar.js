import React, { useState, useRef } from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Box,
  Heading,
  Flex,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useDisclosure,
  Image,
  useColorMode,
  useMediaQuery,
} from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/core';
import { connect } from 'react-redux';
import { Link, useRouteMatch } from 'react-router-dom';
import { FaMoon, FaSun, FaChevronUp } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import logo from '../../images/center-logo.png';

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSmallerThan1065] = useMediaQuery('(max-width: 1065px)');
  let { path, url } = useRouteMatch();

  const [show, setShow] = useState(false);
  const btnRef = useRef();

  const bg = { light: '#000000', dark: '#1a202c' };
  const color = { light: 'white', dark: 'white' };

  const handleToggle = () => setShow(!show);

  const isSmallScreen = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex
        style={
          !isSmallScreen
            ? {
                position: 'fixed',
                width: '100%',
                zIndex: '99',
                bottom: 0,
                right: 0,
              }
            : {}
        }
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.5rem"
        borderTop="1px solid white"
        color={color[colorMode]}
        bg={bg[colorMode]}
      >
        <Flex align="center" mr={5}>
          <Link to="/">
            <Image
              mr="20%"
              w="180px"
              // h="40px"
              className="main-logo"
              src={logo}
            />
          </Link>
        </Flex>

        <Box display={isSmallerThan1065 ? 'block' : 'none'} onClick={onOpen}>
          <GiHamburgerMenu style={{ marginLeft: 10, fontSize: 28 }} />
        </Box>

        <Box
          display={isSmallerThan1065 ? 'none' : 'flex'}
          textAlign="center"
          justifyContent="flex-end"
          alignItems="center"
          flexGrow={1}
        >
          {/* <MenuItems>JE SUIS COMMERÇANT</MenuItems> */}
          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            ml="1.5vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/about">
              عن المركز
            </Link>
          </Text>
          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            ml="1.5vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/enthropology">
              المختار الإنثربولوجي
            </Link>
          </Text>
          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            ml="1.5vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/cultureStudies">
              دراسات ثقافية
            </Link>
          </Text>
          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            ml="1.5vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/books?category=دراسات المركز">
              كتب المركز
            </Link>
          </Text>
          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            ml="1.5vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/events">
              نشاطات
            </Link>
          </Text>
          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            ml="1.5vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/standards">
              المنهجية
            </Link>
          </Text>

          <Box
            cursor="pointer"
            mx="1.5vw"
            mt={['6', '6', '0', '0']}
            fontSize="24px"
            onClick={toggleColorMode}
          >
            {' '}
            {colorMode === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
          </Box>
          {/* <Up></Up> */}
        </Box>
      </Flex>

      {/*Moblile nav*/}

      <Drawer
        // style={{dir:"rtl"}}

        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent color={color[colorMode]} bg={bg[colorMode]}>
          {/*<DrawerCloseButton/>*/}
          <DrawerHeader>
            <Flex wrap={'nowrap'} style={{ justifyContent: 'space-between' }}>
              <Link onClick={onClose} to="/">
                <Heading
                  cursor="pointer"
                  fontWeight="bold"
                  as="h1"
                  fontSize="36px"
                  letterSpacing={'-.1rem'}
                >
                  <Image
                    loading="lazy"
                    w="200px"
                    className="main-logo"
                    src={logo}
                  ></Image>
                </Heading>
              </Link>
              <Box cursor="pointer" fontSize="24px" onClick={toggleColorMode}>
                {' '}
                {colorMode === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
              </Box>
            </Flex>
          </DrawerHeader>

          <DrawerBody>
            <Text
              fontFamily="diodrum-bold !important"
              fontWeight="bold"
              ml="1.5vw"
              mb=".5em"
              display="block"
              fontSize="18px"
            >
              <Link onClick={handleToggle} to="/about" onClick={onClose}>
                عن المركز
              </Link>
            </Text>
            <Text
              fontFamily="diodrum-bold !important"
              fontWeight="bold"
              ml="1.5vw"
              mb=".5em"
              display="block"
              fontSize="18px"
            >
              <Link onClick={handleToggle} to="/enthropology" onClick={onClose}>
                المختار الإنثربولوجي
              </Link>
            </Text>
            <Text
              fontFamily="diodrum-bold !important"
              fontWeight="bold"
              ml="1.5vw"
              mb=".5em"
              display="block"
              fontSize="18px"
            >
              <Link
                onClick={handleToggle}
                to="/cultureStudies"
                onClick={onClose}
              >
                دراسات ثقافية
              </Link>
            </Text>
            <Text
              fontFamily="diodrum-bold !important"
              fontWeight="bold"
              ml="1.5vw"
              mb=".5em"
              display="block"
              fontSize="18px"
            >
              <Link
                onClick={handleToggle}
                to="/books?category=دراسات المركز"
                onClick={onClose}
              >
                كتب المركز
              </Link>
            </Text>
            <Text
              fontFamily="diodrum-bold !important"
              fontWeight="bold"
              ml="1.5vw"
              mb=".5em"
              display="block"
              fontSize="18px"
            >
              <Link onClick={handleToggle} to="/events" onClick={onClose}>
                نشاطات
              </Link>
            </Text>
            <Text
              fontFamily="diodrum-bold !important"
              fontWeight="bold"
              ml="1.5vw"
              mb=".5em"
              display="block"
              fontSize="18px"
            >
              <Link onClick={handleToggle} to="/standards">
                المنهجية
              </Link>
            </Text>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;
