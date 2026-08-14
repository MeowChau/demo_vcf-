"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import BannerStyle1 from '../banner/BannerStyle1';

const ProgramEventsCarousel = () => {
    const [eventsData, setEventsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                const response = await fetch(`${API_URL}/api/events?populate=*&sort[0]=createdAt:desc`);
                const data = await response.json();
                
                if (data && data.data) {
                    const getImageUrl = (imgObj) => {
                        if (!imgObj) return null;
                        const url = imgObj.url || imgObj.data?.attributes?.url;
                        if (!url) return null;
                        return url.startsWith('http') ? url : `${API_URL}${url}`;
                    };

                    const formattedData = data.data.map(item => ({
                        id: item.documentId || item.id,
                        title: item.title,
                        date: item.date,
                        desc: item.desc,
                        image: getImageUrl(item.image) || item.imageUrl || null,
                    }));
                    setEventsData(formattedData);
                }
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="program-events-area pb-100" style={{ backgroundColor: '#fff', paddingTop: '150px', fontFamily: "'Manrope', sans-serif" }}>
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
                    {isLoading ? (
                        <div className="text-center py-5">
                            <div className="spinner-border text-danger" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Swiper
                                modules={[Keyboard, Autoplay, Navigation]}
                        spaceBetween={30}
                        slidesPerView={4}
                        loop={false}
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
                        {eventsData.map((event) => (
                            <SwiperSlide key={event.id} style={{ height: 'auto' }}>
                                <div className="event-card" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    {event.image && (
                                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                            <Image src={event.image} alt={event.title} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                    )}
                                    
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

                                        <div 
                                            style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', flexGrow: 1, marginBottom: '25px' }} 
                                            dangerouslySetInnerHTML={{ __html: event.desc || "" }} 
                                        />
                                        
                                        <div className="mt-auto">
                                            <Link href="/ceo-mentoring" className="btn-register">
                                                Xem thêm
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
                        </>
                    )}
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
