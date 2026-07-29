import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import CommunityGovRelations from '@/components/community/CommunityGovRelations';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Community & Government Relations"
}

const CommunityGovRelationsPage = () => {
    return (
        <LayoutStyle1>
            <CommunityGovRelations />
        </LayoutStyle1>
    );
};

export default CommunityGovRelationsPage;
