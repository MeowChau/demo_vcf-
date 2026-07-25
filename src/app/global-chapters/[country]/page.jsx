import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import ChapterCommittee from '@/components/globalChapters/ChapterCommittee';

export const generateMetadata = async ({ params }) => {
    const resolvedParams = await params;
    const countryName = resolvedParams.country
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
        
    return {
        title: `Consua - ${countryName} Chapter Committee`
    }
}

const page = async ({ params }) => {
    const resolvedParams = await params;
    return (
        <>
            <LayoutStyle1>
                <ChapterCommittee countryName={resolvedParams.country} />
            </LayoutStyle1>
        </>
    );
};

export default page;
