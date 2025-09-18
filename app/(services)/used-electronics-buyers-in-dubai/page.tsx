import ServiceAside from "@/components/base/ServiceAside";
import ServiceHero from "@/components/base/ServiceHero";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import React from "react";
import "../styling.css";
import Image from "next/image";
import CTA from "@/components/base/CTA";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import FAQs from "@/components/base/FAQs";
import { electronicsFaqs } from "@/lib/list";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Electronics Buyers in Dubai, UAE — Sell Devices for Cash",
      desc: "Sell your used electronics in Dubai fast. Rukun Al Arooba offers instant quotes, free pickup, secure data wipe & fair cash offers across the UAE.",
    },
    image: {
      path: "/service/used-electronics-buyers-in-dubai.jpg",
      alt: "used electronics buyers in dubai",
    },
    path: "/used-electronics-buyers-in-dubai",
  },
});

const images = [
  {
    src: "/service/buyers-of-electronics.jpg",
    alt: "buyers of electronics",
  },
  {
    src: "/service/used-electronics-in-uae.jpg",
    alt: "electronics buyers in uae",
  },
  {
    src: "/service/electronics-in-dubai-used.jpg",
    alt: "electronics in dubai used",
  },
  {
    src: "/service/second-hand-electronics.png",
    alt: "second hand electronics",
  },
];

