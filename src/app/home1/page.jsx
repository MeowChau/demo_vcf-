import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import HomeVideoSection from '@/components/about/HomeVideoSection';
import UpcomingEvents from '@/components/events/UpcomingEvents';
import HomeImageBanner from '@/components/events/HomeImageBanner';
import BannerStyle1 from '@/components/banner/BannerStyle1';
import BlogStyle1 from '@/components/blog/BlogStyle1';
import ProcessStyle1 from '@/components/process/ProcessStyle1';
import ServicesStyle1 from '@/components/services/ServicesStyle1';
import TeamStyle1 from '@/components/team/TeamStyle1';
import React from 'react';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Consulting Business React-NextJS Template"
}

const Home1 = () => {
    return (
        <>
            <LayoutStyle1>
                <BannerStyle1 />
                <HomeVideoSection />
                <UpcomingEvents />
                <HomeImageBanner />
                <ServicesStyle1 />
                <ProcessStyle1 />
                <TeamStyle1 sectionClass="bg-gray" teamTitle={true} />
                <BlogStyle1 sectionClass="bg-gray" />
            </LayoutStyle1>
        </>
    );
};

export default Home1;
