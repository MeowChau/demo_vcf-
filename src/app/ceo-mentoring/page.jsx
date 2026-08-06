import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import CeoMentoringDetails from '@/components/ceoMentoring/CeoMentoringDetails';

export const metadata = {
    title: "CEO Mentoring - Diễn đàn CEO Việt Nam"
}

const CeoMentoringPage = () => {
    return (
        <LayoutStyle1>
            <div style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#fff' }}>
                <CeoMentoringDetails />
            </div>
        </LayoutStyle1>
    );
};

export default CeoMentoringPage;
