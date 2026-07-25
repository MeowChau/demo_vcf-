import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import CorporateRegistrationForm from '@/components/registrationForms/CorporateRegistrationForm';

export const metadata = {
    title: "Consua - Corporate Membership Registration"
}

const page = () => {
    return (
        <LayoutStyle1>
            <CorporateRegistrationForm />
        </LayoutStyle1>
    );
};

export default page;
