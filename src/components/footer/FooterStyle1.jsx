import React from 'react';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ 
    subsets: ['latin', 'vietnamese'],
    weight: ['500', '700', '800']
});

const FooterStyle1 = () => {
    return (
        <footer className={montserrat.className} style={{ background: '#ffd49f', padding: '60px 0', textAlign: 'center', color: '#333', position: 'relative', overflow: 'hidden' }}>
            <style>
                {`
                footer::before, footer::after, .footer::before, .footer::after {
                    display: none !important;
                }
                footer *:not(i) {
                    font-family: ${montserrat.style.fontFamily} !important;
                }
                `}
            </style>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <h2 style={{ color: '#003399', fontWeight: '800', textTransform: 'uppercase', marginBottom: '10px', fontSize: '32px' }}>Diễn đàn CEO Việt Nam</h2>
                <h3 style={{ color: '#e60000', fontWeight: '800', textTransform: 'uppercase', marginBottom: '30px', fontSize: '28px' }}>Vietnam CEO Forum</h3>
                
                <div className="row" style={{ marginTop: '50px', textAlign: 'left' }}>
                    <div className="col-lg-5 col-md-12 mb-4">
                        <h4 style={{ color: '#003399', fontWeight: '800', textTransform: 'uppercase', marginBottom: '25px', fontSize: '22px' }}>Liên hệ</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '16px', fontWeight: '600', color: '#222' }}>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div style={{ width: '30px', textAlign: 'center', flexShrink: 0 }}><i className="fa fa-home" style={{ fontSize: '24px', color: '#003399', marginTop: '2px' }}></i></div>
                                <span>Địa chỉ: Học viện Công nghệ Bưu chính Viễn thông, cơ sở Ngọc Trục, 33 Đại Mỗ, Hà Nội</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div style={{ width: '30px', textAlign: 'center', flexShrink: 0 }}><i className="fa fa-phone" style={{ fontSize: '22px', color: '#003399', transform: 'rotate(90deg)', marginTop: '2px' }}></i></div>
                                <span>SĐT: 0936 198 686 - 0877 459 777</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div style={{ width: '30px', textAlign: 'center', flexShrink: 0 }}><i className="fa fa-envelope" style={{ fontSize: '22px', color: '#003399', marginTop: '2px' }}></i></div>
                                <span>Email: contact@vcf.edu.vn</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <div style={{ width: '30px', textAlign: 'center', flexShrink: 0 }}><i className="fa fa-globe" style={{ fontSize: '24px', color: '#003399', marginTop: '2px' }}></i></div>
                                <span>Website: diendanceovietnam.vn</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-12 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <a href="https://www.facebook.com/vcf.edu.vn" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: '#1877F2', color: 'white', borderRadius: '12px', fontSize: '28px', textDecoration: 'none', boxShadow: '0 4px 10px rgba(24, 119, 242, 0.3)', transition: 'all 0.3s' }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://www.tiktok.com/@vietnamceoforum.ptit" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: '#000000', color: 'white', borderRadius: '12px', fontSize: '28px', textDecoration: 'none', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s' }}>
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="https://www.youtube.com/@VietnamCEO" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: '#FF0000', color: 'white', borderRadius: '12px', fontSize: '28px', textDecoration: 'none', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.3)', transition: 'all 0.3s' }}>
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 mb-4">
                        <iframe 
                            src="https://maps.google.com/maps?q=H%E1%BB%8Dc%20vi%E1%BB%87n%20C%C3%B4ng%20ngh%E1%BB%87%20B%C6%B0u%20ch%C3%ADnh%20Vi%E1%BB%85n%20th%C3%B4ng,%20c%C6%A1%20s%E1%BB%9F%20Ng%E1%BB%8Dc%20Tr%E1%BB%A5c,%2033%20%C4%90%E1%BA%A1i%20M%E1%BB%97,%20H%C3%A0%20N%E1%BB%99i&t=&z=16&ie=UTF8&iwloc=&output=embed" 
                            width="100%" 
                            height="280" 
                            style={{ border: 0, borderRadius: '16px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }} 
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default FooterStyle1;