"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const CeoEvents = () => {
    const [eventsData, setEventsData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                // Fetch events sorted by date descending (or id desc)
                const res = await fetch(`${API_URL}/api/events?populate=*&sort=createdAt:desc`);
                const json = await res.json();
                if (json.data) {
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    const parseDateStr = (d) => {
                        if (!d) return null;
                        const m = d.match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                        if (m) return new Date(m[3], m[2] - 1, m[1]);
                        return null;
                    };

                    const upcoming = json.data.filter(e => {
                        const ed = parseDateStr(e.date);
                        if (!ed) return true; // keep if no valid date format found
                        return ed >= today;
                    }).sort((a, b) => {
                        const dateA = parseDateStr(a.date) || new Date(8640000000000000);
                        const dateB = parseDateStr(b.date) || new Date(8640000000000000);
                        return dateA - dateB;
                    });
                    
                    setEventsData(upcoming);
                }
            } catch (err) {
                console.error("Failed to fetch CEO events:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    return (
        <div className="ceo-events-area py-5" style={{ backgroundColor: '#fff', fontFamily: "'Manrope', sans-serif" }}>
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
                .ceo-swiper-button-prev, .ceo-swiper-button-next {
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
                .ceo-swiper-button-prev:hover, .ceo-swiper-button-next:hover {
                    background-color: #da151a;
                    color: #fff;
                }
                .ceo-swiper-button-prev {
                    left: -25px;
                }
                .ceo-swiper-button-next {
                    right: -25px;
                }
            `}} />
            <div className="container pt-4 pb-2">
                <div className="row mb-4">
                    <div className="col-12">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            SỰ KIỆN SẮP TỚI
                        </h2>
                        <div style={{ width: '150px', height: '2px', backgroundColor: '#da151a', marginTop: '15px' }}></div>
                    </div>
                </div>
            </div>

            <div className="container pt-4 pb-4">
                <div style={{ position: 'relative', padding: '0 10px' }}>
                    {loading ? (
                        <div className="text-center py-5">Đang tải các chương trình...</div>
                    ) : eventsData.length === 0 ? (
                        <div className="text-center py-5">Hiện chưa có chương trình nào.</div>
                    ) : (
                        <Swiper
                            modules={[Keyboard, Autoplay, Navigation]}
                            spaceBetween={30}
                            slidesPerView={3}
                            loop={false}
                            navigation={{
                                prevEl: '.ceo-swiper-button-prev',
                                nextEl: '.ceo-swiper-button-next',
                            }}
                            breakpoints={{
                                320: { slidesPerView: 1, spaceBetween: 20 },
                                768: { slidesPerView: 2, spaceBetween: 30 },
                                1024: { slidesPerView: 3, spaceBetween: 30 },
                                1200: { slidesPerView: 3, spaceBetween: 30 }
                            }}
                            className="ceo-swiper"
                        >
                            {eventsData.map((event) => {
                                const imgUrl = event.image?.url 
                                    ? (event.image.url.startsWith('http') ? event.image.url : `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${event.image.url}`)
                                    : '/assets/img/about/default.jpg';
                                
                                return (
                                <SwiperSlide key={event.id || event.documentId} style={{ height: 'auto' }}>
                                    <div className="event-card" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                        <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                             <Image src={imgUrl} alt={event.title} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        
                                        <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                            <h4 style={{ color: '#002b5e', fontWeight: '800', fontSize: '20px', marginBottom: '15px', lineHeight: '1.4' }}>{event.title}</h4>
                                            
                                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                                <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(218,21,26,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#da151a', marginRight: '15px', flexShrink: 0 }}>
                                                    <i className="fas fa-calendar-alt"></i>
                                                </div>
                                                <span style={{ color: '#da151a', fontWeight: '700', fontSize: '15px' }}>{event.date}</span>
                                            </div>

                                            {event.location && (
                                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px', color: '#666', fontSize: '14px' }}>
                                                    <i className="fas fa-map-marker-alt" style={{ marginRight: '10px', color: '#888' }}></i>
                                                    <span>{event.location}</span>
                                                </div>
                                            )}
                                            
                                            {event.mentor && (
                                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7', flexGrow: 1, marginBottom: '25px' }}>
                                                <strong>Mentor:</strong> {event.mentor.replace(/^Mentor:\s*/i, '')}
                                            </p>
                                            )}
                                            
                                            <div className="mt-auto">
                                                <Link href={`/ceo-mentoring/${event.documentId || event.id}`} className="btn-register">
                                                    Xem thêm
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )})}
                        </Swiper>
                    )}
                    
                    {!loading && eventsData.length > 0 && (
                        <>
                            <div className="ceo-swiper-button-prev d-none d-md-flex">
                                <i className="fas fa-chevron-left"></i>
                            </div>
                            <div className="ceo-swiper-button-next d-none d-md-flex">
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CeoEvents;
