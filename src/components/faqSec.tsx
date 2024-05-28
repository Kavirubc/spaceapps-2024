'use client'
import Image from 'next/image';
import React, { useState } from 'react';

import faqImg from "@/../public/images/faq.png"

const FaqSec: React.FC = () => {
    const [open, setOpen] = useState<number | null>(null);

    const toggle = (index: number) => {
        setOpen(open === index ? null : index);
    };

    const faqs = [
        {
            question: 'What is the NASA International Space Apps Challenge 2022?',
            answer: 'On October 1-2, NASA is inviting coders, entrepreneurs, scientists, designers, storytellers, makers, builders, artists, and technologists to come together in a global, virtual hackathon. During a period of 48 hours, participants from around the world will come together to create virtual teams and solve challenges using NASA’s open-source data.',
        },
        {
            question: 'What is the purpose of Space Apps?',
            answer: 'The purpose of Space Apps is to engage with communities to develop innovative solutions to challenges we face on Earth and in space.',
        },
        {
            question: 'What is the theme of Space Apps for 2022?',
            answer: 'The theme for 2022 is "Make Space", focusing on inclusion, innovation, and exploration.',
        },
        {
            question: 'Who should participate in Space Apps?',
            answer: 'Anyone with a passion for space and innovation can participate. This includes coders, scientists, designers, storytellers, makers, builders, and technologists.',
        },
        {
            question: 'What social media is used for Space Apps?',
            answer: 'Space Apps uses platforms like Facebook, Instagram, YouTube, Twitter, and LinkedIn to engage with participants.',
        },
        {
            question: 'What is the "Virtual Bootcamp"?',
            answer: 'The "Virtual Bootcamp" is a series of online workshops and events to help participants prepare for the hackathon.',
        },
    ];

    return (
        <div className="flex flex-col justify-center items-center lg:space-x-8 p-8 bg-dark text-white min-h-screen">
            <h2 className="text-4xl font-bold text-white mb-36">
                The <span className="text-pink-500">FAQs</span>
            </h2>
            <div className='flex flex-col lg:flex-row '>
            <div className="lg:w-1/2 w-full content-center">
                <Image src={faqImg} alt="Astronaut" className="md:w-3/4 w-full  h-auto"  />
            </div>
           
            <div className="lg:w-1/2 w-full mt-8 lg:mt-0 z-0">
                
                <div className=" bg-white/10 backdrop-blur-md mt-2 p-6 rounded-xl">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border-b border-gray-600">
                            <button
                                onClick={() => toggle(index)}
                                className="w-full text-left py-4 focus:outline-none flex justify-between items-center text-xl text-purple-500"
                            >
                                {faq.question}
                                <span className="text-purple-500">{open === index ? '▲' : '▼'}</span>
                            </button>
                            {open === index && <div className="py-4 text-lg text-white">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </div>
    );
}

export default FaqSec;

