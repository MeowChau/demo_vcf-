import React from 'react';
import CeoMentors from '@/components/about/CeoMentors';

const AboutUs = () => {
    return (
        <div className="about-us-page-area pb-100" style={{ backgroundColor: '#fff', paddingTop: '150px' }}>
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
                        <div className="col-lg-12">
                            
                            {/* Tầm nhìn */}
                            <div className="mb-5">
                                <h3 style={{ color: '#002b5e', fontSize: '26px', marginBottom: '20px', fontWeight: '700' }}>I. Tầm nhìn (Vision)</h3>
                                <div style={{ color: '#333', fontSize: '16px', lineHeight: '1.8' }}>
                                    <p className="mb-3" style={{ fontWeight: '600' }}>Trở thành nơi hình thành và lan tỏa Trường phái Lãnh đạo – Quản trị – Quản lý Việt Nam, kiến tạo lớp CEO Việt Nam có khát vọng, có bản lĩnh và có năng lực dẫn dắt tăng trưởng nhanh và bền vững trong kỷ nguyên mới.</p>
                                    <p className="mb-3">VCF hướng đến một thế hệ CEO Việt Nam mang khát vọng về một Việt Nam hùng cường và thịnh vượng — những người lãnh đạo doanh nghiệp không chỉ giỏi quản trị, mà còn có trường phái tư duy riêng và thuộc về một cộng đồng cùng chí hướng.</p>
                                    <p className="mb-3">Chúng tôi tin rằng sự phát triển bền vững của nền kinh tế Việt Nam bắt đầu từ chất lượng lãnh đạo của các doanh nghiệp Việt Nam. Vì vậy, VCF đặt mục tiêu trở thành cái nôi tri thức và hành động, nơi những giá trị lãnh đạo bản sắc Việt được đúc kết, kiểm chứng qua thực tiễn, và truyền lại qua nhiều thế hệ doanh nhân.</p>
                                </div>
                            </div>

                            {/* Sứ mệnh */}
                            <div className="mb-5">
                                <h3 style={{ color: '#002b5e', fontSize: '26px', marginBottom: '20px', fontWeight: '700' }}>II. Sứ mệnh (Mission)</h3>
                                <div style={{ color: '#333', fontSize: '16px', lineHeight: '1.8' }}>
                                    <p className="mb-4">VCF theo đuổi bốn sứ mệnh cốt lõi:</p>
                                    
                                    <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>1. Kết nối CEO Việt Nam thành một cộng đồng hành động</h4>
                                    <p className="mb-4">Xây dựng một mạng lưới CEO gắn kết bằng niềm tin, chia sẻ giá trị và cùng hành động vì sự phát triển của doanh nghiệp và đất nước — không chỉ là nơi gặp gỡ, mà là nơi khởi phát những sáng kiến, hợp tác và dự án thực chất giữa các thành viên.</p>
                                    
                                    <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>2. Phát triển và truyền lại tri thức, kinh nghiệm, bản lĩnh lãnh đạo giữa các thế hệ CEO Việt Nam</h4>
                                    <p className="mb-4">Tạo cầu nối giữa các thế hệ doanh nhân — nơi những CEO dày dạn kinh nghiệm đồng hành, cố vấn (mentor) cho thế hệ lãnh đạo kế cận, giúp rút ngắn hành trình trưởng thành và tránh những sai lầm không đáng có.</p>
                                    
                                    <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>3. Xây dựng và chuẩn hóa Trường phái LGM Việt Nam (Leadership – Governance – Management)</h4>
                                    <p className="mb-4">Nghiên cứu, hệ thống hóa và chuẩn hóa những nguyên lý lãnh đạo – quản trị – quản lý phù hợp với đặc thù văn hóa, thể chế và giai đoạn phát triển của doanh nghiệp Việt Nam, thay vì chỉ sao chép mô hình từ bên ngoài.</p>
                                    
                                    <h4 style={{ fontSize: '18px', fontWeight: '700', marginBottom: '10px' }}>4. Đóng góp trực tiếp vào chính sách và phát triển quốc gia</h4>
                                    <p className="mb-4">Là kênh phản biện và hiến kế chính sách từ thực tiễn doanh nghiệp, đưa tiếng nói của cộng đồng CEO vào quá trình hoạch định chính sách kinh tế, góp phần tạo môi trường kinh doanh thuận lợi và bền vững.</p>
                                </div>
                            </div>

                            {/* Định vị */}
                            <div className="mb-5">
                                <h3 style={{ color: '#002b5e', fontSize: '26px', marginBottom: '20px', fontWeight: '700' }}>III. Định vị (Positioning)</h3>
                                <div style={{ color: '#333', fontSize: '16px', lineHeight: '1.8' }}>
                                    <p className="mb-3" style={{ fontWeight: '600' }}>VCF là nền tảng lý luận và hành động của CEO Việt Nam.</p>
                                    <p className="mb-4">Chúng tôi không chỉ là một diễn đàn để lắng nghe và học hỏi, mà là nơi tri thức được chuyển hóa thành hành động, và hành động được đúc kết trở lại thành tri thức.</p>
                                    
                                    <div style={{ borderLeft: '4px solid #da151a', paddingLeft: '20px', fontStyle: 'italic', color: '#555', marginBottom: '20px', fontSize: '18px' }}>
                                        Thành công của thế hệ CEO trước trở thành nền tảng cho thành công của thế hệ sau.
                                    </div>
                                    <p className="mb-3">Đây là triết lý xuyên suốt mọi hoạt động của VCF: mỗi chương trình, mỗi sự kiện, mỗi nội dung tri thức được xây dựng đều nhằm mục đích tích lũy và truyền thừa — để giá trị không dừng lại ở một thế hệ, mà tiếp tục được bồi đắp và lan tỏa.</p>
                                </div>
                            </div>

                            {/* Giá trị cốt lõi */}
                            <div className="mb-4">
                                <h3 style={{ color: '#002b5e', fontSize: '26px', marginBottom: '20px', fontWeight: '700' }}>IV. Giá trị cốt lõi (Core Values)</h3>
                                <ul style={{ color: '#333', fontSize: '16px', lineHeight: '1.8', paddingLeft: '20px' }}>
                                    <li className="mb-3"><strong>Khát vọng dẫn dắt</strong> — Không ngừng vươn lên vì sự thịnh vượng chung của doanh nghiệp và đất nước.</li>
                                    <li className="mb-3"><strong>Bản lĩnh Việt Nam</strong> — Xây dựng trường phái lãnh đạo mang bản sắc, phù hợp với thực tiễn và văn hóa Việt.</li>
                                    <li className="mb-3"><strong>Kết nối thực chất</strong> — Cộng đồng gắn kết bằng hành động và giá trị, không dừng ở giao lưu bề mặt.</li>
                                    <li className="mb-3"><strong>Truyền thừa tri thức</strong> — Tôn trọng kinh nghiệm thế hệ trước, kiến tạo nền tảng cho thế hệ sau.</li>
                                    <li className="mb-3"><strong>Đồng hành cùng chính sách quốc gia</strong> — Gắn sự phát triển của doanh nghiệp với sự phát triển bền vững của đất nước.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>

                <div style={{ marginTop: '60px', marginBottom: '60px' }}></div>

                {/* Section 2: Hệ sinh thái VCF */}
                <div className="mb-50">
                    
                    <div style={{ backgroundColor: '#fdf9f1', padding: '30px', borderRadius: '8px' }}>
                        
                        {/* FLAGSHIP */}
                        <div style={{ marginBottom: '25px' }}>
                            <div style={{ color: '#8c6b23', fontWeight: '700', fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase' }}>
                                <i className="fas fa-circle" style={{ fontSize: '10px', marginRight: '6px', verticalAlign: 'middle' }}></i> FLAGSHIP - SỰ KIỆN ĐỈNH CAO
                            </div>
                            <div style={{ backgroundColor: '#b30000', padding: '18px 25px', borderRadius: '4px' }}>
                                <h4 style={{ color: '#fff', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>CEO Summit</h4>
                            </div>
                        </div>

                        {/* COMMUNITY */}
                        <div style={{ marginBottom: '25px' }}>
                            <div style={{ color: '#8c6b23', fontWeight: '700', fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase' }}>
                                <i className="fas fa-circle" style={{ fontSize: '10px', marginRight: '6px', verticalAlign: 'middle' }}></i> COMMUNITY - CỘNG ĐỒNG CEO
                            </div>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px', height: '100%' }}>
                                        <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>CEO Forum</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px', height: '100%' }}>
                                        <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>CEO Mentoring</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px', height: '100%' }}>
                                        <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>CEO Peer Group</h4>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px', height: '100%' }}>
                                        <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>CEO Club</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* KNOWLEDGE & DIGITAL */}
                        <div className="row g-3">
                            <div className="col-md-6">
                                <div>
                                    <div style={{ color: '#8c6b23', fontWeight: '700', fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase' }}>
                                        <i className="fas fa-circle" style={{ fontSize: '10px', marginRight: '6px', verticalAlign: 'middle' }}></i> KNOWLEDGE - TRI THỨC
                                    </div>
                                    <div className="d-flex flex-column gap-3">
                                        <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px' }}>
                                            <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>Trường phái LGM VN</h4>
                                        </div>
                                        <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px' }}>
                                            <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>Hệ tri thức & Ấn phẩm</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div>
                                    <div style={{ color: '#8c6b23', fontWeight: '700', fontSize: '14px', marginBottom: '12px', textTransform: 'uppercase' }}>
                                        <i className="fas fa-circle" style={{ fontSize: '10px', marginRight: '6px', verticalAlign: 'middle' }}></i> DIGITAL / MEDIA - SỐ HÓA
                                    </div>
                                    <div className="d-flex flex-column gap-3">
                                        <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px' }}>
                                            <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>Web / App VCF</h4>
                                        </div>
                                        <div style={{ backgroundColor: '#fff', border: '1px solid #ebd9c3', padding: '18px 25px', borderRadius: '4px' }}>
                                            <h4 style={{ color: '#cc0000', margin: 0, fontWeight: '800', fontSize: '18px', fontFamily: 'var(--font-montserrat)' }}>CEO Talk</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div style={{ marginTop: '80px', marginBottom: '80px' }}></div>

                {/* Section 3: Con số ấn tượng */}
                <div className="mb-50">
                    
                    <div className="row">
                        {[
                            { num: '200+', label: 'CEO tham gia thường xuyên', icon: 'fas fa-book-open' },
                            { num: '50+', label: 'CEO nòng cốt', icon: 'fas fa-briefcase' },
                            { num: '1000+', label: 'Tài khoản nền tảng số', icon: 'fas fa-graduation-cap' },
                            { num: '5+', label: 'Kỳ Forum/sự kiện/năm', icon: 'fas fa-pencil-ruler' }
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
