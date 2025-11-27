"use client";

import ProductCard from "@/Components/ProductCard/page";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((r) => r.json())
      .then(setData);
  }, []);

  return (
    <div className="w-11/12 mx-auto my-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500">
          🧸 All Fun Toys
        </h1>
        <p className="text-gray-600 mt-2 text-lg font-medium">
          Explore colorful, creative & smart toys for kids of every age 💫
        </p>

        <div className="flex justify-center mt-4">
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 via-yellow-400 to-blue-400 rounded-full"></div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-12 gap-5">
        {data.map((product, index) => (
          <div key={index} className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
