"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const DashboardSuKien = () => {
    const [events, setEvents] = useState([]);
    const [chartData, setChartData] = useState([]);
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
                // Fetch events for the current user
                const response = await fetch(`http://localhost:1337/api/mentoring-requests?filters[user][documentId][$eq]=${user.documentId}&populate=*`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const data = await response.json();
                const eventList = data.data || [];
                setEvents(eventList);

                // Process data for the chart (group by month)
                const monthCounts = {
                    'Tháng 1': 0, 'Tháng 2': 0, 'Tháng 3': 0, 'Tháng 4': 0,
                    'Tháng 5': 0, 'Tháng 6': 0, 'Tháng 7': 0, 'Tháng 8': 0,
                    'Tháng 9': 0, 'Tháng 10': 0, 'Tháng 11': 0, 'Tháng 12': 0
                };

                eventList.forEach(event => {
                    const date = new Date(event.createdAt);
                    const monthKey = `Tháng ${date.getMonth() + 1}`;
                    monthCounts[monthKey] += 1;
                });

                const formattedChartData = Object.keys(monthCounts).map(key => ({
                    name: key,
                    'Số sự kiện': monthCounts[key]
                }));

                setChartData(formattedChartData);
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

    return (
        <LayoutStyle1>
            <section className="dashboard-area pt-50 pb-100">
                <div className="container">
                    
                    <div className="row mb-50">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">
                                    <h4 className="mb-4" style={{ color: '#002b5e', fontWeight: 700 }}>Thống kê sự kiện đã đăng ký theo tháng</h4>
                                    <div style={{ width: '100%', height: 400 }}>
                                        <ResponsiveContainer>
                                            <BarChart
                                                data={chartData}
                                                margin={{
                                                    top: 20, right: 30, left: 20, bottom: 5,
                                                }}
                                            >
                                                <CartesianGrid strokeDasharray="3 3" />
                                                <XAxis dataKey="name" />
                                                <YAxis allowDecimals={false} />
                                                <Tooltip />
                                                <Legend />
                                                <Bar dataKey="Số sự kiện" fill="#da151a" barSize={40} />
                                            </BarChart>
                                        </ResponsiveContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12">
                            <div className="card shadow-sm border-0">
                                <div className="card-body p-4">
                                    <h4 className="mb-4" style={{ color: '#002b5e', fontWeight: 700 }}>Danh sách sự kiện đã đăng ký ({events.length})</h4>
                                    
                                    {events.length === 0 ? (
                                        <p>Bạn chưa đăng ký sự kiện nào.</p>
                                    ) : (
                                        <div className="table-responsive">
                                            <table className="table table-hover">
                                                <thead style={{ backgroundColor: '#f8f9fa' }}>
                                                    <tr>
                                                        <th>STT</th>
                                                        <th>Ngày đăng ký</th>
                                                        <th>Chủ đề quan tâm</th>
                                                        <th>Lớp tham gia</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {events.map((evt, index) => (
                                                        <tr key={evt.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{new Date(evt.createdAt).toLocaleDateString('vi-VN')}</td>
                                                            <td>{evt.mainProblemCategory}</td>
                                                            <td>
                                                                {evt.desiredClasses 
                                                                    ? evt.desiredClasses.join(', ')
                                                                    : 'Không có'}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </LayoutStyle1>
    );
};

export default DashboardSuKien;
