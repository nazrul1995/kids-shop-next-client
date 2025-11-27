import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/Components/Footer";
import AuthProvider from "./dashboard/component/Provider/AuthProvider/AuthProvider";
import Header from "@/Components/Header/Header";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Lens Coaching",
  description: "Renowned coaching in chittagong",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <Header></Header>
          {children}
          <Footer />
        </AuthProvider>

      </body>
    </html>
  );
}
