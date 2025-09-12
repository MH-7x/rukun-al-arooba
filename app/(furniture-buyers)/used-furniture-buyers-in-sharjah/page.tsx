import CTA from "@/components/base/CTA";
import FAQs from "@/components/base/FAQs";
import { Button } from "@/components/ui/button";
import { SharjahBuyersFaqs } from "@/lib/list";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  AlarmCheck,
  ArrowUpRight,
  CheckCheckIcon,
  CheckCircle,
  HandCoins,
  ImagePlay,
  LucideDollarSign,
  Medal,
  ShieldCheck,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { JSX } from "react";

const HomeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
    />
  </svg>
);

const OfficeIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const ApplianceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
    />
  </svg>
);

const SpecialtyIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-white"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 3v4M3 5h4M6 17v4m-2-2h4M17 3v4m2-2h-4m2 15h4m-2-2v4M12 9a3 3 0 100-6 3 3 0 000 6zM12 15a3 3 0 100-6 3 3 0 000 6zM12 21a3 3 0 100-6 3 3 0 000 6z"
    />
  </svg>
);

// Data structure for the different categories to keep the code clean and scalable.
const categories = [
  {
    title: "Home Furniture Buyers",
    icon: <HomeIcon />,
    description:
      "We buy bedroom, living, dining and decorative pieces — in any condition. Ideal for quick cash or clearing space.",
    items: [
      "**Bedroom:** complete sets, beds, mattresses, wardrobes, dressing tables.",
      "**Sofas & Seating:** leather sectionals, fabric couches, majlis furniture.",
      "**Dining & Storage:** dining sets, chairs, buffets, china cabinets.",
      "**Living Room:** entertainment centres, coffee tables, side tables & decorative pieces.",
    ],
  },
  {
    title: "Office Furniture Buyers",
    icon: <OfficeIcon />,
    description:
      "We handle single-item purchases and entire office clearances — fast, professional and priced competitively.",
    items: [
      "**Desks & Chairs:** executive desks & ergonomic chairs.",
      "**Storage:** filing systems, cabinets & storage units.",
      "**Meeting:** conference tables & reception furniture.",
      "**Workstations:** cubicle systems & full office clearouts.",
    ],
  },
  {
    title: "Home Appliances & Electronics Buyers",
    icon: <ApplianceIcon />,
    description:
      "We buy working appliances and electronics — from kitchen gear to entertainment systems.",
    items: [
      "**Appliances:** washing machines, dryers, dishwashers, kitchen appliances.",
      "**Refrigerators:** mini-fridges to large family units & commercial freezers.",
      "**Electronics:** TVs, sound systems, gaming consoles, home theatre equipment.",
      "**Comfort Systems:** air conditioning units, water heaters and more.",
    ],
  },
  {
    title: "Specialty Items Buyers",
    icon: <SpecialtyIcon />,
    description:
      "Large lots, estates and villa contents — we offer tailored pricing and logistics for big or luxury collections.",
    items: [
      "**Full-Home Purchases:** ideal for relocation or estate clearance.",
      "**Villa Furniture:** high-end & luxury pieces priced appropriately.",
      "**Outdoor & Kitchen:** garden sets, patio furniture, kitchen cabinets & built-ins.",
      "**Scale:** No lot is too large or too small for us to consider.",
    ],
  },
];

