import CTA from "@/components/base/CTA";
import FAQs from "@/components/base/FAQs";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { APP } from "@/lib/App";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { ajmanFaqs } from "@/lib/list";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { ArrowDown, ArrowUpRight, ListChecks, Navigation } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Furniture in Ajman | Buy & Sell Quality Second Hand Items",
      desc: "Buy & sell used furniture in Ajman with over 20 years of trusted experience. Quality refurbished items, warranty, free delivery quotes & multiple payment options.",
    },
    image: {
      path: "/abu-shagara-used-furniture-market.jpg",
      alt: "Used Furniture in Ajman",
    },
    path: "/used-furniture-in-ajman",
  },
});

const galleryList = [
  "/gallery/7-used-furniture-ajman.jpg",
  "/gallery/8-used-furniture.jpg",
  "/gallery/9-used-furniture.jpg",
  "/gallery/11-used-furniture.jpg",
  "/gallery/12-used-furniture.jpg",
  "/gallery/used-furniture-4.jpg",
];

const sections = [
  {
    id: "what-type",
    title: "What Type of Used Furniture Do We Buy in Ajman",
  },
  { id: "used-bedroom", title: "Used bedroom furniture buyer in Ajman" },
  { id: "used-bed", title: "Used bed buyers in Ajman" },
  { id: "used-wardrobe", title: "Used wardrobe buyers in Ajman" },
  { id: "used-sofa", title: "Used sofa buyers in Ajman" },
  { id: "used-dining", title: "Used dining table buyers in Ajman" },
  { id: "used-appliances", title: "Used appliances buyers in Ajman" },
  { id: "used-household", title: "Used Household items buyers in Ajman" },
  { id: "used-fridge", title: "Used refrigerators buyers in Ajman" },
  { id: "used-washing", title: "Used washing machine buyers in Ajman" },
  { id: "used-office", title: "Used office furniture buyers in Ajman" },
];
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(ajmanFaqs));
const page = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="overflow-hidden">
        <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
          <div className="grid-background" />
          <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center">
            <span className="headline border-b-4 border-[#ffdb5e]">
              Buy & Sell Used Furniture in Ajman
            </span>
            <br className="md:block" />- Rukun Al Arooba
          </h1>
          <div className="max-w-3xl mx-auto text-center text mt-5">
            <p>
              Looking for reliable used furniture buyers in Dubai to sell your
              Seeking high-quality used furniture in Ajman? Whether you&apos;re
              furnishing a new home, upgrading your office, or selling furniture
              you no longer need, Rukun Al Arooba Used Furniture has been the
              trusted choice for thousands of customers across the UAE for over
              20 years.
            </p>
          </div>
          <div className="flex gap-x-4 mt-5">
            <Button wtsBtn size={"lg"}>
              {" "}
              <svg
                fill="#ffffff"
                version="1.1"
                viewBox="0 0 30.667 30.667"
                xmlSpace="preserve"
                stroke="#ffffff"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g>
                    {" "}
                    <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path>{" "}
                  </g>{" "}
                </g>
              </svg>{" "}
              WhatsApp Us{" "}
            </Button>
            <Link href={"#furniture-buyers-in-ajman"}>
              <Button variant={"secondary"} size={"lg"}>
                Furniture We Buy <ArrowUpRight />
              </Button>
            </Link>
          </div>
          <p className="mt-5 border-l-2 border-gray-600 pl-3 italic text-sm text max-w-3xl mx-auto">
            We are trusted buyers and sellers of used furniture serving all
            areas of Ajman with professional delivery, quality guarantees, and
            the best prices in the Ajman used furniture market.
          </p>
        </section>
        <section className="mt-36 md:w-11/12 mx-auto w-full md:px-0 px-3">
          <h2 className="font-bold md:text-4xl/tight text-3xl/tight blue">
            Buy Quality Used Furniture in Ajman
            <span className="border-b headline border-[#ffdb5e] md:block w-max">
              {" "}
              - Extensive Selection Available
            </span>{" "}
          </h2>
          <p className="max-w-4xl text mt-5">
            Looking for quality used furniture in ajman to level-up your style
            without losing bank balance, welcome to Rukun Al Arooba where we
            provide affordable and quality furniture & appliance in ajman used
            furniture market.
          </p>
          <div className="mt-20">
            <div className="mt-10 grid md:grid-cols-11 min-h-96 grid-cols-1 gap-7">
              <div className="col-span-4  md:text-right">
                <div className="border-b-2 border-[#c07d53] pb-5">
                  <h3 className="font-bold headline text-2xl">
                    Wide Range of Premium Second-Hand Furniture
                  </h3>

                  <p className="text mt-2  ">
                    Our constantly updated inventory includes everything needed
                    to furnish homes and offices throughout Ajman.
                  </p>
                  <p className="text mt-2  ">
                    From luxury bedroom sets to functional office furniture, we
                    maintain one of the most diverse selections in the UAE.
                    Whether you&apos;re upgrading your home or office, Rukun Al
                    Arooba is your trusted partner for high-quality used
                    furniture in Ajman.
                  </p>
                  <p className="text mt-2  ">
                    Our used office furniture Ajman collection features
                    executive desks, ergonomic chairs, filing systems, and
                    conference tables from renowned brands, all refurbished to
                    professional standards.
                  </p>
                </div>
              </div>
              <div className="md:col-span-3 col-span-4 md:h-auto h-80 relative rounded-2xl overflow-hidden">
                <Image
                  src={"/UAE-map.jpg"}
                  alt="UAE Map"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="col-span-4">
                <div className="border-b-2 border-[#c07d53] pb-5">
                  <h3 className="font-bold headline text-2xl">
                    Flexible Payment and Delivery Solutions
                  </h3>
                  <p className="text mt-2  ">
                    We accept cash, online bank transfers, and bank checks,
                    making large purchases convenient and secure. This
                    flexibility is especially important for businesses and
                    families making significant furniture investments.
                  </p>
                  <p className="text mt-2  ">
                    Our partnership with Abu Muhammad Movers solves another
                    major industry problem. we provide complete door-to-door
                    service throughout Ajman.
                  </p>
                  <p className="text mt-2  ">
                    Installation services are available for complex items, and
                    our competitive delivery rates to areas like Al Nuaimiya, Al
                    Rashidiya, and Emirates City make quality furniture
                    accessible to everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="our-used-furniture gallery"
          className="md:w-11/12 mx-auto mt-36 md:px-0 px-3 grid md:grid-cols-3 grid-cols-1 gap-5"
        >
          {galleryList.map((src, i) => (
            <div key={i} className="h-80 relative rounded-2xl overflow-hidden">
              <Image
                src={src}
                alt={`Used Furniture in Ajman Gallery - ${i + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </section>
        <section className=" mt-36 md:w-11/12 w-full mx-auto md:px-0 px-3 grid md:grid-cols-2  items-center">
          <div className="  md:ml-16">
            <span className="px-3 py-2 bg-[#c07d5329] font-medium pri rounded-2xl text-sm">
              Sell Your Furnitutre
            </span>
            <h2 className="headline md:text-3xl/tight text-2xl/tight font-bold mt-5">
              <span className="border-b-4 border-[#ffdb5e]">
                Selling Furniture?
              </span>{" "}
              <span className=" blue">
                We Are Best Used Furniture Buyers in Ajman
              </span>
            </h2>
            <h3 className="md:text-lg headline mt-5 font-medium border-l-4 border-[#144E5A]  pl-3">
              Simple, Fast, and Fair Selling Process
            </h3>
            <p className="text mt-5">
              We serve all Ajman areas, including Al Jurf, Al Hamidiyah, Al
              Rawda, and Ajman Downtown, with same-day or next-day collection
              available. Payment is immediate upon pickup - no waiting for
              checks to clear or buyers to appear.
            </p>
            <div className="flex mt-5 gap-x-3">
              <Link href={"/contact-us"}>
                {" "}
                <Button size={"lg"} className="">
                  <ListChecks /> Get a Free Quote
                </Button>
              </Link>
              <Link href={"https://share.google/0vX3fDlwXKNcIwIG3"}>
                {" "}
                <Button size={"lg"} variant={"link"}>
                  <Navigation /> Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
          <div className=" h-96 md:w-96 w-full relative md:mx-auto">
            <Image
              src={"/sell-furniture.svg"}
              alt="Used Furniture Buyers in Ajman"
              fill
              loading="eager"
              className="object-cover md:ml-10"
            />
          </div>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Why Professional Dealers Beat Online Marketplaces
          </h3>
          <p className="mt-7 text">
            Posting on Dubizzle or Facebook Marketplace might seem easy, but the
            reality is often frustrating
          </p>
          <p className="mt-3 text">
            You&apos;ll field dozens of messages from time-wasters, negotiate
            endlessly with bargain hunters, and coordinate pickup logistics
            yourself.
          </p>
          <p className="mt-3 text">
            Worse, you&apos;re exposed to strangers visiting your home without
            any security guarantees.
          </p>
          <p className="mt-3 text">
            Working with Rukun Al Arooba eliminates these concerns. We provide
            immediate cash payment at agreed prices, professional removal
            services that won&apos;t damage your property, and complete
            transactions in hours rather than weeks.
          </p>
          <p className="mt-3 text">
            For those relocating or downsizing quickly, our bulk purchase
            options for entire room or home contents provide maximum convenience
            with minimal effort.
          </p>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            We buy all types of Used Furniture and Appliances.
          </h3>
          <p className="mt-7 text">
            If you want to sell your used furniture and appliances in Ajman, we
            make the process simple and rewarding.
          </p>
          <p className="mt-3 text">
            Our hassle-free approach guarantees the best value for your items.
            Whether you’re selling office furniture or updating your home décor,
            we cover all categories and needs.
          </p>
        </section>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-36">
          <header className="mb-8">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
              Used Furniture Buyers — Ajman
            </h2>
            <p className="mt-2 text-gray-600 max-w-3xl">
              We buy high-quality used furniture and household items across
              Ajman. Fast quotes, fair prices, and professional pickup — perfect
              if you’re clearing space, upgrading, or moving.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-16">
            {/* Table of contents */}
            <nav
              aria-label="Table of contents"
              className="lg:col-span-3 lg:sticky lg:top-20 lg:self-start"
            >
              {/* Desktop / large screens: vertical sticky sidebar */}
              <div className="block p-6 bg-white border border-gray-100 rounded-2xl shadow-sm max-h-[calc(100vh-5rem)] overflow-y-auto">
                <h2 className="text-sm font-semibold text-gray-700">
                  Contents
                </h2>
                <ol className="mt-4 space-y-2 text-sm text-gray-600">
                  {sections.map((s) => (
                    <li key={s.id}>
                      <a
                        href={`#${s.id}`}
                        className="block py-2 px-3 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                      >
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ol>
                <a
                  href="#contact"
                  className="mt-6 inline-block w-full text-center py-2 px-4 pri-bg text-white rounded-lg font-medium shadow"
                >
                  Contact Us
                </a>
              </div>

              {/* Mobile / small screens: fixed horizontal chips (visible while scrolling) */}
            </nav>

            {/* Content */}
            <div className="lg:col-span-9 space-y-8">
              <section
                id="what-type"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-2xl font-semibold text-gray-900">
                  What Type of Used Furniture Do We Buy in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We purchase a wide range of used furniture and household items
                  from across Ajman. Whether you’re selling a single item or
                  clearing an entire house, we provide fair offers and
                  professional pickup. Below you will find specific details for
                  each furniture category so you can quickly see how we can
                  help.
                </p>
              </section>

              <section
                id="used-bedroom"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used bedroom furniture buyer in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  These include wardrobe, mirrors, bed, bookcase, nightstand,
                  coat racks, chairs or sofas, and much more. If you are trying
                  to find a complete bedroom set, and Used Furniture Buyers in
                  Ajman. You will be able to contact us, and we have many things
                  for you to choose from to achieve the most effective look for
                  your bedroom.
                </p>
              </section>

              <section
                id="used-bed"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used bed buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  When moving to a new home, it’s natural to want a fresh
                  start—and your bed is often at the top of the list for an
                  upgrade. If your old bed is causing discomfort, making noises,
                  or simply no longer suits your needs, it’s time to let it go.
                  Contact us, and our team will promptly visit, assess your bed,
                  and offer you the best possible price.
                </p>
              </section>

              <section
                id="used-wardrobe"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used wardrobe buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Moving to a new home often means you want a fresh start — and
                  that usually starts with the wardrobe. If you’re selling a
                  used wardrobe in Ajman, we offer fast, transparent quotes and
                  convenient pickup. We evaluate conditions honestly and pay
                  fair market prices so you can clear space without the stress.
                </p>
              </section>

              <section
                id="used-sofa"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used sofa buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Sofas are a central piece in many Arab homes and they deserve
                  a proper replacement when the time comes. We buy used sofas
                  and beds across Ajman — from single-seaters to full
                  living-room sets — offering competitive, reasonable prices and
                  pickup that fits your schedule.
                </p>
              </section>

              <section
                id="used-dining"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used dining table buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Dining tables are one of the more expensive furniture items,
                  and many people sell them when upgrading. Sellers in Ajman
                  choose us because we give clear, fair offers and handle
                  collection professionally, making the whole process simple and
                  worry-free.
                </p>
              </section>

              <section
                id="used-appliances"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used appliances buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  Looking to sell used appliances in Ajman? We provide a quick,
                  easy, and professional service with fair pricing based on
                  condition and market value. While there are many
                  used-furniture shops, our reliable inspection process and
                  transparent offers make us a preferred choice.
                </p>
              </section>

              <section
                id="used-household"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used Household items buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We buy all types of household items — appliances, furniture,
                  crockery, décor, and other usable home goods. We accept
                  high-quality items from across Ajman, ensure careful cleaning
                  or refurbishment when needed, and aim to deliver a smooth,
                  respectful experience for every client.
                </p>
              </section>

              <section
                id="used-fridge"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used refrigerators buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  If you need to free up space or replace an old fridge, we buy
                  used refrigerators in Ajman at competitive prices. Our team
                  offers fair compensation, quick assessments, and prompt
                  collection so you can reclaim your space without hassle.
                </p>
              </section>

              <section
                id="used-washing"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used washing machine buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  We purchase used washing machines in Ajman and send
                  technicians to inspect the unit’s specifications and
                  performance onsite. After a short evaluation we offer a fair
                  price that reflects the machine’s condition and functionality
                  — reasonable and customer-friendly.
                </p>
              </section>

              <section
                id="used-office"
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-semibold text-gray-900">
                  Used office furniture buyers in Ajman
                </h3>
                <p className="mt-3 text-gray-700 leading-relaxed">
                  For office clear-outs or furniture upgrades, we’re your go-to
                  buyers for used office furniture in Ajman. We handle
                  disassembly, removal, and bulk purchases — ideal if you’re
                  replacing an entire office or simply need space fast.
                </p>
              </section>

              {/* Contact CTA */}
              <div
                id="contact"
                className="bg-gradient-to-r from-indigo-50 to-white p-6 rounded-2xl border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-lg font-semibold">Ready to sell?</h4>
                    <p className="text-gray-600 mt-1">
                      Contact us for a quick quote and pickup.
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`tel:${APP.phone}`}
                      className="inline-flex items-center justify-center px-5 py-2 rounded-lg blue-bg text-white font-medium shadow"
                    >
                      Call Now
                    </a>
                    <a
                      href="/contact-us"
                      className="inline-flex items-center justify-center px-5 py-2 rounded-lg border border-gray-200 bg-white text-gray-800 font-medium"
                    >
                      Request Quote
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section
          id="why-choose-us"
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
            <span className="border-b-4 border-[#ffdb5e]">
              Why Choose Rukun Al Arooba For
            </span>{" "}
            <span className="md:block blue"> Used Furniture in Ajman!</span>
          </h2>
          <p className="mt-3 text max-w-3xl mx-auto text-center">
            In a market flooded with anonymous online sellers and unregistered
            dealers,{" "}
            <Link className="border-b border-[#ffdb5e]" href={"#"}>
              finding trustworthy used furniture dealer in ajman
            </Link>{" "}
            can be challenging. Here&lsquo;s what sets us apart from every other
            furniture dealer in the UAE:
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16 mt-20 md:ml-20">
            <div id="register-company">
              <h3 className="md:text-3xl text-2xl font-medium headline">
                20+ Years of Excellence in Ajman&apos;s Furniture Market
              </h3>
              <p className="mt-3 text">
                Since 2004, we&apos;ve built our reputation on trust, quality,
                and exceptional service. While we officially registered our
                business in 2018, our two decades of experience in the
                UAE&apos;s used furniture trade gives us unmatched expertise in
                valuation, refurbishment, and customer satisfaction.
              </p>
              <p className="text">
                Our physical showroom on Al Estiqlal Street in Sharjah
                isn&apos;t just a warehouse - it&apos;s a carefully curated
                space where every item meets our strict quality standards.
              </p>
              <details className="group  rounded-lg mt-5 bg-white ">
                <summary className="pri underline flex justify-start items-center cursor-pointer  font-medium ">
                  read more <ArrowDown size={15} />
                </summary>
                <p className="mt-3 text">
                  Many online furniture dealers in the ajman furniture market
                  operate as middlemen, simply forwarding your WhatsApp messages
                  to other companies.
                </p>
                <p className="text">
                  We&apos;re different. When you contact us, you&apos;re dealing
                  directly with the actual furniture specialists who will handle
                  your transaction from start to finish.
                </p>
                <p className="text">
                  Our government registration and established business presence
                  mean you&apos;re protected by consumer rights and can visit us
                  anytime to see our inventory in person.
                </p>
              </details>
            </div>
            <div>
              <div className="md:w-96 w-full md:h-96 h-80 bg-[#d3936b88] rounded-2xl" />
              <div className="md:w-96 w-11/12 md:h-96 h-80 md:-mt-80 -mt-72 ml-[8.44%] md:ml-16 rounded-2xl relative overflow-hidden">
                <Image
                  src={"/furniture/old-furniture-in-ajman.jpg"}
                  alt="old furniture in ajman"
                  fill
                  className="object-cover object-center "
                />
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16 md:mt-10 mt-16 md:ml-20">
            <div className="order-2 md:order-1">
              <div className="md:w-96 w-full md:h-96 h-80 bg-[#144e5a88] rounded-2xl" />
              <div className="md:w-96 w-11/12 md:h-96 h-80 md:-mt-80 -mt-72 ml-[8.44%] md:ml-16 rounded-2xl relative overflow-hidden">
                <Image
                  src={"/furniture/warranty-on-used-furniture.jpg"}
                  alt="warranty on used furniture in ajman"
                  fill
                  className="object-cover object-center "
                />
              </div>
            </div>
            <div id="5-min-response-time" className="order-1 md:order-2">
              <h3 className="md:text-3xl text-2xl font-medium headline">
                Our Unique Quality Guarantee Process
              </h3>
              <p className="mt-3 text">
                The biggest concern when buying second hand furniture Ajman is
                quality and condition. We&apos;ve solved this problem through
                our comprehensive refurbishment process.
              </p>
              <p className="text">
                When we acquire furniture, our expert team performs detailed
                inspections for structural integrity, functionality, and
                aesthetic appeal. Any necessary repairs are completed using
                professional-grade materials and techniques.
              </p>
              <details className="group  rounded-lg mt-5 bg-white ">
                <summary className="pri underline flex justify-start items-center cursor-pointer  font-medium ">
                  read more <ArrowDown size={15} />
                </summary>
                <p className="mt-3 text">
                  Finally, each piece undergoes thorough cleaning and polishing,
                  transforming used items into furniture that looks and feels
                  nearly new.
                </p>
                <p className="text">
                  This commitment to quality extends to our customer protection
                  policies. We&apos;re the only used furniture dealer in Ajman
                  offering a genuine warranty on purchases.
                </p>
                <p className="text">
                  If any item doesn&apos;t meet your expectations, our
                  straightforward return policy ensures your satisfaction. This
                  level of protection is unheard of in the second-hand market
                  and demonstrates our confidence in the quality we deliver.
                </p>
              </details>
            </div>
          </div>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h2 className="md:text-4xl text-3xl headline  font-bold">
            Ajman Furniture Market - Complete Coverage and Local Expertise
          </h2>
          <h3 className="my-5 text-2xl font-bold text">
            Comprehensive Service Throughout Ajman
          </h3>
          <p className="mt-7 text">
            Our strategic location in Sharjah provides easy access to all Ajman
            neighborhoods. We&apos;ve developed efficient delivery routes
            covering Al Zahra to Al Jurf, ensuring prompt service regardless of
            your location.
          </p>
          <p className="mt-3 text">
            This local knowledge means accurate delivery timeframes and
            competitive pricing tailored to each area&apos;s accessibility.
          </p>
          <p className="mt-3 text">
            Understanding Ajman&apos;s diverse population, we cater to various
            furniture needs and budgets. From affordable options for bachelor
            accommodations to premium pieces for family villas, our inventory
            reflects the community&apos;s requirements.
          </p>
          <p className="mt-3 text">
            We also specialize in commercial furniture solutions for
            Ajman&apos;s growing business sector, providing offices,
            restaurants, and retail spaces with quality furnishings at fraction
            of new prices.
          </p>
        </section>
        <Reviews />
        <FAQs Faqs={ajmanFaqs} />
        <CTA
          title="Ready to Transform Your Home? Contact Us Today!"
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
    </>
  );
};

export default page;
