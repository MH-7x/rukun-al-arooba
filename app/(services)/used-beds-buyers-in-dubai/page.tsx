import CTA from "@/components/base/CTA";
import FAQs from "@/components/base/FAQs";
import { Button } from "@/components/ui/button";
import { BedsBuyersFaqs } from "@/lib/list";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { CheckCircle, CircleDollarSign, Store } from "lucide-react";
import Image from "next/image";
import React from "react";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Beds Buyers in Dubai | Sell Your Bed for Cash Today",
      desc: "Looking for trusted used beds buyers in Dubai? Rukun Al Arooba offers quick cash, free pickup & fair prices for single, double & bunk beds.",
    },
    image: {
      path: "/service/used-bed-buyers-in-dubai.jpg",
      alt: "rukun al arooba used bed buyers in dubai",
    },
    path: "/used-beds-buyers-in-dubai",
  },
});

const UsedBedsBuyers = () => {
  return (
    <main className="overflow-hidden">
      <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
        <div className="grid-background" />
        <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center">
          <span className="headline border-b-4 border-[#ffdb5e]">
            Used Beds Buyers in Dubai
          </span>
          <br className="md:block" />- Sell Your Bed Fast
        </h1>
        <div className="max-w-3xl mx-auto text-center text mt-5">
          <p>
            Are you searching for reliable used beds buyers in Dubai who offer
            quick deals, fair prices, and hassle-free service? At Rukun Al
            Arooba, we specialize in purchasing all types of used beds across
            Dubai and the UAE.
          </p>
          <p className="mt-1">
            Whether you are moving, upgrading your furniture, or simply want to
            free up space, we make selling your bed simple, transparent, and
            rewarding.
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
            <CircleDollarSign /> Sell Beds Now{" "}
          </Button>
        </div>
      </section>
      <section
        className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3"
        id="sell-used-beds"
      >
        <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold ">
          <span className="border-b-4 border-[#ffdb5e]">
            How to Sell Your Used Bed
          </span>{" "}
          <span className="md:block blue">- in Dubai with Us?</span>
        </h2>
        <div className="max-w-3xl mt-5  text">
          <p>
            Selling your used beds in Dubai with Rukun Al Arooba is
            straightforward. Follow these steps to receive the best price for
            your furniture or appliances:
          </p>
        </div>
        <div className="md:w-11/12 w-full grid md:grid-cols-2 grid-cols-1 gap-10 mt-16 mx-auto">
          <div className="relative w-full md:h-auto h-80 overflow-hidden rounded-2xl">
            <Image
              src={"/service/used-bed-buyers-in-dubai.jpg"}
              alt="Used Bed Buyers in Dubai"
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
                  Simply give us a phone call or send a picture of your bed to
                  whatsApp numbers shown on our website. Make sure you include
                  details about your item’s condition and your location in Dubai
                  or anywhere in the UAE.
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
                  We’ll visit you soon to quickly check your bed. We explain our
                  price clearly. This hands-on assessment considers construction
                  quality, condition, market demand, brand reputation, and
                  refurbishment.
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
        className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:ml-32 overflow-hidden md:px-0 px-3"
        id="types-of-beds-we-buy"
      >
        <div>
          <h2 className="headline  md:text-4xl/tight text-3xl/tight font-bold">
            <span className="border-b-4 border-[#ffdb5e]">
              What Types of Beds -
            </span>{" "}
            <span className="md:block blue">Do We Buy in Dubai?</span>
          </h2>
          <p className="mt-3 text">
            Our customers are always searching for quality, affordable
            furniture. That’s why we’re interested in buying:
          </p>
          <ul className="mt-5 list-disc list-inside text">
            <li>Used single beds with or without storage</li>
            <li className="mt-2">
              Double and king-size beds with headboards or frames
            </li>
            <li className="mt-2">
              Used bunk beds for kids or staff accommodations
            </li>
            <li className="mt-2">Sofa beds and convertible beds</li>
            <li className="mt-2">
              Used beds with mattress (if hygienic and in good condition)
            </li>
          </ul>
          <p className="mt-3 text">
            If you’re unsure whether we’ll buy your item, send us a quick
            photo—we’ll let you know instantly.
          </p>
          <Button size={"lg"} className="mt-5">
            Sell To Best Buyers in Dubai
          </Button>
        </div>
        <div className="mx-auto md:mt-16 w-full ">
          <div className="md:h-[430px] h-96 md:w-96 w-full relative">
            <Image
              src={"/service/used-bed-pickup-payment.jpg"}
              alt="Used Bed Pickup & Payment in Dubai"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="md:absolute w-full h-full pri-bg -z-10 top-5 md:-top-12 md:-right-12 -right-5 rounded-2xl" />
          </div>
        </div>
      </section>
      <section
        id="why-choose-us"
        className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
      >
        <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
          <span className="border-b-4 border-[#ffdb5e]">Why Choose Us</span>{" "}
          <span className="md:block blue">to Sell Your Used Bed?</span>
        </h2>
        <p className="mt-3 text max-w-3xl mx-auto text-center">
          Selling furniture through online classifieds can be
          frustrating—delayed responses, endless haggling, and time-wasters. At
          Rukun Al Arooba, we provide a direct, professional alternative.Here’s
          why hundreds of sellers in Dubai trust us:
        </p>

        <div className="mt-16 grid md:grid-cols-2 grid-cols-1 gap-10 max-w-3xl mx-auto  ">
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Instant Response
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              We evaluate based on condition, style, and demand—no lowball
              offers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Free Inspection
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              Our team can visit to inspect your bed before making a final
              offer.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Quick Pickup
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              Once you agree, we handle same-day or next-day pickup anywhere in
              Dubai.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium headline flex items-center gap-x-2">
              <CheckCircle size={25} className="pri" /> Multiple Payment Options
            </h3>
            <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
              Choose cash, bank transfer, or cheque—whatever is convenient for
              you.
            </p>
          </div>
        </div>
        <div className="mt-5  text max-w-4xl mx-auto text-center">
          <p>
            We buy single beds, double beds, king-size beds, bunk beds, sofa
            beds, and complete bedroom sets in good condition.
          </p>
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
        {" "}
        <h2 className="md:text-4xl text-3xl headline font-bold">
          Used Beds Buyers All Over UAE
        </h2>{" "}
        <p className="mt-7 text">
          While we are known as trusted used beds buyers in Dubai, we also buy
          across:
        </p>{" "}
        <ul className="text list list-inside list-disc mt-5">
          <li>Sharjah</li>
          <li>Ajman</li>
          <li>Ras Al Khaimah</li>
          <li>Al Ain</li>
          <li>Abu Dhabi</li>
          <li>And all surrounding areas</li>
        </ul>
      </section>
      <FAQs Faqs={BedsBuyersFaqs} />
      <CTA
        title="Sell Your Bed Today with Rukun Al Arooba"
        desc={
          <>
            <p>
              If you’re looking for “who buys used beds in Dubai”, your search
              ends here. We’re not just another marketplace—we’re professional
              buyers with over 20 years of experience in the UAE’s used
              furniture market. Our focus is on making the selling process
              simple, fast, and profitable for you.
            </p>
          </>
        }
      />
    </main>
  );
};

export default UsedBedsBuyers;
