import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import MemberRequests from '@/components/memberRequests/MemberRequests';

export const metadata = {
    title: "Consua - Member Requests"
}

const MemberRequestsPage = () => {
    return (
        <LayoutStyle1>
            <MemberRequests />
        </LayoutStyle1>
    );
};

export default MemberRequestsPage;
