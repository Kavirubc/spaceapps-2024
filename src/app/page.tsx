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

      <main className="flex flex-col mx-auto w-full items-center justify-center content-center ">

        <div className="flex mx-auto flex-col items-center content-center justify-between max-w-screen-2xl">
          <HeroSec />
          <AboutUs />
          <CountDown />
          <FaqSec />
        </div>

      </main>
      <FooterSec />
    </>
  );
}
