import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";

import Image from "next/image";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل الشارقة | أفضل الأسعار والجودة",
      desc: "اثاث مستعمل الشارقة للبيع والشراء من ركن العروبة. معرض في شارع الاستقلال منذ 2018. أفضل الأسعار، ضمان الجودة، وخدمة توصيل سريعة. اتصل الآن!",
    },
    path: `/${decodeURIComponent("أثاث-مستعمل-الشارقة")}`,
    image: {
      path: "/ar/used-furniture-sharjah-ar.jpg",
      alt: "اثاث مستعمل الشارقة",
    },
  },
});

const ArFaqs = [
  {
    question: "س1: كم يستغرق تقييم أثاثي؟",
    answer:
      "ج: نقدم تقييم أولي خلال 5-10 دقائق عبر واتساب. إذا احتجنا لتقييم نهائي، نزور موقعك ونفحص الأثاث مباشرة.",
  },
  {
    question: "س2: هل تشترون الأثاث التالف؟",
    answer:
      "ج: نعم، نشتري الأثاث التالف بشكل بسيط. لدينا فريق صيانة لإصلاحه. الأضرار الكبيرة قد تؤثر على السعر.",
  },
  {
    question: "س3: هل توفرون خدمة التوصيل؟",
    answer:
      "ج: نعم، لدينا شراكة مع أبو محمد لنقل الأثاث. نوفر خدمة توصيل بأسعار تفضيلية لجميع مناطق الإمارات.",
  },
  {
    question: "س4: ما هي طرق الدفع المتاحة؟",
    answer:
      "ج: نوفر طرق دفع متعددة: نقدي، تحويل بنكي، وشيكات بنكية. اختر ما يناسبك.",
  },
  {
    question: "س5: هل يوجد ضمان على الأثاث المباع؟",
    answer:
      "ج: نعم، نوفر ضمان على منتجاتنا. لدينا أيضاً سياسة إرجاع واضحة إذا لم يلبي الأثاث توقعاتك.",
  },
  {
    question: "س6: أين يقع معرضكم؟",
    answer:
      'ج: معرضنا في شارع الاستقلال، بوشغارة، حي القاسمية، الشارقة. ابحث عنا على خرائط جوجل باسم "ركن العروبة للأثاث المستعمل".',
  },
  {
    question: "س7: كيف تحددون أسعار الشراء؟",
    answer:
      "ج: نحدد الأسعار بناءً على حالة الأثاث، العلامة التجارية، العمر، والطلب في السوق. نضمن عروض عادلة ومنافسة.",
  },
  {
    question: "س8: هل تشترون من الفلل والشقق؟",
    answer:
      "ج: نعم، نشتري من الفلل، الشقق، المكاتب، والفنادق. سواء قطعة واحدة أو محتويات كاملة.",
  },
  {
    question: "س9: هل يمكنني رؤية الأثاث قبل الشراء؟",
    answer:
      "ج: بالتأكيد! ندعوك لزيارة معرضنا. أو يمكننا إرسال صور تفصيلية عبر واتساب.",
  },
  {
    question: "س10: كم تستغرق عملية الشراء/البيع؟",
    answer:
      "ج: بعد الاتفاق على السعر، نتم العملية فوراً. الدفع والاستلام في نفس اليوم.",
  },
];
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(ArFaqs));
export default function UsedFurnitureSharjahPage() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main dir="rtl" className="font-sans bg-gray-50 text text relative">
        <div className="bg-pattern"></div>

        {/* Content Container - Added relative and z-10 */}
        <div className="container mx-auto max-w-7xl px-3 py-18 sm:px-6 lg:px-8 relative z-10">
          {/* --- Hero/Introduction Section --- */}
          <section className="mb-12 rounded-lg bg-white md:px-8 py-16 px-4 shadow-lg">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div>
                <h1 className="mb-4 text-3xl font-bold blue sm:text-4xl">
                  اثاث مستعمل الشارقة - بيع وشراء الأثاث المستعمل بأفضل الأسعار
                </h1>
                <p className="mb-6 text-lg leading-relaxed text">
                  البحث عن اثاث مستعمل الشارقة بجودة عالية وسعر مناسب؟ ركن
                  العروبة هو الحل الأمثل. نحن شركة مرخصة رسمياً منذ 2018، ولدينا
                  معرض حقيقي يمكنك زيارته في شارع الاستقلال ببوشغارة، حي
                  القاسمية. خبرتنا في تجارة الأثاث تتجاوز 20 عاماً، مما يعني
                  أننا نفهم تماماً ما تحتاجه.
                </p>
                <p className="mb-6 text-base leading-relaxed text">
                  نقدم خدمات شاملة في بيع وشراء اثاث مستعمل بجميع أنواعه. سواء
                  كنت تريد بيع أثاثك القديم بسرعة، أو تبحث عن قطع أثاث مستعملة
                  بحالة ممتازة، نحن هنا لمساعدتك. نستجيب لطلبك خلال 5-10 دقائق
                  عبر واتساب أو الهاتف، ونقدم تقييماً فورياً وعادلاً.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="#contact"
                    className="rounded-lg pri-bg px-6 py-3 font-semibold text-white shadow-md transition-all hover:bg-[#a06844]"
                  >
                    الواتساب
                  </a>
                  <a
                    href="#why-us"
                    className="rounded-lg tert-bg px-6 py-3 font-semibold text-pri transition-all hover:bg-[#f0cf55]"
                  >
                    اكتشف لماذا نحن الأفضل
                  </a>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {/* Placeholder Image */}
                <div className="md:w-md w-full md:h-[400px] h-80 bg-gray-200 rounded-lg object-cover shadow-md relative overflow-hidden">
                  <Image
                    src={"/ar/used-furniture-sharjah-ar.jpg"}
                    alt={"معرض اثاث مستعمل الشارقة"}
                    className="object-cover"
                    fill
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* --- Why Us Section --- */}
          <section id="why-us" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              لماذا نحن الخيار الأمثل لشراء وبيع اثاث مستعمل الشارقة؟
            </h2>
            <p className="mb-10 text-center text-lg text">
              عندما تتعامل مع شراء أو بيع الأثاث المستعمل، تحتاج إلى شركة
              موثوقة. الفرق بيننا وبين الآخرين واضح.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Feature 1 */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-3 text-xl font-semibold blue">
                  شركة رسمية ومعرض حقيقي
                </h3>
                <p className="text">
                  لدينا معرض حقيقي في شارع الاستقلال ببوشغارة، القاسمية، يمكنك
                  زيارته. شركتنا مسجلة رسمياً منذ 2018. خبرتنا تتجاوز 20 عاماً،
                  ونفهم احتياجاتك.
                </p>
              </div>
              {/* Feature 2 */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-3 text-xl font-semibold blue">
                  سرعة وسهولة الخدمة
                </h3>
                <p className="text">
                  نرد على استفساراتك خلال 5-10 دقائق. أرسل الصور عبر واتساب
                  لتقييم أولي سريع. عملية البيع والشراء بسيطة، واضحة، وتتم في
                  نفس اليوم.
                </p>
              </div>
              {/* Feature 3 */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-3 text-xl font-semibold blue">
                  ضمان الجودة والتجديد
                </h3>
                <p className="text">
                  كل قطعة تمر بفحص دقيق. لدينا فريق متخصص لإصلاح وتلميع الأثاث.
                  نبيع أثاثاً تم تجديده ليعطيك قيمة حقيقية مقابل ما تدفعه.
                </p>
              </div>
              {/* Feature 4 */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-3 text-xl font-semibold blue">
                  طرق دفع متعددة ومرنة
                </h3>
                <p className="text">
                  نوفر خيارات دفع تناسب راحتك: الدفع النقدي، التحويل البنكي، أو
                  الشيكات البنكية. مرونة تجعل البيع والشراء أسهل وأكثر أماناً.
                </p>
              </div>
              {/* Feature 5 */}
              <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <h3 className="mb-3 text-xl font-semibold blue">
                  خدمة النقل والتوصيل الموثوقة
                </h3>
                <p className="text">
                  لدينا شراكة مع أبو محمد لنقل الأثاث، ونوفر أسعاراً تفضيلية
                  للتوصيل في جميع أنحاء الشارقة والإمارات. النقل آمن وسريع
                  وعناية فائقة.
                </p>
              </div>
            </div>
          </section>

          {/* --- Services Section --- */}
          <section id="services" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              خدمات شراء وبيع اثاث مستعمل الشارقة الشاملة
            </h2>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* We Buy */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold headline">
                  نشتري جميع أنواع الأثاث المستعمل في الشارقة
                </h3>
                <p className="mb-4 text">
                  نحن نشتري كل شيء تقريباً. إذا كان لديك أثاث تريد بيعه، فنحن
                  مهتمون. هذا ما نشتريه:
                </p>
                <ul className="list-inside list-disc space-y-2 text">
                  <li>
                    <strong>غرف النوم الكاملة:</strong> أسرّة (مفردة، مزدوجة،
                    كينج، كوين)، خزائن، طاولات تسريح، وجانبية.
                  </li>
                  <li>
                    <strong>أطقم الكنب والصوفا:</strong> جلد أو قماش، عادي أو
                    زاوية.
                  </li>
                  <li>
                    <strong>طاولات الطعام والكراسي:</strong> خشب، زجاج، أو رخام.
                  </li>
                  <li>
                    <strong>الأثاث المكتبي:</strong> مكاتب، كراسي، خزائن ملفات،
                    طاولات اجتماعات.
                  </li>
                  <li>
                    <strong>الأجهزة المنزلية:</strong> ثلاجات، غسالات، مكيفات،
                    أفران، شاشات (بحالة جيدة).
                  </li>
                  <li>
                    <strong>الأثاث الخارجي:</strong> أطقم جلسات، كراسي حدائق،
                    طاولات.
                  </li>
                </ul>
                <p className="mt-4 text">
                  شراء اثاث مستعمل الشارقة من عملائنا يتم بشفافية كاملة.
                </p>
              </div>

              {/* We Sell */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold headline">
                  نبيع أثاث مستعمل بجودة عالية
                </h3>
                <p className="mb-4 text">
                  في معرضنا، ستجد مجموعة واسعة من الأثاث المستعمل. كل قطعة تم
                  فحصها وتجديدها. نحن لا نبيع أثاثاً تالفاً أو في حالة سيئة.
                </p>
                <p className="mb-4 text">
                  الأسعار لدينا منافسة. نقارن باستمرار مع سوق الشارقة للاثاث
                  المستعمل لنضمن أننا نقدم قيمة حقيقية.
                </p>
                <p className="text">
                  نوفر أيضاً ضماناً على المنتجات. إذا اشتريت شيئاً ولم يلبي
                  توقعاتك، لدينا سياسة إرجاع واضحة. هذا الضمان يميزنا عن الكثير.
                </p>
              </div>
            </div>
          </section>

          {/* --- How to Sell Section --- */}
          <section
            id="how-to-sell"
            className="mb-12 rounded-lg pri-bg px-8 py-16 mt-36 text-white shadow-xl"
          >
            <h2 className="mb-8 text-center text-3xl font-bold">
              بيع اثاث مستعمل الشارقة في 3 خطوات سهلة
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Step 1 */}
              <div className="rounded-lg bg-[#a06844] p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/30 text-2xl font-bold text-white text-shadow-2xs">
                  1
                </div>
                <h3 className="mb-2 text-xl font-semibold">تواصل معنا</h3>
                <p className="text-white/90">
                  اتصل بنا أو أرسل رسالة واتساب. أرسل صوراً واضحة للأثاث واشرح
                  حالته بصدق.
                </p>
              </div>
              {/* Step 2 */}
              <div className="rounded-lg bg-[#a06844] p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/30 text-2xl font-bold text-white text-shadow-2xs">
                  2
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  احصل على تقييم فوري
                </h3>
                <p className="text-white/90">
                  خلال 5-10 دقائق، سنعطيك تقييماً أولياً عادلاً ومنافساً. قد
                  نزورك لفحص نهائي لضمان الدقة.
                </p>
              </div>
              {/* Step 3 */}
              <div className="rounded-lg bg-[#a06844] p-6 text-center">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/30 text-2xl font-bold text-white text-shadow-2xs">
                  3
                </div>
                <h3 className="mb-2 text-xl font-semibold">
                  استلام الدفع والاستلام
                </h3>
                <p className="text-white/90">
                  بمجرد قبولك للسعر، ندفع لك فوراً (نقدي، تحويل، شيك). ثم نأتي
                  لاستلام الأثاث في الوقت المناسب لك. الخدمة مجانية.
                </p>
              </div>
            </div>
          </section>

          {/* --- How to Buy Section --- */}
          <section id="how-to-buy" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              شراء اثاث مستعمل الشارقة من معرضنا
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold headline">
                  زيارة المعرض
                </h3>
                <p className="mb-4 text">
                  نرحب بك في معرضنا الواقع في شارع الاستقلال، بوشغارة، حي
                  القاسمية. يمكنك رؤية الأثاث بنفسك، فحصه، واختبار جودته قبل
                  الشراء.
                </p>
                <p className="mb-4 text">
                  المعرض فيه تشكيلة واسعة. يمكنك إيجادنا بسهولة على خرائط جوجل.
                  ابحث عن ركن العروبة للأثاث المستعمل أو اثاث مستعمل شارع
                  الاستقلال.
                </p>
              </div>
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold headline">
                  التسوق عبر الإنترنت
                </h3>
                <p className="mb-4 text">
                  لا تستطيع زيارة المعرض؟ لا مشكلة. تصفح موقعنا أو تواصل معنا
                  عبر واتساب. سنرسل لك صوراً تفصيلية للقطع التي تهمك.
                </p>
                <p className="text">
                  نوفر خدمة توصيل لجميع مناطق الإمارات. الأسعار معقولة بفضل
                  شراكتنا مع أبو محمد للنقل.
                </p>
              </div>
            </div>
          </section>

          {/* --- Areas We Serve --- */}
          <section id="areas" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              نخدم جميع مناطق الشارقة - بيع وشراء اثاث مستعمل
            </h2>
            <p className="mb-6 text-center text-lg text">
              خدماتنا تغطي كل أنحاء الشارقة. سواء كنت في:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "القاسمية (موقعنا الرئيسي)",
                "النهدة",
                "المجاز",
                "الرولة",
                "التعاون",
                "بوشغارة (معرضنا)",
                "الند",
                "المنطقة الصناعية",
                "الخان",
                "الممزر",
                "الصجعة",
                "الغافية",
              ].map((area) => (
                <span
                  key={area}
                  className="rounded-full bg-[#144e5a]/10 px-3 py-2 text-sm font-medium blue"
                >
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-6 text-center text-lg text">
              وجميع المناطق الأخرى في الشارقة، نحن نصل إليك. شراء اثاث مستعمل
              الشارقة أو بيعه معنا سهل بغض النظر عن موقعك.
            </p>
          </section>

          {/* --- Product Categories Section --- */}
          <section id="categories" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              تشكيلة واسعة من الاثاث المستعمل للبيع في الشارقة
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Category 1 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="w-full h-64 overflow-hidden bg-gray-200 mb-4 rounded-md relative object-cover">
                  <Image
                    src={"/ar/Bedroom-furniture.jpg"}
                    alt=" أثاث غرف النوم"
                    className="object-cover"
                    fill
                  />
                </div>

                <h3 className="mb-2 text-xl font-semibold headline">
                  أثاث غرف النوم
                </h3>
                <p className="text">
                  أسرّة، خزائن ودواليب، طاولات تسريح، وطاولات جانبية. كل القطع
                  تم فحصها وتنظيفها جيداً.
                </p>
              </div>
              {/* Category 2 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="w-full h-64 overflow-hidden bg-gray-200 mb-4 rounded-md relative object-cover">
                  <Image
                    src={"/ar/Living-room.jpg"}
                    alt="  أثاث غرف الجلوس"
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold headline">
                  أثاث غرف الجلوس
                </h3>
                <p className="text">
                  أطقم كنب (جلد وقماش)، طاولات قهوة، مكتبات، وأرفف. علامات
                  تجارية معروفة وجودة عالية.
                </p>
              </div>
              {/* Category 3 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="w-full h-64 overflow-hidden bg-gray-200 mb-4 rounded-md relative object-cover">
                  <Image
                    src={"/ar/Dining-furniture.jpg"}
                    alt="أثاث غرف الطعام"
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold headline">
                  أثاث غرف الطعام
                </h3>
                <p className="text">
                  طاولات طعام (خشب، زجاج، رخام)، كراسي، وخزائن جانبية (بوفيه).
                  أطقم كاملة وقطع منفصلة.
                </p>
              </div>
              {/* Category 4 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="w-full h-64 overflow-hidden bg-gray-200 mb-4 rounded-md relative object-cover">
                  <Image
                    src={"/ar/Office-furniture.jpg"}
                    alt="أثاث مكتبي مستعمل"
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold headline">
                  أثاث مكتبي مستعمل
                </h3>
                <p className="text">
                  مكاتب تنفيذية، كراسي مريحة، خزائن ملفات، طاولات اجتماعات،
                  ومكاتب استقبال.
                </p>
              </div>
              {/* Category 5 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="w-full h-64 overflow-hidden bg-gray-200 mb-4 rounded-md relative object-cover">
                  <Image
                    src={"/ar/Home-appliances.jpg"}
                    alt="أجهزة منزلية مستعملة "
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold headline">
                  أجهزة منزلية مستعملة
                </h3>
                <p className="text">
                  ثلاجات، غسالات، مكيفات هواء، أفران، وميكروويف، وشاشات تلفزيون.
                  كلها تعمل بكفاءة.
                </p>
              </div>
              {/* Category 6 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <div className="w-full h-64 overflow-hidden bg-gray-200 mb-4 rounded-md relative object-cover">
                  <Image
                    src={"/ar/garden-furniture.jpg"}
                    alt="أثاث خارجي وحدائق"
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold headline">
                  أثاث خارجي وحدائق
                </h3>
                <p className="text">
                  أطقم جلسات خارجية، كراسي وطاولات حدائق، ومظلات للظل لحديقتك أو
                  شرفتك.
                </p>
              </div>
            </div>
          </section>

          {/* --- Pricing Section --- */}
          <section id="pricing" className="mb-12 mt-36">
            <div className="rounded-lg bg-white p-8 shadow-lg">
              <h2 className="mb-6 text-center text-3xl font-bold headline">
                كيف نحدد أسعار الاثاث المستعمل الشارقة؟
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div>
                  <h3 className="mb-3 text-xl font-semibold blue">
                    عوامل تحديد السعر
                  </h3>
                  <p className="mb-4 text">نعتمد على عدة عوامل:</p>
                  <ul className="list-inside list-disc space-y-2 text">
                    <li>
                      <strong>حالة الأثاث:</strong> ممتازة، جيدة، أم تحتاج
                      لإصلاحات.
                    </li>
                    <li>
                      <strong>العلامة التجارية:</strong> الأثاث من علامات معروفة
                      يحتفظ بقيمته.
                    </li>
                    <li>
                      <strong>عمر القطعة:</strong> الأحدث أغلى، لكن القطع
                      القديمة الأنيقة لها قيمتها.
                    </li>
                    <li>
                      <strong>الطلب في السوق:</strong> بعض الأنواع مطلوبة أكثر.
                    </li>
                    <li>
                      <strong>الندرة والتميز:</strong> القطع الفريدة تحصل على
                      تقييم أعلى.
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 text-xl font-semibold blue">
                    أسعارنا التنافسية
                  </h3>
                  <p className="text">
                    نقارن أسعارنا باستمرار مع السوق. هدفنا أن نعطيك أفضل قيمة
                    مقابل مالك، سواء كنت بائعاً أو مشترياً.
                  </p>
                  <p className="mt-4 text">
                    لا توجد رسوم خفية. السعر الذي نخبرك به هو السعر النهائي. هذه
                    الشفافية تجعلنا موثوقين في بيع اثاث مستعمل الشارقة بأفضل
                    سعر.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* --- Tips Section --- */}
          <section id="tips" className="mb-12 mt-36">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* Tips for Selling */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold headline">
                  نصائح لبيع اثاث مستعمل الشارقة بأفضل سعر
                </h3>
                <h4 className="mb-2 text-lg font-semibold blue">
                  تحضير الأثاث للبيع:
                </h4>
                <ul className="mb-4 list-inside list-disc space-y-2 text">
                  <li>
                    <strong>نظفه جيداً:</strong> الأثاث النظيف يحصل على سعر
                    أعلى.
                  </li>
                  <li>
                    <strong>أصلح الأضرار البسيطة:</strong> إصلاحات صغيرة تحدث
                    فرقاً.
                  </li>
                  <li>
                    <strong>التقط صوراً واضحة:</strong> تساعد في التقييم الدقيق.
                  </li>
                  <li>
                    <strong>وثق الفواتير الأصلية:</strong> تزيد من القيمة.
                  </li>
                </ul>
                <h4 className="mb-2 text-lg font-semibold blue">
                  أفضل وقت للبيع:
                </h4>
                <ul className="mb-4 list-inside list-disc space-y-2 text">
                  <li>فترات التخفيضات وموسم الانتقال (الصيف) ونهاية العام.</li>
                </ul>
                <h4 className="mb-2 text-lg font-semibold blue">
                  ما يجب تجنبه:
                </h4>
                <ul className="list-inside list-disc space-y-2 text">
                  <li>
                    <strong>لا تخفي العيوب:</strong> الصدق أفضل.
                  </li>
                  <li>
                    <strong>لا تبالغ في التسعير:</strong> كن واقعياً.
                  </li>
                </ul>
              </div>

              {/* Tips for Buying */}
              <div className="rounded-lg bg-white p-8 shadow-lg">
                <h3 className="mb-4 text-2xl font-semibold headline">
                  دليلك لشراء اثاث مستعمل الشارقة بذكاء
                </h3>
                <h4 className="mb-2 text-lg font-semibold blue">
                  ما الذي يجب البحث عنه؟
                </h4>
                <ul className="mb-4 list-inside list-disc space-y-2 text">
                  <li>
                    <strong>افحص الهيكل والمتانة:</strong> تأكد أنه متين وغير
                    متخلخل.
                  </li>
                  <li>
                    <strong>تحقق من نظافة الأقمشة:</strong> ابحث عن بقع أو
                    روائح.
                  </li>
                  <li>
                    <strong>اختبر الأدراج والأبواب:</strong> تأكد أنها تعمل
                    بسلاسة.
                  </li>
                  <li>
                    <strong>افحص الأجهزة الكهربائية:</strong> تأكد أنها تعمل.
                  </li>
                </ul>
                <h4 className="mb-2 text-lg font-semibold blue">
                  الأسئلة التي يجب طرحها:
                </h4>
                <ul className="mb-4 list-inside list-disc space-y-2 text">
                  <li>
                    عمر القطعة، سبب البيع، تاريخ الصيانة، وهل يوجد ضمان؟ (نحن
                    نجيب بصراحة).
                  </li>
                </ul>
                <h4 className="mb-2 text-lg font-semibold blue">
                  كيف تحصل على أفضل صفقة؟
                </h4>
                <ul className="list-inside list-disc space-y-2 text">
                  <li>
                    قارن الأسعار، فاوض باحترام، وتحقق من العروض، وزر المعرض
                    شخصياً.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* --- Eco-Friendly Section --- */}
          <section
            id="eco"
            className="mb-12 rounded-lg bg-green-50 px-8 py-16 mt-36 text-center shadow-md"
          >
            <h2 className="mb-4 text-3xl font-bold blue">
              شراء الاثاث المستعمل الشارقة - خيار صديق للبيئة
            </h2>
            <p className="mb-6 text-lg text">
              شراء الأثاث المستعمل ليس فقط اقتصادياً، بل مفيد للبيئة أيضاً.
            </p>
            <div className="grid grid-cols-1 gap-4 text-left sm:grid-cols-2 md:grid-cols-4">
              <div className="rounded-md bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-green-700">تقليل النفايات</h3>
                <p className="text-sm text">
                  كل قطعة تشتريها مستعملة هي قطعة لم تذهب إلى النفايات.
                </p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-green-700">توفير الموارد</h3>
                <p className="text-sm text">
                  يوفر الأخشاب والمعادن اللازمة لصنع أثاث جديد.
                </p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-green-700">
                  تقليل البصمة الكربونية
                </h3>
                <p className="text-sm text">
                  إعادة الاستخدام تقلل انبعاثات الإنتاج والنقل.
                </p>
              </div>
              <div className="rounded-md bg-white p-4 shadow-sm">
                <h3 className="font-semibold text-green-700">
                  الاقتصاد الدائري
                </h3>
                <p className="text-sm text">
                  نعيد تدوير الأثاث ونطيل عمره بدلاً من رميه.
                </p>
              </div>
            </div>
            <p className="mt-6 text-lg font-medium headline">
              توفير المال وحماية البيئة معاً - الأثاث المستعمل يوفر لك حتى 70%
              من سعر الجديد.
            </p>
          </section>

          {/* --- Other Emirates Service --- */}
          <section id="other-emirates" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              نخدم أيضاً جميع أنحاء الإمارات
            </h2>
            <p className="mb-6 text-center text-lg text">
              خدماتنا لا تقتصر على الشارقة فقط. نوفر توصيل سريع وآمن بفضل
              شراكتنا مع أبو محمد للنقل إلى:
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "دبي",
                "عجمان",
                "أبوظبي (خاصة مصفح)",
                "العين",
                "رأس الخيمة",
              ].map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-gray-200 px-3 py-2 text-sm font-medium text"
                >
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-4 text-center text">
              إذا كنت في أي إمارة أخرى وتبحث عن اثاث مستعمل، نحن نخدمك.
            </p>
          </section>

          {/* --- FAQ Section --- */}
          <section id="faq" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              الأسئلة الشائعة حول بيع وشراء اثاث مستعمل الشارقة
            </h2>
            <div className="space-y-4 mt-16 max-w-4xl mx-auto">
              {ArFaqs.map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white"
                >
                  <details className="group p-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium headline">
                      {item.question}
                      <span className="transition-transform group-open:rotate-180">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-6 w-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                          />
                        </svg>
                      </span>
                    </summary>
                    <p className="mt-3 text">{item.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </section>

          {/* --- Testimonials Section --- */}
          <section id="testimonials" className="mb-12 mt-36">
            <h2 className="mb-8 text-center text-3xl font-bold headline">
              ماذا يقول عملاؤنا عن خدمة اثاث مستعمل الشارقة؟
            </h2>
            <p className="mb-10 text-center text-lg text">
              عملاؤنا يثقون بنا. على مدى 20 عاماً، بنينا سمعة قوية في السوق.
            </p>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {/* Testimonial 1 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <p className="mb-4 italic text">
                  بعت لهم أثاث غرفة النوم الكاملة. السعر كان عادلاً، والعملية
                  سريعة جداً. استلموا الأثاث في نفس اليوم ودفعوا نقداً. أنصح
                  بهم.
                </p>
                <p className="font-semibold blue">- أحمد من القاسمية</p>
              </div>
              {/* Testimonial 2 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <p className="mb-4 italic text">
                  اشتريت كنب مستعمل من معرضهم. الكنب كان نظيفاً ويبدو جديداً
                  تقريباً. السعر كان أقل بكثير من الجديد، ووفرت مبلغ كبير.
                </p>
                <p className="font-semibold blue">- فاطمة من النهدة</p>
              </div>
              {/* Testimonial 3 */}
              <div className="rounded-lg bg-white p-6 shadow-md">
                <p className="mb-4 italic text">
                  كنت أبحث عن أثاث مكتبي لمكتبي الجديد. ركن العروبة وفروا لي كل
                  شيء: مكاتب، كراسي، خزائن. الجودة ممتازة والأسعار معقولة.
                </p>
                <p className="font-semibold blue">- خالد - صاحب مكتب</p>
              </div>
            </div>
          </section>

          {/* --- Contact & CTA Section --- */}
          <section
            id="contact"
            className="rounded-lg blue-bg px-10 py-16 text-white shadow-xl mt-36"
          >
            <div className="text-center">
              <h2 className="mb-4 text-3xl font-bold">
                تواصل معنا اليوم - بيع أو شراء اثاث مستعمل الشارقة
              </h2>
              <p className="mb-6 text-lg text-white/80">
                هل أنت مستعد للبيع أو الشراء؟ تواصل معنا الآن.
              </p>
              <div className="mb-8 space-y-2 text-lg text-white/90">
                <p>
                  <strong>العنوان:</strong> شارع الاستقلال، بوشغارة، حي
                  القاسمية، الشارقة
                </p>
                <p>
                  <strong>الهاتف وواتساب:</strong>{" "}
                  <span dir="ltr">+971 556461731</span>
                </p>
                <p>
                  <strong>البريد الإلكتروني:</strong> rukun.al.arooba@gmail.com
                </p>
                <p>
                  <strong>ساعات العمل:</strong> من الإثنين إلى الأحد: ٩ ص – ١١ م
                  (الأربعاء حتى ١٠:٣٠ م، الإثنين حتى ١١:٣٠ م)
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="tel:+971556461731"
                  className="rounded-lg tert-bg px-6 py-3 font-semibold blue shadow-md transition-transform hover:scale-105"
                >
                  اتصل الآن للحصول على تقييم فوري!
                </a>
                <a
                  href="https://wa.me/+971556461731?text=%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%D9%85%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84"
                  className="rounded-lg bg-green-500 px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105"
                >
                  أرسل صور أثاثك عبر الواتساب!
                </a>
                <a
                  href="#how-to-buy"
                  className="rounded-lg pri-bg px-6 py-3 font-semibold text-white shadow-md transition-transform hover:scale-105"
                >
                  زر معرضنا اليوم في شارع الاستقلال!
                </a>
              </div>
            </div>
          </section>

          {/* --- Footer Note --- */}
        </div>
      </main>
    </>
  );
}
