import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Truck,
} from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

const ServiceAreas = () => {
  // Data structure for service areas
  const services = [
    {
      id: "sharjah",
      city: "Sharjah",
      badge: "Headquarters",
      icon: <Building2 className="w-6 h-6" />,
      title: "Used Furniture Buyers in Sharjah",
      description:
        "Our home base with same-day service. Visit our Al Estiqlal Street showroom any day of the week, or request immediate pickup/delivery.",
      areas: ["Al Nahda", "Al Qasimia", "Al Majaz", "Muwaileh", "All Areas"],
      color: "blue",
      features: ["Same-Day Service", "Showroom Access", "Immediate Pickup"],
      href: "/used-furniture-buyers-in-sharjah",
    },
    {
      id: "dubai",
      city: "Dubai",
      badge: "Next-Day Service",
      icon: <Clock className="w-6 h-6" />,
      title: "Used Furniture in Dubai",
      description:
        "Next-day delivery available. We serve all major districts and residential communities. Special bulk rates available for apartment furnishing.",
      areas: ["Downtown", "Marina", "JLT", "Business Bay", "Deira"],
      color: "indigo",
      features: ["Next-Day Delivery", "Bulk Rates", "All Communities"],
      href: "/used-furniture-buyers-in-dubai",
    },
    {
      id: "abudhabi",
      city: "Abu Dhabi",
      badge: "Scheduled Runs",
      icon: <Calendar className="w-6 h-6" />,
      title: "Used Furniture in Abu Dhabi",
      description:
        "Professional service for buying and selling in the capital. Whether you are in the city center or on the islands, we coordinate efficient pickups.",
      areas: ["City Center", "Yas Island", "Reem Island", "Musaffah"],
      color: "teal",
      features: ["Scheduled Pickup", "Island Coverage", "Professional Team"],
      href: "/used-furniture-abu-dhabi",
    },
    {
      id: "ajman",
      city: "Ajman",
      badge: "Express Service",
      icon: <Truck className="w-6 h-6" />,
      title: "Used Furniture in Ajman",
      description:
        "Express service with same-day availability. Our proximity allows for quick response times and competitive pricing.",
      areas: ["Corniche", "Al Nuaimiya", "Al Jurf", "City Center"],
      color: "cyan",
      features: ["Quick Response", "Competitive Prices", "Nearby Hub"],
      href: "/used-furniture-in-ajman",
    },
  ];

  const otherEmirates = [
    {
      city: "Ras Al Khaimah",
      detail:
        "Weekly service runs ensure regular availability. Schedule ahead for maximum convenience.",
      icon: <Calendar className="w-5 h-5 pri" />,
      href: "/",
    },
    {
      city: "Al Ain",
      detail:
        "By appointment service for the Garden City. Efficient trips to minimize costs while maintaining quality.",
      icon: <CheckCircle2 className="w-5 h-5 pri" />,
      href: "/",
    },
    {
      city: "UAQ & Fujairah",
      detail:
        "On-demand service for UAQ and scheduled runs for Fujairah residents.",
      icon: <Truck className="w-5 h-5 pri" />,
      href: "/",
    },
  ];

  return (
    <div className="min-h-screen md:py-16 px-3 md:px-0 md:w-11/12 w-full mx-auto mt-36">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="md:text-4xl text-3xl font-bold blue tracking-tight mb-6">
          Service Areas – Beyond Sharjah
        </h2>
        <p className="max-w-2xl mx-auto  text-slate-600 leading-relaxed">
          While our showroom is based in Al Qasimiah, Sharjah, we are your
          trusted partners across the entire UAE. From the bustle of Dubai to
          the quiet of Al Ain, we come to you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Grid: Sharjah (Featured) + Dubai & Abu Dhabi */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Sharjah Card - Featured (Spans 1 column on LG, but styled distinctly) */}
          <div className="lg:col-span-1 relative group">
            <div className="relative h-full bg-white rounded-3xl p-8 shadow-xl border border-[#FFF8DF] flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <div className="p-3 bg-[#FFF8DF]  rounded-2xl pri shadow-lg">
                  <Building2 className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 text-xs font-medium pri bg-[#FFF8DF] rounded-full">
                  HEADQUARTERS
                </span>
              </div>

              <Link href="/used-furniture-buyers-in-sharjah">
                <h3 className="text-xl font-bold blue mb-3">
                  Used Furniture Buyers in Sharjah
                </h3>
              </Link>
              <p className="text-slate-600 mb-6 text-sm">
                Our home base on Al Estiqlal Street. We offer immediate pickup &
                delivery throughout the emirate.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center text-sm text-slate-700">
                  <MapPin className="w-4 h-4 pri mr-2" />
                  <span>Al Estiqlal St, Bu Shaghara</span>
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <MapPin className="w-4 h-4 pri mr-2" />
                  <span>Al Nahda, Al Majaz, Muwaileh</span>
                </div>
                <div className="flex items-center text-sm text-slate-700">
                  <Clock className="w-4 h-4 pri mr-2" />
                  <span>Same-Day Response (5-10 Mins)</span>
                </div>
              </div>

              <Button storeBtn size={"lg"} className="mt-auto">
                Visit Showroom <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>

          {/* Dubai & Abu Dhabi Cards */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.slice(1, 3).map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-2xl bg-[#FFF8DF] blue`}>
                    {service.icon}
                  </div>
                  <span
                    className={`px-3 py-1 text-xs font-medium blue bg-[#FFF8DF] rounded-full`}
                  >
                    {service.badge}
                  </span>
                </div>

                <Link href={service.href}>
                  <h3 className="text-xl font-bold blue mb-3">
                    Used Furniture in {service.city}
                  </h3>
                </Link>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed flex-grow">
                  {service.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-3">
                    Key Areas
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {service.areas.map((area, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 text-xs font-medium bg-slate-100 text-slate-600 rounded-md"
                      >
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Horizontal Band: Ajman, RAK, Al Ain, Others */}
        <div className="bg-white rounded-3xl shadow-lg border border-slate-100 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-100">
            {/* Ajman Highlight */}
            <div className="p-8 bg-gradient-to-br from-[#FFF8DF] to-white">
              <div className="flex items-center mb-4">
                <Truck className="w-5 h-5 pri mr-2" />
                <Link href={"/used-furniture-in-ajman"}>
                  <h3 className="text-lg font-bold blue">Ajman</h3>
                </Link>
              </div>
              <p className="text-sm text-slate-600 mb-3">
                Express service with same-day availability due to our proximity.
              </p>
              <span className="text-xs font-medium blue bg-[#E5EDED] px-2 py-1 rounded">
                Fast Response
              </span>
            </div>

            {/* Other Emirates Loop */}
            {otherEmirates.map((item, index) => (
              <div
                key={index}
                className="p-8 hover:bg-slate-50 transition-colors"
              >
                <div className="flex items-center mb-4">
                  {item.icon}
                  <Link href={item.href}>
                    {" "}
                    <h3 className="text-lg font-bold blue ml-2">{item.city}</h3>
                  </Link>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreas;
