import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import VentureCapitalistMagazines from '@/components/ventureCapitalistMagazines/VentureCapitalistMagazines';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Venture Capitalist Magazines"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <VentureCapitalistMagazines />
            </LayoutStyle1>
        </>
    );
};

export default page;
