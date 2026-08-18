import MetadataTemplate from "@/lib/MetaDataTemplate";
import ArBreadcrumb from "@/components/arabic/ArBreadcrumb";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import {
  Phone,
  MessageSquare,
  MapPin,
  Clock,
  CheckCircle2,
  Star,
  Truck,
  ShieldCheck,
  Building2,
  ArrowUpLeft,
  Banknote,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { APP } from "@/lib/App";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "مشترو مكيفات مستعملة في دبي – كاش فوري | ركن العروبة",
      desc: "تبحث عن مشتري موثوق لمكيفك المستعمل في دبي؟ ركن العروبة يقدم أفضل سعر، استلام مجاني، ورد خلال 10 دقائق. نخدم دبي والشارقة وجميع إمارات الدولة.",
    },
    path: `/مشترو-المكيفات-المستعملة`,
    image: {
      path: "/service/مشترو-المكيفات-المستعملة-في-دبي.jpg",
      alt: "مشترو المكيفات المستعملة في دبي - ركن العروبة",
    },
  },
});

const arabicAcFaqs = [
  {
    question: "ما أنواع المكيفات التي تشترونها في دبي؟",
    answer:
      "نشتري جميع الأنواع: السبليت، الشباك، الإنفرتر، DC Inverter، المركزية، الكاسيت، الدكت، المحمولة، وأنظمة التبريد التجارية. نقبل جميع الماركات وبجميع الأحوال.",
  },
  {
    question: "هل تشترون المكيفات المعطلة أو المكسورة؟",
    answer:
      "نعم، ندرس الشراء حتى في حالة العطل. المكيف المعطل قد يستحق سعراً أقل، لكننا نعطيك تقييماً صادقاً بعد مراجعة الصور. تواصل معنا وسنخبرك.",
  },
  {
    question: "كم من الوقت يستغرق الرد على طلب السعر؟",
    answer:
      "بمجرد إرسال الصور والبيانات على الواتساب، يرد فريقنا بسعر مؤكد خلال 5 إلى 10 دقائق.",
  },
  {
    question: "هل خدمة الاستلام مجانية فعلاً؟",
    answer:
      "نعم. نتعاون مع شركة أبو محمد موفرز لتوفير خدمة استلام بأفضل سعر – وفي كثير من الحالات تكون مجانية حسب موقعك وحجم الكميات.",
  },
  {
    question: "ما طرق الدفع المتاحة؟",
    answer:
      "ندفع نقداً، أو تحويلاً بنكياً، أو إيداعاً إلكترونياً، أو شيكاً – حسب ما يناسبك. لسنا محدودين بالكاش فقط مثل كثير من المشترين الآخرين.",
  },
  {
    question: "هل تشترون مكيفات من الشارقة وعجمان وأبوظبي؟",
    answer:
      "بالطبع. نحن مقيمون في الشارقة لكننا نخدم دبي، الشارقة، عجمان، أبوظبي، رأس الخيمة، العين، وجميع مناطق الإمارات.",
  },
  {
    question: "هل يمكنكم شراء المكيف مع بقية الأثاث والأجهزة في نفس الزيارة؟",
    answer:
      "نعم، هذه واحدة من أكبر مميزاتنا. نشتري المكيفات والأجهزة المنزلية والأثاث في زيارة واحدة. لا حاجة للتواصل مع أكثر من جهة.",
  },
  {
    question: "هل أنتم شركة مسجلة أم مجرد خدمة إلكترونية؟",
    answer:
      "ركن العروبة للأثاث المستعمل شركة مسجلة رسمياً لدى حكومة الإمارات منذ عام 2018. لدينا محل فعلي على شارع الاستقلال، بو شغارة، الشارقة. يمكنك زيارتنا شخصياً أو التواصل معنا عن بُعد – نحن هنا في كلتا الحالتين.",
  },
];

