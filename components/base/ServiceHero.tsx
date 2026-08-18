import { Button } from "../ui/button";
import {
  ArrowUpRight,
  MapPin,
  MessageSquare,
  Check,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { APP } from "@/lib/App";

const ServiceHero = ({
  title,
  desc,
  img,
}: {
  title: { one: string; two: string };
  desc: string;
  img: {
    src: string;
    alt: string;
  };
}) => {
  return (
    <section className="relative w-full pt-3 pb-10">
      <div className="md:w-11/12 w-full max-w-[1360px] mx-auto">
        {/* Editorial Container Box */}
        <div className="bg-[#FAF8F5] border border-[#E8E2D8] md:rounded-3xl p-4 sm:p-8 lg:p-10 shadow-xs">
          {/* Top Trading Header / Metadata Bar */}
          <div className="flex flex-wrap items-center justify-between gap-y-2 gap-x-4 pb-5 mb-7 border-b border-[#E8E2D8] text-[11px] sm:text-xs font-semibold tracking-wider text-[#6B6358] uppercase">
            <span>Rukun Al Arooba • Licensed Trader Since 2018</span>

            <div className=" text-slate-500 normal-case font-normal text-xs sm:text-[13px]">
              <span className="flex items-center gap-1 font-medium text-[#144E5A]">
                <MapPin className="size-3.5 text-[#C07D53]" /> Used Furniture
                and Electronics Trading
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Content Column (7 cols) */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Main Headline */}
              <h1 className="sm:text-3xl text-2xl font-bold text-[#222222] tracking-tight leading-[1.18]">
                {title.one}{" "}
                <span className="text-[#144E5A] block mt-1.5 font-extrabold">
                  {title.two}
                </span>
              </h1>

              {/* Description */}
              <p className="mt-4 text text-sm sm:text-base ">{desc}</p>

              {/* Physical Trade Guarantee Note */}
              <div className="md:w-11/12 w-full my-3 p-3 rounded-xl text-xs sm:text-sm text-slate-700 space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 font-medium text-slate-800">
                  <span className="flex items-center gap-1.5 text-[#144E5A]">
                    <Check className="size-4 text-[#C07D53] stroke-[3]" />
                    5–10 Min WhatsApp Quote
                  </span>
                  <span className="flex items-center gap-1.5 text-[#144E5A]">
                    <Check className="size-4 text-[#C07D53] stroke-[3]" />
                    Instant Pickup and Moving Services
                  </span>
                  <span className="flex items-center gap-1.5 text-[#144E5A]">
                    <Check className="size-4 text-[#C07D53] stroke-[3]" />
                    Cash / Bank / Cheque
                  </span>
                </div>
              </div>

              {/* Direct Action Hub */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto">
                <Button
                  wtsBtn
                  size="lg"
                  className="h-11 sm:h-12 px-6 bg-[#C07D53] hover:bg-[#ad6e46] text-white font-medium text-sm sm:text-base rounded-xl transition-colors shadow-xs"
                >
                  <MessageSquare className="size-4.5" />
                  Get Confirmed Quote on WhatsApp
                </Button>

                <Button
                  storeBtn
                  variant="outlineBlue"
                  size="lg"
                  className="h-11 sm:h-12 px-5 bg-white border border-[#C6D2D6] text-[#144E5A] hover:bg-[#144E5A]/5 font-medium text-sm sm:text-base rounded-xl"
                >
                  <MapPin className="size-4 text-[#C07D53]" />
                  Visit Showroom
                  <ArrowUpRight className="size-4 opacity-70" />
                </Button>

                <Button
                  callBtn
                  variant="ghost"
                  size="sm"
                  className="text-xs text-slate-600 hover:text-slate-900"
                >
                  <Phone className="size-3.5" />
                  {APP.phone}
                </Button>
              </div>
            </div>

            {/* Media Presentation Column (5 cols) */}
            <div className="lg:col-span-5 w-full">
              <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-slate-200 drop-shadow-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center"
                  priority
                />
                {/* Subtle stamp in corner */}
                <div className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase">
                  {title.one}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
