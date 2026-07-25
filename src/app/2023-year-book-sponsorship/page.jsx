import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import YearbookSponsorship from '@/components/yearbookSponsorship/YearbookSponsorship';

export const metadata = {
    title: "Consua - 2023 Yearbook Sponsorship"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <YearbookSponsorship />
            </LayoutStyle1>
        </>
    );
};

export default page;
