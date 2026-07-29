import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import Publications from '@/components/publications/Publications';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Publications"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <Publications />
            </LayoutStyle1>
        </>
    );
};

export default page;
