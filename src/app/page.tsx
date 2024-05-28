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
      <Navbar />
          <HeroSec />
          <AboutUs />
          <CountDown />
          <FaqSec />
      <FooterSec />
    </>
  );
}
