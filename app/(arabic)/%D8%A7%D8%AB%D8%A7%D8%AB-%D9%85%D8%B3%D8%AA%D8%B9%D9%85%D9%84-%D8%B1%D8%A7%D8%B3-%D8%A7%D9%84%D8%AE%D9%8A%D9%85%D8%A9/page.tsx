import MetadataTemplate from "@/lib/MetaDataTemplate";

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
const ArabicPage = () => {
  return (
    <main>
      <h1 className="text-5xl text-center mb-20">اثاث مستعمل راس الخيمة</h1>
    </main>
  );
};

export default ArabicPage;
