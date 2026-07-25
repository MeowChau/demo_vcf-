import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import MemberDetail from '@/components/membersDirectory/MemberDetail';

export const metadata = {
    title: "Consua - Member Directory"
}

const page = ({ params }) => {
    return (
        <>
            <LayoutStyle1>
                <MemberDetail id={params.id} />
            </LayoutStyle1>
        </>
    );
};

export default page;
