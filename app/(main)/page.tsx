import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  ArrowDown,
  ArrowUpRight,
  CheckCircleIcon,
  ClockFadingIcon,
  Medal,
  Phone,
  ShieldCheck,
  UserRoundCheck,
} from "lucide-react";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";
import { HomeFaqs } from "@/lib/list";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import HeroSection from "@/components/base/HeroSection";
import BuySellSection from "@/components/base/BuySellSection";
import CTA from "@/components/base/CTA";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";
import Reviews from "@/components/Reviews";
import LatestsNews from "@/components/LatestsNews";

const servicesList: {
  title: string;
  desc: React.ReactNode;
  list: string[];
  src: string;
  link: string;
}[] = [
  {
    title: "Home Appliance & Electronics",
    desc: (
      <>
        <p>
          Beyond furniture, we&lsquo;re trusted{" "}
          <Link href={"/used-home-appliances-dubai"}>
            used appliance buyers and sellers in Sharjah & Dubai
          </Link>
          .
        </p>
        <p>
          Every electronic item is thoroughly tested, certified for safety, and
          comes with our standard warranty for your peace of mind.
        </p>
      </>
    ),
    list: [
      "Washing machines and dryers",
      "Air conditioners (split & window)",
      "Television sets (LED/Smart)",
      "Kitchen appliances",
      "Home electronics",
    ],
    src: "/appliances.svg",
    link: "/used-home-appliances-dubai",
  },
  {
    title: "Living Room Furniture",
    desc: (
      <>
        <p>
          Transform your living space with our premium collection of used sofa
          sets in Sharjah.
        </p>
        <p>
          From classic Arabic majlis sets to modern L-shaped sectionals, our
          living room furniture combines style with affordability.
        </p>
        <p>
          Each sofa undergoes deep cleaning and reupholstering when needed,
          ensuring you get furniture that&lsquo;s both beautiful and hygienic.
        </p>
      </>
    ),
    list: [
      "Leather and fabric sofa sets",
      "Coffee tables and center tables",
      "TV units and entertainment centers",
      "Display cabinets and shelving units",
      "Recliners and accent chairs",
    ],
    src: "/living-room-furniture.svg",
    link: "#",
  },
  {
    title: "Bedroom Furniture",
    desc: (
      <>
        <p>Create your dream bedroom without breaking the bank.</p>
        <p>
          Our used beds for sale include everything from single beds perfect for
          children&lsquo;s rooms to luxurious king-size sets with matching
          furniture. Every bedroom piece is sanitized and restored to ensure
          peaceful, comfortable sleep.
        </p>
        <p>
          we are also{" "}
          <Link href={"/used-beds-buyers-in-dubai"}>
            buyers of used beds in sharjah, dubai & UAE.
          </Link>
        </p>
      </>
    ),
    list: [
      "Complete bedroom sets",
      "Individual beds (all sizes)",
      "Wardrobes and closets",
      "Dressing tables and mirrors",
      "Bedside tables and chest of drawers",
    ],
    src: "/bedroom-furniture.svg",
    link: "/used-beds-for-sale",
  },
  {
    title: "Kitchen & Dinning",
    desc: (
      <>
        <p>
          Upgrade your kitchen and dining area with our selection of used home
          appliances in Sharjah and dining furniture.
        </p>
        <p>
          From family-sized dining sets to space-saving kitchen solutions, we
          have everything to make your meals more enjoyable.
        </p>
      </>
    ),
    list: [
      "Dining tables (4-12 seaters)",
      "Kitchen cabinets and pantries",
      "Used refrigerators (tested & certified)",
      "Microwave ovens and cooking ranges",
      "Kitchen islands and bar stools",
    ],
    src: "/kitchen-furniture.svg",
    link: "#",
  },
  {
    title: "Office Furniture",
    desc: (
      <>
        <p>
          As a leading used office furniture dealer in Sharjah, we specialize in
          complete office solutions.
        </p>
        <p>
          Whether you&lsquo;re setting up a home office or furnishing an entire
          corporate space, our commercial-grade furniture offers durability and
          professionalism at unbeatable prices.
        </p>
      </>
    ),
    list: [
      "Executive desks and workstations",
      "Ergonomic office chairs",
      "Conference tables and meeting chairs",
      "Filing cabinets and storage",
      "Reception furniture",
    ],
    src: "/office-furniture.svg",
    link: "#",
  },
  {
    title: "Outdoor & Garden Furniture",
    desc: (
      <>
        <p>
          Enjoy Sharjah&lsquo;s beautiful weather with our weather-resistant
          outdoor furniture collection.
        </p>
        <p>
          Each piece is treated for UV protection and restored to withstand the
          UAE climate, perfect for balconies, gardens, and patios.
        </p>
      </>
    ),
    list: [
      "Patio dining sets",
      "Garden benches and swings",
      "Outdoor sofas and loungers",
      "Umbrellas and shade solutions",
      "BBQ tables and accessories",
    ],
    src: "/outdoor-furniture.svg",
    link: "/used-office-furniture-buyers-dubai",
  },
];

