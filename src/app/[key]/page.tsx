'use client'
//remove use client
import AboutUs from "@/components/aboutUs";
import CountDown from "@/components/countDown";
import FaqSec from "@/components/faqSec";
import FooterSec from "@/components/footerSec";
import HeroSec from "@/components/hero";
import Navbar from "@/components/navbar";
import { useParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import Image from "next/image";

export default function Home() {

  const params = useParams();
const { push } = useRouter();
    const key = params.key;
  const isAdmin = key === "kodeksrx" || key === "chathurika" || key === "ganesha" || key === "dahami";


  return (
<>
    {isAdmin ? (
      <>
      <nav className="max-w-full "> 
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
  ) : (
      <>
      <p>hey there! sure you got the right key ?</p>
      </>
  )
    }
    </>
  );
}
