import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import SocialResponsibility from '@/components/socialResponsibility/SocialResponsibility';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Social Responsibility"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <SocialResponsibility />
            </LayoutStyle1>
        </>
    );
};

export default page;
