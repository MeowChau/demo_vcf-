import React from 'react';
import Image from 'next/image';

const CeoMentoring = () => {
    return (
        <div style={{ backgroundColor: '#fff2df' }}>
            {/* Top Red Banner */}
            <div style={{ backgroundColor: '#b71c1c', padding: '15px 0', textAlign: 'center' }}>
                <h4 style={{ color: '#fff', margin: 0, fontSize: '26px', fontWeight: '700' }}>
                    Vietnam CEO Forum - Vì một Việt Nam hùng cường
                </h4>
            </div>

            {/* Main Content */}
            <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                <div className="row align-items-center">
                    {/* Left Column */}
                    <div className="col-lg-6 mb-5 mb-lg-0 pe-lg-5">
                        <h2 style={{ color: '#cc0000', fontSize: '46px', fontWeight: '800', marginBottom: '15px', textTransform: 'uppercase', letterSpacing: '-1px', fontFamily: 'var(--font-montserrat)' }}>
                            CEO MENTORING
                        </h2>
                        <h5 style={{ color: '#b71c1c', fontSize: '16px', fontWeight: '800', marginBottom: '25px', textTransform: 'uppercase' }}>
                            Chương trình Mentoring thực chiến dành cho các CEO
                        </h5>
                        <h3 style={{ color: '#002060', fontSize: '32px', fontWeight: '800', lineHeight: '1.4', marginBottom: '30px' }}>
                            Một cuộc trò chuyện đúng có thể thay đổi hướng đi của cả doanh nghiệp
                        </h3>
                        <p style={{ color: '#555', fontSize: '18px', lineHeight: '1.8', marginBottom: '40px', textAlign: 'justify' }}>
                            CEO Mentoring là chuỗi chương trình đồng hành của các CEO và những doanh nhân, nhà lãnh đạo hàng đầu Việt Nam trong không gian trao đổi thực chiến và thẳng thắn. Không phải lớp học. Không phải hội thảo. Đây là nơi những quyết định quan trọng được soi chiếu từ kinh nghiệm và trí tuệ của những người đi trước.
                        </p>
                        <div className="d-flex flex-wrap" style={{ gap: '60px' }}>
                            <a href="#" style={{ backgroundColor: '#cc0000', color: '#fff', borderRadius: '40px', padding: '12px 35px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block' }}>
                                VÀO NHÓM CEO
                            </a>
                            <a href="#" style={{ backgroundColor: '#cc0000', color: '#fff', borderRadius: '40px', padding: '12px 35px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block' }}>
                                FORM ĐĂNG KÝ
                            </a>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-6 position-relative">
                        <div style={{ width: '480px', height: '480px', marginLeft: 'auto', marginRight: '0', position: 'relative' }}>
                            <div style={{ width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', position: 'relative' }}>
                                <Image 
                                    src="/assets/img/about/z7934289768980_21088567fa80181416162d7272c561a2-20260628161753-vw10m.jpg" 
                                    alt="CEO Mentoring" 
                                    fill 
                                    style={{ objectFit: 'cover' }} 
                                />
                            </div>
                            {/* Logo Badge */}
                            <div style={{ position: 'absolute', bottom: '10px', right: '10px', width: '160px', height: '160px', backgroundColor: '#fff2df', borderRadius: '50%', padding: '25px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Image src="/assets/img/logo/Logo VCF.png" alt="Vietnam CEO Forum" width={120} height={120} style={{ objectFit: 'contain' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoMentoring;
