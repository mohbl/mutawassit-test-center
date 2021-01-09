import React from 'react';
import { Box, Text, Heading, Divider } from '@chakra-ui/core';
// import { Link } from 'react-router-dom';

// import aboutpic from '../images/about-min.jpg';
export default function blog() {
  return (
    <Box mt="100px" mb="100px">
      <Heading
        mr="4"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
        size="xl"
      >
        عن المتوسط
        <Divider
          opacity="1"
          border="3px solid black"
          pl="20%"
          pr="20%"
          //   m="4"
          borderColor="black"
          w="20%"
        ></Divider>
      </Heading>
      <Box d="flex" justifyContent="center" m="4">
        {/* <Image
          shadow="lg"
          rounded="10px"
          w={['90%', '90%', '60%', '60%']}
          src={aboutpic}
        ></Image> */}
      </Box>
      <Box
        textAlign="right"
        p="30px"
        pl={['5%', '5%', '20%', '20%']}
        pr={['5%', '5%', '20%', '20%']}
      >
        <Text fontSize="2xl" m="4">
          المتوسط هي دار نشر مستقلة ذات موقف جذري، وأنها تؤسس ديناميكية في
          اختياراتها وآليات عملها انطلاقاً من موقفها ذلك. وتنشط منشورات المتوسط
          في البلدان العربية وتنشر الكتب في مجالات الأدب والفكر والثقافة عامة.
        </Text>
        <Heading size="lg" m="4">
          المتوسّط منذ البداية حتّى الآن
        </Heading>
        <Text fontSize="2xl" m="4">
          تأسَّسَت منشورات المتوسط نهاية عام 2015 في ميلانو بإيطاليا، كمشروع من
          مشاريع جمعية "المتوسط" التي تشتغل في مجال التبادل الثقافيّ بين مختلف
          حضارات العالم وشعوبه، وكونها تأسَّسَت في ميلانو من قبل عربٍ مُهتمِّين
          بالثقافةِ الإيطالية، وإيطاليِّين مُهتمِّين بالثقافة العربية، فإنها
          تركّز في مجالِ عملها على التبادلِ الثقافيّ بين العالم العربي وإيطاليا
          أولاً، ثم بين العالم العربي وأوروبا، وبين إيطاليا والعالم.
        </Text>
        <Text fontSize="2xl" m="4">
          بعد تأسيسها مباشرةً، تمكنت منشورات المتوسط في فترة قصيرة بفرض نفسها
          كواحدة من أكثر دور النشر الفاعلة في العالم العربي. وتجاوز عدد
          إصداراتها حتى اليوم الـ 300 عنواناً تتباين بين الفكر والأدب. وقدمت
          الدار للثقافة العربية أسماء كبيرة تتُرجم لأول مرة إلى اللغة العربية،
          نذكر على سبيل المثال لا الحصر: أميليو سالغاري، باولو سورنتينو، جوزبه
          كاتوتسيلا، فرانشيسكا بِيلينو، غويدو غوتسانو، كارل تشابك، نايا ماريا
          آيت، بيري آندرسون، مارتا هيلرس، رونالدو مُنْك، كليمون روسي، مواسير
          سكليار، وانغ شياوبو، توم كريستينس، عباس معروفي، بروس لاوري.
        </Text>
        <Text fontSize="2xl" m="4">
          سرعان ما استقطبت الدار أسماء عالمية كبيرة في الأدب والفكر ليكونوا من
          بين من تنشر كتبهم للعالم العربي بترجمةٍ أصلية عن لغاتٍ أخرى، مثل: بول
          أوستر، جويس كارول أوتس، خوان خوسيه ميّاس، وخابيير ماريّاس، يو هوا،
          آليساندرو باريكو، سعاد العامري.
        </Text>
        <Text fontSize="2xl" m="4">
          كما عُرف عن الدار اهتمامها بالأدب الجديد، فأصدرت في الرواية والشعر
          والقصة القصيرة للعديد من الكتاب الشباب، منهم من ينشرون كتبهم لأول
          مرَّة، ومنهم من ينشرون رواياتهم الأولى، مثل: العربي رمضاني، صالحة
          عبيد، نسرين أكرم خوري، ليلى عبد الله، وغيرهم. ويذكر أن المتوسط ومنذ
          بداياتها حاولت الاستفادة من التجارب الناجحة في النشر، وما أنجزه تاريخ
          النشر العربيّ تحديداً، لتُضيف إليها أفكارها الخاصّة، كالهويّة الفنّيّة
          للدار، من حيث العناوين، والمشاريع التي تبادر إليها، والسلاسل التي تعمل
          على نشرها؛ كسلسلة يوميات عربية، وسلسلة "براءات"، وهي سلسلة الشعر
          العربيّ والنصوص والقصة، والتي نشرت لأسماء غير معروفة في العالم العربي
          ومن مختلف الدول، دون استثناءات سوى جودة النص، ولم يمر وقت على إطلاق
          السلسلة، حتى استقطبت أسماء كبيرة في عالم الشعر والقصة، مثل: قاسم حداد،
          وفوزي كريم، وهالا محمد، عبده وازن، شربل داغر. وحققت اسمها كمشروع وصل
          اليوم إلى أزيد من 80 عنواناً.
        </Text>
        <Text fontSize="2xl" m="4">
          ركزت المتوسط، إضافة للمحتوى، على الجانب الفني في صناعة الكتاب، تصميماً
          وطباعة، ولاقت نجاحاً لا بأس به، بل إن بعض المختصين والنقاد الثقافيين
          ذهبوا إلى القول: بأن المتوسط أسست مدرسة خاصة في صناعة الكتاب.
        </Text>
        <Text fontSize="2xl" m="4">
          استقطبت المتوسط الكثير من الأسماء العربية الكبيرة، في عالم الرواية
          والفكر والدراسات، نذكر من هذه الأسماء في مجال الرواية: عالية ممدوح،
          محمد الأشعري، محمد برادة، يوسف فاضل، سعاد العامري، شاكر الأنباري،
          إبراهيم أحمد، علي المقري، أحمد زين، عمارة لخوص، وكمال الرياحي، إبراهيم
          عبد المجيد.
        </Text>
        <Text fontSize="2xl" m="4">
          تهتمّ الدار كذلك بالدراسات والكتب الفلسفية والفكرية، إنْ ترجمةً أو
          كتابةً في اللغة العربية، وقد نقلت كتباً هامّة إلى القارئ العربي لأسماء
          رائدة في مجالِ تخصصها، نذكر منها: أنطونيو غرامشي، بيري آندرسون،
          رونالدو مُنك، كليمون روسي وغيرهم، ومن العرب نذكر: خلدون الشمعة، عبد
          السلام بنعبد العالي، عبد الفتاح كيليطو، عاطف بطرس العطار، تيسير خلف،
          وغيرهم. وتسعى الدار للمشاركة والتواجد في مختلف معارض الكِتاب الدولية،
          في العالم العربي أو في أوروبا، لتقريب الكِتاب في شتّى مجالات الأدب
          والفكر من القارئ العربي أينما كان.
        </Text>
        <Text fontSize="2xl" m="4">
          كما أطلقت منشورات المتوسط عام 2016، سلسلة أدبية بعنوان "الأدب أقوى"،
          بإصدار طبعة فلسطينية لعدد من كتبها بالتزامن مع صدور طبعتها في العالم
          العربي، ما يمثل فرصةً لكتب الدار في أن تكون جزءًا من العمل المقاوم
          لسلطات الاحتلال، من خلال كسر التضييق الذي يُفرض على القارئ الفلسطيني،
          وعلى الكتب الراغبة بالتواجد على الأراضي الفلسطينية المحتلة.
        </Text>
        <Text fontSize="2xl" m="4">
          أطلقت منشورات المتوسط في 21 مارس/آذار 2019 العدد الأول من مجلة
          "براءات" بطبعتين عربية وفلسطينية. ومجلة براءات، التي صدر منها لحد الآن
          أربعة أعداد؛ هي مجلة عربية فصلية تنشغل بكل ما يتعلق بالشعر نصاً
          ومقالاً نقدياً ودراسة نظرية وتطبيقية وحواراً وتقريراً وقصاً ومقاربة
          بين الشعر وفنون أخرى.
        </Text>
        <Heading size="lg" m="4">
          في اللغات الأخرى:
        </Heading>
        <Text fontSize="2xl" m="4">
          في نهاية 2018 أُطلِقت دار "موتا Muta." وهي النسخة الإيطالية من
          "منشورات المتوسط"، بهدف ترجمة الأدب العربي إلى الإيطالية ونقل الصوت
          العربي بشكل عام وواضح الى العالم الغربي، وأصدرت عدة كتب منها ترجمة
          كتاب "بسبب غيمة على الأرجح" للشاعر اللبناني وديع سعادة، وكتاب "دراسات
          في الرواية العربية" لمجموعة من المؤلفين العرب، وأنطولوجيا للشعر العربي
          مع مشروع COSV. كما تعمل دار "موتا" أيضًا كمستشار لبعض الناشرين
          الإيطاليين المهتمين بترجمة الأدب العربي.
        </Text>
        <Heading size="lg" m="4">
          في الصحافة العالمية:
        </Heading>
        <Box color="black" fontSize="2xl" m="4">
          <figure class="quote">
            <blockquote>
              "منشورات المتوسّط، وعلى الرغم من عمرها القصير، إلّا أنّها تقدّم
              نموذجًا حديثًا ومختلفًا ومتنوّرًا لافتًا، من حيث اختيارها للكتب
              العربيّة والمترجمة، ومن حيث هويّة الدار الفنّيّة الخلّاقة".
            </blockquote>
            <figcaption>
              &mdash; نشرة معرض لندن الدولي للكتاب{' '}
              <cite>The Publishing Perspectives</cite>{' '}
            </figcaption>
          </figure>
        </Box>
        <Text fontSize="2xl" m="4">
          وصلت شهرة "منشورات المتوسط" إلى المستوى العالمي، حيث خصتها الجريدة
          الفرنسية المتخصصة بالكتب والنشر (ليفر إيبدو- livres hebdo) عام 2016،
          وعلى صفحتها الأولى بمقال عنوانه :
          <b>"المتوسط – شكل من أشكال النشر الثوري في العالم".</b>
        </Text>
        <Text fontSize="2xl" m="4">
          ثم في عام 2017 ينشر الموقع المتخصص بالنشر (لينكيستا – Linkesta) الأشهر
          في إيطاليا مقالاً مطولاً بعنوان: <b>"نشر عربي من ميلانو ".</b>
        </Text>
        <Text fontSize="2xl" m="4">
          وفي العام نفسه تلقت منشورات المتوسط خطاب شكر رسمي من وزارة الثقافة
          التشيكية لترجمتها عملًا لأكبر كتاب التشيك وهو الروائي والمسرحي كارل
          تشابك.
        </Text>
        <Text fontSize="2xl" m="4">
          في عام 2019 قدمت نشرة معرض لندن الدولي للكتاب The Publishing
          Perspectives منشورات المتوسط بمادة من ثلاث صفحات عنونتها{' '}
          <a
            class="a-special"
            href="https://publishingperspectives.com/2019/03/al-mutawassit-arabic-publisher-italy-fiction-poetry-design/"
          >
            <b>"المتوسط قوة إبداعية في عالم النشر العربي".</b>
          </a>
        </Text>
        <Text fontSize="2xl" m="4">
          أخيراً فإن "منشورات المتوسّط"، التي اتخذت من رسم الدونكيشوت راكباً
          دراجة هوائية بدل حصانه، شعاراً لها. وقصدها من ذلك انتاج معرفة تجمع بين
          عنصري الأصالة والمعاصرة. لذا فإن دونكيشوتنا يهيم على وجهه، ينده بين
          الناس: معاً لنحارب طواحين الهواء. لكنه يعلم تماماً أنها حقيقية
          بالمطلق.
        </Text>
      </Box>
    </Box>
  );
}
