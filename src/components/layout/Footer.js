import React from 'react';
import { Box, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import {
  FaCcMastercard,
  FaCcVisa,
  FaCcPaypal,
  FaCcApplePay,
  FaFacebook,
  FaSoundcloud,
  FaTwitter,
  FaYoutube,
  FaInstagramSquare,
  FaGoodreads,
} from 'react-icons/fa';

import News from './FooterNewsLetter';
import { countires } from '../books/countires';

export default function Footer() {
  return (
    <Box pb="60px" pl="10%" pr="10%" color="white" bg="black">
      <SimpleGrid mb="100px" p="30px" columns={[1, 1, 3, 3]} spacing="8">
        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="md">
            ميسك – MISC
          </Heading>
          <Link to="/about">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              عن ميسك – MISC
            </Text>
          </Link>
          <Link to="/contact">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              اتصل بنا
            </Text>
          </Link>

          <Link to="/terms">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              الأحكام والشروط
            </Text>
          </Link>
          <Link to="/policy">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              سياسة الخصوصية
            </Text>
          </Link>
          <Link to="/questions">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              أسئلة متكررة
            </Text>
          </Link>
          <Text
            color="gray.200"
            _hover={{ textDecoration: 'underline' }}
            fontFamily="diodrum-med !important"
            fontSize="md"
          >
            <News></News>
          </Text>
          <Heading mt="12" fontFamily="diodrum-bold !important" size="md">
            التوزيع والحقوق
          </Heading>
          <Link to="/buyrights">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              شراء حقوق التأليف والترجمة{' '}
            </Text>
          </Link>
          <Link to="/transaprovals">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              موافقات الترجمة
            </Text>
          </Link>
          <Link to="/buybooks">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              شراء الكتب من المكتبات والموزعين
            </Text>
          </Link>
          <Link to="/dist">
            <Text
              color="gray.200"
              _hover={{ textDecoration: 'underline' }}
              fontFamily="diodrum-med !important"
              fontSize="md"
            >
              وكلاء وموزعون
            </Text>
          </Link>
        </Flex>

        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="md">
            البلدان
          </Heading>
          {countires.map(([code, country]) => (
            <Link
              // style={{ margin: '50px !important' }}
              //   onClick={handleToggle}
              to={`/books?category=دراسات المركز&countryCode=${code}`}
            >
              <Box>
                <Box>
                  <Text
                    color="gray.200"
                    _hover={{ textDecoration: 'underline' }}
                    fontFamily="diodrum-med !important"
                    fontSize="md"
                  >
                    {country}
                  </Text>
                </Box>
              </Box>
            </Link>
          ))}
        </Flex>
        <Flex direction="column">
          <Heading fontFamily="diodrum-bold !important" size="md">
            وسائل التواصل الاجتماعي
          </Heading>
          <Flex mt="4">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://twitter.com/Almutawassitit"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
                m="2"
              >
                <FaTwitter></FaTwitter>
              </Text>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/almutawassit"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
                m="2"
              >
                <FaFacebook></FaFacebook>
              </Text>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/Almutawassit_books/"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
                m="2"
              >
                <FaInstagramSquare></FaInstagramSquare>
              </Text>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCSBUh4FMxnG9Wmjio_tJk1w"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
                m="2"
              >
                <FaYoutube></FaYoutube>
              </Text>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.goodreads.com/user/show/50160397"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
                m="2"
              >
                <FaGoodreads></FaGoodreads>
              </Text>
            </a>
          </Flex>
        </Flex>
      </SimpleGrid>
      <Flex mb="50px" justifyContent="center">
        <Box>© 2021 Almutawassit Books</Box>
      </Flex>
    </Box>
  );
}
