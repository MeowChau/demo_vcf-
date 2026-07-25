import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import PartnerWithUs from '@/components/partnerWithUs/PartnerWithUs';

export const metadata = {
    title: "Consua - Partner With Us"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <PartnerWithUs />
            </LayoutStyle1>
        </>
    );
};

export default page;
