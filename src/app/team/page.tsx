import React from 'react';
import TeamCard from '@/components/team/teamCard';
import FooterSec from '@/components/footerSec';
import NavBar from '@/components/navbar';
import teamData from './team.json'; // Import the JSON data
import ParticleDesign from '@/components/particles';

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
            <div className="flex flex-col items-center bg-dark text-white pt-40">
                <ParticleDesign />
                <div className="w-full max-w-7xl px-4 py-12">
                    <h2 className="text-4xl font-bold text-center mb-16">The <span className="text-pink-500">Team</span></h2>

                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">Hosts</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {hosts.map((member, index) => (
                                <TeamCard key={index} name={member.name} imageUrl={member.imageUrl} />
                            ))}
                        </div>
                    </section>

                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">Co-Hosts</h3>
                        <div className="flex flex-wrap justify-center gap-8">
                            {cohosts.map((member, index) => (
                                <TeamCard key={index} name={member.name} imageUrl={member.imageUrl} />
                            ))}
                        </div>
                    </section>

                    <section className="mb-16">
                        <h3 className="text-2xl font-bold text-center mb-8">Team Members</h3>
                        {Object.keys(universities).map((university, index) => (
                            <div key={index} className="mb-12">
                                <h4 className="text-xl font-semibold text-center mb-8">{university}</h4>
                                <div className="flex flex-wrap justify-center gap-8">
                                    {universities[university].map((member, memberIndex) => (
                                        <TeamCard key={memberIndex} name={member.name} imageUrl={member.imageUrl} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>
                </div>
            </div>
            <FooterSec />
        </>
    );
};

export default Page;