function UsedElectronicsBuyers() {
  return (
    <main className="service-page">
      <ServiceHero
        title={{
          one: "Used Electronics Buyers ",
          two: "in Dubai, UAE",
        }}
        desc="Looking for reliable used electronics buyers in Dubai who pay fair prices and make selling simple? Rukun Al Arooba buys all types of used electronics and home appliances — from mobile phones and laptops to TVs, refrigerators, AC units and washing machines. We provide instant quotes, secure data wiping, free pickup (Dubai), and multiple payment options so you get paid quickly and safely."
        img={{
          src: "/service/used-electronics-buyers-in-dubai.jpg",
          alt: "used electronics buyers in dubai",
        }}
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 min-h-[500px] mt-20 md:w-11/12 mx-auto">
        <article className="md:col-span-2 col-span-1 md:order-2 order-1 service-article">
          <section className="section why-sell" id="why-sell">
            <h2 className="section-title">Why sell to Rukun Al Arooba?</h2>

            <ul className="feature-list">
              <li>
                <strong>Instant, honest offers:</strong> Send photos via
                WhatsApp or the website and get a transparent, competitive offer
                within minutes.
              </li>
              <li>
                <strong>Free or low-cost pickup across Dubai:</strong> We
                coordinate safe collection and handle all transport.
              </li>
              <li>
                <strong>Secure data handling:</strong> We permanently wipe or
                factory-reset phones, laptops and tablets before resale — your
                privacy is guaranteed.
              </li>
              <li>
                <strong>Multiple payment choices:</strong> Cash on pickup, bank
                transfer, or cheque — choose what suits you.
              </li>
              <li>
                <strong>Trusted &amp; experienced:</strong> Officially
                registered and trading in the UAE for 20+ years, we buy from
                households and businesses.
              </li>
              <li>
                <strong>Sustainability &amp; recycling:</strong> We refurbish
                sellable items and responsibly recycle e-waste, reducing
                landfill impact.
              </li>
            </ul>

            <div className="hero-cta" style={{ marginTop: "0.8rem" }}>
              <a
                className="cta-button"
                href="https://wa.me/971XXXXXXXXX?text=I%20want%20to%20sell%20my%20electronics"
                target="_blank"
                rel="noreferrer"
              >
                Get Instant Quote on WhatsApp
              </a>
              <a className="cta-phone" href="/sell-electronics" rel="noopener">
                Sell My Electronics — Get Offer
              </a>
            </div>
          </section>
          <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
            <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
              <Image
                src={"/service/best-electronics-buyers-in-dubai.jpg"}
                alt="Best Electronics Buyers in Dubai"
                fill
                className="object-cover"
              />
            </div>
            <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
              <Image
                src={"/service/electronics-buyers-in-uae.jpg"}
                alt="Electronics Buyers in UAE"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <section className="section what-we-buy" id="what-we-buy">
            <h2 className="section-title">What we buy</h2>

            <p>We buy working and non-working electronics, including:</p>
            <ul className="checklist">
              <li>Mobile phones &amp; tablets (all brands &amp; conditions)</li>
              <li>Laptops, PCs &amp; monitors</li>
              <li>LED/LCD/Smart TVs &amp; sound systems</li>
              <li>Refrigerators, washing machines, dishwashers, ovens</li>
              <li>
                Air conditioners, water dispensers &amp; other household
                appliances
              </li>
              <li>
                IT equipment and e-waste (servers, switches, printers) for
                recycling
              </li>
            </ul>

            <p className="note">
              If you’re unsure, send clear photos, model/brand and the location
              and we’ll advise right away.
            </p>
          </section>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
            {images.map((img, o) => (
              <div
                key={o}
                className="md:h-52 h-60 bg-gray-200 relative rounded-2xl overflow-hidden"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
          <section className="section process" id="how-selling-works">
            <h2 className="section-title">
              How selling works — simple 4-step process
            </h2>

            <ol className="steps">
              <li>
                <strong>Message us:</strong> Send photos + basic details via
                WhatsApp or our site.
              </li>
              <li>
                <strong>Get an instant quote:</strong> We evaluate and return a
                fair offer (use keywords like{" "}
                <span className="keyword">sell used electronics in Dubai</span>{" "}
                in your message).
              </li>
              <li>
                <strong>Schedule pickup:</strong> Choose same-day or next-day
                pickup anywhere in Dubai.
              </li>
              <li>
                <strong>Get paid:</strong> Receive payment on pickup via your
                preferred method.
              </li>
            </ol>
            <div className="my-5 flex gap-x-3">
              <Button wtsBtn>WhatsApp Us </Button>
              <Link href={"/contact-us"}>
                {" "}
                <Button variant={"outline"}>Contact Us</Button>
              </Link>
            </div>
            <p className="small-note">
              No hidden fees — the offer you accept is what you get.
            </p>
          </section>

          <section className="section valuations" id="valuations">
            <h2 className="section-title">
              Fair valuations &amp; what affects price
            </h2>
            <p>
              We value items based on brand, model, age, working condition, and
              market demand. To get the best price, share: brand, model number,
              photos of serial/condition, and whether accessories/box are
              included.
            </p>
          </section>

          <section className="section data-safety" id="data-safety">
            <h2 className="section-title">Data safety &amp; refurbishment</h2>
            <p>
              We factory-reset or securely wipe all devices — we never resale
              devices containing your personal data. Devices that can be
              repaired are refurbished and tested; irreparable electronics are
              recycled responsibly.
            </p>
          </section>

          <section className="section service-areas" id="service-areas">
            <h2 className="section-title">
              Service areas — We buy used electronics across the UAE
            </h2>
            <p>
              Based in Sharjah, Rukun Al Arooba is a leading buyer of used
              electronics across the UAE.
            </p>
            <p>
              If you’re looking to sell used electronics in Dubai, sell old
              phones in Abu Dhabi, or find reliable used electronics buyers in
              Dubai and nearby emirates, we make the process fast, safe and
              profitable.
            </p>
            <p>
              Below are the emirates and areas we serve — each entry highlights
              what we offer locally so sellers know exactly what to expect.
            </p>
            <div className="my-5 flex gap-x-3">
              <Button>WhatsApp Us </Button>
              <Link href={"/contact-us"}>
                {" "}
                <Button variant={"outline"}>Contact Us</Button>
              </Link>
            </div>
            <h3 className="font-bold my-5 text-lg headline underline underline-offset-2">
              Dubai (used electronics buyers in Dubai)
            </h3>
            <p>
              We buy mobile phones, laptops, smart TVs, gaming consoles and home
              appliances across Dubai — from Deira and Bur Dubai to Jumeirah, Al
              Quoz, JLT and Dubai Marina.
            </p>
            <h3 className="font-bold my-5 text-lg headline underline underline-offset-2">
              Abu Dhabi (sell used electronics in Abu Dhabi)
            </h3>
            <p>
              Selling electronics in Abu Dhabi? We collect from residential and
              commercial addresses across the city. Whether you’re selling
              office IT equipment, refrigerators or smartphones, we provide fair
              offers, secure data wiping and fast bank transfer or cash payment
              on pickup.
            </p>
            <h3 className="font-bold my-5 text-lg headline underline underline-offset-2">
              Sharjah (trusted buyers in Sharjah)
            </h3>
            <p>
              Our Sharjah base means fast response and local pickup options in
              Hay Al Qasimiah, Bu Shaghara and surrounding neighborhoods. If you
              search for used electronics buyers near me Sharjah, message us —
              we reply within minutes and can arrange quick collection.
            </p>
            <h3 className="font-bold my-5 text-lg headline underline underline-offset-2">
              Ajman, Ras Al Khaimah & Al Ain (regional coverage)
            </h3>
            <p>
              We regularly buy electronics from Ajman, Ras Al Khaimah and Al Ain
              — including bulky appliances like washing machines and AC units.
              For these emirates we offer scheduled pickup windows and
              competitive pricing that reflects local market demand.
            </p>
          </section>
          <div className="my-10 grid w-full relative md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
            <Image
              src="/service/Sell-Used-Electronics-in-UAE.webp"
              alt="sell used electronics in uae"
              fill
              className="object-cover"
            />
          </div>
        </article>
        <ServiceAside />
      </div>
      <FAQs Faqs={electronicsFaqs} />
      <CTA
        title="Ready to sell your Electronics"
        desc={
          <>
            <p>
              If you’re searching for used electronics buyers in Dubai who
              deliver instant offers and safe pickup, Rukun Al Arooba is ready
              to help. Message us on WhatsApp now with photos and the
              phrase“sell used electronics Dubai” and we’ll reply within
              minutes.
            </p>
          </>
        }
      />
    </main>
  );
}

export default UsedElectronicsBuyers;
