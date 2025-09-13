import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import heroImage from "../../public/used-furniture-in-sharjah-b.jpg";
const HeroSection = () => {
  return (
    <section
      id="used-furniture-in-sharjah"
      className="w-full h-[500px] bg-red-300 relative "
    >
      <Image
        src={heroImage}
        placeholder="blur"
        loading="eager"
        alt="rukun al arooba used furniture in sharjah"
        fill
        className="absolute object-cover object-center"
      />
      <div
        id="content"
        className="md:px-16 absolute top-0 left-0 w-full h-full flex items-center justify-between flex-wrap"
      >
        <div className="bg-white/80  md:p-10 py-10 px-3 md:-mt-20 mt-14 md:w-[560px] rounded-2xl">
          <h1 className="headline text-4xl/tight font-bold">
            <span className="border-b-4 border-[#ffdb5e]">
              {" "}
              Rukun Al Arooba
            </span>{" "}
            <span className="block blue"> Used Furniture in Sharjah</span>
          </h1>
          <p className="headline mt-5 ">
            Looking for quality used furniture in Sharjah? Welcome to Rukun Al
            Arooba Used Furniture, where over 20 years of experience meets
            modern convenience.
          </p>
          <Button className="mt-5" size={"lg"}>
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
        </div>
        <div className="bg-white/90  drop-shadow-2xl md:mx-0 mx-auto md:h-96 h-80 rounded-full md:w-96 w-80 md:mt-64 mt-16 p-5 ">
          <Image
            src={"/Picture1.png"}
            alt="Rukun Al Arooba Business Profile Screenshort"
            width={260}
            className="mx-auto "
            height={260}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