const features = [
  {
    title: "Transparent Pricing Explanation",
    description: (
      <>
        <p>
          We don&lsquo;t just throw out a number – we explain how we arrived at
          our valuation.
        </p>
        <p>
          Factors like original brand, current condition, market demand, and
          restoration requirements are clearly communicated, so you understand
          exactly what determines your furniture&lsquo;s value.
        </p>
      </>
    ),
  },
  {
    title: "No Hidden Fees or Commissions",
    description: (
      <>
        <p>The price we quote is the amount you receive.</p>
        <p>
          Unlike online platforms that charge listing fees or take commissions,
          or dealers who deduct &ldquo;pickup charges,&ldquo; our pricing is
          straightforward and honest. When we say 1,000 AED, you receive exactly
          1,000 AED.
        </p>
      </>
    ),
  },
  {
    title: "Free Furniture Assessment",
    description: (
      <>
        <p>
          Not sure if your furniture has value? We provide free assessments with
          no obligation to sell.
        </p>
        <p>
          Our experts can advise whether pieces are worth selling, donating, or
          keeping, helping you make informed decisions about your furniture.
        </p>
      </>
    ),
  },
  {
    title: "Professional Pickup Service",
    description: (
      <>
        <p>
          Through our partnership with Abu Muhammad Movers, we ensure your
          furniture is handled professionally during pickup.
        </p>
        <p>
          No damage to your walls, floors, or remaining furniture – just
          efficient, careful removal by experienced professionals.
        </p>
      </>
    ),
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Furniture in Sharjah | Buy & Sell Second-Hand Furniture",
      desc: "Buy or sell used furniture in Sharjah at Rukun Al Arooba. With 20+ years of trusted service, we offer quality pieces, easy returns, and fast support 5-10 min",
    },
    image: {
      path: "/modern-furniture-showroom-sharjah.jpg",
      alt: "rukun al arooba used furniture in sharjah",
    },
    path: "",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(HomeFaqs));

