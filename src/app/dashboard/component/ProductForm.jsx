"use client";

import { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import { AuthContext } from "./Provider/AuthContext/AuthContext";

export default function AddProduct() {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);

  // Initialize form without _id
  const [form, setForm] = useState({
    toyName: "",
    sellerName: "",
    sellerEmail: user?.email || "",
    price: "",
    rating: "",
    availableQuantity: "",
    soldQuantity: 0,
    description: "",
    pictureURL: "",
    category: "",
    age: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "http://localhost:5000/add-product",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Failed to add product");

      alert("🎉 Product Added Successfully!");
      setForm({
        toyName: "",
        sellerName: "",
        sellerEmail: user?.email || "",
        price: "",
        rating: "",
        availableQuantity: "",
        soldQuantity: 0,
        description: "",
        pictureURL: "",
        category: "",
        age: "",
      });
    } catch (err) {
      alert("❌ Error adding product: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full p-10">
        <h2 className="text-3xl font-bold mb-8 text-pink-600">
          ➕ Add New Product
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white p-8 shadow-xl rounded-3xl border border-pink-200 max-w-4xl"
        >
          {/* Toy Name */}
          <div>
            <label className="font-semibold text-gray-600">Toy Name</label>
            <input
              type="text"
              required
              value={form.toyName}
              onChange={(e) => setForm({ ...form, toyName: e.target.value })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter toy name"
            />
          </div>

          {/* Seller Name */}
          <div>
            <label className="font-semibold text-gray-600">Seller Name</label>
            <input
              type="text"
              required
              value={form.sellerName}
              onChange={(e) =>
                setForm({ ...form, sellerName: e.target.value })
              }
              className="input input-bordered w-full mt-1"
              placeholder="Enter seller name"
            />
          </div>

          {/* Seller Email (readonly) */}
          <div>
            <label className="font-semibold text-gray-600">Seller Email</label>
            <input
              type="email"
              value={form.sellerEmail}
              readOnly
              className="input input-bordered w-full mt-1 bg-gray-100"
            />
          </div>

          {/* Category */}
          <div>
            <label className="font-semibold text-gray-600">Category</label>
            <input
              type="text"
              required
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter category"
            />
          </div>

          {/* Price */}
          <div>
            <label className="font-semibold text-gray-600">Price (৳)</label>
            <input
              type="number"
              required
              value={form.price}
              onChange={(e) => setForm({ ...form, price: Number(e.target.value) })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter price"
            />
          </div>

          {/* Rating */}
          <div>
            <label className="font-semibold text-gray-600">Rating</label>
            <input
              type="number"
              required
              step="0.1"
              min="0"
              max="5"
              value={form.rating}
              onChange={(e) =>
                setForm({ ...form, rating: Number(e.target.value) })
              }
              className="input input-bordered w-full mt-1"
              placeholder="Enter rating (0-5)"
            />
          </div>

          {/* Available Quantity */}
          <div>
            <label className="font-semibold text-gray-600">Available Quantity</label>
            <input
              type="number"
              required
              value={form.availableQuantity}
              onChange={(e) =>
                setForm({ ...form, availableQuantity: Number(e.target.value) })
              }
              className="input input-bordered w-full mt-1"
              placeholder="Enter available quantity"
            />
          </div>

          {/* Sold Quantity */}
          <div>
            <label className="font-semibold text-gray-600">Sold Quantity</label>
            <input
              type="number"
              value={form.soldQuantity}
              onChange={(e) =>
                setForm({ ...form, soldQuantity: Number(e.target.value) })
              }
              className="input input-bordered w-full mt-1"
              placeholder="Enter sold quantity"
            />
          </div>

          {/* Age */}
          <div>
            <label className="font-semibold text-gray-600">Age Range</label>
            <input
              type="text"
              value={form.age}
              onChange={(e) => setForm({ ...form, age: e.target.value })}
              className="input input-bordered w-full mt-1"
              placeholder="Enter age range (e.g., 2-6 years)"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="font-semibold text-gray-600">Image URL</label>
            <input
              type="text"
              required
              value={form.pictureURL}
              onChange={(e) => setForm({ ...form, pictureURL: e.target.value })}
              className="input input-bordered w-full mt-1"
              placeholder="Paste image URL"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="font-semibold text-gray-600">Description</label>
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
              className="textarea textarea-bordered w-full mt-1"
              placeholder="Write product description..."
              rows={4}
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            disabled={loading}
            className="btn bg-pink-500 hover:bg-pink-600 text-white text-lg md:col-span-2"
          >
            {loading ? "Adding..." : "Add Product ➕"}
          </button>
        </form>
      </div>
    </div>
  );
}
