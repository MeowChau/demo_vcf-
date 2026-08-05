import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import KnowledgeDetails from '@/components/knowledge/KnowledgeDetails';

export const metadata = {
    title: "Chi tiết bài viết - Diễn đàn CEO Việt Nam"
};

const TriThucDetailsPage = async ({ params }) => {
    const { id } = await params;
    return (
        <LayoutStyle1>
            <div style={{ paddingTop: '150px', paddingBottom: '100px' }}>
                <KnowledgeDetails id={id} />
            </div>
        </LayoutStyle1>
    );
};

export default TriThucDetailsPage;
