import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import BannerStyle1 from '@/components/banner/BannerStyle1';
import CeoKnowledge from '@/components/about/CeoKnowledge';
import CeoEvents from '@/components/about/CeoEvents';
import CeoStatsHome from '@/components/home/CeoStatsHome';
import CeoVideoCarousel from '@/components/home/CeoVideoCarousel';
import React from 'react';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Consulting Business React-NextJS Template"
}

const Home1 = () => {
    return (
        <>
            <LayoutStyle1>
                <BannerStyle1 />
                <CeoKnowledge />
                <CeoEvents />
                <CeoStatsHome />
                <CeoVideoCarousel />
            </LayoutStyle1>
        </>
    );
};

export default Home1;
