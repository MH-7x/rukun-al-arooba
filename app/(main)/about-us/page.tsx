import { Button } from "@/components/ui/button";
import {
  Armchair,
  ArrowRight,
  BedDouble,
  CheckCircle,
  LampDesk,
  Refrigerator,
  Sofa,
  WashingMachine,
} from "lucide-react";
import src from "../../../public/Rukun-Al-Arooba-Used-Furniture.jpg";
import Image from "next/image";
import CTA from "@/components/base/CTA";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import Link from "next/link";
import Reviews from "@/components/Reviews";
import LatestsNews from "@/components/LatestsNews";

type ProductItem = {
  id: number;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  link: string;
};

const items: ProductItem[] = [
  {
    id: 1,
    title: "Premium Used Home Appliances",
    subtitle: "Carefully inspected, ready-to-use appliances.",
    icon: <WashingMachine className="w-6 h-6" />,
    link: "/used-home-appliances-dubai",
  },
  {
    id: 2,
    title: "Quality Electronics",
    subtitle: "Smartphones, audio and more from trusted brands.",
    icon: <LampDesk className="w-6 h-6" />,
    link: "/used-electronics-buyers-in-dubai",
  },
  {
    id: 3,
    title: " Office Furniture Solutions",
    subtitle: "Ergonomic desks, chairs & storage for modern workspaces.",
    icon: <Armchair className="w-6 h-6" />,
    link: "/used-office-furniture-buyers-dubai",
  },
  {
    id: 4,
    title: " Beds and Bedroom Sets",
    subtitle: "Everything for a restful night — frames, mattresses, sets.",
    icon: <BedDouble className="w-6 h-6" />,
    link: "/used-beds-for-sale",
  },
  {
    id: 5,
    title: "Energy-Efficient Refrigerators",
    subtitle: "Low-consumption fridges that keep food fresher longer.",
    icon: <Refrigerator className="w-6 h-6" />,
    link: "/buy-or-sell-used-refrigerators",
  },
  {
    id: 6,
    title: "Stylish Sofa Sets",
    subtitle: "From compact loveseats to spacious modular lounges.",
    icon: <Sofa className="w-6 h-6" />,
    link: "/used-sofa-for-sale-uae",
  },
  {
    id: 7,
    title: "Modern Kitchen Cabinets",
    subtitle: "Customizable finishes and smart storage solutions.",
    icon: (
      <svg
        fill="#ffffff"
        viewBox="0 -10.41 122.88 122.88"
        version="1.1"
        id="Layer_1"
        width={28}
        height={28}
        strokeWidth="4.7203200000000003"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path d="M33.5,3.86H3.86v22.75h29.65L33.5,3.86L33.5,3.86L33.5,3.86z M37.1,0h81.91c0.47,0,0.92,0.09,1.33,0.27 c0.42,0.18,0.81,0.44,1.13,0.76l0.02,0.02c0.32,0.32,0.58,0.71,0.75,1.13c0.17,0.41,0.27,0.86,0.27,1.33v23.47 c0,0.47-0.09,0.92-0.27,1.34c-0.18,0.43-0.44,0.81-0.76,1.14l-0.04,0.03c-0.32,0.31-0.69,0.56-1.1,0.73 c-0.41,0.17-0.86,0.27-1.33,0.27H86.05c-0.15,0-0.26-0.12-0.26-0.26V3.86H69.05v6.9l12.3,13.99c0.35,0.4,0.51,0.9,0.48,1.4 c-0.03,0.49-0.25,0.97-0.65,1.33l-0.02,0.01c-0.18,0.15-0.37,0.27-0.58,0.34c-0.21,0.08-0.44,0.12-0.66,0.12l-36.95,0 c-0.53,0-1.02-0.22-1.36-0.57c-0.35-0.35-0.57-0.83-0.57-1.36c0-0.28,0.06-0.54,0.17-0.78c0.11-0.25,0.27-0.47,0.47-0.65 l12.66-13.84V3.86H37.37V30.2c0,0.15-0.12,0.26-0.26,0.26H3.5c-0.47,0-0.92-0.09-1.33-0.27c-0.43-0.18-0.81-0.44-1.14-0.76 c-0.32-0.32-0.58-0.71-0.76-1.14C0.09,27.89,0,27.44,0,26.97V3.5c0-0.47,0.09-0.92,0.27-1.34C0.44,1.73,0.7,1.35,1.03,1.03 C1.04,1.01,1.05,1,1.06,1c0.32-0.31,0.69-0.56,1.1-0.73C2.58,0.09,3.03,0,3.5,0H37.1L37.1,0z M3.5,52.33h115.88 c0.47,0,0.92,0.1,1.33,0.27c0.43,0.18,0.81,0.44,1.14,0.76l0.01,0.01c0.32,0.32,0.57,0.7,0.75,1.12c0.17,0.41,0.27,0.86,0.27,1.34 v42.66c0,0.47-0.1,0.92-0.27,1.33c-0.17,0.41-0.42,0.78-0.72,1.1c-0.01,0.01-0.02,0.03-0.03,0.04l-0.01,0.01 c-0.32,0.32-0.7,0.58-1.13,0.75c-0.41,0.17-0.86,0.27-1.33,0.27H87.99c-0.08,0.02-0.16,0.04-0.25,0.06c-0.1,0.02-0.2,0.02-0.3,0.02 c-0.1,0-0.2-0.01-0.3-0.02c-0.09-0.01-0.17-0.03-0.25-0.06h-50.9c-0.08,0.02-0.16,0.04-0.25,0.06c-0.1,0.02-0.2,0.02-0.3,0.02 c-0.1,0-0.2-0.01-0.3-0.02c-0.09-0.01-0.17-0.03-0.25-0.06H3.5c-0.47,0-0.92-0.09-1.33-0.27c-0.41-0.17-0.79-0.42-1.1-0.73 c-0.02-0.01-0.03-0.02-0.04-0.04c-0.32-0.32-0.58-0.71-0.76-1.13C0.09,99.41,0,98.96,0,98.49V55.83c0-0.47,0.09-0.92,0.27-1.34 c0.18-0.43,0.44-0.81,0.76-1.14c0.01-0.01,0.02-0.02,0.04-0.03c0.32-0.31,0.69-0.56,1.1-0.73C2.58,52.42,3.03,52.33,3.5,52.33 L3.5,52.33z M119.02,56.19H89.37v41.94h29.65V56.19L119.02,56.19z M85.51,56.19H37.37v9.34h48.14V56.19L85.51,56.19z M33.51,56.19 H3.86v41.94h29.65V56.19L33.51,56.19z M37.37,98.12h48.14V69.4H37.37V98.12L37.37,98.12z M65.19,3.86H58.2v7.62 c0,0.02,0,0.04-0.01,0.07c-0.01,0.21-0.05,0.43-0.13,0.63c-0.08,0.22-0.21,0.42-0.37,0.6L47.34,24.09h28.3L65.71,12.8 c-0.16-0.17-0.3-0.38-0.39-0.6c-0.09-0.22-0.14-0.47-0.14-0.72V3.86L65.19,3.86z M93.98,58.35c0.28,0,0.55,0.06,0.79,0.16 l0.01,0.01c0.25,0.1,0.47,0.26,0.66,0.44c0.19,0.19,0.34,0.42,0.45,0.67c0.1,0.24,0.16,0.51,0.16,0.79c0,0.28-0.06,0.54-0.16,0.79 c-0.11,0.25-0.26,0.48-0.45,0.67l-0.02,0.01c-0.19,0.18-0.41,0.33-0.66,0.43c-0.24,0.1-0.51,0.16-0.79,0.16 c-0.28,0-0.55-0.06-0.79-0.16c-0.24-0.1-0.46-0.25-0.65-0.43l-0.03-0.02c-0.19-0.19-0.34-0.42-0.44-0.67l-0.01-0.01 c-0.1-0.24-0.15-0.5-0.15-0.78c0-0.28,0.06-0.55,0.16-0.79c0.1-0.25,0.26-0.48,0.45-0.67c0.19-0.19,0.42-0.34,0.67-0.45l0.01-0.01 C93.45,58.4,93.71,58.35,93.98,58.35L93.98,58.35z M22.09,5.8c0.28,0,0.55,0.06,0.79,0.16c0.25,0.1,0.48,0.26,0.67,0.45 C23.74,6.6,23.9,6.83,24,7.08c0.1,0.24,0.16,0.51,0.16,0.79c0,0.28-0.06,0.55-0.16,0.79c-0.1,0.25-0.25,0.47-0.43,0.65l-0.03,0.03 c-0.19,0.18-0.41,0.33-0.66,0.43c-0.24,0.1-0.51,0.16-0.79,0.16c-0.28,0-0.54-0.06-0.79-0.16c-0.25-0.1-0.48-0.26-0.67-0.45 l-0.02-0.02c-0.18-0.19-0.33-0.41-0.43-0.65c-0.1-0.24-0.16-0.51-0.16-0.79s0.06-0.55,0.16-0.79l0.01-0.01 c0.1-0.25,0.26-0.47,0.44-0.66c0.19-0.19,0.42-0.34,0.67-0.45l0.01-0.01C21.56,5.86,21.82,5.8,22.09,5.8L22.09,5.8z M89.78,3.86 h-0.13v22.75h29.01V3.86H89.78L89.78,3.86z M98.98,6.39c0.19-0.18,0.41-0.33,0.66-0.43c0.24-0.1,0.51-0.16,0.79-0.16 c0.28,0,0.55,0.06,0.79,0.16l0.01,0.01c0.25,0.1,0.47,0.26,0.66,0.44c0.19,0.19,0.34,0.42,0.45,0.67c0.1,0.24,0.16,0.51,0.16,0.79 c0,0.28-0.06,0.55-0.16,0.79l-0.01,0.01c-0.1,0.24-0.25,0.46-0.43,0.64l-0.03,0.03c-0.19,0.18-0.41,0.33-0.65,0.43 c-0.24,0.1-0.51,0.16-0.79,0.16c-0.28,0-0.55-0.06-0.79-0.16c-0.25-0.1-0.48-0.26-0.67-0.45l0,0c-0.19-0.19-0.34-0.42-0.45-0.67 c-0.1-0.24-0.16-0.51-0.16-0.79s0.06-0.54,0.16-0.79c0.11-0.25,0.26-0.48,0.45-0.67L98.98,6.39L98.98,6.39z M28.45,58.35 c0.28,0,0.55,0.06,0.79,0.16l0.01,0.01c0.25,0.11,0.47,0.26,0.66,0.44l0.01,0.02c0.18,0.19,0.33,0.41,0.43,0.65l0.01,0.01 c0.1,0.24,0.15,0.5,0.15,0.78c0,0.28-0.06,0.54-0.16,0.79c-0.11,0.25-0.26,0.48-0.45,0.67l-0.02,0.01 c-0.19,0.18-0.41,0.33-0.66,0.43c-0.24,0.1-0.51,0.16-0.79,0.16c-0.28,0-0.55-0.06-0.79-0.16c-0.25-0.1-0.48-0.26-0.67-0.45l0,0 c-0.19-0.19-0.34-0.42-0.45-0.67l-0.01-0.01c-0.1-0.24-0.15-0.5-0.15-0.78c0-0.28,0.06-0.55,0.16-0.79 c0.1-0.25,0.26-0.48,0.45-0.67c0.19-0.19,0.42-0.34,0.67-0.45C27.91,58.41,28.17,58.35,28.45,58.35L28.45,58.35z"></path>{" "}
          </g>{" "}
        </g>
      </svg>
    ),
    link: "/",
  },
  {
    id: 8,
    title: "Durable Outdoor Furniture",
    subtitle: "Weather-resistant pieces built to last and impress.",
    icon: <Armchair className="w-6 h-6" />,
    link: "/",
  },
];

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "About Us | Rukun Al Arooba Used Furniture",
      desc: "Quality used furniture & appliances in UAE since 2018. 20+ years experience, showroom in Sharjah, fast service, warranty. Buy & sell furniture across UAE.",
    },
    image: {
      path: "/Rukun-Al-Arooba-Used-Furniture.jpg",
      alt: "rukun al arooba used furniture in sharjah",
    },
    path: "/about-us",
  },
});

