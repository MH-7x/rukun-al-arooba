import ServiceAside from "@/components/base/ServiceAside";
import ServiceHero from "@/components/base/ServiceHero";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import "../styling.css";
import FAQs from "@/components/base/FAQs";
import { OfficeFurnitureBuyersFaqs } from "@/lib/list";
import CTA from "@/components/base/CTA";
import Image from "next/image";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";
import Reviews from "@/components/Reviews";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Office Furniture Buyers in Dubai | Top Cash Prices",
      desc: "Selling used office furniture in Dubai? Rukun Al Arooba offers top cash prices for desks, chairs, & workstations. Get a free, fast quote in 5-10 mins. contact us now!",
    },
    image: {
      path: "/service/used-home-appliances-dubai.jpg",
      alt: "rukun al arooba used home appliances dubai",
    },
    path: "/used-office-furniture-buyers-dubai",
  },
});
const FaqsSchema = generateFAQSchema(
  convertFaqsForSchema(OfficeFurnitureBuyersFaqs)
);
const page = () => {
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
            one: "Used Office Furniture Buyers in Dubai",
            two: "Get the Best Price Today!",
          }}
          img={{
            src: "/service/used-home-appliances-dubai.jpg",
            alt: "Used Home Appliances Dubai",
          }}
          desc="Are you upgrading, relocating, or liquidating your office space in Dubai? Don't let your valuable assets go to waste. Rukun Al Arooba Furniture are leading used office furniture buyers in Dubai, providing a professional, swift, and profitable way to sell your pre-owned items."
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 min-h-[500px] mt-20 md:w-11/12 mx-auto">
          <article className="md:col-span-2 col-span-1 md:order-2 order-1 service-article">
            {/* === Used Office Furniture Buyers section - paste inside your article element === */}
            <section
              className="section what-we-buy-office"
              id="what-we-buy-office"
            >
              <h2 className="section-title">
                What Types of Used Office Furniture Do We Buy?
              </h2>
              <p>
                We purchase a comprehensive range of office furniture in good
                condition, from single high-end items to complete office
                liquidations. If you have quality furniture, we are interested
                in buying it.
              </p>

              <ul className="checklist">
                <li>
                  <strong>Office Desks and Workstations:</strong> executive
                  desks, L-shaped desks, computer tables, height-adjustable
                  standing desks, cubicle systems, and modular workstations.
                </li>
                <li>
                  <strong>Ergonomic Chairs and Seating:</strong> ergonomic task
                  chairs, executive leather chairs, mesh-back chairs, visitor
                  chairs, and conference room seating sets.
                </li>
                <li>
                  <strong>Conference &amp; Meeting Room Furniture:</strong>{" "}
                  boardroom tables, modular meeting tables, credenzas, and
                  presentation boards.
                </li>
                <li>
                  <strong>Storage Solutions &amp; Cabinets:</strong> vertical
                  and lateral filing cabinets, mobile pedestals, cupboards,
                  bookshelves, and secure storage lockers.
                </li>
                <li>
                  <strong>Reception Area Furniture:</strong> reception desks,
                  sofas, armchairs, coffee tables, and waiting area furniture.
                </li>
                <li>
                  <strong>Office Electronics and Equipment:</strong> breakroom
                  refrigerators, monitors, and other essential office
                  appliances.
                </li>
              </ul>
            </section>
            <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
              <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                <Image
                  src={"/service/hero-office-furniture-buyers-dubai.jpg"}
                  alt="Modern office interior with executive desks, standing desks and ergonomic chairs — sell used office furniture in Dubai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                <Image
                  src={"/service/rukun-hero-office-furniture-buyers-dubai.jpg"}
                  alt="Rukun Al Arooba — modern office interior with desks and ergonomic chairs; sell used office furniture in Dubai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <section
              className="section why-choose-office"
              id="why-choose-office"
            >
              <h2 className="section-title">
                Why Choose Rukun Al Arooba to Sell Your Office Furniture in
                Dubai?
              </h2>
              <p>
                In a crowded market, choosing the right buyer is crucial. You
                need a partner who is reliable, fast, and offers fair value.
                Rukun Al Arooba is not just another buyer; we are a
                professional, customer-centric company dedicated to providing an
                unparalleled selling experience. Here’s what sets us apart.
              </p>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Top Cash Offers &amp; Instant Quotes
                </h3>
                <p>
                  Your time is valuable. That’s why we’ve streamlined our
                  valuation process. We provide the best possible price for your
                  furniture based on its condition and current market value.
                  Simply contact us on WhatsApp with photos of your items, and
                  our experts will provide a free, transparent quote within{" "}
                  <strong>5–10 minutes</strong>. We offer top cash for used
                  office furniture in Dubai, ensuring you get the best return on
                  your assets.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  An Officially Registered Company You Can Trust
                </h3>
                <p>
                  Peace of mind is priceless. Unlike many freelance operators
                  and anonymous websites, Rukun Al Arooba is an officially
                  registered company with the UAE government, established in
                  2018. With over 20 years of experience in the furniture
                  trading industry and a physical store on Al Estiqlal Street in
                  Sharjah, you can be confident you are dealing with a credible
                  and reliable business.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Professional Pickup &amp; Logistics Across the UAE
                </h3>
                <p>
                  Worried about the logistics of moving bulky furniture? We’ve
                  got it covered. Through our exclusive partnership with{" "}
                  <strong>Abu Muhammad Movers</strong>, we provide a seamless,
                  professional, and discounted pickup service from your
                  location. We handle all the heavy lifting, ensuring a smooth
                  and efficient office furniture disposal process, whether
                  you&lsquo;re in Dubai, Sharjah, or anywhere in the UAE.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Flexible &amp; Secure Payment Options
                </h3>
                <p>
                  We believe in convenience and security. Once we agree on a
                  price, you choose how you want to get paid. We offer a range
                  of flexible payment methods to suit your needs, including
                  instant cash, a secure online bank deposit, or an official
                  company check.
                </p>
              </div>
            </section>
            <div className="my-10 grid w-full relative md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/service/sell-furniture-3-steps-infographic-uae.jpg"
                alt="Rukun Al Arooba — 3-step process: send photos, get free quote fast, schedule pickup and receive instant payment"
                fill
                className="object-cover"
              />
            </div>
            <section className="section process-office" id="process-office">
              <h2 className="section-title">
                Our Hassle-Free Buying Process: Sell Your Furniture in 3 Easy
                Steps
              </h2>

              <ol className="steps">
                <li>
                  <strong>Step 1: Contact Us &amp; Share Details</strong> — Send
                  us clear photos and a brief description of your furniture via
                  WhatsApp or our website contact form. Include the quantity of
                  items and your location in Dubai.
                </li>
                <li>
                  <strong>
                    Step 2: Receive Your Free, No-Obligation Quote
                  </strong>{" "}
                  — Our expert evaluation team will immediately review your
                  items. You will receive our best cash offer directly on
                  WhatsApp within just <strong>5–10 minutes</strong>.
                </li>
                <li>
                  <strong>
                    Step 3: Schedule Pickup &amp; Get Paid Instantly
                  </strong>{" "}
                  — Once you accept our offer, we’ll coordinate with you and our
                  moving partners to schedule a pickup time that is convenient
                  for you. You get paid on the spot via your chosen payment
                  method. It’s that simple.
                </li>
              </ol>
            </section>

            <section
              className="section service-area-office"
              id="service-area-office"
            >
              <h2 className="section-title">
                Serving Dubai and All Across the UAE
              </h2>
              <p>
                While we are renowned as the go-to{" "}
                <strong>used office furniture buyers in Dubai</strong>, our
                professional services extend across the entire nation. Our
                logistics teams are fully equipped to handle pickups from any
                Emirate, including Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah,
                and Al Ain. No matter where your office is located, we bring our
                trusted service to your doorstep.
              </p>
            </section>
          </article>
          <ServiceAside />
        </div>
        <Reviews />
        <FAQs Faqs={OfficeFurnitureBuyersFaqs} />
        <CTA
          title="Ready to Sell Your Used Office Furniture in Dubai?"
          desc={
            <>
              <p>
                Turn your unwanted office furniture into immediate cash today.
                Don&lsquo;t settle for less—partner with Dubai&lsquo;s most
                trusted and efficient used furniture buyers. Our team is waiting
                to give you the best offer on the market.
              </p>
            </>
          }
        />
      </main>
    </>
  );
};

export default page;
