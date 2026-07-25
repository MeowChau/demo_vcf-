import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import EventsNetworking from '@/components/eventsNetworking/EventsNetworking';

export const metadata = {
    title: "Consua - Events & Networking"
}

const EventsNetworkingPage = () => {
    return (
        <LayoutStyle1>
            <EventsNetworking />
        </LayoutStyle1>
    );
};

export default EventsNetworkingPage;
