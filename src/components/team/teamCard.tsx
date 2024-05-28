import Image from 'next/image';
import React from 'react';

interface TeamCardProps {
    name: string;
    imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, imageUrl }) => {
    const [firstName, lastName] = name.split(' ');

    return (
        <div className="bg-white rounded-lg p-4 text-center shadow-lg hover:scale-105 transition-transform duration-300 md:mx-0 mx-14">

            
            <img src={imageUrl} width={96} height={96} alt={name} className="rounded-full w-24 h-24 mx-auto my-4" />
            <h4 className="text-lg font-bold text-black">{firstName} <span className="text-pink-500">{lastName}</span></h4>
        </div>
    );
};

export default TeamCard;
