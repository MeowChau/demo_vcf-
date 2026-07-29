import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import ContactUs from '@/components/contactUs/ContactUs';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Contact Us"
}

const ContactUsPage = () => {
    return (
        <>
            <LayoutStyle1>
                <ContactUs />
            </LayoutStyle1>
        </>
    );
};

export default ContactUsPage;
