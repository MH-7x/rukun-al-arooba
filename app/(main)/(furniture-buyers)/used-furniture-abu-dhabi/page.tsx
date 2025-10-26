import CTA from "@/components/base/CTA";
import FAQs from "@/components/base/FAQs";
import LatestsNews from "@/components/LatestsNews";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { APP } from "@/lib/App";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { UsedFurnitureFaqsAbuDhabi } from "@/lib/list";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { ArrowRight, CheckCircle, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Furniture Abu Dhabi | Rukun Al Arooba Used Furniture",
      desc: "Rukun Al Arooba Used Furniture Abu Dhabi – 20+ years experience buying & selling quality pre-owned furniture. buy & sell second-hand sofas, beds, dining sets, and more at our Sharjah showroom.",
    },
    image: {
      path: "/furniture/used-furniture-abu-dhabi.jpg",
      alt: "Used Furniture Abu Dhabi",
    },
    path: "/used-furniture-abu-dhabi",
  },
});

const features = [
  {
    title: "20+ Years of Experience",
    desc: "Our deep market knowledge ensures you receive the best prices and service.",
    icon: (
      <>
        <svg
          className="w-10 h-10 mb-2 pri md:w-12 md:h-12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>medal-solid</title>{" "}
            <g id="Layer_2" data-name="Layer 2">
              {" "}
              <g id="invisible_box" data-name="invisible box">
                {" "}
                <path
                  d="M0,0V48H48V0ZM19.9,34.8l.5-3.1-2.1-2a1.1,1.1,0,0,1,.6-1.8l2.9-.4,1.3-2.9a1,1,0,0,1,1.8,0l1.3,2.9,2.9.4a1.1,1.1,0,0,1,.6,1.8l-2.1,2,.5,3.1a1.1,1.1,0,0,1-1.5,1.1L24,34l-2.6,1.9A1.1,1.1,0,0,1,19.9,34.8Z"
                  fill="none"
                ></path>{" "}
              </g>{" "}
              <g id="icons_Q2" data-name="icons Q2">
                {" "}
                <path d="M43.4,4.6a1.9,1.9,0,0,0-2.8,0L30,15.2A15.2,15.2,0,0,0,24.8,14l6.6-6.6a1.9,1.9,0,0,0,0-2.8,1.9,1.9,0,0,0-2.8,0L24.5,8.7,20.4,4.6a1.9,1.9,0,0,0-2.8,0,1.9,1.9,0,0,0,0,2.8l4.1,4.1L18,15.2,7.4,4.6a1.9,1.9,0,0,0-2.8,0,1.9,1.9,0,0,0,0,2.8l9.8,9.8a16,16,0,1,0,19.2,0l9.8-9.8A1.9,1.9,0,0,0,43.4,4.6ZM29.7,29.7l-2.1,2,.5,3.1a1.1,1.1,0,0,1-1.5,1.1L24,34l-2.6,1.9a1.1,1.1,0,0,1-1.5-1.1l.5-3.1-2.1-2a1.1,1.1,0,0,1,.6-1.8l2.9-.4,1.3-2.9a1,1,0,0,1,1.8,0l1.3,2.9,2.9.4A1.1,1.1,0,0,1,29.7,29.7Z"></path>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>{" "}
      </>
    ),
  },
  {
    title: "5,000+ Happy Customers",
    desc: "A proven track record of satisfied clients across the UAE.",
    icon: (
      <>
        <svg
          className="w-10 h-10 mb-2 pri md:w-12 md:h-12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <title>users-solid</title>{" "}
            <path
              className="clr-i-solid clr-i-solid-path-1"
              d="M12,16.14q-.43,0-.87,0a8.67,8.67,0,0,0-6.43,2.52l-.24.28v8.28H8.54v-4.7l.55-.62.25-.29a11,11,0,0,1,4.71-2.86A6.59,6.59,0,0,1,12,16.14Z"
            ></path>
            <path
              className="clr-i-solid clr-i-solid-path-2"
              d="M31.34,18.63a8.67,8.67,0,0,0-6.43-2.52,10.47,10.47,0,0,0-1.09.06,6.59,6.59,0,0,1-2,2.45,10.91,10.91,0,0,1,5,3l.25.28.54.62v4.71h3.94V18.91Z"
            ></path>
            <path
              className="clr-i-solid clr-i-solid-path-3"
              d="M11.1,14.19c.11,0,.2,0,.31,0a6.45,6.45,0,0,1,3.11-6.29,4.09,4.09,0,1,0-3.42,6.33Z"
            ></path>
            <path
              className="clr-i-solid clr-i-solid-path-4"
              d="M24.43,13.44a6.54,6.54,0,0,1,0,.69,4.09,4.09,0,0,0,.58.05h.19A4.09,4.09,0,1,0,21.47,8,6.53,6.53,0,0,1,24.43,13.44Z"
            ></path>
            <circle
              className="clr-i-solid clr-i-solid-path-5"
              cx="17.87"
              cy="13.45"
              r="4.47"
            ></circle>
            <path
              className="clr-i-solid clr-i-solid-path-6"
              d="M18.11,20.3A9.69,9.69,0,0,0,11,23l-.25.28v6.33a1.57,1.57,0,0,0,1.6,1.54H23.84a1.57,1.57,0,0,0,1.6-1.54V23.3L25.2,23A9.58,9.58,0,0,0,18.11,20.3Z"
            ></path>{" "}
            <rect x="0" y="0" width="36" height="36" fillOpacity="0"></rect>{" "}
          </g>
        </svg>{" "}
      </>
    ),
  },
  {
    title: " Registered Company",
    desc: "We are a licensed and credible business with a physical store, unlike many freelance operators.",
    icon: (
      <>
        <svg
          className="w-10 h-10 mb-2 pri md:w-12 md:h-12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 24 24"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M21,15a3,3,0,0,0-3,3v3a3,3,0,0,0,6,0V18A3,3,0,0,0,21,15Zm1,6a1,1,0,0,1-2,0V18a1,1,0,0,1,2,0Z M13,12V7a1,1,0,0,0-2,0v4H8a1,1,0,0,0,0,2h4A1,1,0,0,0,13,12Z M23,2a1,1,0,0,0-1,1V5.374A12,12,0,1,0,7.636,23.182,1.015,1.015,0,0,0,8,23.25a1,1,0,0,0,.364-1.932A10,10,0,1,1,20.636,7H18a1,1,0,0,0,0,2h3a3,3,0,0,0,3-3V3A1,1,0,0,0,23,2Z M15.383,15.076a1,1,0,0,0-1.09.217l-3,3a1,1,0,0,0,1.414,1.414L14,18.414V23a1,1,0,0,0,2,0V16A1,1,0,0,0,15.383,15.076Z"></path>
          </g>
        </svg>
      </>
    ),
  },
  {
    title: "Fast 5-Min Response",
    desc: "Your time is valuable. Contact us and get a quote within minutes.",
    icon: (
      <>
        <svg
          className="w-10 h-10 mb-2 pri md:w-12 md:h-12"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 153.61 166.96"
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
              <g>
                {" "}
                <polygon points="75.1,159.95 75.115,159.938 75.088,159.938 "></polygon>{" "}
                <path d="M71.791,96.415h-0.179l-6.848-7.849c3.31,1.188,6.759,1.906,10.336,1.906c3.581,0,7.024-0.706,10.328-1.9l-6.848,7.843 h-0.167l16.779,40.578l15.332-20.361l17.001,12.787l10.669-16.027c-10.078-12.787-25.952-24.198-44.658-28.938 c13.518-9.097,22.834-27.033,22.834-43.181C116.369,18.478,97.883,0,75.1,0S33.837,18.478,33.837,41.272 c0,16.148,9.307,34.084,22.828,43.181c-32.324,8.199-56.282,36.258-56.282,57.059c0,12.288,37.351,18.426,74.705,18.413 l-20.919-20.91L71.791,96.415z"></path>{" "}
                <path d="M75.115,159.938c10.924-0.013,21.848-0.523,31.828-1.583l-17.269-12.982L75.115,159.938z"></path>{" "}
                <polygon points="152.605,108.63 129.826,142.845 112.381,129.724 102.279,143.138 133.967,166.964 166.58,117.94 "></polygon>{" "}
              </g>{" "}
            </g>{" "}
          </g>
        </svg>
      </>
    ),
  },
];

