import React from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  ListItem,
  OrderedList,
} from '@chakra-ui/core';

export default function standards() {
  return (
    <Box mt="100px" mb="100px">
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        وكلاء وموزعون
        <Divider
          opacity="1"
          border="3px solid black"
          pl="20%"
          pr="20%"
          mt="4"
          borderColor="black"
          w="20%"
        ></Divider>
      </Heading>
      <Box
        textAlign="right"
        p="30px"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Text fontSize="2xl" m="4">
          تحت البناء
        </Text>
      </Box>
    </Box>
  );
}
