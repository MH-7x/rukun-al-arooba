import Image from "next/image";
import Link from "next/link";

function BuySellSection() {
  return (
    <section
      id="buy-and-sell-furniture"
      className="max-w-5xl mx-auto mt-24 grid md:grid-cols-2 grid-cols-1 md:gap-16 gap-10 md:px-0 px-3"
    >
      <div className="bg-[#FFF8DF] rounded-3xl md:py-12 pt-7 pb-3 md:px-14 px-6">
        <h3 className="font-medium blue md:text-3xl/8 text-xl mb-3">
          I Want To Buy Used Furniture
        </h3>
        <Link
          className="text-muted-foreground underline underline-offset-1"
          rel="noreferrer"
          href={
            "https://wa.me/+971556461731?text=I%20Contact%20You%20For%20Used%20Furniture"
          }
        >
          contact us now
        </Link>
        <div className="flex justify-end md:-mt-8">
          <Image
            src={"/buy-used-furniture.svg"}
            alt="buy used furniture"
            width={70}
            height={70}
            className=""
          />
        </div>
      </div>
      <div className="bg-[#E5EDED] rounded-3xl md:py-12 pt-7 pb-3 md:px-14 px-6">
        <h3 className="font-medium blue md:text-3xl/8 text-xl mb-3">
          I Want To Sell My Furniture
        </h3>
        <Link
          className="text-muted-foreground underline underline-offset-1"
          href={"/contact-us"}
        >
          sell furniture now
        </Link>
        <div className="flex justify-end md:-mt-8">
          <Image
            src={"/sell-used-furniture.svg"}
            alt="buy used furniture"
            width={70}
            height={70}
            className=""
          />
        </div>
      </div>
    </section>
  );
}

export default BuySellSection;
