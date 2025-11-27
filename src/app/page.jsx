'use'
import Image from "next/image";
import Banner from "./home/banner/page";
import HomeProducts from "./home/banner/HomeProducts/page";
import Testimonials from "@/Components/Testimonials/page";
import Footer from "@/Components/Footer";




export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <Testimonials></Testimonials>
    </div>
  );
}
