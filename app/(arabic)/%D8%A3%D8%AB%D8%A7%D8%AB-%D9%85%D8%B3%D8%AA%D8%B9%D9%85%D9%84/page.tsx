import MetadataTemplate from "@/lib/MetaDataTemplate";
import { createEncodedUrl } from "@/lib/utils";
import ArBreadcrumb from "@/components/arabic/ArBreadcrumb";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل في الإمارات | بيع وشراء اثاث مستعمل | ركن العروبة",
      desc: "شراء وبيع اثاث مستعمل في الإمارات بأفضل الأسعار. نقدم خدمات محلات شراء الاثاث المستعمل مع معرض حقيقي في الشارقة. ضمان الجودة وتوصيل سريع ⚡ اتصل الآن",
    },
    path: `/${decodeURIComponent("أثاث-مستعمل")}`,
    image: {
      path: "/ar/used-furniture-ar.jpg",
      alt: "أثاث مستعمل",
    },
  },
});

export default function RuknAlorobaPage() {
  return (
    <main dir="rtl" lang="ar" className="min-h-screen bg-gray-50 py-10">
      <ArBreadcrumb
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "اثاث مستعمل" },
        ]}
      />
      <div className="max-w-6xl mx-auto bg-white py-8 px-3 md:p-12 rounded-2xl shadow-lg">
        {/* Hero */}
        <header className="mb-8">
          <h1 className="headline text-2xl md:text-4xl font-extrabold border-b-4 pb-4 border-[#144e5a]">
            اثاث مستعمل عالي الجودة في الإمارات - ركن العروبة
          </h1>

          {/* image placeholder (you can replace with next/image later) */}
          <div className="w-full relative overflow-hidden  md:h-96 h-36 md:w-[1000px] rounded-lg bg-gray-200 mt-6 flex items-center justify-center mx-auto">
            <Image
              src={"/ar/used-furniture-ar.jpg"}
              alt="اثاث مستعمل في الإمارات"
              fill
              className="object-cover object-center"
              loading="eager"
            />
          </div>
        </header>

        {/* Intro */}
        <section className="intro-section bg-gray-100 p-6 rounded-lg mb-8 text-lg leading-relaxed">
          <p>
            <strong>
              هل تبحث عن{" "}
              <span className="highlight bg-yellow-100 px-1 rounded">
                اثاث مستعمل
              </span>{" "}
              موثوق وبأسعار مناسبة في الإمارات؟
            </strong>{" "}
            مرحباً بك في ركن العروبة، الوجهة الأولى والأكثر ثقة لـ
            <strong>شراء اثاث مستعمل</strong> و<strong>بيع اثاث مستعمل</strong>{" "}
            في دولة الإمارات العربية المتحدة. مع خبرة تمتد لأكثر من 20 عاماً في
            سوق الأثاث المستعمل، نفخر بكوننا الشركة الرائدة في هذا المجال مع
            تواجد قوي في جميع إمارات الدولة.
          </p>

          <p className="mt-4">
            ما يميزنا حقاً هو معرضنا الحقيقي في الشارقة، حيث يمكنك معاينة مجموعة
            واسعة من قطع <strong>الاثاث المستعمل</strong> عالية الجودة قبل
            الشراء. نحن لسنا مجرد وسطاء أو متداولين عبر الإنترنت، بل شركة مسجلة
            رسمياً تضمن لك الثقة والأمان في كل معاملة.
          </p>
        </section>

        {/* CTA */}
        <div className="cta-box blue-bg text-white p-6 rounded-lg text-center mb-8">
          <p>احصل على تقييم فوري لأثاثك أو تصفح مجموعتنا المميزة</p>
          <a
            target="_blank"
            href="https://wa.me/+971556461731?text=%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%D9%85%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84"
            className="inline-block mt-4 bg-white text-[#144e5a] font-semibold px-6 py-2 rounded-md"
          >
            اتصل بنا عبر الواتساب
          </a>
        </div>

        {/* Why us */}
        <h2 className="text-xl md:text-2xl font-bold blue mb-4">
          لماذا نحن أفضل محلات شراء الاثاث المستعمل في الإمارات؟
        </h2>

        <article className="space-y-6">
          <div className="feature-box bg-gray-50 p-6 rounded-lg border-r-4 border-green-500">
            <h3 className="text-lg font-semibold">شركة رسمية مع معرض حقيقي</h3>
            <p className="mt-2 text-gray-700">
              نحن شركة ركن العروبة للتجارة، مسجلة رسمياً منذ عام 2018 برخصة
              تجارية معتمدة من دائرة التنمية الاقتصادية في الشارقة. معرضنا
              الرئيسي يقع في شارع الاستقلال بمنطقة بوشغارة في الشارقة، حيث
              نستقبل عملاءنا يومياً لمعاينة تشكيلة واسعة من{" "}
              <strong>اثاث مستعمل</strong> بحالة ممتازة.
            </p>

            <p className="mt-2 text-gray-700">
              يضم فريقنا المحترف خبراء متخصصين في تقييم وفحص{" "}
              <strong>الاثاث المستعمل</strong>، مما يضمن حصولك على أفضل قيمة
              سواء كنت بائعاً أو مشترياً. على عكس الوسطاء والفريلانسرز غير
              المرخصين، نقدم ضمانات حقيقية وخدمة موثوقة تحمي حقوقك.
            </p>
          </div>

          <div className="feature-box bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">
              خدمة سريعة في كافة الإمارات
            </h3>
            <p className="mt-2 text-gray-700">
              تغطي خدماتنا جميع إمارات الدولة دون استثناء: دبي، أبوظبي، الشارقة،
              عجمان، رأس الخيمة، الفجيرة، أم القيوين، والعين. نضمن لك الرد على
              استفساراتك خلال 5-10 دقائق عبر الواتساب، مع إمكانية التقييم
              والشراء في نفس اليوم.
            </p>

            <p className="mt-2 text-gray-700">
              سواء كنت تبحث عن <strong>شراء اثاث مستعمل</strong> في دبي أو ترغب
              في <strong>بيع اثاث مستعمل</strong> في أبوظبي، فريقنا جاهز لخدمتك
              بسرعة واحترافية. نعمل على مدار الأسبوع لضمان راحتك وتلبية
              احتياجاتك في الوقت المناسب.
            </p>
          </div>

          <div className="feature-box bg-gray-50 p-6 rounded-lg">
            <h3 className="text-lg font-semibold">
              ضمان الجودة والأسعار المنافسة
            </h3>
            <p className="mt-2 text-gray-700">
              كل قطعة من <strong>الاثاث المستعمل</strong> في معرضنا تخضع لفحص
              دقيق وعملية ترميم احترافية قبل عرضها للبيع. نوفر ضماناً على جميع
              منتجاتنا، مع سياسة إرجاع مرنة تضمن رضاك التام.
            </p>

            <p className="mt-2 text-gray-700">
              عندما تختار <strong>بيع اثاث مستعمل</strong> معنا، نضمن لك الحصول
              على أفضل الأسعار النقدية في السوق. تقييماتنا عادلة وشفافة، مبنية
              على الخبرة الطويلة ومعرفة عميقة بسوق الأثاث في الإمارات.
            </p>
          </div>
        </article>
        <div className="w-full bg-gray-50 my-20 rounded-2xl md:p-10 p-5 grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/ar/used-furniture-store-in-sharjah.jpg"}
              alt="متجر أثاث مستعمل في الشارقة"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/abu-shagara-used-furniture-market.jpg"}
              alt="أثاث مستعمل"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        {/* Services */}
        <h2 className="text-xl md:text-2xl font-bold blue mt-8 mb-4">
          خدماتنا المتكاملة لبيع وشراء اثاث مستعمل
        </h2>

        <h3 className="text-lg font-semibold">
          نشتري جميع أنواع الأثاث المستعمل
        </h3>

        <div className="service-list bg-gray-50 p-6 rounded-lg mb-6">
          <p className="text-gray-700">
            نقدم خدمات <strong>محلات شراء الاثاث المستعمل</strong> الأكثر شمولية
            في الإمارات، حيث نشتري:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              <strong>غرف نوم مستعملة:</strong> أسرّة بجميع المقاسات، خزائن
              ملابس، كومودينو، تسريحات، ومراتب عالية الجودة
            </li>
            <li>
              <strong>أطقم كنب وأرائك مستعملة:</strong> كنب جلد وقماش، أرائك
              زاوية، كراسي استرخاء، وصوفا بد
            </li>
            <li>
              <strong>طاولات طعام وكراسي:</strong> طاولات خشبية وزجاجية، كراسي
              سفرة، بوفيهات، وخزائن عرض
            </li>
            <li>
              <strong>اثاث مستعمل للبيع من المكاتب:</strong> مكاتب إدارية، كراسي
              مكتبية، خزائن ملفات، وطاولات اجتماعات
            </li>
            <li>
              <strong>أجهزة كهربائية مستعملة:</strong> ثلاجات، غسالات، مكيفات (نحن{" "}
              <Link
                href={createEncodedUrl("مشترو-المكيفات-المستعملة")}
                className="text-[#144e5a] font-bold underline hover:text-[#c07d53]"
              >
                مشترو المكيفات المستعملة في دبي
              </Link>
              )، أفران، وميكروويف بحالة ممتازة
            </li>
            <li>
              <strong>أثاث حدائق وخارجي:</strong> طقم جلوس خارجي، شمسيات، طاولات
              حديقة، وكراسي بلاستيكية
            </li>
            <li>
              <strong>خزائن مطبخ مستعملة:</strong> وحدات مطبخ كاملة، خزائن علوية
              وسفلية، وأسطح رخامية
            </li>
          </ul>
        </div>

        <div className="cta-box blue-bg text-white p-6 rounded-lg text-center mb-8">
          <p>احصل على تقييم فوري لأثاثك عبر الواتساب</p>
          <a
            target="_blank"
            href="https://wa.me/+971556461731?text=%D8%A3%D8%AA%D9%88%D8%A7%D8%B5%D9%84%20%D9%85%D8%B9%D9%83%D9%85%20%D8%A8%D8%AE%D8%B5%D9%88%D8%B5%20%D8%A7%D9%84%D8%A3%D8%AB%D8%A7%D8%AB%20%D8%A7%D9%84%D9%85%D8%B3%D8%AA%D8%B9%D9%85%D9%84"
            className="inline-block mt-4 bg-white text-[#144e5a] font-semibold px-6 py-2 rounded-md"
          >
            أرسل صور أثاثك الآن
          </a>
        </div>

        <h3 className="text-lg font-semibold">نبيع أثاث مستعمل بحالة ممتازة</h3>
        <p className="text-gray-700 mt-3">
          معرضنا يضم تشكيلة رائعة من <strong>اثاث مستعمل للبيع</strong> بأسعار
          لا تُنافس. جميع القطع المعروضة:
        </p>

        <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
          <li>مفحوصة بدقة من قبل خبرائنا المتخصصين</li>
          <li>مرممة ومصلحة بأعلى معايير الجودة</li>
          <li>معروضة بصور عالية الدقة من جميع الزوايا</li>
          <li>متاحة للمعاينة المباشرة في معرضنا بالشارقة</li>
          <li>مضمونة ضد عيوب الصناعة</li>
        </ul>

        <h2 className="text-xl md:text-2xl font-bold blue mt-8 mb-4">
          عملية بيع وشراء اثاث مستعمل السهلة
        </h2>

        <h3 className="text-lg font-semibold">كيف تبيع أثاثك المستعمل معنا؟</h3>

        {/* Process Steps */}
        <div className="mt-4 space-y-4">
          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              1
            </div>
            <div className="flex-1 text-gray-700">
              <strong>التواصل السريع:</strong> تواصل معنا عبر الواتساب أو
              الاتصال المباشر أو زيارة معرضنا في الشارقة. نرد على جميع
              الاستفسارات خلال دقائق معدودة.
            </div>
          </div>

          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              2
            </div>
            <div className="flex-1 text-gray-700">
              <strong>التقييم الفوري:</strong> خبراؤنا في تقييم{" "}
              <strong>الاثاث المستعمل</strong> يقدمون لك سعراً عادلاً وفورياً
              بناءً على حالة وجودة القطع المعروضة.
            </div>
          </div>

          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              3
            </div>
            <div className="flex-1 text-gray-700">
              <strong>الاستلام المريح:</strong> نأتي إليك في أي مكان في الإمارات
              لاستلام الأثاث، مع فريق محترف للنقل والتعامل الآمن مع القطع.
            </div>
          </div>

          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              4
            </div>
            <div className="flex-1 text-gray-700">
              <strong>الدفع الفوري:</strong> احصل على المبلغ كاملاً نقداً فوراً
              أو عبر حوالة بنكية سريعة حسب رغبتك.
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold mt-6">
          كيف تشتري من مجموعتنا المميزة؟
        </h3>

        <div className="mt-4 space-y-4">
          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              1
            </div>
            <div className="flex-1 text-gray-700">
              <strong>التصفح المريح:</strong> زر معرضنا في الشارقة أو تصفح
              مجموعتنا الواسعة من <strong>اثاث مستعمل للبيع</strong> عبر
              الواتساب.
            </div>
          </div>

          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              2
            </div>
            <div className="flex-1 text-gray-700">
              <strong>الاختيار الواسع:</strong> اختر من بين مئات القطع المتنوعة
              من غرف النوم، الكنب، طاولات الطعام، والأجهزة الكهربائية.
            </div>
          </div>

          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              3
            </div>
            <div className="flex-1 text-gray-700">
              <strong>طرق دفع مرنة:</strong> ندعم الدفع النقدي، البطاقات
              الائتمانية، الشيكات البنكية، أو التحويل البنكي.
            </div>
          </div>

          <div className="process-step flex items-center bg-gray-50 p-4 rounded-lg">
            <div className="step-number bg-[#144e5a] text-white w-10 h-10 rounded-full flex items-center justify-center ml-4">
              4
            </div>
            <div className="flex-1 text-gray-700">
              <strong>التوصيل الاحترافي:</strong> خدمة نقل آمنة ومضمونة مع
              شريكنا الحصري أبو محمد للنقليات بأسعار تفضيلية.
            </div>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold blue mt-8 mb-4">
          خدماتنا في جميع مدن الإمارات
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
          <a
            href={createEncodedUrl("أثاث-مستعمل-الشارقة")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في الشارقة - مقرنا الرئيسي
          </a>
          <a
            href={createEncodedUrl("اثاث-مستعمل-دبي")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في دبي - توصيل سريع
          </a>
          <a
            href={createEncodedUrl("اثاث-مستعمل-ابوظبي")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في أبوظبي ومصفح
          </a>
          <a
            href={createEncodedUrl("اثاث-مستعمل-عجمان")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في عجمان
          </a>
          <a
            href={createEncodedUrl("اثاث-مستعمل-العين")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في العين
          </a>
          <a
            href={createEncodedUrl("اثاث-مستعمل-راس-الخيمة")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في رأس الخيمة
          </a>
          <a
            href={createEncodedUrl("أثاث-مستعمل")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في الفجيرة
          </a>
          <a
            href={createEncodedUrl("أثاث-مستعمل")}
            className="city-link block text-center bg-[#144e5a] text-white py-3 rounded-md"
          >
            اثاث مستعمل في أم القيوين
          </a>
        </div>

        <p className="text-center text-lg text-gray-700 mb-6">
          نقدم خدمات <strong>بيع وشراء اثاث مستعمل</strong> في جميع أنحاء دولة
          الإمارات مع ضمان السرعة والجودة
        </p>
        <div className="w-full bg-gray-50 my-20 rounded-2xl md:p-10 p-5 grid md:grid-cols-2 grid-cols-1 gap-10">
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/service/used-bed-buyers-in-dubai.jpg"}
              alt="متجر أثاث مستعمل في الشارقة"
              fill
              className="object-cover object-center"
            />
          </div>
          <div className="w-full md:h-96 h-72 bg-white drop-shadow-xl rounded-2xl relative overflow-hidden">
            <Image
              src={"/furniture/outdoor-patio-4x3.jpg"}
              alt="أثاث مستعمل"
              fill
              className="object-cover object-center"
            />
          </div>
        </div>
        <h2 className="text-xl md:text-2xl font-bold blue mt-8 mb-4">
          ما يميزنا عن باقي محلات شراء الاثاث المستعمل
        </h2>

        <div className="feature-box bg-green-50 p-6 rounded-lg">
          <h3 className="text-lg font-semibold">ترميم وتحسين الجودة</h3>
          <p className="mt-2 text-gray-700">
            نفخر بورشة الترميم المتخصصة لدينا، حيث يعمل فريق من الحرفيين المهرة
            على إعادة الحياة لكل قطعة من <strong>الاثاث المستعمل</strong>.
            العملية تشمل:
          </p>

          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>فحص دقيق لكل قطعة للكشف عن أي عيوب أو تلف</li>
            <li>
              ترميم احترافي للأثاث الخشبي بما في ذلك الصنفرة وإعادة الطلاء
            </li>
            <li>تنظيف عميق وتعقيم للكنب والمراتب</li>
            <li>تلميع وصيانة شاملة قبل العرض للبيع</li>
            <li>استبدال القطع التالفة بأخرى أصلية عالية الجودة</li>
          </ul>

          <p className="mt-3 text-gray-700">
            النتيجة؟ <strong>اثاث مستعمل</strong> يبدو وكأنه جديد تماماً، مع
            ضمان الجودة والمتانة لسنوات قادمة.
          </p>
        </div>

        <div className="feature-box bg-gray-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold">طرق دفع متنوعة ومرنة</h3>
          <p className="mt-2 text-gray-700">
            نحن نفهم أن كل عميل له احتياجاته الخاصة، لذلك نوفر مجموعة واسعة من
            خيارات الدفع:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              <strong>للبائعين:</strong> دفع نقدي فوري عند الاستلام أو تحويل
              بنكي سريع
            </li>
            <li>
              <strong>للمشترين:</strong> نقداً، بطاقات ائتمان، شيكات بنكية، أو
              تحويل بنكي
            </li>
            <li>إمكانية الدفع على دفعات للمشتريات الكبيرة (بشروط)</li>
            <li>خصومات خاصة للمشتريات بالجملة</li>
          </ul>
        </div>

        <div className="feature-box bg-gray-50 p-6 rounded-lg mt-6">
          <h3 className="text-lg font-semibold">
            شراكة حصرية مع أبو محمد للنقل
          </h3>
          <p className="mt-2 text-gray-700">
            تعاوننا الاستراتيجي مع شركة أبو محمد للنقليات يضمن لعملائنا:
          </p>
          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>أسعار تفضيلية حصرية لعملاء ركن العروبة</li>
            <li>نقل آمن ومضمون بأيدي محترفة</li>
            <li>تغليف احترافي لحماية الأثاث أثناء النقل</li>
            <li>خدمة فك وتركيب الأثاث عند الحاجة</li>
            <li>تغطية شاملة لجميع مناطق الإمارات</li>
            <li>تأمين على البضائع أثناء النقل</li>
          </ul>
        </div>

        <h2 className="text-xl md:text-2xl font-bold blue mt-8 mb-4">
          أسئلة شائعة حول شراء وبيع اثاث مستعمل
        </h2>

        <div className="space-y-4">
          <div className="faq-item bg-gray-50 p-4 rounded-lg border-r-4 border-[#c07d53]">
            <h3 className="font-semibold">كم تستغرق عملية التقييم والشراء؟</h3>
            <p className="mt-2 text-gray-700">
              عملية <strong>شراء اثاث مستعمل</strong> معنا سريعة ومريحة. نقدم
              تقييماً أولياً فورياً عبر الواتساب خلال 5-10 دقائق من إرسال الصور.
              للتقييم النهائي والشراء، يمكننا الحضور إليك في نفس اليوم أو حسب
              موعد يناسبك. العملية بأكملها من التقييم حتى استلام المبلغ لا
              تستغرق أكثر من ساعة واحدة في معظم الحالات.
            </p>
          </div>

          <div className="faq-item bg-gray-50 p-4 rounded-lg border-r-4 border-[#c07d53]">
            <h3 className="font-semibold">
              هل تشترون الأثاث التالف أو القديم جداً؟
            </h3>
            <p className="mt-2 text-gray-700">
              نعم، نحن نقيّم ونشتري <strong>بيع اثاث مستعمل</strong> بجميع
              حالاته. حتى الأثاث القديم أو الذي يحتاج لإصلاحات له قيمة لدينا.
              فريقنا المتخصص يقدم تقييماً عادلاً لكل قطعة بناءً على حالتها
              الفعلية وإمكانية ترميمها. لا تتردد في عرض أي قطعة أثاث لديك مهما
              كانت حالتها.
            </p>
          </div>

          <div className="faq-item bg-gray-50 p-4 rounded-lg border-r-4 border-[#c07d53]">
            <h3 className="font-semibold">ما هي المناطق التي تغطونها؟</h3>
            <p className="mt-2 text-gray-700">
              خدماتنا متاحة في جميع إمارات الدولة دون استثناء. سواء كنت في دبي،
              أبوظبي، الشارقة، عجمان، رأس الخيمة، الفجيرة، أم القيوين، أو العين،
              نحن جاهزون لخدمتك. معرضنا الرئيسي في الشارقة، لكن فرقنا المتنقلة
              تصل إلى أي منطقة في الإمارات لتقديم خدمات{" "}
              <strong>بيع وشراء اثاث مستعمل</strong> المريحة.
            </p>
          </div>

          <div className="faq-item bg-gray-50 p-4 rounded-lg border-r-4 border-[#c07d53]">
            <h3 className="font-semibold">هل يوجد ضمان على الأثاث المباع؟</h3>
            <p className="mt-2 text-gray-700">
              بالتأكيد! جميع قطع <strong>الاثاث المستعمل</strong> المباعة من
              معرضنا تأتي مع ضمان يتراوح من 30 إلى 90 يوماً حسب نوع القطعة. نوفر
              أيضاً سياسة إرجاع مرنة خلال 7 أيام من الشراء في حالة عدم الرضا
              (بشروط معينة). هذا الضمان يعكس ثقتنا في جودة منتجاتنا والتزامنا
              برضا عملائنا.
            </p>
          </div>

          <div className="faq-item bg-gray-50 p-4 rounded-lg border-r-4 border-[#c07d53]">
            <h3 className="font-semibold">
              كيف أحصل على أفضل سعر لأثاثي المستعمل؟
            </h3>
            <p className="mt-2 text-gray-700">
              للحصول على أفضل سعر عند <strong>بيع اثاث مستعمل</strong>، ننصحك
              بإرسال صور واضحة من زوايا مختلفة، مع ذكر عمر القطعة وأي عيوب
              موجودة. كلما كانت المعلومات أدق، كان التقييم أفضل. الأثاث النظيف
              والمحافظ عليه يحصل على أسعار أعلى. نحن نقدم أسعاراً عادلة ومنافسة
              تعكس القيمة الحقيقية لأثاثك.
            </p>
          </div>
        </div>

        <h2 className="text-xl md:text-2xl font-bold blue mt-8 mb-4">
          نساهم في الاستدامة البيئية
        </h2>

        <div className="feature-box bg-green-100 p-6 rounded-lg">
          <p className="text-gray-700">
            في ركن العروبة، نؤمن بأن إعادة استخدام{" "}
            <strong>الاثاث المستعمل</strong> ليس مجرد خيار اقتصادي ذكي، بل
            مسؤولية بيئية نحو كوكبنا وأجيالنا القادمة. كل قطعة أثاث نعيد
            استخدامها تعني:
          </p>

          <ul className="list-disc list-inside mt-3 text-gray-700 space-y-2">
            <li>
              <strong>تقليل النفايات:</strong> منع أطنان من الأثاث الصالح من
              الوصول إلى المكبات
            </li>
            <li>
              <strong>حفظ الموارد:</strong> تقليل قطع الأشجار واستهلاك المواد
              الخام
            </li>
            <li>
              <strong>خفض البصمة الكربونية:</strong> تقليل الانبعاثات الناتجة عن
              تصنيع أثاث جديد
            </li>
            <li>
              <strong>دعم الاقتصاد الدائري:</strong> إطالة دورة حياة المنتجات
              وتعظيم قيمتها
            </li>
            <li>
              <strong>الترميم بدلاً من الرمي:</strong> إعطاء حياة جديدة للقطع
              القديمة بدلاً من التخلص منها
            </li>
          </ul>

          <p className="mt-3 text-gray-700">
            بشرائك أو بيعك <strong>اثاث مستعمل</strong> معنا، أنت تساهم في حماية
            البيئة وبناء مستقبل أكثر استدامة. معاً نحن نحدث فرقاً حقيقياً!
          </p>
        </div>

        <h2 className="text-xl md:text-2xl font-bold blue mt-8 mb-4">
          آراء عملائنا في خدمات بيع وشراء اثاث مستعمل
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="testimonial bg-gray-100 p-4 rounded-lg italic border-r-4 border-yellow-500">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-2">
              &quot;تجربة ممتازة مع ركن العروبة! باعت لهم غرفة نوم كاملة وحصلت
              على سعر ممتاز. الفريق محترف جداً وصل في الموعد المحدد وتعامل مع
              الأثاث بعناية فائقة. <strong>محلات شراء الاثاث المستعمل</strong>{" "}
              الأخرى لا تقارن معهم أبداً. أنصح الجميع بالتعامل معهم.&quot;
            </p>
            <p className="mt-2">
              <strong>- أحمد الشامسي، دبي</strong>
            </p>
          </div>

          <div className="testimonial bg-gray-100 p-4 rounded-lg italic border-r-4 border-yellow-500">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-2">
              &quot;اشتريت طقم كنب من معرضهم في الشارقة وكأنه جديد تماماً!
              الأسعار معقولة جداً مقارنة بالجديد، والأهم الضمان الذي يقدمونه.{" "}
              <strong>اثاث مستعمل للبيع</strong> عندهم بجودة عالية فعلاً. الخدمة
              سريعة والتوصيل كان في نفس اليوم.&quot;
            </p>
            <p className="mt-2">
              <strong>- فاطمة العلي، الشارقة</strong>
            </p>
          </div>

          <div className="testimonial bg-gray-100 p-4 rounded-lg italic border-r-4 border-yellow-500">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-2">
              &quot;كنت محتاج أبيع أثاث شقتي كاملة بسرعة بسبب السفر. ركن العروبة
              جاؤوا وقيموا كل شيء بسعر عادل ودفعوا كاش فوراً.{" "}
              <strong>بيع وشراء اثاث مستعمل</strong> معهم سهل وموثوق. شكراً لكم
              على الاحترافية.
            </p>
            <p className="mt-2">
              <strong>- محمد الكعبي، أبوظبي</strong>
            </p>
          </div>

          <div className="testimonial bg-gray-100 p-4 rounded-lg italic border-r-4 border-yellow-500">
            <p>⭐⭐⭐⭐⭐</p>
            <p className="mt-2">
              &quot;معرض رائع ومنظم، والأسعار منافسة جداً. اشتريت غرفة نوم كاملة
              وطاولة طعام بأقل من نصف سعر الجديد.{" "}
              <strong>الاثاث المستعمل</strong> عندهم مرمم بشكل احترافي. التوصيل
              مع أبو محمد كان ممتاز والتركيب مجاني.&quot;
            </p>
            <p className="mt-2">
              <strong>- سارة المنصوري، عجمان</strong>
            </p>
          </div>
        </div>

        <h2
          id="contact"
          className="text-xl md:text-2xl font-bold blue mt-8 mb-4"
        >
          تواصل معنا اليوم
        </h2>

        <div className="contact-info bg-[#2c3e50] text-white p-6 rounded-lg">
          <h3 className="text-lg font-semibold">معلومات الاتصال:</h3>
          <p className="mt-2">
            <strong>📍 العنوان:</strong> شارع الاستقلال، بوشغارة، القاسمية،
            الشارقة، الإمارات العربية المتحدة
          </p>
          <p className="mt-2">
            <strong>📱 الهاتف:</strong> +971 55 646 1731
          </p>
          <p className="mt-2">
            <strong>💬 واتساب:</strong> +971 55 646 1731 - رد خلال 5 دقائق
          </p>
          <p className="mt-2">
            <strong>🕐 ساعات العمل:</strong> من الإثنين إلى الأحد: ٩ ص – ١١ م
            (الأربعاء حتى ١٠:٣٠ م، الإثنين حتى ١١:٣٠ م)
          </p>
          <p className="mt-2">
            <strong>✉️ البريد الإلكتروني:</strong> rukun.al.arooba@gmail.com
          </p>
        </div>

        <div className="mt-6 bg-gray-50 p-6 rounded-lg text-center">
          <h3 className="font-semibold">موقعنا على الخريطة</h3>
          <iframe
            title="Our Store Location in Google Maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8696529263066!2d55.39297417447848!3d25.3421546258158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b39dde3733b%3A0x70627f406a04df1e!2sRukun%20AL%20arooba%20used%20furniture%20and%20electronics%20trading!5e0!3m2!1sen!2s!4v1757767922306!5m2!1sen!2s"
            width="280"
            height="350"
            className="w-full mt-10 rounded-2xl"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
