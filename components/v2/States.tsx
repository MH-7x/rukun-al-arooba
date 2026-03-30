import {
  ClockArrowUp,
  MedalIcon,
  ShieldCheckIcon,
  UserCheck2Icon,
} from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";

const States = () => {
  return (
    <section
      id="about-company"
      className="md:w-11/12 w-full mx-auto mt-32 md:px-0 px-3"
    >
      <h2 className="md:text-4xl text-3xl font-bold blue">
        Your All In One <br /> Used Furniture Dealer!
      </h2>
      <div className="mt-16 grid lg:grid-cols-2 md:grid-cols-1 items-center">
        <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-x-5">
          <div className="border-l-2 border-[#ffdb5e] pb-10 px-3 relative">
            <div className="w-16 h-16 bg-white border-2 border-[#ffdb5e] rounded-full absolute top-0 left-0 flex items-center justify-center">
              <UserCheck2Icon className="blue" />
            </div>
            <h3 className="font-medium blue text-xl pt-20">
              20+ Years Experience
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Running Business Since 2005.
            </p>
          </div>
          <div className="border-l-2 border-[#ffdb5e] pb-10 px-3 relative">
            <div className="w-16 h-16 bg-white border-2 border-[#ffdb5e] rounded-full absolute top-0 left-0 flex items-center justify-center">
              <ShieldCheckIcon className="blue" />
            </div>
            <h3 className="font-medium blue text-xl pt-20">
              2018 Gov. Registered
            </h3>
            <p className="text-gray-500 text-sm mt-1">
              Sharjah Gov. Registered.
            </p>
          </div>
          <div className="border-l-2 border-[#ffdb5e] pb-10 px-3 relative">
            <div className="w-16 h-16 bg-white border-2 border-[#ffdb5e] rounded-full absolute top-0 left-0 flex items-center justify-center">
              <ClockArrowUp className="blue" />
            </div>
            <h3 className="font-medium blue text-xl pt-20">
              5-10 Mins Response
            </h3>
            <p className="text-gray-500 text-sm mt-1">Response In 5-10 Mins.</p>
          </div>
          <div className="border-l-2 border-[#ffdb5e] pb-10 px-3 relative">
            <div className="w-16 h-16 bg-white border-2 border-[#ffdb5e] rounded-full absolute top-0 left-0 flex items-center justify-center">
              <MedalIcon className="blue" />
            </div>
            <h3 className="font-medium blue text-xl pt-20">30 Days Warranty</h3>
            <p className="text-gray-500 text-sm mt-1">
              30 Days Furniture Warranty.
            </p>
          </div>
        </div>

        <div>
          <p className="text md:text-[16.5px]  ">
            We‘re located on Al Estiqlal Street in central Sharjah. Unlike many
            online listings, we are a government-registered business with a
            physical showroom.
          </p>
          <p className="text md:text-[16.8px]  mt-2">
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
          <p className="text md:text-[16.8px]  mt-2">
            Unlike freelance dealers and online-only platforms, we are committed
            to quality and transparency as a{" "}
            <Link
              className="underline underline-offset-2"
              href={"/used-furniture-buyers-in-sharjah"}
            >
              second-hand furniture buyers in Sharjah.
            </Link>
          </p>
          <Button wtsBtn size={"lg"} className="mt-5 md:w-max w-full">
            Sell Your Furniture Quickly
          </Button>
        </div>
      </div>
    </section>
  );
};

export default States;
