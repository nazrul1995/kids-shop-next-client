"use client";

import React, { useContext, useState } from "react";
import Link from "next/link";
import { RegexIcon } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AuthContext } from "@/app/dashboard/component/Provider/AuthContext/AuthContext";
import Swal from "sweetalert2";

export default function Header() {
  const { user, LogOutUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Logged out successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Logout failed",
          text: error.message,
        });
      });
  };

  // ACTIVE LINK FUNCTION
  const navLinkClass = (path) =>
    `block mx-4 text-lg font-medium transition-colors duration-300 ${
      pathname === path ? "text-pink-600" : "text-gray-700 hover:text-pink-500"
    }`;

  const links = (
    <>
      <Link className={navLinkClass("/")} href="/" onClick={() => setMenuOpen(false)}>
        🏠 Home
      </Link>

      <Link className={navLinkClass("/about")} href="/about" onClick={() => setMenuOpen(false)}>
        🌟 About
      </Link>

      <Link className={navLinkClass("/products")} href="/products" onClick={() => setMenuOpen(false)}>
        🎁 All Products
      </Link>

      {user && (
        <Link
          className={navLinkClass("/profile")}
          href="/profile"
          onClick={() => setMenuOpen(false)}
        >
          💖 Profile
        </Link>
      )}

      {user && (
        <Link
          className={navLinkClass("/wishlist")}
          href="/wishlist"
          onClick={() => setMenuOpen(false)}
        >
          💖 Wishlist
        </Link>
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 bg-linear-to-r from-pink-100 via-yellow-100 to-blue-100 shadow-md">
      <div className="w-11/12 mx-auto flex justify-between items-center py-3 md:py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl md:text-4xl font-extrabold text-pink-700 tracking-wide"
        >
          🎠 ToyLand
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-2">{links}</nav>

        {/* Right Section */}
        <div className="flex items-center gap-3 sm:gap-5">
          {user ? (
            <div className="relative group">
              <Image width={20} height={20}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-pink-300 cursor-pointer shadow-md"
                src={user.photoURL || "https://i.ibb.co/rpFhYw2/default-avatar.jpg"}
                alt="user"
                unoptimized
              />
              <div className="absolute top-12 left-1/2 -translate-x-1/2 bg-black text-white text-sm px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg z-20">
                {user.displayName || "No Name"}
              </div>
            </div>
          ) : (
            <RegexIcon size={30} className="text-gray-700" />
          )}

          {user ? (
            <button
              onClick={handleLogOut}
              className="hidden sm:block btn bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-5 py-2 shadow-md transition-transform transform hover:scale-105"
            >
              Log Out
            </button>
          ) : (
            <Link
              href="/dashboard/login"
              className="hidden sm:block btn bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-5 py-2 shadow-md transition-transform transform hover:scale-105"
            >
              Log In
            </Link>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden text-pink-700 focus:outline-none"
          >
            {menuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-inner py-4">
          <div className="flex flex-col items-center space-y-3">{links}</div>

          <div className="mt-4 flex justify-center">
            {user ? (
              <button
                onClick={handleLogOut}
                className="btn bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-5 py-2 shadow-md"
              >
                Log Out
              </button>
            ) : (
              <Link
                href="/dashboard/login"
                className="btn bg-pink-500 hover:bg-pink-600 text-white font-semibold rounded-full px-5 py-2 shadow-md"
              >
                Log In
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
