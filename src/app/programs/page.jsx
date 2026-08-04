import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import ProgramEventsCarousel from '@/components/programs/ProgramEventsCarousel';

export const metadata = {
    title: "Chương trình - Diễn đàn CEO Việt Nam"
}

const ProgramsPage = () => {
    return (
        <LayoutStyle1>
            <ProgramEventsCarousel />
        </LayoutStyle1>
    );
};

export default ProgramsPage;
