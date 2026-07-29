import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import AboutUs from '@/components/aboutUs/AboutUs';
import React from 'react';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - About Us"
}

const AboutUsPage = () => {
    return (
        <>
            <LayoutStyle1>
                <AboutUs />
            </LayoutStyle1>
        </>
    );
};

export default AboutUsPage;
