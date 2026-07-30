import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import CeoFaq from '@/components/faq/CeoFaq';
import CeoMentoring from '@/components/about/CeoMentoring';
import CeoStats from '@/components/about/CeoStats';
import CeoIntro from '@/components/about/CeoIntro';
import CeoValues from '@/components/about/CeoValues';
import CeoMentors from '@/components/about/CeoMentors';
import CeoFormats from '@/components/about/CeoFormats';
import CeoTestimonials from '@/components/about/CeoTestimonials';
import CeoVideos from '@/components/about/CeoVideos';
import CeoSteps from '@/components/about/CeoSteps';
import BannerStyle1 from '@/components/banner/BannerStyle1';
import TeamStyle2 from '@/components/team/TeamStyle2';
import React from 'react';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Consulting Business React-NextJS Template"
}

const Home1 = () => {
    return (
        <>
            <LayoutStyle1>
                <BannerStyle1 />
                <TeamStyle2 />
                <CeoFaq />
                <CeoMentoring />
                <CeoStats />
                <CeoIntro />
                <CeoValues />
                <CeoMentors />
                <CeoFormats />
                <CeoTestimonials />
                <CeoVideos />
                <CeoSteps />
            </LayoutStyle1>
        </>
    );
};

export default Home1;
