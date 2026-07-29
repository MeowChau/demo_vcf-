import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import LeadershipWorkshops from '@/components/leadershipWorkshops/LeadershipWorkshops';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Leadership Workshops"
}

const LeadershipWorkshopsPage = () => {
    return (
        <LayoutStyle1>
            <LeadershipWorkshops />
        </LayoutStyle1>
    );
};

export default LeadershipWorkshopsPage;
