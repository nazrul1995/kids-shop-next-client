'use client'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

export default function ProductDetails() {

  const { id } = useParams()
  const router = useRouter()
  const [product, setProduct] = useState(null)

  // Fetch Product
  useEffect(() => {
    fetch(`https://kids-shop-project.vercel.app/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg text-pink-500"></span>
      </div>
    )
  }

  return (
    <div className="max-w-6xl mx-auto p-5 mt-10">

      {/* Back Button */}
      <button
        onClick={() => router.back()}
        className="mb-6 flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-800 transition"
      >
        <span className="text-2xl">←</span> Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        
        {/* LEFT: PRODUCT IMAGE */}
        <div className="bg-white rounded-3xl shadow-xl border-2 border-pink-200 p-5">
          <Image
            src={product.pictureURL}
            alt={product.toyName}
            width={500}
            height={500}
            unoptimized
            className="rounded-2xl object-cover w-full h-[350px]"
          />

          <div className="mt-4 flex gap-3">
            <span className="badge badge-secondary px-4 py-2">🌟 NEW</span>
            <span className="badge badge-primary px-4 py-2">Category: {product.subCategory}</span>
          </div>
        </div>

        {/* RIGHT: DETAILS */}
        <div className="flex flex-col gap-5 bg-linear-to-br from-pink-50 via-yellow-50 to-blue-50 p-7 rounded-3xl shadow-lg border-2 border-pink-200">

          <h1 className="text-3xl font-bold text-pink-700">{product.toyName}</h1>

          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-6 h-6 ${i < product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.163c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.287 3.957c.3.922-.755 1.688-1.538 1.118l-3.37-2.447a1 1 0 00-1.175 0l-3.37 2.447c-.783.57-1.838-.196-1.538-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.07 9.384c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.286-3.957z" />
              </svg>
            ))}
            <span className="ml-2 text-gray-600">({product.rating})</span>
          </div>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed">
            {product.description || "No description available."}
          </p>

          {/* Quantities */}
          <div className="grid grid-cols-2 gap-5 text-gray-700 text-lg">
            <p className="bg-white p-4 rounded-xl shadow border">
              🧩 <span className="font-bold">Available:</span> {product.availableQuantity}
            </p>
            <p className="bg-white p-4 rounded-xl shadow border">
              💖 <span className="font-bold">Sold:</span> {product.soldQuantity}
            </p>
          </div>

          {/* Price & Button */}
          <div className="flex justify-between items-center mt-5">
            <span className="text-4xl font-bold text-pink-700">{product.price}৳</span>
            <button className="btn bg-pink-500 hover:bg-pink-600 text-white px-8 text-lg rounded-full shadow-md">
              Buy Now 🛒
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
