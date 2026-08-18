import MetadataTemplate from "@/lib/MetaDataTemplate";
import ArBreadcrumb from "@/components/arabic/ArBreadcrumb";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل ابوظبي للبيع والشراء | ركن العروبة",
      desc: "اثاث مستعمل ابوظبي للبيع والشراء من ركن العروبة. معرض في شارع الاستقلال منذ 2018. أفضل الأسعار، ضمان الجودة، وخدمة توصيل سريعة. اتصل الآن!",
    },
    path: `/${decodeURIComponent("اثاث-مستعمل-ابوظبي")}`,
    image: {
      path: "/ar/used-furniture-abu-dhabi-ar.jpg",
      alt: "اثاث مستعمل ابوظبي",
    },
  },
});
import Link from "next/link";
import { createEncodedUrl } from "@/lib/utils";

const ArabicPage = () => {
  return (
    <main className="min-h-[60vh] pb-16">
      <ArBreadcrumb
        items={[
          { label: "الرئيسية", href: "/" },
          { label: "اثاث مستعمل ابوظبي" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 text-center mt-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#144e5a] mb-6">اثاث مستعمل ابوظبي</h1>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          نشتري ونبيع جميع أنواع الأثاث المنزلي والمكتبي والأجهزة الكهربائية في أبوظبي. إذا كنت تبحث عن بيع أجهزة التكييف القديمة، تعرف على خدماتنا كـ{" "}
          <Link
            href={createEncodedUrl("مشترو-المكيفات-المستعملة")}
            className="text-[#144e5a] font-bold underline hover:text-[#C07D53]"
          >
            مشترو المكيفات المستعملة في دبي
            </Link>{" "}
          وكافة إمارات الدولة مع دفع كاش فوري واستلام مجاني.
        </p>
      </div>
    </main>
  );
};

export default ArabicPage;
