import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import CLevelRegistrationForm from '@/components/registrationForms/CLevelRegistrationForm';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - C-level Registration"
}

const page = () => {
    return (
        <LayoutStyle1>
            <CLevelRegistrationForm />
        </LayoutStyle1>
    );
};

export default page;
