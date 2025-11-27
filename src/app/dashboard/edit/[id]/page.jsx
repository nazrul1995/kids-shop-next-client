"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Sidebar from "../../components/Sidebar";

export default function EditProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/products/${id}`)
      .then((r) => r.json())
      .then(setProduct);
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    await fetch(`http://localhost:5000/updateJob/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });

    alert("Updated Successfully!");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 w-full p-6">
        <h2 className="text-2xl font-bold mb-6 text-pink-600">Edit Product</h2>

        <form onSubmit={handleUpdate} className="grid gap-4 max-w-xl">

          <input
            type="text"
            value={product.toyName || ""}
            onChange={(e) => setProduct({ ...product, toyName: e.target.value })}
            className="border p-2 rounded"
          />

          <input
            type="number"
            value={product.price || ""}
            onChange={(e) => setProduct({ ...product, price: e.target.value })}
            className="border p-2 rounded"
          />

          <input
            type="number"
            value={product.quantity || ""}
            onChange={(e) => setProduct({ ...product, quantity: e.target.value })}
            className="border p-2 rounded"
          />

          <button className="bg-pink-600 text-white px-5 py-2 rounded">
            Update Product
          </button>
        </form>
      </div>
    </div>
  );
}
