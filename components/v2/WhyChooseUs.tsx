const WhyChooseUs = () => {
  return (
    <section
      id="why-choose-us"
      className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3 "
    >
      <h2 className="blue md:text-4xl/tight text-3xl/tight font-bold ">
        <span className="border-b-4 border-[#ffdb5e]">
          Why Choose Rukun Al Arooba For
        </span>{" "}
        <span className="md:block blue"> Used Furniture in Sharjah!</span>
      </h2>
      <p className="mt-3 text max-w-3xl ">
        In a market flooded with anonymous online sellers and unregistered
        dealers,{" "}
        <Link className="border-b border-[#ffdb5e]" href={"#"}>
          finding trustworthy used furniture shops in Sharjah
        </Link>{" "}
        can be challenging.
      </p>
      <p className="mt-1 text max-w-4xl ">
        Here&lsquo;s what sets us apart from every other furniture dealer in the
        UAE:
      </p>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-y-0 gap-y-10 mt-20 md:px-20">
        <div id="register-company">
          <h3 className="md:text-3xl text-xl font-medium headline">
            Officially Registered Business <br /> with Physical Showroom
          </h3>
          <p className="mt-3 text md:text-base text-[15px] ">
            We&lsquo;re not hiding behind a website or WhatsApp number. Rukun Al
            Arooba has been an officially registered company with the UAE
            government since 2018, with our trade license prominently displayed
            in our showroom.
          </p>
          <p className="text md:text-base text-[15px] mt-2">
            Visit us at Al Estiqlal Street, Bu Shaghara, Hay Al Qasimiah, where
            you can browse our extensive collection in person.
          </p>
          <details className="group  rounded-lg mt-5 ">
            <summary className="pri underline flex justify-start items-center cursor-pointer  font-medium ">
              read more <ArrowDown size={15} />
            </summary>
            <p className="mt-3 text md:text-base text-[15px] ">
              This level of transparency is uncommon among furniture dealers in
              Sharjah. Many do not have proper registration or a physical
              location, and often just pass customer details to others.
            </p>
            <p className="text md:text-base text-[15px] mt-2">
              Our used furniture store in Sharjah is open seven days a week,
              welcoming customers who prefer to see and touch furniture before
              making a decision.
            </p>
            <p className="text md:text-base text-[15px] mt-2">
              Having a physical location means you can count on us to be here
              now and in the future. We&lsquo;re not a pop-up online dealer that
              could vanish at any time.
            </p>
          </details>
        </div>
        <div className="md:ml-20">
          <div className="md:w-96 w-full md:h-96 h-80 bg-[#FFF8DF] rounded-3xl" />
          <div className="md:w-96 w-11/12 md:h-96 h-80 md:-mt-80 -mt-72 ml-[8.44%] md:ml-16 rounded-3xl relative overflow-hidden">
            <Image
              src={"/storefront-image.jpg"}
              alt="Rukun Al Arroba Used Furniture Store in Sharjah Outer View"
              fill
              className="object-cover object-center "
            />
          </div>
        </div>
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 items-center md:gap-y-0 gap-y-10 mt-10 md:px-20">
        <div className="md:order-1 order-2">
          <div className="md:w-96 w-full md:h-96 h-80 bg-[#E5EDED] rounded-3xl" />
          <div className="md:w-96 w-11/12 md:h-96 h-80 md:-mt-80 -mt-72 ml-[8.44%] md:ml-16 rounded-3xl relative overflow-hidden">
            <Image
              src={"/response-time-2.jpg"}
              alt="5-to-10 Minute Response Guarantee"
              fill
              className="object-cover object-center "
            />
          </div>
        </div>
        <div id="5-min-response-time " className="md:order-2 order-1">
          <h3 className="md:text-3xl text-xl font-medium headline">
            5 To 10 Minute Response <br /> Guarantee From Us
          </h3>
          <p className="mt-3 text md:text-base text-[15px] ">
            Time is valuable, especially when you need to sell used furniture in
            Sharjah quickly. While other dealers might take hours or days to
            respond, we guarantee a response within 5-10 minutes through
            WhatsApp or our website.
          </p>
          <p className="text md:text-base text-[15px] mt-3">
            Our dedicated valuation team works around the clock to provide
            instant, fair market prices for your furniture.
          </p>
          <details className="group  rounded-lg mt-5 ">
            <summary className="pri underline flex justify-start items-center cursor-pointer  font-medium ">
              read more <ArrowDown size={15} />
            </summary>
            <p className="mt-3 text md:text-base text-[15px] ">
              Our quick response system is not only fast, but also shows that we
              value your time.
            </p>
            <p className="text md:text-base text-[15px] mt-3">
              Whether you&lsquo;re moving tomorrow or planning ahead, our
              same-day service for Sharjah residents means you can sell your
              furniture and receive cash payment within hours, not days.
            </p>
          </details>
        </div>
      </div>

      <QualityRestorationCard />
      <PaymentAndDelivery />
    </section>
  );
};

