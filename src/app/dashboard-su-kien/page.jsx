"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';

const DashboardSuKien = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const fetchEvents = async () => {
            const token = localStorage.getItem('jwt');
            const userStr = localStorage.getItem('user');

            if (!token || !userStr) {
                router.push('/dang-nhap');
                return;
            }

            const user = JSON.parse(userStr);

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

    const cardStyle = {
        backgroundColor: '#fff',
        borderRadius: '8px',
        padding: '25px',
        marginBottom: '25px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
        border: '1px solid #eaeaea',
        borderLeft: '5px solid #e60000'
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

    return (
        <LayoutStyle1>
            <section className="dashboard-area pt-50 pb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="mb-4" style={{ color: '#002b5e', fontWeight: 700 }}>Danh sách sự kiện đã đăng ký ({events.length})</h3>
                            
                            {events.length === 0 ? (
                                <div className="alert alert-info">Bạn chưa đăng ký sự kiện nào.</div>
                            ) : (
                                <div className="event-list">
                                    {events.map((evt, index) => (
                                        <div key={evt.id} style={cardStyle}>
                                            <div style={{ borderBottom: '1px solid #eee', paddingBottom: '15px', marginBottom: '15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                <h5 style={{ margin: 0, color: '#e60000' }}>Phiếu đăng ký số {events.length - index}</h5>
                                                <span style={{ color: '#888', fontSize: '14px' }}>
                                                    Ngày gửi: {new Date(evt.createdAt).toLocaleString('vi-VN')}
                                                </span>
                                            </div>

                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div style={labelStyle}>Lớp tham gia:</div>
                                                    <div style={valueStyle}>
                                                        {evt.desiredClasses && evt.desiredClasses.length > 0
                                                            ? evt.desiredClasses.join(', ')
                                                            : 'Chưa chọn'}
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
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
                                    ))}
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
