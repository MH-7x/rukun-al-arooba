import CTA from "@/components/base/CTA";
import Form from "@/components/FORM";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
import React from "react";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Contact Us | Buy & Sell Used Furniture",
      desc: "We buy and sell used furniture in Sharjah, Dubai, Abu Dhabi, Ajman, Ras Al Khaimah, Al Ain, Umm Al Quwain, and more.",
    },
    image: {
      path: "/Background-with-text.jpg",
      alt: "Contact Rukun Al Arooba",
    },
    path: "/contact-us",
  },
});

export default function ContactForm() {
  return (
    <main className="">
      <CTA
        title="Contact Us"
        headerUse
        desc={
          <>
            <p>
              Sell, buy or ask about used furniture — we&lsquo;ll reply on
              WhatsApp fast.
            </p>
          </>
        }
      />
      <div className="md:w-11/12 mx-auto  grid grid-cols-1 lg:grid-cols-12 items-start gap-6 mt-16 ">
        {/* Left contact card */}
        <aside className="lg:col-span-4 bg-white p-4 rounded-2xl shadow-sm border">
          <h2 className="font-medium text-lg">Our Info</h2>
          <p className="text-sm text-gray-600 mt-2">
            Rukun Al Arooba — Used Furniture Buyers & Sellers
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <strong>Phone:</strong>{" "}
              <a href="tel:+971500000000" className="text-primary underline">
                +971 50 000 0000
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a href="#" className="text-primary underline">
                Message us on WhatsApp
              </a>
            </li>
            <li>
              <strong>Store Location:</strong> Al Estiqlal Street, Bu Shaghara,
              Hay Al Qasimiah
            </li>
            <li>
              <strong>Locations We Serve:</strong> Dubai, Sharjah, Ajman, RAK,
              Abu Dhabi, Al Ain, mussafah, muweilah
            </li>
            <li>
              <strong>Hours:</strong> Mon–Sat 9:00 AM – 11:00 PM
            </li>
          </ul>

          <div className="mt-6">
            <h3 className="font-medium">Quick Links</h3>
            <ul className="mt-2 text-sm space-y-1">
              <li>
                <Link
                  href="/used-furniture-buyers-in-dubai#types-of-furniture-we-buy"
                  className="underline"
                >
                  furniture we buy
                </Link>
              </li>
              <li>
                <Link href="/how-we-work" className="underline">
                  How we work
                </Link>
              </li>
              <li>
                <a href="#" className="underline">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>
        </aside>

        {/* Right form card */}
        <div className="lg:col-span-8 bg-white p-6 rounded-2xl shadow-sm border">
          <Form />
        </div>
      </div>
    </main>
  );
}
