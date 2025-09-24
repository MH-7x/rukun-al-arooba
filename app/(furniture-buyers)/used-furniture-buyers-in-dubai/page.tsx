import CTA from "@/components/base/CTA";
import FAQs from "@/components/base/FAQs";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { ufdFaqs } from "@/lib/list";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  CheckCircle,
  Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";
const FeatureItem: React.FC<{
  title: string;
  items: string[];
  link?: string;
}> = ({ title, items, link = "#" }) => (
  <div className="bg-white/60 dark:bg-gray-800/60 rounded-2xl p-5  border border-gray-100 dark:border-gray-700">
    <Link href={link}>
      {" "}
      <h3 className="text-lg font-semibold mb-3 blue">{title}</h3>{" "}
    </Link>
    <ul className="space-y-2 text-sm leading-snug">
      {items.map((it, i) => (
        <li key={i} className="flex items-start gap-3 text">
          <svg
            className="w-5 h-5 flex-shrink-0 mt-0.5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden
          >
            <path
              d="M5 13l4 4L19 7"
              stroke="currentColor"
              strokeWidth={1.8}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span>{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Furniture Buyers in Dubai | Cash for Used Furniture",
      desc: " Leading used furniture buyers in Dubai & UAE since 2018. Instant cash, free pickup, best prices. Registered  company with 20+ years of experience. Call now!",
    },
    image: {
      path: "/furniture/used-furniture-buyers-in-dubai.jpg",
      alt: "rukun al arooba used furniture buyers in dubai",
    },
    path: "/used-furniture-buyers-in-dubai",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(ufdFaqs));

const UsedFurnitureBuyersDubai = () => {
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
              Best Used Furniture Buyers in Dubai
            </span>
            <br className="md:block" />
            Get Instant Cash
          </h1>
          <div className="max-w-3xl mx-auto text-center text mt-5">
            <p>
              Looking for reliable used furniture buyers in Dubai to sell your
              valuable furniture? Rukun Al Arooba Used Furniture is the
              <Link href={"/"}>
                UAE&lsquo;s leading furniture buying service
              </Link>{" "}
              since 2018. We bring over 20 years of industry experience.
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
        <section className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-5 grid-cols-1 border border-[#c07d53a5] rounded-2xl overflow-hidden">
          <div className="md:h-[450px] h-[400px] col-span-3 relative">
            <Image
              src={"/furniture/used-furniture-buyers-in-dubai.jpg"}
              alt="Used Furniture Buyers in Dubai"
              fill
              className="object-cover object-center"
            />
            <div className="absolute md:w-[70%] w-11/12 bottom-2 left-0 right-0 mx-auto bg-white/80 p-5  rounded-2xl md:h-20">
              <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-3 items-center md:justify-center justify-between w-full gap-x-5">
                <div className="text-[#353535]">
                  <p className=" gap-x-1 font-medium flex items-center">
                    <Phone className="md:size-[18px] size-[15px]" />{" "}
                    <span>Phone No.</span>
                  </p>
                  <p className=" mt-0.5">(055) 6461731</p>
                </div>
                <span className="w-0.5 h-10 bg-gray-400 md:block hidden"></span>
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
          <div className="col-span-2 py-10 px-5 text text-center">
            <p>
              As registered used furniture buyers in Dubai, we offer instant
              cash payments. Our services include :
            </p>
            <ul className="my-3 font-medium text-center">
              <li className="flex gap-x-2 items-center">
                <Check size={17} className="blue" /> <span>free pickup</span>
              </li>
              <li className="flex gap-x-2 items-center">
                <Check size={17} className="blue" />{" "}
                <span>best prices for your pre-owned furniture</span>
              </li>
            </ul>
            <p className="mb-5">
              We cover Dubai,{" "}
              <Link href={"/used-furniture-buyers-in-sharjah"}>Sharjah</Link>,
              Abu Dhabi, and all UAE emirates.
            </p>
            <p>
              Whether you are selling a single item or furnishing an entire
              home, our team ensures prompt, fair, and reliable transactions.
            </p>
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
            <span className="md:block blue">
              Selling Used Furniture in Dubai?
            </span>
          </h2>
          <p className="mt-3 text max-w-3xl mx-auto text-center">
            In a market with countless options, most are freelance operators
            without proper credentials or a physical store; choosing the right
            buyer is crucial.
          </p>
          <p className="mt-1 text max-w-3xl mx-auto text-center">
            Rukun Al Arooba is an established leader known for transparency and
            professionalism. Here is why we are the preferred choice for{" "}
            <Link href={"/used-furniture-buyers-in-dubai"}>
              selling second-hand furniture in Dubai
            </Link>
            :
          </p>
          <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-16 mt-20 md:ml-20">
            <div id="register-company">
              <h3 className="md:text-3xl text-2xl font-medium headline">
                Government Registered & Licensed Since 2018
              </h3>
              <p className="mt-3 text">
                Unlike many buyers who operate as unregistered freelancers,
                Rukun Al Arooba has been an officially registered company with
                the UAE government since 2018.
              </p>
              <p className="text">
                <Link href={"https://share.google/iLEgJq3Qt9DduRnRi"}>
                  {" "}
                  Our physical store on Al Estiqlal Street in Sharjah
                </Link>{" "}
                serves as proof of our legitimate business operations and
                commitment to the community.
              </p>
              <details className="group  rounded-lg mt-5 bg-white ">
                <summary className="pri underline flex justify-start items-center cursor-pointer  font-medium ">
                  read more <ArrowDown size={15} />
                </summary>
                <p className="mt-3 text">
                  With over 20 years of combined industry expertise, we&lsquo;ve
                  built our reputation on transparency, fairness, and
                  professional service that you can verify and trust.
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
          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-10">
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Full-Service Model
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                We do more than purchase your furniture. Our team inspects,
                repairs, and polishes each item to ensure quality before resale.
                Every purchase includes a warranty .
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Fast and Convenient
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Get a response within 5–10 minutes when you contact us via
                WhatsApp or our website.{" "}
                <Link href={"/"}>Selling your old furniture in Dubai</Link> has
                never been easier.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Multiple Payment
                Options
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                We offer flexible payment methods, including cash, online
                deposits, and bank checks, unlike competitors who deal only in
                cash.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Seamless Pickup
                Service
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Our partnership with Abu Muhammad Movers ensures affordable and
                reliable pickup and delivery, saving you the hassle of arranging
                transport.
              </p>
            </div>
          </div>
        </section>
        <section
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3"
          id="sell-used-furniture"
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold ">
            <span className="border-b-4 border-[#ffdb5e]">
              How to Sell Your Used Furniture
            </span>{" "}
            <span className="md:block blue">- in Dubai with Us?</span>
          </h2>
          <div className="max-w-3xl mt-5  text">
            <p>
              Selling your used furniture in Dubai with Rukun Al Arooba is
              straightforward. Follow these steps to receive the best price for
              your furniture or appliances:
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
                    1. Contact Us & Send Photos
                  </h4>
                  <p className="mt-2 text-sm text">
                    Simply give us a phone call or send a picture of your items
                    to whatsApp numbers shown on our website. Make sure you
                    include details about your item’s condition and your
                    location in Dubai or anywhere in the UAE.
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
                    2. Valuation & Quote
                  </h4>
                  <p className="mt-2 text-sm text">
                    We’ll visit you soon to quickly check your furniture. We
                    explain our price clearly. This hands-on assessment
                    considers construction quality, condition, market demand,
                    brand reputation, and refurbishment.
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
                    3. Instant Payment & Pickup
                  </h4>
                  <p className="mt-2 text-sm text">
                    Once you accept our offer, we proceed with immediate payment
                    through your preferred method: cash, online bank deposit, or
                    bank check. Our partner movers will arrange a convenient
                    pickup time at no extra cost.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="types-of-furniture-we-buy"
          className={`mt-36 md:w-11/12 mx-auto px-6 py-12`}
          aria-labelledby="types-of-furniture-we-buy"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2
              id="types-of-furniture"
              className="text-3xl md:text-4xl font-extrabold leading-tight headline"
            >
              Types Of Furniture & Electronics We Buy in Dubai
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              As comprehensive used furniture and electronics buyers in Dubai,
              we purchase a wide range of items to meet diverse customer needs.
              Whether you&lsquo;re selling a single appliance or clearing out an
              entire home or office, we are the buyers you can count on.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Intro / Highlights column */}
            <div className="lg:col-span-1 space-y-4">
              <div className="rounded-2xl p-6 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-semibold">Why sell to us?</h3>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                  We buy individual items or full collections, evaluate fairly,
                  and offer competitive prices. Our team handles pickup and
                  logistics across Dubai.
                </p>

                <dl className="mt-4 grid gap-3">
                  <div className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-gray-100 dark:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M5 13l4 4L19 7"
                          stroke="currentColor"
                          strokeWidth={1.6}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <dt className="text-sm font-medium">Fast valuation</dt>
                      <dd className="text-xs text-gray-500 dark:text-gray-400">
                        Quick offers based on condition and brand.
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full w-9 h-9 p-2 bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                      <span>&#9951;</span>
                    </div>
                    <div>
                      <dt className="text-sm font-medium">
                        Pickup & logistics
                      </dt>
                      <dd className="text-xs text-gray-500 dark:text-gray-400">
                        We collect items across Dubai with professional
                        handling.
                      </dd>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="rounded-full p-2 bg-gray-100 dark:bg-gray-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 6v6l4 2"
                          stroke="currentColor"
                          strokeWidth={1.6}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <div>
                      <dt className="text-sm font-medium">
                        Transparent pricing
                      </dt>
                      <dd className="text-xs text-gray-500 dark:text-gray-400">
                        Fair offers based on market demand and condition.
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>

              <div className="rounded-2xl p-6 border border-dashed border-gray-200 dark:border-gray-700 text-center">
                <p className="text-sm">
                  Ready to sell? Get a free valuation — we buy single items or
                  full house & office clearances.
                </p>
                <a
                  href="/contact-us"
                  className="inline-block mt-4 px-4 py-2 rounded-xl pri-bg text-white text-sm font-medium shadow"
                >
                  Get valuation
                </a>
              </div>
            </div>

            {/* Main categories grid */}
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
              <FeatureItem
                title="We Buy Used Home Furniture"
                link="/used-home-appliances-dubai"
                items={[
                  "Bedroom: beds, mattresses, wardrobes, dressers, nightstands",
                  "Living room: sofas, sectionals, coffee tables, entertainment centers, accent chairs",
                  "Dining room: tables, chairs, buffets, china cabinets",
                  "Kitchen: modular kitchens, cabinets",
                ]}
              />

              <FeatureItem
                title="Outdoor & Patio Furniture"
                items={[
                  "Patio sets",
                  "Garden furniture",
                  "Outdoor dining sets",
                  "Poolside furniture",
                ]}
              />

              <FeatureItem
                title="Office Furniture Buying Services"
                items={[
                  "Executive desks, ergonomic chairs, conference tables",
                  "Reception area furniture, workstations, cubicle systems",
                  "Filing cabinets and storage solutions",
                  "Corporate liquidations and fair asset valuation",
                ]}
              />

              <FeatureItem
                title="Used Electronics & Appliances"
                link="/used-electronics-buyers-in-dubai"
                items={[
                  "Large appliances: refrigerators, washing machines, dryers, dishwashers",
                  "Kitchen appliances and small electrics",
                  "Entertainment: TVs, sound systems, home theater equipment",
                  "Appliance brand & energy-rating aware valuations",
                ]}
              />
            </div>
          </div>

          {/* Notes section */}
          <div className="mt-10 max-w-3xl mx-auto text-sm text-gray-600 dark:text-gray-400">
            <p className="mb-2">
              We evaluate items based on brand, condition, and local demand. For
              corporate sellers, we offer tailored liquidation services and bulk
              pricing.
            </p>
          </div>
        </section>

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
                Used Furniture Buyers In UAE
              </span>
            </h2>
            <p className="mt-3 text">
              While{" "}
              <Link href={"/https://share.google/iLEgJq3Qt9DduRnRi"}>
                our main showroom is in Sharjah
              </Link>
              , our services extend across the entire UAE. We are proud to be
              the trusted used furniture buyer in the UAE for customers in:
            </p>
            <ul className="mt-5 list-disc list-inside text">
              <li>
                <b>Dubai</b>: Including Dubai Marina, JLT, Downtown Dubai, Palm
                Jumeirah, Business Bay, Al Barsha, Jumeirah, and all other
                communities
              </li>
              <li className="mt-2">
                <b>Other Emirates</b>: Abu Dhabi, Sharjah, Ajman, Ras Al
                Khaimah, and Al Ain
              </li>
            </ul>
            <Button wtsBtn size={"lg"} className="mt-5">
              Sell To Best Buyers in Dubai
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
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h2 className="md:text-4xl text-3xl headline  font-bold">
            Get the Best Price - How We Value Your Used Furniture
          </h2>
          <p className="mt-7 text">
            Price transparency distinguishes Rukun Al Arooba from competitors
            who provide vague pricing information or arbitrary valuations.
          </p>
          <p className="mt-2 text">
            Our systematic approach to furniture valuation ensures fair prices
            based on objective criteria and current market conditions.
          </p>
          <ul className="mt-5 list-disc ml-5 text">
            <li>
              <span className="font-medium">Condition: </span>
              The overall state of the item.
            </li>
            <li>
              <span className="font-medium">Brand & Quality: </span>
              Reputable brands and high-quality materials fetch better prices.
            </li>
            <li>
              <span className="font-medium"> Age: </span>
              The manufacturing year and style.
            </li>
            <li>
              <span className="font-medium"> Market Demand: </span>
              The current popularity of the item in the UAE market
            </li>
          </ul>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Factors That Increase Your Furniture Value
          </h3>
          <p className="mt-7 text">
            Several factors can significantly increase the price we offer for
            your furniture.
          </p>

          <ul className="mt-5 list-disc ml-5 text">
            <li>
              Original purchase receipts prove authenticity and increase value,
              especially for high-end brands.
            </li>
            <li>
              Well-maintained furniture is more appealing and fetches higher
              prices.
            </li>
            <li>
              Complete furniture sets command better offers than individual
              pieces.
            </li>
            <li>
              Matching bedroom or dining sets are more valuable when sold
              together.
            </li>
            <li>
              Popular brands and designer pieces retain value better than
              generic items.
            </li>
            <li>
              Recent purchases in good condition naturally receive higher
              valuations.
            </li>
            <li>
              Furniture that shows minimal wear and maintains structural
              integrity commands better prices in the resale market.
            </li>
          </ul>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Our Instant Cash vs. Consignment Options
          </h3>
          <p className="mt-7 text">
            We offer both immediate cash purchases and consignment arrangements,
            depending on your preferences and furniture value.
          </p>
          <p className="mt-3 text">
            Instant cash purchases provide immediate payment and complete
            transaction closure, ideal for customers needing quick furniture
            removal or immediate cash.
          </p>
          <p className="mt-3 text">
            Consignment options may yield higher returns for valuable or unique
            pieces that benefit from extended market exposure
          </p>
          <p className="mt-3 text">
            We explain both options clearly, helping you choose the approach
            that best meets your needs and maximizes your furniture&lsquo;s
            value.
          </p>
        </section>
        <Reviews />
        <FAQs
          title="Frequently Asked Questions About Selling Used Furniture in Dubai"
          Faqs={ufdFaqs}
        />
        <CTA
          title="Contact Dubai's Most Trusted Used Furniture Buyers"
          desc={
            <>
              <p>
                Ready to convert your unused furniture into cash? Contact Rukun
                Al Arooba today.
              </p>
              <p>
                {" "}
                Our proven track record, transparent processes, and commitment
                to customer satisfaction ensure you receive the best possible
                service when selling used furniture in Dubai or throughout the
                UAE.
              </p>
            </>
          }
        />
      </main>
    </>
  );
};

export default UsedFurnitureBuyersDubai;
