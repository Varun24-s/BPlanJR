"use client";

import img1 from "../assets/Winner.png";
import img2 from "../assets/DSC_0021.JPG";
import img3 from "../assets/DSC_0029.JPG";
import img4 from "../assets/DSC_0034.JPG";
import img5 from "../assets/DSC_0324.JPG";
import img6 from "../assets/DSC_0182.JPG";
import img8 from "../assets/DSC_0175.JPG";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const images = [img1, img2, img3, img4, img5, img6, img8];

const EventGallery = () => (
  <section id="gallery" className="py-20 bg-black">
    <div className="w-full px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
          Event Gallery
        </span>
      </h2>
      
      <Swiper
        modules={[Autoplay]}
        loop={true}
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
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
        {/* Duplicate the images array for seamless looping */}
        {[...images, ...images].map((imgSrc, i) => (
          <SwiperSlide key={i}>
            <div className="rounded-xl overflow-hidden h-48 border-2 border-yellow-500/20 group">
              <img
                src={imgSrc}
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
