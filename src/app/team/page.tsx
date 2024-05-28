import React from 'react';
import TeamCard from '@/components/team/teamCard';
import FooterSec from '@/components/footerSec';
import NavBar from '@/components/navbar';
import teamData from './team.json'; // Import the JSON data

interface UniversityMember {
    name: string;
    imageUrl: string;
}

interface Universities {
    [key: string]: UniversityMember[];
}

const imageUrlPath = 'https://test1.ko-de.org/spaceApps/';

const generateImageUrl = (imageUrl: string) => {
    
    return `${imageUrlPath}${imageUrl}`;
};

// Use data from the imported JSON
const hosts = teamData.hosts;
const cohosts = teamData.cohosts;
const universities: Universities = teamData.universities;

// Update imageUrl for university members
Object.keys(universities).forEach(university => {
    universities[university] = universities[university].map(member => ({
        ...member,
        imageUrl: generateImageUrl(member.imageUrl)
    }));
});

const Page: React.FC = () => {
    return (
        <>
            <NavBar />
            <div className="min-h-screen bg-dark text-white py-12 pt-40">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center mb-16">The <span className="text-pink-500">Team</span></h2>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">Hosts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {hosts.map((member, index) => (
                                <TeamCard key={index} name={member.name} imageUrl={member.imageUrl} />
                            ))}
                        </div>
                    </div>

                    <div className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">Co-Hosts</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {cohosts.map((member, index) => (
                                <TeamCard key={index} name={member.name} imageUrl={member.imageUrl} />
                            ))}
                        </div>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold text-center mb-8">Team Members</h3>
                        {Object.keys(universities).map((university, index) => (
                            <div key={index} className="mb-12">
                                <h4 className="text-xl font-semibold text-center mb-4">{university}</h4>
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {universities[university].map((member, memberIndex) => (
                                        <TeamCard key={memberIndex} name={member.name} imageUrl={member.imageUrl} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <FooterSec />
        </>
    );
};

export default Page;
