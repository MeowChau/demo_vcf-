import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import GlobalBusinessRegistrationForm from '@/components/registrationForms/GlobalBusinessRegistrationForm';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Global Business Alliance Membership Registration"
}

const page = () => {
    return (
        <LayoutStyle1>
            <GlobalBusinessRegistrationForm />
        </LayoutStyle1>
    );
};

export default page;
