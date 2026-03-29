import MetadataTemplate from "@/lib/MetaDataTemplate";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "اثاث مستعمل ابوظبي للبيع والشراء | ركن العروبة",
      desc: "اثاث مستعمل ابوظبي للبيع والشراء من ركن العروبة. معرض في شارع الاستقلال منذ 2018. أفضل الأسعار، ضمان الجودة، وخدمة توصيل سريعة. اتصل الآن!",
    },
    path: `/${decodeURIComponent("أثاث-مستعمل-ابوظبي")}`,
    image: {
      path: "/ar/used-furniture-abu-dhabi-ar.jpg",
      alt: "اثاث مستعمل ابوظبي",
    },
  },
});
const ArabicPage = () => {
  return (
    <main>
      <h1 className="text-5xl text-center mb-20">اثاث مستعمل ابوظبي</h1>
    </main>
  );
};

export default ArabicPage;
