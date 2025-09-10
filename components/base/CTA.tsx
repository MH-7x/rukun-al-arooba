import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const CTA = ({ title, desc }: { title: string; desc: ReactNode }) => {
  return (
    <section className="my-36 py-20 relative  overflow-hidden">
      {/* SVG background */}
      <svg
        className="absolute inset-0 w-full h-full md:opacity-100 opacity-70"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 800 450"
        opacity="0.85"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter
            id="bbblurry-filter"
            x="-100%"
            y="-100%"
            width="400%"
            height="400%"
            filterUnits="objectBoundingBox"
            primitiveUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur
              stdDeviation="58"
              x="0%"
              y="0%"
              width="100%"
              height="100%"
              in="SourceGraphic"
              edgeMode="none"
              result="blur"
            />
          </filter>
        </defs>
        <g filter="url(#bbblurry-filter)">
          <ellipse rx="150" ry="156.5" cx="317.9" cy="385.8" fill="#c07d5346" />
          <ellipse rx="150" ry="156.5" cx="303.7" cy="133.5" fill="#ffdb5e46" />
          <ellipse rx="150" ry="156.5" cx="580.5" cy="238.8" fill="#144e5a46" />
        </g>
      </svg>

      {/* Your actual content goes here */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full max-w-3xl text-center mx-auto md:px-0 px-3">
        <h2 className="md:text-4xl text-3xl font-bold blue">{title}</h2>
        <div className="mt-5 text flex flex-col gap-y-1 text-center">
          {desc}
        </div>

        <div className="flex gap-x-4 mt-5">
          <Button size={"lg"}>
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
          <Link href={"#types-of-furniture-we-buy"}>
            <Button variant={"secondary"} size={"lg"}>
              Contact Us <ArrowUpRight />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA;
