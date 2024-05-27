import React from 'react';
import { Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

const AboutUs: React.FC = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start lg:space-x-8 p-8 bg-dark text-white min-h-screen">
            <div className="lg:w-1/2 w-full">
                <iframe
                    width="100%"
                    height="315"
                    src="https://www.youtube.com/embed/39WSi3JKMIs?si=OZ4xtHmKZ5-p25gS"
                    title="NASA Space Apps Challenge is back again!"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="rounded-lg"
                ></iframe>
            </div>
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0">
                <h2 className="text-4xl font-bold text-white">
                    About <span className="text-pink-500">US</span>
                </h2>
                <p className="mt-4 text-lg">
                    We are proud and thrilled to announce ‘NASA Space Apps Colombo, 2022’
                    International hackathon event in Sri Lanka for the third consecutive year.
                    In line with NASA’s guidelines and direct collaboration. The event is organized by
                    <span className="text-pink-500"> SEDS Sri Lanka </span>
                    , which is the international body that strives to promote space exploration
                    and development via educational and engineering projects.
                </p>
                <p className="mt-4 text-lg">
                    Find out more about NASA Space Apps Colombo from our Social Media Channels.
                </p>
                <div className="flex space-x-4 mt-4">
                    <Link href="https://www.facebook.com" aria-label="Facebook" className="text-pink-500 hover:text-white">
                        <Facebook className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.instagram.com" aria-label="Instagram" className="text-pink-500 hover:text-white">
                        <Instagram className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.youtube.com" aria-label="YouTube" className="text-pink-500 hover:text-white">
                        <Youtube className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.twitter.com" aria-label="Twitter" className="text-pink-500 hover:text-white">
                        <Twitter className="w-6 h-6" />
                    </Link>
                    <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="text-pink-500 hover:text-white">
                        <Linkedin className="w-6 h-6" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AboutUs;