type Item = {
  title: string;
  subtitle?: string;
  description: string;
  image: string; // replace with your image path
  alt: string;
};

const inventory: Item[] = [
  {
    title: "Sofas & Sectionals",
    subtitle: "Leather & Fabric",
    description:
      "Leather and fabric couches in various sizes and styles, fully cleaned and serviced.",
    image: "/furniture/sofas-sectionals-4x3.jpg",
    alt: "Used leather & fabric sofas for sale in Sharjah, UAE — cleaned and serviced",
  },
  {
    title: "Bedroom Sets",
    subtitle: "Double / Queen",
    description:
      "Double/queen beds, metal and wood frames, plus dressers and wardrobes.",
    image: "/furniture/bedroom-sets-4x3.jpg",
    alt: "Pre-owned double/queen beds, dressers and wardrobes for sale in the UAE",
  },
  {
    title: "Dining & Kitchen",
    subtitle: "Tables & Cabinets",
    description:
      "Table and chair sets, sideboards, and cabinets – ideal for homes and offices.",
    image: "/furniture/dining-kitchen-4x3.jpg",
    alt: "Used dining table and chair sets with sideboards — affordable furniture UAE",
  },
  {
    title: "Outdoor & Patio",
    subtitle: "Seasonal",
    description:
      "Patio lounges and garden furniture in good condition (seasonal collection).",
    image: "/furniture/outdoor-patio-4x3.jpg",
    alt: "Seasonal patio lounge and garden furniture for sale — outdoor furniture UAE",
  },
  {
    title: "Office & Commercial",
    subtitle: "Desks & Storage",
    description:
      "Desks, chairs, and filing cabinets for businesses upgrading their furniture.",
    image: "/furniture/office-commercial-4x3.jpg",
    alt: "Used office desks, ergonomic chairs and filing cabinets — commercial furniture UAE",
  },
  {
    title: "Appliances & Electronics",
    subtitle: "TVs, ACs, Fridges",
    description:
      "TVs, AC units, refrigerators – we handle these items too as part of our extended services.",
    image: "/furniture/appliances-electronics-4x3.jpg",
    alt: "Second-hand TVs, AC units and refrigerators for sale across UAE — tested items",
  },
];

