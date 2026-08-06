"use client"
import React, { useEffect, useState } from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import { useRouter } from 'next/navigation';

// Mock Data
const MOCK_EVENTS = [
    {
        id: 1,
        title: 'CEO Dialogue 2026',
        date: '20/08/2026 - 08:30 AM',
        status: 'Đã xác nhận tham gia',
        statusColor: '#2e7d32', // Green
        image: '/assets/img/eventsNetworking/Dinner Party.avif'
    },
    {
        id: 2,
        title: 'Khóa học Lãnh đạo Đột phá',
        date: '05/09/2026 - 14:00 PM',
        status: 'Đang chờ xếp lớp',
        statusColor: '#f57c00', // Orange
        image: '/assets/img/eventsNetworking/ASIA CEO DEC 2022 (91)_HEIC.avif'
    },
    {
        id: 3,
        title: 'Hội thảo Công nghệ và Quản trị',
        date: '12/09/2026 - 09:00 AM',
        status: 'Đã lưu',
        statusColor: '#757575', // Grey
        image: '/assets/img/eventsNetworking/Yacht Deck.avif'
    }
];

const MOCK_ARTICLES = [
    {
        id: 1,
        title: 'Thực thi chiến lược hiệu quả',
        date: '03/08/2026',
        image: '/assets/img/baiVietMau/bai1.png'
    },
    {
        id: 2,
        title: 'Thay đổi tư duy, văn hoá và hành vi của tổ chức',
        date: '02/08/2026',
        image: '/assets/img/baiVietMau/bai2.png'
    },
    {
        id: 3,
        title: '[CEO DIALOGUE] Trực 1 - Khi CEO không có mặt, hệ thống có tiếp tục vận hành?',
        date: '31/07/2026',
        image: '/assets/img/baiVietMau/bai3.png'
    }
];

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in
        const jwt = localStorage.getItem('jwt');
        const userData = localStorage.getItem('user');

        if (!jwt || !userData) {
            router.push('/dang-nhap');
            return;
        }

        try {
            setUser(JSON.parse(userData));
        } catch (e) {
            router.push('/dang-nhap');
        } finally {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading || !user) {
        return (
            <LayoutStyle1>
                <div style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#fcf4e4', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Đang tải...</span>
                    </div>
                </div>
            </LayoutStyle1>
        );
    }

    const styles = {
        bg: {
            backgroundColor: '#ffffff', // Changed to white background
            minHeight: '100vh',
            paddingTop: '130px',
            paddingBottom: '80px'
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)', // Slightly stronger shadow for white bg
            marginBottom: '20px',
            border: '1px solid #f0f0f0' // Subtle border
        },
        cardTitle: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#222',
            marginBottom: '20px',
            display: 'flex',
            alignItems: 'center'
        },
        eventRow: {
            display: 'flex',
            alignItems: 'flex-start',
            gap: '15px',
            padding: '15px 0',
            borderBottom: '1px dashed #eee'
        },
        eventImg: {
            width: '100px',
            height: '100px',
            minWidth: '100px',
            borderRadius: '8px',
            objectFit: 'cover'
        },
        btnCard: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '18px 24px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            marginBottom: '15px',
            display: 'flex',
            alignItems: 'center',
            gap: '15px',
            cursor: 'pointer',
            transition: 'transform 0.2s'
        },
        btnIconBox: {
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            backgroundColor: '#ffeeee',
            color: '#da151a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '14px'
        },
        sectionTitleWrapper: {
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginTop: '40px',
            marginBottom: '20px'
        },
        redBar: {
            width: '4px',
            height: '20px',
            backgroundColor: '#da151a',
            borderRadius: '2px'
        },
        articleCard: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)'
        },
        articleImg: {
            width: '100%',
            aspectRatio: '16/9',
            objectFit: 'cover'
        },
        articleContent: {
            padding: '20px'
        }
    };

    return (
        <LayoutStyle1>
            <div style={styles.bg}>
                <div className="container">
                    
                    {/* Top Row */}
                    <div className="row">
                        {/* Events List */}
                        <div className="col-lg-8">
                            <div style={styles.card}>
                                <div style={styles.cardTitle}>
                                    <i className="far fa-calendar-alt" style={{ color: '#da151a', marginRight: '10px' }}></i>
                                    Lịch và đăng kí của tôi
                                </div>
                                
                                {MOCK_EVENTS.map((evt, idx) => (
                                    <div key={evt.id} style={{
                                        ...styles.eventRow,
                                        borderBottom: idx === MOCK_EVENTS.length - 1 ? 'none' : '1px dashed #eee'
                                    }}>
                                        <img src={evt.image} alt={evt.title} style={styles.eventImg} />
                                        <div>
                                            <h4 style={{ fontSize: '15px', fontWeight: '600', marginBottom: '5px', color: '#333' }}>{evt.title}</h4>
                                            <div style={{ fontSize: '13px', color: '#777', marginBottom: '5px' }}>
                                                <i className="far fa-clock" style={{ marginRight: '5px' }}></i>
                                                {evt.date}
                                            </div>
                                            <div style={{ fontSize: '13px' }}>
                                                Trạng thái: <span style={{ color: evt.statusColor, fontWeight: '500' }}>{evt.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="col-lg-4">
                            <div style={styles.btnCard} className="hover-lift">
                                <div style={styles.btnIconBox}>
                                    <i className="fas fa-check"></i>
                                </div>
                                <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>Sự kiện đã tham gia</span>
                            </div>

                            <div style={styles.btnCard} className="hover-lift">
                                <div style={styles.btnIconBox}>
                                    <i className="fas fa-bookmark"></i>
                                </div>
                                <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>Tri thức đã lưu</span>
                            </div>

                            <div style={styles.btnCard} className="hover-lift">
                                <div style={styles.btnIconBox}>
                                    <i className="fas fa-chart-pie"></i>
                                </div>
                                <span style={{ fontSize: '15px', fontWeight: '500', color: '#333' }}>Công cụ và báo cáo của tôi</span>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row - Articles */}
                    <div style={styles.sectionTitleWrapper}>
                        <div style={styles.redBar}></div>
                        <h3 style={{ fontSize: '18px', fontWeight: '600', margin: 0, color: '#333' }}>Tri thức bạn có thể thích</h3>
                    </div>

                    <div className="row">
                        {MOCK_ARTICLES.map(article => (
                            <div className="col-lg-4 col-md-6 mb-4" key={article.id}>
                                <a href={`/tri-thuc/${article.id}`} style={{ textDecoration: 'none' }}>
                                    <div style={styles.articleCard} className="hover-lift">
                                        <img src={article.image} alt={article.title} style={styles.articleImg} />
                                        <div style={styles.articleContent}>
                                            <div style={{ fontSize: '12px', color: '#777', marginBottom: '10px' }}>
                                                <i className="far fa-clock" style={{ marginRight: '5px' }}></i>
                                                {article.date}
                                            </div>
                                            <h4 style={{ fontSize: '15px', fontWeight: '600', color: '#333', lineHeight: '1.4', margin: 0 }}>
                                                {article.title}
                                            </h4>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                    </div>

                    <style>{`
                        .hover-lift:hover {
                            transform: translateY(-3px);
                        }
                    `}</style>
                </div>
            </div>
        </LayoutStyle1>
    );
};

export default DashboardPage;