const faqsSchemaData = generateFAQSchema(convertFaqsForSchema(arabicAcFaqs));

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "شراء المكيفات المستعملة",
  provider: {
    "@type": "LocalBusiness",
    name: "ركن العروبة للأثاث والأجهزة المستعملة",
    telephone: APP.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "شارع الاستقلال، بو شغارة، حي القاسمية",
      addressLocality: "الشارقة",
      addressRegion: "الشارقة",
      addressCountry: "AE",
    },
  },
  areaServed: {
    "@type": "Country",
    name: "الإمارات العربية المتحدة",
  },
  description:
    "شراء جميع أنواع المكيفات المستعملة في دبي والإمارات مع استلام فوري ودفع نقدي سريع.",
};

export default function ArabicUsedAcBuyersPage() {
  return (
    <>
      <Script
        id="AcFaqSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqsSchemaData }}
        strategy="beforeInteractive"
      />
      <Script
        id="AcServiceSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
        strategy="beforeInteractive"
      />

      <main className=" pb-16">
        <div className="md:w-11/12 w-full max-w-[1360px] mx-auto px-4 sm:px-6 lg:px-8 pt-3">
          <ArBreadcrumb
            items={[
              { label: "الرئيسية", href: "/" },
              { label: "مشترو المكيفات المستعملة في دبي" },
            ]}
          />

          {/* Hero Section matching ServiceHero.tsx styling */}
          <section className="relative w-full pt-3 pb-10">
            <div className="w-full">
              {/* Editorial Container Box */}
              <div className="bg-[#FAF8F5] border border-[#E8E2D8] md:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xs">
                {/* Top Trading Header / Metadata Bar */}
                <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pb-5 mb-7 border-b border-[#E8E2D8] text-[11px] sm:text-xs font-semibold tracking-wider text-[#6B6358] uppercase">
                  <span>ركن العروبة • شركة مرخصة رسمياً منذ 2018</span>

                  <div className="text-slate-500 normal-case font-normal text-xs sm:text-[13px]">
                    <span className="flex items-center gap-1 font-medium text-[#144E5A]">
                      <MapPin className="size-3.5 text-[#C07D53]" /> تجارة
                      الأثاث والأجهزة المستعملة
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Content Column (7 cols) */}
                  <div className="lg:col-span-7 flex flex-col items-start">
                    {/* Main Headline */}
                    <h1 className="sm:text-3xl text-2xl font-bold text-[#222222] tracking-tight leading-[1.18]">
                      مشترو المكيفات المستعملة في دبي{" "}
                      <span className="text-[#144E5A] block mt-1.5 font-extrabold">
                        بيع مكيفك القديم واستلم كاش فوري
                      </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-4 text text-sm sm:text-base leading-relaxed">
                      هل تريد بيع مكيفك القديم وأنت لا تعرف من أين تبدأ؟ ركن
                      العروبة للأثاث المستعمل هم{" "}
                      <strong className="font-bold text-slate-900">
                        مشترو المكيفات المستعملة في دبي
                      </strong>{" "}
                      الذين تبحث عنهم. نعطيك سعراً حقيقياً خلال 5 إلى 10 دقائق
                      عبر واتساب، ونوفر خدمة استلام من عندك دون أي تعقيد. نخدم
                      دبي، الشارقة، عجمان، وجميع مناطق الإمارات. شركة مسجلة
                      رسمياً منذ 2018، بخبرة أكثر من 20 عاماً في شراء وبيع
                      الأجهزة المنزلية المستعملة. تواصل معنا الآن واستلم قيمة
                      مكيفك اليوم.
                    </p>

                    {/* Physical Trade Guarantee Note */}
                    <div className="md:w-11/12 w-full my-3 p-3 rounded-xl text-xs sm:text-sm text-slate-700 space-y-2">
                      <div className="flex flex-wrap items-center justify-between gap-2 font-medium text-slate-800">
                        <span className="flex items-center gap-1.5 text-[#144E5A]">
                          <Check className="size-4 text-[#C07D53] stroke-[3]" />
                          تقييم سعر واتساب خلال 5–10 دقائق
                        </span>
                        <span className="flex items-center gap-1.5 text-[#144E5A]">
                          <Check className="size-4 text-[#C07D53] stroke-[3]" />
                          خدمات النقل والاستلام الفوري
                        </span>
                        <span className="flex items-center gap-1.5 text-[#144E5A]">
                          <Check className="size-4 text-[#C07D53] stroke-[3]" />
                          دفع نقداً / تحويل / شيك
                        </span>
                      </div>
                    </div>

                    {/* Direct Action Hub */}
                    <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                      <Button
                        wtsBtn
                        size="lg"
                        className="h-11 sm:h-12 px-6 bg-[#C07D53] hover:bg-[#ad6e46] text-white font-medium text-sm sm:text-base rounded-xl transition-colors shadow-xs"
                      >
                        <MessageSquare className="size-4.5" />
                        احصل على سعر عبر واتساب
                      </Button>

                      <Button
                        storeBtn
                        variant="outlineBlue"
                        size="lg"
                        className="h-11 sm:h-12 px-5 bg-white border border-[#C6D2D6] text-[#144E5A] hover:bg-[#144E5A]/5 font-medium text-sm sm:text-base rounded-xl"
                      >
                        <MapPin className="size-4 text-[#C07D53]" />
                        زيارة المعرض
                        <ArrowUpLeft className="size-4 opacity-70" />
                      </Button>

                      <Button
                        callBtn
                        variant="ghost"
                        size="sm"
                        className="text-xs text-slate-600 hover:text-slate-900"
                      >
                        <Phone className="size-3.5" />
                        <span dir="ltr">{APP.phone}</span>
                      </Button>
                    </div>
                  </div>

                  {/* Media Presentation Column (5 cols) */}
                  <div className="lg:col-span-5 w-full">
                    <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-200 drop-shadow-lg">
                      <Image
                        src="/service/مشترو-المكيفات-المستعملة-في-دبي.jpg"
                        alt="مشترو المكيفات المستعملة في دبي - ركن العروبة"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                        className="object-cover object-center"
                        priority
                      />
                      {/* Subtle stamp in corner */}
                      <div className="absolute top-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase">
                        مشترو المكيفات المستعملة في دبي
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 1: Why Choose Us */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-3">
              لماذا تختار ركن العروبة لبيع مكيفك المستعمل في دبي؟
            </h2>
            <p className="text-slate-700 leading-relaxed text-base">
              معظم مواقع شراء المكيفات المستعملة في دبي لا تملك محلاً حقيقياً،
              فقط أرقام واتساب. ركن العروبة مختلف. نحن شركة مسجلة رسمياً
              بالحكومة الإماراتية، لنا محل فعلي في الشارقة، وفريق متخصص جاهز
              للاستجابة في دقائق.
            </p>
            <p className="text-slate-900 font-bold mt-2">إليك ما يميزنا:</p>

            <div className="my-6 relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-[#E8E2D8]">
              <Image
                src="/storefront-image.jpg"
                alt="ركن العروبة للأثاث المستعمل - محل الشارقة"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] flex items-center gap-2 mb-2">
                  <Building2 className="size-5 text-[#C07D53] shrink-0" />
                  محل حقيقي وشركة مرخصة يمكنك التحقق منها
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نحن لسنا وسيطاً يستلم طلبك ويحوله لشركة أخرى. ركن العروبة شركة
                  مسجلة رسمياً منذ عام 2018، ولدينا محل على{" "}
                  <strong>
                    شارع الاستقلال، بو شغارة، حي القاسمية، الشارقة
                  </strong>
                  . تستطيع أن تزورنا شخصياً أو تتواصل معنا عبر الواتساب – الخيار
                  لك.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] flex items-center gap-2 mb-2">
                  <ShieldCheck className="size-5 text-[#C07D53] shrink-0" />
                  خبرة أكثر من 20 عاماً في شراء الأجهزة المنزلية
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  الفريق خلف ركن العروبة يعمل في مجال الأثاث والأجهزة المستعملة
                  منذ أكثر من 20 عاماً. هذه الخبرة تعني أننا نعرف الأسعار
                  الحقيقية في السوق، ونعطيك عرضاً عادلاً لا يستند إلى التخمين.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] flex items-center gap-2 mb-2">
                  <Clock className="size-5 text-[#C07D53] shrink-0" />
                  سعر حقيقي خلال 5 إلى 10 دقائق عبر واتساب
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  أرسل لنا صور مكيفك وبياناته على الواتساب. لن تنتظر ساعات ولن
                  تحصل على ردٍّ غامض. فريقنا يرد بسعر مؤكد وليس مجرد تقدير –
                  وذلك خلال 5 إلى 10 دقائق. إذا وافقتك العرض، نحدد موعد الاستلام
                  فوراً.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] flex items-center gap-2 mb-2">
                  <Truck className="size-5 text-[#C07D53] shrink-0" />
                  استلام مجاني من موقعك مع شريك النقل أبو محمد موفرز
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  لا داعي أن تقلق بشأن نقل المكيف. نتعاون مع{" "}
                  <strong>شركة أبو محمد موفرز</strong> لخدمات النقل والاستلام.
                  سيصل الفريق إلى موقعك في دبي أو أي إمارة أخرى، يفك المكيف
                  بأمان، ويحمله دون أن تتحمل أي عناء.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] flex items-center gap-2 mb-2">
                  <Banknote className="size-5 text-[#C07D53] shrink-0" />
                  دفع نقداً أو تحويل بنكي أو شيك – أنت تختار
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base mb-2">
                  بعد استلام المكيف، تستلم قيمته فوراً عبر:
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700 text-sm sm:text-base pr-2">
                  <li>
                    <strong>كاش في اليد</strong>
                  </li>
                  <li>
                    <strong>تحويل بنكي أو إيداع إلكتروني</strong>
                  </li>
                  <li>
                    <strong>شيك مصرفي</strong>
                  </li>
                </ul>
                <p className="text-slate-600 text-sm mt-2">
                  معظم المشترين الآخرين يقبلون الكاش فقط. نحن نوفر خياراتٍ
                  متعددة لراحتك.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] flex items-center gap-2 mb-2">
                  <Sparkles className="size-5 text-[#C07D53] shrink-0" />
                  بيع مكيفك وأثاثك وأجهزتك في زيارة واحدة
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  هل تريد التخلص من المكيف والثلاجة والأثاث في وقت واحد؟ لا
                  مشكلة. نحن نشتري المكيفات، الأجهزة المنزلية، والأثاث المستعمل
                  في نفس الزيارة. زيارة واحدة، دفعة واحدة، وانتهى الأمر.
                </p>
                <div className="mt-3">
                  <Link
                    href="/used-home-appliances-dubai"
                    className="inline-flex items-center gap-1 font-bold text-[#C07D53] hover:text-[#a86943] text-sm underline"
                  >
                    شراء الأجهزة المنزلية المستعملة{" "}
                    <ArrowUpLeft className="size-4" />
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2: Types of ACs We Buy */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-3">
              أنواع المكيفات التي نشتريها في دبي
            </h2>
            <p className="text-slate-700 leading-relaxed text-base mb-6">
              نشتري جميع أنواع المكيفات من الأفراد والشركات وأصحاب العقارات في
              دبي وباقي الإمارات.
            </p>

            <div className="my-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-[#E8E2D8]">
                <Image
                  src="/service/used-air-conditioners.jpg"
                  alt="أنواع مكيفات مستعملة - ركن العروبة"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="relative aspect-4/3 rounded-xl overflow-hidden border border-[#E8E2D8]">
                <Image
                  src="/service/used-home-appliances.jpg"
                  alt="مشترو المكيفات والأجهزة المستعملة في دبي"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات سبليت مستعملة في دبي
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نشتري جميع أحجام مكيفات السبليت من طن واحد حتى 5 طن، لجميع
                  الماركات: LG، Samsung، Daikin، Carrier، Gree، Panasonic،
                  General، Haier، Mitsubishi، Midea. سواء كانت تعمل أو تحتاج
                  صيانة، تواصل معنا للحصول على تقييم مجاني.
                </p>
                <p className="text-[#C07D53] font-semibold text-xs sm:text-sm mt-2 italic">
                  تواصل معنا على الواتساب للحصول على سعر فوري.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات الشباك المستعملة في دبي
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نشتري مكيفات الشباك من جميع الماركات وبجميع الأحجام. يفضل أن
                  تكون في حالة تشغيل جيدة. الاستلام من الباب، والدفع فوري.
                </p>
                <p className="text-[#C07D53] font-semibold text-xs sm:text-sm mt-2 italic">
                  تواصل معنا على الواتساب للحصول على سعر فوري.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات الإنفرتر ومكيفات DC المستعملة
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  مكيفات الإنفرتر تحتفظ بقيمة جيدة في السوق. إذا كنت تريد بيع
                  مكيف إنفرتر DC مستعمل، نعطيك أفضل سعر بناءً على حالته وماركته
                  وسعته.
                </p>
                <p className="text-[#C07D53] font-semibold text-xs sm:text-sm mt-2 italic">
                  تواصل معنا على الواتساب للحصول على سعر فوري.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات مركزية ومجاري هواء في دبي
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نشتري المكيفات المركزية، أنظمة الكاسيت، مجاري الهواء (الدكت)،
                  وأجهزة التبريد من المواقع السكنية والتجارية. فريقنا المتخصص
                  يتولى الفك الآمن واسترداد الغاز (Degassing) وفق المعايير
                  المطلوبة.
                </p>
                <p className="text-[#C07D53] font-semibold text-xs sm:text-sm mt-2 italic">
                  تواصل معنا على الواتساب للحصول على سعر فوري.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات محمولة وأرضية مستعملة
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نقبل أيضاً المكيفات المحمولة والأرضية بحالة تشغيل جيدة. تواصل
                  معنا بالتفاصيل وسنخبرك بالسعر مباشرة.
                </p>
                <p className="text-[#C07D53] font-semibold text-xs sm:text-sm mt-2 italic">
                  تواصل معنا على الواتساب للحصول على سعر فوري.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: All Property Types */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-3">
              نشتري من جميع أنواع العقارات
            </h2>
            <p className="text-slate-700 leading-relaxed text-base mb-6">
              سواء كنت مالك شقة أو صاحب فندق أو مدير مستودع، نستطيع الوصول إليك.
              نشتري المكيفات المستعملة من:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-slate-700 text-sm sm:text-base">
              {[
                "الشقق السكنية والفلل",
                "غرف الفنادق والشقق الفندقية",
                "المكاتب ومساحات العمل المشتركة",
                "المطاعم والكافيهات",
                "المحلات التجارية وبيئات البيع بالتجزئة",
                "المستودعات والمصانع",
                "المدارس والمستشفيات",
                "مواقع البناء والمشاريع",
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2.5 p-3 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8]"
                >
                  <CheckCircle2 className="size-4.5 text-[#C07D53] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 4: 3 Simple Steps */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-4">
              كيف تبيع مكيفك المستعمل في دبي – 3 خطوات بسيطة
            </h2>

            <div className="my-6 relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden bg-slate-100 border border-[#E8E2D8]">
              <Image
                src="/service/sell-furniture-3-steps-infographic-uae.jpg"
                alt="خطوات بيع المكيف المستعمل في دبي"
                fill
                className="object-cover object-center"
              />
            </div>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  الخطوة الأولى — أرسل لنا صور وبيانات مكيفك على الواتساب
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  التقط 2 إلى 3 صور للمكيف: الواجهة الأمامية، الوحدة الخارجية،
                  وملصق الماركة. أرسلها إلينا مع الماركة، السعة بالطن، العمر
                  التقريبي، وحالة التشغيل. فريقنا سيرد عليك خلال{" "}
                  <strong>5 إلى 10 دقائق</strong>.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  الخطوة الثانية — استلم سعراً مؤكداً لا تقديراً
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  بمجرد مراجعة الصور والتفاصيل، نرسل لك سعراً نهائياً حقيقياً.
                  لست ملزماً بالقبول – العرض مجاني. إذا وافقك السعر، نحدد موعد
                  الاستلام الذي يناسبك.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  الخطوة الثالثة — نصل إليك ونسلمك قيمة المكيف في الحال
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  يصل فريقنا إلى موقعك في دبي أو أي إمارة أخرى. نفك المكيف
                  بأمان، ونسلمك مبلغك نقداً أو تحويلاً أو شيكاً – حسب اختيارك –
                  في نفس اللحظة.
                </p>
              </div>
            </div>

            <div className="mt-6 text-center sm:text-right">
              <Button
                wtsBtn
                size="lg"
                className="h-12 px-8 bg-[#C07D53] hover:bg-[#ad6e46] text-white font-medium text-base rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="size-5" />
                ابدأ الآن عبر واتساب
              </Button>
            </div>
          </section>

          {/* Section 5: Areas We Serve */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-6">
              المناطق التي نخدمها – مشترو المكيفات المستعملة في الإمارات
            </h2>

            <div className="space-y-4">
              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات مستعملة في دبي
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نشتري المكيفات من جميع مناطق دبي: ديرة، بر دبي، القوز، جميرا،
                  دبي مارينا، JBR، الخليج التجاري، مردف، البرشاء، سيليكون
                  أواسيس، النهدة، وغيرها.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات مستعملة في الشارقة
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  مقرنا الرئيسي في الشارقة – يمكنك زيارتنا في شارع الاستقلال، بو
                  شغارة، أو نصل إليك. نخدم: المنطقة الصناعية، النهدة، المويلح،
                  الخان، الرولة، الماجاز، وجميع مناطق الشارقة.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات مستعملة في عجمان
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نخدم عجمان أيضاً. فقط تواصل معنا على الواتساب وأخبرنا بموقعك
                  وبيانات المكيف.
                </p>
              </div>

              <div className="p-4 sm:p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D8]">
                <h3 className="text-lg font-bold text-[#144E5A] mb-2">
                  مشترو مكيفات مستعملة في أبوظبي والعين ورأس الخيمة
                </h3>
                <p className="text-slate-700 leading-relaxed text-sm sm:text-base">
                  نصل إلى أبوظبي، رأس الخيمة، العين، والمناطق المجاورة عند
                  الطلب. لا تتردد في التواصل معنا من أي مكان في الإمارات.
                </p>
              </div>
            </div>
          </section>

          {/* Section 6: Sell Everything in One Go */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-3">
              لا نشتري المكيفات فقط – بيع جميع أجهزتك وأثاثك في وقت واحد
            </h2>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              هل أنت في مرحلة الانتقال أو إعادة التأثيث؟ بدلاً من البحث عن
              مشترين مختلفين لكل قطعة، تواصل مع ركن العروبة مرة واحدة.
            </p>
            <p className="text-slate-900 font-bold mb-3">نشتري:</p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-slate-700 text-sm sm:text-base pr-2 mb-6">
              {[
                "المكيفات بجميع أنواعها",
                "الثلاجات وأجهزة الغسيل والمجففات",
                "التلفزيونات والأجهزة الإلكترونية",
                "أجهزة المطبخ",
                "الكنبات وطقم الغرف والأسرة",
                "الأثاث المكتبي والطاولات",
                "الخزائن والمطابخ المستعملة",
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4.5 text-[#C07D53] shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <p className="font-bold text-[#144E5A] text-base mb-4">
              زيارة واحدة. دفعة واحدة. ونريحك من كل شيء.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/%D8%A3%D8%AB%D8%A7%D8%AB-%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84"
                className="inline-flex items-center gap-1 font-bold text-[#C07D53] hover:text-[#a86943] text-sm underline"
              >
                بيع الأثاث المستعمل <ArrowUpLeft className="size-4" />
              </Link>
              <Link
                href="/used-home-appliances-dubai"
                className="inline-flex items-center gap-1 font-bold text-[#C07D53] hover:text-[#a86943] text-sm underline"
              >
                مشتري الأجهزة المنزلية المستعملة{" "}
                <ArrowUpLeft className="size-4" />
              </Link>
            </div>
          </section>

          {/* Section 7: Safe Disposal */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-4">
              التخلص من المكيف القديم بطريقة آمنة وصديقة للبيئة
            </h2>
            <p className="text-slate-700 leading-relaxed text-base mb-3">
              المكيفات القديمة تحتوي على غازات تبريد مثل R22 وR32. إذا تم التخلص
              منها بشكل خاطئ، تسبب أضراراً بيئية. فريقنا يتولى{" "}
              <strong>استرداد الغاز (Degassing)</strong> قبل الفك والتخلص من
              الوحدة، واسترداد المعادن والمكونات القابلة لإعادة الاستخدام بشكل
              مسؤول.
            </p>
            <p className="text-slate-700 leading-relaxed text-base">
              عندما تبيع مكيفك القديم لركن العروبة، أنت لا تستلم مالاً فقط – بل
              تتخلص منه بطريقة صحيحة وآمنة وفق معايير الإمارات.
            </p>
          </section>

          {/* Section 8: Tips */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-4">
              نصائح للحصول على أفضل سعر عند بيع مكيفك المستعمل
            </h2>
            <p className="text-slate-700 leading-relaxed text-base mb-4">
              إذا أردت الحصول على أعلى سعر ممكن، إليك بعض الأشياء التي تساعد:
            </p>

            <ol className="space-y-3 text-slate-700 text-sm sm:text-base">
              <li className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8]">
                <strong>1. أعطنا بيانات دقيقة</strong> – الماركة، الموديل، السعة
                بالطن، والعمر التقريبي
              </li>
              <li className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8]">
                <strong>2. أرسل صوراً واضحة</strong> – الواجهة الأمامية، الوحدة
                الخارجية، وملصق الماركة
              </li>
              <li className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8]">
                <strong>3. كن صريحاً في وصف الحالة</strong> – المكيفات العاملة
                تستحق دائماً سعراً أفضل
              </li>
              <li className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8]">
                <strong>4. نظف المكيف قبل الاستلام</strong> – المكيف النظيف يعطي
                انطباعاً بالصيانة الجيدة وقد يرفع قيمة العرض
              </li>
              <li className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8]">
                <strong>5. احتفظ بالريموت والمانيوال إن وجدا</strong> – يمكن أن
                تُضيف قيمة طفيفة للصفقة
              </li>
              <li className="p-3.5 rounded-lg bg-[#FAF8F5] border border-[#E8E2D8]">
                <strong>6. تعامل مع مشتري مباشر وليس وسيطاً</strong> – التعامل
                المباشر مع شركة مسجلة مثل ركن العروبة يعني أنك تحصل على السعر
                الحقيقي كاملاً
              </li>
            </ol>
          </section>

          {/* Section 9: FAQs Accordion */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <div className="text-center mb-8">
              <p className="text-xs font-bold text-[#C07D53] uppercase tracking-wider mb-1">
                الأسئلة الشائعة
              </p>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222]">
                أسئلة شائعة – مشترو المكيفات المستعملة في دبي
              </h2>
            </div>

            <div className="space-y-3">
              {arabicAcFaqs.map((faq, index) => (
                <details
                  key={index}
                  open={index === 0}
                  className="group rounded-xl border border-[#E8E2D8] bg-[#FAF8F5] p-4 transition-all"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between font-bold text-[#144E5A] text-base sm:text-lg">
                    <span>{faq.question}</span>
                    <span className="transition-transform duration-200 group-open:rotate-180 text-[#C07D53]">
                      ▼
                    </span>
                  </summary>
                  <div className="mt-3 pt-3 border-t border-[#E8E2D8] text-slate-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              ))}
            </div>
          </section>

          {/* Section 10: Reviews */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-6 text-center">
              ماذا يقول عملاؤنا
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col justify-between">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                  &ldquo;بعت مكيف دايكن سبليت 2 طن. ردوا عليّ بسعر محدد خلال 10
                  دقائق على الواتساب. وصل الفريق نفس اليوم، فكوا المكيف
                  باحترافية، وسلموني الكاش في اليد. ما كان في أي تعقيد.&rdquo;
                </blockquote>
                <div className="font-bold text-[#144E5A] text-sm pt-3 border-t border-[#E8E2D8]">
                  أحمد ك. —{" "}
                  <span className="text-slate-500 font-normal">دبي مارينا</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col justify-between">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                  &ldquo;كنت بحاجة لبيع مكيفين وكنبة قبل السفر. ركن العروبة
                  جمعوا كل شيء في زيارة واحدة وأعطوني سعراً معقولاً. استغرق
                  الأمر أقل من ساعة.&rdquo;
                </blockquote>
                <div className="font-bold text-[#144E5A] text-sm pt-3 border-t border-[#E8E2D8]">
                  فاطمة م. —{" "}
                  <span className="text-slate-500 font-normal">
                    الشارقة، المويلح
                  </span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] flex flex-col justify-between">
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <blockquote className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4 italic">
                  &ldquo;ما توقعت يشتروا مكيف الشباك القديم، لكنهم جاؤوا وقيّموه
                  وأعطوني سعراً مناسباً. الخدمة سريعة والتعامل صادق.&rdquo;
                </blockquote>
                <div className="font-bold text-[#144E5A] text-sm pt-3 border-t border-[#E8E2D8]">
                  محمد ر. —{" "}
                  <span className="text-slate-500 font-normal">ديرة، دبي</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 11: Contact Us (NAP) */}
          <section className="bg-white border border-[#E8E2D8] rounded-2xl md:rounded-3xl p-6 sm:p-8 lg:p-10 shadow-xs mt-8">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#222222] mb-3">
              تواصل معنا – ركن العروبة للأثاث المستعمل
            </h2>
            <p className="text-slate-700 leading-relaxed text-base mb-6">
              سواء كنت في دبي أو الشارقة أو في أي إمارة، بيع مكيفك القديم سهل.
              أرسل لنا صورة على الواتساب وسنتولى الباقي. فريقنا يرد خلال 5 إلى
              10 دقائق، كل يوم.
            </p>

            <div className="p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D8] space-y-3 mb-6 text-sm sm:text-base text-slate-800">
              <p className="font-bold text-lg text-[#144E5A]">
                ركن العروبة للأثاث المستعمل
              </p>
              <p className="flex items-start gap-2">
                <MapPin className="size-5 text-[#C07D53] shrink-0 mt-0.5" />
                <span>
                  شارع الاستقلال، بو شغارة، حي القاسمية، الشارقة، الإمارات
                  العربية المتحدة
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="size-5 text-[#C07D53] shrink-0" />
                <span dir="ltr">{APP.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="size-5 text-[#C07D53] shrink-0" />
                <span>
                  أوقات العمل: مفتوح يومياً من 9:00 صباحاً حتى 11:00 مساءً
                </span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Button
                wtsBtn
                size="lg"
                className="h-11 sm:h-12 px-6 bg-[#C07D53] hover:bg-[#ad6e46] text-white font-medium text-sm sm:text-base rounded-xl transition-colors shadow-xs"
              >
                <MessageSquare className="size-4.5" />
                احصل على سعر فوري عبر واتساب
              </Button>
              <Button
                callBtn
                variant="outlineBlue"
                size="lg"
                className="h-11 sm:h-12 px-5 bg-white border border-[#C6D2D6] text-[#144E5A] hover:bg-[#144E5A]/5 font-medium text-sm sm:text-base rounded-xl"
              >
                <Phone className="size-4 text-[#C07D53]" />
                اتصل بنا الآن
              </Button>
              <Button
                storeBtn
                variant="outlineBlue"
                size="lg"
                className="h-11 sm:h-12 px-5 bg-white border border-[#C6D2D6] text-slate-700 hover:bg-slate-50 font-medium text-sm sm:text-base rounded-xl"
              >
                <MapPin className="size-4 text-[#C07D53]" />
                زيارة محلنا في الشارقة – خريطة
              </Button>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