const values = [
  {
    title: "We Guarantee Quality You Can Trust",
    desc: (
      <>
        <p>
          The biggest worry when buying second-hand is quality. We solve that.
          Every item we purchase undergoes a strict inspection.{" "}
        </p>
        <p>
          If needed, we perform necessary repairs and polishing to ensure
          it&lsquo;s in excellent condition before we offer it for sale.
        </p>
      </>
    ),
  },
  {
    title: "A Registered Business, Not a Freelancer",
    desc: (
      <>
        <p>We are an officially registered company with a physical store.</p>
        <p>
          This provides you with security and accountability, knowing you are
          dealing with a professional and stable business, not an unreliable
          online-only operator.
        </p>
      </>
    ),
  },
  {
    title: "Seamless Delivery & Pickup",
    desc: (
      <>
        <p>
          Worried about logistics? Don&lsquo;t be. Through our partnership with
          Abu Muhammad Movers, we ensure a smooth, professional, and affordable
          pickup and delivery process every time.
        </p>
      </>
    ),
  },
  {
    title: "Flexible Payments & Warranty",
    desc: (
      <>
        <p>
          We offer multiple payment methods for your convenience. Furthermore,
          items you purchase from us come with a warranty and an easy return
          policy, giving you complete peace of mind.
        </p>
      </>
    ),
  },
];

