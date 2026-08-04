"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const videos = [
    { id: 1, src: "https://www.youtube.com/embed/Gz04SqjW5_M" },
    { id: 2, src: "https://www.youtube.com/embed/a0LTyTNBFtI" },
    { id: 3, src: "https://www.youtube.com/embed/Gz04SqjW5_M" },
    { id: 4, src: "https://www.youtube.com/embed/a0LTyTNBFtI" }
];

const CeoVideoCarousel = () => {
    return (
        <div className="ceo-video-carousel-area py-5" style={{ backgroundColor: '#fff2df', fontFamily: "'Manrope', sans-serif" }}>
            <style dangerouslySetInnerHTML={{__html: `
                .video-swiper {
                    padding: 40px 0 !important;
                }
                .video-swiper .swiper-slide {
                    transition: all 0.5s ease;
                    opacity: 0.4;
                    transform: scale(0.85);
                }
                .video-swiper .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1);
                    z-index: 2;
                }
                .video-swiper .swiper-slide .video-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 10;
                    cursor: pointer;
                }
                .video-swiper .swiper-slide-active .video-overlay {
                    display: none;
                }
                .video-swiper-button-prev, .video-swiper-button-next {
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    width: 50px;
                    height: 50px;
                    background-color: #fff;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    cursor: pointer;
                    z-index: 10;
                    color: #333;
                    font-size: 20px;
                    transition: all 0.3s ease;
                }
                .video-swiper-button-prev:hover, .video-swiper-button-next:hover {
                    background-color: #da151a;
                    color: #fff;
                }
                .video-swiper-button-prev {
                    left: 20px;
                }
                .video-swiper-button-next {
                    right: 20px;
                }
                .video-wrapper {
                    border-radius: 12px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.15);
                    background-color: #000;
                }
            `}} />
            <div className="container-fluid pt-4 pb-4">
                <div className="row mb-5 text-center justify-content-center">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            VIDEO TRI THỨC
                        </h2>
                        <div style={{ width: '150px', height: '2px', backgroundColor: '#da151a', marginTop: '15px' }}></div>
                    </div>
                </div>

                <div style={{ position: 'relative', padding: '0 20px', maxWidth: '1400px', margin: '0 auto' }}>
                    <Swiper
                        modules={[Keyboard, Autoplay, Navigation]}
                        spaceBetween={0}
                        slidesPerView={1.5}
                        centeredSlides={true}
                        loop={true}
                        navigation={{
                            prevEl: '.video-swiper-button-prev',
                            nextEl: '.video-swiper-button-next',
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 1.5, spaceBetween: 0 },
                            1024: { slidesPerView: 1.8, spaceBetween: 0 }
                        }}
                        className="video-swiper"
                    >
                        {videos.map((video, idx) => (
                            <SwiperSlide key={idx}>
                                <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                                    <iframe 
                                        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                        src={video.src}
                                        title="YouTube video player" 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen>
                                    </iframe>
                                    <div className="video-overlay"></div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    <div className="video-swiper-button-prev d-none d-md-flex">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="video-swiper-button-next d-none d-md-flex">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoVideoCarousel;
