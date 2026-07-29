import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import GuestSpeakerRegistration from '@/components/guestSpeakerRegistration/GuestSpeakerRegistration';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Guest Speaker Registration"
}

const page = () => {
    return (
        <>
            <LayoutStyle1>
                <GuestSpeakerRegistration />
            </LayoutStyle1>
        </>
    );
};

export default page;
