import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import ReferralProgram from '@/components/referralProgram/ReferralProgram';

export const metadata = {
    title: "Consua - Referral Program"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <ReferralProgram />
            </LayoutStyle1>
        </>
    );
};

export default page;
