import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import CSuiteMagazines from '@/components/cSuiteMagazines/CSuiteMagazines';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - C-Suite Magazines"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <CSuiteMagazines />
            </LayoutStyle1>
        </>
    );
};

export default page;
