import React from 'react';
import {
  Box,
  Heading,
  Flex,
  Badge,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
  Icon,
  useToast,
  useColorMode,
  Button,
  Image,
} from '@chakra-ui/core';
// import { ChevronDownIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import {
  FaGoogle,
  FaFacebookF,
  FaHamburger,
  FaShoppingCart,
  FaMoon,
  FaSun,
} from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

import Up from '../../util/Up';

import logo from '../../images/center-main-logo.png';

export default function Navbar(props) {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = { light: '#000000', dark: '#1a202c' };
  const color = { light: 'white', dark: 'white' };

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

  return (
    <Flex
      style={{ position: 'fixed', width: '100%', zIndex: '99', bottom: 0 }}
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
          <Heading
            cursor="pointer"
            fontWeight="bold"
            as="h1"
            fontSize="36px"
            letterSpacing={'-.1rem'}
          >
            <Flex>
              <Image w="250px" className="main-logo" src={logo}></Image>
              {/* <Image w="30px" className="main-logo" src="/images/center-logo.png"></Image> */}
            </Flex>
          </Heading>
        </Link>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <GiHamburgerMenu
          style={{ marginLeft: 10, fontSize: 28 }}
        ></GiHamburgerMenu>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        justifyContent="flex-end"
        flexGrow={1}
      >
        <Text
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/about">
            عن المركز
          </Link>
        </Text>
        <Text
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/enthropology">
            المختار الإنثربولوجي
          </Link>
        </Text>
        <Text
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/cultureStudies">
            دراسات ثقافية
          </Link>
        </Text>
        <Text
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/books?category=دراسات المركز">
            كتب المركز
          </Link>
        </Text>
        <Text
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/events">
            نشاطات
          </Link>
        </Text>
        <Text
          fontWeight="bold"
          mt={{ base: 4, md: 0 }}
          ml={8}
          display="block"
          fontSize="xl"
          fontFamily="diodrum-bold !important"
        >
          <Link onClick={handleToggle} to="/standards">
            معايير
          </Link>
        </Text>
        {/* <Text             fontWeight="bold"
 mt={{ base: 4, md: 0 }} ml={8} display="block" fontSize="xl">
          <Link onClick={handleToggle} to="#">
            تسجيل
          </Link>
        </Text>
        <Text             fontWeight="bold"
 mt={{ base: 4, md: 0 }} ml={8} display="block" fontSize="xl">
          <Link onClick={handleToggle} to="#">
            <Button bg="white" color="blue.500" rounded="20px">
              تسجيل الدخول
            </Button>
          </Link>
        </Text> */}
        <Box
          cursor="pointer"
          mr={['0', '0', '6', '6']}
          ml={['0', '0', '6', '6']}
          mt={['6', '6', '0', '0']}
          fontSize="24px"
          onClick={toggleColorMode}
        >
          {' '}
          {colorMode === 'light' ? <FaMoon></FaMoon> : <FaSun></FaSun>}
        </Box>
        <Up></Up>
      </Box>
    </Flex>
  );
}
