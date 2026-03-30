"use client";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import logo from "../public/rukun-al-arooba-used-furniture.svg";

import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useState, useEffect, useCallback, useRef } from "react";
import DesktopNav from "./base/DesktopNav";
import MobileNa from "./base/MobileNa";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [mobileSize, setMobileSize] = useState(false);
  const lastScrollYRef = useRef(0);
  const scrollFrameRef = useRef<number | null>(null);

  // Throttled scroll handler using requestAnimationFrame
  const handleScroll = useCallback(() => {
    if (scrollFrameRef.current !== null) return;

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollYRef.current) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }

      lastScrollYRef.current = currentScrollY;
      scrollFrameRef.current = null;
    });
  }, []);

  // Handle window resize with debouncing
  const handleResize = useCallback(() => {
    setMobileSize(window.innerWidth < 768);
  }, []);

  useEffect(() => {
    // Initialize mobile size on mount
    setMobileSize(window.innerWidth < 768);

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      if (scrollFrameRef.current !== null) {
        cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, [handleScroll, handleResize]);

  return (
    <header
      className={`w-full md:px-10 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } transition-all duration-300 ease-in-out z-50 fixed top-0 left-0 right-0 bg-white shadow-md`}
    >
      {/* top section */}
      <div className="grid md:grid-cols-3 grid-cols-1 md:px-0 px-3 w-full items-center md:py-2 pb-1">
        {/* address */}
        <div className="md:block hidden">
          <div className="text-[#353535]">
            <p className="text-sm gap-x-1 font-medium flex items-center">
              <MapPin width={18} height={18} /> <span>Store Address.</span>
            </p>
            <p className="text-sm mt-0.5">
              Al Estiqlal Street, Bu Shaghara, Hay Al Qasimiah
            </p>
          </div>
        </div>

        {/* logo */}
        <div className="md:flex hidden items-center justify-center">
          <Link href={"/"} id="Logo" className="w-56 h-[70px] relative mx-auto">
            <Image
              src={logo}
              loading="eager"
              alt="Rukun Al Arooba Used Furniture Logo"
              fill
              className="absolute object-contain object-center"
            />
          </Link>
        </div>

        {/* contact */}
        <div className="flex md:justify-end justify-center md:mt-0 mt-3">
          <div className="flex items-center md:justify-center justify-between w-full gap-x-5">
            <div className="text-[#353535]">
              <p className="md:text-sm text-xs gap-x-1 font-medium flex items-center">
                <Phone className="md:size-[18px] size-[15px]" />{" "}
                <span>Phone No.</span>
              </p>
              <p className="md:text-sm text-xs mt-0.5">(055) 6461731</p>
            </div>
            <span className="w-0.5 h-10 bg-gray-300 md:block hidden"></span>
            <div className="flex gap-x-2">
              <Button wtsBtn size={"sm"} className="md:text-sm text-xs">
                WhatsApp Us
              </Button>
              <Button
                callBtn
                variant={"secondary"}
                className="md:text-sm text-xs"
                size={"sm"}
              >
                Call Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      {mobileSize ? (
        <>
          <MobileNa />
        </>
      ) : (
        <>
          {" "}
          <DesktopNav />
        </>
      )}
    </header>
  );
}
