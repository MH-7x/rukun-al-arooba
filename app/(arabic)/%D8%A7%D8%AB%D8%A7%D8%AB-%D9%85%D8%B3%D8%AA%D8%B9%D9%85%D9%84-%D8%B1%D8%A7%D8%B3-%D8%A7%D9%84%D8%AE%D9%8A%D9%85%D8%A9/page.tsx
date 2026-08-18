import MetadataTemplate from "@/lib/MetaDataTemplate";
import ArBreadcrumb from "@/components/arabic/ArBreadcrumb";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل راس الخيمة | ركن العروبة للأثاث المستعمل",
      desc: "اشتري أو بيع اثاث مستعمل في راس الخيمة مع ركن العروبة. خبرة +20 سنة في الأثاث المنزلي والمكتبي المجدد بضمان وأسعار مناسبة. اطلب عرض سعر الآن!",
    },
    path: `/${decodeURIComponent("اثاث-مستعمل-راس-الخيمة")}`,
    image: {
      path: "/ar/used-furniture-abu-dhabi-ar.jpg",
      alt: "اثاث مستعمل راس الخيمة - ركن العروبة للأثاث المستعمل",
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
          { label: "اثاث مستعمل راس الخيمة" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 text-center mt-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#144e5a] mb-6">اثاث مستعمل راس الخيمة</h1>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          شراء وبيع الأثاث المستعمل في رأس الخيمة بأفضل الأسعار. نصلكم أينما كنتم، كما نوفر خدماتنا لـ{" "}
          <Link
            href={createEncodedUrl("مشترو-المكيفات-المستعملة")}
            className="text-[#144e5a] font-bold underline hover:text-[#C07D53]"
          >
            مشترو المكيفات المستعملة في دبي
          </Link>{" "}
          ورأس الخيمة وجميع مناطق الدولة.
        </p>
      </div>
    </main>
  );
};

export default ArabicPage;
