import React from 'react';
import {
  Box,
  Heading,
  Text,
  Divider,
  ListItem,
  OrderedList,
} from '@chakra-ui/core';
import { Helmet } from 'react-helmet';

export default function standards() {
  return (
    <Box mt="100px" mb="100px">
      <Helmet>
        <title>الأحكام والشروط</title>
      </Helmet>
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        شروط استخدام مواقع منشورات المتوسط
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
          نرجو قراءة شروط الاستخدام بعناية قبل التسجيل أو التصفح أو مشاركة
          الملفات على موقع منشورات المتوسط والمواقع التابعة لها.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          إن استخدامك أو مشاركتك في هذه المواقع، يعني قراءتك لهذه الشروط
          وموافقتك على الالتزام بها. إذا لم توافق على الالتزام بها، نرجو منك
          الخروج من كافة هذه المواقع.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          تحتفظ منشورات المتوسط بحق تحديث شروط الاستخدام كلما
          دعت الضرورة، وعليه نرجو مواصلة الاطلاع على تحديث شروط الاستخدام
          باستمرار.
        </Text>
        <br />
        <Heading size="lg" m="4">
          إخلاء المسؤولية
        </Heading>
        <Text fontSize="2xl" m="4">
          تبذل منشورات المتوسط كل الجهد لضمان أن تكون المعلومات والخدمات في
          مواقعها الإلكترونية دقيقة وقت النشر، إلا أنها لا تقدم أي ضمان صريح أو
          ضمني حول دقة المعلومات.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          لا تتحمل منشورات المتوسط أية مسؤولية عن أي آثار مترتبة أو فقدان أو ضرر
          قد يحدث للمستخدم أو طرف ثالث بسبب استخدام مواقع منشورات المتوسط
          وخدماتها. وينطبق الحكم على أي محتويات منشورة أو محذوفات محتملة.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          لا تقتضي الروابط لمواقع خارجية وجود أي علاقة، تجارية أو غيرها، بين
          مواقع منشورات المتوسط والمواقع الالكترونية للجهات المحال إليها.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          تتوفر هذه الروابط كما هي لسهولة تصفح زوار الموقع فقط، ولا تتحمل
          منشورات المتوسط مسؤولية القيام بكشف دوري أو الموافقة أو المراجعة أو
          اعتماد محتويات أو استخدام أي من المنتجات أو الخدمات التي تقدمها هذه
          المواقع.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          كما تبذل منشورات المتوسط جهدها لضمان خلو محتوى الموقع من الفيروسات،
          ولا تتحمل مسؤولية أية أضرار ناتجة عن استخدام المحتوى المنشور، وتقع
          مسؤولية استخدام المعلومات المتوفرة في هذه المواقع على عاتق المستخدم.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          أخيراً، أنت توافق على عدم الدخول أو محاولة الدخول لأي من حسابات
          المستخدمين أو تحريف أو محاولة تحريف هويتك أثناء استخدامك للمواقع.
        </Text>
        <br />
        <Heading size="lg" m="4">
          استخدام موقع منشورات المتوسط والمواقع التابعة لها والمحتوى المنشور
        </Heading>
        <Text fontSize="2xl" m="4">
          تحتفظ منشورات المتوسط بجميع الحقوق. ولا يُسمح بنسخ أو استعمال أو إعادة
          إصدار أي جزء من مواد مواقعها الإلكترونية سواء ورقياً أو إلكترونياً أو
          تخزينه في نطاق استعادة المعلومات أو نقله بأي شكل من الأشكال، دون إذن
          خطي من الدار. ويجوز استخدام المحتوى لأغراض تعليمية أو لإصدار كتب
          موجَّهة إلى ضعيفي البصر أو فاقديه شريطة إعلام الدار. تُستثنى أيضاً
          الاقتباسات القصيرة المستخدمة في العروض الصحفية.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          يجب أن لا يتم استخدام مواقع منشورات المتوسط الإلكترونية أو الاتصال بها
          بغرض:
        </Text>
        <Text fontSize="2xl" m="4">
          ارتكاب أعمال غير قانونية.
        </Text>
        <Text fontSize="2xl" m="4">
          تحريف الهوية.
        </Text>
        <Text fontSize="2xl" m="4">
          وضع مواد مسيئة.
        </Text>
        <br />
        <Heading size="lg" m="4">
          التعويض
        </Heading>
        <Text fontSize="2xl" m="4">
          أنت توافق على تعويض منشورات المتوسط وحمايتها ضد أي ادعاءات أو خسائر أو
          أضرار بما في ذلك الرسوم القانونية التي قد تترتب على انتهاكك لهذه
          الشروط أو نتيجة استخدامك للموقع أو إضافة أي محتوى إليه، كما أنك توافق
          على التعاون الكلي للدفاع عن منشورات المتوسط ضد هذه الادعاءات.
        </Text>
        <br />
        <Heading size="lg" m="4">
          الحساب الخاص بك
        </Heading>
        <Text fontSize="2xl" m="4">
          إذا كنت تستخدم هذا الموقع فأنت مسؤول عن الحفاظ على سرية معلومات الحساب
          الخاص بك ورقمك السري - إن وجد - وعن تقييد الوصول إلى جهاز الكمبيوتر
          الخاص بك، وتوافق على  تحمل مسؤولية جميع الأنشطة التي تحدث ضمن الحساب
          الخاص بك أو رقمك السري.
        </Text>
        <br />
        <Text fontSize="2xl" m="4">
          وتحتفظ منشورات المتوسط بحق رفض الخدمة وإنهاء الحسابات وإزالة أو تعديل
          المحتوى.
        </Text>
        <br />
        <Heading size="lg" m="4">
          شكاوى حقوق النسخ والنشر{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          تحترم منشورات المتوسط حقوق الملكية الفكرية الخاصة بالآخرين، وإذا كنت
          تعتقد أن حقوق النسخ والنشر الخاصة بك قد تم انتهاكها على أحد مواقع
          الدار؛ يرجى التواصل مع:
        </Text>
        <Heading size="lg" m="4">
          إدارة منشورات المتوسط
        </Heading>
        <Text fontSize="2xl" m="4">
          هاتف رقم: 00393477104442
        </Text>
        <Text fontSize="2xl" m="4">
          البريد الإلكتروني: info@almutawassit.org
        </Text>
      </Box>
    </Box>
  );
}