// Reusable Card Component
const CategoryCard = ({
  title,
  icon,
  description,
  items,
}: {
  title: string;
  icon: JSX.Element;
  description: string;
  items: string[];
}) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
    <div className="p-6">
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex-shrink-0 pri-bg rounded-full p-3">{icon}</div>
        <h3 className="text-2xl font-bold blue">{title}</h3>
      </div>
      <p className="text mb-5">{description}</p>
      <ul className="space-y-3 text-gray-700">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <svg
              className="h-5 w-5 pri mr-2 mt-1 flex-shrink-0"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span
              dangerouslySetInnerHTML={{
                __html: item.replace(
                  /\*\*(.*?)\*\*/g,
                  '<strong class="font-semibold text">$1</strong>'
                ),
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export const metadata = MetadataTemplate({
  data: {
    image: {
      path: "/used-furniture-buyers-in-sharjah.jpg",
      alt: "rukun al arooba used furniture in sharjah",
    },
    meta: {
      title:
        "Used Furniture Buyers in Sharjah – Rukun Al Arooba Used Furniture",
      desc: "Rukun Al Arooba is the best used furniture buyers in Sharjah, offering instant cash for furniture. Contact us and get a response within 5-10 minutes.",
    },
    path: "/used-furniture-buyers-in-sharjah",
  },
});

const page = () => {
  return (
    <main className="overflow-hidden">
      <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
        <div className="grid-background" />
        <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center">
          <span className="headline border-b-4 border-[#ffdb5e]">
            {" "}
            Used Furniture Buyers in Sharjah -
          </span>
          <br className="md:block" />
          Get Best Price in 10 Minutes
        </h1>
        <div className="max-w-3xl mx-auto text-center text mt-5">
          <p>
            Looking for reliable used furniture buyers in Sharjah? Rukun Al
            Arooba has been the trusted choice for thousands of residents since
            2018, offering the best prices for your pre-owned furniture with
            instant valuation and same-day pickup.
          </p>
        </div>
        <div className="flex gap-x-4 mt-5">
          <Button size={"lg"}>
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
      <section className="w-full grid md:grid-cols-2 grid-cols-1 items-center mt-20 gap-16">
        <div className="text md:pl-16 md:text-lg flex flex-col gap-y-3 md:px-0 px-3">
          <p>
            As a government-registered furniture buyer with a physical showroom
            on Al Estiqlal Street, Bu Shaghara, we&apos;ve built our reputation
            on transparency, fair pricing, and exceptional service over 20+
            years in Sharjah&apos;s furniture market.
          </p>
          <p>
            Our team responds within minutes (5–10) on phone/WhatsApp and offers
            free same-day pickup via our moving partner.
          </p>
          <p>
            We accept multiple payment methods (cash, bank transfer, or check)
            and guarantee the quality of every item we purchase.
          </p>
          <Button variant={"outline"} size={"lg"} className="w-max mt-3">
            Get Instant Valuation Now <ArrowUpRight />
          </Button>
        </div>
        <div className="md:h-[450px] h-[400px] bg-gray-300 relative md:ml-16">
          <Image
            src={"/storefront-image.jpg"}
            alt="Used Furniture Buyers in Sharjah"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <section className="mt-36 md:w-11/12 mx-auto flex items-center justify-center flex-wrap md:gap-10 gap-5">
        <div className="flex items-center justify-center gap-x-2 md:px-5 px-3 py-1.5 rounded-2xl border border-[#c07d53] bg-white shadow-md shadow-[#c07d53]/20">
          <ShieldCheck size={30} strokeWidth={1.3} className="pri" />
          <h4 className="headline md:text-lg font-medium">Licensed & Local </h4>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:px-5 px-3 py-1.5 rounded-2xl border border-[#c07d53] bg-white shadow-md shadow-[#c07d53]/20">
          <Medal size={30} strokeWidth={1.3} className="pri" />
          <h4 className="headline md:text-lg font-medium">
            20+ Years of Expertise{" "}
          </h4>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:px-5 px-3 py-1.5 rounded-2xl border border-[#c07d53] bg-white shadow-md shadow-[#c07d53]/20">
          <AlarmCheck size={30} strokeWidth={1.3} className="pri" />
          <h4 className="headline md:text-lg font-medium">Fast Response</h4>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:px-5 px-3 py-1.5 rounded-2xl border border-[#c07d53] bg-white shadow-md shadow-[#c07d53]/20">
          <AlarmCheck size={30} strokeWidth={1.3} className="pri" />
          <h4 className="headline md:text-lg font-medium">Free Pickup</h4>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:px-5 px-3 py-1.5 rounded-2xl border border-[#c07d53] bg-white shadow-md shadow-[#c07d53]/20">
          <HandCoins size={30} strokeWidth={1.3} className="pri" />
          <h4 className="headline md:text-lg font-medium">Quick Payment</h4>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:px-5 px-3 py-1.5 rounded-2xl border border-[#c07d53] bg-white shadow-md shadow-[#c07d53]/20">
          <CheckCheckIcon size={30} strokeWidth={1.3} className="pri" />
          <h4 className="headline md:text-lg font-medium">Quality Guarantee</h4>
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-3xl mx-auto ">
        <h2 className="mb-16 text-3xl font-bold lg:text-4xl headline">
          How to Sell Used Furniture in Sharjah{" "}
          <br className="md:block hidden" /> - 4 Simple Steps
        </h2>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c07d53]">
                <ImagePlay className="pri" />
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl font-bold blue ">
              Step 1: Send Photos via WhatsApp{" "}
            </h3>
            <p className="text">
              Take 3–6 photos (front, back, sides, close-ups of damage) and
              message them with dimensions to our WhatsApp.
            </p>
            <i className="text text-sm">
              faster, accurate quotes and fewer follow-ups.
            </i>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c07d53]">
                <HandCoins className="pri" />
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl font-bold blue ">
              Step 2: Receive Instant Valuation{" "}
            </h3>
            <p className="text">
              We evaluate condition, demand, and market rates and send a firm
              offer via WhatsApp.
            </p>
            <i className="text">
              transparent, no hidden fees — what we quote is what you’ll get.
            </i>
          </div>
        </div>
        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c07d53]">
                <Truck className="pri" />
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl font-bold blue ">
              Step 3: Schedule Free Pickup{" "}
            </h3>
            <p className="text">
              Accept the offer and choose a convenient pickup time (same-day or
              next available). Our trained movers handle disassembly and
              loading.
            </p>
            <i className="text">
              stress-free removal with professional handling (partner: Abu
              Muhammad Movers).
            </i>
          </div>
        </div>

        <div className="flex">
          <div className="mr-4 flex flex-col items-center">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c07d53]">
                <LucideDollarSign className="pri" />
              </div>
            </div>
            <div className="h-full w-px bg-gray-300 "></div>
          </div>
          <div className="pt-1 pb-8">
            <h3 className="mb-2 text-xl font-bold blue ">
              Step 4: Get Paid Immediately
            </h3>
            <p className="text">
              Get paid on the spot via cash, bank transfer, or cheque — no
              waiting.
            </p>
            <i className="text">
              immediate funds so you can move on with your plans
            </i>
          </div>
        </div>
      </section>

      <section className=" md:w-11/12 mx-auto mt-36 grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-5 md:px-0 px-3">
        <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold">
          <span className="border-b-4 border-[#ffdb5e]">
            What Used Furniture
          </span>{" "}
          <span className="md:block blue">We Buy in Sharjah</span>
        </h2>
        <div>
          <p className="text">
            We buy single pieces to full-house contents — fair offers, quick
            pickup and instant payment across Sharjah. We have a wide range of
            used furniture and home appliances available for sale.
          </p>
          <Button className="mt-3">About Us</Button>
        </div>
      </section>

      <section id="types-of-furniture-we-buy" className="mt-20 md:px-0 px-3">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold headline">
              Everything We Buy
            </h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              From a single chair to the entire contents of a villa, we make
              selling easy and profitable for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
            {categories.map((cat) => (
              <CategoryCard key={cat.title} {...cat} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 px-6 mt-20">
        <div className="bg-pattern -z-10"></div>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl headline md:text-4xl font-bold mb-4">
            Ready to Sell? Get a Fast Valuation!
          </h2>
          <p className="text mb-8 text-lg">
            Send us photos of your items now for a fast, no-obligation quote.
            For the most accurate offer, please include dimensions and a brief
            note on any damage.
          </p>
          <a
            href="https://wa.me/YOUR_WHATSAPP_NUMBER" // <-- IMPORTANT: Add your WhatsApp number here
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pri-bg text-white font-medium text-lg py-4 px-8 rounded-lg shadow-md hover:bg-teal-600 transition-colors duration-300"
          >
            Send Photos on WhatsApp
          </a>
        </div>
      </section>

      <div className="pri-bg text-gray-100 text-center py-6 px-6">
        <p>
          We buy used furniture in Sharjah — bedroom sets, sofas, office
          furniture, appliances, villa contents and more.
        </p>
        <p className="mt-1">
          Fast pickup, fair prices, and instant payment across the city.
        </p>
      </div>
      <section
        id="why-choose-us"
        className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
      >
        <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
          <span className="border-b-4 border-[#ffdb5e]">
            Why Choose Rukun Al Arooba Over Other
          </span>{" "}
          <span className="md:block blue">
            Second Hand Furniture Buyers in Sharjah
          </span>
        </h2>
        <p className="mt-3 text max-w-3xl mx-auto text-center">
          Sharjah sellers have plenty of options, but Rukun Al Arooba stands out
          for proven reliability and convenience:
        </p>

        <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-10">
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Government-licensed
              Business
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              We display our Sharjah trade license and address clearly. Trust
              signals like ours are rare among online buyers, and they make all
              the difference in your safety and confidence.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Proven Track Record (20+
              years)
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              With two decades of experience, our team has seen every type of
              item and deal. This depth of expertise builds authoritativeness
              and trustworthiness – qualities Google emphasizes for any
              reputable business , and for us it means smoother dealings and
              fairer prices.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Sharjah Storefront
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              Unlike many competitors, we have a real showroom in Sharjah (Al
              Estiqlal St). You’re welcome to visit, see what we do, and even
              view some items for sale. A local shop means we’re accountable and
              accessible.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Rapid Quotes & Service
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              We pride ourselves on speed. Sellers typically receive a firm
              offer in under 10 minutes of contacting us. Need even faster
              service? We can often arrange immediate pickup that same day or
              the next.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Partnered Movers
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              We’ve teamed up with Abu Muhammad Movers (Sharjah’s top
              packers/movers) to offer free collection of your items. You don’t
              have to lift a finger. Our movers will even carefully transport
              your furniture to our facility if needed.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Multiple Payments
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              Cash on delivery, instant bank transfer, or even post-dated checks
              – you choose the payment method that works for you. No gimmicks or
              hidden fees, just straight cash.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> In-House Restoration
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              Every item we buy goes through our quality assurance process. If
              something needs a quick repair or polish, our craftsmen handle it.
              We ensure nothing leaves our facility broken or unsellable – and
              you get paid for a guaranteed quality item.
            </p>
          </div>
        </div>
        <div className="mt-16 flex flex-col gap-y-2 text max-w-4xl mx-auto text-center">
          <p>
            We pride ourselves as trusted used furniture buyers in Sharjah.{" "}
          </p>
          <p>
            From transparent pricing to prompt communication, everything we do
            aims to make you feel confident. Don’t just take our word for it –
            our license, our address, and our long history speak volumes.{" "}
          </p>
          <p>
            And because recycling furniture is beneficial, you can rest assured
            this sale is good for Sharjah too. As one review notes about selling
            second-hand goods: you “reduce landfill waste” and even help the
            local economy .{" "}
          </p>
          <p>
            In short, selling with Rukun Al Arooba is safe, smart, and socially
            responsible.
          </p>
        </div>
      </section>
      <div className="max-w-4xl md:h-96 h-80  mx-auto mt-20 relative overflow-hidden md:rounded-2xl">
        <Image
          src={"/main-store-image.jpg"}
          alt="Rukun Al Arooba Used Furniture Store in Sharjah"
          fill
          className="object-cover"
        />
      </div>
      <section
        className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:ml-32 overflow-hidden md:px-0 px-3"
        id="areas-we-cover"
      >
        <div>
          <h2 className="headline  md:text-4xl/tight text-3xl/tight font-bold">
            <span className="border-b-4 border-[#ffdb5e]">
              Areas We Serve -
            </span>{" "}
            <span className="md:block blue">
              Old Furniture Buyers in Sharjah
            </span>
          </h2>
          <p className="mt-3 text">
            As the leading used furniture buyers near you, we serve all areas of
            Sharjah including Al Nahda, Al Qasimiya, Al Majaz, Al Taawun, Al
            Khan, Muwaileh, and Al Ramtha.
          </p>
          <ul className="mt-5 list-disc list-inside text">
            <li>
              Industrial areas like Sharjah Industrial Areas 1-18 are covered
              with specialized commercial pickup services.
            </li>
            <li className="mt-2">
              Residential neighborhoods from Al Mareija to Al Rahmaniya receive
              our full attention with scheduled pickups that respect community
              guidelines.
            </li>
          </ul>
          <Button size={"lg"} className="mt-5">
            Sell To Best Buyers in Sharjah
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
            Sustainable Furniture Solutions
            <br className="md:block hidden" /> - Eco-Friendly Disposal{" "}
          </h2>
          <p className="mt-7 text-white text-shadow-2xs max-w-3xl md:text-lg">
            Choosing Rukun Al Arooba means choosing sustainable furniture
            solutions in Sharjah. Every piece we purchase is evaluated for
            restoration potential, keeping furniture out of landfills and
            reducing environmental impact.
          </p>
          <p className="mt-2 text-white text-shadow-2xs max-w-3xl md:text-lg">
            Our restoration process gives furniture new life, contributing to
            the circular economy while providing affordable options for
            budget-conscious buyers.
          </p>
          <div className="mt-7  flex gap-x-3">
            <Button size={"lg"}>WhatsApp Us</Button>
            <Button variant={"secondary"} size={"lg"}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>
      <FAQs
        title="Frequently Asked Questions About Selling Used Furniture in Sharjah"
        Faqs={SharjahBuyersFaqs}
      />
      <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
        {" "}
        <h2 className="md:text-4xl text-3xl headline font-bold">
          Tips for Selling Used Furniture in Sharjah{" "}
        </h2>{" "}
        <p className="mt-7 text">
          Maximize your furniture&apos;s value with these insider tips for
          selling used furniture.{" "}
        </p>{" "}
        <h3 className="font-medium text-xl text mt-7">
          Clean Thoroughly Before Photographing
        </h3>{" "}
        <p className="mt-5 text">
          <b>Why it matters:</b> Presentation is crucial, even for used goods. A
          clean item appears well-maintained and can significantly increase its
          perceived value.{" "}
        </p>{" "}
        <ul className="mt-5 list-disc ml-5 text">
          {" "}
          <li>
            <b>Action:</b> Wipe down surfaces, vacuum upholstery, and polish any
            wood or metal.
          </li>{" "}
        </ul>{" "}
        <h3 className="font-medium text-xl text mt-7">
          Take High-Quality, Transparent Photos
        </h3>{" "}
        <p className="mt-5 text">
          <b>Why it matters:</b> Good photos help us provide fast, accurate
          quotes and build trust. Transparency about the item&apos;s condition
          streamlines the process.{" "}
        </p>{" "}
        <ul className="mt-5 list-disc ml-5 text">
          {" "}
          <li>
            <b>Action:</b> Photograph your furniture in a well-lit area. Capture
            it from multiple angles (front, back, sides) and take close-up shots
            of any specific details, including signs of wear or damage.
          </li>{" "}
        </ul>{" "}
        <h3 className="font-medium text-xl text mt-7">
          Sell Items as a Complete Set
        </h3>{" "}
        <p className="mt-5 text">
          <b>Why it matters:</b> Complete sets, such as a full bedroom or dining
          set, are more desirable and typically command premium rates compared
          to selling the same items individually.{" "}
        </p>{" "}
        <ul className="mt-5 list-disc ml-5 text">
          {" "}
          <li>
            <b>Action:</b> If you have matching pieces, group them together in
            your offer.
          </li>{" "}
        </ul>{" "}
        <h3 className="font-medium text-xl text mt-7">
          Be Realistic About Value
        </h3>{" "}
        <p className="mt-5 text">
          <b>Why it matters:</b> Understanding the secondhand market helps set
          fair expectations. While most used furniture has a standard market
          rate, high-value items are recognized and compensated accordingly.{" "}
        </p>{" "}
        <ul className="mt-5 list-disc ml-5 text">
          {" "}
          <li>
            <b>Action:</b> Research similar items online to get a general idea
            of value. Be aware that genuine antiques and authenticated designer
            pieces will receive premium pricing from us.
          </li>{" "}
        </ul>{" "}
        <h3 className="font-medium text-xl text mt-7">
          Consider Strategic Timing (When Possible)
        </h3>{" "}
        <p className="mt-5 text">
          <b>Why it matters:</b> Selling during peak demand can sometimes yield
          better offers.{" "}
        </p>{" "}
        <ul className="mt-5 list-disc ml-5 text">
          {" "}
          <li>
            <b>Peak Seasons:</b> Demand is often highest during moving seasons
            (summer and the end of the year) and when new residents are
            furnishing their homes in Sharjah.
          </li>{" "}
          <li>
            <b>Our Commitment:</b> Even if you need to sell outside of these
            times, we maintain competitive pricing and offer immediate service
            year-round.
          </li>{" "}
        </ul>{" "}
      </section>
      <CTA
        title="Ready to Sell Your Used Furniture? Contact Sharjah's #1 Buyers"
        desc={
          <>
            <p>
              Don&apos;t let unused furniture take up valuable space or
              complicate your move. Rukun Al Arooba makes selling simple, fast,
              and profitable.{" "}
            </p>
            <p>
              With our government license, physical showroom, 20+ years of
              experience, and commitment to fair pricing, we&apos;re the trusted
              choice for thousands of satisfied customers across Sharjah and the
              UAE.
            </p>
          </>
        }
      />
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="md:text-4xl text-3xl font-bold leading-tight tracking-tighter text-gray-900">
              Contact us now for an instant valuation
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* WhatsApp Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center">
                <span className="text-5xl">📱</span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  WhatsApp
                </h3>
                <p className="mt-2 text-base text-gray-600">[Your Number]</p>
                <p className="mt-1 text-sm text-gray-500">
                  Get a quote in 5-10 minutes
                </p>
              </div>
            </div>

            {/* Call Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center">
                <span className="text-5xl">📞</span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Call</h3>
                <p className="mt-2 text-base text-gray-600">[Your Number]</p>
                <p className="mt-1 text-sm text-gray-500">
                  Speak directly with our valuation team
                </p>
              </div>
            </div>

            {/* Visit Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center">
                <span className="text-5xl">🏪</span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">Visit</h3>
                <p className="mt-2 text-base text-gray-600">
                  Al Estiqlal Street, Bu Shaghara, Hay Al Qasimiah, Sharjah
                </p>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="flex items-center justify-center">
                <span className="text-5xl">🕒</span>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  Operating Hours
                </h3>
                <p className="mt-2 text-base text-gray-600">Mon–Sat</p>
                <p className="text-base text-gray-600">9:00 AM – 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
