import MetadataTemplate from "@/lib/MetaDataTemplate";
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
const ArabicPage = () => {
  return (
    <main>
      <h1 className="text-5xl text-center mb-20">اثاث مستعمل عجمان</h1>
    </main>
  );
};

export default ArabicPage;
