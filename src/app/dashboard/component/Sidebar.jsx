import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 fixed min-h-screen bg-pink-600 text-white p-6">

      <h2 className="text-2xl font-bold mb-8">Seller Panel 🛍️</h2>

      <ul className="space-y-4">
        <li><Link href="/dashboard">Dashboard</Link></li>
        <li><Link href="/dashboard/add-product">Add Product</Link></li>
        <li><Link href="/dashboard/manage-product">My Products</Link></li>
      </ul>
    </div>
  );
}