export default function AboutUs() {
  return (
    <>
      <main className="overflow-hidden">
        <section className="relative isolate px-3 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#c07d53] to-[#c07d53] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <div className="mx-auto max-w-4xl pt-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full  py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 dark:text-gray-400 dark:ring-white/10 dark:hover:ring-white/20">
                Best Used Furniture Company in Sharjah
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-balance headline sm:text-6xl ">
                About Rukun Al Arooba Used Furniture
              </h1>
              <h3 className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                Your Trusted Partner for Quality Used Furniture in the UAE Since
                2018
              </h3>
              <p className="mt-3 text">
                Welcome to Rukun Al Arooba Used Furniture, where two decades of
                expertise meets modern convenience. Located in the heart of
                Sharjah on Al Estiqlal Street, we&lsquo;ve been transforming the
                way people buy and sell pre-owned furniture across the United
                Arab Emirates.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Button wtsBtn>
                  Lets Talks <ArrowRight />
                </Button>
                <Button variant={"linkBlue"}>
                  Who We Are <ArrowRight />
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-10 max-w-5xl rounded-2xl overflow-hidden mx-auto md:h-[427px] h-52 bg-white drop-shadow-2xl relative">
            <Image
              src={src}
              alt="Rukun Al Arooba Used Furniture"
              fill
              className="object-cover"
              loading="eager"
              placeholder="blur"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#c07d53] to-[#c07d53] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
          </div>
        </section>
        <section
          id="our-story"
          className="mt-40 md:w-11/12  mx-auto grid md:grid-cols-3 grid-cols-1 gap-x-10 md:px-0 px-3"
        >
          <div className="col-span-1 py-10">
            <h3 className="text-3xl md:text-right blue font-medium">
              Our Story
            </h3>
          </div>
          <div className="col-span-2 py-10 md:border-t-0 md:text-lg md:border-l-2 border-t-2 border-[#c07d53] md:pl-10 text">
            <p>
              While officially registered in 2018, our journey in the used
              furniture industry spans over 20 years. This rich heritage has
              given us unparalleled expertise in understanding what our
              customers need – whether you&lsquo;re furnishing your first home,
              upgrading your office, or looking to sell furniture during a
              transition.
            </p>
            <p>
              {" "}
              We&lsquo;ve built our reputation on trust, quality, and
              exceptional service that sets us apart in the UAE&lsquo;s
              competitive used furniture market.
            </p>
          </div>
        </section>
        <section
          id="what-we-do"
          className=" md:w-11/12  mx-auto grid md:grid-cols-3 grid-cols-1 gap-x-10 md:px-0 px-3"
        >
          <div className="col-span-1 py-10">
            <h3 className="text-3xl md:text-right blue font-medium">
              What We Do
            </h3>
          </div>
          <div className="col-span-2 py-10 md:text-lg md:border-t-0 md:border-l-2 border-t-2 border-[#c07d53] md:pl-10 text">
            <p>
              At Rukun Al Arooba, we specialize in buying and selling
              high-quality used furniture and home appliances throughout the
              UAE. Our mission is simple: help you save money without
              compromising on style or quality.
            </p>
            <p>
              {" "}
              From cozy bedroom sets to professional office furniture, from
              kitchen appliances to outdoor furnishings, we offer comprehensive
              solutions for all your furniture needs.
            </p>
          </div>
        </section>

        <section
          id="services-we-offer"
          className="relative mt-36 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-gray-50 py-16"
        >
          {/* Decorative background shapes */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-30">
            <svg
              className="h-full w-full"
              preserveAspectRatio="none"
              viewBox="0 0 800 600"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="g1" x1="0" x2="1">
                  <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.06" />
                </linearGradient>
              </defs>
              <rect
                x="-50"
                y="-50"
                width="900"
                height="700"
                fill="url(#g1)"
                transform="rotate(12 400 300)"
              />
            </svg>
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-extrabold leading-tight tracking-tight headline sm:text-4xl">
                Our Extensive Product Range Includes
              </h2>
              <p className="mt-3 text-lg text-slate-600">
                Carefully curated categories — inspected, curated and ready for
                your home or business.
              </p>
            </div>

            <ul
              role="list"
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
            >
              {items.map((it) => (
                <li
                  key={it.id}
                  className="transform rounded-2xl bg-white/80 p-6 shadow-lg backdrop-blur-md transition hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-[#144e5a] to-[#2997ad] text-white shadow-md">
                      {it.icon}
                    </div>
                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-semibold text-slate-900">
                        {it.title}
                      </h3>
                      {it.subtitle && (
                        <p className="mt-1 text-sm text-slate-500">
                          {it.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mt-5 flex items-center justify-between">
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                      Explore
                    </span>
                    <Link
                      href={it.link}
                      className="text-sm font-medium pri"
                      aria-label={`view more about ${it.title}`}
                    >
                      view more →
                    </Link>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-12 text-center">
              <Button wtsBtn size={"lg"}>
                {" "}
                <svg
                  fill="#ffffff"
                  version="1.1"
                  viewBox="0 0 30.667 30.667"
                  xmlSpace="preserve"
                  stroke="#ffffff"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <g>
                      {" "}
                      <path d="M30.667,14.939c0,8.25-6.74,14.938-15.056,14.938c-2.639,0-5.118-0.675-7.276-1.857L0,30.667l2.717-8.017 c-1.37-2.25-2.159-4.892-2.159-7.712C0.559,6.688,7.297,0,15.613,0C23.928,0.002,30.667,6.689,30.667,14.939z M15.61,2.382 c-6.979,0-12.656,5.634-12.656,12.56c0,2.748,0.896,5.292,2.411,7.362l-1.58,4.663l4.862-1.545c2,1.312,4.393,2.076,6.963,2.076 c6.979,0,12.658-5.633,12.658-12.559C28.27,8.016,22.59,2.382,15.61,2.382z M23.214,18.38c-0.094-0.151-0.34-0.243-0.708-0.427 c-0.367-0.184-2.184-1.069-2.521-1.189c-0.34-0.123-0.586-0.185-0.832,0.182c-0.243,0.367-0.951,1.191-1.168,1.437 c-0.215,0.245-0.43,0.276-0.799,0.095c-0.369-0.186-1.559-0.57-2.969-1.817c-1.097-0.972-1.838-2.169-2.052-2.536 c-0.217-0.366-0.022-0.564,0.161-0.746c0.165-0.165,0.369-0.428,0.554-0.643c0.185-0.213,0.246-0.364,0.369-0.609 c0.121-0.245,0.06-0.458-0.031-0.643c-0.092-0.184-0.829-1.984-1.138-2.717c-0.307-0.732-0.614-0.611-0.83-0.611 c-0.215,0-0.461-0.03-0.707-0.03S9.897,8.215,9.56,8.582s-1.291,1.252-1.291,3.054c0,1.804,1.321,3.543,1.506,3.787 c0.186,0.243,2.554,4.062,6.305,5.528c3.753,1.465,3.753,0.976,4.429,0.914c0.678-0.062,2.184-0.885,2.49-1.739 C23.307,19.268,23.307,18.533,23.214,18.38z"></path>{" "}
                    </g>{" "}
                  </g>
                </svg>{" "}
                WhatsApp Us{" "}
              </Button>
            </div>
          </div>
        </section>
        <section
          id="why-choose-us"
          className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
        >
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold text-center">
            <span className="border-b-4 border-[#ffdb5e]">
              Why Choose Rukun Al Arooba?
            </span>{" "}
            <span className="md:block blue">
              Best Used Furniture Company in Sharjah
            </span>
          </h2>

          <div className="mt-16 grid md:grid-cols-3 grid-cols-1 gap-10">
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Legitimacy You Can
                Trust
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Unlike many freelance operators in the market, we are an
                officially registered company with the UAE government since
                2018. Our physical showroom in Sharjah serves as your guarantee
                of authenticity – you can visit, inspect, and experience our
                furniture firsthand.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Lightning-Fast Service
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Time is precious. When you contact us via WhatsApp or our
                website, expect a response within 5-10 minutes. Whether
                you&lsquo;re buying or selling, we value your time and make the
                process seamless and efficient.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Sharjah Storefront
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                We don&lsquo;t just resell furniture – we restore it. Every
                piece undergoes thorough inspection, necessary repairs, and
                professional polishing before reaching our showroom. When you
                buy from us, you&lsquo;re getting furniture that looks and feels
                like new, backed by our quality guarantee.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Flexible Payment
                Options
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Your convenience matters. We accept multiple payment methods
                including cash, online deposits, and bank checks – giving you
                the flexibility to choose what works best for you.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Complete Moving
                Solutions
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                Through our exclusive partnership with Abu Muhammad Movers, we
                offer professional pickup and delivery services at competitive
                rates. No need to worry about transportation – we handle
                everything from showroom to your doorstep with care and
                precision
              </p>
            </div>
            <div>
              <h3 className="text-xl font-medium headline flex items-center gap-x-2">
                <CheckCircle size={25} className="pri" /> Customer-First
                Warranty
              </h3>
              <p className="text-sm text mt-2 pb-3 border-b-2 border-[#c07d53a5]">
                We stand behind our products with a solid warranty. If any item
                doesn&lsquo;t meet your expectations, our hassle-free return
                policy ensures your complete satisfaction.
              </p>
            </div>
          </div>
        </section>
        <section
          className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:ml-32 overflow-hidden md:px-0 px-3"
          id="areas-we-cover"
        >
          <div>
            <h2 className="headline  md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                Serving All of UAE
              </span>{" "}
            </h2>
            <p className="mt-3 text">
              While our showroom graces Al Estiqlal Street in Bu Shaghara, Hay
              Al Qasimiah, Sharjah, our services extend across the entire UAE:
            </p>
            <ul className="mt-5 list-disc list-inside text">
              <li>Abu Dhabi - Premium furniture delivered to the capital</li>
              <li className="mt-2">
                Dubai - Quick access to quality used furniture
              </li>
              <li className="mt-2">
                Ajman - Neighboring excellence in pre-owned furnishings
              </li>
              <li className="mt-2">
                Ras Al Khaimah - Extending quality to the northern emirates
              </li>
              <li className="mt-2">Al Ain - Garden city furniture solutions</li>
              <li className="mt-2">And all surrounding areas</li>
            </ul>
            <Link href={"/contact-us"}>
              <Button size={"lg"} className="mt-5">
                Contact From Anywhere in UAE
              </Button>
            </Link>
          </div>
          <div className="mx-auto md:mt-16 w-full ">
            <div className="md:h-[430px] h-96 md:w-96 w-full relative">
              <Image
                src={"/furniture/used-furniture-buyers-in-uae.jpg"}
                alt="Used Furniture Buyers in UAE"
                fill
                className="object-cover rounded-2xl"
              />
              <div className="md:absolute w-full h-full pri-bg -z-10 top-5 md:-top-12 md:-right-12 -right-5 rounded-2xl" />
            </div>
          </div>
        </section>
        <section className="relative py-20 px-6 mt-20">
          <div className="bg-pattern -z-10"></div>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl headline md:text-4xl font-bold mb-4">
              Our Commitment to Sustainability
            </h2>
            <p className="text text-lg">
              Choosing used furniture isn&lsquo;t just economical – it&lsquo;s
              environmental. By giving quality furniture a second life,
              we&lsquo;re reducing waste and contributing to a more sustainable
              UAE. Every purchase from Rukun Al Arooba is a step towards a
              greener future.
            </p>
          </div>
        </section>

        <div className="pri-bg text-gray-100 text-center py-6 px-6">
          <p>
            Moving, upgrading, downsizing, or furnishing on a budget — we make
            it smooth, affordable, and stress-free.
          </p>
          <p className="mt-1">
            Fast pickup, fair prices, and instant payment across the city.
          </p>
        </div>
        <Reviews />
        <CTA
          title="Contact Us Or Visit Us Today"
          desc={
            <>
              <p>
                If you&lsquo;re ready to find the perfect pre-owned item or want
                to sell your furniture quickly and easily, Rukun Al Arooba Used
                Furniture is here to help.
              </p>
            </>
          }
        />
      </main>
      <LatestsNews />
    </>
  );
}
