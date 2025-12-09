import LatestsNews from "@/components/LatestsNews";
import { Button } from "@/components/ui/button";
import {
  CalendarCheck2,
  FileWarningIcon,
  ListTodoIcon,
  User2Icon,
} from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";

export interface Main {
  message: string;
  success: boolean;
  blog: Blog;
}

export interface Blog {
  author: Author;
  seo: SEO;
  _id: string;
  title: string;
  caption: string;
  category: Category;
  FeaturedImage: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Author {
  name: string;
  avatarUrl: string;
}

export interface Category {
  _id: string;
  name: string;
}

export interface SEO {
  metaTitle: string;
  metaDescription: string;
}

let errorMessage: string;
const getData = async (slug: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog?slug=/${slug}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch blog details");
    }

    const data: Main = await res.json();
    if (!data.success) {
      errorMessage = data.message;
    }
    return data.blog;
  } catch (error) {
    if (error instanceof Error) errorMessage = error.message;
    errorMessage = "An unknown error occurred.";
    console.log("Server Error: ", Error);
  }
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getData(slug);

  if (blog) {
    return {
      title: blog.seo?.metaTitle || blog.title,
      description: blog.seo?.metaDescription || blog.caption,
      alternates: {
        canonical: `${process.env.APP_URI}/blogs/${slug}`,
      },
      openGraph: {
        title: blog.seo?.metaTitle || blog.title,
        description: blog.seo?.metaDescription || blog.caption,
        url: `${process.env.APP_URI}/blogs/${slug}`,
        images: blog.FeaturedImage
          ? [
              {
                url: blog.FeaturedImage,
                width: 800,
                height: 600,
              },
            ]
          : undefined,
        type: "article",
        authors: ["Mashal Huraira", blog.author.name],
        countryName: "UAE",
        modifiedTime: blog.updatedAt.toString(),
        siteName: "Rukun Al Arooba Used Furniture",
        locale: "en-US",
        tags: [blog.category.name],
        publishedTime: blog.createdAt.toString(),
      },
      applicationName: "Rukun Al Arooba Used Furniture",
      category: blog.category.name,
      robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
          index: true,
          follow: true,
          noimageindex: true,
          "max-snippet": -1,
          "max-video-preview": -1,
          "max-image-preview": "large",
          notranslate: true,
        },
      },
    };
  }
  return {
    title: "Blog Not Found",
    description: "The requested blog post could not be found.",
  };
}

const SingleBlogPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const blog = await getData(slug);

  return (
    <article>
      <main>
        <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
          {blog ? (
            <>
              <div className="grid-background" />
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center capitalize">
                  <span className="blue border-b-4 border-[#ffdb5e]">
                    {blog.title}
                  </span>
                </h1>
                <div className="max-w-3xl mx-auto text-center text mt-5">
                  <p>{blog.caption}</p>
                </div>
                <div className=" mt-10 flex items-center justify-center flex-wrap">
                  <Button
                    variant={"ghost"}
                    title={`Author of blog post`}
                    className="text-muted-foreground font-normal"
                    size={"sm"}
                  >
                    <User2Icon /> Mashal Huraira
                  </Button>
                  <Button
                    variant={"ghost"}
                    title={`Category ${blog.title}`}
                    className="text-muted-foreground font-normal"
                    size={"sm"}
                  >
                    <ListTodoIcon /> {blog.category.name}
                  </Button>
                  <Button
                    variant={"ghost"}
                    title={`Published date`}
                    className="text-muted-foreground font-normal"
                    size={"sm"}
                  >
                    <CalendarCheck2 />{" "}
                    {new Date(blog.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="max-w-6xl mx-auto md:p-4">
              <div className="bg-red-100 p-10 rounded-2xl md:shadow-lg overflow-hidden flex flex-col items-center">
                <h2 className="text-center text-destructive flex items-center gap-2">
                  <FileWarningIcon /> {errorMessage}
                </h2>
              </div>
            </div>
          )}
        </section>
        {blog && (
          <>
            <div
              id="featured-image"
              className="mb-16 bg-gray-100 rounded-2xl max-w-3xl mx-auto h-[420px] relative overflow-hidden"
            >
              <Image
                alt={blog.title}
                src={blog.FeaturedImage || "/Background-with-text.jpg"}
                fill
                loading="eager"
                priority
                className="object-cover "
              />
            </div>
            <section
              id="content"
              dangerouslySetInnerHTML={{ __html: blog.content }}
              className="max-w-3xl mx-auto text mb-16"
            ></section>
            <LatestsNews />
          </>
        )}
      </main>
    </article>
  );
};

export default SingleBlogPage;
