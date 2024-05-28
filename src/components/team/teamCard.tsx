import Image from 'next/image';
import React from 'react';

interface TeamCardProps {
    name: string;
    imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, imageUrl }) => {
    const [firstName, lastName] = name.split(' ');

    return (
        <div className="bg-white rounded-lg p-4 text-center shadow-lg">
            
            <Image src={imageUrl} width={96} height={96} alt={name} className="rounded-full mx-auto mb-2" />
            <h4 className="text-xl font-bold text-black">{firstName} <span className="text-pink-500">{lastName}</span></h4>
        </div>
    );
};

export default TeamCard;
