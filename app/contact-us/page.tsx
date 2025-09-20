import CTA from "@/components/base/CTA";
import Form from "@/components/FORM";
import { APP } from "@/lib/App";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";

import { FileText, CheckCircle2, MessageSquare, Truck } from "lucide-react";
import React from "react";

// Data for each step for cleaner mapping
const steps = [
  {
    icon: <FileText className="h-7 w-7" />,
    title: "1. Fill Out the Form 📝",
    description:
      "Choose your reason for contact: Sell, Buy, or General Inquiry. If you're selling, providing 1-3 clear photos will help us give you the fastest and most accurate quote.",
  },
  {
    icon: <CheckCircle2 className="h-7 w-7" />,
    title: "2. Click Submit & Get Confirmation ✔️",
    description:
      "Once you send your request, it goes directly to our team. You'll see a success message on the screen with a unique Reference ID.",
  },
  {
    icon: <MessageSquare className="h-7 w-7" />,
    title: "3. We'll Contact You Quickly 💬",
    description:
      "We pride ourselves on our speed! Expect a call or a WhatsApp message from us within 5-10 minutes to discuss your items, answer your questions, or arrange the next steps.",
  },
  {
    icon: <Truck className="h-7 w-7" />,
    title: "4. We Handle the Logistics 🚚",
    description:
      "Whether you're buying or selling, we manage pickup and delivery through our trusted partners. We'll schedule a time that works for you and ensure a smooth, hassle-free experience.",
  },
];

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
      <div className="md:w-11/12 mx-auto  grid grid-cols-1 lg:grid-cols-12 items-start gap-6 my-16 ">
        {/* Left contact card */}
        <aside className="lg:col-span-4 bg-secondary p-4 rounded-2xl shadow-sm border">
          <h2 className="font-medium text-lg">Our Info</h2>
          <p className="text-sm text-gray-600 mt-2">
            Rukun Al Arooba — Used Furniture Buyers & Sellers
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${APP.phone}`} className="text-primary underline">
                (055) 6461731
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{" "}
              <a
                href={`https://wa.me/${APP.phone}?text=I%20Contact%20You%20For%20Used%20Furniture`}
                className="text-primary underline"
              >
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
      <section className="w-full max-w-3xl mx-auto mt-16 sm:mt-36 px-3 sm:px-6 lg:px-8 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-3 text-lg text-slate-600">
            Our process is simple, fast, and designed for your convenience.
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-5">
              {/* Icon */}
              <div className="flex-shrink-0 flex items-center justify-center h-14 w-14 rounded-full bg-primary/10 text-primary">
                {step.icon}
              </div>
              {/* Text Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-slate-800">
                  {step.title}
                </h3>
                <p className="mt-1 text-base text-slate-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
