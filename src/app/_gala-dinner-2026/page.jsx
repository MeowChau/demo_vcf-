import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import GalaDinner2026 from '@/components/galaDinner2026/GalaDinner2026';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Gala Dinner 2026"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <GalaDinner2026 />
            </LayoutStyle1>
        </>
    );
};

export default page;
