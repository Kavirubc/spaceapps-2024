import AboutUs from "@/components/aboutUs";
import HeroSec from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen px-40 flex-col items-center justify-between">
        <HeroSec />
        <AboutUs />
      </main>
    </>
  );
}
