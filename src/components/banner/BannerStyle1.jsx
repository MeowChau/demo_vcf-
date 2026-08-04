import Image from 'next/image';
import React from 'react';

const BannerStyle1 = () => {
    return (
        <div style={{ background: '#fff2df' }} className="custom-ceo-banner-container">
            <style>
                {`
                @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700;800&display=swap');
                
                .custom-ceo-banner * {
                    font-family: var(--font-montserrat), sans-serif !important;
                }
                
                .custom-ceo-banner-container {
                    padding-top: 200px;
                    padding-bottom: 50px;
                }
                
                .custom-ceo-buttons {
                    display: flex;
                    gap: 25px;
                    flex-wrap: nowrap;
                    align-items: center;
                }
                
                @media (max-width: 991px) {
                    .custom-ceo-banner-container {
                        padding-top: 150px;
                        padding-bottom: 30px;
                    }
                    .custom-ceo-buttons {
                        flex-wrap: wrap;
                        gap: 15px;
                        justify-content: flex-start;
                    }
                    .custom-ceo-image-col {
                        margin-top: 60px;
                    }
                }
                
                @media (max-width: 767px) {
                    .custom-ceo-banner-container {
                        padding-top: 120px;
                    }
                    .custom-ceo-text-col h2 {
                        font-size: 20px !important;
                    }
                    .custom-ceo-text-col h4 {
                        font-size: 16px !important;
                    }
                    .custom-ceo-text-col p {
                        font-size: 14px !important;
                    }
                    .custom-ceo-buttons a {
                        font-size: 11px !important;
                        padding: 10px 15px !important;
                        flex: 1 1 auto;
                        text-align: center;
                    }
                }
                `}
            </style>
            <div className="container custom-ceo-banner">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-lg-6 mb-5 mb-lg-0 custom-ceo-text-col">
                        <h4 style={{ color: '#e60000', fontWeight: '700', fontSize: '26px', margin: 0, paddingBottom: '45px', letterSpacing: '-0.5px' }}>
                            CEO Dialogue #1 - Vietnam CEO Forum
                        </h4>

                        <h2 style={{ color: '#003366', fontWeight: '800', fontSize: '24px', lineHeight: '1.4', margin: 0, paddingBottom: '50px' }}>
                            CEO VÀ BÀI TOÁN TĂNG TRƯỞNG NHANH MÀ KHÔNG VỠ HỆ THỐNG CỦA DOANH NGHIỆP
                        </h2>

                        <p style={{ color: '#444', lineHeight: '1.8', fontSize: '16px', margin: 0, paddingBottom: '55px' }}>
                            <strong style={{ color: '#003366' }}>CEO Dialogue</strong> là chuỗi đối thoại chuyên sâu trong Vietnam CEO Forum, quy tụ các CEO, chuyên gia và nhà lãnh đạo để cùng thảo luận những vấn đề chiến lược của doanh nghiệp và nền kinh tế. Đây là không gian kết nối tri thức, chia sẻ góc nhìn và tìm kiếm giải pháp cho những thách thức của lãnh đạo trong bối cảnh mới.
                        </p>

                        <h5 style={{ color: '#cc0000', fontWeight: 'bold', fontSize: '18px', margin: 0, paddingBottom: '70px' }}>
                            Đối thoại chiến lược. Kết nối góc nhìn. Kiến tạo giải pháp.
                        </h5>

                        <div className="custom-ceo-buttons">
                            <a href="#" style={{ display: 'inline-block', backgroundColor: '#003366', color: '#fff', borderRadius: '40px', padding: '12px 22px', fontWeight: '700', fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                                VÀO NHÓM CẬP NHẬT
                            </a>
                            <a href="#" style={{ display: 'inline-block', backgroundColor: '#cc0000', color: '#fff', borderRadius: '40px', padding: '12px 22px', fontWeight: '700', fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                                ĐĂNG KÝ VÉ MỜI
                            </a>
                            <a href="#" style={{ display: 'inline-block', backgroundColor: '#5c00e6', color: '#fff', borderRadius: '40px', padding: '12px 22px', fontWeight: '700', fontSize: '13px', textDecoration: 'none', whiteSpace: 'nowrap' }}>
                                CHƯƠNG TRÌNH DỰ KIẾN
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="col-lg-6 text-center text-lg-end custom-ceo-image-col">
                        <Image
                            src="/assets/img/about/8-22-20260717035442-ifit7.png"
                            width={600}
                            height={850}
                            style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: '5px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)' }}
                            alt="CEO Dialogue #1"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerStyle1;