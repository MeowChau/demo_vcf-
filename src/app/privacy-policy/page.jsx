import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import PrivacyPolicy from '@/components/privacyPolicy/PrivacyPolicy';

export const metadata = {
    title: "Consua - Privacy Policy"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <PrivacyPolicy />
            </LayoutStyle1>
        </>
    );
};

export default page;
