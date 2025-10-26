import ServiceAside from "@/components/base/ServiceAside";
import ServiceHero from "@/components/base/ServiceHero";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import "../styling.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import CTA from "@/components/base/CTA";
import FAQs from "@/components/base/FAQs";
import { BedsFaqs } from "@/lib/list";
import Link from "next/link";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";
import Reviews from "@/components/Reviews";
import LatestsNews from "@/components/LatestsNews";
export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Beds for Sale in Sharjah & UAE — Rukun Al Arooba",
      desc: "Shop quality refurbished used beds for sale in Sharjah, Dubai & Abu Dhabi. Inspected, polished, warranty & fast delivery. Get an instant WhatsApp quote — buy today.",
    },
    image: {
      path: "/service/used-beds-for-sale.jpg",
      alt: "rukun al arooba used beds for sale",
    },
    path: "/used-beds-for-sale",
  },
});

const images = [
  {
    src: "/service/used-king-size-bed-luxury.jpg",
    alt: "Used king size bed for sale — luxury frame & solid headboard, gently used mattress",
  },
  {
    src: "/service/used-queen-double-bed.jpg",
    alt: "Used queen & double beds for sale — wooden & metal frames for master & guest rooms",
  },
  {
    src: "/service/used-single-bed-compact.jpg",
    alt: "Used single bed for sale — perfect for kids’ & compact guest rooms",
  },
  {
    src: "/service/used-bunk-bed-dubai.jpg",
    alt: "Used bunk beds for sale in Dubai — inspected, safe & sturdy stackable options",
  },
  {
    src: "/service/used-sofa-bed-dubai.jpg",
    alt: "Used sofa bed for sale Dubai — multi-purpose sofa beds, mechanism tested & cleaned",
  },
  {
    src: "/service/beds-with-storage-headboard.jpg",
    alt: "Beds with storage & headboard — reclaimed, cleaned, drawers & hinges tested",
  },
];
const FaqsSchema = generateFAQSchema(convertFaqsForSchema(BedsFaqs));
const UsedBeds = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="service-page">
        <ServiceHero
          title={{
            one: "Used Beds for Sale",
            two: "Quality Second-Hand Beds in the UAE",
          }}
          desc="Looking for used beds for sale in Sharjah, Dubai or Abu Dhabi? Rukun Al Arooba offers a wide selection of inspected, refurbished and like-new used beds — king, queen, double, single, bunk beds and sofa beds — all ready for fast delivery across the UAE."
          img={{
            src: "/service/used-beds-for-sale.jpg",
            alt: "Used Beds For Sale in UAE",
          }}
        />
        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 min-h-[500px] mt-20 md:w-11/12 mx-auto">
          <article className="md:col-span-2 col-span-1 md:order-2 order-1 service-article">
            <section className="section beds-for-sale" id="used-beds">
              <h2 className="section-title">
                Why buy used beds from Rukun Al Arooba?
              </h2>

              <p className="lead">
                Buying a <strong>used bed for sale in Sharjah</strong> should
                save you money without compromising quality. Here’s what makes
                us different:
              </p>

              <ul className="feature-list">
                <li>
                  <strong>Trusted &amp; registered:</strong> Officially
                  registered in 2018 and trading in Sharjah for 20+ years — real
                  store, real stock.
                </li>
                <li>
                  <strong>Inspected &amp; refurbished:</strong> Every bed is
                  cleaned, inspected, repaired and polished so it looks and
                  feels like new — we don’t sell “as-is” junk.
                </li>
                <li>
                  <strong>Fast responses:</strong> Contact us on WhatsApp or via
                  our website and receive a reply within{" "}
                  <strong>5–10 minutes</strong>.
                </li>
                <li>
                  <strong>Multiple payment options:</strong> Cash, bank deposit
                  or cheque — whatever suits you.
                </li>
                <li>
                  <strong>Delivery &amp; pickup partnership:</strong> We partner
                  with <strong>Abu Muhammad Movers</strong> for safe, affordable
                  pickup and delivery across Dubai, Abu Dhabi, Sharjah, Ajman,
                  Ras Al Khaimah and Al Ain.
                </li>
                <li>
                  <strong>Warranty &amp; returns:</strong> Buy with confidence —
                  we offer warranty options and a simple return policy on
                  eligible items.
                </li>
                <li>
                  <strong>Sustainable choice:</strong> Buying pre-owned reduces
                  waste and supports sustainable furniture reuse.
                </li>
              </ul>
            </section>
            <div className="my-10 grid w-full relative md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/service/beds-for-sale-in-uae.jpg"
                alt="Used Beds For Sale in UAE"
                fill
                className="object-cover"
              />
            </div>
            <section className="section stock" id="beds-stock">
              <h2 className="section-title">Our stock — beds for every need</h2>

              <p>
                We stock a variety of <strong>used beds</strong> and{" "}
                <strong>used bed and mattress for sale</strong> options. Each
                listing includes clear photos, dimensions, condition notes and
                whether a mattress is included.
              </p>

              <ul className="checklist">
                <li>
                  <strong>Used king size bed for sale</strong> — luxury frames,
                  solid headboards and gently used mattresses (if included).
                </li>
                <li>
                  <strong>Used queen &amp; double bed for sale</strong> —
                  popular sizes in both wooden and metal frames, ideal for
                  master and guest bedrooms.
                </li>
                <li>
                  <strong>Used single bed for sale</strong> — perfect for kids’
                  rooms and compact guest rooms.
                </li>
                <li>
                  <strong>
                    Used bunk beds for sale / used bunk bed for sale in Dubai
                  </strong>{" "}
                  — safe, sturdy stackable options for children or shared rooms
                  (railings & fixings inspected).
                </li>
                <li>
                  <strong>
                    Used sofa bed &amp; used sofa bed for sale Dubai
                  </strong>{" "}
                  — multi-purpose pieces for studio flats and guest rooms; sofa
                  mechanisms tested and cleaned.
                </li>
                <li>
                  <strong>Beds with storage / beds with headboard</strong> —
                  reclaimed, fully cleaned and ready to use; drawers and hinges
                  tested for smooth operation.
                </li>
              </ul>
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
            <section className="section how-to-buy" id="how-to-buy-bed">
              <h2 className="section-title">
                How to buy — simple, fast, local
              </h2>

              <ol className="steps">
                <li>
                  <strong>Browse or message:</strong> View our live stock on the
                  website or send us a WhatsApp message describing the bed you
                  want (size, type, location: Dubai, Sharjah or Abu Dhabi).
                </li>
                <li>
                  <strong>Get an instant quote:</strong> We’ll send price,
                  photos and delivery cost. Use high-intent keywords like{" "}
                  <span className="keyword">buy used bed Dubai</span> or{" "}
                  <span className="keyword">
                    used double bed for sale in Sharjah
                  </span>{" "}
                  in your message so we can filter fast.
                </li>
                <li>
                  <strong>Inspect &amp; confirm:</strong> Prefer to see in
                  person? Visit our Sharjah store. If not, we can send
                  additional photos and a short video.
                </li>
                <li>
                  <strong>Delivery &amp; installation:</strong> Our partner
                  movers pick up and deliver safely — ask about same-day
                  delivery for nearby emirates.
                </li>
                <li>
                  <strong>Warranty &amp; returns:</strong> We’ll confirm
                  warranty terms before you pay.
                </li>
              </ol>

              <p className="mt-3">
                <a
                  className="cta-button"
                  href="https://wa.me/971XXXXXXXXX?text=I%27m%20interested%20in%20a%20used%20bed"
                  target="_blank"
                  rel="noreferrer"
                >
                  Get an instant quote on WhatsApp
                </a>{" "}
                or{" "}
                <a
                  className="cta-phone"
                  href="https://maps.app.goo.gl/yourstorelink"
                  target="_blank"
                  rel="noreferrer"
                >
                  Visit our store on Al Estiqlal Street
                </a>
                .
              </p>
            </section>

            <section className="section sell-beds" id="sell-beds">
              <h2 className="section-title">
                Selling your used bed? We buy too.
              </h2>

              <p>
                Want to <strong>sell your used bed in Sharjah</strong> or
                elsewhere in the UAE? Tell us the condition and share photos via
                WhatsApp. We offer fair, transparent pricing and — if needed —
                pickup by Abu Muhammad Movers at competitive rates.
              </p>

              <div className="my-5 flex gap-x-3">
                <Button wtsBtn>WhatsApp Us </Button>
                <Link href={"/used-beds-buyers-in-dubai"}>
                  {" "}
                  <Button variant={"outline"}>Sell Your Bed Now</Button>
                </Link>
              </div>
            </section>

            <section className="section delivery" id="delivery-pickup">
              <h2 className="section-title">Delivery, pickup &amp; safety</h2>

              <p>
                We coordinate pickup and delivery across the UAE, including{" "}
                <strong>used bed delivery Abu Dhabi</strong>,{" "}
                <strong>used bed delivery Dubai</strong> and{" "}
                <strong>used bed delivery Sharjah</strong>.
              </p>
              <p>
                Because we partner with a reliable mover, your furniture is
                handled by professionals who know how to protect frames and
                mattresses during transit (padding, straps and mattress covers
                used).
              </p>
            </section>
            <div className="my-10 grid w-full relative md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
              <Image
                src="/service/used-bed-delivery-uae.jpg"
                alt="Used bed delivery UAE — safe pickup & professional movers in Dubai, Sharjah & Abu Dhabi"
                fill
                className="object-cover"
              />
            </div>
            <section className="section warranty" id="warranty-cleaning">
              <h2 className="section-title">
                Warranty, cleaning &amp; inspection
              </h2>

              <p>
                Every bed is inspected for structural integrity — joints, slats,
                and frame bolts are checked and tightened. Mattresses are
                sanitized and, when necessary, professionally cleaned or
                replaced.
              </p>
              <p>
                We provide transparent condition notes and offer limited
                warranty options on select items — another reason customers
                prefer to <strong>buy used beds for sale</strong> from Rukun Al
                Arooba.
              </p>
            </section>
          </article>
          <ServiceAside />
        </div>
        <Reviews />
        <FAQs Faqs={BedsFaqs} />
        <CTA
          title="Ready to buy a quality used bed?"
          desc={
            <>
              <p>
                Message us on WhatsApp now for instant photos, price and
                delivery — we reply within 5–10 minutes.
              </p>
              <p>
                If the bed is in stock we can often deliver the same day — ask
                now and we’ll confirm availability and price.
              </p>
            </>
          }
        />
      </main>
      <LatestsNews />
    </>
  );
};

export default UsedBeds;
