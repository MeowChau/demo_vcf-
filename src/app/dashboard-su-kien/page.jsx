"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';

const DashboardSuKien = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [expandedEvents, setExpandedEvents] = useState({});
    const router = useRouter();

    useEffect(() => {
        const fetchEvents = async () => {
            const token = localStorage.getItem('jwt');
            const userStr = localStorage.getItem('user');

            if (!token || !userStr) {
                router.push('/dang-nhap');
                return;
            }

            try {
                // Fetch events for the current user using the custom /me endpoint
                const response = await fetch(`http://localhost:1337/api/mentoring-requests/me`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                const eventList = data.data || [];
                // Sort by newest first
                eventList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setEvents(eventList);
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, [router]);

    if (loading) {
        return (
            <LayoutStyle1>
                <div style={{ textAlign: 'center', padding: '100px 0' }}>Đang tải dữ liệu...</div>
            </LayoutStyle1>
        );
    }

    // Tính toán thống kê
    const today = new Date();
    const todayCount = events.filter(e => {
        const d = new Date(e.createdAt);
        return d.getDate() === today.getDate() && d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
    }).length;

    const monthCount = events.filter(e => {
        const d = new Date(e.createdAt);
        return d.getMonth() === today.getMonth() && d.getFullYear() === today.getFullYear();
    }).length;

    const yearCount = events.filter(e => {
        const d = new Date(e.createdAt);
        return d.getFullYear() === today.getFullYear();
    }).length;

    const toggleEvent = (id) => {
        setExpandedEvents(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '20px',
        marginBottom: '20px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        border: '1px solid #eaeaea',
        borderLeft: '5px solid #e60000'
    };

    const statCardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '25px',
        marginBottom: '30px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.05)',
        border: '1px solid #eaeaea',
        textAlign: 'center',
        height: '100%'
    };

    const statNumberStyle = {
        fontSize: '36px',
        fontWeight: 'bold',
        color: '#e60000',
        margin: '10px 0'
    };

    const labelStyle = {
        fontWeight: 'bold',
        color: '#202124',
        marginBottom: '5px',
        fontSize: '15px'
    };

    const valueStyle = {
        color: '#5f6368',
        marginBottom: '15px',
        fontSize: '15px',
        whiteSpace: 'pre-wrap'
    };

    const btnStyle = {
        backgroundColor: '#f8f9fa',
        color: '#e60000',
        border: '1px solid #e60000',
        padding: '6px 15px',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '14px',
        fontWeight: '600',
        transition: 'all 0.2s'
    };

    return (
        <LayoutStyle1>
            <section className="dashboard-area pt-50 pb-100">
                <div className="container">
                    
                    {/* Thống kê */}
                    <div className="row">
                        <div className="col-md-4 mb-4">
                            <div style={statCardStyle}>
                                <h5 style={{ color: '#002b5e', fontSize: '16px' }}>Sự kiện đăng ký hôm nay</h5>
                                <div style={statNumberStyle}>{todayCount}</div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div style={statCardStyle}>
                                <h5 style={{ color: '#002b5e', fontSize: '16px' }}>Sự kiện đăng ký trong tháng</h5>
                                <div style={statNumberStyle}>{monthCount}</div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-4">
                            <div style={statCardStyle}>
                                <h5 style={{ color: '#002b5e', fontSize: '16px' }}>Tổng số đăng ký trong năm</h5>
                                <div style={statNumberStyle}>{yearCount}</div>
                            </div>
                        </div>
                    </div>

                    {/* Danh sách */}
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-4" style={{ color: '#002b5e', fontWeight: 700 }}>Danh sách sự kiện đã đăng ký ({events.length})</h3>
                            
                            {events.length === 0 ? (
                                <div className="alert alert-info">Bạn chưa đăng ký sự kiện nào.</div>
                            ) : (
                                <div className="event-list">
                                    {events.map((evt, index) => {
                                        const isExpanded = !!expandedEvents[evt.id];
                                        return (
                                            <div key={evt.id} style={cardStyle}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div>
                                                        <h5 style={{ margin: '0 0 5px 0', color: '#e60000' }}>Phiếu đăng ký số {events.length - index}</h5>
                                                        <div style={{ color: '#5f6368', fontSize: '14px' }}>
                                                            <strong>Ngày gửi:</strong> {new Date(evt.createdAt).toLocaleString('vi-VN')}
                                                            <span style={{ margin: '0 10px' }}>|</span>
                                                            <strong>Lớp:</strong> {evt.desiredClasses && evt.desiredClasses.length > 0 ? evt.desiredClasses.join(', ') : 'Chưa chọn'}
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <button 
                                                            style={btnStyle}
                                                            onClick={() => toggleEvent(evt.id)}
                                                            onMouseEnter={(e) => { e.target.style.backgroundColor = '#e60000'; e.target.style.color = '#fff'; }}
                                                            onMouseLeave={(e) => { e.target.style.backgroundColor = '#f8f9fa'; e.target.style.color = '#e60000'; }}
                                                        >
                                                            {isExpanded ? 'Thu gọn' : 'Xem chi tiết'}
                                                        </button>
                                                    </div>
                                                </div>

                                                {isExpanded && (
                                                    <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px dashed #ddd' }}>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div style={labelStyle}>Nhóm bài toán chính:</div>
                                                                <div style={valueStyle}>
                                                                    {evt.mainProblemCategory === 'Khác' 
                                                                        ? `Khác: ${evt.otherProblemCategory}` 
                                                                        : evt.mainProblemCategory}
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div style={labelStyle}>Mô tả vấn đề/bài toán:</div>
                                                        <div style={valueStyle}>{evt.problemDescription}</div>

                                                        <div style={labelStyle}>Vì sao bài toán này quan trọng lúc này?</div>
                                                        <div style={valueStyle}>{evt.problemImportance}</div>

                                                        <div style={labelStyle}>Đã thử làm gì rồi?</div>
                                                        <div style={valueStyle}>{evt.triedSolutions}</div>

                                                        <div style={labelStyle}>Đang phân vân những lựa chọn nào?</div>
                                                        <div style={valueStyle}>{evt.consideredOptions}</div>

                                                        <div style={labelStyle}>Câu hỏi chính muốn hỏi Mentor:</div>
                                                        <div style={{...valueStyle, marginBottom: 0}}>{evt.mainQuestionForMentor}</div>
                                                    </div>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </LayoutStyle1>
    );
};

export default DashboardSuKien;
