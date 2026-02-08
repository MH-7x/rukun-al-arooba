import React from "react";
import {
  Phone,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  MessageCircle,
  Pin,
  Navigation,
  ExternalLink,
  Store,
} from "lucide-react";
import Image from "next/image";
import { locationList, servicesList } from "@/lib/list";
import { createEncodedUrl } from "@/lib/utils";
import Link from "next/link";

// --- Data for Links ---
const serviceLinks = [
  "Used Home Appliances",
  "Used Electronics",
  "Used Office Furniture",
  "Used Office Furniture Dealer",
  "Used Beds For Sale",
  "Used Refrigerators",
  "Used Sofa Sets",
  "Selling Used Furniture",
  "Buying Used Furniture",
];

const locationLinks = [
  "Used Furniture Buyers in Sharjah",
  "Used Furniture in Dubai",
  "Used Furniture in Abu Dhabi",
  "Used Furniture in Ajman",
  "Used Furniture in Ras Al Khaimah",
  "Used Furniture in Al Ain",
  "Used Furniture Abu Shagara",
  "Used Furniture Mussafah",
  "Buying Used Furniture",
];

const quickLinks = [
  { title: "About Us", link: "/about-us" },
  { title: "Contact Us", link: "/contact-us" },
  { title: "Our Showroom", link: "https://share.google/uLNlamfwJl2DVzPi6" },
  { title: "How We Work", link: "/how-we-work" },
  { title: "Blog Posts", link: "/blogs" },
  { title: "Furniture Gallery", link: "/" },
  { title: "Our Moving Partner", link: "https://abumuhammadmovers.com/" },

  {
    title: "About Web Developer",
    link: "https://wa.me/+923471309916?text=Hello%20Mashal,%20I%20Need%20Your%20Service%20!",
  },
];

const navItems = [
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

const socialLinks = [
  "https://www.facebook.com/rukun.al.arooba.used.furniture/",
  "https://www.instagram.com/",
  "https://www.pinterest.com/rukun_al_arooba_used_furniture/",
  "https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture",
  "https://share.google/uLNlamfwJl2DVzPi6",
];

const FooterNew = () => {
  return (
    <footer className="relative blue-bg text-gray-200 overflow-hidden mt-20">
      {/* Decorative Background Elements (Blur/Gradient) */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* --- Top Section: Logo & Description --- */}
        <div className="flex flex-col items-center text-center mb-10">
          {/* Logo Placeholder */}
          <a className="mb-6 group cursor-pointer inline-block w-full relative h-[100px]">
            <Image
              src="/rukun-al-arooba-used-furniture-yellow.svg"
              alt="Rukun Al Arooba Used Furniture Logo"
              fill
              className="object-contain"
            />
          </a>

          <p className="max-w-2xl text-sm md:text-base text-gray-300 leading-relaxed font-light">
            Rukun Al Arooba is Used Furniture Company in Sharjah, We Buy Sell
            All Kind Of Used Furniture and Appliances All Over Emirates.
          </p>
        </div>

        {/* --- Contact Info Bar --- */}
        <div className=" mb-16">
          <div className="flex flex-col md:flex-row justify-center md:items-center items-start gap-4 md:gap-12 text-sm font-medium">
            <div className="flex items-center gap-3 cursor-pointer ">
              <div className="p-2 bg-white/5 rounded-full ">
                <Phone size={18} className="tert" />
              </div>
              <span>055 6461731</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />
            <div className="flex items-center gap-3 cursor-pointer ">
              <div className="p-2 bg-white/5 rounded-full ">
                <MapPin size={18} className="tert" />
              </div>
              <span>Al Estiqlal Street, Bu Shaghara, Hay Al Qasimiah</span>
            </div>

            <div className="hidden md:block w-px h-8 bg-white/10" />

            <div className="flex items-center gap-3 cursor-pointer ">
              <div className="p-2 bg-white/5 rounded-full ">
                <Clock size={18} className="tert" />
              </div>
              <span>Daily 9 AM–11 PM, Mon till 11:30, Wed till 10:30</span>
            </div>
          </div>
        </div>

        {/* --- Main Grid Section --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-16">
          {/* Column 1: Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-l-4 border-[#ffdb5e] pl-3">
              Services
            </h3>
            <ul className="space-y-2.5">
              {servicesList.map((link, index) => (
                <li key={index} className="w-max ">
                  <a
                    href={link.link}
                    className="text-sm hover:text-[#ffdb5e] hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-[#ffdb5e] transition-colors"></span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Locations */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-l-4 border-[#ffdb5e] pl-3">
              Locations
            </h3>
            <ul className="space-y-2.5">
              {locationList.map((loc, index) => (
                <li key={index} className="w-max ">
                  <a
                    href={loc.link}
                    className="text-sm hover:text-[#ffdb5e] hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-yellow-500 transition-colors"></span>
                    {loc.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-l-4 border-[#ffdb5e] pl-3">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link, index) => (
                <li key={index} className="w-max ">
                  <a
                    href={link.link}
                    className="text-sm hover:text-[#ffdb5e] hover:pl-2 transition-all duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-gray-500 rounded-full group-hover:bg-yellow-500 transition-colors"></span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Visit Store (Map Placeholder) */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white uppercase tracking-wider border-l-4 border-[#ffdb5e] pl-3">
              Visit To Store
            </h3>
            <iframe
              className="w-full h-48  bg-slate-800 rounded-lg overflow-hidden relative group border border-white/10 hover:border-yellow-500/50 transition-colors"
              title="Our Store Location in Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.8696529263066!2d55.39297417447848!3d25.3421546258158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5b39dde3733b%3A0x70627f406a04df1e!2sRukun%20AL%20arooba%20used%20furniture%20and%20electronics%20trading!5e0!3m2!1sen!2s!4v1757767922306!5m2!1sen!2s"
              allowFullScreen
              loading="lazy"
            />
            <ul className="flex flex-wrap gap-x-3 text-sm flex-row ">
              {navItems.map((item, i) => (
                <li key={i}>
                  <Link href={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- Bottom Section --- */}
        <div className="pt-8 border-t border-white/10 flex flex-col-reverse md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-xs text-gray-200">
            <p className="text-center md:text-left">
              Copyright © {new Date().getFullYear()}{" "}
              <span className="text-gray-300 font-medium">Rukun Al Arooba</span>
            </p>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#ffdb5e] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#ffdb5e] transition-colors">
                Terms & Conditions
              </a>
            </div>
            <div className="hidden md:block w-1 h-1 bg-gray-600 rounded-full" />
            <a
              href="https://wa.me/+923471309916?text=Hello%20Mashal,%20I%20Need%20Your%20Service%20!"
              rel="noopener noreferrer"
              className=" "
            >
              Develop & Maintenance By Mashal Huraira
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            {[Facebook, Instagram, Pin, MessageCircle, Store].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href={socialLinks[idx]}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-gray-200 hover:bg-[#ffdb5e] hover:text-[#144e5a] hover:-translate-y-1 transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ),
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterNew;
