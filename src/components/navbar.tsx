'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        
        <nav className="bg-black text-white py-6 fixed w-full bg-gray-900/80 backdrop-blur-sm">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    {/* <img src="path/to/logo.png" alt="NASA Space Apps Colombo" className="h-8" /> */}
                    <span className="ml-2 md:text-xl font-bold">NASA SPACE APPS COLOMBO</span>
                </div>
                <div className="hidden md:flex space-x-4">
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
                <div className="md:hidden flex items-center mx-2">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden mt-2">
                    <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Home</Link>
                    <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Competition</Link>
                    <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Challenges</Link>
                    <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Timeline</Link>
                    <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Team</Link>
                    <Link href="#" className="block py-2 px-4 text-sm hover:bg-gray-700">Hall of Fame</Link>
                </div>
            )}
        </nav>
       
    );
};

export default NavBar;
