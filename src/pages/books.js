import React from 'react';
import { Link } from 'react-router-dom';
import { Box, SimpleGrid, Heading, Text, Image, Flex, Skeleton } from '@chakra-ui/core';
import ReactPaginate from 'react-paginate';

export default function meduimBooks() {
  return (
    <Box mt="100px" p="30px">
      <SimpleGrid columns={[1, 2, 3, 5]} spacing="12">
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/P-1592532741-The-War-on-Disabled-People-219x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/12/F-1592359950-United-Queerdom-219x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/P-1586916701-Israel-in-Africa-212x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/11/P-1586916702-The-Emperor-is-Naked-221x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584583899-Sensuous-Knowledge-221x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/06/P-1584238297-Palestine-229x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238299-Work-Want-Work-219x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/P-1584238301-The-New-Spanish-Revolutions-224x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/P-1581732710-Memoirs-from-the-Womens-Prison-228x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
        <Link to="/book">
          <Box cursor="pointer">
            <Image
              m="0 auto"
              src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/04/P-1579054305-After-Repeal-219x350.jpg"
            ></Image>
            <Box mt="4" textAlign="center">
              <Text fontWeight="500" fontSize="xl">
                الحرب على المعاقين
              </Text>
              <Text fontSize="md" color="gray.600">
                الرأسمالية والرفاهية وصنع كارثة بشرية
              </Text>
              <Text fontSize="sm" color="gray.500">
                إلين كليفورد
              </Text>
              <Text fontWeight="bold">$12.99</Text>
            </Box>
          </Box>
        </Link>
      </SimpleGrid>
      <Flex m="8" justifyContent="center">
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={8}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          // onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          subContainerClassName={'pages pagination'}
          activeClassName={'active'}
        />
      </Flex>
    </Box>
  );
}
