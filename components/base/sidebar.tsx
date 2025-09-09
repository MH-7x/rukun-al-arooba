"use client";

import { locationList, servicesList } from "@/lib/list";
import { Plus, X } from "lucide-react";
import Link from "next/link";

export const Sidebar = () => {
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };
  return (
    <div className="sidebar scrollbar-thin scrollbar-thumb-accent scrollbar-track-primary">
      {/* Close Button */}
      <label
        htmlFor="menu-toggle"
        className="absolute top-3 right-4 text-xl cursor-pointer"
      >
        <X size={30} />
      </label>

      <ul className="w-full px-5 mt-[70px] text-lg">
        <li className="border-b border-[#144E5A]/50 pl-4 py-3 font-medium">
          <Link onClick={closeSidebar} href={"/about-us"}>
            About Us
          </Link>
        </li>
        <li className="border-b border-[#144E5A]/50">
          <input type="checkbox" id="buy-sell" className="peer hidden" />
          <label
            htmlFor="buy-sell"
            className="flex items-center justify-between w-full pl-4 py-3 cursor-pointer"
          >
            <span className="font-medium">Buy & Sell</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={[
              { title: "Used Furniture Buyers", link: "#" },
              { title: "Used Furniture Sellers", link: "#" },
            ]}
          />
        </li>
        {/* SERVICES DROPDOWN */}
        <li className="border-b border-[#144E5A]/50">
          <input type="checkbox" id="services-toggle" className="peer hidden" />
          <label
            htmlFor="services-toggle"
            className="flex items-center justify-between w-full pl-4 py-3 cursor-pointer"
          >
            <span className="font-medium">Services</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={servicesList.map((ser) => {
              return {
                link: ser.link,
                title: ser.title,
              };
            })}
          />
        </li>

        {/* LOCATIONS DROPDOWN */}
        <li className="border-b border-[#144E5A]/50">
          <input
            type="checkbox"
            id="locations-toggle"
            className="peer hidden"
          />
          <label
            htmlFor="locations-toggle"
            className="flex items-center justify-between w-full pl-4 py-3 cursor-pointer"
          >
            <span className="font-medium">Locations</span>
            <Plus className="transition-transform peer-checked:rotate-45" />
          </label>
          <DropDown
            list={locationList.map((loc) => {
              return {
                link: loc.link,
                title: loc.title,
              };
            })}
          />
        </li>

        {/* OTHER LINKS */}
        <li className="border-b border-[#144E5A]/50 pl-4 py-3 font-medium">
          <Link onClick={closeSidebar} href={"/about-us"}>
            How We Work
          </Link>
        </li>
        <li className="border-b border-[#144E5A]/50 pl-4 py-3 font-medium">
          <Link onClick={closeSidebar} href={"/contact-us"}>
            Contact Us
          </Link>
        </li>
        <li className="border-b border-[#144E5A]/50 pl-4 py-3 font-medium">
          <a onClick={closeSidebar} href={"/blogs"}>
            {" "}
            Blogs
          </a>
        </li>
      </ul>
    </div>
  );
};

const DropDown = ({ list }: { list: { title: string; link: string }[] }) => {
  const closeSidebar = () => {
    const checkbox = document.getElementById("menu-toggle") as HTMLInputElement;
    if (checkbox) checkbox.checked = false;
  };

  return (
    <ul className="hidden peer-checked:block pl-4 pb-2 space-y-2 text-sm text ">
      {list.map((item) => (
        <li key={item.title} title={item.title}>
          <Link
            className="pb-0.5 px-1 text-[15px] "
            href={item.link}
            onClick={closeSidebar} // Close sidebar on link click
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
