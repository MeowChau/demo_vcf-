import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import Testimonials from '@/components/testimonials/Testimonials';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Testimonials"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <Testimonials />
            </LayoutStyle1>
        </>
    );
};

export default page;
