import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import ContactOurMembers from '@/components/contactOurMembers/ContactOurMembers';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Contact Our Members"
}

const ContactOurMembersPage = () => {
    return (
        <LayoutStyle1>
            <ContactOurMembers />
        </LayoutStyle1>
    );
};

export default ContactOurMembersPage;
