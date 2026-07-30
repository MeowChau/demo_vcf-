import React from 'react';
import Image from 'next/image';

const formatsData = [
    {
        id: 1,
        number: '01',
        title: 'MENTORING TRỰC TIẾP\nTHEO NHÓM NHỎ',
        desc: 'Các phiên Mentoring được tổ chức với quy mô khoảng 10-15 CEO, tạo không gian trao đổi cởi mở giữa Mentor và cộng đồng doanh nghiệp.',
        image: '/assets/img/about/z7934289768980_21088567fa80181416162d7272c561a2-20260628161753-vw10m.jpg'
    },
    {
        id: 2,
        number: '02',
        title: 'MENTORING 1-1 RIÊNG\nCHO DOANH NGHIỆP',
        desc: 'Mỗi phiên được thiết kế riêng theo nhu cầu của doanh nghiệp, giúp CEO và đội ngũ lãnh đạo cùng phân tích, phản biện và tìm kiếm những hướng đi phù hợp cho từng bài toán cụ thể.',
        image: '/assets/img/about/ba-hung-20260613000614-cpzxy.png'
    },
    {
        id: 3,
        number: '03',
        title: 'MENTORING TRỰC TUYẾN\n(GLOBAL CEO)',
        desc: 'Giúp CEO tiếp cận những Mentor hàng đầu, cập nhật góc nhìn mới và kết nối với cộng đồng CEO mà không bị giới hạn bởi khoảng cách địa lý.',
        image: '/assets/img/about/87c9484f52c5d39b8ad4.jpg'
    }
];

const CeoFormats = () => {
    return (
        <div style={{ backgroundColor: '#fff2df', paddingBottom: '100px', fontFamily: "'Manrope', sans-serif" }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '60px' }}>
                    <h2 style={{ color: '#cc0000', fontSize: '36px', fontWeight: '800', marginBottom: '20px', textTransform: 'uppercase', fontFamily: 'var(--font-montserrat)' }}>
                        CÁC HÌNH THỨC TỔ CHỨC
                    </h2>
                    <p style={{ color: '#555', fontSize: '15.5px', maxWidth: '850px', margin: '0 auto', lineHeight: '1.7' }}>
                        Mỗi cuộc đối thoại không chỉ tạo giá trị cho một doanh nghiệp, mà còn góp phần xây dựng một cộng đồng doanh nhân vững mạnh vì một Việt Nam hùng cường.
                    </p>
                </div>

                <div className="row justify-content-center">
                    {formatsData.map((format, index) => {
                        let innerClass = 'mx-auto';
                        if (format.id === 1) innerClass = 'mx-auto ms-lg-0 me-lg-auto';
                        if (format.id === 3) innerClass = 'mx-auto ms-lg-auto me-lg-0';

                        return (
                        <div key={format.id} className="col-lg-4 col-md-6 mb-5" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                            <div className={innerClass} style={{
                                maxWidth: '92%',
                                width: '100%',
                                backgroundColor: '#e65c27', 
                                borderRadius: '20px', 
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column'
                            }}>
                                {/* Image Section */}
                                <div style={{ 
                                    position: 'relative', 
                                    width: '100%', 
                                    aspectRatio: '3/3.7',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    boxShadow: '0 12px 25px rgba(0,0,0,0.35)',
                                    zIndex: 2
                                }}>
                                    <Image 
                                        src={format.image}
                                        alt={format.title.replace('\n', ' ')}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                    {/* Gradient Overlay */}
                                    <div style={{ 
                                        position: 'absolute', 
                                        bottom: 0, 
                                        left: 0, 
                                        right: 0, 
                                        height: '65%', 
                                        background: 'linear-gradient(to top, rgba(110, 15, 8, 1) 0%, rgba(110, 15, 8, 0.8) 25%, transparent 100%)',
                                        display: 'flex',
                                        alignItems: 'flex-end',
                                        padding: '0 20px 20px 20px'
                                    }}>
                                        <div style={{ position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            {/* Hollow Number */}
                                            <div style={{ 
                                                fontSize: '95px', 
                                                fontWeight: '600', 
                                                color: 'transparent', 
                                                WebkitTextStroke: '1.5px rgba(255,255,255,0.6)', 
                                                lineHeight: '1',
                                                fontFamily: "'Oswald', sans-serif",
                                                letterSpacing: '-2px',
                                                marginBottom: '0px',
                                                marginLeft: '-5px'
                                            }}>
                                                {format.number}
                                            </div>
                                            {/* Title */}
                                            <h4 style={{ 
                                                color: '#fff', 
                                                fontSize: '18px', 
                                                fontWeight: '800', 
                                                fontFamily: 'var(--font-montserrat)',
                                                textTransform: 'uppercase',
                                                margin: 0,
                                                lineHeight: '1.4',
                                                whiteSpace: 'pre-line',
                                                paddingBottom: '5px'
                                            }}>
                                                {format.title}
                                            </h4>
                                        </div>
                                    </div>
                                </div>

                                {/* Text Section */}
                                <div style={{ padding: '30px 25px 25px 25px', flexGrow: 1, zIndex: 1, marginTop: '-10px' }}>
                                    <p style={{ color: '#fff', fontSize: '14px', margin: 0, lineHeight: '1.6' }}>
                                        {format.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default CeoFormats;
