import React from 'react';
import Image from 'next/image';

const CeoIntro = () => {
    return (
        <div style={{ backgroundColor: '#fff2df', paddingBottom: '80px', fontFamily: "'Manrope', sans-serif" }}>
            <div className="container">
                <div className="row align-items-stretch">
                    {/* Image Column */}
                    <div className="col-lg-5 mb-5 mb-lg-0">
                        <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '350px' }}>
                            <Image 
                                src="/assets/img/about/z7934289805121_b022af287ca855669016fcb915cc851d-20260628161753-8cne3.jpg"
                                alt="Giới thiệu chung"
                                fill
                                style={{ objectFit: 'cover', borderRadius: '5px', boxShadow: '0 5px 20px rgba(0,0,0,0.1)' }}
                            />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="col-lg-7 ps-lg-5">
                        <h2 style={{ color: '#cc0000', fontSize: '36px', fontWeight: '800', marginBottom: '15px', textTransform: 'uppercase', fontFamily: 'var(--font-montserrat)' }}>
                            GIỚI THIỆU CHUNG
                        </h2>
                        
                        {/* Red divider line */}
                        <div style={{ width: '100%', height: '1.5px', backgroundColor: '#cc0000', marginBottom: '30px' }}></div>
                        
                        <div style={{ color: '#333', fontSize: '15px', lineHeight: '1.8', textAlign: 'justify' }}>
                            <p style={{ marginBottom: '20px' }}>
                                <strong>CEO MENTORING</strong> là chương trình được tổ chức bởi <span style={{textDecoration: 'underline'}}>Viện Lãnh đạo, Quản trị và Quản lý Việt Nam (VLGM)</span>, Học viện Công nghệ Bưu chính Viễn thông (PTIT). Đây là một hoạt động quan trọng của Diễn đàn CEO Việt Nam - Vietnam CEO Forum (VCF) được hình thành với sứ mệnh xây dựng cộng đồng CEO học hỏi, kết nối và cùng nhau kiến tạo giá trị cho doanh nghiệp và đất nước.
                            </p>
                            
                            <p style={{ marginBottom: '20px' }}>
                                <strong>Vietnam CEO Forum</strong> không chỉ tổ chức các sự kiện mà kiến tạo một hệ sinh thái dành cho các nhà lãnh đạo doanh nghiệp thông qua các chương trình đối thoại, mentoring, hội nghị, kết nối cộng đồng và chia sẻ tri thức, tạo điều kiện để các CEO học hỏi từ thực tiễn, mở rộng góc nhìn và xây dựng những mối quan hệ giá trị.
                            </p>
                            
                            <p style={{ marginBottom: '20px' }}>
                                <strong>CEO Mentoring</strong> là chuỗi đối thoại chuyên sâu giữa các CEO với những nhà lãnh đạo doanh nghiệp, chuyên gia và nhà hoạch định chính sách giàu kinh nghiệm, tập trung vào những bài toán thực tế trong điều hành doanh nghiệp.
                            </p>
                            
                            <p style={{ marginBottom: '25px' }}>
                                Thông qua CEO Mentoring, VCF mong muốn hình thành một cộng đồng CEO học hỏi lẫn nhau, cùng phát triển năng lực lãnh đạo, đồng hành trên hành trình xây dựng những doanh nghiệp hùng cường và đóng góp vào sự phát triển bền vững của đất nước.
                            </p>
                            
                            <p style={{ fontStyle: 'italic', color: '#666', fontSize: '14.5px', margin: 0, textAlign: 'left' }}>
                                Ảnh: TS. Phạm Vũ Hà Thanh, Phó Viện trưởng VLGM, Giám đốc VCF
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoIntro;
