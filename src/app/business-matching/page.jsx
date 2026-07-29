import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import BusinessMatchingPortal from '@/components/businessMatching/BusinessMatchingPortal';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Business Matching"
}

const BusinessMatchingPage = () => {
    return (
        <LayoutStyle1>
            <BusinessMatchingPortal />
        </LayoutStyle1>
    );
};

export default BusinessMatchingPage;
