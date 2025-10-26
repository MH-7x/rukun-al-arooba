import CTA from "@/components/base/CTA";
import FAQs from "@/components/base/FAQs";
import LatestsNews from "@/components/LatestsNews";
import Reviews from "@/components/Reviews";
import { Button } from "@/components/ui/button";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import { hwwFaqs } from "@/lib/list";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import {
  CheckCircle,
  Gift,
  HandCoins,
  ImagePlay,
  ListChecks,
  Navigation,
  Truck,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import React from "react";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "How We Work — Rukun Al Arooba | Used Furniture Buyers",
      desc: "how we inspects, refurbishes and delivers quality used furniture across the UAE — fast WhatsApp quotes, safe pickup with trusted movers, and multiple payment options. ",
    },
    image: {
      path: "/before-after-refurbishment-furniture.jpg",
      alt: "rukun al arooba used furniture in sharjah",
    },
    path: "/how-we-work",
  },
});
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(hwwFaqs));
const BuyingSellingProcess = () => {
  return (
    <>
      {" "}
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="overflow-hidden">
        <section className=" pt-16 md:w-11/12 w-full mx-auto md:px-0 px-3 grid md:grid-cols-2  items-center">
          <div className="  md:ml-16">
            <span className="px-3 py-2 bg-[#c07d5329] font-medium pri rounded-2xl text-sm">
              How We Work
            </span>
            <h1 className="headline md:text-3xl/tight text-2xl/tight font-bold mt-5">
              <span className="border-b-4 border-[#ffdb5e]">How We Work</span>{" "}
              <span className=" blue">
                {" "}
                Fast, Honest & Fully Managed Used Furniture
              </span>
            </h1>
            <h3 className="md:text-lg headline mt-5 font-medium border-l-4 border-[#144E5A]  pl-3">
              From inspection to delivery — buy or sell quality used furniture
              across the UAE with confidence.
            </h3>
            <p className="text mt-5">
              Rukun Al Arooba is officially registered since 2018 and operates a
              physical store in Sharjah with over 20 years of experience in used
              furniture trading.{" "}
            </p>
            <div className="flex mt-5 gap-x-3">
              <Link href={"/contact-us"}>
                <Button size={"lg"} className="">
                  <ListChecks /> Get a Free Quote
                </Button>
              </Link>
              <Link href={"https://share.google/OJgtbXz8Zc8dmUqJk"}>
                <Button size={"lg"} variant={"link"}>
                  <Navigation /> Visit Our Store
                </Button>
              </Link>
            </div>
          </div>
          <div className=" h-96 md:w-96 w-full relative md:mx-auto">
            <Image
              src={"/used-furniture-buying-process.png"}
              alt="used-furniture-buying-process"
              fill
              fetchPriority="high"
              loading="eager"
              className="object-contain md:ml-10"
            />
          </div>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-xl mx-auto ">
          <h2 className="mb-16 text-3xl font-bold lg:text-4xl headline">
            Quick 5-Step Snapshot
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
              <h3 className="mb-2 text-xl font-bold blue ">1. Send Photos</h3>
              <p className="text">WhatsApp or upload on the site.</p>
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
                2. Free Valuation
              </h3>
              <p className="text">
                Fast & fair quote (WhatsApp replies in 5–10 minutes).
              </p>
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
              <h3 className="mb-2 text-xl font-bold blue ">3. Pickup </h3>
              <p className="text">
                We coordinate secure pickup with our partner movers.
              </p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c07d53]">
                  <Wrench className="pri" />
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 "></div>
            </div>
            <div className="pt-1 pb-8">
              <h3 className="mb-2 text-xl font-bold blue ">
                4. Refurbish & Quality Check{" "}
              </h3>
              <p className="text">Cleaning, repairs and finishing.</p>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4 flex flex-col items-center">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#c07d53]">
                  <Gift className="pri" />
                </div>
              </div>
              <div className="h-full w-px bg-gray-300 "></div>
            </div>
            <div className="pt-1 pb-8">
              <h3 className="mb-2 text-xl font-bold blue ">
                5. Delivery & Assembly
              </h3>
              <p className="text">
                Fast delivery, assembly and satisfaction guarantee.
              </p>
            </div>
          </div>
        </section>
        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-16 md:w-11/12 w-full mx-auto md:px-0 px-3">
          <div>
            <h4 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> 1. Inspection &
              Valuation
            </h4>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              Send photos via WhatsApp, upload images on this page, or book a
              free in-store / home inspection. We evaluate each item by brand,
              condition, age and market demand to give a transparent, itemized
              quote. Our WhatsApp response time is typically 5–10 minutes when
              you contact us online.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> 2. Fair Quote &
              Transparent Pricing
            </h4>
            <p className="text-sm text mt-2">
              We provide clear pricing that explains how we arrived at the
              offer:
            </p>
            <ul className="list-disc list-inside my-2 text-sm text">
              <li>
                Condition (excellent / good / needs minor repair / beyond
                repair)
              </li>
              <li>Brand & demand (premium brands fetch higher offers)</li>
              <li>
                Age & size • Refurbishment cost (if applicable — shown
                separately)
              </li>
            </ul>
            <p className="text-sm text pb-3 border-b-2 border-[#c07d53a5]">
              We accept multiple payment methods including cash, online deposit
              and bank checks, giving you flexibility when selling or buying.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" />
              3. Pickup & Logistics (Safe, partnered handling)
            </h4>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              If you don’t want to transport items yourself, we arrange pickup
              through our trusted partner movers (Abu Muhammad Movers) to ensure
              secure handling and competitive rates. For buyers, we also offer
              delivery and on-site assembly. <b>Service note</b>: Free pickup
              may be available for specific locations or above a minimum order —
              display your exact terms here.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> 4. Refurbishment &
              Quality Control — “Like-New” Standard
            </h4>
            <p className="text-sm text mt-2">
              Every item we buy goes through a refurbishment workflow:
            </p>
            <ul className="list-disc list-inside my-2 text-sm text">
              <li>Every item we buy goes through a refurbishment workflow:</li>
              <li>Small repairs (legs, hinges, upholstery touch-ups)</li>
              <li>Repolishing and finishing</li>
              <li>Final inspection before listing in-store or online</li>
            </ul>
            <p className="text-sm text pb-3 border-b-2 border-[#c07d53a5]">
              We don’t list items “as-is” without repair — our goal is to make
              used furniture look, feel and function like new.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> What We Accept (and what
              we don’t)
            </h3>
            <p className="text-sm text mt-2">
              <b> We accept:</b> sofas, beds, dining sets, wardrobes, kitchen
              cabinets, fridges, office furniture, outdoor furniture and small
              appliances.
            </p>

            <p className="text-sm text pb-3 border-b-2 border-[#c07d53a5]">
              <b>We don’t accept:</b> items beyond practical repair,
              stained/unsanitary mattresses (if you choose not to resell
              mattresses), hazardous materials, or unsellable parts.
            </p>
          </div>
        </div>

        <div className="max-w-4xl md:h-96 h-80  mx-auto mt-20 relative overflow-hidden md:rounded-2xl">
          <Image
            src={"/before-after-refurbishment-furniture.jpg"}
            alt="Before and after refurbishment furniture"
            fill
            className="object-cover"
          />
        </div>

        <section
          className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:ml-32 overflow-hidden md:px-0 px-3"
          id="areas-we-cover-and-hours"
        >
          <div>
            <h2 className="headline  md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                Service Areas &
              </span>{" "}
              <span className="md:block blue"> Opening Hours</span>
            </h2>

            <ul className="mt-5 list-disc list-inside text">
              <li>
                <b>Areas we serve:</b>: Sharjah (physical store), Dubai, Ajman,
                Ras Al Khaimah, Al Ain and Abu Dhabi (as available).
              </li>
              <li className="mt-2">
                <b>Store address:</b>: Al Estiqlal Street, Bu Shaghara, Hay Al
                Qasimiah, Sharjah.
              </li>
              <li className="mt-2">
                <b>Hours:</b> ( Mon–Sat 9:00 AM–11:00 PM).
              </li>
              <li className="mt-2">
                <b>Pickup lead time:</b> Same/next day for nearby locations
                (subject to schedule) — confirm on quote.
              </li>
            </ul>
            <Button wtsBtn size={"lg"} className="mt-5">
              Sell To Best Buyers in Dubai
            </Button>
          </div>
          <div className="mx-auto md:mt-16 w-full ">
            <div className="md:h-[430px] h-96 md:w-96 w-full relative">
              <Image
                src={"/best-furniture-buyers-in-dubai.jpg"}
                alt="best Used Furniture Buyers in Dubai"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="md:absolute w-full h-full pri-bg -z-10 top-5 md:-top-12 md:-right-12 -right-5 rounded-2xl" />
            </div>
          </div>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Trust & Credibility
          </h3>
          <p className="mt-7 text">
            Officially registered (since 2018) with a physical storefront and
            20+ years of industry experience.
          </p>
          <p className="mt-3 text">
            Partnered logistics for safe pickup/delivery (Abu Muhammad Movers).
          </p>
          <p className="mt-3 text">
            Multiple secure payment options (cash, bank deposit, checks).
          </p>
        </section>
        <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
          <h3 className="md:text-4xl text-3xl headline  font-bold">
            Sustainability & Hygiene
          </h3>
          <p className="mt-7 text">
            We reduce waste by refurbishing and re-circulating furniture. Every
            item gets professional cleaning and sanitisation before it reaches
            the showroom or a customer’s home — a safe and eco-friendly choice.
          </p>
        </section>
        <Reviews />
        <FAQs Faqs={hwwFaqs} />
        <CTA
          title="Get A Free Quote From Trusted Used Furniture Dealer"
          desc={
            <>
              <p>
                Whether you&lsquo;re looking to buy or sell used furniture, our
                team is here to assist you. Contact us today for a free,
                no-obligation quote and experience the convenience of our fully
                managed service.
              </p>
            </>
          }
        />
      </main>
      <LatestsNews />
    </>
  );
};

export default BuyingSellingProcess;
