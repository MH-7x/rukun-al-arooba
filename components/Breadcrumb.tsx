import Link from "next/link";
import { APP } from "@/lib/App";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Breadcrumb utility component with BreadcrumbList structured data (JSON-LD).
 *
 * Usage:
 * ```tsx
 * <Breadcrumb items={[
 *   { label: "Home", href: "/" },
 *   { label: "Services", href: "/services" },
 *   { label: "Used Sofa for Sale" }, // last item — no href = current page
 * ]} />
 * ```
 */
export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  // Build the JSON-LD BreadcrumbList schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${APP.url}${item.href}` } : {}),
    })),
  };

  return (
    <>
      {/* Structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Visual breadcrumb nav */}
      <nav
        aria-label="Breadcrumb"
        className={`breadcrumb-nav ${items.length > 1 ? "block" : "hidden"}`}
      >
        <ol className="breadcrumb-list">
          {items.length > 1 &&
            items.map((item, index) => {
              const isLast = index === items.length - 1;

              return (
                <li key={index} className="breadcrumb-item">
                  {/* Separator (chevron) — skip for first item */}
                  {index > 0 && (
                    <svg
                      className="breadcrumb-separator"
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M6 3l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}

                  {isLast || !item.href ? (
                    <span className="breadcrumb-current" aria-current="page">
                      {item.label}
                    </span>
                  ) : (
                    <Link href={item.href} className="breadcrumb-link">
                      {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
        </ol>
      </nav>
    </>
  );
}
