"use client"
import React, { useEffect, useState } from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

// No mock articles, we will fetch from API

const DashboardPage = () => {
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);
    const [articles, setArticles] = useState([]);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchDashboardData = async () => {
            const jwt = localStorage.getItem('jwt');
            const userData = localStorage.getItem('user');

            if (!jwt || !userData) {
                router.push('/dang-nhap');
                return;
            }

            try {
                setUser(JSON.parse(userData));
                
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                
                // Fetch user's registered requests
                const requestsRes = await fetch(`${API_URL}/api/mentoring-requests/me`, {
                    headers: { 'Authorization': `Bearer ${jwt}` }
                });
                
                // Fetch all events from the new Course API
                const eventsRes = await fetch(`${API_URL}/api/courses?populate=*`);
                
                // Fetch recommended articles
                const articlesRes = await fetch(`${API_URL}/api/articles?populate=*`);
                
                if (articlesRes.ok) {
                    const articlesData = await articlesRes.json();
                    
                    const parseDateStr = (dStr) => {
                        if (!dStr) return 0;
                        const m = String(dStr).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                        if (m) return new Date(m[3], m[2] - 1, m[1]).getTime();
                        return new Date(dStr).getTime() || 0;
                    };

                    const mappedArticles = (articlesData.data || [])
                        .map(item => {
                            const attr = item.attributes || item;
                            let imgUrl = '/assets/img/baiVietMau/bai1.png';
                            if (attr.image && attr.image.data) {
                                imgUrl = `${API_URL}${attr.image.data.attributes.url}`;
                            } else if (attr.image && attr.image.url) {
                                imgUrl = `${API_URL}${attr.image.url}`;
                            } else if (attr.imageUrl) {
                                imgUrl = attr.imageUrl;
                            }
                            
                            return {
                                id: item.documentId || item.id,
                                title: attr.title,
                                date: attr.time || new Date(attr.createdAt).toLocaleDateString('vi-VN'),
                                image: imgUrl
                            };
                        })
                        .sort((a, b) => parseDateStr(b.date) - parseDateStr(a.date))
                        .slice(0, 3);

                    setArticles(mappedArticles);
                }

                if (requestsRes.ok) {
                    const requestsData = await requestsRes.json();
                    let registeredClasses = [];
                    // Flatten desiredClasses from all requests
                    (requestsData.data || []).forEach(req => {
                        if (req.desiredClasses && Array.isArray(req.desiredClasses)) {
                            req.desiredClasses.forEach(c => {
                                if (!registeredClasses.includes(c)) registeredClasses.push(c);
                            });
                        }
                    });

                    let strapiEvents = [];
                    if (eventsRes.ok) {
                        const evtData = await eventsRes.json();
                        // Support both Strapi v4 and v5 data structures
                        strapiEvents = evtData.data || [];
                    }

                    // Map registered classes to actual events
                    const IMAGE_MAP = {
                        '17': '/assets/img/about/z7934289768980_21088567fa80181416162d7272c561a2-20260628161753-vw10m.jpg',
                        '18': '/assets/img/about/z7934289805121_b022af287ca855669016fcb915cc851d-20260628161753-8cne3.jpg',
                        '19': '/assets/img/about/87c9484f52c5d39b8ad4.jpg',
                        '20': '/assets/img/about/ceo-mentoring-18-20260628161442-tjcbb.jpg'
                    };

                    const DATE_MAP = {
                        '17': '14/08/2026 - Hà Nội',
                        '18': '15/08/2026 - TP Hồ Chí Minh',
                        '19': '21/08/2026 - Hà Nội',
                        '20': '28/08/2026 - Hà Nội'
                    };

                    const mappedEvents = registeredClasses.map((className, index) => {
                        // Find if there's a matching event in Strapi by title
                        const strapiMatch = strapiEvents.find(e => {
                            const title = e.attributes ? e.attributes.title : e.title;
                            return title === className;
                        });

                        let matchedDefaultImg = '/assets/img/eventsNetworking/ASIA CEO DEC 2022 (91)_HEIC.avif';
                        let matchedDefaultDate = 'Đang cập nhật';
                        
                        Object.keys(IMAGE_MAP).forEach(key => {
                            if (className.includes(key) || (strapiMatch && strapiMatch.attributes && strapiMatch.attributes.title.includes(key))) {
                                matchedDefaultImg = IMAGE_MAP[key];
                                matchedDefaultDate = DATE_MAP[key];
                            }
                        });
                        
                        if (strapiMatch) {
                            const attr = strapiMatch.attributes || strapiMatch;
                            let imgUrl = matchedDefaultImg; 
                            
                            if (attr.image && attr.image.data) {
                                imgUrl = `${API_URL}${attr.image.data.attributes.url}`;
                            } else if (attr.image && attr.image.url) {
                                imgUrl = `${API_URL}${attr.image.url}`; // For v5 without explicit data object sometimes
                            }

                            return {
                                id: strapiMatch.id,
                                title: attr.title || className,
                                date: attr.date || matchedDefaultDate,
                                status: attr.eventStatus || 'Đang chờ xếp lớp',
                                statusColor: attr.statusColor || '#f57c00',
                                image: imgUrl
                            };
                        } else {
                            // Fallback if not found in Strapi yet
                            return {
                                id: `fallback-${index}`,
                                title: className,
                                date: matchedDefaultDate,
                                status: 'Đang chờ xếp lớp',
                                statusColor: '#f57c00', // Orange
                                image: matchedDefaultImg
                            };
                        }
                    });

                    setEvents(mappedEvents);
                }

            } catch (e) {
                console.error("Dashboard fetch error:", e);
                // Optionally redirect to login on error if token is expired
                // router.push('/dang-nhap');
            } finally {
                setIsLoading(false);
            }
        };

        fetchDashboardData();
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
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            paddingTop: '130px',
            paddingBottom: '80px'
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '24px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
            marginBottom: '20px',
            border: '1px solid #f0f0f0'
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
            transition: 'transform 0.2s',
            border: '1px solid #f0f0f0'
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
        },
        registerBtn: {
            backgroundColor: '#e60000',
            color: '#fff',
            padding: '8px 20px',
            borderRadius: '4px',
            textDecoration: 'none',
            fontSize: '14px',
            display: 'inline-block',
            marginTop: '15px',
            fontWeight: '600'
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
                                
                                {events.length === 0 ? (
                                    <div style={{ textAlign: 'center', padding: '30px 0' }}>
                                        <img src="/assets/img/icon/empty.png" alt="Empty" style={{ width: '60px', opacity: 0.3, marginBottom: '15px' }} />
                                        <h5 style={{ color: '#666', fontSize: '15px' }}>Bạn chưa đăng ký sự kiện nào</h5>
                                        <Link href="/dang-ky-event" style={styles.registerBtn}>
                                            Đăng ký sự kiện ngay
                                        </Link>
                                    </div>
                                ) : (
                                    <div>
                                        {events.map((evt, idx) => (
                                            <div key={evt.id} style={{
                                                ...styles.eventRow,
                                                borderBottom: idx === events.length - 1 ? 'none' : '1px dashed #eee'
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
                                        <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                            <Link href="/dang-ky-event" style={{ display: 'inline-block', backgroundColor: '#da151a', color: '#fff', padding: '12px 30px', borderRadius: '6px', textDecoration: 'none', fontWeight: '600', fontSize: '15px' }}>
                                                Đăng ký sự kiện
                                            </Link>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="col-lg-4">
                            <Link href="/dashboard" style={{ textDecoration: 'none' }}>
                                <div style={{...styles.btnCard, border: '1px solid #da151a', backgroundColor: '#fff9f9'}}>
                                    <div style={{...styles.btnIconBox, backgroundColor: '#da151a', color: '#fff'}}>
                                        <i className="fas fa-check"></i>
                                    </div>
                                    <span style={{ fontSize: '15px', fontWeight: '600', color: '#da151a' }}>Sự kiện đã tham gia</span>
                                </div>
                            </Link>

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
                        {articles.map(article => (
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
