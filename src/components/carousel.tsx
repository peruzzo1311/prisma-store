"use client";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import ProductCardFeatured from "./products/featured-card";

export default function CarouselProducts() {
  return (
    <>
      <Swiper
        grabCursor
        spaceBetween={16}
        slidesPerView={1}
        scrollbar={{
          hide: false,
          draggable: true,
          enabled: true,
        }}
        modules={[Scrollbar]}
        className="!pb-4"
        breakpoints={{
          640: {
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
        {Array.from({ length: 4 })
          .fill(0)
          .map((_, index) => (
            <SwiperSlide key={index}>
              <ProductCardFeatured />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
