"use client";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";

import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
  const slides = [
    {
      title: "Share Your Startup Vision",
      description:
        "Turn innovative ideas into reality through collaboration.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Discover Future Innovations",
      description:
        "Explore powerful startup concepts from creators worldwide.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop",
    },
    {
      title: "Build Ideas Together",
      description:
        "Engage with the community and refine your next big idea.",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1600&auto=format&fit=crop",
    },
  ];

  return (
    <Swiper
      loop={true}
      navigation={true}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 4000,
      }}
      modules={[
        Navigation,
        Pagination,
        Autoplay,
      ]}
      className="h-screen"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          
          <div
            className="relative flex h-screen items-center justify-center bg-cover bg-center"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/60"></div>

            {/* Content */}
            <div className="relative z-10 max-w-3xl px-4 text-center text-white">
              
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                {slide.title}
              </h1>

              <p className="mb-8 text-base text-slate-300 md:text-lg">
                {slide.description}
              </p>

              <Link
                href="/ideas"
                className="inline-block rounded-2xl bg-indigo-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-indigo-500"
              >
                Explore Ideas
              </Link>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Banner;