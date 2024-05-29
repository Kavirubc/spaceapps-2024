import AboutUs from "@/components/aboutUs";
import CountDown from "@/components/countDown";
import FaqSec from "@/components/faqSec";
import FooterSec from "@/components/footerSec";
import HeroSec from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="max-w-full"> 
        <Navbar />
      </nav>
      <div className="flex flex-col justify-center items-center ">
        <div className="max-w-7xl">
        <HeroSec />
        <AboutUs />
        <CountDown />
        <FaqSec />
        </div>
      </div>
      <FooterSec />
    </>
  );
}
