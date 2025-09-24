"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Fatima Al-Sayed",
    ddate: "2025-08-15",
    image: "https://i.pravatar.cc/100?img=11",
    rating: 5,
    feedback:
      "I was hesitant about buying a used sofa, but the one I got from Rukun Al Arooba looks practically new! They clearly check and clean their items properly. A real gem in Sharjah for quality pre-owned furniture. Highly recommend!",
  },
  {
    id: 2,
    name: "Ben Carter",
    ddate: "2025-07-22",
    image: "https://i.pravatar.cc/100?img=12",
    rating: 5,
    feedback:
      "Needed to sell my furniture before leaving the UAE. I contacted them on WhatsApp, sent some photos, and got a fair offer within 10 minutes. The pickup with their partner movers was seamless. Made a stressful process so easy.",
  },
  {
    id: 3,
    name: "Aisha Mohammed",
    ddate: "2025-09-01",
    image: "https://i.pravatar.cc/100?img=13",
    rating: 5,
    feedback:
      "This is a proper, registered business with a physical store you can trust. Not like those freelance guys on social media. I bought a refrigerator and it came with a warranty, which gave me so much peace of mind. Excellent service.",
  },
  {
    id: 4,
    name: "Rajesh Kumar",
    ddate: "2025-06-18",
    image: "https://i.pravatar.cc/100?img=14",
    rating: 4,
    feedback:
      "Good selection of office furniture at fair prices. The desk I bought was in great condition. Delivery arrangement took a little coordination, but their partner moving company was professional and affordable. Overall, a very positive experience.",
  },
  {
    id: 5,
    name: "Chloe Evans",
    ddate: "2025-05-30",
    image: "https://i.pravatar.cc/100?img=15",
    rating: 5,
    feedback:
      "Found the perfect dining set for my apartment in Dubai. I contacted them online, and they were super responsive. They arranged delivery with Abu Muhammad Movers, and it was cheaper than finding a service myself. Love that they make it so easy!",
  },
  {
    id: 6,
    name: "Abdullah Al Farsi",
    ddate: "2025-08-05",
    image: "https://i.pravatar.cc/100?img=16",
    rating: 5,
    feedback:
      "Their experience of over 20 years really shows. They know the value of furniture and offer fair prices whether you're buying or selling. I sold them a complete bedroom set and the transaction was smooth and professional.",
  },
  {
    id: 7,
    name: "Samantha Lee",
    ddate: "2025-04-11",
    image: "https://i.pravatar.cc/100?img=17",
    rating: 5,
    feedback:
      "I furnished my entire studio apartment from their store on Al Estiqlal Street. Beds, a sofa, even kitchen cabinets! The quality for the price is unbeatable. It's amazing how much money I saved without compromising on style.",
  },
  {
    id: 8,
    name: "Hassan Iqbal",
    ddate: "2025-07-09",
    image: "https://i.pravatar.cc/100?img=18",
    rating: 4,
    feedback:
      "A very reliable place to buy used home appliances. I got a washing machine that works perfectly. The fact that they check and repair items before selling is a huge plus. Would have been 5 stars if they had more electronic gadgets in stock.",
  },
  {
    id: 9,
    name: "Youssef Al-Masri",
    ddate: "2025-02-25",
    image: "https://i.pravatar.cc/100?img=19",
    rating: 5,
    feedback:
      "Fast, professional, and honest. I sent them pictures of my old office furniture, and they quoted me a price instantly. The team came for pickup the next day. The best used furniture dealer in Sharjah, hands down.",
  },
  {
    id: 10,
    name: "Maria Fernandez",
    ddate: "2025-03-14",
    image: "https://i.pravatar.cc/100?img=20",
    rating: 5,
    feedback:
      "I appreciate their flexible payment options. I was able to pay via bank deposit, which was very convenient for me. The outdoor furniture I bought was in excellent condition and looks great on my balcony. Great customer service!",
  },
  {
    id: 11,
    name: "Omar Sharif",
    ddate: "2024-12-08",
    image: "https://i.pravatar.cc/100?img=21",
    rating: 5,
    feedback:
      "I live in Ajman and thought it would be a hassle, but they made it so simple. Their WhatsApp service is incredibly fast. They sent me videos of the bedroom set I was interested in. Trustworthy and efficient.",
  },
  {
    id: 12,
    name: "Anika Patel",
    ddate: "2025-01-20",
    image: "https://i.pravatar.cc/100?img=22",
    rating: 4,
    feedback:
      "A great find! The store is packed with items, so you have to look around, but there are some real treasures. Bought a lovely vintage bookshelf. The staff are friendly and not pushy at all.",
  },
  {
    id: 13,
    name: "Khaled Ibrahim",
    ddate: "2025-08-28",
    image: "https://i.pravatar.cc/100?img=23",
    rating: 5,
    feedback:
      "Sold them my old electronics and some furniture. They gave me a combined price which was very fair. The entire process from call to pickup took less than a day. Super impressed with their speed and professionalism.",
  },
  {
    id: 14,
    name: "Liam Murphy",
    ddate: "2025-04-02",
    image: "https://i.pravatar.cc/100?img=24",
    rating: 5,
    feedback:
      "The quality control here is top-notch. The furniture doesn't just feel 'used', it feels refurbished and well-maintained. The warranty policy is the cherry on top. This is how used furniture business should be done.",
  },
  {
    id: 15,
    name: "Noura Al Hammadi",
    ddate: "2025-06-05",
    image: "https://i.pravatar.cc/100?img=25",
    rating: 5,
    feedback:
      "If you're looking for used beds for sale, this is the place. I got a fantastic bed frame with a mattress for a fraction of the original price. It was clean and in perfect condition. I will definitely be back!",
  },
  {
    id: 16,
    name: "Chen Wei",
    ddate: "2024-11-19",
    image: "https://i.pravatar.cc/100?img=26",
    rating: 4,
    feedback:
      "Very good service. I bought a used sofa set. It was delivered quickly to my home in Ras Al Khaimah. The delivery fee through their partner was reasonable. The sofa is comfortable and was a great deal.",
  },
  {
    id: 17,
    name: "David Rodriguez",
    ddate: "2025-05-12",
    image: "https://i.pravatar.cc/100?img=27",
    rating: 5,
    feedback:
      "An officially registered company that you can rely on. I checked their location in Bu Shaghara and was impressed by the amount of stock. It's a one-stop-shop for anyone needing to furnish a home on a budget.",
  },
  {
    id: 18,
    name: "Safiya Khan",
    ddate: "2025-03-29",
    image: "https://i.pravatar.cc/100?img=28",
    rating: 5,
    feedback:
      "Their response time is no joke! I messaged them on a Friday morning about a wardrobe and got a reply with all the details in under 5 minutes. Bought it an hour later. Amazing efficiency.",
  },
  {
    id: 19,
    name: "Ahmed Mansoor",
    ddate: "2025-02-07",
    image: "https://i.pravatar.cc/100?img=29",
    rating: 4,
    feedback:
      "I sold them a few appliances. The price was fair, though slightly less than I hoped, but the convenience was worth it. They handle everything, including the pickup, which saved me a lot of trouble.",
  },
  {
    id: 20,
    name: "Isabelle Dubois",
    ddate: "2025-01-15",
    image: "https://i.pravatar.cc/100?img=30",
    rating: 5,
    feedback:
      "What a fantastic sustainable option! Instead of buying new, I got beautiful, high-quality used furniture and helped the environment. The return policy gave me the confidence to buy, but I definitely won't be returning my items. I love them!",
  },
];
export default function TestimonialSlider({
  reviews,
}: {
  reviews?: typeof testimonials;
}) {
  return (
    <div className="w-full mt-10">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={30}
        grabCursor={true}
      >
        {reviews
          ? reviews.map((item) => (
              <SwiperSlide className="bg-red-400" key={item.id}>
                <div className="shadow-lg p-10 relative text-start border ">
                  {/* Stars */}
                  <div className="flex justify-start mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-12 h-12 rounded-full border"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.ddate}</p>
                      </div>
                    </div>
                    <Image
                      src={"/google-reviews-badge.png"}
                      alt="verified review badge"
                      width={100}
                      height={100}
                    />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-600 ">{item.feedback}</p>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-5xl text-gray-400">
                    ❝
                  </div>
                </div>
              </SwiperSlide>
            ))
          : testimonials.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="bg-white/20 shadow-lg p-6 relative text-start">
                  {/* Stars */}
                  <div className="flex justify-start mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* User Info */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-x-3">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full border"
                      />
                      <div className="text-left">
                        <h3 className="font-semibold text-gray-800">
                          {item.name}
                        </h3>
                        <p className="text-sm text-gray-500">{item.ddate}</p>
                      </div>
                    </div>
                    <Image
                      src={"/google-logo.svg"}
                      alt="verified review badge"
                      width={30}
                      height={30}
                    />
                  </div>

                  {/* Feedback */}
                  <p className="text-gray-600 ">{item.feedback}</p>

                  {/* Quote Icon */}
                  <div className="absolute top-6 right-6 text-5xl text-gray-400">
                    ❝
                  </div>
                </div>
              </SwiperSlide>
            ))}
      </Swiper>
    </div>
  );
}
