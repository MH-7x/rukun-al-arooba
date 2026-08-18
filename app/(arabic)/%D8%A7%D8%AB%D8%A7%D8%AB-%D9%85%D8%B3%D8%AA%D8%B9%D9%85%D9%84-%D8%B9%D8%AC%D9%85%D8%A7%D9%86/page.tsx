import MetadataTemplate from "@/lib/MetaDataTemplate";
import ArBreadcrumb from "@/components/arabic/ArBreadcrumb";
import React from "react";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل عجمان | بيع وشراء أثاث بأفضل الأسعار",
      desc: "تسوق أو بيع اثاث مستعمل في عجمان مع ركن العروبة. أثاث منزلي ومكتبي مجدد بضمان، توصيل سريع وخيارات دفع متعددة. خبرة +20 سنة. تواصل معنا الآن!",
    },
    path: `/${decodeURIComponent("اثاث-مستعمل-عجمان")}`,
    image: {
      path: "/ar/used-furniture-sharjah-ar.jpg",
      alt: "اثاث مستعمل عجمان - أفضل الأسعار والجودة",
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
          { label: "اثاث مستعمل عجمان" },
        ]}
      />
      <div className="max-w-4xl mx-auto px-4 text-center mt-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#144e5a] mb-6">اثاث مستعمل عجمان</h1>
        <p className="text-slate-700 text-lg leading-relaxed mb-8">
          أفضل خدمات بيع وشراء الأثاث المستعمل والأجهزة الكهربائية في عجمان. نوفر أيضاً خدمات متخصصة لـ{" "}
          <Link
            href={createEncodedUrl("مشترو-المكيفات-المستعملة")}
            className="text-[#144e5a] font-bold underline hover:text-[#C07D53]"
          >
            مشترو المكيفات المستعملة في دبي
          </Link>{" "}
          وعجمان والشارقة مع تقييم واتساب سريع ودفع نقدي فوري.
        </p>
      </div>
    </main>
  );
};

export default ArabicPage;
