import React from 'react';

const CeoStatsHome = () => {
    return (
        <div className="ceo-stats-home-area py-5" style={{ backgroundColor: '#fff2df', fontFamily: "'Manrope', sans-serif" }}>
            <div className="container pt-4 pb-4" style={{ maxWidth: '1200px' }}>
                <div className="row mb-5 text-center justify-content-center">
                    <div className="col-12 d-flex flex-column align-items-center">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            CON SỐ NỔI BẬT
                        </h2>
                        <div style={{ width: '150px', height: '2px', backgroundColor: '#da151a', marginTop: '15px' }}></div>
                    </div>
                </div>
                
                <div className="row">
                    {[
                        { num: '1000+', label: 'CEO đăng ký', icon: 'fas fa-graduation-cap' },
                        { num: '15+', label: 'Phiên Mentoring', icon: 'fas fa-briefcase' },
                        { num: '10+', label: 'Mentor tham gia', icon: 'fas fa-pencil-ruler' },
                        { num: '200+', label: 'CEO tham gia', icon: 'fas fa-book-open' }
                    ].map((stat, index) => (
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