const FaqsSchema = generateFAQSchema(
  convertFaqsForSchema(UsedFurnitureFaqsAbuDhabi)
);
const AbuDhabiPage = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="overflow-hidden ">
        <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
          <div className="grid-background" />
          <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center">
            <span className="headline border-b-4 border-[#ffdb5e]">
              Used Furniture Abu Dhabi
            </span>
            <br className="md:block" />– Buy & Sell Pre-Owned Furniture
          </h1>
          <div className="max-w-3xl mx-auto text-center text mt-5">
            <p>
              At Rukun Al Arooba, you’ll find a wide range of second-hand sofas,
              beds, dining sets, office furniture, and more—all at great prices
              you can trust.
            </p>
            <p className="mt-1">
              Buying or selling used furniture in Abu Dhabi is simple with us.
              Just send us a WhatsApp message for a quick quote, or stop by our
              showroom to see our latest selection of gently used furniture and
              electronics.
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
            <Button variant={"secondary"}>
              <Store /> Visit To Showroom{" "}
            </Button>
          </div>
        </section>
        <section className="mt-10 md:w-6xl overflow-hidden mx-auto rounded-2xl relative bg-red-100 h-96">
          <Image
            src={"/furniture/used-furniture-abu-dhabi.jpg"}
            alt="Used Furniture Abu Dhabi - Rukun Al Arooba"
            className="object-cover object-center"
            fill
            loading="eager"
          />
          <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b from-transparent via-white/50 to-white flex items-end justify-center px-32 pb-5">
            <h3 className="text-2xl font-medium text-shadow-2xs underline underline-offset-2 text-center blue">
              Rukun Al Arooba: Abu Dhabi&lsquo;s Trusted Partner for Buying and
              Selling Quality Used Furniture. Fair Prices, a Transparent
              Process, and Exceptional Service Since 2018.
            </h3>
          </div>
        </section>

        <div className="items-center max-w-screen-xl px-3 mt-16 py-8 mx-auto lg:grid lg:grid-cols-4 lg:gap-16 xl:gap-24 lg:pt-24 lg:px-6">
          <div className="col-span-2 mb-8">
            <p className="text-lg font-medium blue">
              Trusted in Abu Dhabi and Beyond
            </p>
            <h2 className="mt-3 mb-4 text-3xl font-extrabold tracking-tight headline">
              Your Trusted Furniture Partner in Abu Dhabi for Over 20 Years
            </h2>
            <p className="text text-lg">
              Although we officially registered in 2018, our team brings over 20
              years of experience in the UAE furniture market. We’re more than
              just a listing—we’re dedicated professionals focused on quality
              and customer satisfaction.
            </p>
          </div>
          <div className="col-span-2 space-y-8 md:grid md:grid-cols-2 md:gap-12 md:space-y-0">
            {features.map((feature, index) => (
              <div key={index}>
                {feature.icon}
                <h3 className="mb-2 text-xl font-bold dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <section
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3"
          id="sell-used-furniture"
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold ">
            <span className="border-b-4 border-[#ffdb5e]">
              Selling Your Furniture
            </span>{" "}
            <span className="md:block blue">- is Easy as 1 2 3</span>
          </h2>
          <div className="max-w-3xl mt-5  text">
            <p>
              We’ve streamlined our process to be the fastest and most
              convenient in Abu Dhabi. You can go from a photo to cash in hand
              without any hassle.
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
                    Step 1: Get a Free, Instant Quote
                  </h4>
                  <p className="mt-2 text-sm text">
                    Simply send us clear photos of your furniture and any
                    relevant details on WhatsApp. Our experts will assess your
                    items and provide a fair, no-obligation price within
                    minutes.
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
                    Step 2: Schedule Your Free Pickup
                  </h4>
                  <p className="mt-2 text-sm text">
                    Once you accept our offer, we’ll work with you to schedule a
                    convenient pickup time. Our professional service covers all
                    of Abu Dhabi, and we come directly to your location at no
                    charge.
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
                    Step 3: We Collect & Pay You on the Spot
                  </h4>
                  <p className="mt-2 text-sm text">
                    Our team will arrive on time to carefully collect your
                    furniture. You’ll receive your full payment instantly—via
                    cash, bank transfer, or your preferred method—before we
                    leave. It&lsquo;s that simple.{" "}
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h2 className="md:text-4xl text-3xl headline  font-bold">
            What We Buy & Sell: A Wide Range of Used Furniture in Abu Dhabi
          </h2>
          <p className="mt-7 text">
            Our used furniture collection in Abu Dhabi covers all home and
            office needs. We have a wide selection of pre-owned sofas and living
            room sets, from stylish sectional couches to cozy recliners.
          </p>
          <p className="mt-2 text">
            In the bedroom category, find beds, mattress sets, wardrobes, and
            dressers – everything furnished and ready for your home.
          </p>
          <p className="mt-2 text">
            Our inventory also includes dining tables and chairs, coffee tables,
            storage cabinets, and even office desks and chairs.
          </p>
          <p className="mt-2 text">
            (We also buy electronics like TVs, fridges, and kitchen appliances.)
            All items are refurbished, quality-checked, and offered at a
            fraction of the cost of new furniture. New arrivals hit our floor
            daily, so you can always find something special.
          </p>
        </section>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-36">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-extrabold  headline leading-tight">
                Featured Inventory Highlights
              </h2>
              <p className="mt-2 text max-w-xl">
                Quality pre-owned items — professionally cleaned, inspected, and
                ready for a new home. Click any item to view details.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {inventory.map((item, i) => (
              <article
                key={i}
                className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer"
                role="button"
                tabIndex={0}
              >
                <div className="relative h-44 sm:h-48 lg:h-56 bg-gray-100">
                  {/* Image placeholder: replace src with your image path */}
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="w-full h-full object-cover object-center"
                  />

                  <div className="absolute left-3 top-3 inline-flex items-center px-3 py-1 rounded-full bg-white/80 backdrop-blur text-sm font-medium">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 mr-1 text-gray-700"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7v10M21 7v10M7 7h10M7 17h10"
                      />
                    </svg>
                    {item.subtitle}
                  </div>
                </div>

                <div className="p-5 sm:p-6">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center justify-between">
                    <div className="text-sm text-gray-500">In stock</div>
                    <Button wtsBtn variant={"outline"} size={"sm"}>
                      {" "}
                      Enquiry <ArrowRight />{" "}
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section
          id="why-choose-us"
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
            <span className="border-b-4 border-[#ffdb5e]">
              Our Comprehensive
            </span>{" "}
            <span className="md:block blue">Used Furniture Services</span>
          </h2>
          <p className="mt-3 text max-w-3xl mx-auto text-center">
            Our expertise goes beyond simply buying and selling. We offer a full
            spectrum of services to cover the entire furniture lifecycle,
            establishing us as a true authority in the field.
          </p>

          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-10">
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Furniture Buying
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                We purchase all types of second-hand home and office furniture.
                Whether it’s a sofa, office cubicles, or shop fittings, we give
                fair quotes and pick up for free anywhere in Abu Dhabi.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Furniture Selling
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Looking to furnish on a budget? Choose from our vast stock of
                refurbished pre-owned furniture at affordable prices. Everything
                is inspected and ready for use.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" />
                Appliance & Electronics Buying
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                We also deal in used electronics (televisions, kitchen
                appliances, computers, etc.). If you have old electronics, we
                offer cash for them too.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Free Pickup & Delivery
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Through our partner Abu Muhammad Movers, we provide free
                professional moving services. This means safe packing,
                transport, and delivery of your items, with insurance covered.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Showroom Visits
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Our physical showroom in Sharjah allows you to see and try items
                before buying. We also have a comfortable office to discuss
                deals.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Quick Quotes & Contact
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                For any inquiry or quote, a WhatsApp message works best. Send us
                a message with details, and our team will respond quickly.
              </p>
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-y-2 text max-w-4xl mx-auto text-center">
            <p>
              Our friendly staff are happy to guide you through any process. For
              a fast quote, just send a WhatsApp to {APP.phone} (available
              9am–8pm). We aim to provide fast, same-day responses.
            </p>
          </div>
        </section>
        <section className="relative py-20 px-6 mt-20">
          <div className="bg-pattern -z-10"></div>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl headline  font-bold mb-4">
              Leaving Abu Dhabi? We Make <br className="md:block hidden" />{" "}
              Selling Your Furniture Easy
            </h2>
            <p className="text mb-2">
              We specialize in providing a quick and efficient solution for the
              expatriate community.
            </p>
            <p className="text mb-8">
              If you&lsquo;re relocating, we can purchase all your furniture in
              one simple transaction, offering a fair bulk price and
              coordinating pickup around your schedule. It’s the most convenient
              way to handle your move.
            </p>
            <Link
              href={`https://wa.me/${APP.phone}?text=I%20Contact%20You%20For%20Used%20Furniture`}
              className="inline-block pri-bg text-white font-medium text-lg py-4 px-8 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
            >
              Send Photos on WhatsApp
            </Link>
          </div>
        </section>
        <div className="pri-bg text-gray-100 text-center py-6 px-6">
          <p>
            We{" "}
            <Link href={"/used-furniture-abu-dhabi"}>
              buy used furniture in Abu Dhabi
            </Link>{" "}
            — bedroom sets, sofas, office furniture, appliances, villa contents
            and more.
          </p>
          <p className="mt-1">
            Fast pickup, fair prices, and instant payment across the city.
          </p>
        </div>
        <section
          className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:ml-32 overflow-hidden md:px-0 px-3"
          id="areas-we-cover"
        >
          <div>
            <h2 className="headline  md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                Proudly Serving All
              </span>{" "}
              <span className="md:block blue">
                Communities Across Abu Dhabi
              </span>
            </h2>
            <p className="mt-3 text">
              Our team is ready to come to you, no matter where you are in the
              emirate. We offer our fast and free pickup service across all
              major residential areas, ensuring we are the most convenient.
            </p>
            <p className="text mt-1">
              used furniture service &quot;near me&quot;.
            </p>
            <ul className="mt-5 list-disc list-inside text grid grid-cols-2 gap-x-10">
              <li>Mussafah (M37, M39, M40)</li>
              <li>Khalifa City</li>
              <li className="mt-2">Yas Island</li>
              <li className="mt-2">Al Reem Island</li>
              <li className="mt-2">Baniyas</li>
              <li className="mt-2">Al Mafraq</li>
              <li className="mt-2">Mohamed Bin Zayed City (MBZ)</li>
              <li className="mt-2">Saadiyat Island</li>
              <li className="mt-2">Al Raha</li>
            </ul>
            <Button wtsBtn size={"lg"} className="mt-5">
              Sell To Best Buyers in Abu Dhabi
            </Button>
          </div>
          <div className="mx-auto md:mt-16 w-full ">
            <div className="md:h-[430px] h-96 md:w-96 w-full relative">
              <Image
                src={"/furniture/used-furniture-buyers-in-uae.jpg"}
                alt="Used Furniture Buyers in UAE"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="md:absolute w-full h-full pri-bg -z-10 top-5 md:-top-12 md:-right-12 -right-5 rounded-2xl" />
            </div>
          </div>
        </section>
        <section className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3">
          <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-5">
            <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                Why Choose Rukun Al Arooba?
              </span>{" "}
              <span className="md:block blue">In Abu Dhabi Market</span>
            </h2>
            <div>
              <p className="text">
                In a market with a clear &quot;reliability gap&quot; , we stand
                apart by building our business on a foundation of trust and
                professionalism.
              </p>
              <Link href={"/about-us"}>
                {" "}
                <Button className="mt-3">About Us</Button>
              </Link>
            </div>
          </div>
          <div className="w-full py-16 md:px-12 bg-white mt-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  overflow-hidden">
              {values.map((feature, index) => (
                <div
                  key={index}
                  className="flex flex-col items-start justify-start border-l-2 border-[#c07d53] md:p-8 p-5 hover:bg-[#c07d5318] transition"
                >
                  <h3 className="text-lg font-semibold headline mb-2">
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
        <Reviews />
        <FAQs Faqs={UsedFurnitureFaqsAbuDhabi} />
        <CTA
          title="Ready to Buy or Sell? Get Your Free Quote Today!"
          desc={
            <>
              <p>
                Join hundreds of satisfied customers who have made Rukun Al
                Arooba their first choice for used furniture in Abu Dhabi.
                Whether you have a single item or a house full of furniture, we
                are ready to help. Contact us now for a fast, friendly, and fair
                deal.
              </p>
            </>
          }
        />
      </main>
      <LatestsNews />
    </>
  );
};

export default AbuDhabiPage;
