import React from 'react';
import TeamCard from '@/components/team/teamCard';
import FooterSec from '@/components/footerSec';
import NavBar from '@/components/navbar';

interface UniversityMember {
    name: string;
    imageUrl: string;
}

interface Universities {
    [key: string]: UniversityMember[];
}

const hosts = [
    { role: 'Sri Lanka Local Lead', name: 'Anupa Kulathunga', imageUrl: '/path/to/image1.jpg' },
];

const cohosts = [
    { role: 'Co-Hosts', name: 'Suvin Kodituwakku', imageUrl: '/path/to/image2.jpg' },
    { role: 'Co-Hosts', name: 'Uthpala Nethmini', imageUrl: '/path/to/image3.jpg' },
    { role: 'Co-Hosts', name: 'Dilshan Wijerathne', imageUrl: '/path/to/image4.jpg' },
];

const universities: Universities = {
    'University of Peradeniya': [
        { name: 'Supal Edirisinghe', imageUrl: '/path/to/image5.jpg' },
        { name: 'Pulathisi Navarathne', imageUrl: '/path/to/image6.jpg' },
    ],
    'University of Colombo': [
        { name: 'Manul Madara', imageUrl: '/path/to/image7.jpg' },
    ],
    'Open University of Sri Lanka': [
        { name: 'Ishan Pramuditha', imageUrl: '/path/to/image8.jpg' },
        { name: 'Akeela Bhanu', imageUrl: '/path/to/image9.jpg' },
    ],
    'University of Moratuwa': [
        { name: 'Warnitha Nipun', imageUrl: '/path/to/image10.jpg' },
    ],
    'Sabaragamuwa University of Sri Lanka': [
        { name: 'Thilosha Nipuni', imageUrl: '/path/to/image11.jpg' },
        { name: 'Kavinda Wishwajith', imageUrl: '/path/to/image12.jpg' },
    ],
    'Sri Lanka Institute of Information Technology': [
        { name: 'Thimira Chandrasekara', imageUrl: '/path/to/image13.jpg' },
    ],
    'Sri Lanka Technological Campus': [
        { name: 'Member Name', imageUrl: '/path/to/image14.jpg' },
    ],
};

const Page: React.FC = () => {
    return (
        <>
        <NavBar />
        <div className="min-h-screen bg-dark text-white py-12 pt-40">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-center mb-8">The <span className="text-pink-500">Team</span></h2>

                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center mb-8">Hosts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hosts.map((member, index) => (
                            <TeamCard key={index}  name={member.name} imageUrl={member.imageUrl} />
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center mb-8">Co-Hosts</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {cohosts.map((member, index) => (
                            <TeamCard key={index}  name={member.name} imageUrl={member.imageUrl} />
                        ))}
                    </div>
                </div>

                <div className="mb-12">
                    <h3 className="text-3xl font-bold text-center mb-8">Team Members</h3>
                    {Object.keys(universities).map((university, index) => (
                        <div key={index} className="mb-12">
                            <h4 className="text-2xl font-semibold text-center mb-4">{university}</h4>
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
