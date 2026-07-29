import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import MediaCoverage from '@/components/mediaCoverage/MediaCoverage';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Media Coverage"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <MediaCoverage />
            </LayoutStyle1>
        </>
    );
};

export default page;
