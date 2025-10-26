import ServiceAside from "@/components/base/ServiceAside";
import ServiceHero from "@/components/base/ServiceHero";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import "../styling.css";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";
import { SofaFaqs } from "@/lib/list";
import CTA from "@/components/base/CTA";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";
import Reviews from "@/components/Reviews";
import LatestsNews from "@/components/LatestsNews";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "High-Quality Used Sofa For Sale in Dubai, Sharjah & UAE",
      desc: "Find affordable, stylish used sofas for sale at Rukun Al Arooba. We offer quality-checked, repaired sofas with warranty and delivery across the UAE. Visit our Sharjah store!",
    },
    image: {
      path: "/service/used-sofa-for-sale-sharjah-dubai.jpg",
      alt: "Stylish affordable used sofa for sale in Sharjah and Dubai — Rukun Al Arooba certified pre-owned furniture UAE",
    },
    path: "/used-sofa-for-sale-uae",
  },
});

const images = [
  {
    src: "/service/used-sofa-in-uae-1.jpg",
    alt: "used sofa for sale in uae -1",
  },
  {
    src: "/service/used-sofa-in-uae-2.jpg",
    alt: "used sofa for sale in uae -2",
  },
  {
    src: "/service/used-sofa-in-uae-3.jpg",
    alt: "used sofa for sale in uae -3",
  },
  {
    src: "/service/used-sofa-in-uae-4.jpg",
    alt: "used sofa for sale in uae -4",
  },
  {
    src: "/service/used-sofa-in-uae-5.jpg",
    alt: "used sofa for sale in uae -5",
  },
  {
    src: "/service/used-sofa-in-uae-6.jpg",
    alt: "used sofa for sale in uae -6",
  },
];
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(SofaFaqs));
const UsedSofaPage = () => {
  return (
    <>
      {" "}
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="service-page">
        <ServiceHero
          title={{
            one: "Used Sofa for Sale in the UAE",
            two: "Rukun Al Arooba Furniture",
          }}
          img={{
            src: "/service/used-sofa-for-sale-sharjah-dubai.jpg",
            alt: "Used Sofa for Sale in Dubai and Sharjah - Rukun Al Arooba Furniture UAE",
          }}
          desc=" At Rukun Al Arooba Used Furniture, we bridge the gap between quality and affordability. We offer a premier selection of high-quality used sofa for sale options, allowing you to furnish your home with style and confidence. As the leading, trusted provider of pre-owned furniture in Sharjah, Dubai, and across the UAE, our entire business is built on delivering exceptional value and complete customer satisfaction."
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 min-h-[500px] mt-20 md:w-11/12 mx-auto">
          <article className="md:col-span-2 col-span-1 md:order-2 order-1 service-article">
            {/* === Used Sofas Section - paste inside your article element === */}

            <section className="section sofas-collection" id="sofas-collection">
              <h2 className="section-title">
                Our Curated Collection of Pre-Owned Sofas
              </h2>
              <p>
                Our showroom features a diverse and constantly updated inventory
                of sofas to suit any taste and space. Each piece is
                hand-selected for its condition, durability, and design. Below
                is a sample of the types of sofas we frequently stock. For our
                latest arrivals, be sure to contact us on WhatsApp!
              </p>
              <div className="grid md:grid-cols-3 grid-cols-1 gap-5 my-10">
                {images.map((img, o) => (
                  <div
                    key={o}
                    className="md:h-52 h-60 bg-gray-200 relative rounded-2xl overflow-hidden"
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              <h3 className="appliance-title">
                L-Shaped &amp; Sectional Sofas
              </h3>
              <p>
                Perfect for families and entertaining guests, our used L-shaped
                and sectional sofas provide ample seating and create a cozy,
                inviting hub in your living room. Find a variety of styles and
                configurations to perfectly fit your space.
              </p>

              <h3 className="appliance-title">Used Sofa Beds for Sale</h3>
              <p>
                Maximize your space with a versatile and functional used sofa
                bed. Ideal for apartments, guest rooms, or any home needing a
                smart, space-saving solution, our sofa beds offer comfort for
                both sitting and sleeping.
              </p>

              <h3 className="appliance-title">
                Leather &amp; Fabric Sofa Sets
              </h3>
              <p>
                Whether you prefer the timeless elegance of a used leather sofa
                or the comfort and variety of a fabric set, we have you covered.
                Our collection includes durable, stylish options to match any
                interior design, from modern minimalist to classic comfort.
              </p>

              <h3 className="appliance-title">
                Two-Seater &amp; Three-Seater Sofas
              </h3>
              <p>
                From compact two-seaters perfect for a small apartment to
                spacious three-seaters for the family, you can find the ideal
                size for your needs. These affordable couches are perfect as
                standalone pieces or to complement your existing furniture.
              </p>
            </section>

            <section className="section sofas-difference" id="sofas-difference">
              <h2 className="section-title">
                The Rukun Al Arooba Difference: Why Buy Your Used Sofa From Us?
              </h2>
              <p>
                In a market filled with freelance sellers and online listings,
                choosing where to buy used furniture can be stressful. We
                provide a professional, secure, and satisfying experience that
                sets us apart.
              </p>
              <div className="my-10 grid w-full relative md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/service/used-sofa-delivery-service.jpg"
                  alt="Professional movers delivering used sofa in Dubai and UAE — fast, safe furniture delivery service by Rukun Al Arooba"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="appliance-title">
                An Officially Registered Company with 20+ Years of Experience
              </h3>
              <p>
                Enjoy complete peace of mind knowing you are dealing with a
                legitimate business. Rukun Al Arooba has been officially
                registered since 2018, with over two decades of hands-on
                experience in the Sharjah furniture market. We have a physical
                store you can visit, unlike ghost-sellers who only operate on
                WhatsApp.
              </p>

              <h3 className="appliance-title">
                Our Unmatched Quality Guarantee
              </h3>
              <p>
                We don&apos;t just buy and flip furniture. Every used sofa we
                acquire undergoes a rigorous inspection process. If a piece
                requires any repair or polishing, our skilled team restores it
                to excellent condition before it is displayed in our showroom or
                listed on our site. You get furniture that looks and feels like
                new, at a fraction of the cost.
              </p>

              <h3 className="appliance-title">
                Fast, Responsive Service (5–10 Minute Replies)
              </h3>
              <p>
                Your time is valuable. When you contact us via our website or
                WhatsApp, you won’t be left waiting. We are committed to
                providing prompt and helpful responses within 5–10 minutes,
                ensuring a smooth and efficient inquiry process.
              </p>

              <h3 className="appliance-title">
                Flexible Payments &amp; Discounted Delivery
              </h3>
              <p>
                We make purchasing easy. Choose from multiple payment methods
                including cash, online bank deposit, and bank checks. Worried
                about transport? We have an official partnership with Abu
                Muhammad Movers, ensuring you get a reliable and discounted
                delivery service for your <strong>used sofa for sale</strong>{" "}
                purchase.
              </p>

              <h3 className="appliance-title">
                Warranty &amp; Easy Returns on All Furniture
              </h3>
              <p>
                We stand behind the quality of our products. Every purchase
                comes with a warranty. If the furniture doesn&apos;t meet your
                expectations upon arrival, our straightforward return policy
                ensures you can buy with total confidence.
              </p>
            </section>

            <section
              className="section sofas-service-areas"
              id="sofas-service-areas"
            >
              <h2 className="section-title">
                Serving Sharjah, Dubai, and All Across the UAE
              </h2>
              <p>
                While our main showroom is conveniently located in Sharjah, our
                services extend across the entire UAE. We are proud to be the
                trusted source for a <strong>used sofa for sale</strong> in
                Dubai, Abu Dhabi, and beyond. We regularly serve customers in:
              </p>
              <ul className="service-areas">
                <li>
                  Sharjah (Visit our store on Al Estiqlal Street, Bu Shaghara!)
                </li>
                <li>Dubai</li>
                <li>Abu Dhabi</li>
                <li>Ajman</li>
                <li>Ras Al Khaimah</li>
                <li>Al Ain</li>
              </ul>
            </section>
            <div className="my-10 grid w-full relative md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/service/used-sofa-buy-and-sell-service-uae.jpg"
                alt="Used sofa showroom in Sharjah with delivery and sales across Dubai, Abu Dhabi, Ajman, Ras Al Khaimah and Al Ain — Rukun Al Arooba UAE"
                fill
                className="object-cover"
              />
            </div>
            <section className="section sofas-sellers" id="sofas-sellers">
              <h2 className="section-title">
                Have a Sofa to Sell? We Are Top Used Sofa Buyers!
              </h2>
              <p>
                Are you upgrading, moving, or simply looking to sell your old
                sofa? We make the process fast and profitable for you. As one of
                the top <strong>used sofa buyers near me</strong>, we offer
                fair, competitive prices for your pre-owned furniture. Simply
                contact us on WhatsApp with photos of your sofa, and we’ll
                provide you with the best estimated price in minutes.
              </p>
              <div className="my-5 flex gap-x-3">
                <Button wtsBtn>WhatsApp Us </Button>
                <Link href={"/used-beds-buyers-in-dubai"}>
                  {" "}
                  <Button variant={"outline"}>Sell Your Sofa Now</Button>
                </Link>
              </div>
            </section>
          </article>
          <ServiceAside />
        </div>
        <FAQs Faqs={SofaFaqs} />
        <Reviews />
        <CTA
          title="Get Your Affordable, High-Quality Used Sofa Today!"
          desc={
            <>
              <p>
                Ready to find the centerpiece for your living room? Your search
                for the perfect, affordable used sofa for sale ends here.
                Contact our friendly team today and experience the Rukun Al
                Arooba difference.
              </p>
            </>
          }
        />
      </main>
      <LatestsNews />
    </>
  );
};

export default UsedSofaPage;
