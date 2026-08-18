import ServiceAside from "@/components/base/ServiceAside";
import ServiceHero from "@/components/base/ServiceHero";
import Breadcrumb from "@/components/Breadcrumb";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import "../styling.css";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import FAQs from "@/components/base/FAQs";
import { AcBuyersFaqs } from "@/lib/list";
import CTA from "@/components/base/CTA";
import { convertFaqsForSchema } from "@/lib/ConvertFaqsInRaw";
import { generateFAQSchema } from "@/lib/GenerateFaqSchema";
import Script from "next/script";
import Reviews from "@/components/Reviews";
import LatestsNews from "@/components/LatestsNews";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used AC Buyers in Dubai – Instant Cash | Rukun Al Arooba",
      desc: "Looking for trusted used AC buyers in Dubai? Rukun Al Arooba offers the best price, free pickup, and a response in 10 minutes. We serve Dubai, Sharjah & all UAE.",
    },
    image: {
      path: "/service/used-ac-buyers-in-dubai.jpg",
      alt: "rukun al arooba used ac buyers in dubai",
    },
    path: "/used-ac-buyers-in-dubai",
  },
});

const FaqsSchema = generateFAQSchema(convertFaqsForSchema(AcBuyersFaqs));

const UsedAcBuyersInDubai = () => {
  return (
    <>
      <Script
        strategy="beforeInteractive"
        id="FAQSchema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: FaqsSchema }}
      />
      <main className="service-page">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Used AC Buyers in Dubai" },
          ]}
        />
        <ServiceHero
          title={{
            one: "Used AC Buyers in Dubai",
            two: "Sell Your Old Air Conditioner for Instant Cash",
          }}
          desc="If you're looking for reliable used AC buyers in Dubai, you've found them. At Rukun Al Arooba Used Furniture, we buy all types of second-hand air conditioners across Dubai and the UAE. Send us a few photos on WhatsApp and we'll give you a confirmed price — not a rough estimate — within 5 to 10 minutes. We offer free pickup, multiple payment options, and we serve Dubai, Sharjah, Ajman, Abu Dhabi, and beyond. We're a government-registered company since 2018, with over 20 years of experience in used appliance and furniture trading."
          img={{
            src: "/service/used-ac-buyers-in-dubai.jpg",
            alt: "used ac buyers in dubai",
          }}
        />

        <div className="grid md:grid-cols-3 grid-cols-1 gap-10 min-h-[500px] mt-20 md:w-11/12 mx-auto">
          <article className="md:col-span-2 col-span-1 md:order-2 order-1 service-article">
            {/* Section 1: Why Choose Rukun Al Arooba */}
            <section
              className="section why-choose-ac"
              id="why-choose-rukun-al-arooba"
            >
              <h2 className="section-title">
                Why Choose Rukun Al Arooba as Your Used AC Buyers in Dubai?
              </h2>
              <p className="lead">
                Most websites you&apos;ll find when searching for used AC buyers
                in Dubai are run by middlemen. They collect your details, pass
                them to another company, and you deal with someone you&apos;ve
                never heard of. That&apos;s not how we work.
              </p>
              <p>
                We&apos;re a registered business with a real physical store in
                Sharjah. Our team responds fast, prices fairly, and handles the
                entire process — from quote to pickup to payment.
              </p>
              <p>Here&apos;s what sets us apart:</p>

              <div className="my-8 relative w-full aspect-video bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/rukun-al-arooba-board-image.jpg"
                  alt="Rukun Al Arooba Used Furniture store — used AC buyers in Dubai and Sharjah"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  A Licensed Business With a Real Store You Can Visit
                </h3>
                <p>
                  Rukun Al Arooba has been officially registered with the UAE
                  Government since 2018. Our store is on{" "}
                  <span className="font-medium">
                    {" "}
                    Al Estiqlal Street, Bu Shaghara, Hay Al Qasimiah, Sharjah
                  </span>
                  — you can walk in, see the place, and meet the team.
                  We&apos;re not a virtual service or a lead-generation site.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Over 20 Years of Experience in Used Appliance Trading
                </h3>
                <p>
                  The people behind Rukun Al Arooba have been working in used
                  furniture and home appliances trading in Sharjah for more than
                  20 years. That means we know the real market value of your AC
                  — and we price it that way, not lower.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  A Real Price in 5 to 10 Minutes on WhatsApp
                </h3>
                <p>
                  Most buyers give you a vague reply and ask you to bring the
                  unit in. We don&apos;t do that. Send us your AC photos and
                  basic details on WhatsApp. We review them and reply with an
                  actual confirmed price within 5 to 10 minutes. No waiting. No
                  runaround.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Free Pickup Across Dubai and the UAE Through Our Logistics
                  Partner
                </h3>
                <p>
                  We work with{" "}
                  <span className="font-medium">Abu Muhammad Movers</span>, our
                  partner moving company, to handle pickup and transport. Our
                  team comes to your location — whether you&apos;re in Dubai,
                  Sharjah, Ajman, Abu Dhabi, Ras Al Khaimah, or Al Ain — safely
                  removes the AC, and loads it up. You don&apos;t need to
                  arrange anything separately.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Cash, Bank Transfer, or Cheque — Your Choice
                </h3>
                <p>
                  Once we collect your AC, we pay you on the spot. You can
                  choose:
                </p>
                <ul className="checklist">
                  <li>
                    <strong>Cash in hand</strong>
                  </li>
                  <li>
                    <strong>Bank transfer or online deposit</strong>
                  </li>
                  <li>
                    <strong>Bank cheque</strong>
                  </li>
                </ul>
                <p>
                  Most buyers in Dubai only deal in hand-to-hand cash. We give
                  you more flexibility.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Sell Your AC, Appliances, and Furniture in One Visit
                </h3>
                <p>
                  Moving out or clearing a space? Instead of calling different
                  buyers for your AC, fridge, sofa, and wardrobe — just call us.
                  We buy air conditioners, home appliances, and all types of
                  furniture in a single visit. One call, one team, one payment.
                </p>
                <div className="mt-3">
                  <Link
                    href="/used-home-appliances-dubai"
                    className="font-semibold text-amber-700 hover:text-amber-800 underline"
                  >
                    Used Home Appliances Buying Service &rarr;
                  </Link>
                </div>
              </div>
            </section>

            {/* Section 2: Types of Used AC Units We Buy in Dubai */}
            <section
              className="section types-of-ac"
              id="types-of-used-ac-units"
            >
              <h2 className="section-title">
                Types of Used AC Units We Buy in Dubai
              </h2>
              <p>
                We buy all types of air conditioners from homes, offices,
                hotels, and commercial properties across Dubai and the UAE.
              </p>

              <div className="my-8 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src="/service/used-air-conditioners.jpg"
                    alt="Types of used AC units bought by Rukun Al Arooba — used AC buyers in Dubai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src="/service/Used-Window-AC-Buyers-in-Dubai.jpg"
                    alt="Used AC and home appliances buyers in Dubai"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="appliance-card" id="split-ac">
                <h3 className="appliance-title">
                  Used Split AC Buyers in Dubai
                </h3>
                <p>
                  We purchase split AC units from 1 ton to 5 ton across all
                  major brands — LG, Samsung, Daikin, Carrier, Gree, Panasonic,
                  General, Haier, Mitsubishi, and Midea. Working or non-working
                  units are both considered.
                </p>
                <p className="note italic mt-2">
                  Contact us on WhatsApp for a quick quote.
                </p>
              </div>

              <div className="appliance-card" id="window-ac">
                <h3 className="appliance-title">
                  Used Window AC Buyers in Dubai
                </h3>
                <p>
                  We buy General window ACs and all other window unit brands in
                  good working condition. Doorstep pickup, instant payment.
                </p>
                <p className="note italic mt-2">
                  Contact us on WhatsApp for a quick quote.
                </p>
              </div>

              <div className="appliance-card" id="inverter-ac">
                <h3 className="appliance-title">
                  Used Inverter and DC Inverter AC Buyers
                </h3>
                <p>
                  Inverter ACs hold their value well in the second-hand market.
                  If you&apos;re selling a used inverter or DC inverter unit,
                  we&apos;ll give you a fair offer based on its brand, capacity,
                  and condition.
                </p>
                <p className="note italic mt-2">
                  Contact us on WhatsApp for a quick quote.
                </p>
              </div>

              <div className="appliance-card" id="central-ac">
                <h3 className="appliance-title">
                  Used Central and Ducted AC Buyers in Dubai
                </h3>
                <p>
                  We buy central air conditioning systems, cassette ACs, ducted
                  systems, and chiller units from both residential and
                  commercial properties. Our team handles safe dismantling and
                  proper refrigerant recovery (degassing) before removal.
                </p>
                <p className="note italic mt-2">
                  Contact us on WhatsApp for a quick quote.
                </p>
              </div>

              <div className="appliance-card" id="portable-ac">
                <h3 className="appliance-title">
                  Used Portable and Floor-Standing AC Buyers
                </h3>
                <p>
                  We also buy portable and floor-standing AC units in working
                  condition. Send us the details and we&apos;ll come back with a
                  price.
                </p>
                <p className="note italic mt-2">
                  Contact us on WhatsApp for a quick quote.
                </p>
              </div>
            </section>

            {/* Section 3: We Buy From All Property Types */}
            <section className="section property-types" id="all-property-types">
              <h2 className="section-title">We Buy From All Property Types</h2>
              <p>
                It doesn&apos;t matter where the AC is — we&apos;ll come to you.
                We buy used air conditioners from:
              </p>
              <ul className="checklist">
                <li>Apartments and villas</li>
                <li>Hotel rooms and serviced apartments</li>
                <li>Offices and co-working spaces</li>
                <li>Restaurants and cafes</li>
                <li>Shops and retail stores</li>
                <li>Warehouses and factories</li>
                <li>Schools and hospitals</li>
                <li>Construction sites and development projects</li>
              </ul>
            </section>

            {/* Section 4: How to Sell Your Used AC in Dubai — 3 Simple Steps */}
            <section className="section process-ac" id="how-to-sell">
              <h2 className="section-title">
                How to Sell Your Used AC in Dubai — 3 Simple Steps
              </h2>

              <div className="my-8 relative w-full md:h-96 h-80 bg-gray-200 rounded-2xl overflow-hidden">
                <Image
                  src="/service/sell-used-ac-in-dubai-3-steps-process.jpg"
                  alt="How to sell used AC in Dubai — Rukun Al Arooba 3-step process"
                  fill
                  className="object-cover"
                />
              </div>

              <ol className="steps">
                <li>
                  <strong>Step 1 — Send Us Your AC Details on WhatsApp:</strong>{" "}
                  Take 2 to 3 clear photos of your AC: the front panel, the
                  outdoor unit, and the brand label. Send them to us on WhatsApp
                  along with the brand name, capacity in tons, approximate age,
                  and current working condition. Our team will look at them and
                  get back to you within <strong>5 to 10 minutes</strong>.
                </li>
                <li>
                  <strong>Step 2 — Get a Confirmed Price:</strong> We don&apos;t
                  send vague estimates. You&apos;ll receive a confirmed price
                  based on what we see. There&apos;s no obligation — the quote
                  is completely free. If you&apos;re happy with the offer, we
                  schedule a pickup time that works for you.
                </li>
                <li>
                  <strong>
                    Step 3 — We Come to You, Pick Up the AC, and Pay You
                    Immediately:
                  </strong>{" "}
                  Our team arrives at your location anywhere in Dubai or across
                  the UAE. We carefully uninstall and remove the unit. And right
                  there, on the spot, you get paid — cash, transfer, or cheque —
                  your call.
                </li>
              </ol>

              <div className="my-6 flex flex-wrap gap-4 items-center">
                <Button wtsBtn size="lg">
                  Start Now on WhatsApp
                </Button>
                <Link href="/contact-us">
                  <Button variant="outline" size="lg">
                    Contact Us
                  </Button>
                </Link>
              </div>
            </section>

            {/* Section 5: Areas We Serve */}
            <section className="section areas-served" id="areas-we-serve">
              <h2 className="section-title">
                Areas We Serve — Used AC Buyers Across the UAE
              </h2>

              <div className="appliance-card">
                <h3 className="appliance-title">Used AC Buyers in Dubai</h3>
                <p>
                  We cover all areas of Dubai including Deira, Bur Dubai, Al
                  Quoz, Jumeirah, Dubai Marina, JBR, Business Bay, Mirdif, Al
                  Barsha, Silicon Oasis, Nad Al Hamar, Al Nahda, and more. If
                  you&apos;re in Dubai, we reach you.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">Used AC Buyers in Sharjah</h3>
                <p>
                  Our main store is in Sharjah. You can visit us at Al Estiqlal
                  Street, Bu Shaghara — or we come to you. We serve Industrial
                  Area, Al Nahda, Muwaileh, Al Khan, Al Majaz, Rolla, Al
                  Qasimiah, and all of Sharjah.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">Used AC Buyers in Ajman</h3>
                <p>
                  We also buy used ACs from Ajman. Just message us on WhatsApp
                  with your location and AC details and we&apos;ll handle it
                  from there.
                </p>
              </div>

              <div className="appliance-card">
                <h3 className="appliance-title">
                  Used AC Buyers in Abu Dhabi, RAK, and Al Ain
                </h3>
                <p>
                  We serve Abu Dhabi, Ras Al Khaimah, Al Ain, and surrounding
                  areas on request. Don&apos;t hesitate to reach out from
                  anywhere in the UAE.
                </p>
              </div>
            </section>

            {/* Section 6: We Don't Just Buy ACs — Sell Everything in One Go */}
            <section
              className="section sell-everything"
              id="sell-everything-in-one-go"
            >
              <h2 className="section-title">
                We Don&apos;t Just Buy ACs — Sell Everything in One Go
              </h2>
              <p>
                This is something none of our competitors offer. If you&apos;re
                moving, renovating, or clearing out a property, you probably
                need to get rid of more than just an AC.
              </p>
              <p>We buy:</p>
              <ul className="feature-list">
                <li>Air conditioners of all types</li>
                <li>Refrigerators, washing machines, and dryers</li>
                <li>TVs and electronics</li>
                <li>Kitchen appliances</li>
                <li>Sofas, beds, and dining sets</li>
                <li>Office furniture and desks</li>
                <li>Wardrobes, cabinets, and kitchen units</li>
              </ul>
              <p className="font-semibold text-gray-800 my-3">
                One WhatsApp message. One visit. One payment. Done.
              </p>
              <div className="flex flex-wrap gap-4 mt-4">
                <Link
                  href="/used-furniture-buyers-in-dubai"
                  className="text-amber-700 underline font-medium hover:text-amber-800"
                >
                  Sell Used Furniture &rarr;
                </Link>
                <Link
                  href="/used-home-appliances-dubai"
                  className="text-amber-700 underline font-medium hover:text-amber-800"
                >
                  Used Appliance Buying Service &rarr;
                </Link>
              </div>
            </section>

            {/* Section 7: Safe and Responsible AC Disposal in Dubai */}
            <section className="section safe-disposal" id="safe-ac-disposal">
              <h2 className="section-title">
                Safe and Responsible AC Disposal in Dubai
              </h2>
              <p>
                Old air conditioners contain refrigerant gases like R22 and R32.
                If they&apos;re removed incorrectly, those gases cause
                environmental damage. Our team handles{" "}
                <strong>proper refrigerant recovery (degassing)</strong> before
                dismantling and disposing of the unit. Metals and reusable
                components are recovered responsibly.
              </p>
              <p>
                So when you sell your old AC to us, you&apos;re not just getting
                paid — you&apos;re also getting rid of it the right way, in line
                with UAE environmental regulations.
              </p>
            </section>

            {/* Section 8: Tips to Get the Best Price for Your Used AC */}
            <section
              className="section tips-best-price"
              id="tips-to-get-best-price"
            >
              <h2 className="section-title">
                Tips to Get the Best Price for Your Used AC
              </h2>
              <p>
                If you want to get the most out of your old unit, a few simple
                things can make a difference:
              </p>
              <ol className="steps">
                <li>
                  <strong>Give us accurate details</strong> — brand, model,
                  tonnage (1-ton, 1.5-ton, 2-ton, etc.), and age
                </li>
                <li>
                  <strong>Send clear photos</strong> — front panel, outdoor
                  unit, and the brand label sticker
                </li>
                <li>
                  <strong>Be honest about the condition</strong> — working ACs
                  are always worth more than non-working ones
                </li>
                <li>
                  <strong>Clean it before pickup</strong> — a clean,
                  well-maintained unit usually gets a better offer
                </li>
                <li>
                  <strong>Keep the remote and manual if you have them</strong> —
                  they can add a little extra value
                </li>
                <li>
                  <strong>Deal directly with a registered buyer</strong> — going
                  through middlemen means you get less than the actual market
                  price. With us, you deal directly, so you get the full value
                </li>
              </ol>
            </section>
          </article>

          <ServiceAside />
        </div>

        <Reviews />
        <FAQs Faqs={AcBuyersFaqs} />
        <CTA
          title="Contact Us — Used AC Buyers Near You"
          desc={
            <>
              <p>
                Whether you're in Dubai or anywhere else in the UAE — selling
                your old AC is straightforward. Send us a WhatsApp message with
                a few photos, and we'll take it from there. Our team replies
                within 5 to 10 minutes, seven days a week.
              </p>
            </>
          }
        />
      </main>
      <LatestsNews />
    </>
  );
};

export default UsedAcBuyersInDubai;
