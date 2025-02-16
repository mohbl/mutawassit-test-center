import React from 'react';
import { Box, Text, Heading, Button, Flex } from '@chakra-ui/core';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

// import aboutpic from '../images/about-min.jpg';
export default function blog() {
  return (
    <Box mt={['2em', '2em', '6em']} mb="100px">
      <Helmet>
        <title>عن ميسك</title>
      </Helmet>
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        مركز دراسات ثقافات المتوسط (ميسك-MISC)
      </Heading>
      <Box
        textAlign="right"
        p="30px"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Text fontSize="2xl" m="4">
          مركز أبحاث ودراسات تم إنشاؤه بمبادرة من "منشورات المتوسط"، كمساهمة في
          تعميق الأبحاث النظرية والتطبيقية (البينثقافية -Intercultural) في منطقة
          حوض البحر الأبيض المتوسط.
        </Text>
        <Text fontSize="2xl" m="4">
          ترى "منشورات المتوسط" في منطقة البحر الأبيض المتوسط ميداناً كبيراً
          صُنع فيه تاريخ العالم، وما تزال هذه المنطقة حتى الآن منطقة سريعة
          التغير وكبيرة التأثير، وهي قد تكون المنطقة الأكثر تنوعاً في العالم على
          جميع الصعد وخاصة العِرقية منها، والتي تفرض تنوعاً هائلاً ثقافياً
          واجتماعياً ودينياً جديراً بالدراسة.
        </Text>
        <Text fontSize="2xl" m="4">
          وانطلاقاً من إيمانها بالثقافة كعامل مشترك بين مختلف الشعوب، فإن
          منشورات المتوسط تطلق هذا المركز للأبحاث والدراسات التي تعنى بثقافات
          الدول المطلة على البحر الأبيض المتوسط، من خلال نواة جماعية ودراسات
          محددة تتناول مدى تفاعل هذه الثقافات فيما بينها ومدى تأثيرها على تطور
          وتقارب هذه الشعوب ثقافياً واجتماعياً واقتصادياً.
        </Text>
      </Box>
      <Flex justifyContent="center">
        <Link to="/contact">
          <Button fontSize="2xl">اتصل بنا</Button>
        </Link>
      </Flex>
    </Box>
  );
}
