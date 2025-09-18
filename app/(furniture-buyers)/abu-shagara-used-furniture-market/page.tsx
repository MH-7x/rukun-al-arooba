import CTA from "@/components/base/CTA";
import { Button } from "@/components/ui/button";
import MetadataTemplate from "@/lib/MetaDataTemplate";
import { Phone, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = MetadataTemplate({
  data: {
    meta: {
      title: "Abu Shagara Used Furniture Market - Best Deals in Sharjah",
      desc: "Discover the best Abu Shagara used furniture market deals in Sharjah. Visit Rukun Al Arooba on Al Estiqlal Street for quality pre-owned furniture, home appliances & more. ✓ Best Prices ✓ Warranty ✓ Same-Day Service",
    },
    image: {
      path: "/abu-shagara-used-furniture-market.jpg",
      alt: "rukun al arooba used furniture in sharjah",
    },
    path: "/abu-shagara-used-furniture-market",
  },
});

const AbuShagaraPage = () => {
  return (
    <main className="overflow-hidden">
      <section className="grid-wrapper w-full flex items-center justify-center flex-col py-16 md:px-0 px-3">
        <div className="grid-background" />
        <h1 className="md:text-4xl/tight text-3xl blue font-bold text-center">
          <span className="headline border-b-4 border-[#ffdb5e]">
            {" "}
            Abu Shagara Used Furniture Market
          </span>
          <br className="md:block" />- Rukun Al Arooba Used Furniture
        </h1>
        <div className="max-w-3xl mx-auto text-center text mt-5">
          <p>
            Welcome to Abu Shagara used furniture market in Sharjah. For over 20
            years, Rukun Al Arooba Used Furniture has been helping customers
            find quality pre-owned furniture they can trust.
          </p>
          <p className="mt-1">
            Our showroom is on Al Estiqlal Street in Bu Shaghara, Hay Al
            Qasimiah district. People know us for our reliability and our
            commitment to offering great used furniture
          </p>
        </div>
        <div className="flex gap-x-4 mt-5">
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
          <Button variant={"secondary"}>
            <Store /> Visit To Showroom{" "}
          </Button>
        </div>
      </section>
      <section className="mt-36 md:w-11/12 mx-auto grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:ml-32 overflow-hidden md:px-0 px-3">
        <div>
          <h2 className="headline  md:text-4xl/tight text-3xl/tight font-bold">
            <span className="border-b-4 border-[#ffdb5e]">
              Why Abu Shagara is Sharjah&apos;s
            </span>{" "}
            <span className="md:block blue">Premier Used Furniture Hub</span>
          </h2>
          <p className="mt-3 text">
            Abu Shagara has been a key place for furniture trading in Sharjah
            for many years, attracting buyers from all seven emirates.
          </p>
          <p className="mt-1 text">
            This area has a long history in furniture trading. Over the years,
            businesses like ours have earned the trust of many customers
          </p>
          <p className="mt-1 text">
            At the Abu Shagara used furniture market, you often find prices that
            are 50-70% lower than retail stores, but the quality remains high.
          </p>

          <Button wtsBtn size={"lg"} className="mt-5">
            Contact Us Now
          </Button>
        </div>
        <div className="mx-auto md:mt-16 w-full ">
          <div className="md:h-[430px] h-96 md:w-96 w-full relative">
            <Image
              src={"/abu-shagara-used-furniture-market.jpg"}
              alt="Abu Shagara Used Furniture Market"
              fill
              className="object-cover rounded-2xl"
            />
            <div className="md:absolute w-full h-full pri-bg -z-10 top-5 md:-top-12 md:-right-12 -right-5 rounded-2xl" />
          </div>
        </div>
      </section>
      <section className="md:px-0 px-3 mt-36 max-w-4xl mx-auto border-b-4 pb-5">
        <h3 className="md:text-4xl text-3xl headline  font-bold">
          About Rukun Al Arooba — Trusted used furniture dealer in Abu Shagara
        </h3>
        <p className="mt-7 text">
          Rukun Al Arooba Used Furniture is a family-run business with over 20
          years of hands-on experience in Sharjah’s second-hand market and has
          been officially registered in trade since 2018.
        </p>
        <p className="mt-3 text">
          Our physical store on Al Estiqlal Street makes it easy to inspect
          items in person; our expert team inspects, repairs, and polishes every
          piece before it goes on display. When you buy from us, you get:
        </p>

        <ul className="mt-5 list-disc ml-5 text">
          <li>
            Professionally refurbished furniture that looks and performs like
            new.
          </li>
          <li>A transparent warranty and return policy.</li>
          <li>Multiple payment methods (cash, bank deposit, check).</li>
          <li>
            Optional pickup & delivery via our partner, Abu Muhammad Movers.
          </li>
        </ul>
      </section>
      <section
        id="What-type-furniture-we-buy"
        className="md:w-11/12 w-full mx-auto mt-36 grid md:grid-cols-2 grid-cols-1 gap-10 items-center md:px-0 px-3"
      >
        <div>
          <Link
            href={"/used-furniture-buyers-in-sharjah#types-of-furniture-we-buy"}
          >
            <h3 className="headline md:text-4xl/tight text-3xl/tight font-bold">
              <span className="border-b-4 border-[#ffdb5e]">
                Complete Range of Products
              </span>{" "}
              <span className="block blue"> at Our Abu Shagara Store</span>
            </h3>
          </Link>
          <p className="mt-5 text">
            At Rukun Al Arooba, we buy and sell a wide range of items, all
            stocked and displayed at our Abu Shagara location:
          </p>
          <ul className="mt-5 ml-5 list-disc">
            <li className="text">
              <span className="font-medium">Used sofa sets</span> — formal,
              sectional, and lounge sofas
            </li>
            <li className="text">
              <span className="font-medium">Used beds & bedroom sets</span> —
              frames, mattresses, wardrobes
            </li>
            <li className="text">
              <span className="font-medium">Dining tables & chairs</span> —
              modern and classic sets
            </li>
            <li className="text">
              <span className="font-medium">Kitchen cabinets & appliances</span>{" "}
              — fridges, washers, ovens
            </li>
            <li className="text">
              <span className="font-medium">Office furniture</span>— desks,
              chairs, storage solutions
            </li>
            <li className="text">
              <span className="font-medium">
                Outdoor furniture & accessories
              </span>
            </li>
            <li className="text">
              <span className="font-medium">
                Used electronics and home appliances
              </span>
            </li>
          </ul>
        </div>
        <div className="h-96 relative rounded-2xl w-full ">
          <Image
            src={"/furniture-buyers-in-abu-shagara.jpg"}
            alt="Furniture Buyers in Abu Shagara"
            fill
            className="object-cover rounded-2xl"
          />
          <div className="absolute md:w-[70%] w-11/12 -bottom-0 left-0 right-0 mx-auto bg-white p-5 drop-shadow-2xl rounded-2xl md:h-20">
            <div className="flex md:flex-row flex-col md:gap-y-0 gap-y-3 items-center md:justify-center justify-between w-full gap-x-5">
              <div className="text-[#353535]">
                <p className=" gap-x-1 font-medium flex items-center">
                  <Phone className="md:size-[18px] size-[15px]" />{" "}
                  <span>Phone No.</span>
                </p>
                <p className=" mt-0.5">(055) 6461731</p>
              </div>
              <span className="w-0.5 h-10 bg-gray-300 md:block hidden"></span>
              <div className="flex gap-x-2">
                <Button wtsBtn size={"sm"} className="">
                  WhatsApp Us
                </Button>
                <Button callBtn variant={"secondary"} className="" size={"sm"}>
                  Call Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="max-w-4xl md:h-96 h-80  mx-auto mt-36 relative overflow-hidden md:rounded-2xl">
        <Image
          src={"/main-store-image.jpg"}
          alt="Rukun Al Arooba Used Furniture Store in Sharjah"
          fill
          className="object-cover"
        />
      </div>
      <section className="md:w-11/12 w-full mx-auto mt-36 md:px-0 px-3">
        <div className="grid md:grid-cols-2 grid-cols-1 md:gap-y-0 gap-y-5">
          <h2 className="headline md:text-4xl/tight text-3xl/tight font-bold">
            <span className="border-b-4 border-[#ffdb5e]">
              Comprehensive Services
            </span>{" "}
            <span className="md:block blue"> We Offer in Sharjah</span>
          </h2>
          <div>
            <p className="text">
              In a market where many buyers try to undervalue your furniture, we
              stand out through transparency and fairness. Here&lsquo;s why
              thousands of Sharjah residents trust us when they need to{" "}
              <Link href={"/used-furniture-buyers-in-sharjah"}>
                sell furniture for cash
              </Link>
              :
            </p>
            <Link href={"/about-us"}>
              {" "}
              <Button className="mt-3">About Us</Button>
            </Link>
          </div>
        </div>
        <div className="w-full py-16 md:px-12 bg-white mt-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2  overflow-hidden">
            {[
              {
                title: "Selling Your Furniture? We Offer the Best Prices",
                description: (
                  <>
                    <p>
                      If you&apos;re looking to sell furniture in Abu Shagara,
                      our streamlined process makes it incredibly simple.
                    </p>
                    <p>
                      Just contact us via WhatsApp with photos of your items,
                      and within minutes, you&apos;ll receive a competitive
                      quote based on current market values and condition.
                    </p>
                    <p>
                      We offer immediate cash payment and free pickup service,
                      eliminating the hassle typically associated with selling
                      used furniture.
                    </p>
                    <p>
                      Our fair pricing policy has earned us a reputation as the
                      most trusted buyer in the area.
                    </p>
                  </>
                ),
              },
              {
                title: "Buying Quality Pre-Owned Furniture",
                description: (
                  <>
                    <p>
                      When purchasing from our Abu Shagara used furniture market
                      store, you benefit from multiple advantages that set us
                      apart.
                    </p>
                    <p>
                      Every item comes with a warranty – a rarity in the used
                      furniture market. We offer flexible payment options,
                      including cash, online transfers, and bank checks,
                      accommodating your preferred payment method.
                    </p>
                    <p>
                      Our easy return policy ensures your complete satisfaction;
                      if any piece doesn&apos;t meet your expectations,
                      we&apos;ll gladly accept returns, demonstrating our
                      confidence in our quality standards.
                    </p>
                  </>
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-start justify-start border-l-2 border-[#c07d53] md:p-8 p-5 hover:bg-[#c07d5318] transition"
              >
                <h3 className="text-lg font-semibold headline mb-2">
                  {feature.title}
                </h3>
                <div className="text-sm text leading-relaxed">
                  {feature.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CTA
        title="Visit Rukun Al Arooba at Abu Shagara Used Furniture Market Today"
        desc={
          <>
            <p>
              Experience the difference of shopping with a trusted, established
              company in the Abu Shagara used furniture market.
            </p>
            <p>
              Our showroom on Al Estiqlal Street is open six days a week, ready
              to serve you with the finest selection of quality used furniture
              in Sharjah.
            </p>
            <p>
              Whether you&apos;re buying or selling, our team of experts is
              committed to providing exceptional service that exceeds your
              expectations.
            </p>
          </>
        }
      />
    </main>
  );
};

export default AbuShagaraPage;
