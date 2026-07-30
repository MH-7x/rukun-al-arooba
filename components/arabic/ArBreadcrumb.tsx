import { APP } from "@/lib/App";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

/**
 * Arabic RTL Breadcrumb component with BreadcrumbList structured data (JSON-LD).
 */
export default function ArBreadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href
        ? { item: `${APP.url}${item.href}` }
        : {}),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <nav
        aria-label="التنقل التفصيلي"
        className="breadcrumb-nav"
        dir="rtl"
      >
        <ol className="breadcrumb-list">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="breadcrumb-item">
                {index > 0 && (
                  <svg
                    className="breadcrumb-separator"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    aria-hidden="true"
                    style={{ transform: "scaleX(-1)" }}
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
                  <span
                    className="breadcrumb-current"
                    aria-current="page"
                  >
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className="breadcrumb-link"
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
