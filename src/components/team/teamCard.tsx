import React from 'react';

interface TeamCardProps {
    name: string;
    imageUrl: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, imageUrl }) => {

    
    
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-lg shadow-slate-900 text-center shadow-md hover:scale-105 transition-transform duration-300 p-6 md:p-8 w-64 h-48 flex flex-col justify-center items-center">
            <img src={imageUrl} alt={name} className="rounded-full w-20 h-20 mb-4" />
            <h4 className="text-lg font-bold text-white break-words leading-tight">
                {name}
            </h4>
        </div>
    );
};

export default TeamCard;
