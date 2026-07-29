import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import MembersDirectory from '@/components/membersDirectory/MembersDirectory';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Members Directory"
}

const MembersDirectoryPage = () => {
    return (
        <LayoutStyle1>
            <MembersDirectory />
        </LayoutStyle1>
    );
};

export default MembersDirectoryPage;
