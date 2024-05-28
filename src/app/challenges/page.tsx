import React from 'react';
import ChallengesCard from '@/components/challanges/challangesCard';
import NavBar from '@/components/navbar';
import FooterSec from '@/components/footerSec';

const challenges = [
    {
        title: 'Build a Space Biology Superhero',
        description: 'Space exploration involves overcoming numerous challenges: extreme gravity, disrupted sleep and circadian rhythms, limited supplies and access to medical care, etc. Your challenge is to design a platform that allows users to explore space travel stresses, understand how diverse organisms deal with these stresses, and then build a "Space Biology Superhero" by combining features from these organisms.',
        imageUrl: '/path/to/image1.jpg',
    },
    {
        title: 'Calling All Radio Enthusiasts!',
        description: 'Data from the amateur radio International Space Station (ISS) broadcast and reception systems and networks of ham radio broadcasters can be utilized for applied Heliophysics research. Your challenge is to develop an application that uses these datasets to construct and display images of Earth’s ionosphere.',
        imageUrl: '/path/to/image2.jpg',
    },
    {
        title: 'Can AI Preserve Our Science Legacy?',
        description: 'The NASA Technical Report Server (NTRS) includes hundreds of thousands of items containing scientific and technical information (STI) created or funded by NASA. Imagine how difficult it can be to locate desired information in such a large repository! Your challenge is to develop a technique using Artificial Intelligence (AI) to improve the accessibility and discoverability of records in the public NTRS.',
        imageUrl: '/path/to/image3.jpg',
    },
    {
        title: 'Capacity Building Resources Gateway',
        description: 'Earth Observations (EO) can help policymakers around the world make more informed decisions to address natural disasters, land management issues, the impact of climate change, and other environmental issues. However, policymakers and community members first need to develop the capacity (knowledge and skills) to use EO in their work. Your challenge is to create a Capacity Building Resources Gateway.',
        imageUrl: '/path/to/image4.jpg',
    },
    {
        title: 'Create Your Own Challenge',
        description: 'Participants are invited to create their own challenge to tackle, but these are not eligible for Global Judging.',
        imageUrl: '/path/to/image5.jpg',
    },
    {
        title: 'Creative Data Display with the Parker Solar Probe',
        description: 'Several spacecraft, including the Parker Solar Probe, are gathering data about the Sun that will enable us to learn more about solar effects (a.k.a. “space weather”) in space and on Earth. Your challenge is to create an interactive tool to represent this data in a new and inviting way that improves public knowledge and understanding of space weather.',
        imageUrl: '/path/to/image6.jpg',
    },
];

const Page: React.FC = () => {
    return (
        <>
        <NavBar />
        <div className="min-h-screen bg-dark text-white pt-40 py-12">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8 md:mb-20">Challanges</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {challenges.map((challenge, index) => (
                        <ChallengesCard
                            key={index}
                            title={challenge.title}
                            description={challenge.description}
                            imageUrl={challenge.imageUrl}
                        />
                    ))}
                </div>
            </div>
        </div>
        <FooterSec />
        </>
    );
};

export default Page;
