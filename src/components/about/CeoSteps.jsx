import React from 'react';
import Image from 'next/image';

const stepsData = [
    {
        id: 1,
        title: "Điền form đăng ký",
        text: "Anh Chị CEO điền form đăng ký, nêu rõ vấn đề và các câu hỏi, chia sẻ các thông tin về doanh nghiệp."
    },
    {
        id: 2,
        title: "Xét duyệt của BTC",
        text: "Ban tổ chức dựa vào thông tin đăng ký sẽ phân tích đánh giá và phân loại nhóm để xếp lớp phù hợp."
    },
    {
        id: 3,
        title: "Xác nhận tham dự",
        text: "Ban tổ chức liên hệ với các CEO được chọn để thông báo chi tiết thời gian địa điểm tổ chức chương trình."
    },
    {
        id: 4,
        title: "Tham gia cộng đồng",
        text: "Anh Chị không chỉ tham gia một buổi mentoring mà sẽ gia nhập hệ sinh thái Diễn đàn CEO Việt Nam."
    }
];

const ecosystemData = [
    {
        id: 1,
        title: "CEO MENTORING",
        text: "Chương trình Mentoring chuyên sâu, nơi các CEO trao đổi trực tiếp với những nhà lãnh đạo giàu kinh nghiệm về các bài toán thực tế trong điều hành doanh nghiệp."
    },
    {
        id: 2,
        title: "CEO SUMMIT",
        text: "Sự kiện thường niên của Vietnam CEO Forum, quy tụ hàng trăm CEO, Founder và lãnh đạo cấp cao trên toàn quốc để cùng thảo luận về các vấn đề với tinh thần \"Vì một Việt Nam hùng cường.\""
    },
    {
        id: 3,
        title: "CEO DIALOGUE",
        text: "Chuỗi bàn tròn chuyên sâu với số lượng giới hạn, tập trung vào từng chủ đề cụ thể, tạo điều kiện để các CEO trao đổi sâu và thực chất."
    },
    {
        id: 4,
        title: "CEO PEER GROUP",
        text: "Các nhóm CEO được tuyển chọn theo nhóm, gặp gỡ định kỳ trong môi trường bảo mật để cùng chia sẻ kinh nghiệm, hỗ trợ nhau trên hành trình phát triển doanh nghiệp."
    },
    {
        id: 5,
        title: "CEO STUDY TOUR",
        text: "Các chương trình tham quan, nghiên cứu và kết nối tại những doanh nghiệp, tập đoàn và tổ chức trong nước hoặc quốc tế, giúp CEO tiếp cận các mô hình quản trị tiên tiến và mở rộng cơ hội hợp tác."
    },
    {
        id: 6,
        title: "CEO GLOBAL CONNECT",
        text: "Chuỗi hợp tác quốc tế giữa cộng đồng CEO Việt Nam với các doanh nhân, học giả, nhà đầu tư, chuyên gia và nhà hoạch định chính sách toàn cầu."
    }
];

