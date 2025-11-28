// "use client";

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import Sidebar from "../component/Sidebar";

// export default function MyProducts() {
//   const [products, setProducts] = useState([]);
//   const sellerEmail = "seller@mail.com"; 

//   useEffect(() => {
//     fetch(`https://kids-shop-project.vercel.app/my-posted-products?email=${sellerEmail}`)
//       .then((r) => r.json())
//       .then(setProducts);
//   }, []);

//   const handleDelete = async (id) => {
//     if (!confirm("Delete this product?")) return;

//     await fetch(`https://kids-shop-project.vercel.app/deleteJob/${id}`, {
//       method: "DELETE",
//     });

//     setProducts(products.filter((p) => p._id !== id));
//   };

//   return (
//     <div className="flex">
//       <Sidebar />

//       <div className="ml-64 w-full p-6">
//         <h2 className="text-2xl font-bold mb-6 text-pink-600">My Products</h2>

//         <table className="w-full bg-white shadow rounded-lg overflow-hidden">
//           <thead className="bg-pink-200 text-pink-700">
//             <tr>
//               <th className="p-3 text-left">Toy</th>
//               <th className="p-3 text-left">Price</th>
//               <th className="p-3 text-left">Quantity</th>
//               <th className="p-3 text-center">Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {products.map((p) => (
//               <tr key={p._id} className="border-b">
//                 <td className="p-3">{p.toyName}</td>
//                 <td className="p-3">{p.price}৳</td>
//                 <td className="p-3">{p.quantity}</td>

//                 <td className="p-3 text-center flex gap-3 justify-center">
//                   <Link
//                     className="px-3 py-1 bg-yellow-400 rounded"
//                     href={`/dashboard/edit/${p._id}`}
//                   >
//                     Edit
//                   </Link>

//                   <button
//                     onClick={() => handleDelete(p._id)}
//                     className="px-3 py-1 bg-red-500 text-white rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