export default function Home() {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />

      <main>
        <HeroSection />

        <BuySellSection />

        {/* 
              
             
              */}

        <section
          className="max-w-6xl grid md:grid-cols-2 grid-cols-1 gap-16  shadow-2xl rounded-2xl shadow-[#144e5a]/5 mx-auto md:p-10 px-3 mt-36 text relative"
          id="about-company"
        >
          <div
            id="states"
            className="grid grid-cols-2 md:gap-x-5 gap-5 items-center justify-center md:px-12"
          >
            <div className="p-5 rounded-2xl bg-[#f7f7f7] items-center justify-center flex flex-col text-center">
              <h4 className="blue flex gap-x-2 items-center">
                <UserRoundCheck className="size-6" />{" "}
                <span className="md:text-2xl text-xl font-bold">20+</span>
              </h4>
              <p className="mt-2 md:text-base text-sm">Years Experience</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#f7f7f7] items-center justify-center flex flex-col text-center">
              <h4 className="blue flex gap-x-2 items-center">
                <ShieldCheck className="size-6" />{" "}
                <span className="md:text-2xl text-xl font-bold">2018</span>
              </h4>
              <p className="mt-2 md:text-base text-sm">Gov. Register</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#f7f7f7] items-center justify-center flex flex-col text-center">
              <h4 className="blue flex gap-x-2 items-center">
                <ClockFadingIcon className="size-6" />{" "}
                <span className="md:text-2xl text-xl font-bold">5-10</span>
              </h4>
              <p className="mt-2 md:text-base text-sm">Mins Response</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#f7f7f7] items-center justify-center flex flex-col text-center">
              <h4 className="blue flex gap-x-2 items-center">
                <Medal className="size-6" />{" "}
                <span className="md:text-2xl text-xl font-bold">30</span>
              </h4>
              <p className="mt-2 md:text-base text-sm">Days Warranty</p>
            </div>
          </div>
          <div id="content ">
            <p className="text-[15px] mb-2">
              We&lsquo;re located on Al Estiqlal Street in central Sharjah.
              Unlike many online listings, we are a government-registered
              business with a physical showroom
            </p>
            <p className="text-[15px] mb-2">
              Whether you want to buy used furniture in Sharjah at unbeatable
              prices or{" "}
              <Link
                className="underline underline-offset-2"
                href={"/used-furniture-buyers-in-dubai"}
              >
                sell your furniture for instant cash
              </Link>
              , we guarantee a response within 5-10 minutes and same-day service
              for all Sharjah residents.
            </p>
            <p className="text-[15px] mb-2">
              Unlike freelance dealers and online-only platforms, we are
              committed to quality and transparency as{" "}
              <Link
                className="underline underline-offset-2"
                href={"/used-furniture-buyers-in-dubai"}
              >
                second-hand furniture buyers in Sharjah.
              </Link>
            </p>
            <Button className="mt-3" wtsBtn>
              {" "}
              Sell Your Furniture Quickly
            </Button>
          </div>
        </section>

        <section
          id="modern-way-to-buy-and-sell-furniture"
          className="md:w-11/12 w-full mx-auto mt-36 grid md:grid-cols-2 gap-20 items-center md:px-0 px-3"
        >
          <div id="images" className=" relative">
            <div className="w-72 h-60 rounded-2xl border-4 border-white overflow-hidden relative z-10">
              <Image
                src={"/modern-furniture-showroom-sharjah.jpg"}
                alt="modern-furniture-showroom-sharjah"
                fill
                className="object-cover object-center"
              />
            </div>
            <div className="md:w-11/12 w-full h-72 md:ml-16  rounded-2xl overflow-hidden relative -mt-24 z-0">
              <Image
                src={"/used-furniture-store-sharjah-inner-view.jpg"}
                alt="used-furniture-store-sharjah-inner-view"
                fill
                className="object-cover object-center "
              />
            </div>
          </div>
          <div className="" id="content">
            <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                A Modern Way to
              </span>{" "}
              <span className="block blue">
                Buy and Sell Used Furniture <br className="md:block hidden" />{" "}
                in Sharjah
              </span>
            </h2>
            <p className="text mt-5">
              The market for used furniture can be fragmented and difficult to
              navigate, with many companies lacking a trustworthy online
              presence.
            </p>
            <p className="text mt-1">
              At Rukun Al Arooba, we simplify the process by providing a
              professional, end-to-end solution.
            </p>
            <p className="text mt-1">
              Whether you are moving, redecorating, or downsizing, our goal is
              to help you save money without compromising on quality or style.
            </p>
            <div className="mt-5 flex gap-x-3">
              <Link href={"/used-furniture-buyers-in-dubai"}>
                {" "}
                <Button>
                  {" "}
                  Sell To Us <ArrowUpRight />
                </Button>
              </Link>
              <Link href={"/contact-us"}>
                {" "}
                <Button variant={"outline"}>
                  Buy From Us <ArrowUpRight />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section
          id="why-choose-us"
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
            <span className="border-b-4 border-[#ffdb5e]">
              Why Choose Rukun Al Arooba For
            </span>{" "}
            <span className="md:block blue"> Used Furniture in Sharjah!</span>
          </h2>
          <p className="mt-3 text max-w-3xl mx-auto text-center">
            In a market flooded with anonymous online sellers and unregistered
            dealers,{" "}
            <Link className="border-b border-[#ffdb5e]" href={"#"}>
              finding trustworthy used furniture shops in Sharjah
            </Link>{" "}
            can be challenging. Here&lsquo;s what sets us apart from every other
            furniture dealer in the UAE:
          </p>

          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16 mt-20 md:ml-20">
            <div id="register-company">
              <h3 className="md:text-3xl text-2xl font-medium headline">
                Officially Registered Business with Physical Showroom
              </h3>
              <p className="mt-3 text">
                We&lsquo;re not hiding behind a website or WhatsApp number.
                Rukun Al Arooba has been an officially registered company with
                the UAE government since 2018, with our trade license
                prominently displayed in our showroom.
              </p>
              <p className="text">
                Visit us at Al Estiqlal Street, Bu Shaghara, Hay Al Qasimiah,
                where you can browse our extensive collection in person.
              </p>
              <details className="group  rounded-lg mt-5 bg-white ">
                <summary className="pri underline flex justify-start items-center cursor-pointer  font-medium ">
                  read more <ArrowDown size={15} />
                </summary>
                <p className="mt-3 text">
                  This level of transparency is uncommon among furniture dealers
                  in Sharjah. Many do not have proper registration or a physical
                  location, and often just pass customer details to others.
                </p>
                <p className="text">
                  Our used furniture store in Sharjah is open seven days a week,
                  welcoming customers who prefer to see and touch furniture
                  before making a decision.
                </p>
                <p className="text">
                  Having a physical location means you can count on us to be
                  here now and in the future. We&lsquo;re not a pop-up online
                  dealer that could vanish at any time.
                </p>
              </details>
            </div>
            <div>
              <div className="md:w-96 w-full md:h-96 h-80 bg-[#d3936b88] rounded-2xl" />
              <div className="md:w-96 w-11/12 md:h-96 h-80 md:-mt-80 -mt-72 ml-[8.44%] md:ml-16 rounded-2xl relative overflow-hidden">
                <Image
                  src={"/storefront-image.jpg"}
                  alt="Rukun Al Arroba Used Furniture Store in Sharjah Outer View"
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
                  src={"/response-time.jpg"}
                  alt="5-to-10 Minute Response Guarantee"
                  fill
                  className="object-cover object-center "
                />
              </div>
            </div>
            <div id="5-min-response-time" className="order-1 md:order-2">
              <h3 className="md:text-3xl text-2xl font-medium headline">
                5-Minute Response Guarantee
              </h3>
              <p className="mt-3 text">
                Time is valuable, especially when you need to sell used
                furniture in Sharjah quickly. While other dealers might take
                hours or days to respond, we guarantee a response within 5-10
                minutes through WhatsApp or our website
              </p>
              <p className="text">
                Our dedicated valuation team works around the clock to provide
                instant, fair market prices for your furniture.
              </p>
              <details className="group  rounded-lg mt-5 bg-white ">
                <summary className="pri underline flex justify-start items-center cursor-pointer  font-medium ">
                  read more <ArrowDown size={15} />
                </summary>
                <p className="mt-3 text">
                  Our quick response system is not only fast, but also shows
                  that we value your time.
                </p>
                <p className="text">
                  Whether you&lsquo;re moving tomorrow or planning ahead, our
                  same-day service for Sharjah residents means you can sell your
                  furniture and receive cash payment within hours, not days.
                </p>
              </details>
            </div>
          </div>

          <div
            className="max-w-4xl mx-auto mt-20 border-b-4 border-border pb-5"
            id="restoration-process"
          >
            <h3 className="md:text-3xl text-2xl font-medium headline">
              Quality Restoration Process
            </h3>
            <p className="mt-3 text">
              Here&lsquo;s what most second hand furniture dealers won&lsquo;t
              tell you: they buy furniture and resell it exactly as-is, with all
              its scratches, stains, and wobbles.
            </p>
            <p className="text">
              At Rukun Al Arooba, every piece undergoes our comprehensive
              restoration process:
            </p>
            <ol className="mt-5 list-decimal list-inside flex text flex-col gap-1">
              <li className="border-b pb-1 mb-1">
                <span className="font-medium">Detailed Inspection:</span> Each
                item is thoroughly examined for structural integrity and repair
                needs
              </li>
              <li className="border-b pb-1 mb-1">
                <span className="font-medium">Professional Repairs:</span> Our
                skilled craftsmen fix loose joints, replace worn hardware, and
                address any damage.
              </li>
              <li className="border-b pb-1 mb-1">
                <span className="font-medium">Deep Cleaning:</span> Specialized
                cleaning removes years of accumulated dirt and stains.
              </li>
              <li className="border-b pb-1 mb-1">
                <span className="font-medium">Polishing & Refinishing:</span>{" "}
                Wood furniture receives professional polishing, while
                upholstered items are steam-cleaned.
              </li>
              <li>
                <span className="font-medium">Quality Certification:</span> Only
                furniture meeting our &ldquo;like-new&ldquo; standards enters
                our showroom.
              </li>
            </ol>
          </div>
          <div
            className="max-w-4xl mx-auto mt-10 border-b-4 border-border pb-5"
            id="restoration-process"
          >
            <h3 className="md:text-3xl text-2xl font-medium headline">
              Flexible Payment & Delivery Options
            </h3>
            <p className="mt-3 text">
              While most furniture dealers in the UAE operate on a cash-only
              basis, we understand modern customers need options. We accept:
            </p>

            <ol className="mt-5 list-decimal list-inside flex flex-col gap-1">
              <li>Cash payments (instant for sellers)</li>
              <li>Online bank transfers</li>
              <li>Certified bank checks</li>
              <li>Digital wallet payments</li>
            </ol>
            <p className="mt-3 text">
              Through our exclusive partnership with{" "}
              <Link
                className="border-b border-[#ffdb5e]"
                href={"https://abumuhammadmovers.com/"}
              >
                Abu Muhammad Movers
              </Link>
              , we offer professional pickup and delivery services at the best
              rates in Sharjah.
            </p>
            <p className="text">
              This way, your furniture is handled with care, you avoid high
              moving costs, and you only need to deal with one contact for the
              whole process.
            </p>
          </div>
        </section>

        <section
          id="Buy-Used-Furniture-in-Sharjah"
          className="w-full h-[530px] relative mt-36"
        >
          <Image
            src={"/Background-with-text.jpg"}
            alt="Rukun Al Arooba used Furniture printed on wall"
            fill
            className="object-cover object-center"
          />
          <div className="absolute  px-3 top-0 left-0 w-full h-full bg-gradient-to-r from-[#144E5A] to-[#144E5A]/50 flex flex-col items-start justify-center md:px-20">
            <h2 className="text-white md:text-5xl text-3xl font-bold text-shadow-2xs">
              Buy Used Furniture in Sharjah <br className="md:block hidden" /> -
              Extensive Collection
            </h2>
            <p className="mt-5 text-white text-shadow-2xs max-w-2xl md:text-lg">
              Our store and inventory are a one-stop shop for your home needs.
              We buy and sell a diverse range of items at great prices, ensuring
              you find exactly what you&lsquo;re looking for, whether for your
              home or office.
            </p>
            <div className="mt-5 flex gap-x-3">
              <Button wtsBtn size={"lg"}>
                WhatsApp Us
              </Button>
              <Button storeBtn variant={"secondary"} size={"lg"}>
                Visit To Store
              </Button>
            </div>
          </div>
        </section>

        <section
          className="md:w-11/12 w-full mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-10"
          id="furniture-types "
        >
          {servicesList.map((service) => (
            <div
              key={service.title}
              className=" shadow-2xl rounded-2xl shadow-[#144e5a]/5 md:p-10 py-10 px-3 relative overflow-hidden"
            >
              <h3 className="blue md:text-3xl text-[27px] font-bold">
                <Link href={service.link}>{service.title} </Link>
              </h3>
              <div className="mt-5 text text-base/tight flex flex-col gap-y-1">
                {service.desc}
              </div>
              <ul className="mt-5 list-inside list-none font-medium">
                {service.list.map((item) => (
                  <li key={item} className="flex items-center gap-x-2 text">
                    <CheckCircleIcon className="pri" size={17} />{" "}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={service.link}>
                <Button variant={"secondary"} className="mt-5">
                  Contact For {service.title}
                </Button>
              </Link>

              <Image
                src={service.src}
                width={130}
                height={130}
                alt={service.title}
                className="absolute bottom-5 right-5 opacity-30"
              />
              <div className="bg-pattern -z-10"></div>
            </div>
          ))}
        </section>

        <section
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3"
          id="sell-used-furniture"
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold ">
            <span className="border-b-4 border-[#ffdb5e]">
              Sell Your Used Furniture in Sharjah
            </span>{" "}
            <span className="md:block blue">- Best Prices Guaranteed</span>
          </h2>
          <div className="max-w-3xl mt-5  text">
            <p>
              Need to{" "}
              <Link
                href={"used-furniture-buyers-in-sharjah"}
                className="border-b border-[#ffdb5e]"
              >
                sell used furniture in Sharjah
              </Link>{" "}
              quickly and fairly? We&lsquo;ve streamlined the entire process to
              make selling your furniture as easy as sending a message.
            </p>
            <p>
              As professional{" "}
              <Link
                href={"used-furniture-buyers-in-sharjah"}
                className="border-b border-[#ffdb5e]"
              >
                second-hand furniture buyers in Sharjah
              </Link>{" "}
              , we purchase everything from single pieces to complete home
              contents, offering the best prices in the market.
            </p>
          </div>
          <div className="md:w-11/12 w-full grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 mx-auto">
            <div className="relative w-full md:h-auto h-80 overflow-hidden rounded-2xl">
              <Image
                src={"/sell-used-furniture-in-sharjah.jpg"}
                alt="Sell Your Used Furniture in Sharjah"
                fill
                className="object-cover object-center"
              />
            </div>
            <ul className="flex flex-col gap-y-5 list-inside list-none">
              <li className="grid grid-cols-5 md:gap-x-0 gap-x-3border-b-2 border-[#c07d53] pb-5">
                <div className="w-16 h-16 border-2 border-[#c07d53] rounded-full flex items-center justify-center">
                  <Image
                    src={"/contact-us.svg"}
                    width={40}
                    height={40}
                    alt="Contact Us"
                  />
                </div>
                <div className="col-span-4 md:pl-0 pl-4">
                  <h4 className="md:text-2xl text-xl font-medium headline">
                    1. Contact Us
                  </h4>
                  <p className="mt-2 text-sm text">
                    Send photos via WhatsApp or fill out our online form.
                    Include basic details about your furniture&lsquo;s condition
                    and location. Our team reviews submissions immediately
                    during business hours.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-5 md:gap-x-0 gap-x-3border-b-2 border-[#c07d53] pb-5">
                <div className="w-16 h-16 border-2 border-[#c07d53] rounded-full flex items-center justify-center">
                  <Image
                    src={"/instant-valuation.svg"}
                    width={40}
                    height={40}
                    alt="Instant valuation"
                  />
                </div>
                <div className="col-span-4 md:pl-0 pl-4">
                  <h4 className="md:text-2xl text-xl font-medium headline">
                    2. Get Instant Valuation
                  </h4>
                  <p className="mt-2 text-sm text">
                    Receive a fair market price within 5-10 minutes. Our
                    transparent pricing considers brand, condition, age, and
                    current demand. No hidden deductions or surprise fees – the
                    price we quote is what you receive.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-5 md:gap-x-0 gap-x-3">
                <div className="w-16 h-16 border-2 border-[#c07d53] rounded-full flex items-center justify-center">
                  <Image
                    src={"/cash-payment.svg"}
                    width={40}
                    height={40}
                    alt="cash payment"
                  />
                </div>
                <div className="col-span-4 md:pl-0 pl-4">
                  <h4 className="md:text-2xl text-xl font-medium headline">
                    3. Immediate Cash Payment
                  </h4>
                  <p className="mt-2 text-sm text">
                    Accept our offer and get paid instantly upon pickup. Our
                    team handles all the heavy lifting, and you receive cash in
                    hand the moment we collect your furniture. Same-day service
                    available for all Sharjah locations.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section
          id="What-type-furniture-we-buy"
          className="md:w-11/12 w-full mx-auto mt-36 grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:px-0 px-3"
        >
          <div>
            <Link
              href={
                "/used-furniture-buyers-in-sharjah#types-of-furniture-we-buy"
              }
            >
              <h3 className="headline md:text-4xl/tight text-3xl/tight font-bold">
                <span className="border-b-4 border-[#ffdb5e]">
                  What Type Furniture
                </span>{" "}
                <span className="block blue"> We Buy in Sharjah</span>
              </h3>
            </Link>
            <p className="mt-5 text">
              As comprehensive{" "}
              <Link href={"/used-furniture-buyers-in-sharjah"}>
                furniture buyers in Sharjah
              </Link>
              , we purchase almost everything for your home. Don&lsquo;t worry
              about condition – we have in-house restoration capabilities that
              allow us to buy furniture others might reject:
            </p>
            <ul className="mt-5 ml-5 list-disc">
              <li className="text">
                <span className="font-medium">Complete Home Contents</span>:
                Moving abroad? Downsizing? We buy the entire home contents in
                one transaction
              </li>
              <li className="text">
                <span className="font-medium">Individual Pieces</span>: From a
                single chair to a complete bedroom set, no quantity is too small
              </li>
              <li className="text">
                <span className="font-medium">Any Condition Accepted</span>:
                Minor scratches, fading, or wear don&lsquo;t affect our interest
                – we restore everything
              </li>
              <li className="text">
                <span className="font-medium">Office Clearances</span>:Closing
                an office? We handle commercial furniture purchases with
                discretion and speed
              </li>
              <li className="text">
                <span className="font-medium">Estate Sales</span>:Sensitive
                handling of estate furniture with respectful, professional
                service
              </li>
            </ul>
          </div>
          <div className="h-96 relative rounded-2xl w-full">
            <Image
              src={"/what-furniture-we-buy.jpg"}
              alt="What Type Furniture We Buy"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="absolute md:w-[70%] w-11/12 -bottom-10 left-0 right-0 mx-auto bg-white p-5 drop-shadow-2xl rounded-2xl md:h-20">
              <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-3 items-center md:justify-center justify-between w-full gap-x-5">
                <div className="text-[#353535]">
                  <p className=" gap-x-1 font-medium flex items-center">
                    <Phone className="md:size-[18px] size-[15px]" />{" "}
                    <span>Phone No.</span>
                  </p>
                  <p className=" mt-0.5">(055) 6461731</p>
                </div>
                <span className="w-0.5 h-10 bg-gray-300 md:block hidden"></span>
                <div className="flex gap-x-2">
                  <Button wtsBtn size={"sm"} className="">
                    WhatsApp Us
                  </Button>
                  <Button
                    callBtn
                    variant={"secondary"}
                    className=""
                    size={"sm"}
                  >
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-5">
            <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                We Are Best Used Furniture
              </span>{" "}
              <span className="md:block blue">
                {" "}
                Buyers in Sharjah – But How ?
              </span>
            </h2>
            <div>
              <p className="text">
                In a market where many buyers try to undervalue your furniture,
                we stand out through transparency and fairness. Here&lsquo;s why
                thousands of Sharjah residents trust us when they need to sell
                furniture for cash:
              </p>
              <Link href={"/about-us"}>
                {" "}
                <Button className="mt-3">About Us</Button>
              </Link>
            </div>
          </div>
          <div className="w-full py-16 md:px-12 bg-white mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  overflow-hidden">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start border-l-2 border-[#c07d53] md:p-8 p-5 hover:bg-[#c07d5318] transition"
                >
                  <h3 className="text-lg font-semibold headline mb-2">
                    {feature.title}
                  </h3>
                  <div className="text-sm text leading-relaxed">
                    {feature.description}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="mt-36 md:w-11/12 mx-auto w-full md:px-0 px-3">
          <h2 className="font-bold md:text-4xl/tight text-3xl/tight blue">
            <span className="border-b headline border-[#ffdb5e]">
              Service Areas
            </span>{" "}
            – Beyond Sharjah
          </h2>
          <p className="max-w-4xl text mt-5">
            While our showroom is in Sharjah, our services extend across the
            entire UAE. We&lsquo;re your trusted{" "}
            <Link href={"/"}>furniture buyers and sellers</Link>
            wherever you&lsquo;re located:
          </p>
          <div className="mt-20">
            <h3 className="headline text-3xl font-bold text-center border-b-2 border-[#ffdb5e]  max-w-md pb-3 mx-auto">
              We Serve All Emirates
            </h3>
            <div className="mt-10 grid md:grid-cols-11 min-h-96 grid-cols-1 gap-7">
              <div className="col-span-4  md:text-right">
                <div className="border-b-2 border-[#c07d53] pb-5">
                  <Link href={"/used-furniture-buyers-in-sharjah"}>
                    <h3 className="font-bold headline text-lg">
                      Used Furniture Buyers in Sharjah
                    </h3>
                  </Link>{" "}
                  <p className="text mt-2 text-sm ">
                    Our home base with same-day service. Visit our Al Estiqlal
                    Street showroom any day of the week, or request immediate
                    pickup/delivery throughout Sharjah, including Al Nahda, Al
                    Qasimia, Al Majaz, Muwaileh, and all other areas.
                  </p>
                </div>
                <div className="border-b-2 border-[#c07d53] pb-5 mt-5">
                  <h3 className="font-bold headline text-lg">
                    Used Furniture in Abu Dhabi
                  </h3>
                  <p className="text mt-2 text-sm ">
                    - Scheduled pickups and deliveries for the capital. Whether
                    you&lsquo;re in the city center, Yas Island, or Reem Island,
                    we provide professional service for buying and selling
                    second hand furniture in Abu Dhabi.
                  </p>
                </div>
                <div className="border-b-2 border-[#c07d53] pb-5 mt-5">
                  <h3 className="font-bold headline text-lg">
                    Used Furniture in Dubai
                  </h3>
                  <p className="text mt-2 text-sm ">
                    Next-day delivery available for used furniture in Dubai. We
                    serve all areas, including Downtown, Marina, JLT, Business
                    Bay, Deira, and residential communities. Special bulk rates
                    for apartment furnishing.
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
                  <Link href={"/used-furniture-in-ajman"}>
                    <h3 className="font-bold headline text-lg">
                      Used Furniture in Ajman
                    </h3>
                  </Link>
                  <p className="text mt-2 text-sm ">
                    Express service with same-day availability for nearby areas.
                    Our proximity to Ajman means quick response times and
                    competitive prices for{" "}
                    <Link href={"/used-furniture-in-ajman"}>
                      used furniture in Ajman
                    </Link>
                    .
                  </p>
                </div>
                <div className="border-b-2 border-[#c07d53] pb-5 mt-5">
                  <h3 className="font-bold headline text-lg">
                    Used Furniture in Ras Al Khaimah
                  </h3>
                  <p className="text mt-2 text-sm ">
                    Weekly service runs ensure regular availability. Planning
                    ahead? Schedule your furniture pickup or delivery for
                    maximum convenience.
                  </p>
                </div>
                <div className="border-b-2 border-[#c07d53] pb-5 mt-5">
                  <h3 className="font-bold headline text-lg">
                    Used Furniture Al Ain
                  </h3>
                  <p className="text mt-2 text-sm ">
                    By appointment service for the Garden City. We coordinate
                    efficient trips to minimize costs while maintaining our
                    quality service standards.{" "}
                    <b>
                      Plus we provide On-demand service for UAQ residents and
                      scheduled for Fujairah residents.
                    </b>
                    <span>
                      Don&lsquo;t worry about your used furniture needs, we got
                      you cover everywhere in UAE.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="Buy-Used-Furniture-in-Sharjah"
          className="w-full h-[530px] relative mt-36"
        >
          <Image
            src={"/Sustainable-Furniture.jpg"}
            alt="sustainable furniture shopping with rukun al arooba used furniture"
            fill
            className="object-cover object-center"
          />
          <div className="absolute  px-3 top-0 left-0 w-full h-full bg-gradient-to-r from-[#144E5A] to-[#144E5A]/50 flex flex-col items-start justify-center md:px-20">
            <h2 className="text-white md:text-5xl text-3xl font-bold text-shadow-2xs">
              Sustainable Furniture Shopping <br className="md:block hidden" />{" "}
              - Environmental Impact
            </h2>
            <p className="mt-7 text-white text-shadow-2xs max-w-3xl md:text-lg">
              Choose sustainability. Choose second-hand. Choose a better future
              for the UAE.
            </p>
            <p className="mt-2 text-white text-shadow-2xs max-w-3xl md:text-lg">
              At Rukun Al Arooba, we&lsquo;re more than just{" "}
              <Link href={"/"}>used furniture dealers</Link>– we&lsquo;re
              environmental champions. Every piece of furniture we restore and
              resell represents a victory against waste and unnecessary
              consumption.
            </p>
            <div className="mt-7  flex gap-x-3">
              <Button wtsBtn size={"lg"}>
                WhatsApp Us
              </Button>
              <Link href={"/contact-us"}>
                {" "}
                <Button variant={"secondary"} size={"lg"}>
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Reducing Furniture Waste in the UAE
          </h3>
          <p className="mt-7 text">
            The UAE generates thousands of tons of furniture waste annually,
            with perfectly usable pieces ending up in landfills simply because
            they&lsquo;re no longer &ldquo;new.&ldquo;
          </p>
          <p className="mt-2 text">
            When you choose sustainable furniture shopping in Sharjah with us,
            you&lsquo;re actively participating in the solution:
          </p>
          <ul className="mt-5 list-disc ml-5 text">
            <li>
              <span className="font-medium">Landfill Diversion: </span>
              Every restored piece is one less item in our overflowing waste
              facilities.
            </li>
            <li>
              <span className="font-medium"> Carbon Footprint Reduction: </span>
              Buying used furniture eliminates the carbon emissions from
              manufacturing and shipping new pieces.
            </li>
            <li>
              <span className="font-medium"> Resource Conservation: </span>
              Reusing furniture preserves forests, reduces water consumption,
              and minimizes chemical use.
            </li>
            <li>
              <span className="font-medium">Supporting Circular Economy: </span>
              Your purchase keeps money and resources circulating within the UAE
              economy
            </li>
          </ul>
          <p className="mt-2 text">
            Studies show that furniture production is one of the most
            resource-intensive industries globally. By choosing restored,
            quality used furniture, you&lsquo;re making an environmental
            statement without sacrificing style or quality.
          </p>
        </section>

        <section className="md:px-0 px-3 mt-20 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Quality Over Quantity Philosophy
          </h3>
          <p className="mt-7 text">
            Our restoration process doesn&lsquo;t just make furniture look good
            – it extends its lifespan by years, sometimes decades. This
            commitment to quality means:
          </p>

          <ul className="mt-5 list-disc ml-5 text">
            <li>
              <span className="font-medium">
                {" "}
                Extended Furniture Lifespan:{" "}
              </span>
              Professional restoration adds years of use to furniture that might
              otherwise be discarded
            </li>
            <li>
              <span className="font-medium">
                Reduced Demand for New Production:{" "}
              </span>
              Every purchase of used furniture reduces demand for new
              manufacturing
            </li>
            <li>
              <span className="font-medium"> Community Impact: </span>
              Affordable quality furniture helps families furnish homes without
              financial strain
            </li>
            <li>
              <span className="font-medium">Cultural Preservation: </span>
              We restore and preserve traditional Arabic furniture styles that
              might otherwise be lost
            </li>
          </ul>
        </section>

        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h2 className="md:text-4xl text-3xl headline  font-bold">
            Customer Guarantees & Policies
          </h2>
          <p className="mt-7 text">
            Trust is earned through actions, not words. That&lsquo;s why we back
            every transaction with comprehensive guarantees that protect your
            interests:
          </p>
          <h3 className="font-bold text-3xl text mt-7">Warranty & Returns</h3>
          <p className="mt-5 text">
            Every piece of quality used furniture from Rukun Al Arooba comes
            with our exclusive 30-day warranty – a rarity in the secondhand
            market. This warranty covers:
          </p>
          <ul className="mt-5 list-disc ml-5 text">
            <li>Structural integrity of all furniture</li>
            <li>Functionality of moving parts (drawers, doors, mechanisms)</li>
            <li>Electronic components in appliances</li>
            <li>Quality of restoration work performed</li>
          </ul>
          <div className="text mt-5">
            Not satisfied with your purchase? Our hassle-free return policy
            allows you to return furniture within 7 days if it doesn&lsquo;t
            meet your expectations.
          </div>

          <div className="text mt-3">
            We&lsquo;ll either exchange it for something else or provide a full
            refund – your choice. This level of protection is unheard of among
            used furniture shops in Sharjah, where most sales are final.
          </div>
          <h3 className="font-bold text-3xl text mt-7">Transparent Pricing</h3>
          <p className="mt-5 text">
            Our commitment to transparency extends to every aspect of pricing:
          </p>
          <ul className="mt-5 list-disc ml-5 text">
            <li>
              No Hidden Charges:The price on the tag is the price you pay – no
              surprise delivery fees, handling charges, or taxes
            </li>
            <li>
              Price Match Guarantee:Found the same item cheaper elsewhere?
              We&lsquo;ll match any verified price from registered dealers
            </li>
            <li>
              Bulk Purchase Discounts:Furnishing an entire home or office? Enjoy
              graduated discounts based on purchase volume
            </li>
            <li>
              Clear Valuation Criteria:When selling, we explain exactly how we
              calculate our offers
            </li>
          </ul>
        </section>
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
}
