'use'
import Image from "next/image";
import Banner from "./home/banner/page";
import HomeProducts from "./home/HomeProducts/page";
import Testimonials from "@/Components/Testimonials/page";




export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <HomeProducts></HomeProducts>
      <Testimonials></Testimonials>
    </div>
  );
}
