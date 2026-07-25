import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import AdvertiseWithUs from '@/components/advertiseWithUs/AdvertiseWithUs';

export const metadata = {
    title: "Consua - Advertise With Us"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <AdvertiseWithUs />
            </LayoutStyle1>
        </>
    );
};

export default page;