export default WhyChooseUs;

function PaymentAndDelivery() {
  return (
    <div className="mt-36 w-full ">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold blue mb-6 tracking-tight">
            Flexible Payment & Delivery Options
          </h2>
          <p className="text text leading-relaxed">
            While most furniture dealers in the UAE operate on a cash-only
            basis, we understand modern customers need options. Experience
            hassle-free transactions and professional handling.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Payment Options (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <PaymentOption
                icon={Banknote}
                title="Cash Payments"
                description="Instant processing. The traditional, reliable choice for quick on-the-spot transactions."
              />
              <PaymentOption
                icon={Landmark}
                title="Online Transfers"
                description="Direct bank-to-bank transfers for a seamless and paperless payment experience."
              />
              <PaymentOption
                icon={FileCheck}
                title="Certified Checks"
                description="We accept certified bank checks for larger purchases, ensuring security for both parties."
              />
              <PaymentOption
                icon={Smartphone}
                title="Digital Wallets"
                description="Modern convenience at your fingertips. Pay quickly using your preferred digital wallet apps."
              />
            </div>

            {/* Trust Badge / Footer note */}
            <div className="mt-10 p-4 bg-[#E5EDED] rounded-xl flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg blue">
                <ShieldCheck size={20} />
              </div>
              <p className="text-sm blue font-medium">
                All transactions are secured and accompanied by official
                receipts for warranty claims.
              </p>
            </div>
          </div>

          {/* Right Column: Delivery Service (5 cols) */}
          <div className="lg:col-span-5 relative md:mt-0 mt-10">
            <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100">
              {/* Card Header Image/Gradient */}
              <div className="h-28 bg-gradient-to-br from-[#144e5a] to-[#207a8c] relative p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-white z-10">
                  Logistics Partner
                </h3>
                <p className="text-indigo-100 z-10 text-sm font-medium flex items-center gap-1 mt-1">
                  Exclusive Partnership <ChevronRight size={14} />
                </p>
              </div>

              {/* Content */}
              <div className="md:p-8 py-8 px-5">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-[#FFF8DF] rounded-2xl flex items-center justify-center pri ">
                    <Truck size={28} />
                  </div>
                  <div>
                    <h4 className="font-medium blue md:text-lg">
                      Abu Muhammad Movers
                    </h4>
                    <p className="text-sm text-slate-500">
                      Professional Pickup & Delivery
                    </p>
                  </div>
                </div>

                <p className="text-slate-600 mb-8 text-sm leading-relaxed">
                  Through our exclusive partnership, we offer professional
                  logistics at the best rates in Sharjah. Eliminate the stress
                  of third-party hiring.
                </p>

                <div className="space-y-4 mb-8 bg-slate-50 md:p-5 py-5 px-3 rounded-2xl">
                  <ul className="space-y-3">
                    <BenefitItem text="Furniture handled with care" />
                    <BenefitItem text="Avoid high individual moving costs" />
                    <BenefitItem text="Single contact for whole process" />
                  </ul>
                </div>

                <Link
                  href={"https://abumuhammadmovers.com/"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full py-3.5 px-6 rounded-xl pri-bg text-white font-medium shadow-lg shadow-[#FFF8DF] transition-all active:scale-[0.98] flex items-center justify-center gap-2 group">
                    <span>Schedule Delivery</span>
                    <ChevronRight
                      size={18}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function QualityRestorationCard({
  title = "Quality Restoration Process",
  subtitle = "Here‘s what most second hand furniture dealers won‘t tell you:",
  description = "They buy furniture and resell it exactly as-is, with all its scratches, stains, and wobbles. At Rukun Al Arooba, every piece undergoes our comprehensive restoration process:",
  steps = defaultSteps,
  imageUrl = "/restoration-process-of-furniture.jpg",
}: QualityRestorationCardProps) {
  return (
    <div
      className="group w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 mt-36"
      aria-labelledby="qrp-heading"
    >
      {/* Left visual */}
      <div className="relative flex items-center justify-center  rounded-xl md:order-1 order-2">
        <img
          src={imageUrl}
          alt="Restored furniture example"
          className="w-full h-80 md:h-full object-cover rounded-lg shadow-inner"
        />
        <div className="bg-white/80 backdrop-blur-sm  rounded-2xl overflow-hidden absolute flex justify-center items-center  gap-4 md:w-[80%] w-[95%] p-5 md:bottom-7 -bottom-16">
          <div className="text-center">
            {" "}
            <h3 className="text-lg md:text-xl font-medium">Like‑new care</h3>
            <p className="text-sm text max-w-sm mt-1">
              Before anything goes to the showroom it goes through inspection,
              repair, cleaning and finishing — so you get confidence with every
              purchase.
            </p>
          </div>
        </div>
      </div>

      {/* Right content */}
      <div className="flex flex-col justify-between md:order-2 order-1">
        <div>
          <p className="text-sm text md:text-start text-center font-medium">
            {subtitle}
          </p>
          <h2
            id="qrp-heading"
            className="mt-4 text-3xl md:text-4xl font-extrabold blue text-center md:text-left"
          >
            {title}
          </h2>
          <p className="mt-4 text-[15px]  text-slate-600">{description}</p>
        </div>

        <ul className="mt-6 space-y-4">
          {steps.map((s) => {
            const Icon = s.Icon;
            return (
              <li key={s.id} className="flex gap-4 items-start">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF8DF]  flex items-center justify-center ring-1 ring-[#ffdb5e]/60 ">
                    {Icon ? (
                      <Icon className="w-5 h-5 pri" />
                    ) : (
                      <CheckCircle className="w-5 h-5 pri" />
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-medium text-slate-900 ">{s.title}</h3>
                  {s.desc && (
                    <p className="text-sm text-slate-600 ">{s.desc}</p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-8 flex items-center gap-4">
          <Button storeBtn size={"lg"}>
            See Restored Pieces
          </Button>
          <span className="text-xs text-slate-600 ">
            Quality Certification guaranteed
          </span>
        </div>
      </div>
    </div>
  );
}

const PaymentOption = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}) => (
  <div className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#FFF8DF] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
    <div className="absolute top-0 left-0 w-1.5 h-full blue-bg rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-[#FFF8DF] pri group-hover:bg-blue transition-colors duration-300">
        <Icon size={24} strokeWidth={1.5} />
      </div>
      <div>
        <h3 className="font-medium blue mb-1">{title}</h3>
        <p className="text-sm text-slate-500 ">{description}</p>
      </div>
    </div>
  </div>
);

type Step = {
  id: string;
  title: string;
  desc?: string;
  Icon?: React.ComponentType<any>;
};

interface QualityRestorationCardProps {
  title?: string;
  subtitle?: string;
  description?: string;
  steps?: Step[];
  imageUrl?: string;
  ctaText?: string;
  ctaHref?: string;
}

const defaultSteps: Step[] = [
  {
    id: "inspection",
    title: "Detailed Inspection",
    desc: "Each item is thoroughly examined for structural integrity and repair needs.",
    Icon: CheckCircle,
  },
  {
    id: "repairs",
    title: "Professional Repairs",
    desc: "Skilled craftsmen fix loose joints, replace worn hardware and address damage.",
    Icon: Hammer,
  },
  {
    id: "cleaning",
    title: "Deep Cleaning",
    desc: "Specialized cleaning removes years of accumulated dirt and stains.",
    Icon: Droplet,
  },
  {
    id: "finishing",
    title: "Polishing & Refinishing",
    desc: "Wood receives professional polishing while upholstery is steam-cleaned.",
    Icon: Star,
  },
];

const BenefitItem = ({ text }: { text: string }) => (
  <li className="flex items-start gap-3 text-slate-600">
    <div className="mt-1 min-w-5 h-5 rounded-full bg-[#FFF8DF] flex items-center justify-center">
      <div className="w-2 h-2 rounded-full pri-bg" />
    </div>
    <span className="text-sm font-medium">{text}</span>
  </li>
);

import { ArrowDown } from "lucide-react";
import {
  Banknote,
  Landmark,
  FileCheck,
  Smartphone,
  Truck,
  ChevronRight,
  ShieldCheck,
  CheckCircle,
  Droplet,
  Hammer,
  Star,
} from "lucide-react";

import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
