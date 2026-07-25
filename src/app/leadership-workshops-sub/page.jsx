import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import LeadershipWorkshopsSub from '@/components/leadershipWorkshopsSub/LeadershipWorkshopsSub';

export const metadata = {
    title: "Consua - Leadership Workshops"
}

const LeadershipWorkshopsSubPage = () => {
    return (
        <LayoutStyle1>
            <LeadershipWorkshopsSub />
        </LayoutStyle1>
    );
};

export default LeadershipWorkshopsSubPage;
