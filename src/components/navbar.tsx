'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import logo from '@/../public/logos/nav-logo.png'

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className='flex flex-col items-center  md:mt-3'>
        <div className="text-white py-6 fixed w-full  bg-white/10 backdrop-blur-sm z-50 max-w-6xl rounded-none md:rounded-3xl md:border border-opacity-45 border-violet-800">
            <div className="md:mx-10 mx-2 flex justify-between text-sm">
                <div className="flex items-center">
                    <Link href="/" className="flex items-center">
                        <Image src={logo.src} alt="NASA Space Apps Colombo" width={100} height={100} />
                        SpaceApps
                    </Link>
                </div>
                <div className="hidden md:flex space-x-4 items-center">
                    <Link href="/" className="group relative">
                        Home
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                    <Link href="/competition" className="group relative">
                        Competition
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                    <Link href="/challenges" className="group relative">
                        Challenges
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                    <Link href="/timeline" className="group relative">
                        Timeline
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                    <Link href="/team" className="group relative">
                        Team
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                    <Link href="/hall-of-fame" className="group relative">
                        Hall of Fame
                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-white transition-all duration-500 group-hover:w-full"></span>
                    </Link>
                </div>
                <div className="md:hidden flex items-center mr-2">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-4 text-center">
                    <Link href="/" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</Link>
                    <Link href="/competition" className="block py-2 px-4 text-sm hover:bg-gray-700">Competition</Link>
                    <Link href="/challenges" className="block py-2 px-4 text-sm hover:bg-gray-700">Challenges</Link>
                    <Link href="/timeline" className="block py-2 px-4 text-sm hover:bg-gray-700">Timeline</Link>
                    <Link href="/team" className="block py-2 px-4 text-sm hover:bg-gray-700">Team</Link>
                    <Link href="/hall-of-fame" className="block py-2 px-4 text-sm hover:bg-gray-700">Hall of Fame</Link>
                </div>
            )}
        </div>
        </nav>
    );
};

export default NavBar;
