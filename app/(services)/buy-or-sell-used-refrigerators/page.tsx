import ServiceAside from "@/components/base/ServiceAside";
import "../styling.css";
import ServiceHero from "@/components/base/ServiceHero";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Image from "next/image";
import FAQs from "@/components/base/FAQs";
import { RefrigeratorFaqs } from "@/lib/list";
import CTA from "@/components/base/CTA";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";
import Reviews from "@/components/Reviews";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Buy & Sell Used Refrigerators in UAE | Rukun Al Arooba",
      desc: "Find high-quality used refrigerators for sale in Dubai, Sharjah & UAE. All fridges are inspected, repaired & warrantied. We are also top used refrigerator buyers, offering the best prices. Get a fast quote!",
    },
    image: {
      path: "/service/used-bed-buyers-in-dubai.jpg",
      alt: "rukun al arooba used bed buyers in dubai",
    },
    path: "/used-beds-buyers-in-dubai",
  },
});
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(RefrigeratorFaqs));
const UsedRefrigeratorPage = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="service-page">
        <ServiceHero
          title={{
            one: "Buy & Sell Used Refrigerators",
            two: "With Rukun Al Arooba",
          }}
          desc="Whether you're setting up a new apartment, upgrading your kitchen, or looking to sell an appliance you no longer need, the market for used refrigerators offers incredible value. Our commitment is to quality, affordability, and customer satisfaction, serving communities from our home base in Sharjah to Dubai, Abu Dhabi, and across the Emirates."
          img={{
            src: "/service/used-refrigerators-in-uae.jpg",
            alt: "used refrigerators in uae",
          }}
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 min-h-[500px] mt-20 md:w-11/12 mx-auto">
          <article className="md:col-span-2 col-span-1 md:order-2 order-1 service-article">
            {/* === Used Refrigerators Buyers & Sellers section - paste inside your article element === */}

            <section
              className="section buyers-refrigerators"
              id="buyers-refrigerators"
            >
              <h2 className="section-title">
                For Buyers: Find the Perfect Used Refrigerator for Sale
              </h2>
              <p>
                When you buy a pre-owned appliance, you deserve complete
                confidence in your purchase. We eliminate the guesswork and risk
                associated with private sales by ensuring every refrigerator we
                sell meets the highest standards of quality and performance.
              </p>

              <h3 className="appliance-title">
                Quality You Won&apos;t Find Elsewhere: Our Inspection Guarantee
              </h3>
              <p>
                Before any appliance earns a spot in our showroom, it must pass
                our rigorous quality assurance process. This isn&apos;t just a
                quick wipe-down; it&apos;s a comprehensive inspection to
                guarantee functionality and longevity. When you browse our
                selection for a <strong>used fridge for sale</strong>, you can
                be sure it has been thoroughly checked by our technicians,
                including:
              </p>

              <ul className="checklist">
                <li>
                  <strong>Compressor &amp; Cooling Efficiency Tests:</strong> We
                  ensure the heart of the refrigerator is strong and cools
                  effectively and efficiently.
                </li>
                <li>
                  <strong>
                    Thermostat &amp; Temperature Control Verification:
                  </strong>{" "}
                  We test the controls to confirm they are accurate and
                  responsive.
                </li>
                <li>
                  <strong>Door Seal Inspection:</strong> We check every seal for
                  leaks to ensure no cold air escapes, saving you money on
                  electricity bills.
                </li>
                <li>
                  <strong>Professional Servicing &amp; Cleaning:</strong> Every
                  unit is professionally cleaned, serviced, and sanitized to be
                  ready for immediate use in your home.
                </li>
                <li>
                  <strong>Necessary Repairs:</strong> If we find any issues, our
                  skilled team performs the necessary repairs to restore the
                  appliance to perfect working condition.
                </li>
              </ul>
              <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/used-fridge-inspection-checklist-uae.jpg"}
                    alt="Inspection checklist for certified used refrigerators — compressor test, thermostat check, door seal, cleaning, repairs; buy certified used fridge UAE"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/inspected-used-fridge-for-sale-dubai.jpg"}
                    alt="Inspected used refrigerator on showroom pedestal with technician performing compressor and thermostat tests — certified used fridge Dubai"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <h3 className="appliance-title">
                Why Buy a Second Hand Fridge from Us?
              </h3>
              <ul className="feature-list">
                <li>
                  <strong>Peace of Mind with a Warranty:</strong> Unlike private
                  sellers on classified sites, we stand by our products. We
                  offer a warranty and a straightforward return policy on every
                  second hand fridge we sell.
                </li>
                <li>
                  <strong>Unbeatable Prices on Top Brands:</strong> Get leading,
                  reliable brands like Samsung, LG, Hisense, and Super General
                  at a fraction of their original retail price.
                </li>
                <li>
                  <strong>See Before You Buy:</strong> Visit our physical store
                  on Al Estiqlal Street in Sharjah to see, touch, and inspect
                  our wide selection of high-quality used appliances UAE.
                </li>
                <li>
                  <strong>Discounted &amp; Professional Delivery:</strong> Our
                  exclusive partnership with Abu Muhammad Movers ensures safe,
                  affordable, and professional delivery to your home, whether
                  you&apos;re in Dubai, Abu Dhabi, or any other Emirate.
                </li>
              </ul>
            </section>

            <section
              className="section sellers-refrigerators"
              id="sellers-refrigerators"
            >
              <h2 className="section-title">
                For Sellers: We Are Top Used Refrigerator Buyers in Dubai &amp;
                UAE
              </h2>
              <p>
                If you have a refrigerator you no longer need, don&apos;t let it
                take up space. Turn it into cash quickly and easily. As one of
                the leading <strong>used refrigerator buyers</strong> in the
                region, we offer a seamless, fair, and incredibly fast selling
                experience.
              </p>

              <h3 className="appliance-title">
                Sell Your Used Fridge in 3 Simple Steps
              </h3>
              <ol className="steps">
                <li>
                  <strong>Get a Fast Quote (5–10 Mins):</strong> Send us photos
                  and basic details via WhatsApp. Our experts assess its value
                  and provide a fair, no-obligation quote in under 10 minutes.
                </li>
                <li>
                  <strong>Agree on the Price &amp; Get Paid:</strong> Once you
                  accept our offer, we arrange immediate payment — cash, online
                  bank deposit, or cheque.
                </li>
                <li>
                  <strong>Hassle-Free Pickup:</strong> Our professional team
                  schedules convenient pickup, handling all logistics for you.
                </li>
              </ol>

              <h3 className="appliance-title">
                Why We&apos;re the Best Buyers of Second Hand Fridges
              </h3>
              <ul className="checklist">
                <li>
                  <strong>Fair &amp; Transparent Pricing:</strong> Honest
                  valuations based on brand, condition, and age — no hidden
                  fees, no haggling.
                </li>
                <li>
                  <strong>We Buy Most Brands &amp; Models:</strong> From
                  single-door units to large side-by-side models and
                  mini-fridges, we accept all types.
                </li>
                <li>
                  <strong>Professional &amp; Registered Company:</strong> Sell
                  securely to an officially registered business with documented
                  transactions — no risks of unreliable freelance buyers.
                </li>
              </ul>
            </section>
            <div className="my-10 grid w-full relative md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/service/sell-used-fridge-fast-dubai.jpg"
                alt="Sell used refrigerator fast in Dubai — get a quote in 5–10 minutes, instant payment and hassle-free pickup by registered buyers"
                fill
                className="object-cover"
              />
            </div>
            <section
              className="section why-choose-fridges"
              id="why-choose-fridges"
            >
              <h2 className="section-title">
                Why Choose Rukun Al Arooba? The Official &amp; Trusted Choice
              </h2>
              <p>
                In a market filled with freelance dealers and anonymous online
                sellers, Rukun Al Arooba stands apart as a pillar of trust and
                quality. We have built our reputation over two decades by
                putting our customers first.
              </p>

              <ul className="feature-list">
                <li>
                  <strong>Official Company, Real Store:</strong> We are a
                  government-registered business with a physical showroom in
                  Sharjah. Visit us, meet our team, and see our commitment to
                  quality.
                </li>
                <li>
                  <strong>20+ Years of Unmatched Experience:</strong> With
                  decades in the UAE market, we know the value and mechanics of
                  used appliances better than anyone.
                </li>
                <li>
                  <strong>Unmatched Service Speed:</strong> Expect a response
                  from our team within 5–10 minutes, whether buying or selling.
                </li>
                <li>
                  <strong>The Complete Solution:</strong> We buy, sell, inspect,
                  repair, provide warranties, and arrange delivery. We are your
                  one-stop shop for used refrigerators and household appliances.
                </li>
              </ul>
            </section>
          </article>
          <ServiceAside />
        </div>
        <Reviews />
        <FAQs Faqs={RefrigeratorFaqs} />
        <CTA
          title="Visit Our Showroom or Get a Quote Today!"
          desc={
            <>
              <p>
                Whether you are looking for an affordable used refrigerator for
                sale or want to get top dirham for your old one, we are your
                trusted partner. Contact us on WhatsApp for a quick quote or
                visit our store in Sharjah to browse our latest collection of
                quality-inspected appliances.
              </p>
            </>
          }
        />
      </main>
    </>
  );
};

export default UsedRefrigeratorPage;
