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
  {
    id: 4,
    category: "Market Trends",
    title: "The Growing Market for Used Furniture in Sharjah",
    body: "The used furniture industry in Sharjah is booming, with local dealers offering affordable options for apartments, offices, and villas across the city.",
  },
  {
    id: 5,
    category: "Furniture Care",
    title: "How to Inspect and Maintain Second-Hand Furniture",
    body: "Before buying, always check for quality and durability. Here’s a quick guide to cleaning, polishing, and maintaining your pre-owned furniture to keep it looking new.",
  },
  {
    id: 6,
    category: "Buying Guide",
    title: "Where to Buy the Best Used Furniture in the UAE",
    body: "From Dubai’s Al Quoz to Sharjah’s Al Estiqlal Street, explore the top used furniture stores offering high-quality items at unbeatable prices.",
  },
];

const BlogsPage = async () => {
  return (
    <main>
      <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
        <div className="grid-background" />
        <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center">
          <span className="headline border-b-4 border-[#ffdb5e]">
            {" "}
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
      <Pagination className="mb-16">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </main>
  );
};

export default BlogsPage;
