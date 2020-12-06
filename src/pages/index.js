import React from 'react';
import {
  Heading,
  Box,
  Divider,
  useColorMode,
  Text,
  Image,
  SimpleGrid,
} from '@chakra-ui/core';
import { BsArrowUpLeft } from 'react-icons/bs';
import { Link } from 'react-router-dom';
// import fx from 'money';
import { connect } from 'react-redux';
import { getBooks } from '../redux/actions/booksActions';

import CatBooks from '../components/books/catBooks';

function Home(props) {
  const { colorMode, toggleColorMode } = useColorMode();

  const color = { light: 'black', dark: 'white' };
  return (
    <Box mt="100px" mb="100px">
      <Box m="8">
        <Box mr="80px">
          <Link to="/enthropology">
            <Heading cursor="pointer" m="2">
              المختار الإنثربولوجي
            </Heading>
          </Link>
          <Divider
            w="20%"
            // border="4px solid black"
            opacity="1"
            borderColor={color[colorMode]}
          ></Divider>
          <SimpleGrid mb="6" columns={[1, 1, 2, 2]} spacing="8">
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/markus-spiske-b4muesfg63u-unsplash-640x427.jpg"></Image>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  ملخص سهل القراءة مع صور لكتاب إيلين كليفورد الجديد ، الحرب على
                  المعاقين.
                </Text>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/06/dan_blog_hero_16-9-640x360.jpg"></Image>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
              </Box>
            </Link>
          </SimpleGrid>
          <SimpleGrid columns={[1, 1, 3, 3]} spacing="8">
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/zedblog_ponte_feature-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/zed-books_blog_kim-jong-un-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_10-zedblog_erikbahre_featured-640x445.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_08-zedblog_roslynfuller_hero-640x444.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/zed-blog_pease_1200x800-640x426.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/08/zed-books_blog_the-unknowers-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/zedblog_ponte_feature-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/zed-books_blog_kim-jong-un-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_10-zedblog_erikbahre_featured-640x445.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_08-zedblog_roslynfuller_hero-640x444.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/zed-blog_pease_1200x800-640x426.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/08/zed-books_blog_the-unknowers-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/zedblog_ponte_feature-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/zed-books_blog_kim-jong-un-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_10-zedblog_erikbahre_featured-640x445.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_08-zedblog_roslynfuller_hero-640x444.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/zed-blog_pease_1200x800-640x426.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/08/zed-books_blog_the-unknowers-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/zedblog_ponte_feature-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/zed-books_blog_kim-jong-un-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_10-zedblog_erikbahre_featured-640x445.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_08-zedblog_roslynfuller_hero-640x444.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/zed-blog_pease_1200x800-640x426.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/08/zed-books_blog_the-unknowers-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/zedblog_ponte_feature-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/04/zed-books_blog_kim-jong-un-640x427.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_10-zedblog_erikbahre_featured-640x445.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2020/04/2020_04_08-zedblog_roslynfuller_hero-640x444.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/10/zed-blog_pease_1200x800-640x426.jpg"></Image>
              </Box>
            </Link>
            <Link to="/singlePost">
              <Box shadow="lg" p="2" cursor="pointer">
                <Text fontSize="xl" m="2">
                  20.05.12
                </Text>
                <Heading m="2">الحرب على المعوقين: ملخص سهل القراءة</Heading>
                <Text fontSize="xl" m="2">
                  يكتب دان جلاس عن إنشاء "Coronavirus Cabaret" وكيف أن دعم مجتمع
                  LGBTQI + في الوباء أصبح أكثر إلحاحًا من أي وقت مضى.
                </Text>
                <Image src="https://48428-125698-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/08/zed-books_blog_the-unknowers-640x427.jpg"></Image>
              </Box>
            </Link>
          </SimpleGrid>
        </Box>
      </Box>
      <Divider></Divider>
    </Box>
  );
}
const mapDispatchToProps = dispatch => {
  return { getBooks: () => dispatch(getBooks()) };
};

export default connect(null, mapDispatchToProps)(Home);
