import Image from "next/image";
import Header from "./components/header/Header";
import HeroSection from "./components/heroSection/HeroSection";
import ShowCaseProducts from "./components/showCaseProducts/ShowCaseProducts";
import Featured from "./components/featured/Featured";
import GearProducts from "./components/gearProducts/GearProducts";



export default function Home() {
  return (
    <div className="md:header_container">
      <Header />
      <div className="mb-[50px]">
        <HeroSection />
      </div>

      <div className="mt-10">
        <ShowCaseProducts />
      </div>

      <div className="mt-10">
        <Featured/>        
      </div>

      <div className="mt-10">
        <GearProducts/>        
      </div>
    </div>
  );
}
