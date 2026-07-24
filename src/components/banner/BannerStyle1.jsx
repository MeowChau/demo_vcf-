"use client";
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';
import SingleBanner1 from './SingleBanner1';
import Banner1Data from '@/assets/jsonData/banner/Banner1Data.json';

const BannerStyle1 = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <>
            <div className="banner-area banner-style-one shadow navigation-custom-large zoom-effect overflow-hidden text-light">
                <div className="banner-fade" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                    <Swiper
                        modules={[Keyboard, Autoplay, Pagination, EffectFade, Navigation]}
                        direction={"horizontal"}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        loop={true}
                        effect={"fade"}
                        fadeEffect={{
                            crossFade: true
                        }}
                        keyboard={{
                            enabled: true,
                        }}
                        pagination={{
                            el: '.swiper-pagination',
                            clickable: true,
                        }}
                        navigation={{
                            nextEl: '.my-custom-next',
                            prevEl: '.my-custom-prev'
                        }}
                    >
                        {Banner1Data.map(banner =>
                            <SwiperSlide key={banner.id} className='banner-style-one'>
                                <SingleBanner1 banner={banner} />
                            </SwiperSlide>
                        )}
                    </Swiper>
                    <div className="swiper-pagination"></div>
                    <div className="my-custom-prev" style={{ position: 'absolute', top: '50%', left: 0, transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer', color: '#fff', fontSize: '24px', backgroundColor: 'rgba(0,0,0,0.4)', width: '40px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', opacity: isHovered ? 1 : 0 }}>
                        <i className="fas fa-angle-left"></i>
                    </div>
                    <div className="my-custom-next" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', zIndex: 10, cursor: 'pointer', color: '#fff', fontSize: '24px', backgroundColor: 'rgba(0,0,0,0.4)', width: '40px', height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s', opacity: isHovered ? 1 : 0 }}>
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BannerStyle1;