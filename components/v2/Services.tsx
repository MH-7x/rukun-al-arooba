import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const servicesList: {
  title: string;
  desc: React.ReactNode;
  list: string[];
  src: string;
  link: string;
}[] = [
  {
    title: "Home Appliance & Electronics",
    desc: (
      <>
        <p>
          Beyond furniture, we&lsquo;re trusted{" "}
          <Link href={"/used-home-appliances-dubai"}>
            used appliance buyers and sellers in Sharjah & Dubai
          </Link>
          .
        </p>
        <p>
          Every electronic item is thoroughly tested, certified for safety, and
          comes with our standard warranty for your peace of mind.
        </p>
        <p>
          We Serve All Major Areas in Sharjah Including Al Qasimia, Al Nahda, Al
          Ramtha, Al Khan, Al Mina, and Al Muharraq. Also Serving Dubai and the
          UAE.
        </p>
      </>
    ),
    list: [
      "Washing machines and dryers",
      "Air conditioners (split & window)",
      "Television sets (LED/Smart)",
      "Kitchen appliances",
      "Home electronics",
    ],
    src: "/appliances.svg",
    link: "/used-home-appliances-dubai",
  },
  {
    title: "Living Room Furniture",
    desc: (
      <>
        <p>
          Transform your living space with our premium collection of used sofa
          sets in Sharjah.
        </p>
        <p>
          From classic Arabic majlis sets to modern L-shaped sectionals, our
          living room furniture combines style with affordability.
        </p>
        <p>
          Each sofa undergoes deep cleaning and reupholstering when needed,
          ensuring you get furniture that&lsquo;s both beautiful and hygienic.
        </p>
      </>
    ),
    list: [
      "Leather and fabric sofa sets",
      "Coffee tables and center tables",
      "TV units and entertainment centers",
      "Display cabinets and shelving units",
      "Recliners and accent chairs",
    ],
    src: "/living-room-furniture.svg",
    link: "#",
  },
  //bedrom
  {
    title: "Outdoor & Garden Furniture",
    desc: (
      <>
        <p>
          Enjoy Sharjah&lsquo;s beautiful weather with our weather-resistant
          outdoor furniture collection.
        </p>
        <p>
          Each piece is treated for UV protection and restored to withstand the
          UAE climate, perfect for balconies, gardens, and patios.
        </p>
      </>
    ),
    list: [
      "Patio dining sets",
      "Garden benches and swings",
      "Outdoor sofas and loungers",
      "Umbrellas and shade solutions",
      "BBQ tables and accessories",
    ],
    src: "/outdoor-furniture.svg",
    link: "/",
  },
  {
    title: "Kitchen & Dinning",
    desc: (
      <>
        <p>
          Upgrade your kitchen and dining area with our selection of used home
          appliances in Sharjah and dining furniture.
        </p>
        <p>
          From family-sized dining sets to space-saving kitchen solutions, we
          have everything to make your meals more enjoyable.
        </p>
      </>
    ),
    list: [
      "Dining tables (4-12 seaters)",
      "Kitchen cabinets and pantries",
      "Used refrigerators (tested & certified)",
      "Microwave ovens and cooking ranges",
      "Kitchen islands and bar stools",
    ],
    src: "/kitchen-furniture.svg",
    link: "#",
  },
  {
    title: "Bedroom Furniture",
    desc: (
      <>
        <p>Create your dream bedroom without breaking the bank.</p>
        <p>
          Our used beds for sale include everything from single beds perfect for
          children&lsquo;s rooms to luxurious king-size sets with matching
          furniture. Every bedroom piece is sanitized and restored to ensure
          peaceful, comfortable sleep.
        </p>
        <p>
          we are also{" "}
          <Link href={"/used-beds-buyers-in-dubai"}>
            buyers of used beds in sharjah, dubai & UAE.
          </Link>
        </p>
      </>
    ),
    list: [
      "Complete bedroom sets",
      "Individual beds (all sizes)",
      "Wardrobes and closets",
      "Dressing tables and mirrors",
      "Bedside tables and chest of drawers",
    ],
    src: "/bedroom-furniture.svg",
    link: "/used-beds-for-sale",
  },
  {
    title: "Office Furniture",
    desc: (
      <>
        <p>
          As a leading used office furniture dealer in Sharjah, we specialize in
          complete office solutions.
        </p>
        <p>
          Whether you&lsquo;re setting up a home office or furnishing an entire
          corporate space, our commercial-grade furniture offers durability and
          professionalism at unbeatable prices.
        </p>
      </>
    ),
    list: [
      "Executive desks and workstations",
      "Ergonomic office chairs",
      "Conference tables and meeting chairs",
      "Filing cabinets and storage",
      "Reception furniture",
    ],
    src: "/office-furniture.svg",
    link: "/used-office-furniture-buyers-dubai",
  },
];

