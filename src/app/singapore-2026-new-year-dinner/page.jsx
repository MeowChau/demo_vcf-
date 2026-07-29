import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import SingaporeNewYearDinner2026 from '@/components/singaporeNewYearDinner2026/SingaporeNewYearDinner2026';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Singapore New Year Dinner 2026"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <SingaporeNewYearDinner2026 />
            </LayoutStyle1>
        </>
    );
};

export default page;
