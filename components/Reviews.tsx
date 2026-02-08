import React from "react";
import TestimonialSlider from "./TestimonialsSlider";
import { Check } from "lucide-react";
import Image from "next/image";

const Reviews = () => {
  return (
    <section id="reviews" className="h-[600px]  relative mt-36">
      <div className="bg-white/70 md:px-0 px-3 md:py-0 py-10 absolute top-0 left-0 w-full h-full md:pr-10 grid md:grid-cols-2 grid-cols-1 items-center ">
        <div className="md:h-full md:block hidden relative">
          <Image
            src={"/cta-furniture-img.png"}
            fill
            alt="Single Furniture Image"
            className="object-contain object-top absolute drop-shadow-xl"
          />
        </div>
        <div>
          <h2 className="md:text-5xl text-3xl font-bold blue mt-3">
            What Our Client&apos;s Said
          </h2>
          <ul className="grid md:grid-cols-2 grid-cols-1 gap-y-2  mt-10 md:pr-10">
            <li className="flex items-center gap-x-2 blue font-medium">
              <div className="w-6 h-6 flex items-center justify-center p-1 bg-[#FFF8DF] rounded-2xl pri">
                <Check size={15} />
              </div>{" "}
              <span>Checked & Repaired</span>
            </li>
            <li className="flex items-center gap-x-2 blue font-medium">
              <div className="w-6 h-6 flex items-center justify-center p-1 bg-[#FFF8DF] rounded-2xl pri">
                <Check size={15} />
              </div>{" "}
              <span>Save Money, Keep Style</span>
            </li>
            <li className="flex items-center gap-x-2 blue font-medium">
              <div className="w-6 h-6 flex items-center justify-center p-1 bg-[#FFF8DF] rounded-2xl pri">
                <Check size={15} />
              </div>{" "}
              <span>20+ Years Experience</span>
            </li>
            <li className="flex items-center gap-x-2 blue font-medium">
              <div className="w-6 h-6 flex items-center justify-center p-1 bg-[#FFF8DF] rounded-2xl pri">
                <Check size={15} />
              </div>{" "}
              <span>Warranty & Easy Returns</span>
            </li>
            <li className="flex items-center gap-x-2 blue font-medium">
              <div className="w-6 h-6 flex items-center justify-center p-1 bg-[#FFF8DF] rounded-2xl pri">
                <Check size={15} />
              </div>{" "}
              <span>Quick Buy & Sell</span>
            </li>
            <li className="flex items-center gap-x-2 blue font-medium">
              <div className="w-6 h-6 flex items-center justify-center p-1 bg-[#FFF8DF] rounded-2xl pri">
                <Check size={15} />
              </div>{" "}
              <span>Discounted Delivery</span>
            </li>
          </ul>

          <TestimonialSlider />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
