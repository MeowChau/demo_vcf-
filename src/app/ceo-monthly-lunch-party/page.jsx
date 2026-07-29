import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import CeoMonthlyLunchParty from '@/components/ceoMonthlyLunchParty/CeoMonthlyLunchParty';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - CEO Monthly Lunch Party"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <CeoMonthlyLunchParty />
            </LayoutStyle1>
        </>
    );
};

export default page;