const Services = () => {
  return (
    <>
      <section className="px-3 md:w-11/12 w-full mx-auto mt-36">
        <div className="max-w-screen-xl mx-auto">
          <div className="grid lg:grid-cols-2 justify-center gap-6 lg:gap-12 max-lg:max-w-3xl max-lg:mx-auto ">
            <div className="">
              <h2 className="blue md:text-4xl text-3xl font-bold !leading-tight ">
                Buy Used Furniture in Sharjah <br className="md:block hidden" />{" "}
                - Extensive Collection
              </h2>
            </div>

            <div className="max-lg:text-center">
              <p className="text-slate-600 text-base leading-relaxed">
                Our intuitive platform streamlines every aspect of your business
                operations. Effortlessly manage projects, track inventory, and
                automate workflows, Connect meaningfully with customers through.
              </p>

              <div className="mt-8 flex flex-wrap gap-4 max-lg:justify-center">
                <Button size={"lg"} wtsBtn>
                  WhatsApp Us
                </Button>
                <Button size={"lg"} storeBtn variant={"secondary"}>
                  Visit Our Showroom
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full md:h-96 h-60 mt-12 md:mt-16 relative rounded-3xl overflow-hidden">
            <Image
              src="/buy-used-furniture-in-sharjah.jpg"
              alt="Buy Used Furniture in Sharjah"
              fill
              className="absolute object-cover object-bottom"
            />
          </div>
        </div>
      </section>
      <section
        className="md:w-11/12 w-full mx-auto mt-20 grid md:grid-cols-2 grid-cols-1 gap-10 md:px-0 px-3"
        id="furniture-types-we-buy-sell"
      >
        {servicesList.map((service) => (
          <div className="relative" key={service.title}>
            {/* Decorative background blob */}

            <div className="relative bg-white rounded-3xl overflow-hidden border border-slate-100">
              {/* Content */}
              <div className="md:p-8 py-8 px-5">
                <div className="flex md:items-center md:flex-row flex-col gap-4 mb-6">
                  <div className="md:w-14 w-12 md:h-14 h-12 rounded-2xl flex items-center justify-center pri relative">
                    <Image
                      src={service.src}
                      alt={service.title}
                      fill
                      className="object-contain absolute"
                    />
                  </div>

                  <Link href={service.link}>
                    <h3 className="font-bold md:text-2xl text-xl blue ">
                      {service.title}
                    </h3>
                  </Link>
                </div>

                <div className="text-slate-600 mb-8 text-sm leading-relaxed flex gap-y-1 flex-col">
                  {service.desc}
                </div>

                <div className="space-y-4 mb-8 bg-slate-50 p-5 rounded-2xl">
                  <ul className="space-y-3">
                    {service.list.map((item, index) => (
                      <BenefitItem key={index} text={item} />
                    ))}
                  </ul>
                </div>

                <Link href={service.link} target="_blank">
                  <button className="max-w-sm cursor-pointer py-3.5 px-6 rounded-xl bg-[#FFF8DF] blue font-medium text-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                    <span>{`Contact For ${service.title}`}</span>
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
};

export default Services;

export const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-slate-600">
    <div className="mt-1 min-w-5 h-5 rounded-full bg-[#FFF8DF] flex items-center justify-center">
      <div className="w-2 h-2 rounded-full pri-bg" />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </li>
);
