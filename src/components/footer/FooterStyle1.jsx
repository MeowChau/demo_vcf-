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
                                <i className="fa fa-home" style={{ fontSize: '24px', color: '#003399', marginTop: '2px' }}></i>
                                <span>Address: Học viện Công nghệ Bưu chính Viễn thông</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <i className="fa fa-phone" style={{ fontSize: '22px', color: '#003399', transform: 'rotate(90deg)', marginTop: '2px' }}></i>
                                <span>Hotline: 0936 198 686 - 0877 459 777</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <i className="fa fa-envelope" style={{ fontSize: '22px', color: '#003399', marginTop: '2px' }}></i>
                                <span>Email: mentoring@vietceo.vn</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                                <i className="fa fa-globe" style={{ fontSize: '24px', color: '#003399', marginTop: '2px' }}></i>
                                <span>Website: www.vietceo.vn</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-12 mb-4" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: '#1877F2', color: 'white', borderRadius: '12px', fontSize: '28px', textDecoration: 'none', boxShadow: '0 4px 10px rgba(24, 119, 242, 0.3)', transition: 'all 0.3s' }}>
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: '#000000', color: 'white', borderRadius: '12px', fontSize: '28px', textDecoration: 'none', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)', transition: 'all 0.3s' }}>
                                <i className="fab fa-tiktok"></i>
                            </a>
                            <a href="#" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '55px', height: '55px', backgroundColor: '#FF0000', color: 'white', borderRadius: '12px', fontSize: '28px', textDecoration: 'none', boxShadow: '0 4px 10px rgba(255, 0, 0, 0.3)', transition: 'all 0.3s' }}>
                                <i className="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 mb-4">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.292513286008!2d105.78486297597155!3d20.980908480656093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135accdd8a1ad71%3A0xa2f9b16036648187!2zSOG7jWMgdmnhu4duIEPDtG5nIG5naOG7hyBCxrB1IGNow61uaCBWaeG7hW4gdGjDtG5n!5e0!3m2!1svi!2s!4v1714902103598!5m2!1svi!2s" 
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