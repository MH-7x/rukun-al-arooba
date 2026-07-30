import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import ArBreadcrumb from "@/components/arabic/ArBreadcrumb";
import { createEncodedUrl } from "@/lib/utils";
import {
  Phone,
  MapPin,
  CheckCircle,
  Truck,
  CreditCard,
  Recycle,
  Star,
  HelpCircle,
  Sofa,
  Bed,
  Monitor,
  Briefcase,
  Utensils,
  Camera,
  Clock,
  DollarSign,
  XCircle,
  ThumbsUp,
} from "lucide-react";
import Image from "next/image";

const navItems = [
  {
    title: "اثاث مستعمل",
    link: createEncodedUrl("أثاث-مستعمل"),
  },
  {
    title: "اثاث مستعمل الشارقة",
    link: createEncodedUrl("أثاث-مستعمل-الشارقة"),
  },
  {
    title: "اثاث مستعمل دبي",
    link: createEncodedUrl("اثاث-مستعمل-دبي"),
  },
  {
    title: "اثاث مستعمل ابوظبي",
    link: createEncodedUrl("اثاث-مستعمل-ابوظبي"),
  },
  {
    title: "اثاث مستعمل عجمان",
    link: createEncodedUrl("اثاث-مستعمل-عجمان"),
  },
  {
    title: "اثاث مستعمل العين",
    link: createEncodedUrl("اثاث-مستعمل-العين"),
  },
  {
    title: "اثاث مستعمل راس الخيمة",
    link: createEncodedUrl("اثاث-مستعمل-راس-الخيمة"),
  },
];

const ArFaqs = [
  {
    question: "أين أجد محلات اثاث مستعمل في العين؟",
    answer:
      "نحن نخدم جميع مناطق العين من خلال متجرنا الرئيسي. نوفر خدمة توصيل سريعة (خلال 24-48 ساعة) إلى اليحر، زاخر، المقام، ووسط المدينة، مع إمكانية معاينة الصور والفيديوهات قبل الطلب.",
  },
  {
    question: "هل تشترون أثاث مستعمل من المنازل في العين؟",
    answer:
      "نعم، نشتري الأثاث المستعمل من جميع مناطق العين. نرسل مندوباً للمعاينة، ندفع نقداً فوراً، ونتكفل بعملية الفك والنقل مجاناً من منزلك.",
  },
  {
    question: "هل تبيعون غرف نوم مستعملة نظيفة في العين؟",
    answer:
      "بالتأكيد، لدينا تشكيلة واسعة من غرف النوم المستعملة (كاملة ومفرقة) بحالة ممتازة. نقوم بتجديدها وتنظيفها وتوصيلها وتركيبها في منزلك بالعين.",
  },
  {
    question: "هل تشترون أجهزة كهربائية مستعملة في العين (ثلاجات وغسالات)؟",
    answer:
      "نعم، نشتري الأجهزة الكهربائية المنزلية (ثلاجات، غسالات، أفران، مكيفات) في العين، بشرط أن تكون صالحة للعمل وبحالة جيدة.",
  },
  {
    question: "أبحث عن اثاث مستعمل في العين بني ياس أو اليحر، هل تصلون هناك؟",
    answer:
      "نعم، تغطيتنا تشمل العين وضواحيها بما في ذلك بني ياس، اليحر، الهيلي، والجيمي. سواء للبيع أو الشراء، فريقنا يصل إليكم.",
  },
  {
    question: "ما هي أسعار الأثاث المستعمل لديكم مع التوصيل للعين؟",
    answer:
      "أسعارنا تنافسية جداً وتناسب جميع الميزانيات. رسوم التوصيل للعين رمزية، وكثيراً ما نقدم عروض توصيل مجاني عند شراء أطقم كاملة أو كميات.",
  },
];

