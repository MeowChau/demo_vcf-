import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const eventsData = [
    {
        id: 1,
        title: "CEO Summit 2026: Kiến tạo tương lai",
        date: "20 Tháng 11, 2026",
        desc: "Sự kiện quy tụ hơn 500 CEO và chuyên gia hàng đầu để thảo luận về xu hướng kinh tế mới và chiến lược tăng trưởng bền vững.",
        image: "/assets/img/about/z7934289768980_21088567fa80181416162d7272c561a2-20260628161753-vw10m.jpg"
    },
    {
        id: 2,
        title: "CEO Dialogue: Giải bài toán nhân sự",
        date: "05 Tháng 12, 2026",
        desc: "Hội thảo bàn tròn chuyên sâu về các phương pháp thu hút, giữ chân và phát triển nhân tài trong môi trường làm việc số.",
        image: "/assets/img/about/z7934289805121_b022af287ca855669016fcb915cc851d-20260628161753-8cne3.jpg"
    },
    {
        id: 3,
        title: "Workshop: Tối ưu dòng tiền doanh nghiệp",
        date: "15 Tháng 12, 2026",
        desc: "Buổi thực hành trực tiếp với các chuyên gia tài chính giúp CEO nắm bắt kỹ năng quản trị dòng tiền hiệu quả trong thời kỳ suy thoái.",
        image: "/assets/img/about/87c9484f52c5d39b8ad4.jpg"
    }
];

const CeoEvents = () => {
    return (
        <div className="ceo-events-area py-5" style={{ backgroundColor: '#fff2df', fontFamily: "'Manrope', sans-serif" }}>
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
            `}} />
            <div className="container pt-4 pb-4">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            SỰ KIỆN SẮP TỚI
                        </h2>
                        <div style={{ width: '150px', height: '2px', backgroundColor: '#da151a', marginTop: '15px' }}></div>
                    </div>
                </div>

                <div className="row g-4 justify-content-center">
                    {eventsData.map((event) => (
                        <div key={event.id} className="col-lg-4 col-md-6">
                            <div className="event-card" style={{ backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                     <Image src={event.image} alt={event.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                
                                <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <h4 style={{ color: '#002b5e', fontWeight: '800', fontSize: '20px', marginBottom: '15px', lineHeight: '1.4' }}>{event.title}</h4>
                                    
                                    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                                        <div style={{ width: '40px', height: '40px', backgroundColor: 'rgba(218,21,26,0.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#da151a', marginRight: '15px' }}>
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
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CeoEvents;
