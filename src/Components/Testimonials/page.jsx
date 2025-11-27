"use client";

import { useEffect, useState } from "react";
import TestimonialCard from "./TestimonialCard/page";


// Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

export default function Testimonials() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://kids-shop-project.vercel.app/testimonials")
      .then((r) => r.json())
      .then(setData);
  }, []);
console.log(data)
  return (
    <section className="py-16 bg-linear-to-r from-yellow-100 via-pink-100 to-blue-100">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600">
          🌟 What Our Customers Say
        </h2>
        <p className="text-gray-700 mt-3 text-lg">
          Hear from happy parents and teachers about our toys.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="w-11/12 mx-auto">
        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{ delay: 2500 }}
          spaceBetween={20}
          breakpoints={{
            320: { slidesPerView: 1 },
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {data.map((testimonial, index) => (
            <SwiperSlide className="my-20" key={index}>
              <TestimonialCard testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
