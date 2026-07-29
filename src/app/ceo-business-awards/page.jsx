import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import CeoBusinessAwards from '@/components/ceoBusinessAwards/CeoBusinessAwards';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - CEO Business Awards"
}

const CeoBusinessAwardsPage = () => {
    return (
        <LayoutStyle1>
            <CeoBusinessAwards />
        </LayoutStyle1>
    );
};

export default CeoBusinessAwardsPage;
