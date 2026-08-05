import React from 'react';
import CeoMentors from '@/components/about/CeoMentors';

const AboutUs = () => {
    return (
        <div className="about-us-page-area pb-100" style={{ backgroundColor: '#fff2df', paddingTop: '150px' }}>
            <style>{`
                .eco-cell {
                    transition: all 0.3s ease;
                    background-color: transparent;
                    cursor: pointer;
                }
                .eco-cell:hover {
                    background-color: #e60000 !important;
                }
                .eco-cell:hover h4 {
                    color: #fff !important;
                }
            `}</style>
            <div className="container" style={{ maxWidth: '1200px' }}>
                
                {/* Section 1: Giới thiệu VCF */}
                <div className="mb-50">
                    <h2 style={{ color: '#e60000', fontSize: '32px', marginBottom: '30px', fontWeight: '800', fontFamily: 'var(--font-montserrat)' }}>Giới thiệu VCF</h2>
                    <hr style={{ borderColor: '#333', borderWidth: '2px', opacity: 1, margin: '0 0 40px 0' }} />
                    <div className="row">
                        <div className="col-lg-6 mb-4">
                            <h3 style={{ color: '#333', fontSize: '22px', marginBottom: '20px', fontWeight: '600' }}>Lời giới thiệu</h3>
                            <div style={{ color: '#444', fontSize: '16px', lineHeight: '1.8' }}>
                                <p className="mb-3">Vietnam CEO Forum (VCF) là diễn đàn thường niên lớn nhất dành cho giới lãnh đạo doanh nghiệp Việt Nam.</p>
                                <p className="mb-3">Nơi hội tụ những bộ óc chiến lược, chia sẻ tri thức và cùng nhau kiến tạo tương lai cho nền kinh tế.</p>
                                <p className="mb-3">Chúng tôi cam kết tạo ra một môi trường cởi mở, kết nối sâu rộng và mang lại giá trị thiết thực.</p>
                                <p className="mb-3">Sự kiện quy tụ hàng nghìn CEO và các nhà làm chính sách hàng đầu để thảo luận các vấn đề vĩ mô.</p>
                                <p>Tham gia VCF là tham gia vào một hệ sinh thái tri thức và cơ hội kinh doanh vô giá.</p>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-4">
                            <div className="mb-4">
                                <h3 style={{ color: '#333', fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>Tầm nhìn</h3>
                                <div style={{ color: '#444', fontSize: '16px', lineHeight: '1.8' }}>
                                    <p className="mb-3">Trở thành nền tảng kết nối và phát triển năng lực lãnh đạo hàng đầu khu vực.</p>
                                    <p className="mb-0">Định hình tư duy quản trị hiện đại cho cộng đồng doanh nghiệp Việt.</p>
                                </div>
                            </div>
                            <div className="mb-4">
                                <h3 style={{ color: '#333', fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>Sứ mệnh</h3>
                                <div style={{ color: '#444', fontSize: '16px', lineHeight: '1.8' }}>
                                    <p className="mb-3">Đồng hành cùng cộng đồng doanh nhân Việt Nam nâng tầm quản trị.</p>
                                    <p className="mb-0">Kiến tạo giá trị bền vững và lợi thế cạnh tranh cốt lõi trên trường quốc tế.</p>
                                </div>
                            </div>
                            <div>
                                <h3 style={{ color: '#333', fontSize: '22px', marginBottom: '15px', fontWeight: '600' }}>Giá trị</h3>
                                <div style={{ color: '#444', fontSize: '16px', lineHeight: '1.8' }}>
                                    <p className="mb-3">Khát vọng - Kết nối - Đổi mới - Cống hiến.</p>
                                    <p className="mb-0">Tạo lập môi trường kinh doanh minh bạch và hiệu quả.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '60px', marginBottom: '60px' }}></div>

                {/* Section 2: Hệ sinh thái VCF */}
                <div className="mb-50">
                    <h2 style={{ color: '#e60000', fontSize: '32px', marginBottom: '50px', fontWeight: '800', fontFamily: 'var(--font-montserrat)' }}>Hệ sinh thái VCF</h2>
                    <div className="row g-0 text-center" style={{ borderTop: '1px solid #333', borderLeft: '1px solid #333' }}>
                        {[
                            'CEO mentoring', 'CEO dialogue', 'CEO summit',
                            'CEO peer group', 'CEO platform', 'Trường phái LGM',
                            'CEO talk', 'CEO club', 'Tri thức & ấn phẩm'
                        ].map((item, index) => (
                            <div className="col-lg-4 col-md-6 eco-cell" key={index} style={{ borderBottom: '1px solid #333', borderRight: '1px solid #333' }}>
                                <div style={{ 
                                    padding: '50px 15px', 
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <h4 style={{ color: '#333', fontWeight: '400', fontSize: '22px', margin: 0, fontFamily: 'var(--font-montserrat)', transition: 'all 0.3s ease' }}>{item}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ marginTop: '80px', marginBottom: '80px' }}></div>

                {/* Section 3: Con số ấn tượng */}
                <div className="mb-50">
                    <h2 style={{ color: '#e60000', fontSize: '32px', marginBottom: '30px', fontWeight: '800', fontFamily: 'var(--font-montserrat)' }}>Con số ấn tượng</h2>
                    
                    <div className="row">
                        {[
                            { num: '1.000+', label: 'CEO đăng ký', icon: 'fas fa-graduation-cap' },
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
                                    height: '100%'
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

            {/* Section 4: Các Mentor của chương trình */}
            <div className="container" style={{ maxWidth: '1200px' }}>
                <h2 style={{ color: '#e60000', fontSize: '32px', marginBottom: '50px', fontWeight: '800', fontFamily: 'var(--font-montserrat)' }}>Chuyên gia</h2>
            </div>
            <CeoMentors hideHeader={true} />
        </div>
    );
};

export default AboutUs;
