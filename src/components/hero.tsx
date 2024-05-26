import React from "react";

import Image from 'next/image'

import logo from '@/../public/logos/bannerlogo_2022.png'
import ParticleDesign from "./particles";

const HeroSec: React.FC = () => {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white text-center" style={{ backgroundImage: "url('/path/to/your/background-image.png')" }}>
            <ParticleDesign />
            <div className="flex flex-col items-center space-y-4">
                <div className="flex flex-row gap-x-2">
                    <Image className="lg:max-w-md max-w-xs" src={logo} alt="Space Apps Challenge 2024" />
                </div>
                <h1 className="text-4xl md:text-6xl font-bold">Space Apps Challenge 2024</h1>
                <h2 className="text-2xl md:text-3xl mt-4">Colombo, Sri Lanka</h2>
            </div>
        </main>
    );
}

export default HeroSec;
