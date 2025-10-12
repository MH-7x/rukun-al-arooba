import { CalendarCheck2 } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import BlogCard from "./BlogCard";

const LatestsNews = () => {
  return (
    <section className="md:w-11/12 mx-auto  md:px-0 px-3 mb-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="blue font-medium md:text-lg">OUR BLOGS</p>
          <h2 className="md:text-5xl text-3xl font-black headline mt-3">
            Latest News
          </h2>
        </div>
        <Link href={"/blogs"}>
          {" "}
          <Button size={"lg"} className="md:px-12">
            ALL NEWS
          </Button>
        </Link>
      </div>
      <div className="mt-16 ">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          <BlogCard
            image="Background-with-text.jpg"
            category="Commercial Moving"
            title="Load Boards Show Flat Demand & Higher Rates in Dubai Market"
            date="April 6, 2021"
            excerpt="Duis dictum vestibulum ante vitae ullamcorper. Risusque phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magna."
            href="#"
          />
          <BlogCard
            image="Background-with-text.jpg"
            category="Commercial Moving"
            title="Load Boards Show Flat Demand & Higher Rates in Dubai Market"
            date="April 6, 2021"
            excerpt="Duis dictum vestibulum ante vitae ullamcorper. Risusque phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magna."
            href="#"
          />
          <BlogCard
            image="Background-with-text.jpg"
            category="Commercial Moving"
            title="Load Boards Show Flat Demand & Higher Rates in Dubai Market"
            date="April 6, 2021"
            excerpt="Duis dictum vestibulum ante vitae ullamcorper. Risusque phasellus ullamcorper, odio vitae eleifend ultricies lectus orci congue magna."
            href="#"
          />
        </div>
      </div>
    </section>
  );
};

export default LatestsNews;