import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل في العين | أفضل الأسعار - ركن العروبة",
      desc: "اشتري واستمتع بـ اثاث مستعمل للبيع في بأفضل الأسعار. معرض ركن العروبة يوفر أثاث عالي الجودة مع ضمان وخدمة توصيل. خبرة 20+ سنة. اتصل الآن!",
    },
    path: `/${decodeURIComponent("اثاث-مستعمل-العين")}`,
    image: {
      path: "/ar/used-furniture-al-ain-ar.jpg",
      alt: "اثاث مستعمل في العين",
    },
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(ArFaqs));
export default function UsedFurnitureAlAin() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main dir="rtl" className="text-right font-sans text-[#414141] ">
        <ArBreadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "اثاث مستعمل العين" },
          ]}
        />
        {/* --- HERO SECTION --- */}
        {/* Covers PDF Page 1: Intro */}
        <section className="relative w-full py-20 lg:py-32 overflow-hidden">
          <div className="grid-background absolute inset-0 opacity-50"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <span className="pri font-bold tracking-wider text-sm md:text-base uppercase mb-4 block">
                ركن العروبة للأثاث المستعمل
              </span>
              <h1 className="text-4xl md:text-6xl font-extrabold headline mb-6 leading-tight">
                اثاث مستعمل في العين
                <br />
                <span className="blue">جودة عالية وأسعار منافسة</span>
              </h1>
              <p className="text-lg md:text-xl text mb-10 max-w-2xl mx-auto leading-relaxed">
                إذا كنت تبحث عن اثاث مستعمل للبيع في العين، فأنت في المكان
                الصحيح. نعرف أن شراء الأثاث الجديد قد يكون مكلفاً. ركن العروبة
                يوفر لك أثاثاً مستعملاً عالي الجودة بأسعار تناسب الجميع، مع خدمة
                توصيل سريعة وفحص دقيق لكل قطعة.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={`tel:+971556461731`}>
                  <button className="blue-bg text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg flex items-center justify-center gap-2">
                    <Phone size={20} /> اتصل بنا الآن
                  </button>
                </Link>
                <Link
                  href={`https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture`}
                >
                  <button className="pri-bg text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg">
                    تواصل عبر واتساب
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <div className="w-full bg-gray-50 my-20 rounded-2xl md:p-10 p-5 grid md:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto">
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/ar/used-furniture-al-ain-ar.jpg"}
              alt="اثاث مستعمل في العين "
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/ar/rukun-al-arooba-used-furniture.jpg"}
              alt="ركن العروبة للأثاث المستعمل"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        {/* --- WHY CHOOSE US --- */}
        {/* Covers PDF Page 1: Why Choose Rukun Al Arooba */}
        <section className="py-16 bg-white relative">
          <div className="bg-pattern opacity-30 pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold headline mb-4">
                لماذا تختار ركن العروبة؟
              </h2>
              <p className="text text-lg">
                الخيارات كثيرة، لكن الجودة والمصداقية هي ما يميزنا
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 rounded-2xl bg-gray-50 hover:shadow-xl transition border border-gray-100">
                <div className="w-12 h-12 rounded-full blue-bg flex items-center justify-center text-white mb-4">
                  <Star size={24} />
                </div>
                <h3 className="text-xl font-bold blue mb-3">خبرة 20+ عاماً</h3>
                <p className="text-sm text-gray-600">
                  تأسست الشركة رسمياً عام 2018، لكن خبرتنا تتجاوز 20 عاماً. شركة
                  مرخصة وموثقة تضمن لك تعاملاً آمداً.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 hover:shadow-xl transition border border-gray-100">
                <div className="w-12 h-12 rounded-full pri-bg flex items-center justify-center text-white mb-4">
                  <MapPin size={24} />
                </div>
                <h3 className="text-xl font-bold pri mb-3">
                  معرض فعلي في الشارقة
                </h3>
                <p className="text-sm text-gray-600">
                  موقعنا في شارع الاستقلال، الشارقة (ساعة عن العين). يمكنك
                  الزيارة أو الطلب عبر الواتساب مع التوصيل لباب منزلك.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 hover:shadow-xl transition border border-gray-100">
                <div className="w-12 h-12 rounded-full tert-bg flex items-center justify-center text-[#353535] mb-4">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-[#353535] mb-3">
                  فحص وتجديد شامل
                </h3>
                <p className="text-sm text-gray-600">
                  نفحص الهيكل، نصلح العيوب، ونلمع الخشب. لا نقبل أثاثاً متضرراً
                  بالمياه أو به روائح. تستلم الأثاث "كالجديد".
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 hover:shadow-xl transition border border-gray-100">
                <div className="w-12 h-12 rounded-full blue-bg flex items-center justify-center text-white mb-4">
                  <Recycle size={24} />
                </div>
                <h3 className="text-xl font-bold blue mb-3">
                  ضمان وسياسة إرجاع
                </h3>
                <p className="text-sm text-gray-600">
                  نقدم ضماناً على معظم القطع. إذا لم يكن الأثاث كما توقعت، لدينا
                  سياسة إرجاع مرنة وعادلة.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* --- CATEGORIES --- */}
        {/* Covers PDF Pages 2-3: Types of Furniture */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold headline mb-10 text-center">
              أنواع الأثاث المستعمل المتوفر للبيع
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <Bed className="w-10 h-10 blue mb-4" />
                <h3 className="text-xl font-bold blue mb-2">غرف نوم مستعملة</h3>
                <p className="text-sm text-gray-600">
                  أسرة (مفرد، مزدوج، كينج)، خزائن ملابس (صغيرة وكبيرة)، طاولات
                  جانبية وتسريحات. ماركات مثل ايكيا وهوم سنتر بتوفير 50-70%.
                </p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <Sofa className="w-10 h-10 blue mb-4" />
                <h3 className="text-xl font-bold blue mb-2">
                  أطقم كنب وصالونات
                </h3>
                <p className="text-sm text-gray-600">
                  كنب 3 إلى 7 مقاعد، صالونات عربية وعصرية. جميع القطع تخضع
                  لتنظيف عميق وفحص للهيكل الداخلي قبل العرض.
                </p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <Utensils className="w-10 h-10 blue mb-4" />
                <h3 className="text-xl font-bold blue mb-2">طاولات طعام</h3>
                <p className="text-sm text-gray-600">
                  طاولات خشبية وزجاجية، قابلة للتمديد. كراسي منجدة أو خشبية.
                  نوفر أطقماً كاملة أو كراسي منفصلة بأسعار ممتازة.
                </p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <div className="w-10 h-10 border-2 border-[#144e5a] rounded mb-4 flex items-center justify-center font-bold blue">
                  K
                </div>
                <h3 className="text-xl font-bold blue mb-2">مطابخ وخزائن</h3>
                <p className="text-sm text-gray-600">
                  مطابخ كاملة من فلل، خزائن مطبخ منفصلة، طاولات تحضير وأرفف. قد
                  تشمل الأحواض والخلاطات حسب الطقم.
                </p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <Monitor className="w-10 h-10 blue mb-4" />
                <h3 className="text-xl font-bold blue mb-2">أجهزة منزلية</h3>
                <p className="text-sm text-gray-600">
                  ثلاجات، غسالات (صغيرة وعائلية)، مكيفات (خاصة في الصيف)، وشاشات
                  تلفزيون. جميعها مختبرة ومضمونة التشغيل.
                </p>
              </div>

              <div className="group bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                <Briefcase className="w-10 h-10 blue mb-4" />
                <h3 className="text-xl font-bold blue mb-2">
                  أثاث مكتبي للشركات
                </h3>
                <p className="text-sm text-gray-600">
                  حلول للشركات الناشئة: مكاتب موظفين وتنفيذية، كراسي مريحة،
                  خزائن ملفات، وطاولات اجتماعات بأسعار توفيرية.
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <span className="inline-block bg-white px-6 py-3 rounded-full shadow-sm text-sm font-semibold border border-gray-200">
                🌲 نوفر أيضاً أثاث خارجي وحدائق: كراسي مقاومة للطقس، مظلات،
                وجلسات للبلكونات.
              </span>
            </div>
          </div>
        </section>

        {/* --- SERVICES FOR BUYERS (Delivery & Payment) --- */}
        {/* Covers PDF Pages 3-4: Delivery & Payment */}
        <section className="py-16 bg-white relative">
          <div className="grid-background absolute inset-0 opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Delivery */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg blue-bg flex items-center justify-center text-white">
                    <Truck size={20} />
                  </div>
                  <h3 className="text-xl font-bold blue">
                    توصيل شامل وآمن للعين
                  </h3>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  نعمل مع شريك موثوق "أبو محمد لنقل الأثاث". يتم تغليف الأثاث
                  بعناية (أغطية واقية وكرتون) لضمان وصوله بنفس حالة المعرض.
                </p>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li className="flex gap-2">
                    <CheckCircle size={16} className="pri" /> تغطية شاملة لجميع
                    مناطق العين.
                  </li>
                  <li className="flex gap-2">
                    <CheckCircle size={16} className="pri" /> أسعار تفضيلية
                    وعروض توصيل مجاني أحياناً.
                  </li>
                </ul>
              </div>

              {/* Payment */}
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg tert-bg flex items-center justify-center text-[#353535]">
                    <CreditCard size={20} />
                  </div>
                  <h3 className="text-xl font-bold text-[#353535]">
                    طرق دفع متعددة لراحتكم
                  </h3>
                </div>
                <p className="text-gray-600 mb-4">
                  معظم المنافسين يقبلون النقد فقط، نحن نوفر خيارات مرنة:
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border text-center text-sm font-bold">
                    الدفع النقدي
                  </div>
                  <div className="bg-white p-3 rounded border text-center text-sm font-bold">
                    التحويل البنكي
                  </div>
                  <div className="bg-white p-3 rounded border text-center text-sm font-bold">
                    الإيداع الإلكتروني
                  </div>
                  <div className="bg-white p-3 rounded border text-center text-sm font-bold">
                    الشيكات (للشركات)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- SELLING GUIDE (Comprehensive) --- */}
        {/* Covers PDF Pages 6-8: Complete Selling Guide */}
        <section className="py-16 bg-[#144e5a] text-white relative">
          <div className="bg-pattern opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#ffdb5e]">
                بيع أثاثك المستعمل في العين
              </h2>
              <p className="opacity-90 max-w-2xl mx-auto">
                عملية سهلة، سريعة، وبسعر عادل. نشتري منك فوراً.
              </p>
            </div>

            {/* Steps */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
              {[
                {
                  icon: Phone,
                  title: "1. تواصل معنا",
                  desc: "واتساب أو اتصال",
                },
                {
                  icon: Camera,
                  title: "2. أرسل الصور",
                  desc: "صور واضحة للعيوب والتفاصيل",
                },
                {
                  icon: Clock,
                  title: "3. تقييم مبدئي",
                  desc: "خلال 5-10 دقائق",
                },
                {
                  icon: MapPin,
                  title: "4. المعاينة",
                  desc: "زيارة لمنزلك في العين",
                },
                {
                  icon: DollarSign,
                  title: "5. الدفع الفوري",
                  desc: "كاش ونقل فوري",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 text-center"
                >
                  <step.icon className="w-8 h-8 mx-auto mb-3 text-[#ffdb5e]" />
                  <h4 className="font-bold mb-1">{step.title}</h4>
                  <p className="text-xs opacity-80">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* What We Buy / Don't Buy */}
              <div className="bg-white text-[#414141] p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold blue mb-6 border-b pb-4">
                  ماذا نشتري؟
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-green-600 mb-3 flex items-center gap-2">
                      <ThumbsUp size={18} /> نشتري:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• غرف نوم (كاملة/أجزاء)</li>
                      <li>• أطقم كنب وصالونات</li>
                      <li>• طاولات طعام ومطابخ</li>
                      <li>• أثاث مكتبي وأجهزة منزلية</li>
                      <li>• أثاث حدائق وإلكترونيات</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-red-500 mb-3 flex items-center gap-2">
                      <XCircle size={18} /> لا نشتري:
                    </h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• أثاث متضرر بشدة/مكسور</li>
                      <li>• مصاب بالنمل الأبيض</li>
                      <li>• روائح كريهة مستديمة</li>
                      <li>• أثاث متعفن</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Tips to Increase Value */}
              <div className="bg-[#c07d53] text-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-xl font-bold mb-6 border-b border-white/20 pb-4">
                  نصائح لزيادة سعر بيع أثاثك
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <span className="font-bold text-[#144e5a] bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      1
                    </span>
                    <span className="text-sm">
                      نظف الأثاث جيداً (يزيد القيمة 15-20%).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#144e5a] bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      2
                    </span>
                    <span className="text-sm">
                      أصلح العيوب البسيطة (شد مسامير، مقابض).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#144e5a] bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      3
                    </span>
                    <span className="text-sm">
                      صور بإضاءة جيدة وزوايا واضحة.
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#144e5a] bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      4
                    </span>
                    <span className="text-sm">
                      احتفظ بالفواتير (خاصة لماركات مثل ايكيا).
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#144e5a] bg-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
                      5
                    </span>
                    <span className="text-sm">
                      بع في الوقت المناسب قبل تلف الأثاث.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- AREAS COVERED --- */}
        {/* Covers PDF Pages 4-5: Areas */}
        <section className="py-12 bg-white border-b">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold blue mb-6 text-center">
              نخدم جميع مناطق العين
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 text-center text-sm text-gray-700">
              <div className="p-3 bg-gray-50 rounded hover:bg-[#ffdb5e] hover:text-[#414141] transition cursor-default">
                الجاهلي والمطوعة
              </div>
              <div className="p-3 bg-gray-50 rounded hover:bg-[#ffdb5e] hover:text-[#414141] transition cursor-default">
                المعترض والمويجعي
              </div>
              <div className="p-3 bg-gray-50 rounded hover:bg-[#ffdb5e] hover:text-[#414141] transition cursor-default">
                زاخر والخبيصي
              </div>
              <div className="p-3 bg-gray-50 rounded hover:bg-[#ffdb5e] hover:text-[#414141] transition cursor-default">
                الطوية والصاروج
              </div>
              <div className="p-3 bg-gray-50 rounded hover:bg-[#ffdb5e] hover:text-[#414141] transition cursor-default">
                الفوعة والقطارة
              </div>
            </div>
          </div>
        </section>

        {/* --- BUYER GUIDE & TIPS --- */}
        {/* Covers PDF Pages 5-6: Buyers Guide */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold headline mb-4">
                دليلك لشراء أثاث مستعمل بذكاء
              </h2>
              <p className="text">
                تجنب الأخطاء الشائعة مع نصائح خبراء ركن العروبة
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#c07d53]">
                <h3 className="text-xl font-bold mb-4 pri">خطوات الفحص</h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                  <li>افحص الهيكل (شقوق، مفاصل).</li>
                  <li>اضغط على الإسفنج وتأكد من رجوعه لشكله.</li>
                  <li>افتح الأدراج وجرب العجلات.</li>
                  <li className="font-bold text-black mt-2">
                    في معرضنا، قمنا بهذا الفحص مسبقاً!
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-[#144e5a]">
                <h3 className="text-xl font-bold mb-4 blue">كيف توفر المال؟</h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                  <li>اشترِ أطقماً كاملة (أوفر من القطع المنفردة).</li>
                  <li>الشراء خارج مواسم الذروة (نهاية السنة).</li>
                  <li>قارن الجودة والضمان وليس السعر فقط.</li>
                  <li>اختر ماركات معروفة تعيش طويلاً.</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border-t-4 border-red-400">
                <h3 className="text-xl font-bold mb-4 text-red-500">
                  تحذيرات (تجنب هذا)
                </h3>
                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                  <li>أثاث منتفخ (ضرر مياه).</li>
                  <li>نشارة خشب أو ثقوب (نمل أبيض).</li>
                  <li>روائح كريهة لا تزول.</li>
                  <li>الشراء بدون فحص أو من مصادر مجهولة.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* --- PRICE COMPARISON --- */}
        {/* Covers PDF Page 8: Price Table */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-2xl font-bold headline mb-8 text-center">
              مقارنة الأسعار: الجديد مقابل المستعمل
            </h2>
            <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
              <table className="w-full text-sm text-right">
                <thead className="blue-bg text-white uppercase">
                  <tr>
                    <th className="px-6 py-4">نوع الأثاث</th>
                    <th className="px-6 py-4">سعر جديد (تقريبي)</th>
                    <th className="px-6 py-4">سعر مستعمل (عندنا)</th>
                    <th className="px-6 py-4">نسبة التوفير</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">طقم غرفة نوم كامل</td>
                    <td className="px-6 py-4 text-gray-500">
                      5,000 - 8,000 د.إ
                    </td>
                    <td className="px-6 py-4 font-bold text-[#144e5a]">
                      1,500 - 3,000 د.إ
                    </td>
                    <td className="px-6 py-4 text-green-600 font-bold">
                      50-70%
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="px-6 py-4 font-medium">طقم كنب 7 مقاعد</td>
                    <td className="px-6 py-4 text-gray-500">
                      4,000 - 6,000 د.إ
                    </td>
                    <td className="px-6 py-4 font-bold text-[#144e5a]">
                      1,200 - 2,500 د.إ
                    </td>
                    <td className="px-6 py-4 text-green-600 font-bold">
                      60-70%
                    </td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium">طاولة طعام وكراسي</td>
                    <td className="px-6 py-4 text-gray-500">
                      2,500 - 4,000 د.إ
                    </td>
                    <td className="px-6 py-4 font-bold text-[#144e5a]">
                      800 - 1,500 د.إ
                    </td>
                    <td className="px-6 py-4 text-green-600 font-bold">
                      60-70%
                    </td>
                  </tr>
                  <tr className="bg-gray-50 hover:bg-gray-100">
                    <td className="px-6 py-4 font-medium">ثلاجة عائلية</td>
                    <td className="px-6 py-4 text-gray-500">
                      2,000 - 3,500 د.إ
                    </td>
                    <td className="px-6 py-4 font-bold text-[#144e5a]">
                      600 - 1,200 د.إ
                    </td>
                    <td className="px-6 py-4 text-green-600 font-bold">
                      65-70%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-xs text-gray-500 text-center">
              *الأسعار تقديرية. الأثاث الجديد يفقد 40-50% من قيمته فور
              الاستخدام.
            </p>
          </div>
        </section>

        {/* --- SUSTAINABILITY --- */}
        {/* Covers PDF Page 9: Sustainability */}
        <section className="py-16 bg-[#eef5f6]">
          <div className="container mx-auto px-4 text-center">
            <Recycle className="w-16 h-16 blue mx-auto mb-6" />
            <h2 className="text-3xl font-bold headline mb-4">
              نحو مستقبل أخضر
            </h2>
            <div className="max-w-3xl mx-auto text-gray-700 space-y-4">
              <p>
                شراء الأثاث المستعمل هو ممارسة حقيقية للاستدامة ودعم للاقتصاد
                الدائري:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-8">
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold blue mb-2">تقليل النفايات</h4>
                  <p className="text-xs">
                    كل قطعة نعيد استخدامها تعني نفايات أقل في المكب (50-100 كغ
                    للطقم).
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold blue mb-2">توفير الموارد</h4>
                  <p className="text-xs">
                    تقليل قطع الأشجار واستهلاك المياه والطاقة في التصنيع.
                  </p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h4 className="font-bold blue mb-2">تقليل الكربون</h4>
                  <p className="text-xs">
                    تجنب انبعاثات التصنيع والنقل الدولي.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS --- */}
        {/* Covers PDF Pages 9-10: Testimonials (Including Fatima) */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold headline mb-10 text-center">
              قصص نجاح عملائنا
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 relative">
                <div className="absolute -top-4 right-6 text-4xl text-[#ffdb5e] opacity-50">
                  "
                </div>
                <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                  كنا ننتقل لمنزل جديد في العين بميزانية محدودة. اشترينا غرفة
                  نوم، غرف أطفال، وكنب بـ 8,000 درهم فقط. الجديد كان سيكلف
                  20,000! الجودة ممتازة.
                </p>
                <div className="font-bold blue mt-auto">
                  - عائلة أحمد (توفير 15,000 درهم)
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 relative">
                <div className="absolute -top-4 right-6 text-4xl text-[#ffdb5e] opacity-50">
                  "
                </div>
                <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                  كشركة ناشئة، جهزنا مكتباً لـ 5 موظفين بـ 3,500 درهم فقط! مكاتب
                  وكراسي وطاولة اجتماعات بحالة ممتازة. وفرنا 6,000 درهم.
                </p>
                <div className="font-bold blue mt-auto">
                  - شركة الإبداع (تجهيز مكتب)
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-100 relative">
                <div className="absolute -top-4 right-6 text-4xl text-[#ffdb5e] opacity-50">
                  "
                </div>
                <p className="text-gray-700 italic mb-4 text-sm leading-relaxed">
                  كنا نغادر الإمارات ونحتاج لبيع أثاث الفيلا بسرعة. ركن العروبة
                  قيموا الأثاث، دفعوا فوراً، ونقلوا كل شيء خلال يومين. عملية
                  سهلة جداً.
                </p>
                <div className="font-bold blue mt-auto">
                  - فاطمة (باعت أثاث فيلتها)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FAQ --- */}
        {/* Covers PDF Pages 10-11: All FAQ items */}
        <section className="py-16 bg-gray-50 faq">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-bold headline mb-10 text-center flex items-center justify-center gap-2">
              <HelpCircle className="blue" /> الأسئلة الشائعة
            </h2>

            <div className="space-y-3">
              {ArFaqs.map((item, idx) => (
                <details
                  key={idx}
                  className="group bg-white p-4 rounded-lg shadow-sm cursor-pointer border border-gray-100"
                >
                  <summary className="font-bold text-base list-none flex justify-between items-center text-[#144e5a]">
                    {item.question}
                    <span className="transition group-open:rotate-180 text-gray-400">
                      ▼
                    </span>
                  </summary>
                  <p className="text-gray-600 mt-3 leading-relaxed text-sm">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* --- WHY AL AIN & EMIRATES --- */}
        {/* Covers PDF Pages 11-12: Why Al Ain & Serving All Emirates */}
        <section className="py-16 bg-white border-t">
          <div className="container mx-auto px-4 text-center">
            <div className="mb-12 max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold headline mb-4">لماذا العين؟</h2>
              <p className="text-gray-600 leading-relaxed">
                مدينة العين من أكبر مدن أبوظبي وتتميز بنمو سكاني مستمر وجودة
                حياة عالية. مع انتقال العائلات الجديدة، يزداد الطلب على حلول
                تأثيث عملية. ركن العروبة هنا لدعم مجتمع العين بأثاث راقٍ يناسب
                الميزانيات، لنكون جزءاً من جمال هذه المدينة.
              </p>
            </div>

            <div className="bg-[#f8f9fa] p-8 rounded-2xl inline-block w-full max-w-4xl">
              <h3 className="text-xl font-bold blue mb-6">
                نخدم جميع إمارات الدولة
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-semibold text-[#c07d53]">
                {navItems.map((item, idx) => (
                  <Link
                    className="bg-white px-4 py-2 rounded-full shadow-sm"
                    key={idx}
                    href={item.link}
                  >
                    {item.title}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- CONTACT / FINAL CTA --- */}
        {/* Covers PDF Page 12: Conclusion & CTA */}
        <section className="py-20 bg-[#144e5a] text-white relative overflow-hidden">
          <div className="bg-pattern opacity-10 pointer-events-none"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              لا تضيع الفرصة!
            </h2>
            <p className="mb-10 text-lg opacity-90 max-w-2xl mx-auto">
              سواء كنت تريد شراء أو بيع، ركن العروبة هو خيارك الأفضل في العين.
              جودة، مصداقية، وخبرة 20 عاماً.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
              <Link
                href={`https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture`}
                className="bg-white/10 p-6 rounded-xl cursor-pointer backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
              >
                <h3 className="text-xl font-bold mb-2 text-[#ffdb5e]">
                  للشراء
                </h3>
                <p className="mb-4 text-sm opacity-90">
                  تصفح مئات القطع المتنوعة.
                </p>
                <button
                  dir="ltr"
                  className="bg-white text-[#144e5a] px-6 py-2 rounded-lg font-bold hover:bg-gray-100 transition w-full"
                >
                  (055) 6461731
                </button>
              </Link>
              <Link
                href={`https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture`}
                className="bg-white/10 p-6 rounded-xl cursor-pointer backdrop-blur-sm border border-white/20 hover:bg-white/20 transition"
              >
                <h3 className="text-xl font-bold mb-2 text-[#ffdb5e]">للبيع</h3>
                <p className="mb-4 text-sm opacity-90">تقييم فوري وكاش سريع.</p>
                <button
                  dir="ltr"
                  className="bg-[#25D366] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#20bd5a] transition w-full"
                >
                  (055) 6461731
                </button>
              </Link>
            </div>

            <div className="text-sm opacity-70 mt-8 border-t border-white/10 pt-6">
              <p>
                ساعات العمل: السبت - الخميس (8 ص - 10 م) | الجمعة (2 م - 10 م)
              </p>
              <p>العنوان: شارع الاستقلال، بوشغارة، الشارقة</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
