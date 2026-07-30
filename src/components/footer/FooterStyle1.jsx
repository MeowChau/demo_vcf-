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
                
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px', fontSize: '16px', fontWeight: '500', color: '#444' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <i className="fa fa-home" style={{ fontSize: '24px', color: '#000000' }}></i>
                        <span>Address: Học viện Công nghệ Bưu chính Viễn thông</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <i className="fa fa-phone" style={{ fontSize: '20px', color: '#000000', transform: 'rotate(90deg)' }}></i>
                        <span>Hotline: 0936 198 686 - 0877 459 777</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <i className="fa fa-envelope" style={{ fontSize: '20px', color: '#000000' }}></i>
                        <span>Email: mentoring@vietceo.vn</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <i className="fa fa-globe" style={{ fontSize: '24px', color: '#000000' }}></i>
                        <span>Website: www.vietceo.vn</span>
                    </div>
                </div>

                <hr style={{ borderColor: '#dca670', margin: '40px 0' }} />

                <h4 style={{ color: '#003399', fontWeight: '700', textTransform: 'uppercase', marginBottom: '20px', fontSize: '18px' }}>Học viện Công nghệ Bưu chính Viễn thông</h4>
                <h4 style={{ color: '#e60000', fontWeight: '700', textTransform: 'uppercase', margin: '0', fontSize: '18px' }}>Viện Lãnh đạo, Quản trị và Quản lý Việt Nam</h4>
            </div>
        </footer>
    );
};

export default FooterStyle1;