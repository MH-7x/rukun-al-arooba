import React from "react";
import { Sidebar } from "./sidebar";
import Image from "next/image";
import Link from "next/link";
import logoYel from "../../public/rukun-al-arooba-used-furniture-yellow.svg";
const MobileNa = () => {
  return (
    <nav className="bg-[#144E5A] relative  md:hidden md:px-0 px-3 w-full min-h-12 mt-1 flex justify-between items-center py-2">
      <Link href={"/"} id="Logo" className="h-12 w-[113px]  relative">
        <Image
          src={logoYel}
          loading="eager"
          alt="Rukun Al Arooba Used Furniture Logo"
          fill
          className="absolute object-contain object-center"
        />
      </Link>
      <input type="checkbox" id="menu-toggle" className="peer hidden" />
      <label
        htmlFor="menu-toggle"
        className="flex items-center gap-x-2  py-2 px-2.5 rounded-md b-red-bg b-white"
      >
        {" "}
        <svg
          fill="#ffffff "
          width="40px"
          height="40px"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path d="M.5 7.42h15v1.25H.5zm0 3.6h15v1.25H.5zm0-7.29h15v1.25H.5z"></path>
          </g>
        </svg>
      </label>
      <Sidebar />{" "}
    </nav>
  );
};

export default MobileNa;
