import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import SubmitAnEvent from '@/components/submitAnEvent/SubmitAnEvent';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Submit An Event"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <SubmitAnEvent />
            </LayoutStyle1>
        </>
    );
};

export default page;
