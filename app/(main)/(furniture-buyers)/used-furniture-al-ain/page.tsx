import { Button } from "@/components/ui/button";
import { APP } from "@/lib/App";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {
  Truck,
  ShoppingCart,
  MapPin,
  CheckCircle,
  Phone,
  MessageCircle,
  Calculator,
  CheckCircle2,
  DollarSign,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { BenefitItem } from "@/components/v2/Services";
import FAQs from "@/components/base/FAQs";
import { AlAinFaqs } from "@/lib/list";
import CTA from "@/components/base/CTA";
import Reviews from "@/components/Reviews";
import LatestsNews from "@/components/LatestsNews";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import Script from "next/script";

const areas = [
  "Al Jimi",
  "Zakher",
  "Tawam",
  "Al Mutarad",
  "Al Hili",
  "Downtown Al Ain",
  "Al Foah",
  "Falaj Hazza",
  "Al Niyadat",
  "Al Qattara",
];

const servicesList: {
  title: string;
  desc: React.ReactNode;
  list: string[];

  link: string;
}[] = [
  {
    title: "Used Bedroom Furniture Al Ain",
    desc: (
      <>
        <p>
          Whether you need a full bedroom setup or individual pieces, we stock
          various brands and styles .
        </p>
        <p>
          Used bedroom furniture al ain buyers find here ranges from modern
          minimalist to traditional ornate designs.
        </p>
      </>
    ),
    list: [
      "Bed frames and complete bed sets (King, Queen, Single sizes)",
      "Wardrobes and closets (various sizes and styles)",
      "Dressing tables with mirrors",
      "Bedside tables and nightstands",
      "Mattresses (thoroughly cleaned and sanitized)",
    ],
    link: "/used-beds-for-sale",
  },
  {
    title: "Living Room Furniture",
    desc: (
      <>
        <p>
          A used sofa set al ain families can use should be clean and
          structurally sound, not saggy or stained.
        </p>
        <p>
          We only sell what we'd use ourselves. This is the standard for second
          hand furniture in al ain we maintain.
        </p>
      </>
    ),
    list: [
      "Sofa sets (fabric and leather, 2-seaters to large sectionals)",
      "Coffee tables (wood, glass, marble)",
      "TV stands and entertainment units",
      "Display cabinets and storage units",
      "Armchairs and recliners",
    ],
    link: "/",
  },
  {
    title: "Dining Room Furniture",
    desc: (
      <>
        <p>
          Looking for a used dining table al ain? We usually have several
          options from compact sets for apartments to large family tables.
        </p>
      </>
    ),
    list: [
      "Dining tables (4-seater to 8-seater)",
      "Dining chairs (matching sets or individual)",
      "Bar stools and counter chairs",
      "Kitchen cabinets and pantries",
      "Serving trolleys and carts",
    ],
    link: "/",
  },
  {
    title: "Office Furniture in Al Ain",
    desc: (
      <>
        <p>
          Used office furniture al ain businesses need doesn't have to look
          worn. We stock professional-quality pieces suitable for home offices
          or commercial spaces.
        </p>
      </>
    ),
    list: [
      "Office desks and workstations",
      "Executive chairs and task chairs",
      "Filing cabinets and storage",
      "Conference tables",
      "Bookcases and shelving",
    ],
    link: "/used-office-furniture-buyers-dubai",
  },
  {
    title: " Home Appliances & Electronics ",
    desc: (
      <>
        <p>
          Used appliances al ain residents buy from us are tested before sale.
          We don't sell broken items hoping buyers won't notice. This is used
          home furniture al ain customers can rely on.
        </p>
      </>
    ),
    list: [
      "Refrigerators (various sizes)",
      "Washing machines (front-load and top-load)",
      "Air conditioners (split and window units)",
      "Microwave ovens",
      "TVs and electronics",
    ],
    link: "/used-home-appliances-dubai",
  },
];

export const metadata = MetadataTemplate({
  data: {
    image: {
      path: "/used-furniture-al-ain.jpg",
      alt: "used furniture in al ain",
    },
    meta: {
      title: "Used Furniture Al Ain | Sell and Buy With Rukun Al Arooba",
      desc: "Buy & sell quality used furniture in Al Ain with warranty. Official registered company since 2018. Fast 5-10 min response. Serving all Al Ain areas. Call now!",
    },
    path: "/used-furniture-al-ain",
  },
});

const HowToBuySection = () => {
  const steps = [
    {
      step: "Step 1",
      title: "Browse our inventory",
      description:
        "Visit our Sharjah showroom or contact us online to see available items.",
    },
    {
      step: "Step 2",
      title: "Select what you want",
      description:
        "We'll provide detailed information about condition, dimensions, and any wear.",
    },
    {
      step: "Step 3",
      title: "Get a condition report",
      description: "We're honest about any flaws or repairs. No surprises.",
    },
    {
      step: "Step 4",
      title: "Choose payment method",
      description: "Cash, transfer, or check – whatever works for you.",
    },
    {
      step: "Step 5",
      title: "Arrange delivery",
      description: "Use our moving partner or arrange your own transport.",
    },
    {
      step: "Step 6",
      title: "Enjoy with warranty",
      description: "Enjoy your purchase with our warranty protection.",
    },
  ];

  return (
    <section className="py-10 mt-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}

            {/* Main Title */}
            <h2 className="text-3xl md:text-4xl font-bold blue leading-tight mb-4">
              How to Buy Used Furniture <br className="md:block hidden" /> from
              Us in Al Ain
            </h2>

            {/* Primary Description */}
            <p className=" text-gray-600 mb-10 leading-relaxed">
              Where to buy used furniture in Al Ain? Right here. The process
              takes less time than shopping at traditional furniture stores, and
              you'll save significantly compared to buying new.
            </p>

            {/* Steps Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-6">
              {steps.map((item, index) => (
                <div key={index} className="flex flex-col group">
                  <div className="flex items-start">
                    {/* Decorative Dot */}
                    <div className="flex-shrink-0 mt-1.5">
                      <div className="relative flex items-center justify-center w-3 h-3">
                        <span className="absolute w-full h-full bg-[#FFF8DF] rounded-full opacity-50 animate-pulse"></span>
                        <span className="relative w-2 h-2 tert-bg rounded-full"></span>
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="ml-4">
                      <h3 className="text-base font-medium headline  transition-colors duration-200">
                        <span className="blue text-xs uppercase tracking-wide block mb-1 opacity-80">
                          {item.step}
                        </span>
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary Description / Footer Note */}
            <div className="mt-10 pt-8 border-t border-[#144e5a]">
              <p className="text-gray-500  italic border-l-4 border-[#144e5a]  pl-4 py-1">
                "If you want to buy second hand furniture Al Ain companies sell,
                this transparent process beats dealing with individual sellers
                or sketchy dealers."
              </p>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="relative order-1 lg:order-2 h-full min-h-[400px] lg:min-h-[600px]">
            <Image
              src={"/used-furniture-buyers-in-al-ain-process.jpg"}
              alt={"used furniture in al ain buying process"}
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(AlAinFaqs));

const AlAinUsedFurniturePage = () => {
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
              {" "}
              Used Furniture Al Ain -
            </span>
            <br className="md:block" />
            Buy & Sell Used Furniture In Al Ain
          </h1>
          <div className="max-w-3xl mx-auto text-center text mt-5">
            <p>
              Looking for reliable used furniture al ain services? Rukun Al
              Arooba Used Furniture is Al Ain's trusted partner for buying and
              selling quality pre-owned furniture. We've been officially
              registered since 2018, but our team brings over 20 years of actual
              experience in the UAE furniture market.
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
            <Link href={"#types-of-furniture-we-buy"}>
              <Button variant={"secondary"} size={"lg"}>
                Furniture We Buy <ArrowUpRight />
              </Button>
            </Link>
          </div>
        </section>

        <section className="mt-20 grid md:grid-cols-2 grid-cols-1 gap-15  max-w-11/12 mx-auto min-h-96 items-center md:px-0 px-3">
          <div
            id="featured-image"
            className="md:h-96 bg-gray-200 rounded-2xl overflow-hidden relative"
          >
            <Image
              src={"/used-furniture-al-ain.jpg"}
              alt="used furniture al ain"
              fill
              loading="eager"
              className="object-cover"
            />
          </div>
          <div className="text md:text-xl text-lg">
            <p>
              Whether you're moving homes, upgrading your space, or simply need
              affordable furniture solutions, we handle everything
              professionally. We serve all Al Ain areas including Al Jimi,
              Zakher, Tawam, and beyond.
            </p>
            <p className="mt-3">
              Our showroom is located on Al Estiqlal Street in Sharjah, and we
              guarantee fair prices, quality products, and hassle-free
              transactions.
            </p>
            <Button
              variant={"outline"}
              size={"lg"}
              className="w-max mt-5 md:text-lg"
            >
              Get Instant Valuation Now <ArrowUpRight />
            </Button>
          </div>
        </section>

        <section className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3">
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
            <span className="border-b-4 border-[#ffdb5e]">
              Why Choose Rukun Al Arooba
            </span>{" "}
            <span className="md:block blue">for Used Furniture in Al Ain?</span>
          </h2>
          <p className="mt-3 text max-w-3xl mx-auto text-center">
            Most used furniture dealers in Al Ain operate casually. We're
            different. Here's what sets us apart.
          </p>
          <div className="w-full py-16 md:px-12 bg-white mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  overflow-hidden">
              {[
                {
                  title:
                    "Official Registered Company with 20+ Years Experience",
                  desc: (
                    <>
                      <p className="mb-2">
                        We're not freelancers or part-time traders. Rukun Al
                        Arooba is officially registered with the UAE Government
                        since 2018. Our team has been working in the furniture
                        business for over 20 years across the Emirates.
                      </p>
                      <p className="mb-2">
                        You can visit our physical showroom at Al Estiqlal
                        Street, Bu Shaghara, Sharjah. We have a real location,
                        real staff, and a real business you can trust.When
                        you're dealing with furniture shops in al ain or looking
                        for a used furniture shop al ain can rely on, this
                        matters.
                      </p>
                      <p className="mb-2">
                        {" "}
                        When you're dealing with furniture shops in al ain or
                        looking for a used furniture shop al ain can rely on,
                        this matters.
                      </p>
                    </>
                  ),
                },
                {
                  title:
                    "Professional Quality Control & Furniture Refurbishment",
                  desc: (
                    <>
                      <p className="mb-2">
                        We don't just buy and resell furniture as-is. Every
                        piece goes through inspection before we purchase it. If
                        we buy your furniture, it means it meets our standards.
                      </p>
                      <p className="mb-2">
                        For items we sell, we provide professional repair and
                        polishing services. Scratches get fixed. Loose joints
                        get reinforced. Upholstery gets cleaned or replaced if
                        needed. We restore furniture to near-original condition.
                      </p>
                      <p className="mb-2">
                        This is quality used furniture al ain residents can
                        actually use, not damaged goods with hidden problems.
                        When you're searching for the best used furniture al ain
                        offers, our quality control process makes the
                        difference.
                      </p>
                    </>
                  ),
                },
                {
                  title: "Warranty & Return Policy – Your Purchase Protected",
                  desc: (
                    <>
                      <p className="mb-2">
                        Most used furniture dealers won't touch warranties. We
                        offer them.
                      </p>
                      <p className="mb-2">
                        Every furniture purchase comes with warranty coverage.
                        If something doesn't work as described, we handle it. We
                        also have an easy return policy if items don't meet your
                        expectations.
                      </p>
                      <p className="mb-2">
                        You get a quality guarantee on every piece, plus
                        post-purchase support. This protection matters when you
                        buy used furniture al ain companies sell, especially for
                        bigger purchases like bedroom sets or appliances.
                      </p>
                    </>
                  ),
                },
                {
                  title: "Lightning-Fast 5-10 Minute Response Time",
                  desc: (
                    <>
                      <p className="mb-2">
                        Contact us via WhatsApp or through our website. You'll
                        get a response within 5-10 minutes, not hours or days.
                      </p>
                      <p className="mb-2">
                        Send photos of furniture you want to sell? We'll give
                        you an instant quote. Have questions about available
                        items? We answer quickly.
                      </p>
                      <p className="mb-2">
                        Same-day service is available in Al Ain for pickups and
                        deliveries. If you're searching for used furniture
                        buyers in al ain who actually respond, you'll appreciate
                        this.
                      </p>
                    </>
                  ),
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start border-l-2 border-[#c07d53] md:p-8 p-5 hover:bg-[#c07d5318] transition"
                >
                  <h3 className="md:text-xl text-lg font-semibold headline mb-2">
                    {feature.title}
                  </h3>
                  <div className="text-sm text leading-relaxed">
                    {feature.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:ml-32 overflow-hidden md:px-0 px-3"
          id="areas-we-cover"
        >
          <div>
            <h3 className="headline  md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                Multiple Payment Options
              </span>{" "}
              <span className="md:block blue">for Your Convenience</span>
            </h3>
            <p className="mt-3 text">
              Choose whatever works best for you. We keep things flexible. When
              you sell used furniture al ain dealers buy, you want options for
              getting paid. We provide them.
            </p>
            <p className="text mt-1">We accept:</p>
            <ul className="mt-5 list-disc list-inside text grid grid-cols-2 gap-x-10">
              <li>Cash payments Bank checks</li>
              <li>Online bank transfers</li>
              <li>Bank checks</li>
            </ul>
            <Button wtsBtn size={"lg"} className="mt-5">
              Sell To Best Buyers in al Ain
            </Button>
          </div>
          <div className="mx-auto md:mt-16 w-full ">
            <div className="md:h-[430px] h-96 md:w-96 w-full relative">
              <Image
                src={"/payment-options.jpg"}
                alt="Multiple Payment Options"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="md:absolute w-full h-full pri-bg -z-10 top-5 md:-top-12 md:-right-12 -right-5 rounded-2xl" />
            </div>
          </div>
        </section>

        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Partnership with Abu Muhammad Movers
          </h3>
          <p className="mt-7 text">
            Furniture is heavy. Moving it is a hassle. We've partnered with Abu
            Muhammad Movers to handle professional furniture pickup and
            delivery.
          </p>
          <p className="mt-2 text">
            The service is affordable. Your furniture gets handled by
            experienced movers, not random guys with a pickup truck. From
            loading to transport to unloading, everything is done safely.
          </p>
          <p className="mt-2 text">
            This complete end-to-end service means you don't need to arrange
            transportation separately. For furniture buyers near me al ain
            residents search for, this integrated service saves time and stress.
          </p>
        </section>

        <section className="relative pt-20 pb-10 px-6 mt-20">
          <div className="bg-pattern -z-10"></div>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl headline md:text-4xl font-bold mb-4">
              Our Used Furniture Services in Al Ain
            </h2>
            <p className="text mb-8 text-lg">
              We handle both sides of the furniture market. Whether you're
              buying or selling, we make the process straightforward.
            </p>
            <Link
              href={`https://wa.me/${APP.phone}?text=I%20Contact%20You%20For%20Used%20Furniture`}
              className="inline-block pri-bg text-white font-medium text-lg py-4 px-8 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
            >
              Contact Us for Used Furniture in Al Ain
            </Link>
          </div>
        </section>

        <section className={`max-w-6xl mx-auto md:px-0 px-3 `}>
          {/* HERO */}

          {/* GRID: Buying + Selling + Service Areas */}
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            {/* BUYING CARD */}
            <article className="rounded-2xl border border-slate-100 shadow-sm p-6 bg-white">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#144e5a]/10 blue">
                  <Truck />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Buying Used Furniture in Al Ain
                </h2>
              </div>

              <p className="mt-4 text-slate-600">
                Want to sell my furniture al ain? We're buyers.
              </p>

              <p className="mt-3 text-slate-600">
                We offer fair market prices based on condition, brand, and
                current demand. The evaluation process is quick. You get instant
                cash offers, and we provide free pickup service throughout Al
                Ain.
              </p>

              <h3 className="mt-5 font-semibold text-slate-800">
                We buy all furniture types:
              </h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 text-sm">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 blue" size={16} /> Bedroom sets
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 blue" size={16} /> Living room
                  furniture
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 blue" size={16} /> Dining room
                  sets
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 blue" size={16} /> Office
                  furniture
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 blue" size={16} /> Home
                  appliances
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 blue" size={16} /> Electronics
                </li>
              </ul>

              <p className="mt-4 text-slate-600">
                Old furniture buyers al ain residents can trust are hard to
                find. We buy items others won't touch, as long as they meet
                basic quality standards.
              </p>

              <div className="mt-6">
                <Link href={"/contact-us"}>
                  <Button variant={"linkBlue"} className="underline">
                    {" "}
                    Get a quick evaluation &rarr;
                  </Button>
                </Link>
              </div>
            </article>

            {/* SELLING CARD */}
            <article className="rounded-2xl border border-slate-100 shadow-sm p-6 bg-white">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-[#c07d53]/10 pri">
                  <ShoppingCart />
                </div>
                <h2 className="text-xl font-semibold text-slate-900">
                  Selling Quality Used Furniture
                </h2>
              </div>

              <p className="mt-4 text-slate-600">
                Looking for second hand furniture in al ain? Check our
                inventory.
              </p>

              <p className="mt-3 text-slate-600">
                We maintain a wide selection of inspected, refurbished
                furniture. Every item has been checked and prepared for sale.
                You're not buying someone's trash.
              </p>

              <h3 className="mt-5 font-semibold text-slate-800">
                Available categories:
              </h3>
              <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-700">
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 pri" size={16} /> Complete
                  bedroom sets and individual pieces
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 pri" size={16} /> Living room
                  furniture (sofas, coffee tables, TV stands)
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 pri" size={16} /> Dining tables
                  and chairs
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 pri" size={16} /> Office desks,
                  chairs, and storage
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <CheckCircle className="mt-1 pri" size={16} /> Home appliances
                  and electronics
                </li>
              </ul>

              <p className="mt-4 text-slate-600">
                All items come with our warranty. This is used furniture for
                sale in al ain that's actually worth buying, not cheap used
                furniture al ain dealers dump at low prices because it's barely
                functional.
              </p>

              <div className="mt-6">
                <Button wtsBtn variant={"link"} className="underline">
                  {" "}
                  Connect Us With WhatsApp
                </Button>
              </div>
            </article>
          </div>

          {/* FOOTER CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-[#144e5a] to-[#144e5a]/50 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-lg font-semibold text-white">
                Ready to buy or sell?
              </h4>
              <p className="mt-1 text-slate-100">
                Instant evaluations, fair prices and free pickup across Al Ain.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="#inventory"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-slate-200 bg-slate-100 text-slate-800"
              >
                Get Best Price for Your Furniture <ArrowUpRight />
              </a>
            </div>
          </div>
        </section>

        <section className="bg-[#144e5a]/75 max-w-5xl mt-36 mx-auto rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-10 left-10 w-24 h-24 border-4 border-slate-500 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-slate-500 rounded-full"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/10 text-amber-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <MapPin className="w-4 h-4" />
              <span>City-Wide Coverage</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Areas We Serve in Al Ain
            </h2>
            <p className="text-slate-100 max-w-2xl mx-auto mb-10">
              No matter where you live in Al Ain, we reach you. From{" "}
              <b>Used Furniture Al Jimi</b> to <b>Used Furniture Zakher</b>, our
              pickup and delivery teams cover the entire city.
            </p>

            <div className="flex flex-wrap justify-center gap-3">
              {areas.map((area, index) => (
                <span
                  key={index}
                  className=" backdrop-blur-sm text-white px-5 py-2.5 rounded-lg border border-white/20 transition-all cursor-default select-none"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <Image
            src={"/used-furniture-buyers-in-al-ain.jpg"}
            alt="used furniture buyers in al ain"
            fill
            className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          />
        </section>
        <Reviews />
        <section className="px-3 md:w-11/12 w-full mx-auto mt-36">
          <div className="max-w-screen-xl mx-auto">
            <div className="grid lg:grid-cols-2 justify-center gap-6 lg:gap-12 max-lg:max-w-3xl max-lg:mx-auto ">
              <div className="">
                <h2 className="blue md:text-4xl text-3xl font-bold !leading-tight ">
                  Complete Range of Used Furniture Available in Al Ain
                </h2>
              </div>

              <div className="max-lg:text-center">
                <p className="text-slate-600 text-base leading-relaxed">
                  Here's what we typically have in stock. Inventory changes
                  regularly, so contact us for current availability.
                </p>

                <div className="mt-8 flex flex-wrap gap-4 max-lg:justify-center">
                  <Button size={"lg"} wtsBtn>
                    WhatsApp Us
                  </Button>
                  <Button size={"lg"} storeBtn variant={"secondary"}>
                    Visit Our Showroom
                  </Button>
                </div>
              </div>
            </div>
            <div className="w-full md:h-96 h-60 mt-12 md:mt-16 relative rounded-3xl overflow-hidden">
              <Image
                src="/used-furniture-collection-al-ain.jpg"
                alt="used furniture collection in al ain"
                fill
                className="absolute object-cover object-bottom"
              />
            </div>
          </div>
        </section>

        <section
          className="md:w-11/12 w-full mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-0 px-3"
          id="furniture-types-we-buy-sell"
        >
          {servicesList.map((service) => (
            <div className="relative" key={service.title}>
              {/* Decorative background blob */}

              <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-100">
                {/* Content */}
                <div className="md:p-8 py-8 px-5">
                  <Link className="" href={service.link}>
                    <h3 className="font-bold md:text-2xl text-xl blue mb-6">
                      {service.title}
                    </h3>
                  </Link>

                  <div className="text-slate-600 mb-8 text-sm leading-relaxed flex gap-y-1 flex-col">
                    {service.desc}
                  </div>

                  <div className="space-y-4 mb-8 bg-slate-50 p-5 rounded-2xl">
                    <ul className="space-y-3">
                      {service.list.map((item, index) => (
                        <BenefitItem key={index} text={item} />
                      ))}
                    </ul>
                  </div>

                  <Link href={service.link} target="_blank">
                    <button className="max-w-sm cursor-pointer py-3.5 px-6 rounded-xl bg-[#FFF8DF] blue font-medium text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                      <span>{`Contact For ${service.title}`}</span>
                      <ChevronRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </section>

        <HowToBuySection />

        <section className="py-10 mt-36 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16 space-y-4">
            <p className="text-sm font-medium tracking-wide pri uppercase">
              Hassle-Free Selling
            </p>
            <h2 className="text-3xl md:text-4xl font-bold blue">
              How to Sell Your Used Furniture in Al Ain
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Selling is even easier. Turn your pre-owned items into cash in
              three simple steps.
            </p>
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-[#414141] -z-10 opacity-30" />

            {/* Step 1: Contact */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 relative hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFF8DF] flex items-center justify-center mb-6 mx-auto border-4 border-white shadow-sm relative z-10">
                <Phone className="w-8 h-8 pri" />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium blue mb-2">
                  Step 1: Contact Us
                </h3>
                <p className="text-slate-600">
                  Reach out instantly to start the process.
                </p>
              </div>
              <ul className="space-y-4 text-left bg-slate-50 p-5 rounded-xl">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full pri bg-[#FFF8DF] font-bold text-xs mt-0.5">
                    1
                  </div>
                  <span className="text-slate-600 text-sm">
                    Call or WhatsApp us directly.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full pri bg-[#FFF8DF] font-bold text-xs mt-0.5">
                    2
                  </div>
                  <span className="text-slate-600 text-sm">
                    Share clear photos of your furniture.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 flex items-center justify-center rounded-full pri bg-[#FFF8DF] font-bold text-xs mt-0.5">
                    3
                  </div>
                  <span className="text-slate-600 text-sm">
                    Tell us basic details (age, brand, condition).
                  </span>
                </li>
              </ul>
            </div>

            {/* Step 2: Quote */}
            <div className="bg-white rounded-2xl shadow-xl border-t-4 border-[#c07d53] p-8 relative hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full p flex items-center justify-center mb-6 mx-auto border-4 border-white shadow-md relative z-10 pri-bg">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium blue mb-2">
                  Step 2: Get Instant Quote
                </h3>
                <p className="text-slate-600">
                  Fair market price within{" "}
                  <span className="font-medium">5-10 minutes</span>.
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-[#FFF8DF] p-4 rounded-xl border border-[#c07d53]/50">
                  <p className="text-sm font-medium blue mb-2 text-center">
                    How we calculate your price:
                  </p>
                  <ul className="space-y-2 text-sm blue mt-3">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 pri" /> Brand and
                      original quality
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 pri" /> Current condition
                      & wear
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 pri" /> Market demand
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 pri" /> Repair costs (if
                      needed)
                    </li>
                  </ul>
                </div>
                <p className="text-xs text-center text-slate-600 italic">
                  Our pricing is transparent. We're not here to lowball you. No
                  obligation to accept.
                </p>
              </div>
            </div>

            {/* Step 3: Pickup */}
            <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8 relative hover:-translate-y-1 transition-transform duration-300">
              <div className="w-16 h-16 rounded-full bg-[#FFF8DF] flex items-center justify-center mb-6 mx-auto border-4 border-white shadow-sm relative z-10">
                <Truck className="w-8 h-8 pri" />
              </div>
              <div className="text-center mb-6">
                <h3 className="text-xl font-medium blue mb-2">
                  Step 3: Pickup & Payment
                </h3>
                <p className="text-slate-600">
                  If you accept our offer, we move fast.
                </p>
              </div>
              <ul className="space-y-4 text-left bg-slate-50 p-5 rounded-xl">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 pri mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">
                    Schedule a convenient pickup time.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 pri mt-0.5 flex-shrink-0" />
                  <span className="text-slate-600 text-sm">
                    Our team comes to you & handles loading.
                  </span>
                </li>
                <li className="flex items-start gap-3 bg-slate-100 p-2 -mx-2 rounded-lg">
                  <DollarSign className="w-5 h-5 blue mt-0.5 flex-shrink-0" />
                  <span className="blue text-sm font-medium">
                    You receive payment immediately (your choice of method).
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Conclusion / CTA Block */}
          <div className="mt-16 bg-gradient-to-br from-[#144e5a] to-[#1e7485] rounded-3xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center justify-center md:justify-start gap-2 tert font-medium mb-2">
                <ShieldCheck className="w-6 h-6" />
                <span>Trusted Local Dealers</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mt-5">
                Where to sell used furniture in{" "}
                <br className="md:block hidden" /> Al Ain without hassle?
              </h3>
              <p className="text-slate-200 md:text-lg leading-relaxed">
                This is it. As used furniture dealers Al Ain trusts, we make
                selling painless. No waiting, no hidden fees, just quick cash
                for your items.
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href={
                  "https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture%20Selling"
                }
              >
                <button className="pri-bg text-white font-medium cursor-pointer py-4 px-8 rounded-xl transition-all duration-300 flex items-center gap-2 group">
                  Start Selling Now
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>
          </div>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl  mx-auto border-b-4 pb-5">
          <h2 className="md:text-4xl text-3xl blue  font-bold border-b-2 border-[#ffdb5e] pb-4">
            Furniture Brands We Buy & Sell in Al Ain
          </h2>
          <p className="mt-7 text">We work with all major brands:</p>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h3 className="headline text-xl font-bold ">Premium Brands</h3>
              <ul className="mt-5 list-disc ml-5 text max-w-2xl">
                <li>
                  IKEA furniture (very popular – we often have IKEA used
                  furniture al ain stock)
                </li>
                <li>
                  Home Centre (Home Centre used furniture al ain sells well)
                </li>
                <li>
                  Pan Emirates (Pan Emirates used furniture al ain is in demand)
                </li>
                <li>Royal Furniture (Royal furniture al ain pieces)</li>{" "}
                <li>The One</li>
                <li>Homes R Us</li>
              </ul>
            </div>
            <div>
              <h3 className="headline text-xl font-bold ">
                All Other Brands Accepted
              </h3>
              <p className="text mt-3">We also buy and sell:</p>
              <ul className="mt-5 list-disc ml-5 text max-w-2xl">
                <li>Local UAE furniture manufacturers</li>
                <li>International brands</li>
                <li>Custom-made pieces</li>
                <li>Vintage and antique furniture</li>
                <li>Modern and contemporary designs</li>
              </ul>
            </div>
          </div>
          <p className="mt-2 text">
            Brand matters for pricing, but we consider all furniture types.
            Quality is what counts.
          </p>
        </section>
        <section className="md:px-0 px-3 mt-20 max-w-4xl mx-auto pb-5">
          <h2 className="md:text-4xl text-3xl blue pb-4 border-b-2 border-[#ffdb5e]  font-bold">
            Used Furniture Buying Guide for Al Ain Residents
          </h2>
          <p className="mt-7 text">
            New to buying pre-owned furniture? Here's what to know.
          </p>
          <h3 className="font-bold md:text-2xl text-xl text mt-7">
            What to Look for When Buying Used Furniture
          </h3>

          <ul className="mt-5 list-disc ml-5 text">
            <li>
              <span className="font-medium">Check structural integrity:</span>{" "}
              Sit on chairs. Open drawers. Test everything. Wobbles, loose
              joints, or sagging indicate problems.
            </li>
            <li>
              <span className="font-medium">Inspect for damage:</span> Look
              closely at surfaces. Minor scratches are fine. Deep gouges, water
              damage, or mold are red flags.
            </li>
            <li>
              <span className="font-medium">Test moving parts:</span> Drawers
              should slide smoothly. Doors should close properly. Recliner
              mechanisms should work.
            </li>
            <li>
              <span className="font-medium">Verify dimensions:</span> Measure
              before buying. That sofa might not fit through your door or in
              your room.
            </li>
            <li>
              <span className="font-medium">Ask about warranty:</span> Always
              confirm coverage and return policies.
            </li>
          </ul>
          <h3 className="font-bold md:text-2xl text-xl text mt-7">
            Benefits of Buying Used Furniture in Al Ain
          </h3>

          <p className="text mt-5">
            You'll save 50-70% compared to new furniture prices. That's
            substantial, especially when furnishing an entire home.
          </p>
          <p className="text mt-3">
            Items are immediately available. No 6-week delivery waits like with
            new furniture orders.
          </p>
          <p className="text mt-3">
            You get quality brands at affordable prices. That Home Centre
            bedroom set you couldn't afford new? Probably available used at half
            price.
          </p>
          <p className="text mt-3">
            It's environmentally responsible. Less manufacturing, less waste,
            less environmental impact.
          </p>
          <p className="text mt-3">
            You might find unique vintage pieces unavailable in regular
            furniture al ain stores.
          </p>
          <h3 className="font-bold md:text-2xl text-xl text mt-7">
            Tips for Selling Your Furniture at the Best Price
          </h3>

          <ul className="mt-5 list-disc ml-5 text">
            <li>
              <span className="font-medium">Clean thoroughly:</span> Dust,
              vacuum, wipe down surfaces. Clean furniture photographs better and
              shows you maintained it.
            </li>
            <li>
              <span className="font-medium">Make minor repairs:</span> Tighten
              loose screws. Touch up small scratches. These small efforts
              increase value.
            </li>
            <li>
              <span className="font-medium">Take clear photos:</span> Good
              lighting, multiple angles, close-ups of any damage. Honest photos
              build trust.
            </li>
            <li>
              <span className="font-medium">
                Provide accurate descriptions:{" "}
              </span>{" "}
              Note the brand, age, dimensions, and condition. Don't hide flaws.
            </li>
            <li>
              <span className="font-medium">Know original values:</span>{" "}
              Research what the item cost new. This helps you price
              realistically.
            </li>
            <li>
              <span className="font-medium">Choose reputable buyers: </span>{" "}
              Dealing with established companies like us means fair prices and
              reliable service.
            </li>
          </ul>
        </section>
        <section
          id="why-choose-us"
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
            <span className="border-b-4 border-[#ffdb5e]">
              Why Al Ain Residents
            </span>{" "}
            <span className="md:block blue">Trust Rukun Al Arooba</span>
          </h2>
          <p className="mt-3 text max-w-3xl mx-auto text-center">
            Trust matters when dealing with used furniture. Here's why customers
            choose us.
          </p>

          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-10">
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Transparent Business
                Practices
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                We provide honest pricing and evaluation. There are no hidden
                fees or surprise charges. Our terms and conditions are clear.
                Being licensed and registered means we're accountable. We're not
                here today, gone tomorrow.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Customer-First
                Approach
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Our fast response times (5-10 minutes) show we value your time.
                We offer flexible scheduling around your availability. Service
                is professional but friendly. We treat your furniture and your
                home with respect. Post-sale support continues after purchase.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Serving All of UAE
                from Sharjah
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Our main showroom is in Sharjah, but we serve everywhere: Abu
                Dhabi, Dubai, Ajman, Ras Al Khaimah, Al Ain (obviously) Other
                Emirates Al Ain to Sharjah is roughly a 90-minute drive if you
                want to visit our showroom. But we also come to you for pickups
                and offer online consultations.
              </p>
            </div>
          </div>
        </section>

        <FAQs Faqs={AlAinFaqs} />
        <CTA
          title="Contact Rukun Al Arooba for Used Furniture in Al Ain"
          desc={
            <>
              <p>
                Ready to buy or sell quality used furniture in Al Ain? Contact
                Rukun Al Arooba today. Get your instant quote within 5-10
                minutes.
              </p>
            </>
          }
        />
        <LatestsNews />
      </main>
    </>
  );
};

export default AlAinUsedFurniturePage;
