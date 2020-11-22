import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
  Text,
  Divider,
} from '@chakra-ui/core';

import { connect } from 'react-redux';
import { FaFacebook, FaGoogle } from 'react-icons/fa';

// import { Register } from '../../redux/actions/authAction';

export default function Signup(props) {
  const [login, setLogin] = useState({
    name: '',
    phone: null,
    email: '',
    password: '',
    confirm_password: '',
  });
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const handleSubmit = (e) => {
    props.Register(login);
    // setLogin({ name: '', phone: null, email: '', password: '', confirm_password: '' });
  };

  const handleChange = (e) => {
    e.persist();
    setLogin((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };

  return (
    <Box
      mt={{ base: '10px', md: '0' }}
      width={[
        '100%', // base
        '50%', // 480px upwards
        '25%', // 768px upwards
        '7%', // 992px upwards
      ]}
    >
      <Text
        fontSize="xl"
        fontWeight="bold"
        cursor="pointer"
        ref={btnRef}
        variantColor="red"
        onClick={onOpen}
      >
        تسجيل
      </Text>

      <Drawer size="lg" isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="black" color="white">
          <DrawerCloseButton position="absolute" top="10px" left="10px" right="none" />
          <DrawerHeader>تسجيل</DrawerHeader>

          <DrawerBody>
            {/* {props.auth.error && (
              <Box color="red.700" p="2" textAlign="center" bg="red.100">
                {props.auth.error}
              </Box>
            )} */}
            <Stack spacing={4}>
              <InputGroup>
                <Input onChange={handleChange} name="name" type="name" placeholder="Username" />
              </InputGroup>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="phone"
                  type="number"
                  placeholder="Phone Number"
                />
              </InputGroup>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="email"
                  type="email"
                  placeholder="Email Adress"
                />
              </InputGroup>

              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="password"
                  type={show ? 'text' : 'password'}
                  placeholder="Enter password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <InputGroup>
                <Input
                  onChange={handleChange}
                  name="confirm_password"
                  type={show ? 'text' : 'password'}
                  placeholder="Confirm password"
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
              <Button
                // isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="teal.500"
              >
                تسجيل
              </Button>
              <Divider></Divider>
              {/* <Button
                isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="blue.500"
              >
                <FaFacebook style={{ marginRight: 10 }}></FaFacebook>
                Facebook
              </Button>
              <Button
                isLoading={props.auth.loading}
                onClick={handleSubmit}
                type="submit"
                color="white"
                bg="red.500"
              >
                <FaGoogle style={{ marginRight: 10 }}></FaGoogle>
                Google
              </Button> */}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     Register: (cerdentials) => dispatch(Register(cerdentials)),
//   };
// };

// const mapStateToProps = (state) => {
//   return {
//     auth: state.auth,
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Signup);
