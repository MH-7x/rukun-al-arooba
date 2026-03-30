import React, { ReactNode } from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const CTA = ({
  title,
  desc,
  headerUse,
}: {
  title: string;
  headerUse?: boolean;
  desc: ReactNode;
}) => {
  return (
    <section
      className={`${headerUse ? "" : "my-32"}  py-20 relative  overflow-hidden`}
    >
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
        {headerUse ? (
          <>
            <h1 className="md:text-4xl text-3xl font-bold blue">{title}</h1>
          </>
        ) : (
          <>
            <h2 className="md:text-4xl text-3xl font-bold blue">{title}</h2>
          </>
        )}
        <div className="mt-5 text flex flex-col gap-y-1 text-center">
          {desc}
        </div>

        {!headerUse && (
          <div className="flex gap-x-4 mt-5">
            <Button wtsBtn size={"lg"}>
              <Image
                src={"/whatsapp.svg"}
                alt="whatsapp svg"
                width={17}
                height={17}
              />
              WhatsApp Us{" "}
            </Button>
            <Link href={"/contact-us"}>
              <Button variant={"secondary"} size={"lg"}>
                Contact Us <span>➤</span>
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTA;
