import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import BlogCard from "./BlogCard";
import { MainForCard } from "@/types/blog";

let errorMessage: string;

async function getBlogs() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog?limit=3`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blogs");
    }
    const data: MainForCard = await res.json();
    if (!data.success) {
      errorMessage = data.message;
    }

    return data.data;
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
      console.log("Failed To Get Blogs: ", Error);
    }

    errorMessage = "An unknown error occurred.";
    console.log("Server Error: ", Error);
  }
}

const LatestsNews = async () => {
  const blogsData = await getBlogs();

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
          {blogsData ? (
            blogsData.map((blog) => (
              <BlogCard
                key={blog._id}
                image={blog.FeaturedImage || "/Background-with-text.jpg"}
                category={blog.category.name}
                title={blog.title}
                date={new Date(blog.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
                author={"Mashal Huraira"}
                excerpt={blog.caption}
                href={`/blogs${blog.slug}`}
              />
            ))
          ) : (
            <>
              <div className="col-span-3">
                <p className="text-red-500 text-center max-w-md mx-auto p-5 rounded-2xl border border-red-500 bg-red-50">
                  Error: {errorMessage}
                </p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestsNews;
