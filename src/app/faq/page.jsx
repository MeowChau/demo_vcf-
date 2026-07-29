import LayoutStyle7 from '@/components/Layouts/LayoutStyle7';
import FaqStyle2 from '@/components/faq/FaqStyle2';
import React from 'react';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Consulting Business - Faq"
}

const FaqPage = () => {
    return (
        <>
            <LayoutStyle7 breadCrumb="FAQ" title="Frequently Asked Question">
                <FaqStyle2 fullFaq={true}/>
            </LayoutStyle7>
        </>
    );
};

export default FaqPage;
