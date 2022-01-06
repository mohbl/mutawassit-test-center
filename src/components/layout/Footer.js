import React from 'react';
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  useMediaQuery,
} from '@chakra-ui/core';
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
  const [isSmallerThan850] = useMediaQuery('(max-width: 850px)');
  const [isSmallerThan590] = useMediaQuery('(max-width: 590px)');

  const countriesHalfIndex = parseInt(countires.length / 2);
  const countriesBoxOne = countires.filter(
    (country, index) => index <= countriesHalfIndex
  );
  const countriesBoxTwo = countires.filter(
    (country, index) => index > countriesHalfIndex
  );

  return (
    <Box pb="60px" color="white" bg="black">
      <Flex
        mb="3em"
        py="2em"
        px={isSmallerThan590 ? '2em' : '3.5em'}
        justifyContent="space-around"
        direction={isSmallerThan850 ? 'column' : 'row'}
      >
        <Box>
          <Heading
            fontFamily="diodrum-bold !important"
            fontSize="1.45em"
            mb=".5em"
          >
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
          <Heading
            mt="12"
            fontFamily="diodrum-bold !important"
            fontSize="1.45em"
            mb=".5em"
          >
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
        </Box>

        <Box>
          <Heading
            fontFamily="diodrum-bold !important"
            fontSize="1.45em"
            mb=".5em"
            mt="1em"
          >
            البلدان
          </Heading>
          <Flex gap="2em">
            <Box w="min-content">
              {countriesBoxOne.map(([code, country]) => (
                <Link
                  key={code}
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
            </Box>
            <Box>
              {countriesBoxTwo.map(([code, country]) => (
                <Link
                  key={code}
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
            </Box>
          </Flex>
        </Box>
        <Box>
          <Heading
            fontFamily="diodrum-bold !important"
            fontSize="1.45em"
            mb=".55em"
          >
            وسائل التواصل الاجتماعي
          </Heading>
          <Flex mt="6">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://mobile.twitter.com/Misc00203230"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
                ml="10"
              >
                <FaTwitter />
              </Text>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.facebook.com/%D9%85%D9%8A%D8%B3%D9%83-MISC-109172068120589"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
                ml="10"
              >
                <FaFacebook />
              </Text>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/misccenter/"
            >
              <Text
                color="gray.200"
                _hover={{ textDecoration: 'underline' }}
                fontFamily="diodrum-med !important"
                fontSize="28px"
              >
                <FaInstagramSquare />
              </Text>
            </a>
          </Flex>
        </Box>
      </Flex>
      <Flex mb="2em" justifyContent="center">
        <Box dir="ltr">©️ 2021 Almutawassit Books</Box>
      </Flex>
    </Box>
  );
}
