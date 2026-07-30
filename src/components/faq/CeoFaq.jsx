import React from 'react';
import Image from 'next/image';

const FaqItem = ({ num, title, desc }) => (
    <div style={{ marginBottom: '35px' }}>
        <div style={{ borderTop: '1px solid #dcc8b3', borderBottom: '1px solid #dcc8b3', padding: '15px 0', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <span style={{ color: '#e62b00', fontSize: '48px', fontWeight: '900', marginRight: '15px', lineHeight: '1', letterSpacing: '-1px' }}>{num}</span>
            <span style={{ color: '#003366', fontSize: '18px', fontWeight: '700', lineHeight: '1.4' }}>{title}</span>
        </div>
        <p style={{ color: '#555', fontSize: '14px', lineHeight: '1.8', margin: 0, textAlign: 'justify' }}>
            {desc}
        </p>
    </div>
);

const CeoFaq = () => {
    return (
        <div style={{ backgroundColor: '#fff2df', paddingBottom: '80px' }}>
            <div className="container">
                {/* Header */}
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#cc0000', fontWeight: '900', textTransform: 'uppercase', fontSize: '32px', marginBottom: '15px', fontFamily: 'var(--font-montserrat)' }}>
                        CÂU HỎI THƯỜNG GẶP
                    </h2>
                    <p style={{ color: '#444', fontSize: '15px', maxWidth: '900px', margin: '0 auto', lineHeight: '1.7', textAlign: 'center' }}>
                        CEO Dialogue là chuỗi đối thoại chuyên sâu thuộc Vietnam CEO Forum, quy tụ các CEO, chuyên gia và nhà lãnh đạo để cùng trao đổi về những vấn đề chiến lược của doanh nghiệp trong bối cảnh mới. Chương trình hướng đến các góc nhìn thực tiễn, kinh nghiệm quản trị và giải pháp có thể áp dụng ngay.
                    </p>
                </div>

                {/* Row 1 */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-4 mb-lg-0 pe-lg-5">
                        <FaqItem 
                            num="01." 
                            title="Chương trình có thu phí không?" 
                            desc="Không. CEO Dialogue không thu phí tham dự. Tuy nhiên, Ban Tổ chức sẽ xem xét hồ sơ đăng ký và gửi vé mời đến các đại biểu phù hợp với chủ đề của từng phiên đối thoại." 
                        />
                        <FaqItem 
                            num="02." 
                            title="Ai có thể tham gia chương trình?" 
                            desc="Chủ tịch HĐQT, Chủ doanh nghiệp, CEO, Founder và các lãnh đạo cấp cao. Số lượng khách mời được giới hạn để đảm bảo chất lượng đối thoại và khả năng tương tác trực tiếp." 
                        />
                    </div>
                    <div className="col-lg-6 text-center text-lg-end">
                        <Image 
                            src="/assets/img/question/ceo-mentoring-50-20260628161938-ksxku.jpg" 
                            width={600} 
                            height={400} 
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                            alt="CEO Mentoring" 
                        />
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row align-items-center">
                    <div className="col-lg-6 mb-4 mb-lg-0 text-center text-lg-start order-2 order-lg-1">
                        <Image 
                            src="/assets/img/question/ceo-mentoring-34-20260628161620-syi4x.jpg" 
                            width={600} 
                            height={400} 
                            style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} 
                            alt="CEO Mentoring" 
                        />
                        <div className="mt-4 text-center">
                            <a href="#" style={{ display: 'inline-block', backgroundColor: '#cc0000', color: '#fff', borderRadius: '40px', padding: '12px 35px', fontWeight: '700', fontSize: '15px', textDecoration: 'none', textTransform: 'uppercase' }}>
                                VÀO NHÓM CEO
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 mb-4 mb-lg-0 ps-lg-5">
                        <FaqItem 
                            num="03." 
                            title="Làm thế nào để tham gia?" 
                            desc="Anh/Chị truy cập đường link đăng ký để điền thông tin. Sau khi tiếp nhận đăng ký, Ban Tổ chức sẽ xem xét chọn lọc để gửi email hoặc điện thoại xác nhận đối với các đại biểu được mời tham dự." 
                        />
                        <FaqItem 
                            num="04." 
                            title="Tôi có thể nhận được giá trị gì?" 
                            desc="Anh/Chị sẽ có cơ hội: Cập nhật tư duy và xu hướng quản trị mới. Học hỏi kinh nghiệm từ các CEO và chuyên gia hàng đầu. Mở rộng mạng lưới kết nối với cộng đồng doanh nhân chất lượng. Tiếp cận những giải pháp thực tiễn có thể áp dụng cho doanh nghiệp." 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoFaq;
