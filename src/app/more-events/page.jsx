import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import MoreEvents from '@/components/moreEvents/MoreEvents';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - More Events"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <MoreEvents />
            </LayoutStyle1>
        </>
    );
};

export default page;
