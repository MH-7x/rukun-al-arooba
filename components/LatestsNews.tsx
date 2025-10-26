import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import BlogCard from "./BlogCard";
const blogsData = [
  {
    id: 1,
    category: "Used Furniture",
    title: "Why Buying Used Furniture in UAE Is a Smart Choice",
    body: "Discover how purchasing second-hand furniture can save you money while helping the environment. Learn where to find quality used furniture across Dubai, Sharjah, and Ajman.",
  },
  {
    id: 2,
    category: "Sustainability",
    title: "Eco-Friendly Living: The Rise of Pre-Owned Furniture in Dubai",
    body: "With sustainability becoming a lifestyle, residents in the UAE are turning to used furniture stores to reduce waste and embrace eco-conscious home décor.",
  },
  {
    id: 3,
    category: "Home Décor",
    title: "Top Tips for Styling Your Home with Used Furniture",
    body: "Used furniture doesn’t mean outdated! Explore creative ways to mix and match pre-owned pieces to give your home a modern and luxurious look.",
  },
];
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
          {blogsData.map((blog) => (
            <BlogCard
              key={blog.id}
              image="/Background-with-text.jpg"
              category={blog.category}
              title={blog.title}
              date="April 6, 2021"
              excerpt={blog.body}
              href="#"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestsNews;
