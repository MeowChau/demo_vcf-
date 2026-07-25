import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import MemberBenefits from '@/components/memberBenefits/MemberBenefits';

export const metadata = {
    title: "Consua - Member Benefits"
}

const MemberBenefitsPage = () => {
    return (
        <LayoutStyle1>
            <MemberBenefits />
        </LayoutStyle1>
    );
};

export default MemberBenefitsPage;
