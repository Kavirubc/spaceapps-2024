import React from 'react';
import CompetitionGuidelines from '@/components/competition/competitionGuidelines'
import NavBar from '@/components/navbar';
import FooterSec from '@/components/footerSec';

const Page: React.FC = () => {
    return (
        <>
            <NavBar />

            <div className='flex flex-col items-center justify-center pt-32 '>
                <div className='max-w-7xl'>
                    <CompetitionGuidelines />
                </div>
            </div>
            <FooterSec />
        </>
    );
};

export default Page;
