import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import SubmitArticles from '@/components/submitArticles/SubmitArticles';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Submit Articles"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <SubmitArticles />
            </LayoutStyle1>
        </>
    );
};

export default page;
