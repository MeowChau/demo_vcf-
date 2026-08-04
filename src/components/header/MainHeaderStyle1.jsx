"use client"
import React, { useState } from 'react';
import MainMenu from './MainMenu';
import HeaderLogo from './HeaderLogo';
import Link from 'next/link';
import useStickyMenu from '../hooks/useStickyMenu';
import useSubMenuToggle from '../hooks/useSubMenuToggle';
import useSidebarMenu from '../hooks/useSidebarMenu';
import Image from 'next/image';
import logo from '@/assets/img/logo.png';
import { usePathname } from 'next/navigation';
import MembershipLoginModal from '@/components/membership/MembershipLoginModal';

const AuthButton = ({ href, onClick, children, isMobile, variant = 'primary' }) => {
    const btnRef = React.useRef(null);
    const padding = isMobile ? '10px 20px' : '8px 20px';

    const isOutline = variant === 'outline';
    const isBlack = variant === 'black';
    const defaultBg = isBlack ? '#000' : (isOutline ? 'transparent' : '#da151a');
    const defaultColor = isOutline ? '#da151a' : '#fff';
    const defaultBorder = isBlack ? '2px solid #000' : (isOutline ? '2px solid #da151a' : '2px solid #da151a');
    
    // Custom hover effect as requested
    const hoverBg = 'transparent';
    const hoverColor = '#da151a';
    const hoverBorder = '2px solid #da151a';

    const handleMouseEnter = () => {
        if (btnRef.current) {
            btnRef.current.style.setProperty('background-color', hoverBg, 'important');
            btnRef.current.style.setProperty('color', hoverColor, 'important');
            btnRef.current.style.setProperty('border', hoverBorder, 'important');
        }
    };

    const handleMouseLeave = () => {
        if (btnRef.current) {
            btnRef.current.style.setProperty('background-color', defaultBg, 'important');
            btnRef.current.style.setProperty('color', defaultColor, 'important');
            btnRef.current.style.setProperty('border', defaultBorder, 'important');
        }
    };

    const styleObj = {
        padding, 
        borderRadius: '40px', 
        fontWeight: 'bold', 
        textDecoration: 'none', 
        whiteSpace: 'nowrap', 
        display: 'inline-block', 
        cursor: 'pointer', 
        transition: 'all 0.3s',
        backgroundColor: defaultBg,
        color: defaultColor,
        border: defaultBorder
    };

    React.useEffect(() => {
        if (btnRef.current) {
            btnRef.current.style.setProperty('background-color', defaultBg, 'important');
            btnRef.current.style.setProperty('color', defaultColor, 'important');
            btnRef.current.style.setProperty('border', defaultBorder, 'important');
        }
    }, [defaultBg, defaultColor, defaultBorder]);

    if (href) {
        return (
            <Link 
                ref={btnRef}
                href={href} 
                style={styleObj}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                {children}
            </Link>
        );
    }

    return (
        <a 
            ref={btnRef}
            href="#" 
            onClick={onClick} 
            style={styleObj}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
        </a>
    );
};

const MainHeaderStyle1 = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const pathname = usePathname();

    return (
        <>
            <header>
                <style>{`
                    @media (max-width: 1360px) {
                        .desktop-flex { display: none !important; }
                        .mobile-only { display: flex !important; }
                        .mobile-only-block { display: block !important; }
                        .mobile-header-column {
                            flex: 0 0 100% !important;
                            max-width: 100% !important;
                        }
                        .navbar-collapse.collapse-mobile {
                            position: fixed !important;
                            top: 0;
                            left: -320px;
                            width: 300px;
                            max-width: 80vw;
                            height: 100vh;
                            background: #fff;
                            z-index: 99999;
                            transition: all 0.3s ease;
                            display: block !important;
                            overflow-y: auto;
                            box-shadow: 2px 0 5px rgba(0,0,0,0.1);
                        }
                        .navbar-collapse.collapse-mobile.show {
                            left: 0;
                        }
                        .overlay-screen {
                            position: fixed;
                            top: 0; left: 0; right: 0; bottom: 0;
                            background: rgba(0,0,0,0.5);
                            z-index: 99998;
                            opacity: 0;
                            visibility: hidden;
                            transition: all 0.3s ease;
                        }
                        .overlay-screen.opened {
                            opacity: 1;
                            visibility: visible;
                        }
                    }
                    @media (min-width: 1361px) {
                        .desktop-flex { display: flex !important; }
                        .mobile-only { display: none !important; }
                        .mobile-only-block { display: none !important; }
                        .flex-column-desktop { display: flex !important; }
                    }
                `}</style>
                <nav className={`navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs sticked force-sticky navbar-fixed on no-full ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-xl-2 col-lg-3 col-md-9 col-sm-9 col-9 mobile-header-column">
                                <HeaderLogo openMenu={openMenu} />
                            </div>
                            <div className="col-xl-5 col-lg-5 col-md-3 col-sm-3 col-3 flex-column-desktop justify-content-end">
                                <div className={`collapse navbar-collapse collapse-mobile justify-content-end flex-column-desktop ${isOpen ? "show" : ""}`} id="navbar-menu">
                                    <button type="button" className="navbar-toggle close-menu-btn" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu} style={{ position: 'absolute', top: '20px', right: '20px', left: 'auto', transform: 'none', zIndex: 99, background: 'none', border: '1px solid #ddd', borderRadius: '50%', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                    <div className="mobile-only-block" style={{ height: '70px' }}></div>
                                    <MainMenu navbarPlacement="navbar-right" isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                                    <div className="mobile-only" style={{ padding: '20px 15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                        <AuthButton href="/dashboard" isMobile={true}>Đăng nhập</AuthButton>
                                        <AuthButton href="/dang-ky" isMobile={true}>Đăng ký</AuthButton>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-5 col-lg-5 desktop-flex justify-content-end align-items-center">
                                <div style={{ position: 'relative', marginRight: '15px', display: 'flex', alignItems: 'center' }}>
                                    <input type="text" placeholder="Tìm kiếm..." style={{ padding: '8px 30px 8px 15px', borderRadius: '40px', border: '1px solid #ccc', outline: 'none', width: '200px', fontSize: '13px', backgroundColor: '#f9f9f9' }} />
                                    <i className="fas fa-search" style={{ position: 'absolute', right: '12px', color: '#888', cursor: 'pointer' }}></i>
                                </div>
                                <ul className="desktop-flex" style={{ flexDirection: 'row', alignItems: 'center', gap: '10px', margin: 0, padding: 0, listStyle: 'none' }}>
                                    <li className="button">
                                        <AuthButton href="/dashboard">Đăng nhập</AuthButton>
                                    </li>
                                    <li className="button">
                                        <AuthButton href="/dang-ky">Đăng ký</AuthButton>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`overlay-screen ${isOpen ? "opened" : ""}`} onClick={closeMenu}></div>
                    </div>
                </nav>
            </header>
            <MembershipLoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
        </>
    );
};

export default MainHeaderStyle1;