import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import AsiaCeoMagazine from '@/components/asiaCeoMagazine/AsiaCeoMagazine';

export const metadata = {
    title: "Consua - Asia CEO Magazine"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <AsiaCeoMagazine />
            </LayoutStyle1>
        </>
    );
};

export default page;
