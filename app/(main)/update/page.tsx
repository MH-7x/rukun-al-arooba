import Reviews from "@/components/Reviews";
import { HomeFaqs } from "@/lib/list";
import FAQs from "@/components/base/FAQs";
import CTA from "@/components/base/CTA";
import LatestsNews from "@/components/LatestsNews";
import HeroSection from "@/components/v2/HeroSection";
import BuySellSection from "@/components/v2/BuySellSection";
import States from "@/components/v2/States";
import ModernWayToBuySell from "@/components/v2/ModernWayToBuySell";
import WhyChooseUs from "@/components/v2/WhyChooseUs";
import Services from "@/components/v2/Services";
import SellUsedFurniture from "@/components/v2/SellUsedFurniture";
import ServiceAreas from "@/components/v2/ServicesAreas";
import Sustainable from "@/components/v2/Sustainable";
import Content from "@/components/v2/Content";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Furniture in Sharjah | Buy & Sell Second-Hand Furniture",
      desc: "Buy or sell used furniture in Sharjah at Rukun Al Arooba. With 20+ years of trusted service, we offer quality pieces, easy returns, and fast support 5-10 min",
    },
    image: {
      path: "/used-furniture-in-sharjah-b.jpg",
      alt: "rukun al arooba used furniture in sharjah",
    },
    path: "",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(HomeFaqs));

const page = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="">
        <HeroSection />
        <BuySellSection />
        <States />
        <ModernWayToBuySell />
        <WhyChooseUs />
        <Services />
        <SellUsedFurniture />
        <ServiceAreas />

        <Sustainable />
        <Content />
        <Reviews />
        <FAQs Faqs={HomeFaqs} />
        <CTA
          title="Contact Us For Used Furniture in Sharjah"
          desc={
            <>
              <p>
                If you&apos;re ready to find the perfect pre-owned item or want
                to sell your furniture quickly and easily, Rukun Al Arooba Used
                Furniture is here to help. Our service speed is fast, with a
                response to your inquiry within 5–10 minutes.
              </p>
            </>
          }
        />
      </main>
      <LatestsNews />
    </>
  );
};

export default page;
