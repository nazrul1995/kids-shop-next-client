"use client";

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../component/Provider/AuthContext/AuthContext";
import Image from "next/image";
import Sidebar from "../component/Sidebar";
import Swal from "sweetalert2";



export default function ManageProduct() {
  const { user } = useContext(AuthContext);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleting, setDeleting] = useState(null);

  // Fetch user's posted products
  const fetchMyProducts = async () => {
    if (!user?.email) return;

    try {
      setLoading(true);
      const res = await fetch(
        `http://localhost:5000/my-posted-products?email=${user.email}`
      );
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      Swal.fire("Error", "Failed to load your products", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyProducts();
  }, [user]);

  // Delete Product
  const handleDelete = async (id) => {
    const confirm = await Swal.fire({
      title: "Are you sure?",
      text: "This product will be deleted permanently!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (!confirm.isConfirmed) return;

    try {
      setDeleting(id);
      const res = await fetch(`http://localhost:5000/deleteProduct/${id}`, {
        method: "DELETE",
      });

      const result = await res.json();

      if (result.deletedCount > 0) {
        setProducts(products.filter((p) => p._id !== id));
        Swal.fire("Deleted!", "Product has been deleted.", "success");
      } else {
        Swal.fire("Failed", "Could not delete the product.", "error");
      }
    } catch (err) {
      Swal.fire("Error", "Something went wrong!", "error");
    } finally {
      setDeleting(null);
    }
  };

  // Edit redirect (you can make a separate EditProduct page later)
  const handleEdit = (id) => {
    // For now, just alert. You can redirect to /update-product/${id}
    Swal.fire("Coming Soon", "Edit functionality will be added soon!", "info");
    // Or navigate: router.push(`/update-product/${id}`)
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="ml-64 w-full p-10">
        <h2 className="text-4xl font-bold mb-8 text-pink-600">
          Manage My Products
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <span className="loading loading-spinner loading-lg text-pink-600"></span>
          </div>
        ) : products.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl shadow-xl">
            <p className="text-2xl text-gray-500">You haven!t added any products yet.</p>
            <button
              onClick={() => window.location.href = "/dashboard/add-product"}
              className="mt-6 btn bg-pink-500 hover:bg-pink-600 text-white"
            >
              Add Your First Product
            </button>
          </div>
        ) : (
          <div className="bg-white shadow-2xl rounded-3xl overflow-hidden border border-pink-100">
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr className="bg-pink-100 text-pink-800 text-left">
                    <th className="px-6 py-4">Image</th>
                    <th>Toy Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Rating</th>
                    <th>Category</th>
                    <th className="text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr
                      key={product._id}
                      className="hover:bg-pink-50 transition duration-200 border-b"
                    >
                      <td className="px-6 py-4">
                        <Image width={100} height={100}
                          src={product.pictureURL}
                          alt={product.toyName}
                          className="w-16 h-16 object-cover rounded-lg shadow"
                          unoptimized
                        />
                      </td>
                      <td className="font-semibold text-gray-800">
                        {product.toyName}
                      </td>
                      <td>৳{product.price}</td>
                      <td>{product.availableQuantity} pcs</td>
                      <td>
                        <span className="badge badge-warning text-white">
                          {product.rating} ★
                        </span>
                      </td>
                      <td>
                        <span className="badge badge-outline badge-info">
                          {product.category}
                        </span>
                      </td>
                      <td className="text-center space-x-3">
                        <button
                          onClick={() => handleEdit(product._id)}
                          className="btn btn-sm btn-outline btn-success"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(product._id)}
                          disabled={deleting === product._id}
                          className="btn btn-sm btn-outline btn-error"
                        >
                          {deleting === product._id ? (
                            <span className="loading loading-spinner loading-xs"></span>
                          ) : (
                            "Delete"
                          )}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}