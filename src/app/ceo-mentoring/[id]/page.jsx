"use client"
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import { useParams } from 'next/navigation';

export default function EventDetail() {
    const { id } = useParams();
    const [event, setEvent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('jwt');
        if (token) {
            setIsLoggedIn(true);
        }
    }, []);

    const targetUrl = isLoggedIn ? "/dang-ky-event" : "/dang-ky";

    useEffect(() => {
        const fetchEvent = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                const res = await fetch(`${API_URL}/api/events/${id}?populate=*`);
                const json = await res.json();
                if (json.data) {
                    setEvent(json.data);
                }
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        if (id) {
            fetchEvent();
        }
    }, [id]);

    if (loading) return <LayoutStyle1><div className="container py-5 text-center">Đang tải...</div></LayoutStyle1>;
    if (!event) return <LayoutStyle1><div className="container py-5 text-center">Không tìm thấy sự kiện.</div></LayoutStyle1>;

    return (
        <LayoutStyle1>
            <div className="ceo-mentoring-details-area" style={{ backgroundColor: '#ffffff', fontFamily: "'Manrope', sans-serif", paddingTop: '80px' }}>
                <div className="container py-5" style={{ maxWidth: '900px' }}>
                    {/* Header Section (Pinned at the top as requested) */}
                    <div className="text-center mb-5">
                        <h1 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '36px', fontFamily: 'var(--font-montserrat)', marginBottom: '20px' }}>
                            CEO MENTORING
                        </h1>
                        <h3 style={{ color: '#002b5e', fontWeight: '700', fontSize: '22px', marginBottom: '15px' }}>
                            Đối thoại thực chiến cùng những nhà lãnh đạo giàu kinh nghiệm
                        </h3>
                        <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
                            Không phải một buổi chia sẻ lý thuyết hay networking đại trà.
                        </p>
                        <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                            <strong>CEO Mentoring</strong> là không gian đối thoại chuyên sâu, nơi CEO, Founder và nhà quản lý trực tiếp đưa những bài toán thật của doanh nghiệp vào trao đổi cùng Mentor và các CEO đồng cấp.
                        </p>
                        <h4 style={{ color: '#da151a', fontWeight: '700', fontSize: '18px', marginBottom: '30px' }}>
                            Nhìn đúng vấn đề — Mở rộng góc nhìn — Tìm hướng hành động phù hợp
                        </h4>
                        <Link href={targetUrl} className="btn btn-theme effect btn-md" style={{ backgroundColor: '#da151a', color: '#fff', padding: '12px 30px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '5px' }}>
                            ĐĂNG KÝ THAM GIA
                        </Link>
                        <p style={{ fontSize: '14px', color: '#777', fontStyle: 'italic', marginTop: '15px' }}>
                            Số lượng tham gia mỗi phiên được giới hạn để bảo đảm chiều sâu trao đổi.
                        </p>
                    </div>

                    <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                    {/* Event Content Section */}
                    <div>
                        {/* Description (HTML from Strapi) */}
                        {event.desc && (
                            <div 
                                className="event-description-content"
                                style={{ color: '#333', fontSize: '16px', lineHeight: '1.8' }}
                                dangerouslySetInnerHTML={{ __html: event.desc }} 
                            />
                        )}
                    </div>
                </div>
            </div>
        </LayoutStyle1>
    );
}
