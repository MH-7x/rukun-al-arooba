import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import ArBreadcrumb from "@/components/arabic/ArBreadcrumb";
import { createEncodedUrl } from "@/lib/utils";
import {
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  CheckCircle,
  Star,
  Truck,
  Shield,
  ThumbsUp,
  Leaf,
  DollarSign,
  Home,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

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
    question: "هل تقدمون ضماناً على الأثاث المستعمل في دبي؟",
    answer:
      "نعم. نقدم ضماناً مكتوباً على جميع قطع الأثاث التي نبيعها. كما لدينا سياسة إرجاع واضحة إذا لم يكن الأثاث كما وصفناه أو لم يلبِّ توقعاتك.",
  },
  {
    question: "كم يستغرق التوصيل من الشارقة إلى دبي؟",
    answer:
      "عادةً 24-48 ساعة لمعظم مناطق دبي. في الحالات العاجلة، يمكننا الترتيب للتوصيل في نفس اليوم بناءً على توفر فريق النقل.",
  },
  {
    question: "ما هي تكلفة التوصيل لدبي؟",
    answer:
      "تختلف التكلفة حسب المنطقة وحجم الأثاث. نقدم أسعاراً تنافسية بفضل شراكتنا مع أبو محمد للنقل. تواصل معنا وسنعطيك سعراً دقيقاً.",
  },
  {
    question: "هل يمكنني زيارة المعرض في الشارقة؟",
    answer:
      "بالتأكيد! معرضنا مفتوح يومياً. العنوان: شارع الاستقلال، بوشغارة، حي القاسمية، الشارقة. من دبي، تستغرق الرحلة 20-30 دقيقة فقط عبر شارع الاتحاد.",
  },
  {
    question: "ما هي طرق الدفع المتاحة؟",
    answer:
      "نقبل الدفع نقداً، تحويلاً بنكياً، أو بالشيكات البنكية. اختر الطريقة الأنسب لك.",
  },
  {
    question: "كيف أحصل على تقييم لأثاثي في دبي؟",
    answer:
      "بسيط جداً. تواصل معنا عبر الواتساب، أرسل صوراً واضحة للأثاث مع وصف بسيط للحالة، وستحصل على تقييم خلال 5-10 دقائق.",
  },
  {
    question: "هل تشترون أثاث الفلل الكاملة في دبي؟",
    answer:
      "نعم. نتخصص في شراء أثاث الفلل والشقق الكاملة، بالإضافة لأثاث الفنادق والشركات. نقدم عروضاً ممتازة للكميات الكبيرة.",
  },
  {
    question: "متى تدفعون المبلغ؟",
    answer:
      "فوراً عند استلام الأثاث. يمكنك اختيار الدفع نقداً أو تحويلاً بنكياً في نفس اليوم.",
  },
  {
    question: "هل تشترون الأثاث حتى لو لم يكن بحالة ممتازة؟",
    answer:
      "نشتري الأثاث بمختلف الحالات، لكن السعر يعتمد على الحالة الفعلية. نحن متخصصون في تجديد الأثاث، لذا نقبل قطعاً تحتاج لإصلاح بسيط.",
  },
  {
    question: "كم يستغرق الاستلام من منزلي في دبي؟",
    answer:
      "عادةً 24-48 ساعة من الاتفاق على السعر. في الحالات العاجلة (إذا كنت مسافراً مثلاً)، نحاول الحضور في نفس اليوم.",
  },
  {
    question: "ما الفرق بينكم وبين دوبيزل؟",
    answer:
      "نحن شركة مسجلة رسمياً مع معرض حقيقي. نقدم ضماناً، فحصاً للجودة، وخدمة توصيل احترافية. على دوبيزل، تتعامل مع أفراد بدون أي ضمانات - أنت تتحمل كل المخاطر.",
  },
  {
    question: "هل أنتم موجودون فقط في الشارقة؟",
    answer:
      "معرضنا الرئيسي في الشارقة، لكننا نخدم كل الإمارات. دبي، أبوظبي، عجمان، العين، رأس الخيمة - نصل لأي مكان.",
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل دبي | شراء وبيع | ركن العروبة | خبرة +20 عام",
      desc: "اثاث مستعمل دبي - نشتري ونبيع بأفضل الأسعار مع ضمان! معرض حقيقي في الشارقة، خبرة +20 عام، توصيل سريع لدبي. اتصل الآن 📞 للحصول على عرض فوري!",
    },
    path: `/${decodeURIComponent("اثاث-مستعمل-دبي")}`,
    image: {
      path: "/ar/used-furniture-dubai-ar.jpg",
      alt: "اثاث مستعمل دبي",
    },
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(ArFaqs));
export default function UsedFurnitureDubai() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      {/* Background Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-30 z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(-90deg, transparent calc(5em - 1px), rgba(192, 125, 83, 0.1) calc(5em - 1px + 1px), rgba(192, 125, 83, 0.1) 5em), linear-gradient(0deg, transparent calc(5em - 1px), rgba(192, 125, 83, 0.1) calc(5em - 1px + 1px), rgba(192, 125, 83, 0.1) 5em)`,
            backgroundSize: "5em 5em",
          }}
        ></div>
      </div>

      <main>
        <ArBreadcrumb
          items={[
            { label: "الرئيسية", href: "/" },
            { label: "اثاث مستعمل دبي" },
          ]}
        />
        {/* Hero Section */}
        <section className="relative z-10 bg-gradient-to-br from-[#144e5a] to-[#0d3940] text-white py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                backgroundSize: "40px 40px",
              }}
            ></div>
          </div>
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                أثاث مستعمل دبي - بيع وشراء بأفضل الأسعار
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-4xl mx-auto">
                هل تبحث عن مكان موثوق لبيع أثاثك المستعمل في دبي؟ أو ربما تحتاج
                لشراء اثاث مستعمل بجودة عالية وسعر معقول؟
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <p className="text-lg leading-relaxed mb-6">
                نحن في{" "}
                <span className="text-[#ffdb5e] font-bold">ركن العروبة</span>{" "}
                نفهم احتياجاتك. منذ أكثر من 20 عاماً ونحن نخدم سكان دبي
                والإمارات في بيع وشراء الأثاث المستعمل. لسنا مجرد وسطاء أو أفراد
                يعملون من المنزل - لدينا معرض حقيقي مسجل رسمياً في الشارقة، على
                بُعد 30 دقيقة فقط من دبي.
              </p>
              <p className="text-lg leading-relaxed">
                ما يميزنا؟ نقدم ضماناً على الأثاث الذي نبيعه، ونفحص كل قطعة بدقة
                قبل عرضها، ونقوم بالإصلاح والتلميع اللازم. عندما تشتري أثاثاً
                مستعملاً منا، تحصل على جودة تشبه الجديد بسعر يوفر عليك حتى 70%
                من تكلفة الأثاث الجديد.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href={"tel:+971556461731"}>
                <button className="bg-[#c07d53] hover:bg-[#a86943] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
                  <Phone size={24} />
                  اتصل الآن
                </button>
              </Link>
              <Link
                href={
                  "https://wa.me/+971556461731?text=%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%D9%85%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84"
                }
                target="_blank"
              >
                <button className="bg-[#ffdb5e] hover:bg-[#f0cc4e] text-[#144e5a] px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center gap-2 shadow-lg">
                  <MessageCircle size={24} />
                  واتساب
                </button>
              </Link>
            </div>
            <p className="text-center mt-6 text-gray-200">
              احصل على عرض سعر فوري خلال 5-10 دقائق
            </p>
          </div>
        </section>
        <div className="w-full bg-gray-50 my-20 rounded-2xl md:p-10 p-5 grid md:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto">
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/ar/used-furniture-dubai-ar.jpg"}
              alt="متجر أثاث مستعمل في دبي "
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/abu-shagara-used-furniture-market.jpg"}
              alt="أثاث مستعمل دبي"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        {/* Why Choose Us */}
        <section className="relative z-10 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-12">
              لماذا ركن العروبة هو خيارك الأمثل لـ اثاث مستعمل في دبي
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Feature 1 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#c07d53] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#144e5a] text-white p-3 rounded-lg">
                    <Home size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#144e5a] mb-3">
                      شركة مسجلة رسمياً مع معرض حقيقي
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      هذه نقطة مهمة. معظم من يعملون في مجال الأثاث المستعمل هم
                      أفراد أو وسطاء بدون معارض فعلية. نحن مختلفون.
                    </p>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      ركن العروبة شركة مسجلة رسمياً منذ 2018، لكن خبرتنا في
                      السوق تمتد لأكثر من 20 عاماً. معرضنا الفعلي موجود على شارع
                      الاستقلال في الشارقة - يمكنك زيارته ومشاهدة الأثاث بنفسك
                      قبل الشراء.
                    </p>
                    <p className="text-[#414141] leading-relaxed">
                      عندما تتعامل معنا، أنت تتعامل مع شركة لها عنوان ثابت، سجل
                      تجاري، وسمعة نحافظ عليها منذ سنوات.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#c07d53] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#144e5a] text-white p-3 rounded-lg">
                    <Truck size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#144e5a] mb-3">
                      خدمة سريعة وموثوقة لعملاء دبي
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      نعرف أن الوقت ثمين. لهذا نرد على استفساراتك خلال 5-10
                      دقائق عبر الواتساب أو موقعنا. ترسل لنا صور الأثاث الذي
                      تريد بيعه، وتحصل على تقييم سعر فوري وشفاف - بدون مماطلة أو
                      تأخير.
                    </p>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      نخدم جميع مناطق دبي: دبي مارينا، داون تاون، جميرا،
                      البرشاء، ديرة، بر دبي، والورقاء.
                    </p>
                    <p className="text-[#414141] leading-relaxed">
                      سواء كنت في فيلا في جميرا أو شقة في دبي مارينا، نصل إليك
                      خلال 24-48 ساعة لاستلام الأثاث أو توصيله.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#c07d53] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#144e5a] text-white p-3 rounded-lg">
                    <Shield size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#144e5a] mb-3">
                      جودة الأثاث المضمونة
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      هنا يظهر الفرق الحقيقي بيننا وبين المنافسين. كل قطعة أثاث
                      تدخل معرضنا تمر بعملية فحص دقيقة. نتأكد من سلامة الهيكل،
                      نظافة القماش أو الجلد، وعدم وجود أضرار جوهرية.
                    </p>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      بعد ذلك، نقوم بالإصلاح والتلميع اللازم. الهدف؟ أن تحصل على
                      أثاث يبدو ويعمل مثل الجديد.
                    </p>
                    <p className="text-[#414141] leading-relaxed">
                      وهذا ليس كلاماً فقط - نقدم ضماناً مكتوباً على الأثاث الذي
                      نبيعه. إذا واجهت أي مشكلة، لدينا سياسة إرجاع واضحة.
                    </p>
                  </div>
                </div>
              </div>

              {/* Feature 4 */}
              <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-[#c07d53] hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4 mb-4">
                  <div className="bg-[#144e5a] text-white p-3 rounded-lg">
                    <DollarSign size={28} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#144e5a] mb-3">
                      طرق دفع متنوعة وسهلة
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-4">
                      نسهل عليك عملية الدفع. تستطيع الدفع بالطريقة التي تناسبك:
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2 text-[#414141]">
                        <CheckCircle
                          size={20}
                          className="text-[#c07d53] flex-shrink-0"
                        />
                        نقداً
                      </li>
                      <li className="flex items-center gap-2 text-[#414141]">
                        <CheckCircle
                          size={20}
                          className="text-[#c07d53] flex-shrink-0"
                        />
                        تحويل بنكي
                      </li>
                      <li className="flex items-center gap-2 text-[#414141]">
                        <CheckCircle
                          size={20}
                          className="text-[#c07d53] flex-shrink-0"
                        />
                        شيكات بنكية
                      </li>
                    </ul>
                    <p className="text-[#414141] leading-relaxed mt-3">
                      معظم المنافسين يقبلون النقد فقط، مما يسبب إزعاجاً خصوصاً
                      في الصفقات الكبيرة.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Buy Section */}
        <section className="relative z-10 bg-gray-50 py-16 px-4 mt-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-6">
              نشتري جميع أنواع اثاث مستعمل في دبي بأفضل الأسعار
            </h2>
            <p className="text-xl text-[#414141] text-center mb-12 max-w-4xl mx-auto">
              هل تنتقل من منزلك؟ تريد تغيير ديكور الشقة؟ لديك أثاث فائض عن
              الحاجة؟ نحن نشتري كل أنواع الأثاث المستعمل بأسعار عادلة.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {/* Bedroom Furniture */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-full md:h-56 h-48 bg-gradient-to-br from-[#144e5a] to-[#0d3940] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={"/ar/Bedroom-furniture.jpg"}
                    alt="  أثاث غرف النوم"
                    fill
                    className="object-cover "
                  />
                </div>
                <h3 className="text-xl font-bold text-[#144e5a] mb-3">
                  أثاث غرف النوم
                </h3>
                <ul className="space-y-2 text-[#414141]">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>أسرّة بجميع الأحجام (مفرد، مزدوج، كوين، كينج)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>خزائن ودواليب ملابس</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>طاولات وتسريحات</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>مراتب بحالة جيدة</span>
                  </li>
                </ul>
              </div>

              {/* Living Room */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-full md:h-56 h-48 bg-gradient-to-br from-[#144e5a] to-[#0d3940] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={"/ar/Living-room.jpg"}
                    alt="  أثاث غرف المعيشة"
                    fill
                    className="object-cover "
                  />
                </div>
                <h3 className="text-xl font-bold text-[#144e5a] mb-3">
                  أثاث غرف المعيشة
                </h3>
                <ul className="space-y-2 text-[#414141]">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>أطقم كنب (جلد، قماش، أو ميكس)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>طاولات قهوة وطاولات جانبية</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>مكتبات وأرفف</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>وحدات تلفزيون</span>
                  </li>
                </ul>
              </div>

              {/* Dining Room */}
              <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-full md:h-56 h-48 bg-gradient-to-br from-[#144e5a] to-[#0d3940] rounded-lg mb-4 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={"/ar/Dining-furniture.jpg"}
                    alt="   أثاث غرف الطعام"
                    fill
                    className="object-cover "
                  />
                </div>
                <h3 className="text-xl font-bold text-[#144e5a] mb-3">
                  أثاث غرف الطعام
                </h3>
                <ul className="space-y-2 text-[#414141]">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>طاولات طعام مع كراسي</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>بوفيهات وخزائن صيني</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={18}
                      className="text-[#c07d53] flex-shrink-0 mt-1"
                    />
                    <span>كراسي طعام منفصلة</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* 3 Steps Process */}
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mt-20">
              <h3 className="text-2xl md:text-3xl font-bold text-[#144e5a] text-center mb-10">
                كيف تبيع اثاثك المستعمل لنا في دبي؟ (3 خطوات)
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-[#144e5a] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    1
                  </div>
                  <h4 className="text-xl font-bold text-[#144e5a] mb-3">
                    اتصل بنا
                  </h4>
                  <p className="text-[#414141]">
                    راسلنا على الواتساب أو اتصل مباشرة. أرسل صور واضحة للأثاث.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#c07d53] text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    2
                  </div>
                  <h4 className="text-xl font-bold text-[#144e5a] mb-3">
                    احصل على عرض سعر فوري
                  </h4>
                  <p className="text-[#414141]">
                    نقيّم أثاثك خلال 5-10 دقائق. لا رسوم مخفية أو مفاجآت.
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-[#ffdb5e] text-[#144e5a] w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    3
                  </div>
                  <h4 className="text-xl font-bold text-[#144e5a] mb-3">
                    الاستلام والدفع
                  </h4>
                  <p className="text-[#414141]">
                    نحضر لاستلام الأثاث وتستلم المبلغ فوراً - نقداً أو تحويلاً.
                  </p>
                </div>
              </div>
              <div className="text-center mt-10">
                <Link href={"tel:+971556461731"}>
                  <button className="bg-[#c07d53] hover:bg-[#a86943] text-white px-10 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                    اتصل الآن واحصل على نقود مقابل أثاثك خلال 48 ساعة!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* For Sale Section */}
        <section className="relative z-10 py-16 px-4 mt-10">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-6">
              اثاث مستعمل للبيع في دبي - جودة عالية بأسعار منافسة
            </h2>
            <p className="text-xl text-[#414141] text-center mb-12 max-w-4xl mx-auto">
              تحتاج لتأثيث شقتك الجديدة؟ تبحث عن قطع أثاث معينة؟ ميزانيتك
              محدودة؟ شراء اثاث مستعمل في دبي من ركن العروبة يوفر عليك أموالاً
              كثيرة مع الحفاظ على الجودة.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-[#144e5a]">
                <div className="bg-[#144e5a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} className="text-[#144e5a]" />
                </div>
                <h4 className="text-lg font-bold text-[#144e5a] mb-2">
                  جودة مفحوصة ومضمونة
                </h4>
                <p className="text-[#414141] text-sm">
                  كل قطعة مفحوصة بدقة ومُلمّعة
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-[#c07d53]">
                <div className="bg-[#c07d53]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign size={32} className="text-[#c07d53]" />
                </div>
                <h4 className="text-lg font-bold text-[#144e5a] mb-2">
                  أسعار تنافسية
                </h4>
                <p className="text-[#414141] text-sm">
                  وفّر من 50% إلى 70% من سعر الجديد
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-[#ffdb5e]">
                <div className="bg-[#ffdb5e]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[#ffdb5e]" />
                </div>
                <h4 className="text-lg font-bold text-[#144e5a] mb-2">
                  ضمان على المنتجات
                </h4>
                <p className="text-[#414141] text-sm">
                  ضمان مكتوب وسياسة إرجاع واضحة
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow border-t-4 border-[#144e5a]">
                <div className="bg-[#144e5a]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Truck size={32} className="text-[#144e5a]" />
                </div>
                <h4 className="text-lg font-bold text-[#144e5a] mb-2">
                  توصيل سريع لدبي
                </h4>
                <p className="text-[#414141] text-sm">
                  خلال 24-48 ساعة لجميع المناطق
                </p>
              </div>
            </div>

            {/* Pricing Examples */}
            <div className="bg-gradient-to-br from-[#144e5a] to-[#0d3940] rounded-2xl p-8 md:p-12 text-white mb-12 mt-24">
              <h3 className="text-2xl md:text-3xl font-bold text-center mb-8">
                أمثلة على التوفير
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-[#ffdb5e]">
                    طقم كنب جلد 7 مقاعد
                  </h4>
                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="line-through opacity-75">
                        جديد: 15,000 درهم
                      </span>
                    </p>
                    <p className="text-2xl font-bold text-[#ffdb5e]">
                      عندنا: 4,000 - 6,000 درهم
                    </p>
                    <p className="text-sm opacity-90">توفير يصل إلى 60%</p>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
                  <h4 className="text-xl font-bold mb-3 text-[#ffdb5e]">
                    غرفة نوم كاملة
                  </h4>
                  <div className="space-y-2">
                    <p className="text-lg">
                      <span className="line-through opacity-75">
                        جديدة: 10,000 درهم
                      </span>
                    </p>
                    <p className="text-2xl font-bold text-[#ffdb5e]">
                      عندنا: 2,500 - 4,000 درهم
                    </p>
                    <p className="text-sm opacity-90">توفير يصل إلى 70%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="relative z-10 bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-12">
              فوائد شراء اثاث مستعمل في دبي
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#c07d53] text-white p-3 rounded-lg flex-shrink-0">
                    <DollarSign size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#144e5a] mb-3">
                      توفير مالي كبير
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      هذا هو السبب الأول الذي يجعل الناس يفكرون في الأثاث
                      المستعمل. الأرقام واضحة: وفّر من 50% إلى 70% من سعر الأثاث
                      الجديد.
                    </p>
                    <p className="text-[#414141] leading-relaxed">
                      مثال: إذا كانت ميزانيتك 10,000 درهم، يمكنك تأثيث شقتك
                      بالكامل بأثاث مستعمل بجودة ممتازة. نفس المبلغ قد يكفي فقط
                      لغرفة واحدة بأثاث جديد.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#c07d53] text-white p-3 rounded-lg flex-shrink-0">
                    <Leaf size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#144e5a] mb-3">
                      صديق للبيئة ومستدام
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      كل قطعة أثاث تشتريها مستعملة تقلل النفايات في المكبات،
                      تعيد استخدام موارد موجودة بدلاً من إنتاج جديد، وتقلل الطلب
                      على قطع الأشجار والتصنيع.
                    </p>
                    <p className="text-[#414141] leading-relaxed">
                      دبي مدينة تهتم بالاستدامة - شراء الأثاث المستعمل جزء من
                      هذا الوعي.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#c07d53] text-white p-3 rounded-lg flex-shrink-0">
                    <ThumbsUp size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#144e5a] mb-3">
                      جودة وصناعة عالية
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      هذه نقطة مهمة قد لا تعرفها: كثير من الأثاث القديم أقوى من
                      الجديد. لماذا؟
                    </p>
                    <ul className="space-y-2 text-[#414141]">
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={18}
                          className="text-[#c07d53] flex-shrink-0 mt-1"
                        />
                        <span>الأثاث القديم غالباً مصنوع من خشب طبيعي صلب</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={18}
                          className="text-[#c07d53] flex-shrink-0 mt-1"
                        />
                        <span>التصميمات الكلاسيكية لا تتقادم</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle
                          size={18}
                          className="text-[#c07d53] flex-shrink-0 mt-1"
                        />
                        <span>الأثاث الذي صمد لسنوات أثبت متانته</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="bg-[#c07d53] text-white p-3 rounded-lg flex-shrink-0">
                    <Home size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#144e5a] mb-3">
                      مثالي للإيجارات والانتقالات في دبي
                    </h3>
                    <p className="text-[#414141] leading-relaxed mb-3">
                      دبي مدينة ديناميكية. الناس تنتقل كثيراً - من شقة لأخرى، من
                      إمارة لأخرى، من البلد للخارج.
                    </p>
                    <p className="text-[#414141] leading-relaxed">
                      الأثاث المستعمل مناسب تماماً لهذا الأسلوب. إذا كنت
                      مستأجراً، لماذا تستثمر في أثاث جديد قد تبيعه بخسارة عند
                      الانتقال؟
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Areas Served */}
        <section className="relative z-10 py-16 px-4 mt-20">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-12">
              نخدم جميع مناطق دبي لشراء وبيع اثاث مستعمل
            </h2>
            <p className="text-xl text-[#414141] text-center mb-12 max-w-4xl mx-auto">
              معرضنا الرئيسي في الشارقة، لكن قلبنا مع عملائنا في دبي. نقدم خدمة
              سريعة وشاملة لكل مناطق دبي - توصيل خلال 24 ساعة واستلام فوري عند
              شراء الأثاث منك.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "دبي مارينا",
                "داون تاون دبي",
                "جميرا",
                "البرشاء",
                "ديرة",
                "بر دبي",
                "مردف",
                "جميرا بيتش ريزيدنس",
                "الورقاء",
                "ند الشبا",
                "القوز",
                "دبي لاند",
              ].map((area, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow border-r-4 border-[#c07d53]"
                >
                  <MapPin className="text-[#144e5a] mx-auto mb-2" size={24} />
                  <Link href={"/اثاث-مستعمل-دبي"}>
                    <p className="font-semibold text-[#144e5a]">
                      {" "}
                      الأثاث المستعمل {area}{" "}
                    </p>
                  </Link>
                </div>
              ))}
            </div>

            {/* Sharjah Info */}
            <div className="bg-gradient-to-r from-[#144e5a] to-[#0d3940] rounded-2xl p-8 md:p-12 text-white mt-20">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                اثاث مستعمل دبي الشارقة - القرب والسهولة
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#ffdb5e]">
                    معرضنا في الشارقة قريب من دبي
                  </h4>
                  <p className="leading-relaxed mb-4">
                    بعض العملاء يسألون: لماذا معرضكم في الشارقة وليس في دبي؟
                    الجواب بسيط: الإيجارات في الشارقة أقل بكثير، مما يسمح لنا
                    بمعرض أكبر وأسعار أفضل لك.
                  </p>
                  <p className="leading-relaxed">
                    معرضنا على شارع الاستقلال في الشارقة يبعد 20-30 دقيقة فقط من
                    معظم مناطق دبي، مع سهولة الوصول ومواقف سيارات واسعة ومجانية.
                  </p>
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-4 text-[#ffdb5e]">
                    توصيل سريع من الشارقة إلى دبي
                  </h4>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-[#ffdb5e] flex-shrink-0 mt-1"
                      />
                      <span>توصيل خلال 24 ساعة لمعظم المناطق</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-[#ffdb5e] flex-shrink-0 mt-1"
                      />
                      <span>في الحالات العاجلة، توصيل في نفس اليوم</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-[#ffdb5e] flex-shrink-0 mt-1"
                      />
                      <span>أسعار توصيل تنافسية</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle
                        size={20}
                        className="text-[#ffdb5e] flex-shrink-0 mt-1"
                      />
                      <span>تغطية شاملة من الشارقة لكل دبي</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Related Services */}
        <section className="relative z-10 py-16 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-12">
              تصفح خدماتنا في الإمارات الأخرى
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {navItems.map((service, index) => (
                <Link
                  href={service.link}
                  target="_blank"
                  title={`اثاث مستعمل ${service.title}`}
                  key={index}
                  className={`bg-white rounded-lg  p-4 text-center  cursor-pointer border-b-2 border-[#144e5a] hover:shadow-lg transition-shadow duration-300 ease-in-out`}
                >
                  <p className="font-bold text-[#144e5a]">{service.title}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* Comparison Table */}
        <section className="relative z-10 bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-12">
              لماذا ركن العروبة أفضل من دوبيزل وغيره؟
            </h2>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-[#144e5a] text-white">
                    <tr>
                      <th className="p-4 text-right font-bold">الميزة</th>
                      <th className="p-4 text-center font-bold">ركن العروبة</th>
                      <th className="p-4 text-center font-bold">
                        دوبيزل والمنصات المماثلة
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        feature: "الضمان",
                        us: "نعم، ضمان مكتوب ✅",
                        them: "لا ضمان - تتحمل المخاطرة ❌",
                      },
                      {
                        feature: "فحص الجودة",
                        us: "كل قطعة مفحوصة ومُلمّعة ✅",
                        them: "غير مضمون ❌",
                      },
                      {
                        feature: "التوصيل",
                        us: "توصيل احترافي آمن ✅",
                        them: "مسؤوليتك ⚠️",
                      },
                      {
                        feature: "السعر",
                        us: "أسعار واضحة وعادلة ✅",
                        them: "مساومات مرهقة ⚠️",
                      },
                      {
                        feature: "طرق الدفع",
                        us: "نقدي، تحويل، شيكات ✅",
                        them: "نقدي فقط ⚠️",
                      },
                      {
                        feature: "خدمة العملاء",
                        us: "متابعة وخدمة بعد البيع ✅",
                        them: "بدون متابعة ❌",
                      },
                      {
                        feature: "معرض حقيقي",
                        us: "معرض فعلي تزوره ✅",
                        them: "بائعين أفراد ❌",
                      },
                      {
                        feature: "سياسة الإرجاع",
                        us: "نعم، واضحة ومكتوبة ✅",
                        them: "لا - البيع نهائي ❌",
                      },
                    ].map((row, index) => (
                      <tr
                        key={index}
                        className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
                      >
                        <td className="p-4 font-semibold text-[#144e5a]">
                          {row.feature}
                        </td>
                        <td className="p-4 text-center text-[#414141]">
                          {row.us}
                        </td>
                        <td className="p-4 text-center text-[#414141]">
                          {row.them}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="relative z-10 py-16 px-4 mt-16">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-12">
              ماذا يقول عملاؤنا في دبي عن خدماتنا؟
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#ffdb5e] fill-[#ffdb5e]"
                    />
                  ))}
                </div>
                <p className="text-[#414141] leading-relaxed mb-4">
                  اشتريت طقم كنب جلد من ركن العروبة لشقتي في برج مارينا. صراحة،
                  الجودة فاجأتني - يبدو كأنه جديد تماماً! التوصيل كان سريعاً
                  والسعر ممتاز مقارنة بالمحلات.
                </p>
                <p className="font-semibold text-[#144e5a]">
                  — أحمد م.، دبي مارينا
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#ffdb5e] fill-[#ffdb5e]"
                    />
                  ))}
                </div>
                <p className="text-[#414141] leading-relaxed mb-4">
                  كنت أنتقل من فيلتي في جميرا إلى أبوظبي وكان لدي فيلا كاملة من
                  الأثاث. ركن العروبة قدموا سعراً عادلاً وجاؤوا في نفس اليوم.
                  الدفع كان فورياً والخدمة احترافية جداً.
                </p>
                <p className="font-semibold text-[#144e5a]">
                  — فاطمة س.، جميرا
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={20}
                      className="text-[#ffdb5e] fill-[#ffdb5e]"
                    />
                  ))}
                </div>
                <p className="text-[#414141] leading-relaxed mb-4">
                  كشركة في الخليج التجاري، احتجنا لبيع أثاث مكتبنا القديم بعد
                  التجديد. ركن العروبة اشتروا كل شيء بسعر ممتاز دون مساومات
                  مملة. استلموا وسددوا في نفس اليوم.
                </p>
                <p className="font-semibold text-[#144e5a]">
                  — شركة تجارية، الخليج التجاري
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="relative z-10 bg-gray-50 py-16 px-4">
          <div className="container mx-auto max-w-4xl mt-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#353535] text-center mb-12">
              الأسئلة الشائعة حول اثاث مستعمل دبي
            </h2>

            <div className="space-y-4">
              {ArFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white"
                >
                  <details className="group p-4">
                    <summary className="flex cursor-pointer list-none items-center justify-between font-medium headline">
                      {faq.question}
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
                    <p className="mt-3 text">{faq.answer}</p>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative z-10 bg-gradient-to-br from-[#144e5a] to-[#0d3940] py-20 px-4">
          <div className="container mx-auto max-w-6xl text-center text-white ">
            <h2 className="text-3xl md:text-5xl font-bold mb-8">
              ابدأ الآن - اشترِ أو بِع اثاث مستعمل دبي مع ركن العروبة
            </h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12 mt-20">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#ffdb5e]">
                  هل تريد بيع أثاثك في دبي؟
                </h3>
                <ul className="space-y-3 text-right mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={20}
                      className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    />
                    <span>احصل على عرض سعر فوري خلال دقائق</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={20}
                      className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    />
                    <span>دفع فوري - نقداً أو تحويلاً</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={20}
                      className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    />
                    <span>استلام خلال 24-48 ساعة</span>
                  </li>
                </ul>
                <Link href={"/contact-us"}>
                  <button className="bg-[#c07d53] hover:bg-[#a86943] text-white px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg w-full">
                    اتصل الآن للبيع
                  </button>
                </Link>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-[#ffdb5e]">
                  تبحث عن اثاث مستعمل بجودة عالية؟
                </h3>
                <ul className="space-y-3 text-right mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={20}
                      className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    />
                    <span>تصفح معرضنا اليوم في الشارقة</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={20}
                      className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    />
                    <span>زُرنا (30 دقيقة فقط من دبي)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle
                      size={20}
                      className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    />
                    <span>توصيل سريع خلال 24 ساعة</span>
                  </li>
                </ul>
                <Link href={"https://share.google/A4ig2LgvqXZEhrIVC"}>
                  <button className="bg-[#ffdb5e] hover:bg-[#f0cc4e] text-[#144e5a] px-8 py-4 rounded-lg font-bold text-lg transition-all transform hover:scale-105 shadow-lg w-full">
                    تصفح الأثاث المتوفر
                  </button>
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-[#ffdb5e]">
                معلومات الاتصال
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-right">
                <div className="flex items-start gap-3">
                  <MapPin
                    className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-bold mb-1">العنوان:</p>
                    <p>شارع الاستقلال، بوشغارة، حي القاسمية، الشارقة</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone
                    className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-bold mb-1">الهاتف:</p>
                    <p dir="ltr">(055) 6461731</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle
                    className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-bold mb-1">واتساب:</p>
                    <p dir="ltr">+971 556461731</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock
                    className="text-[#ffdb5e] flex-shrink-0 mt-1"
                    size={24}
                  />
                  <div>
                    <p className="font-bold mb-1">ساعات العمل:</p>
                    <p>
                      من الإثنين إلى الأحد: ٩ ص – ١١ م (الأربعاء حتى ١٠:٣٠ م،
                      الإثنين حتى ١١:٣٠ م)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA Banner */}
        <section className="relative z-10 bg-[#c07d53] py-12 px-4">
          <div className="container mx-auto max-w-4xl text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              جاهز للبدء؟ اتصل بنا الآن!
            </h3>
            <p className="text-lg mb-6">
              أكثر من 20 عام خبرة في خدمة عملاء دبي والإمارات
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={"tel:+971556461731"}>
                <button className="bg-white text-[#c07d53] hover:bg-gray-100 px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <Phone size={20} />
                  اتصل الآن
                </button>
              </Link>
              <Link
                href={
                  "https://wa.me/+971556461731?text=%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%D9%85%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84"
                }
              >
                {" "}
                <button className="bg-[#144e5a] text-white hover:bg-[#0d3940] px-8 py-3 rounded-lg font-bold text-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                  <MessageCircle size={20} />
                  واتساب
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
