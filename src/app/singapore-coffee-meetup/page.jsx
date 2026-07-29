import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import SingaporeCoffeeMeetup from '@/components/singaporeCoffeeMeetup/SingaporeCoffeeMeetup';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Singapore Coffee Meetup"
}

const SingaporeCoffeeMeetupPage = () => {
    return (
        <LayoutStyle1>
            <SingaporeCoffeeMeetup />
        </LayoutStyle1>
    );
};

export default SingaporeCoffeeMeetupPage;
