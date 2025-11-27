'use client'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export default function ProductCard({product}) {
  console.log(product)
  return (
     <div className="card col-span-12 md:col-span-6 lg:col-span-4 bg-linear-to-br from-pink-100 via-yellow-100 to-blue-100 shadow-xl rounded-2xl border-2 border-pink-200 hover:shadow-2xl hover:-translate-y-2 transition-transform duration-300 h-full flex flex-col">
      {/* Thumbnail */}
      <figure className="relative">
        <Image width={100} height={100}
          src={product.pictureURL}
          alt={product.toyName}
          unoptimized
          className="object-cover h-52 w-full rounded-t-2xl"
        />
        <div className="absolute top-3 right-3 badge badge-secondary px-3 py-2 text-sm">
          🌟 NEW
        </div>
      </figure>

      {/* Card Body */}
      <div className="card-body flex flex-col justify-between grow">
        {/* Toy Name */}
        <h2 className="card-title text-pink-700 font-bold text-xl">
          {product.toyName}
        </h2>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-5 h-5 ${
                i < product.rating ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
            </svg>
          ))}
          <span className="text-sm text-gray-700 ml-2">
            ({product.rating})
          </span>
        </div>

        {/* Quantities */}
        <div className="flex justify-between text-gray-700 text-sm mt-2">
          <p>
            🧩 Available:{' '}
            <span className="font-semibold text-pink-700">
              {product.availableQuantity}
            </span>
          </p>
          <p>💖 Sold: {product.soldQuantity}</p>
        </div>

        {/* Price & Button */}
        <div className="card-actions justify-between items-center mt-5">
          <span className="text-xl font-bold text-pink-700">
            {product.price}৳
          </span>
         <Link href={`/allProducts/${product._id}`} className="btn btn-sm bg-pink-400 hover:bg-pink-500 text-white border-none rounded-full px-5 shadow-md">View More 🎁</Link> 
        </div>
      </div>
    </div>
  );
}
