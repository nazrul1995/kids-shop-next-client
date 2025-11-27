"use client";

import Sidebar from "./component/Sidebar";


export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar/>

      <div className="ml-64 w-full p-6">
        <h1 className="text-3xl font-bold text-pink-600">Welcome Seller 🎉</h1>
        <p className="text-gray-700 mt-3">
          Manage your toys, update inventory & grow your business 🚀
        </p>
      </div>
    </div>
  );
}
