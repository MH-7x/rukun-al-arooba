import { Button } from "../ui/button";
import Image from "next/image";
import heroImage from "@/public/new-hero.jpg";
import { StoreIcon, MessageCircle } from "lucide-react";
function HeroSection() {
  return (
    <section
      id="used-furniture-in-sharjah"
      className="w-full md:h-[550px] h-[530px] relative overflow-hidden"
    >
      <Image
        src={heroImage}
        alt="Rukun Al Arooba Used Furniture in Sharjah"
        fill
        loading="eager"
        placeholder="blur"
        fetchPriority="high"
        className="object-cover"
      />
      <div className="absolute w-full h-full top-0 left-0 bg-gradient-to-b md:from-transparent from-[#144e5a]/25 via-[#144e5a]/50 to-[#144e5a] md:px-0 px-3">
        <div className="md:w-[80%] w-full mx-auto flex flex-col items-start justify-end pb-20 h-full">
          <h1 className="font-bold text-white md:text-5xl text-[33px] leading-[1.1] md:text-start text-center text-shadow-2xs">
            Rukun Al Arooba <br />
            Used Furniture in Sharjah
          </h1>
          <p className="max-w-3xl text-gray-100 md:text-start text-center mt-6 text-shadow-2xs md:text-lg/snug text-base ">
            Looking for quality used furniture in Sharjah? Welcome to Rukun Al
            Arooba Used Furniture, where over 20 years of experience meets
            modern convenience.
          </p>
          <div className="mt-7 flex gap-x-5">
            <Button wtsBtn size={"lg"}>
              {" "}
              <MessageCircle className="text-white" />
              WhatsApp Us{" "}
            </Button>
            <Button
              storeBtn
              size={"lg"}
              variant={"secondary"}
              className="bg-transparent text-white hover:text-[#144e5a]"
            >
              {" "}
              <StoreIcon />
              Visit Our Store{" "}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
