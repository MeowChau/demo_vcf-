import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import HkMonthlyEvent from '@/components/hkMonthlyEvent/HkMonthlyEvent';

export const metadata = {
    title: "Consua - HK Monthly Event"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <HkMonthlyEvent />
            </LayoutStyle1>
        </>
    );
};

export default page;
