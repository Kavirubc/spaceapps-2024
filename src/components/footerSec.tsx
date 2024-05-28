import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Youtube, Twitter, Linkedin, Phone, Mail } from 'lucide-react';

const FooterSec: React.FC = () => {
    return (
        <footer className="bg-black/80  text-white py-12">
            <div className="container mx-4 md:mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-pink-500 text-lg font-bold mb-4">Useful Links</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:underline">Space Apps Challenge</Link></li>
                        <li><Link href="#" className="hover:underline">NASA&apos; Open Data Universe</Link></li>
                        <li><Link href="#" className="hover:underline">Space Apps COVID-19</Link></li>
                        <li><Link href="#" className="hover:underline">Participant FAQ</Link></li>
                        <li><Link href="#" className="hover:underline">COVID-19 Bootcamp</Link></li>
                        <li><Link href="#" className="hover:underline">2019 Live Stream</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-pink-500 text-lg font-bold mb-4">Resources</h3>
                    <ul className="space-y-2">
                        <li><Link href="#" className="hover:underline">2022 Virtual Bootcamp</Link></li>
                        <li><Link href="#" className="hover:underline">2022 Judging and Awards</Link></li>
                        <li><Link href="#" className="hover:underline">2022 Team Formation Guide</Link></li>
                        <li><Link href="#" className="hover:underline">2022 FAQ</Link></li>
                        <li><Link href="#" className="hover:underline">2022 Project Submission Guide</Link></li>
                        <li><Link href="#" className="hover:underline">2022 Project Demo Guide</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-pink-500 text-lg font-bold mb-4">Our Social Media</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="https://www.facebook.com" aria-label="Facebook" className="flex items-center space-x-2 text-pink-500 hover:text-white">
                                <Facebook className="w-6 h-6" />
                                <span className='text-white'>Facebook</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com" aria-label="Instagram" className="flex items-center space-x-2 text-pink-500 hover:text-white">
                                <Instagram className="w-6 h-6" />
                                <span className='text-white'>Instagram</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.youtube.com" aria-label="YouTube" className="flex items-center space-x-2 text-pink-500 hover:text-white">
                                <Youtube className="w-6 h-6" />
                                <span className='text-white'>YouTube</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.twitter.com" aria-label="Twitter" className="flex items-center space-x-2 text-pink-500 hover:text-white">
                                <Twitter className="w-6 h-6" />
                                <span className='text-white'>Twitter</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.linkedin.com" aria-label="LinkedIn" className="flex items-center space-x-2 text-pink-500 hover:text-white">
                                <Linkedin className="w-6 h-6" />
                                <span className='text-white'>LinkedIn</span>
                            </Link>
                        </li>
                    </ul>

                </div>
                <div>
                    <h3 className="text-pink-500 text-lg font-bold mb-4">Contact Us</h3>
                    <ul className="space-y-2">
                        <li className="flex items-center"><Phone className="w-6 h-6 mr-2" />+94 71 206 8707</li>
                        <li className="flex items-center"><Mail className="w-6 h-6 mr-2" />info@spaceappscolombo.org</li>
                        <li>SEDS Sri Lanka, Colombo</li>
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                <p>Copyright © 2024 SEDS Sri Lanka. All Rights Reserved</p>
            </div>
        </footer>
    );
};

export default FooterSec;
