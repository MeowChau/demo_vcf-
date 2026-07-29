import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import SponsorOurEvent from '@/components/sponsorOurEvent/SponsorOurEvent';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Sponsor Our Event"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <SponsorOurEvent />
            </LayoutStyle1>
        </>
    );
};

export default page;
