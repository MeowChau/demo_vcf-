import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import AmbassadorPortalForm from '@/components/ambassadors/AmbassadorPortalForm';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Ambassador Portal"
}

const AmbassadorsPage = () => {
    return (
        <LayoutStyle1>
            <AmbassadorPortalForm />
        </LayoutStyle1>
    );
};

export default AmbassadorsPage;
