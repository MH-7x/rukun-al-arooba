import BlogCard from "@/components/BlogCard";
import MetadataTemplate from "@/lib/MetaDataTemplate";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { MainForCard } from "@/types/blog";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Our Blogs | Rukun Al Arooba Used Furniture",
      desc: "Stay updated with the latest news, tips, and insights on furniture moving and office relocations. Our blog covers a wide range of topics to help you make informed decisions for your next move.",
    },
    path: "/blogs",
    image: {
      path: "/used-furniture-blogs.jpg",
      alt: "Rukun Al Arooba Blogs",
    },
  },
});

let errorMessage: string;

async function getBlogs(page = 1) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog?page=${page}&limit=6`,
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

    return data;
  } catch (error) {
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    errorMessage = "An unknown error occurred.";
  }
}

const BlogsPage = async ({
  searchParams,
}: {
  searchParams: Promise<{ page: string }>;
}) => {
  const page = Number((await searchParams).page) || 1;

  const blogsData = await getBlogs(page);
  const pagination = blogsData?.pagination;

  return (
    <main>
      <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
        <div className="grid-background" />
        <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center">
          <span className="headline border-b-4 border-[#ffdb5e]">
            Our Blogs
          </span>
          <br className="md:block" /> Rukun Al Arooba Used Furniture
        </h1>
        <div className="max-w-3xl mx-auto text-center text mt-5">
          <p>
            Stay updated with the latest news, tips, and insights on furniture
            moving and office relocations. Our blog covers a wide range of
            topics to help you make informed decisions for your next move.
          </p>
        </div>
      </section>

      <div className="mt-16 max-w-7xl mx-auto px-3 md:px-0 mb-10">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
          {blogsData ? (
            blogsData.data &&
            blogsData.data.map((blog) => (
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
            <div className="col-span-3">
              <p className="text-red-500 text-center max-w-md mx-auto p-5 rounded-2xl border border-red-500 bg-red-50">
                Error: {errorMessage}
              </p>
            </div>
          )}
        </div>
      </div>

      {pagination && pagination.totalPages > 1 && (
        <Pagination className="mb-16">
          <PaginationContent>
            {/* Previous Button */}
            <PaginationItem>
              <PaginationPrevious
                href={`?page=${Math.max(1, pagination.page - 1)}`}
                aria-disabled={pagination.page === 1}
              />
            </PaginationItem>

            {/* Page Numbers */}
            {Array.from({ length: pagination.totalPages }, (_, i) => i + 1).map(
              (p) => (
                <PaginationItem key={p}>
                  <PaginationLink
                    href={`?page=${p}`}
                    isActive={p === pagination.page}
                  >
                    {p}
                  </PaginationLink>
                </PaginationItem>
              )
            )}

            {/* Ellipsis (if needed) */}
            {pagination.totalPages > 6 && <PaginationEllipsis />}

            {/* Next Button */}
            <PaginationItem>
              <PaginationNext
                href={`?page=${Math.min(
                  pagination.totalPages,
                  pagination.page + 1
                )}`}
                aria-disabled={pagination.page === pagination.totalPages}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </main>
  );
};

export default BlogsPage;
