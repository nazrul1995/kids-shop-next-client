"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function AddProduct() {
  const [form, setForm] = useState({
    toyName: "",
    price: "",
    quantity: "",
    pictureURL: "",
    sellerEmail: "seller@mail.com" 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await fetch("https://kids-shop-project.vercel.app/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    alert("Product Added!");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full p-8">

        <h2 className="text-2xl font-bold mb-6 text-pink-600">Add New Product</h2>

        <form onSubmit={handleSubmit} className="grid gap-4 max-w-xl">

          <input
            type="text"
            placeholder="Toy Name"
            className="border p-2 rounded"
            onChange={(e) => setForm({ ...form, toyName: e.target.value })}
          />

          <input
            type="number"
            placeholder="Price"
            className="border p-2 rounded"
            onChange={(e) => setForm({ ...form, price: e.target.value })}
          />

          <input
            type="number"
            placeholder="Quantity"
            className="border p-2 rounded"
            onChange={(e) => setForm({ ...form, quantity: e.target.value })}
          />

          <input
            type="text"
            placeholder="Image URL"
            className="border p-2 rounded"
            onChange={(e) => setForm({ ...form, pictureURL: e.target.value })}
          />

          <button className="bg-pink-500 text-white px-5 py-2 rounded">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}
