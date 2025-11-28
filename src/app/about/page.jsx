'use client'
import Image from 'next/image'
import React from 'react'

export default function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-pink-100 via-yellow-100 to-blue-100 py-16">
      <div className="w-11/12 md:w-4/5 mx-auto">
      <title>About Us</title>
        {/* 🌈 Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-600 drop-shadow-md mb-4">
            About ToyLand 🎠
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Welcome to <span className="font-semibold text-pink-500">ToyLand</span> —
            the magical world of fun, imagination, and learning! 🌟  
            Every toy here is designed to bring joy, laughter, and creativity into your child’s world.
          </p>
          <div className="divider w-1/3 mx-auto my-6 bg-pink-400"></div>
        </div>

        {/* 💬 Our Story Section */}
        <div className="bg-white bg-opacity-70 rounded-2xl shadow-lg p-8 mb-12 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-pink-500 mb-4">Our Story 📖</h2>
          <p className="text-gray-700 leading-relaxed">
            ToyLand was born from a simple dream — to create a joyful space where every child’s imagination
            can run wild! From adorable plushies to mind-bending puzzles, our toys are made with care,
            creativity, and a lot of love. 💕
          </p>
          <p className="text-gray-700 mt-4 leading-relaxed">
            We believe toys are not just objects of play, but gateways to learning, bonding, and happiness.
            At <span className="font-semibold text-pink-500">ToyLand</span>, we make sure every giggle counts!
          </p>
        </div>

        {/* 🎨 Our Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-pink-50 p-8 rounded-2xl shadow-md border-l-8 border-pink-400 hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-bold text-pink-600 mb-3">Our Mission 🚀</h3>
            <p className="text-gray-700">
              To inspire creativity, learning, and pure joy through safe, imaginative, and high-quality toys.
            </p>
          </div>
          <div className="bg-blue-50 p-8 rounded-2xl shadow-md border-l-8 border-blue-400 hover:scale-[1.02] transition-transform">
            <h3 className="text-2xl font-bold text-blue-600 mb-3">Our Vision 🌍</h3>
            <p className="text-gray-700">
              To be every family’s favorite toy destination — where smiles never fade and playtime never ends.
            </p>
          </div>
        </div>

        {/* 💗 Why Choose Us */}
        <div className="bg-white bg-opacity-70 rounded-2xl shadow-lg p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-yellow-500 mb-6 text-center">
            Why Parents Love ToyLand 💕
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-pink-50 shadow-sm hover:shadow-md transition-shadow">
              <Image width={100} height={100}
                src="https://cdn-icons-png.flaticon.com/512/3037/3037716.png"
                alt="Safety First"
                className="w-16 mx-auto mb-3"
                unoptimized
              />
              <h4 className="text-xl font-semibold text-pink-600 mb-2">Safe & Non-toxic</h4>
              <p className="text-gray-700 text-sm">
                Every ToyLand product is safety-tested and made from non-toxic materials — your child’s well-being comes first.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-yellow-50 shadow-sm hover:shadow-md transition-shadow">
               <Image width={100} height={100}
                src="https://cdn-icons-png.flaticon.com/512/4228/4228924.png"
                alt="Eco Friendly"
                className="w-16 mx-auto mb-3"
                unoptimized
              />
              <h4 className="text-xl font-semibold text-yellow-600 mb-2">Eco-Friendly</h4>
              <p className="text-gray-700 text-sm">
                We care for our planet 🌍 — all ToyLand toys are crafted using sustainable, eco-conscious materials.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-blue-50 shadow-sm hover:shadow-md transition-shadow">
               <Image width={100} height={100}
                src="https://cdn-icons-png.flaticon.com/512/4221/4221792.png"
                alt="Creative Designs"
                className="w-16 mx-auto mb-3"
                unoptimized
              />
              <h4 className="text-xl font-semibold text-blue-600 mb-2">Creative Designs</h4>
              <p className="text-gray-700 text-sm">
                Colorful, fun, and full of imagination — ToyLand toys are built to make every playtime magical.
              </p>
            </div>
          </div>
        </div>

        {/* 🌟 Footer Note */}
        <div className="text-center mt-16">
          <p className="text-gray-600">
            Thank you for being part of our ToyLand family! 💫  
            <br />
            — <span className="font-semibold text-pink-500">The ToyLand Team</span>
          </p>
        </div>
      </div>
    </div>
  )
}
