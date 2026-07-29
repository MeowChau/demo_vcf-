import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import CiosOutlookForTech from '@/components/ciosOutlookForTech/CiosOutlookForTech';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - CIOs Outlook For Tech 2021"
}

const CiosOutlookForTechPage = () => {
    return (
        <LayoutStyle1>
            <CiosOutlookForTech />
        </LayoutStyle1>
    );
};

export default CiosOutlookForTechPage;
