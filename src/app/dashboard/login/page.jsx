"use client";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import Link from "next/link";
import { useState, useContext } from "react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { AuthContext } from "../component/Provider/AuthContext/AuthContext";

export default function Login() {
  const { logInUser, setUser, googleSignIn, setLoading, loading } =
    useContext(AuthContext);

  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    logInUser(email, password)
      .then((res) => {
        setUser(res.user);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          showConfirmButton: false,
          timer: 1500,
        });

        router.push("/dashboard"); // ← Redirect properly
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: err.message,
        });
      });
  };

  const handleGoogleSignIn = async () => {
    try {
      setLoading(true);
      const result = await googleSignIn();
      setUser(result.user);

      Swal.fire({
        icon: "success",
        title: "Google sign-in successful!",
        showConfirmButton: false,
        timer: 1500,
      });

      router.push("/dashboard");
    } catch (err) {
      Swal.fire({
        icon: "error",
        title: "Google sign-in failed",
        text: err.message,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center">
      <div className="bg-white bg-opacity-90 shadow-lg rounded-lg p-10 max-w-md w-full mx-4">
        <h2 className="text-3xl font-semibold mb-2 text-gray-800 text-center">
          Please Log In
        </h2>

        <form onSubmit={handleLogIn} className="flex flex-col gap-5">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="input input-bordered w-full"
            required
          />

          {/* Password Input */}
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              required
              className="input input-bordered w-full"
            />
            <span
              onClick={() => setShow(!show)}
              className="absolute right-2 top-3 cursor-pointer"
            >
              {show ? <EyeIcon /> : <EyeOffIcon />}
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="btn btn-error w-full text-white font-semibold"
          >
            {loading ? "Logging in..." : "Log In"}
          </button>

          <button
            onClick={handleGoogleSignIn}
            type="button"
            className="btn btn-outline w-full"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Sign in with Google"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-700">
          Don’t have an account?{" "}
          <Link href="/dashboard/register" className="text-red-600 font-semibold">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
