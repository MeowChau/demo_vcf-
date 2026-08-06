"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { knowledgeData } from '@/components/knowledge/knowledgeData';

const UserDashboard = () => {
    const bgStyle = { backgroundColor: '#fff', fontFamily: "'Manrope', sans-serif", minHeight: '100vh', paddingTop: '150px', paddingBottom: '80px' };
    
    // Placeholder data
    const scheduleItems = [
        { id: 1, title: 'CEO Dialogue 2026', date: '20/08/2026 - 08:30 AM', status: 'Đã xác nhận tham gia', color: '#28a745', image: '/assets/img/about/ceo-mentoring-18-20260628161442-tjcbb.jpg' },
        { id: 2, title: 'Khóa học Lãnh đạo Đột phá', date: '05/09/2026 - 14:00 PM', status: 'Đang chờ xếp lớp', color: '#ffc107', image: '/assets/img/about/z7934289768980_21088567fa80181416162d7272c561a2-20260628161753-vw10m.jpg' },
        { id: 3, title: 'Hội thảo Công nghệ và Quản trị', date: '12/09/2026 - 09:00 AM', status: 'Đã lưu', color: '#6c757d', image: '/assets/img/about/z7934289805121_b022af287ca855669016fcb915cc851d-20260628161753-8cne3.jpg' }
    ];

    // Use the first 3 items from knowledgeData as recommended
    const knowledgeItems = knowledgeData.slice(0, 3);

    return (
        <div className="user-dashboard-area" style={bgStyle}>
            <div className="container">
                <div className="row">
                    {/* LEFT COLUMN - SCHEDULE */}
                    <div className="col-lg-8 mb-4">
                        <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '30px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', height: '100%' }}>
                            <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#333', marginBottom: '25px', borderBottom: '2px solid #f0f0f0', paddingBottom: '15px' }}>
                                <i className="fas fa-calendar-alt" style={{ color: '#da151a', marginRight: '10px' }}></i>
                                Lịch và đăng kí của tôi
                            </h3>
                            
                            <div className="schedule-list">
                                {scheduleItems.map(item => (
                                    <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', paddingBottom: '20px', borderBottom: '1px dashed #eee' }}>
                                        <div style={{ width: '80px', height: '80px', backgroundColor: '#f8f9fa', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #e9ecef', marginRight: '20px', flexShrink: 0, overflow: 'hidden' }}>
                                            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#222', margin: '0 0 5px 0' }}>{item.title}</h4>
                                            <p style={{ margin: '0 0 5px 0', fontSize: '13px', color: '#777' }}><i className="far fa-clock" style={{ marginRight: '5px' }}></i>{item.date}</p>
                                            <p style={{ margin: 0, fontSize: '15px', color: '#555' }}>
                                                Trạng thái: <span style={{ fontWeight: '600', color: item.color }}>{item.status}</span>
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN - QUICK LINKS */}
                    <div className="col-lg-4 mb-4">
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', height: '100%' }}>
                            <Link href="#" style={{ textDecoration: 'none' }}>
                                <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', transition: 'all 0.3s' }} className="dashboard-btn">
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                        <i className="fas fa-check-circle" style={{ color: '#da151a', fontSize: '24px' }}></i>
                                    </div>
                                    <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#333' }}>Sự kiện đã tham gia</h4>
                                </div>
                            </Link>

                            <Link href="#" style={{ textDecoration: 'none' }}>
                                <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', transition: 'all 0.3s' }} className="dashboard-btn">
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                        <i className="fas fa-bookmark" style={{ color: '#da151a', fontSize: '24px' }}></i>
                                    </div>
                                    <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#333' }}>Tri thức đã lưu</h4>
                                </div>
                            </Link>

                            <Link href="#" style={{ textDecoration: 'none' }}>
                                <div style={{ backgroundColor: '#fff', borderRadius: '12px', padding: '25px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', transition: 'all 0.3s' }} className="dashboard-btn">
                                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '20px' }}>
                                        <i className="fas fa-chart-pie" style={{ color: '#da151a', fontSize: '24px' }}></i>
                                    </div>
                                    <h4 style={{ margin: 0, fontSize: '18px', fontWeight: '600', color: '#333' }}>Công cụ và báo cáo của tôi</h4>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION - RECOMMENDED KNOWLEDGE */}
                <div className="row mt-5">
                    <div className="col-12 mb-4">
                        <h3 style={{ fontSize: '24px', fontWeight: '700', color: '#333', borderLeft: '5px solid #da151a', paddingLeft: '15px' }}>Tri thức bạn có thể thích</h3>
                    </div>
                    
                    {knowledgeItems.map(item => (
                        <div key={item.id} className="col-lg-4 col-md-6 mb-4">
                            <Link href={`/tri-thuc/${item.id}`} style={{ textDecoration: 'none' }}>
                                <div style={{ backgroundColor: '#fff', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', transition: 'transform 0.3s', height: '100%' }} className="knowledge-card">
                                    <div style={{ width: '100%', height: '220px', backgroundColor: '#e9ecef', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                        <Image src={item.image} alt={item.title} width={400} height={220} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div style={{ padding: '25px' }}>
                                        <div style={{ fontSize: '13px', color: '#888', marginBottom: '10px' }}><i className="far fa-clock"></i> {item.time}</div>
                                        <h4 style={{ fontSize: '18px', fontWeight: '600', color: '#222', margin: '0', lineHeight: '1.4' }}>{item.title}</h4>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            <style dangerouslySetInnerHTML={{__html: `
                .dashboard-btn:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(218, 21, 26, 0.15) !important;
                }
                .knowledge-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1) !important;
                }
            `}} />
        </div>
    );
};

export default UserDashboard;
