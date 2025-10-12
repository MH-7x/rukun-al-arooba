"use client";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";
import logo from "../../public/rukun-al-arooba-used-furniture.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import * as React from "react";
import { useState, useEffect } from "react";
import MobileNa from "../base/MobileNa";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { createEncodedUrl } from "@/lib/utils";

export const navItems = [
  {
    title: "اثاث مستعمل",
    link: createEncodedUrl("أثاث-مستعمل"),
  },
  {
    title: "اثاث مستعمل الشارقة",
    link: createEncodedUrl("أثاث-مستعمل-الشارقة"),
  },
  {
    title: "اثاث مستعمل دبي",
    link: createEncodedUrl("اثاث-مستعمل-دبي"),
  },
  {
    title: "اثاث مستعمل ابوظبي",
    link: createEncodedUrl("اثاث-مستعمل-ابوظبي"),
  },
  {
    title: "اثاث مستعمل عجمان",
    link: createEncodedUrl("اثاث-مستعمل-عجمان"),
  },
  {
    title: "اثاث مستعمل العين",
    link: createEncodedUrl("اثاث-مستعمل-العين"),
  },
  {
    title: "اثاث مستعمل راس الخيمة",
    link: createEncodedUrl("اثاث-مستعمل-راس-الخيمة"),
  },
];

export default function ArNavbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileSize, setMobileSize] = useState(false);

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
    return;
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 768) {
        setMobileSize(true);
      }
      window.addEventListener("resize", () => {
        if (window.innerWidth < 768) {
          setMobileSize(true);
        } else {
          setMobileSize(false);
        }
      });
    }
  }, []);

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
              <MapPin width={18} height={18} /> <span>عنوان المتجر.</span>
            </p>
            <p className="text-sm mt-0.5">
              شارع الاستقلال، بو شغارة، منطقة القاسمية
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
                <span>رقم التليفون.</span>
              </p>
              <p dir="ltr" className="md:text-sm text-xs mt-0.5">
                (055) 6461731
              </p>
            </div>
            <span className="w-0.5 h-10 bg-gray-300 md:block hidden"></span>
            <div className="flex gap-x-2">
              <Button wtsBtn size={"sm"} className="md:text-sm text-xs">
                واتساب لنا
              </Button>
              <Button
                callBtn
                variant={"secondary"}
                className="md:text-sm text-xs"
                size={"sm"}
              >
                اتصل الآن
              </Button>
            </div>
          </div>
        </div>
      </div>
      {mobileSize ? (
        <>
          <MobileNa ar />
        </>
      ) : (
        <>
          <nav className="border-t md:px-0 px-3  md:block hidden w-full  min-h-12 mt-1 py-2">
            <NavigationMenu className="mx-auto" viewport={false}>
              <NavigationMenuList>
                {navItems.map((item, index) => (
                  <NavigationMenuItem key={index} className="text-[#353535]">
                    <NavigationMenuLink
                      asChild
                      className={navigationMenuTriggerStyle()}
                    >
                      <Link href={item.link}>{item.title}</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </>
      )}
    </header>
  );
}
