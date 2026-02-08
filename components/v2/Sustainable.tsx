import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

const Sustainable = () => {
  return (
    <section
      id="Buy-Used-Furniture-in-Sharjah"
      className="w-full md:h-[500px] h-[540px] relative mt-28"
    >
      <Image
        src={"/Sustainable-Furniture-2.jpg"}
        alt="sustainable furniture shopping with rukun al arooba used furniture"
        fill
        className="object-cover object-center"
      />
      <div className="absolute  px-3 top-0 left-0 w-full h-full bg-gradient-to-r from-[#144E5A] to-[#144E5A]/60 flex flex-col items-start justify-center md:px-20">
        <h2 className="text-white md:text-4xl text-3xl font-bold text-shadow-2xs">
          Sustainable Furniture Shopping -<br className="md:block hidden" />
          Environmental Impact
        </h2>
        <p className="mt-7 text-white text-shadow-2xs max-w-3xl">
          Choose sustainability. Choose second-hand. Choose a better future for
          the UAE.
        </p>
        <p className="mt-2 text-white text-shadow-2xs max-w-3xl">
          At Rukun Al Arooba, we&lsquo;re more than just{" "}
          <Link href={"/"}>used furniture dealers</Link>– we&lsquo;re
          environmental champions. Every piece of furniture we restore and
          resell represents a victory against waste and unnecessary consumption.
        </p>
        <div className="mt-7  flex gap-x-3">
          <Button wtsBtn size={"lg"}>
            WhatsApp Us
          </Button>
          <Link href={"/contact-us"}>
            {" "}
            <Button variant={"secondary"} size={"lg"}>
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Sustainable;
