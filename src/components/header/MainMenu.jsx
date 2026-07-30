import React, { useState } from 'react';
import Link from 'next/link';
import MembershipLoginModal from '@/components/membership/MembershipLoginModal';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const [isMembershipModalOpen, setMembershipModalOpen] = useState(false);
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement} force-right`} data-in="fadeInDown" data-out="fadeOutUp">
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&subset=vietnamese&display=swap');
                    
                    .navbar-default .navbar-nav > li > a {
                        font-family: 'Montserrat', sans-serif !important;
                    }

                    @media (min-width: 992px) {
                        .force-right {
                            display: flex !important;
                            flex-direction: row !important;
                            margin-left: auto !important;
                            justify-content: flex-end !important;
                            width: max-content !important;
                        }
                        .navbar-default .navbar-nav > li > a {
                            padding: 30px 12px !important;
                        }
                    }
                    @media (min-width: 1200px) {
                        .navbar-default .navbar-nav > li > a {
                            padding: 30px 15px !important;
                        }
                    }
                    @media (max-width: 991px) {
                        .navbar-default .navbar-nav > li > a {
                            color: #333 !important;
                            padding: 12px 15px !important;
                            display: block !important;
                        }
                    }
                `}</style>
                <li><Link href="/" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Trang chủ</Link></li>
                <li><Link href="#" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Giới thiệu</Link></li>
                <li><Link href="#" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Chương trình</Link></li>
                <li><Link href="#" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Hình ảnh</Link></li>
                <li><Link href="#" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Chia sẻ</Link></li>
            </ul>
            <style dangerouslySetInnerHTML={{
                __html: `
                .mobile-scroll-menu {
                    max-height: 50vh !important;
                    overflow-y: auto !important;
                    overflow-x: hidden !important;
                }
                /* Custom scrollbar to make it look nicer */
                .mobile-scroll-menu::-webkit-scrollbar {
                    width: 6px;
                }
                .mobile-scroll-menu::-webkit-scrollbar-thumb {
                    background-color: #ccc;
                    border-radius: 4px;
                }
            `}} />
            <MembershipLoginModal 
                isOpen={isMembershipModalOpen} 
                onClose={() => setMembershipModalOpen(false)} 
            />
        </>
    );
};

export default MainMenu;