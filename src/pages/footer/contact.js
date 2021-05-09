import React from 'react';
import { Box, Heading, Text, Divider } from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

export default function standards() {
  return (
    <Box mt="100px" mb="100px">
      <Helmet>
        <title>اتصل بميسك</title>
      </Helmet>
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        اتصل بنا
      </Heading>
      <Box
        textAlign="right"
        p="30px"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Heading size="lg" m="4">
          {' '}
          المكتب الرئيس
        </Heading>
        <Text fontSize="2xl" m="4">
          Almutawassit Books
        </Text>
        <Text fontSize="2xl" m="4">
          Alzaia Navilio Pavese, 120
        </Text>
        <Text fontSize="2xl" m="4">
          20142 Milano
        </Text>
        <Text fontSize="2xl" m="4">
          Italy
        </Text>
        <Divider></Divider>
        <Heading size="lg" m="4">
          {' '}
          البريد الإلكتروني
        </Heading>

        <Text fontSize="2xl" m="4">
          misc@almutawassit.org
        </Text>
      </Box>
    </Box>
  );
}
