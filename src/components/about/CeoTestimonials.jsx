import React from 'react';
import Image from 'next/image';

const testimonialsData = [
    {
        id: 1,
        name: "Vũ Khắc Anh",
        title: "CEO PERVASEL",
        quote: "\"Những kiến thức hôm nay tôi tiếp nhận được thực sự là những điều chưa từng nghe thấy ở bất cứ đâu. Mentor đã giải đáp thấu đáo những câu hỏi mà bấy lâu nay chưa ai có thể trả lời cho tôi\".",
        image: "/assets/img/team/1.jpg"
    },
    {
        id: 2,
        name: "Hoàng Thị Hương Giang",
        title: "CEO HKG ENERGY",
        quote: "\"Tôi cảm thấy giống như một cánh cửa đóng kín từ lâu, giờ được mở ra. Qua gợi mở của Mentor, tôi đã tìm ra giải pháp cho vấn đề nan giải của doanh nghiệp mình\"",
        image: "/assets/img/team/2.jpg"
    },
    {
        id: 3,
        name: "Nguyễn Trường Đại",
        title: "CEO VISSOFT",
        quote: "\"Những kiến thức Mentor chia sẻ rất thực tiễn, giúp tôi có thêm tư duy mới, góc nhìn mới và cách đặt vấn đề mới cho doanh nghiệp. Thực sự đó là những chia sẻ quý giá!\"",
        image: "/assets/img/team/3.jpg"
    },
    {
        id: 4,
        name: "Mai Thu Huyền",
        title: "CEO MTH GROUP",
        quote: "\"Những bài học thực chiến mà Mentor chia sẻ với chúng tôi trong chương trình thực sự rất hữu ích và rất khó thấy ở những nơi khác\"",
        image: "/assets/img/team/4.jpg"
    },
    {
        id: 5,
        name: "Đặng Thị Hải Hà",
        title: "CEO RESPECT VIETNAM",
        quote: "\"Tôi đặc biệt ấn tượng khi Mentor đã kiên nhẫn lắng nghe từng nỗi đau của chúng tôi và đưa ra những gợi ý và góc nhìn rất sắc sảo\"",
        image: "/assets/img/team/5.jpg"
    },
    {
        id: 6,
        name: "Đặng Duy Trung Hiếu",
        title: "CEO VIETNAM EXPRESS TOUR",
        quote: "\"Mentor đã giúp tôi làm rõ hơn 'bài toán' và vấn đề mà tôi đang đối mặt, một cách rất hệ thống và logic. Thực sự chương trình quá tuyệt vời!\"",
        image: "/assets/img/team/6.jpg"
    }
];

const CeoTestimonials = () => {
    return (
        <div className="ceo-testimonials-area pt-80 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 text-center mb-5">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>CHIA SẺ CỦA CÁC CEO</h2>
                        <p style={{ color: '#002b5e', fontSize: '15px', maxWidth: '900px', margin: '20px auto 0 auto', lineHeight: '1.7' }}>
                            CEO Mentoring được thiết kế như một không gian trao đổi chất lượng cao, nơi các CEO cùng chia sẻ những thách thức đang đối mặt, lắng nghe những góc nhìn đa chiều và tìm kiếm những hướng đi phù hợp cho doanh nghiệp của mình.
                        </p>
                        <div style={{ width: '50px', height: '2px', backgroundColor: '#da151a', margin: '25px auto' }}></div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    {testimonialsData.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 mb-5 text-center px-lg-4">
                            {/* Portrait Image */}
                            <div style={{ 
                                width: '180px', 
                                height: '180px', 
                                margin: '0 auto 30px auto', 
                                position: 'relative', 
                                borderRadius: '50%', 
                                overflow: 'hidden', 
                                border: '3px solid #fff'
                            }}>
                                <Image src={item.image} alt={item.name} fill style={{ objectFit: 'cover' }} />
                            </div>
                            
                            {/* Speech Bubble Icon */}
                            <div style={{ marginBottom: '25px', display: 'flex', justifyContent: 'center' }}>
                                <svg width="34" height="34" viewBox="0 0 24 24" fill="#003366">
                                    <path d="M20 2H4C2.9 2 2 2.9 2 4V16C2 17.1 2.9 18 4 18H8V22L14 18H20C21.1 18 22 17.1 22 16V4C22 2.9 21.1 2 20 2ZM16 14H8V12H16V14ZM16 10H8V8H16V10ZM16 6H8V4H16V6Z" />
                                </svg>
                            </div>

                            {/* Quote */}
                            <p style={{ color: '#003366', fontSize: '14.5px', minHeight: '90px', lineHeight: '1.7', marginBottom: '15px' }}>
                                {item.quote}
                            </p>

                            {/* Name & Title */}
                            <h4 style={{ color: '#003366', fontSize: '15px', fontWeight: '800', textTransform: 'uppercase', margin: '15px 0 5px 0', letterSpacing: '0.5px' }}>
                                {item.name}
                            </h4>
                            <span style={{ color: '#003366', fontSize: '12px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                                {item.title}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Join Button */}
                <div className="text-center mt-3">
                    <a href="#" className="btn" style={{ 
                        backgroundColor: '#d8001e', 
                        color: '#fff', 
                        padding: '14px 45px', 
                        borderRadius: '30px',
                        fontWeight: '800',
                        fontSize: '15px',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                    }}>
                        THAM GIA NHÓM
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CeoTestimonials;
