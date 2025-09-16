"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const EventGallery = () => (
  <section id="gallery" className="py-20 bg-black">
    <div className="w-full px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          Event Gallery
        </span>
      </h2>
      
      <Swiper
        // UPDATED: Configuration for smooth and slow motion
        modules={[Autoplay]}
        loop={true}
        speed={10000} // Increased speed for a very slow, gradual transition
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true, // Pauses the scroll on hover
        }}
        slidesPerView={1}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
        className="mySwiper"
      >
        {/* We map the array twice to ensure enough slides for a seamless loop */}
        {[...Array(8), ...Array(8)].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-xl overflow-hidden h-48 border-2 border-yellow-500/20 group">
              <img
                src={`https://picsum.photos/400/300?random=${i + 1}`}
                alt={`Event ${i + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default EventGallery;