import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import FounderMagazines from '@/components/founderMagazines/FounderMagazines';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Founder Magazines"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <FounderMagazines />
            </LayoutStyle1>
        </>
    );
};

export default page;
