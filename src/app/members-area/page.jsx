import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import MembershipIntro from '@/components/membersArea/MembershipIntro';
import MembershipTiers from '@/components/membersArea/MembershipTiers';
import StudentMember from '@/components/membersArea/StudentMember';
import CustomTestimonial from '@/components/membersArea/CustomTestimonial';

export const metadata = {
    title: "Consua - Members Area"
}

const MembersAreaPage = () => {
    return (
        <LayoutStyle1>
            {/* Membership Introduction */}
            <MembershipIntro />

            {/* Registration Tiers */}
            <MembershipTiers />

            {/* Student Member Card */}
            <StudentMember />

            {/* Testimonials */}
            <CustomTestimonial />
            
        </LayoutStyle1>
    );
};

export default MembersAreaPage;