const CeoSteps = () => {
    return (
        <div className="ceo-steps-area pb-100" style={{ backgroundColor: '#fff2df' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .ecosystem-item {
                    padding: 30px;
                    height: 100%;
                    text-align: left;
                }
                /* Mobile default (<768px): 1 column */
                .ecosystem-col {
                    border-bottom: 1px solid rgba(0,0,0,0.08);
                }
                .ecosystem-col:last-child {
                    border-bottom: none;
                }

                /* Tablet (768px - 991px): 2 columns */
                @media (min-width: 768px) and (max-width: 991px) {
                    .ecosystem-col:nth-child(even) {
                        border-right: none;
                    }
                    .ecosystem-col:nth-child(odd) {
                        border-right: 1px solid rgba(0,0,0,0.08);
                    }
                    .ecosystem-col:nth-child(n+5) {
                        border-bottom: none;
                    }
                }

                /* Desktop (>=992px): 3 columns */
                @media (min-width: 992px) {
                    .ecosystem-col {
                        border-right: 1px solid rgba(0,0,0,0.08);
                        border-bottom: 1px solid rgba(0,0,0,0.08);
                    }
                    .ecosystem-col:nth-child(3n) {
                        border-right: none;
                    }
                    .ecosystem-col:nth-child(n+4) {
                        border-bottom: none;
                    }
                }

                .activity-img-wrapper {
                    position: relative;
                    width: 100%;
                    aspect-ratio: 16/9;
                    border-radius: 15px;
                    overflow: hidden;
                    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
                }
                @media (min-width: 992px) {
                    .activity-img-wrapper {
                        aspect-ratio: 21/9;
                    }
                }
            `}} />
            <div className="container">
                {/* Section 1: CÁC BƯỚC THAM GIA */}
                <div className="row justify-content-center mb-4">
                    <div className="col-lg-12 text-center">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            CÁC BƯỚC THAM GIA
                        </h2>
                        <div style={{ width: '200px', height: '1.5px', backgroundColor: '#da151a', margin: '20px auto 50px auto' }}></div>
                    </div>
                </div>

                <div className="row justify-content-center mb-5 pb-5">
                    {stepsData.map((step) => (
                        <div key={step.id} className="col-lg-3 col-md-6 mb-5">
                            <div className="step-item" style={{ padding: '0 10px', textAlign: 'left' }}>
                                <div className="icon-box mb-4">
                                    <svg width="55" height="55" viewBox="0 0 24 24" fill="none" stroke="#da151a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="7 12.5 10.5 16 17 8.5"></polyline>
                                    </svg>
                                </div>
                                <h4 style={{ color: '#002b5e', fontSize: '18px', fontWeight: '800', marginBottom: '20px' }}>
                                    {step.title}
                                </h4>
                                <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.7' }}>
                                    {step.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section 2: HỆ SINH THÁI */}
                <div className="row justify-content-center pt-5 mt-2">
                    <div className="col-lg-10 text-center mb-5">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '28px', marginBottom: '25px', fontFamily: 'var(--font-montserrat)' }}>
                            HỆ SINH THÁI VIETNAM CEO FORUM
                        </h2>
                        <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.9', margin: '0 auto', maxWidth: '850px', textAlign: 'center' }}>
                            Vietnam CEO Forum (VCF) là nền tảng kết nối và phát triển dành cho cộng đồng CEO, Founder và lãnh đạo doanh nghiệp Việt Nam. Thông qua hệ sinh thái các chương trình như CEO Mentoring, CEO Summit và các hoạt động đối thoại, kết nối chuyên sâu, VCF đồng hành cùng các nhà lãnh đạo nâng cao năng lực quản trị và xây dựng những doanh nghiệp hùng cường, vì một Việt Nam hùng cường.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {ecosystemData.map((item) => (
                        <div key={item.id} className="col-lg-4 col-md-6 ecosystem-col">
                            <div className="ecosystem-item">
                                <div className="icon-box mb-3">
                                    <svg width="45" height="45" viewBox="0 0 24 24" fill="none" stroke="#002b5e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <polyline points="7 12.5 10.5 16 17 8.5"></polyline>
                                    </svg>
                                </div>
                                <h4 style={{ color: '#da151a', fontSize: '16px', fontWeight: '800', marginBottom: '15px' }}>
                                    {item.title}
                                </h4>
                                <p style={{ color: '#666', fontSize: '14.5px', lineHeight: '1.7', margin: 0 }}>
                                    {item.text}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Section 3: HÌNH ẢNH HOẠT ĐỘNG */}
                <div className="row justify-content-center pt-5 mt-5">
                    <div className="col-lg-10 text-center">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', marginBottom: '25px', fontFamily: 'var(--font-montserrat)' }}>
                            HÌNH ẢNH HOẠT ĐỘNG
                        </h2>
                        <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.9', margin: '0 auto 40px auto', maxWidth: '850px', textAlign: 'center' }}>
                            Sau 02 tháng triển khai, chương trình đã thu hút được hơn 1500 CEO quan tâm đăng ký tham gia cả tại Hà Nội và TP. Hồ Chí Minh. Ban tổ chức đang tiếp tục có kế hoạch mở rộng ra toàn quốc trong năm 2026.
                        </p>
                        
                        <div className="activity-img-wrapper">
                            <Image 
                                src="/assets/img/about/ceo-mentoring-18-20260628161442-tjcbb.jpg" 
                                alt="Hình ảnh hoạt động" 
                                fill 
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    </div>
                </div>

                {/* Section 4: ĐỐI TÁC ĐỒNG HÀNH */}
                <div className="row justify-content-center pt-5 mt-5">
                    <div className="col-lg-12 text-center mb-5">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            ĐỐI TÁC ĐỒNG HÀNH
                        </h2>
                    </div>
                </div>

                <div className="row justify-content-center g-3 pb-5">
                    {[
                        "/assets/img/about/logo-viettel-20260704100027-o440i.png",
                        "/assets/img/about/logo-mb-bank-vector-01-1024x460-20260704095728-jhhgo.png",
                        "/assets/img/about/thiet-ke-chua-co-ten-10-20260704100931-1pwkd.png",
                        "/assets/img/about/1783159642122-20260704100751-jc-hs.png",
                        "/assets/img/about/1783159656733-20260704100751-gwe9k.png"
                    ].map((logo, index) => (
                        <div key={index} className="col-6 col-md-4 col-lg">
                            <div style={{ 
                                width: '100%', 
                                aspectRatio: '1/1', 
                                border: '1px solid rgba(0,0,0,0.2)', 
                                padding: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                                    <Image 
                                        src={logo} 
                                        alt={`Đối tác ${index + 1}`} 
                                        fill 
                                        style={{ objectFit: 'contain' }} 
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CeoSteps;
