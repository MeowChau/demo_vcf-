"use client"
import React, { useState, useEffect } from 'react';

const CeoStatsHome = () => {
    const [stats, setStats] = useState([
        { num: '200+', label: 'CEO tham gia thường xuyên', icon: 'fas fa-book-open' },
        { num: '50+', label: 'CEO nòng cốt', icon: 'fas fa-briefcase' },
        { num: '1000+', label: 'Tài khoản nền tảng số', icon: 'fas fa-graduation-cap' },
        { num: '5+', label: 'Kỳ Forum/sự kiện/năm', icon: 'fas fa-pencil-ruler' }
    ]);

    useEffect(() => {
        const fetchStats = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                const res = await fetch(`${API_URL}/api/statistic`);
                const json = await res.json();
                if (json.data) {
                    const data = json.data.attributes || json.data;
                    setStats([
                        { num: data.regularCeoCount || '200+', label: 'CEO tham gia thường xuyên', icon: 'fas fa-book-open' },
                        { num: data.coreCeoCount || '50+', label: 'CEO nòng cốt', icon: 'fas fa-briefcase' },
                        { num: data.digitalAccounts || '1000+', label: 'Tài khoản nền tảng số', icon: 'fas fa-graduation-cap' },
                        { num: data.eventsPerYear || '5+', label: 'Kỳ Forum/sự kiện/năm', icon: 'fas fa-pencil-ruler' }
                    ]);
                }
            } catch (error) {
                console.error("Error fetching stats:", error);
            }
        };
        fetchStats();
    }, []);

    return (
        <div className="ceo-stats-home-area py-5" style={{ backgroundColor: '#fff', fontFamily: "'Manrope', sans-serif" }}>
            <div className="container pt-4 pb-4">
                <div className="row">
                    {stats.map((stat, index) => (
                        <div className="col-lg-3 col-md-6 mb-4" key={index}>
                            <div style={{ 
                                backgroundColor: '#f6e8d8', 
                                borderRadius: '8px', 
                                padding: '25px 20px', 
                                display: 'flex', 
                                alignItems: 'center', 
                                gap: '15px',
                                height: '100%',
                                border: '1px solid rgba(0,0,0,0.05)'
                            }}>
                                <div style={{
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    border: '1px solid #335084',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    color: '#e60000',
                                    fontSize: '24px',
                                    flexShrink: 0
                                }}>
                                    <i className={stat.icon}></i>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h2 style={{ color: '#e60000', fontSize: '32px', fontWeight: '800', margin: '0', lineHeight: '1', fontFamily: 'var(--font-montserrat)' }}>{stat.num}</h2>
                                    <p style={{ color: '#111', fontSize: '15px', fontWeight: '700', margin: '8px 0 0 0' }}>{stat.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CeoStatsHome;
