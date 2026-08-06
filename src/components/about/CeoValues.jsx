import React from 'react';
import Image from 'next/image';

const ValueBox = ({ iconClass, title, desc, isBlue }) => (
    <div style={{ 
        backgroundColor: isBlue ? '#e8f0fe' : 'transparent',
        border: isBlue ? '1px solid transparent' : '1px solid #d5c3b1',
        padding: '30px 25px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
    }}>
        <div className="d-flex align-items-center mb-3">
            <div style={{ 
                width: '45px', height: '45px', minWidth: '45px',
                border: '2.5px solid #cc0000', 
                borderRadius: '50%', 
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#cc0000', fontSize: '18px',
                marginRight: '15px'
            }}>
                <i className={iconClass}></i>
            </div>
            <h5 style={{ color: '#cc0000', fontWeight: '800', fontSize: '16px', margin: 0, fontFamily: 'var(--font-montserrat)' }}>
                {title}
            </h5>
        </div>
        <p style={{ color: '#444', fontSize: '15px', lineHeight: '1.7', margin: 0 }}>
            {desc}
        </p>
    </div>
);

const CeoValues = () => {
    return (
        <div style={{ backgroundColor: '#fff', paddingBottom: '80px', fontFamily: 'var(--font-montserrat)' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '50px' }}>
                    <h2 style={{ color: '#cc0000', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase', fontFamily: 'var(--font-montserrat)' }}>
                        GIÁ TRỊ CỦA CHƯƠNG TRÌNH
                    </h2>
                    <p style={{ color: '#444', fontSize: '16px', maxWidth: '800px', margin: '0 auto', lineHeight: '1.7' }}>
                        Không phải khóa đào tạo. Không phải hội thảo. Đây là những cuộc đối thoại dành cho những CEO đang trực tiếp điều hành doanh nghiệp của mình.
                    </p>
                </div>

                <div style={{ backgroundColor: '#fff', boxShadow: '0 10px 40px rgba(0,0,0,0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div className="row g-0 align-items-stretch">
                        <div className="col-lg-5 position-relative" style={{ minHeight: '350px' }}>
                            <Image 
                                src="/assets/img/about/ceo-mentoring-18-20260628161442-tjcbb.jpg"
                                alt="Giá trị chương trình"
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                        <div className="col-lg-7 p-4 p-lg-5">
                            <div className="row g-4">
                                <div className="col-md-6">
                                    <ValueBox 
                                        isBlue={true} 
                                        iconClass="fas fa-thumbs-up" 
                                        title="Đối thoại thực chất" 
                                        desc="CEO mang chính bài toán của doanh nghiệp mình đến để cùng trao đổi." 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <ValueBox 
                                        isBlue={false} 
                                        iconClass="fas fa-sync-alt" 
                                        title="Kết nối chất lượng" 
                                        desc="Kết nối chất lượng với các CEO cùng tầm, cùng chí hướng" 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <ValueBox 
                                        isBlue={false} 
                                        iconClass="fas fa-history" 
                                        title="Mentor thực chiến" 
                                        desc="Học hỏi từ những nhà lãnh đạo đã trực tiếp điều hành và chuyển đổi các tổ chức lớn." 
                                    />
                                </div>
                                <div className="col-md-6">
                                    <ValueBox 
                                        isBlue={false} 
                                        iconClass="far fa-credit-card" 
                                        title="Hệ sinh thái đồng hành" 
                                        desc="Đúc kết công cụ, mô hình, kinh nghiệm để áp dụng ngay vào doanh nghiệp" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="text-center" style={{ marginTop: '50px' }}>
                    <a href="#" style={{ 
                        backgroundColor: '#cc0000', 
                        color: '#fff', 
                        borderRadius: '40px', 
                        padding: '14px 45px', 
                        fontWeight: '800', 
                        fontSize: '16px', 
                        textDecoration: 'none', 
                        display: 'inline-block',
                        textTransform: 'uppercase'
                    }}>
                        VÀO NHÓM CEO
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CeoValues;
