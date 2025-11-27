
export default function Footer() {
  return (
    <footer className="bg-linear-to-r from-pink-200 via-yellow-200 to-blue-200 pt-12 pb-6">
      <div className="w-11/12 mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Brand section */}
        <div>
          <h2 className="text-3xl font-extrabold text-pink-700">ToyTopiya 🎁</h2>
          <p className="mt-3 text-gray-700 leading-relaxed">
            The best online toy store for kids!  
            Colorful, fun & creative toys delivered to your doorstep.
          </p>

          <div className="flex gap-4 mt-4">
            <a href="#" className="text-pink-600 hover:text-pink-800 text-2xl">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-600 hover:text-blue-800 text-2xl">
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="#" className="text-red-600 hover:text-red-800 text-2xl">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="/products" className="hover:text-pink-700">All Toys</a></li>
            <li><a href="/categories" className="hover:text-pink-700">Categories</a></li>
            <li><a href="/blog" className="hover:text-pink-700">Blog</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-3">Customer Support</h3>
          <ul className="space-y-2 text-gray-700">
            <li><a href="#" className="hover:text-pink-700">FAQ</a></li>
            <li><a href="#" className="hover:text-pink-700">Shipping Info</a></li>
            <li><a href="#" className="hover:text-pink-700">Return Policy</a></li>
            <li><a href="#" className="hover:text-pink-700">Contact Us</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-pink-700 mb-3">Get in Touch</h3>
          <p className="text-gray-700">📍 Dhaka, Bangladesh</p>
          <p className="text-gray-700">📞 +880 123 456 789</p>
          <p className="text-gray-700">✉ support@toytopiya.com</p>

          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Subscribe Email"
              className="px-3 py-2 rounded-l-lg border border-pink-300 focus:outline-pink-500 w-full"
            />
            <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg hover:bg-pink-600">
              Go
            </button>
          </form>
        </div>
      </div>

      <div className="text-center mt-10 text-gray-700 text-sm border-t border-pink-300 pt-4">
        © {new Date().getFullYear()} ToyTopiya. All Rights Reserved. 💖
      </div>
    </footer>
  );
}
