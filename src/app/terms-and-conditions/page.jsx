import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import TermsAndConditions from '@/components/termsAndConditions/TermsAndConditions';

export const metadata = {
    title: "Consua - Terms and Conditions"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <TermsAndConditions />
            </LayoutStyle1>
        </>
    );
};

export default page;
