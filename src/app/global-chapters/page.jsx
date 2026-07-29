import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import GlobalChapters from '@/components/globalChapters/GlobalChapters';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Global Chapters"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <GlobalChapters />
            </LayoutStyle1>
        </>
    );
};

export default page;
