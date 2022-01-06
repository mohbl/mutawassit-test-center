import React from 'react';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Box,
  Heading,
  Flex,
  Badge,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useToast,
  useDisclosure,
  Image,
  useColorMode,
  Input,
  Button,
  Stack,
  useColorModeValue,
  useMediaQuery,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { FaMoon, FaSun } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaChevronUp } from 'react-icons/fa';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
} from '@chakra-ui/core';

// import Up from '../../util/Up';
import logo from '../../images/center-logo.png';

export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isSmallerThan1230] = useMediaQuery('(max-width: 1230px)');

  const bg = { light: '#000000', dark: '#1a202c' };
  const color = { light: 'white', dark: 'white' };
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);
  const btnRef = React.useRef();
  return (
    <>
      <Flex
        className="navbar"
        style={{ position: 'fixed', width: '100%', zIndex: '99', bottom: 0 }}
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding="0.5rem"
        borderTop="1px solid white"
        //   shadow="lg"
        color={color[colorMode]}
        bg={bg[colorMode]}
        {...props}
      >
        <Flex align="center" mr={5}>
          <Link to="/home">
            <Heading
              cursor="pointer"
              fontWeight="bold"
              as="h1"
              fontSize="36px"
              letterSpacing={'-.1rem'}
            >
              <Image
                loading="lazy"
                w="220px"
                className="main-logo"
                src={logo}
              ></Image>
            </Heading>
          </Link>
        </Flex>

        <Box
          display={isSmallerThan1230 ? 'block' : 'none'}
          onClick={() => {
            document.body.style.overflow = 'hidden';
            onOpen();
          }}
          cursor="pointer"
        >
          <GiHamburgerMenu style={{ marginLeft: 10, fontSize: 28 }} />
        </Box>

        <Box
          display={isSmallerThan1230 ? 'none' : 'flex'}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          textAlign="center"
          justifyContent="flex-end"
          flexGrow={1}
        >
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/about">
              عن المركز
            </Link>
          </Text>
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/enthropology">
              المختار الإنثربولوجي
            </Link>
          </Text>
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/cultureStudies">
              دراسات ثقافية
            </Link>
          </Text>
          <Text
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontWeight="bold"
            fontSize="lg"
            fontFamily="diodrum-bold !important"
          >
            <Link onClick={handleToggle} to="/books?category=دراسات المركز">
              كتب المركز
            </Link>
          </Text>

          <Text
            fontFamily="diodrum-bold !important"
            fontWeight="bold"
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
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
            mt={{ base: 4, md: 0 }}
            ml="1.6vw"
            display="block"
            fontSize="18px"
          >
            <Link onClick={handleToggle} to="/standards">
              المنهجية
            </Link>
          </Text>

          {/* <ShopBadge></ShopBadge> */}
          <Box
            cursor="pointer"
            mx="1vw"
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
        isOpen={isOpen}
        placement="right"
        onClose={() => {
          onClose();
          document.body.style.overflow = '';
        }}
      >
        <DrawerOverlay style={{ background: 'rgba(0, 0, 0, .5)' }} />
        <DrawerContent
          color={color[colorMode]}
          bg={bg[colorMode]}
          style={{ maxWidth: '318px' }}
          p="2em"
        >
          {/*<DrawerCloseButton/>*/}
          <DrawerHeader>
            <Flex wrap={'nowrap'} style={{ justifyContent: 'space-between' }}>
              <Link to="/">
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

          <DrawerBody mt="2em">
            <Text
              mt={{ base: 4, md: 0 }}
              ml="1.6vw"
              display="block"
              fontWeight="bold"
              fontSize="lg"
              fontFamily="diodrum-bold !important"
            >
              <Link onClick={handleToggle} to="/about">
                عن المركز
              </Link>
            </Text>
            <Text
              mt={8}
              ml="1.6vw"
              display="block"
              fontWeight="bold"
              fontSize="lg"
              fontFamily="diodrum-bold !important"
            >
              <Link onClick={handleToggle} to="/enthropology">
                المختار الإنثربولوجي
              </Link>
            </Text>
            <Text
              mt={8}
              ml="1.6vw"
              display="block"
              fontWeight="bold"
              fontSize="lg"
              fontFamily="diodrum-bold !important"
            >
              <Link onClick={handleToggle} to="/cultureStudies">
                دراسات ثقافية
              </Link>
            </Text>
            <Text
              mt={8}
              ml="1.6vw"
              display="block"
              fontWeight="bold"
              fontSize="lg"
              fontFamily="diodrum-bold !important"
            >
              <Link onClick={handleToggle} to="/books?category=دراسات المركز">
                كتب المركز
              </Link>
            </Text>

            <Text
              fontFamily="diodrum-bold !important"
              fontWeight="bold"
              mt={8}
              ml="1.6vw"
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
              mt={8}
              ml="1.6vw"
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
