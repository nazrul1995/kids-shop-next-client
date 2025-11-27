"use client";
import React from "react";
import Image from "next/image";
import { Quote, Star } from "lucide-react";


export default function TestimonialCard({ testimonial }) {
  return (
   <div className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-pink-100 hover:border-pink-300 transform hover:-translate-y-2">
      {/* Gradient Top Border Accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-pink-400 via-pink-500 to-rose-500"></div>

      {/* Main Card */}
      <div className="p-7 md:p-8 h-100">

        {/* Quote Icon - Top Right */}
        <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
          <Quote className="w-20 h-20 text-pink-400" fill="currentColor" />
        </div>

        {/* Profile + Name */}
        <div className="flex items-center gap-5 mb-6">
          <div className="relative">
            <div className="w-16 h-16 md:w-18 md:h-18 rounded-full overflow-hidden ring-4 ring-pink-200 ring-offset-2 group-hover:ring-pink-300 transition-all duration-300">
              <Image
                src={testimonial.photo}
                alt={testimonial.name}
                width={72}
                height={72}
                className="object-cover w-full h-full"
                unoptimized
              />
            </div>
            {/* Small Online Indicator */}
            <div className="absolute bottom-0 right-0 w-5 h-5 bg-emerald-500 rounded-full border-3 border-white"></div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-pink-800 group-hover:text-pink-700 transition-colors">
              {testimonial.name}
            </h3>
            <p className="text-sm text-pink-600 font-medium flex items-center gap-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
              {testimonial.location}
            </p>
          </div>
        </div>

        {/* Rating Stars - Animated Fill */}
        <div className="flex items-center gap-1 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-6 h-6 transition-all duration-500 ${
                i < testimonial.rating
                  ? "text-yellow-400 fill-yellow-400 scale-110"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 text-sm font-semibold text-pink-700">
            {testimonial.rating}.0
          </span>
        </div>

        {/* Review Message */}
        <p className="text-gray-700 text-base leading-relaxed italic relative z-10 line-clamp-4">
          {testimonial.message}
        </p>

        {/* Date + Subtle Heart */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-pink-100">
          <p className="text-sm text-gray-500 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {testimonial.date}
          </p>
          <div className="text-pink-500 group-hover:scale-125 transition-transform duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}