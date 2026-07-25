import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import Partnership from '@/components/partnership/Partnership';

export const metadata = {
    title: "Consua - Partnership"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <Partnership />
            </LayoutStyle1>
        </>
    );
};

export default page;
