import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import WeeklyNewsletter from '@/components/weeklyNewsletter/WeeklyNewsletter';

export const metadata = {
    title: "Consua - Weekly Newsletter"
}

const WeeklyNewsletterPage = () => {
    return (
        <LayoutStyle1>
            <WeeklyNewsletter />
        </LayoutStyle1>
    );
};

export default WeeklyNewsletterPage;
