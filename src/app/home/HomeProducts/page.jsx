'use client'
import ProductCard from '@/Components/ProductCard/page';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function HomeProducts() {
const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://kids-shop-project.vercel.app/popular-products")
      .then(r => r.json())
      .then(setData);
  }, []);

   // console.log(data)
    
    return (
      <section className="py-16 bg-linear-to-br from-yellow-100 via-pink-100 to-blue-100">
      <div className="w-11/12 mx-auto text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-pink-600 drop-shadow-md animate-bounce">
          🎁 Popular Toys
        </h2>
        <p className="text-gray-700 mt-3 text-lg">
          The most loved toys by our happy little customers! 🧸💫
        </p>
        <div className="divider w-1/3 mx-auto my-5 bg-pink-400"></div>
      </div>

      {/* Product Grid */}
      <div className="w-11/12 mx-auto grid gap-x-5 gap-y-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {data.map((product) => (
          <div
            key={product._id}
            className="hover:scale-105 transition-transform duration-300"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      {/* Optional View All Button */}
      <div className="text-center mt-12">
        <Link href={'/allProducts'} className="btn bg-pink-400 hover:bg-pink-500 text-white border-none rounded-full px-8 shadow-lg">
          View All Toys 🌟
        </Link>
      </div>
    </section>
  );
}
