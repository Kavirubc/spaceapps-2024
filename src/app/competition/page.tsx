import React from 'react';
import CompetitionGuidelines from '@/components/competition/competitionGuidelines'
import NavBar from '@/components/navbar';
import FooterSec from '@/components/footerSec';

const Page: React.FC = () => {
    return (
        <>
        <NavBar />
        <div className='pt-40'>
            <CompetitionGuidelines />
        </div>
        <FooterSec />
        </>
    );
};

export default Page;
