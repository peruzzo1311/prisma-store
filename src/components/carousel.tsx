"use client";

import { Navigation, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProductCard from "./product-card";

import "swiper/css";
import "swiper/css/scrollbar";

export default function CarouselProducts() {
  return (
    <>
      <Swiper
        grabCursor
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{
          hide: false,
        }}
        navigation
        modules={[Scrollbar, Navigation]}
        className="!pb-4"
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
      >
        {Array.from({ length: 10 })
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCard />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
