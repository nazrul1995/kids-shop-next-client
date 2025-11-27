"use client";

import ProductCard from "@/Components/ProductCard/page";
import { useEffect, useMemo, useState } from "react";

export default function AllProducts() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filters
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(2000);
  const [rating, setRating] = useState(0);

  // Sorting
  const [sortBy, setSortBy] = useState("");

  // Fetch Products
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://kids-shop-project.vercel.app/products");
      const result = await res.json();
      setData(result);
      setLoading(false);
    };

    fetchData();
  }, []);

  // FILTER + SORT (useMemo)
  const filtered = useMemo(() => {
    let result = data;

    // Search
    if (search) {
      result = result.filter((p) =>
        p.toyName.toLowerCase().includes(search.toLowerCase())
      );
    }

    // Category
    if (category) {
      result = result.filter((p) => p.subCategory === category);
    }

    // Price
    result = result.filter((p) => p.price <= price);

    // Rating
    if (rating > 0) {
      result = result.filter((p) => p.rating >= rating);
    }

    // Sorting
    if (sortBy === "priceLow") {
      result = [...result].sort((a, b) => a.price - b.price);
    }
    if (sortBy === "priceHigh") {
      result = [...result].sort((a, b) => b.price - a.price);
    }
    if (sortBy === "newest") {
      result = [...result].sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    if (sortBy === "oldest") {
      result = [...result].sort(
        (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
      );
    }

    return result;
  }, [search, category, price, rating, sortBy, data]);

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
      </div>

      {/* Layout: Sidebar + Products */}
      <div className="grid grid-cols-12 gap-8">

        {/* SIDEBAR */}
        <div className="col-span-12 md:col-span-3 bg-white p-6 rounded-2xl shadow-lg border border-pink-200 h-fit sticky top-5">
          <h2 className="text-2xl font-bold text-pink-500 mb-5">🔍 Filters</h2>

          {/* Search */}
          <div className="mb-5">
            <label className="font-semibold">Search</label>
            <input
              type="text"
              placeholder="Search toys..."
              className="input input-bordered w-full mt-1"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          {/* Category */}
          <div className="mb-5">
            <label className="font-semibold">Category</label>
            <select
              className="select select-bordered w-full mt-1"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="">All</option>
              <option value="Soft Toys">Soft Toys</option>
              <option value="Educational Toys">Educational Toys</option>
              <option value="Sports Toys">Sports Toys</option>
              <option value="Craft Toys">Craft Toys</option>
              <option value="Dolls">Dolls</option>
            </select>
          </div>

          {/* Price */}
          <div className="mb-5">
            <label className="font-semibold">Max Price: {price}৳</label>
            <input
              type="range"
              min="100"
              max="5000"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="range range-pink mt-2"
            />
          </div>

          {/* Rating */}
          <div className="mb-5">
            <label className="font-semibold">Minimum Rating</label>
            <select
              className="select select-bordered w-full mt-1"
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
            >
              <option value="0">All Ratings</option>
              <option value="1">⭐ 1+</option>
              <option value="2">⭐ 2+</option>
              <option value="3">⭐ 3+</option>
              <option value="4">⭐ 4+</option>
              <option value="5">⭐ 5</option>
            </select>
          </div>

          {/* SORTING */}
          <div className="mb-5">
            <label className="font-semibold">Sort By</label>
            <select
              className="select select-bordered w-full mt-1"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="">Default</option>
              <option value="priceLow">Price: Low → High</option>
              <option value="priceHigh">Price: High → Low</option>
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-5">

          {/* SKELETON LOADING */}
          {loading &&
            [...Array(8)].map((_, i) => (
              <div
                key={i}
                className="col-span-12 sm:col-span-6 lg:col-span-4 bg-gray-200 animate-pulse h-64 rounded-xl"
              ></div>
            ))}

          {/* PRODUCT LIST */}
          {!loading &&
            (filtered.length === 0 ? (
              <p className="text-center text-gray-500 col-span-12">
                ❌ No products found...
              </p>
            ) : (
              filtered.map((product, index) => (
                <div key={index} className="col-span-12 sm:col-span-6 lg:col-span-4">
                  <ProductCard product={product} />
                </div>
              ))
            ))}
        </div>
      </div>
    </div>
  );
}
