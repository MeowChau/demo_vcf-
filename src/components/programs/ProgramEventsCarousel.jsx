"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BannerStyle1 from '../banner/BannerStyle1';

const eventsData = [
    {
        id: 1,
        title: "CEO Mentoring Lớp 17",
        date: "14/08/2026 - Hà Nội",
        desc: "Mentor: Ông Nguyễn Mạnh Hùng, Nguyên Bộ trưởng Bộ Khoa học và Công nghệ",
        image: "/assets/img/about/z7934289768980_21088567fa80181416162d7272c561a2-20260628161753-vw10m.jpg"
    },
    {
        id: 2,
        title: "CEO Mentoring Lớp 18",
        date: "15/08/2026 - TP Hồ Chí Minh",
        desc: "Mentor: Ông Võ Quang Huệ, Chủ tịch Foundry AI Việt Nam, Nguyên Phó tổng Giám đốc Tập đoàn VinGroup",
        image: "/assets/img/about/z7934289805121_b022af287ca855669016fcb915cc851d-20260628161753-8cne3.jpg"
    },
    {
        id: 3,
        title: "CEO Mentoring Lớp 19",
        date: "21/08/2026 - Hà Nội",
        desc: "Mentor: Ông Nguyễn Mạnh Hùng, Nguyên Bộ trưởng Bộ Khoa học và Công nghệ",
        image: "/assets/img/about/87c9484f52c5d39b8ad4.jpg"
    },
    {
        id: 4,
        title: "CEO Mentoring Lớp 20",
        date: "28/08/2026 - Hà Nội",
        desc: "Mentor: Ông Nguyễn Mạnh Hùng, Nguyên Bộ trưởng Bộ Khoa học và Công nghệ",
        image: "/assets/img/about/ceo-mentoring-18-20260628161442-tjcbb.jpg"
    }
];

const ProgramEventsCarousel = () => {
    return (
        <div className="program-events-area pb-100" style={{ backgroundColor: '#fff2df', paddingTop: '150px', fontFamily: "'Manrope', sans-serif" }}>
            <style dangerouslySetInnerHTML={{__html: `
                .event-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .event-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
                }
                .btn-register {
                    display: block;
                    text-align: center;
                    border: 2px solid #002b5e;
                    color: #002b5e;
                    background-color: transparent;
                    padding: 12px 20px;
                    border-radius: 6px;
                    text-decoration: none;
                    font-weight: 700;
                    transition: all 0.3s ease;
                }
                .btn-register:hover {
                    background-color: #002b5e;
                    color: #ffffff !important;
                }
                .btn-join-group {
                    display: inline-block;
                    border: 2px solid #da151a;
                    color: #ffffff;
                    background-color: #da151a;
                    padding: 15px 40px;
                    border-radius: 50px;
                    text-decoration: none;
                    font-weight: 700;
                    font-size: 18px;
                    transition: all 0.3s ease;
                    font-family: var(--font-montserrat);
                }
                .btn-join-group:hover {
                    background-color: transparent;
                    color: #da151a !important;
                }
                
                .program-swiper-button-prev, .program-swiper-button-next {
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
                .program-swiper-button-prev:hover, .program-swiper-button-next:hover {
                    background-color: #da151a;
                    color: #fff;
                }
                .program-swiper-button-prev {
                    left: -25px;
                }
                .program-swiper-button-next {
                    right: -25px;
                }
            `}} />
            
            <div className="container pb-2" style={{ maxWidth: '1400px' }}>
                <div className="row mb-4">
                    <div className="col-12">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            SỰ KIỆN SẮP TỚI
                        </h2>
                        <div style={{ width: '150px', height: '2px', backgroundColor: '#da151a', marginTop: '15px' }}></div>
                    </div>
                </div>
            </div>

            <BannerStyle1 />

            <div className="container pt-4 pb-4" style={{ maxWidth: '1400px' }}>
                <div style={{ position: 'relative', padding: '0 10px' }}>
                    <Swiper
                        modules={[Keyboard, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={4}
                        loop={true}
                        navigation={{
                            prevEl: '.program-swiper-button-prev',
                            nextEl: '.program-swiper-button-next',
                        }}
                        breakpoints={{
                            320: { slidesPerView: 1, spaceBetween: 20 },
                            768: { slidesPerView: 2, spaceBetween: 30 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                            1200: { slidesPerView: 3, spaceBetween: 30 }
                        }}
                        className="program-swiper"
                    >
                        {[...eventsData, ...eventsData.map(e => ({...e, id: e.id + 4}))].map((event) => (
                            <SwiperSlide key={event.id} style={{ height: 'auto' }}>
                                <div className="event-card" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                         <Image src={event.image} alt={event.title} fill style={{ objectFit: 'cover' }} />
                                    </div>
                                    
                                    <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                        <h4 style={{ color: '#002b5e', fontWeight: '800', fontSize: '20px', marginBottom: '15px', lineHeight: '1.4' }}>{event.title}</h4>
                                        
                                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                            <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(218,21,26,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#da151a', marginRight: '15px', flexShrink: 0 }}>
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                            </div>
                                            <span style={{ color: '#da151a', fontWeight: '700', fontSize: '15px' }}>{event.date}</span>
                                        </div>

                                        <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', flexGrow: 1, marginBottom: '25px' }}>
                                            {event.desc}
                                        </p>
                                        
                                        <div className="mt-auto">
                                            <Link href="/dang-ky" className="btn-register">
                                                Đăng ký
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    
                    <div className="program-swiper-button-prev d-none d-md-flex">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="program-swiper-button-next d-none d-md-flex">
                        <i className="fas fa-chevron-right"></i>
                    </div>
                </div>

                <div className="row mt-5 pt-4">
                    <div className="col-12 text-center">
                        <a href="#" className="btn-join-group">
                            Vào nhóm cập nhật chung
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProgramEventsCarousel;
