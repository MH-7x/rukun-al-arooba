import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BuySellSection = () => {
  return (
    <section
      id="buy-sell-section"
      className="md:mt-60 mt-[480px] w-full md:px-20 blue-bg md:p-5 px-5 p-8 grid md:grid-cols-2 grid-cols-1 md:gap-5 gap-8 "
    >
      <div className="flex items-center gap-x-3 mx-auto ">
        <Image
          src={"/buy-used-furniture.svg"}
          alt="buy-furniture-svg-icon"
          width={50}
          height={50}
        />
        <Link href={"/contact-us"}>
          <h3 className="uppercase font-medium md:text-2xl text-xl text-white hover:underline cursor-pointer ">
            I Want To Buy Used Furniture <ArrowUpRight className="inline" />
          </h3>
        </Link>
      </div>
      <div className="flex items-center gap-x-3 mx-auto">
        <Image
          src={"/sell-used-furniture.svg"}
          alt="buy-furniture-svg-icon"
          width={50}
          height={50}
        />
        <Link href={"/used-furniture-buyers-in-dubai"}>
          {" "}
          <h3 className="uppercase font-medium md:text-2xl text-xl text-white hover:underline cursor-pointer ">
            I Want To Sell My Furniture <ArrowUpRight className="inline" />
          </h3>
        </Link>
      </div>
    </section>
  );
};

export default BuySellSection;
