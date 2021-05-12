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
        <title>سياسة الخصوصية</title>
      </Helmet>
      <Text
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        fontSize="xl"
        mb="8"
      >
        هذا الموقع ملك لمنشورات المتوسط ويتبنى سياسة ملفات تعريف الارتباط ذاتها
        التي يتبناها موقع منشورات المتوسط وهي:
      </Text>
      <br />
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        سياسة ملفات تعريف الارتباط
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
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Text fontSize="2xl" m="4">
          نستخدم على جميع المواقع التابعة لمنشورات المتوسط، ملفات تعريف الارتباط
          لأجل تحسين أداء خدمة الموقع، وتمكين زوارنا من التنقل بين الصفحات
          بأريحية كاملة، ولنحتفظ بذاكرتنا بالإعدادات التي يفضلها زوارنا، مما
          يُمكّننا من تحسين تجربتهم مع موقعنا بشكل عام. نستخدم أيضاً ملفات تعريف
          الارتباط لتحليل كيفية استخدام المستخدمين للخدمة، وكيفية تفاعلهم مع
          المحتوى الذي نقدِّمه وتلقيهم له. ونسمح لأطراف ثالثة موثوقة باستخدام
          ملفات تعريف الارتباط وما شابهها من تقنيات أخرى لهذه الأغراض.
        </Text>

        <Text fontSize="2xl" m="4">
          بمجرد استخدامكم لهذا الموقع فإنكم توافقون على هذه السياسة وعلى إرسال
          ملفات تعريف الارتباط لكم.
        </Text>
        <br />
        <Heading size="lg" m="4">
          ما هي ملفات تعريف الارتباط؟
        </Heading>

        <Text fontSize="2xl" m="4">
          ملفات تعريف الارتباط هي ملفات نصية قصيرة تحتوي على كميات من المعلومات
          التي تُرسل إلى المتصفح الذي تستخدمه وتُحفظ في جهاز الكمبيوتر التابع لك
          أو هاتفك المحمول أو أي جهاز آخر عندما تزور أي موقع ويب. وتعيد ملفات
          تعريف الارتباط إرسال المعلومات إلى الموقع في كل مرة تعاود زيارته. قد
          تكون ملفات تعريف الارتباط إما دائمة (وفي هذه الحالة تُعرف بأنها ملفات
          تعريف ارتباط مستمرة)؛ حيث تبقى في الكمبيوتر التابع لك إلى أن تحذفها،
          أو مؤقتة (تُعرف بكونها ملفات تعريف ارتباط مخصصة لجلسات عمل محدودة
          المدة)؛ حيث تستمر فقط إلى أن تغلق المتصفح. وقد تكون ملفات تعريف
          الارتباط تابعة لطرف أول، وهي تلك التي يتم تعيينها بواسطة موقع الويب
          الذي تتم زيارته حالياً، أو تابعة لطرف ثالث؛ حيث يتم تعيينها بواسطة شخص
          آخر غير مالك موقع الويب الذي تتم زيارته حالياً.
        </Text>
        <br />
        <Heading size="lg" m="4">
          ملفات تعريف الارتباط التي نستخدمها وأهميتها:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          يمكن تصنيف ملفات تعريف الارتباط التي نستخدمها في الخدمة على النحو
          التالي:
        </Text>
        <br />
        <Heading size="lg" m="4">
          ملفات تعريف الارتباط الضرورية:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          هي ملفات تعريف ارتباط لازمة بشكل محدَّد لتشغيل موقعنا، وهي تتيح لك
          التصفح في أنحاء الموقع واستخدام الخصائص التي نُوفرها لك.
        </Text>
        <br />
        <Heading size="lg" m="4">
          ملفات تعريف الارتباط المتعلقة بالأداء:
        </Heading>
        <Text fontSize="2xl" m="4">
          تجمع هذه الملفات معلومات حول كيفية استخدام الزوار لموقع ويب، على سبيل
          المثال: تحديد الصفحات الأكثر زيارة ومدة الزيارة. نستخدم ملفات تعريف
          الارتباط في: توفير إحصاءات حول كيفية استخدام الخدمة. تُستخدم هذه
          البيانات أيضاً لتحديد ما إذا كان العملاء لديهم احتياجات أو اهتمامات
          محددة استناداً إلى الصفحات التي زاروها داخل مواقعنا/ تطبيقاتنا، فتقوم
          ملفات تعريف الارتباط هذه بجمع المعلومات على صفحات الموقع التي زرتها
          وتساعدنا في تقديم خدمة أفضل لك. قياس مستوى كفاءة توصيل حملاتنا
          الإعلانية.
        </Text>
        <br />
        <Heading size="lg" m="4">
          ملفات تعريف الارتباط المتعلقة بالوظائف:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          تمكِّن هذه الملفات موقع الويب من تذكر الإعدادات التي حددتها، وتوفر
          ميزات محسَّنة وأكثر ارتباطاً بطابعك الشخصي. وقد تُستخدم هذه الملفات
          أيضاً في تقديم الخدمات التي طلبتها، مثل: مشاهدة فيديو أو إضافة تعليقات
          في إحدى المدونات الإلكترونية.
        </Text>
        <br />
        <Heading size="lg" m="4">
          نستخدم ملفات تعريف الارتباط في:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          تذكر إذا ما كانت إحدى الخدمات قد قُدمت إليك أم لا. تحسين مجمل التجربة
          عبر موقع الويب بأكمله من خلال تذكر الإعدادات التي تفضلها قد تكون تلك
          الملفات دائمة أو مؤقتة، أو تابعة لطرف أول أو لطرف ثالث. باختصار، تتذكر
          هذه الملفات الخيارات التي حددتها لتحسين تجربتك كمستخدم.
        </Text>
        <br />
        <Heading size="lg" m="4">
          ملفات تعريف الارتباط المتعلقة بالإعلانات:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          تُستخدم هذه الملفات لتحديد عدد مرات مشاهدتك لأحد الإعلانات، وتساعد
          أيضاً على قياس مستوى كفاءة توصيل الحملات الإعلانية للجمهور. تُستخدم
          هذه الملفات لإدارة الإعلانات عبر موقع الويب. تُوضع هذه الملفات من قِبل
          أطراف ثالثة معتمدة، مثل: المعلنين ووكلائهم، وقد تكون ملفات تعريف
          ارتباط دائمة أو مؤقتة. باختصار، تتعلق هذه الملفات بالخدمات الإعلانية
          التي توفرها أطراف ثالثة في موقعنا على الويب.
        </Text>
        <br />
        <Heading size="lg" m="4">
          ملفات تعريف الارتباط الأخرى التابعة لأطراف ثالثة:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          في بعض صفحات موقعنا على الويب، قد يكون لدينا محتوى من خدمات، مثل:
          يوتيوب أو ديلي موشن. تجدر الإشارة إلى أننا لا نتحكم في أي ملفات تعريف
          ارتباط تستخدمها هذه الخدمات، ويتعين عليك التحقق من موقع ويب الطرف
          الثالث المعني للحصول على مزيد من المعلومات حولها.
        </Text>
        <br />
        <Heading size="lg" m="4">
          كيفية إدارة ملفات تعريف الارتباط وإزالتها:{' '}
        </Heading>
        <Text fontSize="2xl" m="4">
          إذا كنت ترغب في تقييد ملفات تعريف الارتباط أو منعها أو إزالتها،
          فبإمكانك إجراء ذلك من خلال إعدادات متصفح الويب. وتختلف الخطوات المطلوب
          اتخاذها حسب المتصفح الذي تستخدمه. انقر على أي من روابط المتصفحات أدناه
          للحصول على التعليمات.
        </Text>
      </Box>
    </Box>
  );
}
