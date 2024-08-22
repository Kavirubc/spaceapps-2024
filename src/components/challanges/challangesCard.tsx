import Image from 'next/image';
import React from 'react';

interface ChallengesCardProps {
    title: string;
    description: string;
    imageUrl: string;
}

const ChallengesCard: React.FC<ChallengesCardProps> = ({ title, description, imageUrl }) => {
    return (
        <div className="bg-white rounded-lg p-4 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
            <Image src={imageUrl} height={160} width={160} alt={title} className="w-full  object-cover rounded-t-lg mb-4" />
            <h3 className="text-xl font-bold text-pink-500 mb-2">{title}</h3>
            <p className="text-gray-800">{description}</p>
        </div>
    );
};

export default ChallengesCard;
