import Link from "next/link";

import { Button } from "./ui/button";
import BlogCard from "./BlogCard";
import { MainForCard } from "@/types/blog";

// Define a return type for clarity
type BlogResponse = {
  data?: MainForCard["data"];
  error?: string;
};

async function getBlogs(): Promise<BlogResponse> {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog?limit=3`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        // PERF FIX: Cache data for 1 hour (3600 seconds).
        // Remove this line if you need real-time data on every refresh.
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) {
      return { error: `Failed to fetch: ${res.statusText}` };
    }

    const json: MainForCard = await res.json();

    if (!json.success) {
      return { error: json.message || "API returned failure" };
    }

    return { data: json.data };
  } catch (error) {
    // PERF FIX: Log the actual error object for debugging
    console.error("Server Error fetching blogs:", error);
    return { error: "An unknown error occurred while loading news." };
  }
}

const LatestsNews = async () => {
  // Fetch data in parallel with other server components if possible
  const { data: blogsData, error: errorMessage } = await getBlogs();

  return (
    <section className="md:w-11/12 mx-auto md:px-0 px-3 mb-10">
      <div className="flex items-end justify-between">
        <div>
          <p className="blue font-medium md:text-lg">OUR BLOGS</p>
          <h2 className="md:text-5xl text-3xl font-black headline mt-3">
            Latest News
          </h2>
        </div>
        <Link href={"/blogs"}>
          <Button size={"lg"} className="md:px-12">
            ALL NEWS
          </Button>
        </Link>
      </div>

      <div className="mt-16">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {/* Success State */}
          {blogsData && blogsData.length > 0 ? (
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
                href={`/blogs/${blog.slug}`} // Fixed missing slash in href
              />
            ))
          ) : (
            /* Error or Empty State */
            <div className="col-span-3">
              <p className="text-red-500 text-center max-w-md mx-auto p-5 rounded-2xl border border-red-500 bg-red-50">
                {errorMessage
                  ? `Error: ${errorMessage}`
                  : "No news available at the moment."}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default LatestsNews;
