import React from 'react';

const StatBox = ({ iconClass, number, label }) => {
    return (
        <div style={{ 
            backgroundColor: '#fae6d1', 
            padding: '25px 15px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            gap: '15px', 
            borderRadius: '5px',
            height: '100%',
        }}>
            <div style={{
                width: '60px',
                height: '60px',
                minWidth: '60px',
                border: '1px solid #7c94b6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#cc0000',
                fontSize: '24px'
            }}>
                <i className={iconClass}></i>
            </div>
            <div>
                <div style={{ color: '#cc0000', fontSize: '38px', fontWeight: '700', lineHeight: '1', marginBottom: '5px', letterSpacing: '-1px' }}>
                    {number}
                </div>
                <div style={{ color: '#111', fontSize: '15px', fontWeight: '800', lineHeight: '1.2' }}>
                    {label}
                </div>
            </div>
        </div>
    );
};

const CeoStats = () => {
    return (
        <div style={{ backgroundColor: '#fff2df', paddingBottom: '80px', fontFamily: "'Manrope', sans-serif" }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h2 style={{ color: '#cc0000', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase', fontFamily: 'var(--font-montserrat)' }}>
                        CON SỐ SAU 02 THÁNG
                    </h2>
                    <p style={{ color: '#444', fontSize: '16px', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
                        Sau hơn 2 tháng triển khai, các hoạt động diễn ra liên tục hàng tuần và thu hút được đông đảo các CEO trên khắp cả nước đăng ký tham gia. Chương trình sẽ tiếp tục mở rộng ra các địa phương với nhiều hình thức khác nhau.
                    </p>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-3 col-md-6 mb-4">
                        <StatBox iconClass="fas fa-graduation-cap" number="1.500+" label="CEO đăng ký" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <StatBox iconClass="fas fa-briefcase" number="15+" label="Phiên Mentoring" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <StatBox iconClass="fas fa-pencil-ruler" number="10+" label="Mentor tham gia" />
                    </div>
                    <div className="col-lg-3 col-md-6 mb-4">
                        <StatBox iconClass="fas fa-book-open" number="200+" label="CEO tham gia" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoStats;
