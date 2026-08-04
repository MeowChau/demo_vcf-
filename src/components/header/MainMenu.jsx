import React, { useState } from 'react';
import Link from 'next/link';
import MembershipLoginModal from '@/components/membership/MembershipLoginModal';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const [isMembershipModalOpen, setMembershipModalOpen] = useState(false);
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement} force-right`} data-in="fadeInDown" data-out="fadeOutUp" >
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&subset=vietnamese&display=swap');
                    
                    .navbar-default .navbar-nav > li > a {
                        font-family: var(--font-montserrat), sans-serif !important;
                    }

                    @media (max-width: 1360px) {
                        .force-right {
                            display: flex !important;
                            flex-direction: column !important;
                            width: 100%;
                            padding: 0 15px;
                        }
                        .force-right > li {
                            width: 100%;
                            margin: 0 !important;
                        }
                        .navbar-default .navbar-nav > li > a {
                            padding: 15px 0 !important;
                            border-bottom: 1px solid #f0f0f0;
                            display: block;
                            font-size: 15px !important;
                        }
                    }

                    @media (min-width: 1361px) {
                        .force-right {
                            display: flex !important;
                            flex-direction: row !important;
                            margin-left: auto !important;
                            margin-right: -30px !important;
                            justify-content: flex-start !important;
                            flex-wrap: wrap !important;
                            max-width: 750px !important;
                            margin-top: 35px !important;
                            row-gap: 5px !important;
                            padding-bottom: 35px !important;
                        }
                        .navbar-default .navbar-nav > li > a {
                            padding: 0px 12px !important;
                        }
                    }
                    @media (min-width: 1200px) {
                        .navbar-default .navbar-nav > li > a {
                            padding: 0px 15px !important;
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
                <li><Link href="/about-us" className="text-uppercase" style={{ fontSize: '14px', fontWeight: 600 }}>Giới thiệu</Link></li>
                <li><Link href="/programs" className="text-uppercase" style={{ fontSize: '14px', fontWeight: 600 }}>Chương trình</Link></li>
                <li><Link href="/" className="text-uppercase" style={{ fontSize: '14px', fontWeight: 600 }}>Tri thức</Link></li>
                <li><Link href="/" className="text-uppercase" style={{ fontSize: '14px', fontWeight: 600 }}>Công cụ</Link></li>
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