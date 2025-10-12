type BlogCardProps = {
  image: string;
  category: string;
  title: string;
  date: string; // e.g. "April 6, 2021"
  excerpt: string;
  href?: string;
};

export default function BlogCard({
  image,
  category,
  title,
  date,
  excerpt,
  href = "#",
}: BlogCardProps) {
  return (
    <article className="">
      {/* Image + category tag */}
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="h-60 w-full object-cover rounded-2xl"
          loading="lazy"
        />
        <span className="absolute -bottom-4 left-4 rounded-2xl bg-white px-3 py-2 text-sm font-medium text-slate-700">
          {category}
        </span>
      </div>

      {/* Body */}
      <div className="px-3 pt-6 pb-4 ">
        <h3 className="md:text-xl text-lg font-medium line-clamp-2 leading-6 blue">
          <a href={href} className="hover:underline">
            {title}
          </a>
        </h3>

        {/* Date */}
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-[18px] w-[18px] shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" />
            <path d="M16 2v4M8 2v4M3 10h18" />
          </svg>
          <span>{date}</span>
        </div>

        {/* Excerpt */}
        <p className="mt-3 text md:text-base text-sm line-clamp-2">{excerpt}</p>

        {/* Read more */}
        <a
          href={href}
          className="mt-4 inline-flex items-center gap-2 text-sm font-medium pri hover:underline"
        >
          READ MORE
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </a>
      </div>
    </article>
  );
}
