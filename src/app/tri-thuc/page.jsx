import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import KnowledgeContent from '@/components/knowledge/KnowledgeContent';

export const metadata = {
    title: "Tri thức - Diễn đàn CEO Việt Nam"
}

const TriThucPage = () => {
    return (
        <LayoutStyle1>
            <div style={{ paddingTop: '150px', paddingBottom: '100px' }}>
                <KnowledgeContent />
            </div>
        </LayoutStyle1>
    );
};

export default TriThucPage;
