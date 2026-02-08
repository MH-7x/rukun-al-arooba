import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const ModernWayToBuySell = () => {
  return (
    <section className="w-full mt-36  relative md:px-0 px-3">
      {/* Bottom Fade Grid Background */}

      <h2 className="headline md:text-4xl/tight text-3xl/tight text-center font-bold">
        <span className="border-b-4 border-[#ffdb5e]">A Modern Way to</span>{" "}
        <span className="block blue">
          Buy and Sell Used Furniture in Sharjah
        </span>
      </h2>
      <p className="text max-w-4xl mx-auto mt-5 text text-center">
        The market for used furniture can be fragmented and difficult to
        navigate, with many companies lacking a trustworthy online presence. At
        Rukun Al Arooba, we simplify the process by providing a professional,
        end-to-end solution.
      </p>
      <p className="text max-w-4xl mx-auto mt-2 text text-center">
        Whether you are moving, redecorating, or downsizing, our goal is to help
        you save money without compromising on quality or style.
      </p>
      <div className="mt-5 flex gap-x-3 w-full justify-center">
        <Link href={"/used-furniture-buyers-in-dubai"}>
          {" "}
          <Button>
            {" "}
            Sell To Us <ArrowUpRight />
          </Button>
        </Link>
        <Link href={"/contact-us"}>
          {" "}
          <Button variant={"secondary"}>
            Buy From Us <ArrowUpRight />
          </Button>
        </Link>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 max-w-6xl mx-auto mt-10 z-10">
        <div className="bg-white rounded-2xl md:h-96 h-80 relative overflow-hidden ">
          <Image
            src={"/ar/rukun-al-arooba-used-furniture.jpg"}
            alt="modern furniture showroom sharjah"
            fill
            className="object-cover"
          />
        </div>
        <div className="bg-white rounded-2xl md:h-96 h-52 relative overflow-hidden ">
          <Image
            src={"/used-furniture-store-sharjah-inner-view-2.jpg"}
            alt="used furniture store sharjah inner view"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ModernWayToBuySell;
