import { locationList, servicesList } from "@/lib/list";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FacebookIcon,
  InstagramIcon,
  PinterestIcon,
  WhatsAppIcon,
  GoogleBusinessIcon,
} from "../Icons";
const Footer = () => {
  return (
    <>
      <footer className="relative z-10 blue-bg pb-10 pt-20 grid-wrapper text-white">
        <div className="grid-background" />
        <div className="md:w-11/12 mx-auto">
          <div className="md:-mx-4 flex flex-wrap">
            <div className="w-full px-4 sm:w-2/3 lg:w-3/12">
              <div className="mb-10 w-full">
                <Link
                  href="/#"
                  className="mb-6 inline-block w-full relative h-[100px]"
                >
                  <Image
                    src={"/rukun-al-arooba-used-furniture-yellow.svg"}
                    alt="Rukun Al Arooba Used Furniture Logo"
                    fill
                    className="object-contain md:-ml-7"
                  />
                </Link>
                <p className="mb-7 text-sm text-body-color ">
                  Rukun Al Arooba is Used Furniture Company in Sharjah, We Buy &
                  Sell All Kind Of Used Furniture in Appliance in All Over
                  Emirates.
                </p>
                <p className=" text-sm ">
                  <span className=" font-medium ">Phone No :</span> (055)
                  6461731
                </p>
                <p className=" text-sm    mt-3">
                  <span className="font-medium">Address :</span>Al Estiqlal
                  Street, Bu Shaghara, Hay Al Qasimiah
                </p>
                <p className=" text-sm    mt-3">
                  <span className="font-medium">Opening Hours :</span>Daily 9
                  AM–11 PM, Mon till 11:30, Wed till 10:30
                </p>
              </div>
            </div>

            <LinkGroup header="Services">
              {servicesList.map((service, index) => (
                <NavLink
                  key={index}
                  link={service.link}
                  label={service.title}
                />
              ))}
            </LinkGroup>
            <LinkGroup header="Locations">
              {locationList.map((location, index) => (
                <NavLink
                  key={index}
                  link={location.link}
                  label={location.title}
                />
              ))}
            </LinkGroup>
            <LinkGroup header="Quick Links">
              <NavLink link="/about-us" label="About Us" />
              <NavLink link="/contact-us" label="Contact Us" />
              <NavLink
                link="https://share.google/uLNlamfwJl2DVzPi6"
                label="Our Showroom"
              />
              <NavLink link="/how-we-work" label="How We Work" />
              <NavLink link="/#" label="Our Blogs" />
              <NavLink link="/#" label="Gallery" />
              <NavLink
                link="https://abumuhammadmovers.com/"
                label="Our Moving Partner"
              />
            </LinkGroup>

            <div className="w-full px-4 sm:w-1/2 lg:w-3/12">
              <div className="mb-10 w-full">
                <h4 className="mb-9 text-lg font-medium  ">Visit To Store</h4>
                <iframe
                  title="Our Store Location in Google Maps"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8696529263066!2d55.39297417447848!3d25.3421546258158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b39dde3733b%3A0x70627f406a04df1e!2sRukun%20AL%20arooba%20used%20furniture%20and%20electronics%20trading!5e0!3m2!1sen!2s!4v1757767922306!5m2!1sen!2s"
                  width="280"
                  height="200"
                  className="w-full "
                  allowFullScreen
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-11/12 mx-auto mt-10 flex items-center justify-between flex-wrap md:px-0 px-3">
          <div>
            <div className="flex flex-wrap gap-x-3 text-sm ">
              <p className="">
                Copyright © {new Date().getFullYear()} Rukun Al Arooba
              </p>
              <Link className="underline underline-offset-2" href={"#"}>
                Privacy Policy
              </Link>
              <Link className="underline underline-offset-2" href={"#"}>
                Terms & Conditions
              </Link>
            </div>
            <p className="text-sm md:mt-0 mt-3">
              Develop & Maintenance By{" "}
              <span className="underline underline-offset-2">
                Mashal Huraira
              </span>
            </p>
          </div>
          <div className="flex items-center md:mt-0 mt-3 space-x-3">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="[&>svg]:h-6 [&>svg]:w-6 text-current"
            >
              <FacebookIcon />
            </a>

            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="[&>svg]:h-6 [&>svg]:w-6 text-current"
            >
              <InstagramIcon />
            </a>

            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
              className="[&>svg]:h-6 [&>svg]:w-6 text-current"
            >
              <PinterestIcon />
            </a>

            <a
              href="https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture" /* replace with your number (international format, no +) */
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="[&>svg]:h-6 [&>svg]:w-6 text-current"
            >
              <WhatsAppIcon />
            </a>

            <a
              href="https://share.google/uLNlamfwJl2DVzPi6"
              target="_blank"
              rel="noreferrer"
              aria-label="Google Business Profile"
              className="[&>svg]:h-6 [&>svg]:w-6 text-current"
            >
              <GoogleBusinessIcon />
            </a>
          </div>
        </div>
        <div>
          <span className="absolute bottom-0 left-0 z-[-1]">
            <svg
              width={217}
              height={229}
              viewBox="0 0 217 229"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M-64 140.5C-64 62.904 -1.096 1.90666e-05 76.5 1.22829e-05C154.096 5.49924e-06 217 62.904 217 140.5C217 218.096 154.096 281 76.5 281C-1.09598 281 -64 218.096 -64 140.5Z"
                fill="url(#paint0_linear_1179_5)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_5"
                  x1="76.5"
                  y1={281}
                  x2="76.5"
                  y2="1.22829e-05"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#3056D3" stopOpacity="0.08" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="absolute right-10 top-10 z-[-1]">
            <svg
              width={75}
              height={75}
              viewBox="0 0 75 75"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.5 -1.63918e-06C58.2107 -2.54447e-06 75 16.7893 75 37.5C75 58.2107 58.2107 75 37.5 75C16.7893 75 -7.33885e-07 58.2107 -1.63918e-06 37.5C-2.54447e-06 16.7893 16.7893 -7.33885e-07 37.5 -1.63918e-06Z"
                fill="url(#paint0_linear_1179_4)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1179_4"
                  x1="-1.63917e-06"
                  y1="37.5"
                  x2={75}
                  y2="37.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#13C296" stopOpacity="0.31" />
                  <stop offset={1} stopColor="#C4C4C4" stopOpacity={0} />
                </linearGradient>
              </defs>
            </svg>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;

const LinkGroup = ({
  children,
  header,
}: {
  children: React.ReactNode;
  header: string;
}) => {
  return (
    <>
      <div className="w-full px-4 sm:w-1/2 lg:w-2/12">
        <div className="mb-10 w-full">
          <h4 className="mb-9 text-lg font-medium ">{header}</h4>
          <ul className="space-y-3 text-sm">{children}</ul>
        </div>
      </div>
    </>
  );
};

const NavLink = ({ link, label }: { link: string; label: string }) => {
  return (
    <li>
      <a
        href={link}
        className="inline-block text-sm  text-body-color hover:text-[#c07d53] "
      >
        {label}
      </a>
    </li>
  );
};
