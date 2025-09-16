import ServiceAside from "@/components/base/ServiceAside";
import ServiceHero from "@/components/base/ServiceHero";
import React from "react";
import "../styling.css";
import Image from "next/image";
import MetadataTemplate from "@/lib/MetaDataTemplate";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Used Home Appliances Dubai — Buy & Sell | Rukun Al Arooba",
      desc: "Buy and sell quality used home appliances Dubai. Fast pickup, warranty, inspection & multiple payments. Visit our Sharjah store or contact via WhatsApp.",
    },
    image: {
      path: "/service/used-home-appliances-dubai.jpg",
      alt: "rukun al arooba used home appliances dubai",
    },
    path: "/used-home-appliances-dubai",
  },
});

const page = () => {
  return (
    <main className="service-page">
      <ServiceHero
        title={{
          one: "Used Home Appliances Dubai",
          two: "Buy and Sell  Pre-Owned Appliances",
        }}
        img={{
          src: "/service/used-home-appliances-dubai.jpg",
          alt: "Used Home Appliances Dubai",
        }}
        desc="At Rukun Al Arooba, we buy and sell high-quality used home appliances Dubai residents trust. Established in 2018 with over 20 years’ experience in the UAE appliance market, we inspect, refurbish, and warranty every item so you get value without risk. Need quick pickup or an instant quote? Message us on WhatsApp or call—responses in 5–10 minutes."
      />
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 min-h-[500px] mt-20 md:w-11/12 mx-auto">
        <article className="md:col-span-2 col-span-1 md:order-2 order-1 service-article">
          <section className="section why-choose">
            <h2 className="section-title">
              Why Choose Rukun Al Arooba for Used Home Appliances in Dubai
            </h2>
            <p className="lead">
              Choosing where to buy or sell{" "}
              <strong>used home appliances Dubai</strong> matters. Rukun Al
              Arooba is a registered company with a physical store on Al
              Estiqlal Street, Bu Shaghara, Sharjah, backed by two decades of
              experience. We provide a fast, transparent service for sellers and
              reliable refurbished appliances for buyers.
            </p>

            <ul className="feature-list">
              <li>
                Fast, friendly quotes via WhatsApp and phone (5–10 minute
                response).
              </li>
              <li>
                Thorough inspection and professional refurbishment for every
                item.
              </li>
              <li>
                Multiple payment options: cash, bank transfer, online deposit,
                or cheque.
              </li>
              <li>
                Partnered delivery and pickup through{" "}
                <strong>Abu Muhammad Movers</strong> at competitive rates.
              </li>
              <li>
                Short warranty and straightforward returns on refurbished items
                — buy with confidence.
              </li>
            </ul>
          </section>
          <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5 relative bg-gray-200 rounded-2xl overflow-hidden">
            <Image
              src="/service/used-home-appliances.jpg"
              alt="Used Home Appliances Buyers in Dubai"
              fill
              className="object-cover"
            />
          </div>
          <section className="section types">
            <h2 className="section-title">
              What Types of Used Home Appliances Do We Buy & Sell
            </h2>
            <p>
              At Rukun Al Arooba we buy and sell a wide selection of{" "}
              <strong>used home appliances Dubai</strong> residents trust — from
              large white goods to small kitchen gadgets. Below is a detailed
              breakdown of each appliance category, the checks we perform when
              buying, what we offer when selling, suggested SEO phrases and
              image alt text recommendations.
            </p>

            {/* Refrigerator */}
            <div className="appliance-card" id="refrigerators">
              <h3 className="appliance-title">
                Used Refrigerators — Buy & Sell (Used Refrigerators Dubai)
              </h3>
              <p>
                We accept all common refrigerator types: single-door,
                double-door, top freezer, bottom freezer, side-by-side and
                French-door models. Each unit is tested for cooling performance,
                compressor health, thermostat accuracy, door seals, and internal
                odors. We also check for significant dents, rust, and water-leak
                issues.
              </p>

              <h4 className="small-title">What we look for when buying</h4>
              <ul className="checklist">
                <li>
                  Brand &amp; model (popular brands: LG, Samsung, Bosch,
                  Whirlpool, Panasonic).
                </li>
                <li>Cooling performance (holds a steady temperature).</li>
                <li>Compressor and refrigerant status (no strange noises).</li>
                <li>Door seal (magnetic gasket intact).</li>
                <li>Interior cleanliness (no mold or persistent odor).</li>
              </ul>

              <h4 className="small-title">What buyers get</h4>
              <ul className="checklist">
                <li>
                  Refurbished units with cleaned interiors, new seals where
                  needed, and a short warranty.
                </li>
                <li>
                  Clear listing details: condition, refurbished parts, and
                  expected energy efficiency.
                </li>
              </ul>
              <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/used-regrigerator.jpg"}
                    alt="Used Refrigerator buyers in dubai"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/second-hand-refrigerator.jpg"}
                    alt="Second Hand Refrigerator buyers in dubai"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="alt">
                <em>
                  used refrigerators dubai - refurbished double door fridge
                </em>
              </p>
            </div>

            {/* Washing Machines */}
            <div className="appliance-card" id="washing-machines">
              <h3 className="appliance-title">
                Used Washing Machines — Top-load & Front-load
              </h3>
              <p>
                We buy and sell both top-load and front-load washing machines.
                Inspections focus on motor health, spin balance, drum integrity,
                water inlet and drainage, and electronic controls.
              </p>

              <h4 className="small-title">Buy checklist</h4>
              <ul className="checklist">
                <li>Spin cycle performance (no wobble).</li>
                <li>Drum condition (no cracks or excessive rust).</li>
                <li>Water inlet valves and drain pump checked.</li>
                <li>Electronics/digital panel working properly.</li>
              </ul>
              <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/used-washing-machines.jpg"}
                    fill
                    className="object-cover"
                    alt="Used Washing Machines Buyers"
                  />
                </div>
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/second-hand-washing-machines.jpg"}
                    fill
                    className="object-cover"
                    alt="Second Hand Washing Machines Buyers"
                  />
                </div>
              </div>
              <p className="alt">
                <em>used washing machines dubai - cleaned front load washer</em>
              </p>
            </div>

            {/* Dryers */}
            <div className="appliance-card" id="dryers">
              <h3 className="appliance-title">
                Used Dryers — Tumble & Condenser
              </h3>
              <p>
                Dryers (electric or gas) are inspected for heating element
                function, drum rotation, venting condition, and safety switches.
                Lint-flap and venting are cleaned and tested to ensure safe
                operation.
              </p>

              <h4 className="small-title">Key checks</h4>
              <ul className="checklist">
                <li>Heating element and thermostat responsiveness.</li>
                <li>Drum spin and door latch.</li>
                <li>Venting and lint trap condition.</li>
                <li>Gas line safety check for gas models.</li>
              </ul>
              <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/used-dryer.jpg"}
                    fill
                    alt="Used Dryer Buyers"
                    className={"object-cover"}
                  />
                </div>
              </div>
              <p className="alt">
                <em>used dryer dubai - tested condenser dryer</em>
              </p>
            </div>

            {/* Air Conditioners */}
            <div className="appliance-card" id="air-conditioners">
              <h3 className="appliance-title">
                Used Air Conditioners — Split, Window & Portable
              </h3>
              <p>
                We handle residential split systems, window ACs, and portable
                units. Each unit is pressure-tested, cleaned, coils inspected,
                and refrigerant levels checked by a trained technician.
              </p>

              <h4 className="small-title">Inspection highlights</h4>
              <ul className="checklist">
                <li>Cooling efficiency and airflow.</li>
                <li>Compressor noise and vibration.</li>
                <li>Coil cleanliness and refrigerant level.</li>
                <li>Electrical safety checks.</li>
              </ul>
              <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/used-air-conditioners.jpg"}
                    fill
                    alt="Used Air Conditioners Buyers"
                    className={"object-cover"}
                  />
                </div>
              </div>
              <p className="alt">
                <em>used air conditioners dubai - serviced split ac</em>
              </p>
            </div>

            {/* Ovens & Stoves */}
            <div className="appliance-card" id="ovens-stoves">
              <h3 className="appliance-title">
                Used Ovens, Stoves & Cooktops (Used Cooking Range Buyers)
              </h3>
              <p>
                Gas and electric ranges are tested for ignition, burner
                performance, oven temperature accuracy and safety. Gas
                connections are inspected and certified for safe resale.
              </p>

              <h4 className="small-title">What we check</h4>
              <ul className="checklist">
                <li>Burner flames and ignition reliability.</li>
                <li>Oven heating uniformity (bake test).</li>
                <li>Control knobs and safety valves.</li>
                <li>Gas leak inspection (for gas models).</li>
              </ul>
              <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/used-oven-stoves.jpg"}
                    fill
                    alt="Used Oven Stoves Buyers"
                    className={"object-cover"}
                  />
                </div>
              </div>
              <p className="alt">
                <em>used oven dubai - refurbished gas stove</em>
              </p>
            </div>

            {/* Small Appliances */}
            <div className="appliance-card" id="small-appliances">
              <h3 className="appliance-title">
                Small Kitchen Appliances & Electronics
              </h3>
              <p>
                Microwaves, blenders, kettles, toasters and similar small
                appliances are cleaned, tested for electrical safety, and
                repaired or replaced as needed (cords, switches, seals).
              </p>

              <h4 className="small-title">Buyer assurances</h4>
              <ul className="checklist">
                <li>
                  Electrical safety testing and functional demo (on request).
                </li>
                <li>
                  Replacement of simple worn parts (filters, seals, knobs).
                </li>
              </ul>
              <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/second-hand-kitchen-appliances.jpg"}
                    alt="Second Hand Kitchen Appliances Buyers"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="bg-gray-200 relative rounded-2xl overflow-hidden h-80">
                  <Image
                    src={"/service/used-kitchen-appliances.jpg"}
                    alt="Used Kitchen Appliances Buyers"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="alt">
                <em>
                  used kitchen appliances dubai - refurbished microwave oven
                </em>
              </p>
            </div>
          </section>

          <section className="section pricing">
            <h2 className="section-title">How We Price & What Affects Value</h2>
            <p>
              Price depends on brand, model, age, working condition, cosmetic
              state, and availability of spare parts. Popular, energy-efficient
              models fetch higher resale value. We provide honest, transparent
              offers after a photo appraisal or in-person inspection.
            </p>

            <table
              className="price-table"
              aria-label="Typical used appliance price ranges"
            >
              <thead>
                <tr>
                  <th>Appliance</th>
                  <th>Typical Used Price Range (AED)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Refrigerator</td>
                  <td>300 — 1,200</td>
                </tr>
                <tr>
                  <td>Washing Machine</td>
                  <td>250 — 900</td>
                </tr>
                <tr>
                  <td>Air Conditioner (Window/Split)</td>
                  <td>400 — 2,000</td>
                </tr>
                <tr>
                  <td>Oven / Stove</td>
                  <td>200 — 1,000</td>
                </tr>
              </tbody>
            </table>

            <p className="small-note">
              Note: Prices vary by brand, model, age and condition — use our
              quick quote tool for an accurate offer.
            </p>
          </section>

          <section className="section guarantee">
            <h2 className="section-title">
              Our Inspection, Refurbishment & Quality Guarantee
            </h2>
            <ol className="steps">
              <li>Visual inspection for dents, rust, and cosmetic issues.</li>
              <li>Functional tests (power, cycles, temperature, airflow).</li>
              <li>Deep cleaning and sanitization.</li>
              <li>
                Replacement of consumable parts (seals, filters, knobs) when
                needed.
              </li>
              <li>
                Final performance check, packaging and labeling with
                refurbishment notes.
              </li>
            </ol>

            <p>
              Every refurbished appliance includes a short warranty and a clear
              return policy so customers across Dubai can purchase with peace of
              mind.
            </p>
          </section>
          <div className="my-10 grid md:grid-cols-2 w-full grid-cols-1 gap-5 relative bg-gray-200 rounded-2xl overflow-hidden">
            <Image
              src={"/service/Inspection-Refurbishment-Quality-Guarantee.jpg"}
              alt="Our Inspection, Refurbishment and Quality Guarantee Process"
              fill
              className="object-cover"
            />
          </div>
          <section className="section sell">
            <h2 className="section-title">
              How to Sell Your Used Appliance — Fast Pickup Across Dubai
            </h2>
            <ol className="steps">
              <li>
                Send clear photos, brand, model, and an age estimate via
                WhatsApp or our online sales form.
              </li>
              <li>
                Receive a free instant estimate for your used appliance in
                Dubai.
              </li>
              <li>Schedule pickup or bring the item to our Sharjah store.</li>
              <li>Get paid on the spot via cash or bank transfer.</li>
            </ol>

            <div className="whatsapp-template">
              <h4 className="small-title">WhatsApp template (copy/paste)</h4>
              <code>
                Hello, I want to sell a [brand + model] — [short condition
                note]. Photos attached. Location: [area in Dubai].
              </code>
            </div>
          </section>

          <section className="section buy-confidence">
            <h2 className="section-title">
              Buy With Confidence — Visit Our Store or Order Delivery in Dubai
            </h2>
            <p>
              Browse our in-store selection on Al Estiqlal Street or view
              available items online. Every listing shows condition,
              refurbishment notes, warranty period, and price. We arrange
              delivery across Dubai through trusted movers for safe, affordable
              transport of bulky items.
            </p>
          </section>

          <section className="section checklist">
            <h2 className="section-title">
              Buyer&lsquo;s Checklist — How to Choose a Used Home Appliance in
              Dubai
            </h2>
            <ul className="checklist">
              <li>Verify brand, model, and serial number.</li>
              <li>Test the appliance or request a video demo.</li>
              <li>Inspect for water damage, rust, or unpleasant odors.</li>
              <li>Confirm included parts, remotes, and cables.</li>
              <li>Ask for refurbishment details and warranty length.</li>
            </ul>
          </section>

          <section className="section service-area">
            <h2 className="section-title">
              Serving Dubai, Sharjah, Ajman & the UAE
            </h2>
            <p>
              We provide pickup and delivery across Dubai and neighboring
              emirates. We maintain local pickup zones with competitive rates
              and quick response times for frequently serviced neighborhoods.
              Use local search phrases like{" "}
              <span className="keyword">used appliances Ajman</span> or{" "}
              <span className="keyword">used appliances Sharjah</span> to find
              the nearest service options.
            </p>
          </section>
        </article>

        <ServiceAside />
      </div>
    </main>
  );
};

export default page;
