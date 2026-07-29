import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import AseanBusinessHub from '@/components/aseanBusinessHub/AseanBusinessHub';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - ASEAN Business Hub Selangor Malaysia"
}

const AseanBusinessHubPage = () => {
    return (
        <LayoutStyle1>
            <AseanBusinessHub />
        </LayoutStyle1>
    );
};

export default AseanBusinessHubPage;
