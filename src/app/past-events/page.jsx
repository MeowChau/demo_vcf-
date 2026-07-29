import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import PastEvents from '@/components/pastEvents/PastEvents';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Past Events"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <PastEvents />
            </LayoutStyle1>
        </>
    );
};

export default page;
