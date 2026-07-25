import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import JoinUsIntro from '@/components/joinUs/JoinUsIntro';
import CustomTestimonial from '@/components/membersArea/CustomTestimonial';
import JoinUsTiers from '@/components/joinUs/JoinUsTiers';
import JoinUsCards from '@/components/joinUs/JoinUsCards';

export const metadata = {
    title: "Consua - Join Us"
}

const JoinUsPage = () => {
    return (
        <LayoutStyle1>
            {/* Join Us Introduction */}
            <JoinUsIntro />

            {/* Testimonials (Reused from Members Area) */}
            <CustomTestimonial />

            {/* Registration Tiers */}
            <JoinUsTiers />

            {/* Virtual Membership Cards */}
            <JoinUsCards />
            
        </LayoutStyle1>
    );
};

export default JoinUsPage;
