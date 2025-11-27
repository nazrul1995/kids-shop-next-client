'use client'

import React from 'react'


// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';

export default function Banner() {
  return (
       <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
       
        className="w-full h-[90vh]"
      >
        {/* 🧩 Slide 1 */}
        <SwiperSlide>
          <div className="relative h-[90vh] w-full">
              <Image width={1200} height={100}
              src="https://images-cdn.ubuy.co.in/6656c15545cc9726105ecb78-construction-truck-toddler-toys-car.jpg"
              alt="ToyLand Banner 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Darker overlay for better text visibility */}
            <div className="absolute inset-0 bg-black/40"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12 text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
                Welcome to <span className="text-yellow-300">ToyLand</span> 🎠
              </h1>
              <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-gray-100 drop-shadow-md">
                Discover the magic of play with creative, safe, and colorful toys made with love!
              </p>
              <Link
                href={"/allProducts"}
                className="mt-8 bg-linear-to-r from-pink-500 to-yellow-400 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:from-pink-600 hover:to-yellow-500 transition-transform transform hover:scale-105"
              >
                Explore Toys
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* 🧸 Slide 2 */}
        <SwiperSlide>
          <div className="relative h-[90vh] w-full">
              <Image width={1200} height={100}
              src="https://images-cdn.ubuy.co.in/6656c15545cc9726105ecb78-construction-truck-toddler-toys-car.jpg"
              alt="ToyLand Banner 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Slightly darker overlay to make white text pop */}
            <div className="absolute inset-0 bg-black/50"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12 text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
                Play. Learn. <span className="text-yellow-300">Grow.</span> 🌈
              </h1>
              <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-gray-100 drop-shadow-md">
                Let your kids explore creativity with safe, eco-friendly, and imaginative toys.
              </p>
              <Link
                href="/allProducts"
                className="mt-8 bg-linear-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:from-blue-600 hover:to-pink-600 transition-transform transform hover:scale-105"
              >
                Browse Categories
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* 🪀 Slide 3 */}
        <SwiperSlide>
          <div className="relative h-[90vh] w-full">
              <Image width={1200} height={100}
              src="https://images-cdn.ubuy.co.in/6656c15545cc9726105ecb78-construction-truck-toddler-toys-car.jpg"
              alt="ToyLand Banner 1"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Soft gradient overlay with dark base */}
            <div className="absolute inset-0 bg-linear-to-b from-black/60 via-black/40 to-transparent"></div>

            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-12 text-white">
              <h1 className="text-4xl md:text-6xl font-extrabold drop-shadow-lg leading-tight">
                Make Every Day <span className="text-yellow-300">Play Day!</span> 🧸
              </h1>
              <p className="mt-5 text-lg md:text-xl max-w-2xl mx-auto text-gray-100 drop-shadow-md">
                Bright colors, happy faces, and endless imagination — that’s the ToyLand spirit!
              </p>
              <Link
                href="/allProducts"
                className="mt-8 bg-linear-to-r from-yellow-400 to-pink-500 text-white font-semibold rounded-full px-8 py-3 shadow-lg hover:from-yellow-500 hover:to-pink-600 transition-transform transform hover:scale-105"
              >
                Shop Now
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}


