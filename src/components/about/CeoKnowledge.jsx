import React from 'react';
import Image from 'next/image';

const CeoKnowledge = () => {
    return (
        <div className="ceo-knowledge-area pb-5" style={{ backgroundColor: '#fff2df', fontFamily: "'Manrope', sans-serif", paddingTop: '150px' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .knowledge-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .knowledge-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                }
                .knowledge-title:hover {
                    color: #da151a !important;
                }
                .older-post-card {
                    transition: background-color 0.3s ease;
                }
                .older-post-card:hover {
                    background-color: #f8f9fa;
                }
            `}} />
            <div className="container pt-4 pb-4">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            TRI THỨC NỔI BẬT
                        </h2>
                        <div style={{ width: '150px', height: '2px', backgroundColor: '#da151a', marginTop: '15px' }}></div>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Left Column - Featured Post */}
                    <div className="col-lg-7">
                        <div className="knowledge-card" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', cursor: 'pointer' }}>
                            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                <Image src="/assets/img/about/ceo-mentoring-18-20260628161442-tjcbb.jpg" alt="Featured Post" fill style={{ objectFit: 'cover' }} />
                            </div>
                            <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <div style={{ color: '#da151a', fontSize: '13px', fontWeight: '700', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>Bài viết mới</div>
                                <h3 className="knowledge-title" style={{ color: '#002b5e', fontWeight: '800', fontSize: '26px', marginBottom: '15px', transition: 'color 0.3s' }}>
                                    Chiến lược quản trị vượt khủng hoảng dành cho CEO
                                </h3>
                                <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px', flexGrow: 1 }}>
                                    Trong bối cảnh nền kinh tế có nhiều biến động, các nhà lãnh đạo cần trang bị cho mình những kỹ năng quản trị cốt lõi để lèo lái doanh nghiệp vượt qua thách thức và tìm kiếm cơ hội bứt phá...
                                </p>
                                <div style={{ display: 'flex', alignItems: 'center', color: '#888', fontSize: '14px' }}>
                                    <span style={{ fontWeight: '600' }}>Admin</span>
                                    <span style={{ margin: '0 10px' }}>•</span>
                                    <span>24 Tháng 10, 2026</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Older Posts */}
                    <div className="col-lg-5">
                        <div className="d-flex flex-column h-100">
                            <div className="d-flex flex-column" style={{ gap: '15px', flexGrow: 1 }}>
                                {[
                                    { id: 1, title: 'Tối ưu hóa bộ máy nhân sự trong kỷ nguyên AI', date: '20 Tháng 10, 2026', img: '/assets/img/about/z7934289768980_21088567fa80181416162d7272c561a2-20260628161753-vw10m.jpg' },
                                    { id: 2, title: 'Bí quyết xây dựng văn hóa doanh nghiệp đổi mới sáng tạo', date: '15 Tháng 10, 2026', img: '/assets/img/about/z7934289805121_b022af287ca855669016fcb915cc851d-20260628161753-8cne3.jpg' },
                                    { id: 3, title: 'Làm thế nào để gọi vốn thành công từ quỹ đầu tư mạo hiểm?', date: '10 Tháng 10, 2026', img: '/assets/img/about/87c9484f52c5d39b8ad4.jpg' },
                                    { id: 4, title: 'Chuyển đổi số: Đâu là điểm bắt đầu cho doanh nghiệp SME?', date: '05 Tháng 10, 2026', img: '/assets/img/about/ceo-mentoring-18-20260628161442-tjcbb.jpg' }
                                ].map((post) => (
                                    <div key={post.id} className="older-post-card d-flex align-items-center" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden', padding: '15px', cursor: 'pointer' }}>
                                        <div style={{ position: 'relative', width: '120px', height: '90px', borderRadius: '6px', flexShrink: 0, overflow: 'hidden' }}>
                                            <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div style={{ paddingLeft: '20px', flexGrow: 1 }}>
                                            <h4 className="knowledge-title" style={{ color: '#002b5e', fontWeight: '700', fontSize: '16px', marginBottom: '8px', lineHeight: '1.5', transition: 'color 0.3s' }}>
                                                {post.title}
                                            </h4>
                                            <span style={{ color: '#888', fontSize: '13px' }}>{post.date}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="text-end mt-4">
                                <a href="#" style={{ color: '#da151a', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontStyle: 'italic', display: 'inline-block', transition: 'opacity 0.3s' }} className="see-more-link">
                                    Xem thêm... <i className="fas fa-arrow-right ms-1" style={{ fontSize: '13px' }}></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoKnowledge;
