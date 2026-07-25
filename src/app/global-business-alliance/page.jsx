import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import GlobalBusinessAlliance from '@/components/globalBusinessAlliance/GlobalBusinessAlliance';

export const metadata = {
    title: "Consua - Global Business Alliance"
}

const GlobalBusinessAlliancePage = () => {
    return (
        <LayoutStyle1>
            <GlobalBusinessAlliance />
        </LayoutStyle1>
    );
};

export default GlobalBusinessAlliancePage;
