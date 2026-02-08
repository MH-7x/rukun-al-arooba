import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { Phone } from "lucide-react";

const SellUsedFurniture = () => {
  return (
    <>
      <section
        className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3"
        id="sell-used-furniture"
      >
        <h2 className="blue md:text-4xl/tight text-3xl/tight font-bold ">
          <span className="border-b-4 border-[#ffdb5e]">
            Sell Your Used Furniture in Sharjah
          </span>{" "}
          <span className="md:block ">- Best Prices Guaranteed</span>
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
          <p className="mt-2">
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
                  Send photos via WhatsApp or fill out our online form. Include
                  basic details about your furniture&lsquo;s condition and
                  location. Our team reviews submissions immediately during
                  business hours.
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
                  Accept our offer and get paid instantly upon pickup. Our team
                  handles all the heavy lifting, and you receive cash in hand
                  the moment we collect your furniture. Same-day service
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
            href={"/used-furniture-buyers-in-sharjah#types-of-furniture-we-buy"}
          >
            <h3 className="blue md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                What Type Furniture
              </span>{" "}
              <span className="block "> We Buy in Sharjah</span>
            </h3>
          </Link>
          <p className="mt-5 text-slate-600">
            As comprehensive{" "}
            <Link href={"/used-furniture-buyers-in-sharjah"}>
              furniture buyers in Sharjah
            </Link>
            , we purchase almost everything for your home. Don&lsquo;t worry
            about condition – we have in-house restoration capabilities that
            allow us to buy furniture others might reject:
          </p>
          <ul className="mt-5 flex md:flex-row flex-col gap-y-3 flex-wrap">
            <li className="text text-sm md:w-1/2 border-b border-amber-200 pb-1">
              <span className="font-medium">Complete Home Contents</span>:
              Moving abroad? Downsizing? We buy the entire home contents in one
              transaction
            </li>
            <li className="text text-sm md:w-1/2 border-b border-amber-200 pb-1">
              <span className="font-medium">Individual Pieces</span>: From a
              single chair to a complete bedroom set, no quantity is too small
            </li>
            <li className="text text-sm md:w-1/2 border-b border-amber-200 pb-1">
              <span className="font-medium">Any Condition Accepted</span>: Minor
              scratches, fading, or wear don&lsquo;t affect our interest – we
              restore everything
            </li>
            <li className="text text-sm md:w-1/2 border-b border-amber-200 pb-1">
              <span className="font-medium">Office Clearances</span>:Closing an
              office? We handle commercial furniture purchases with discretion
              and speed
            </li>
            <li className="text text-sm md:w-1/2 border-b border-amber-200 pb-1">
              <span className="font-medium">Estate Sales</span>:Sensitive
              handling of estate furniture with respectful, professional service
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
                <Button callBtn variant={"secondary"} className="" size={"sm"}>
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
              In a market where many buyers try to undervalue your furniture, we
              stand out through transparency and fairness. Here&lsquo;s why
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
    </>
  );
};

export default SellUsedFurniture;

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
