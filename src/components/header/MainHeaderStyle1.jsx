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

const AuthButton = ({ href, onClick, children, isMobile }) => {
    const btnRef = React.useRef(null);
    const padding = isMobile ? '10px 20px' : '8px 20px';

    const handleMouseEnter = () => {
        if (btnRef.current) {
            btnRef.current.style.setProperty('background-color', '#000000', 'important');
        }
    };

    const handleMouseLeave = () => {
        if (btnRef.current) {
            btnRef.current.style.setProperty('background-color', '#e20613', 'important');
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
        color: '#fff'
    };

    React.useEffect(() => {
        if (btnRef.current) {
            btnRef.current.style.setProperty('background-color', '#e20613', 'important');
            btnRef.current.style.setProperty('color', '#fff', 'important');
        }
    }, []);

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
                <nav className={`navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs sticked force-sticky navbar-fixed on no-full ${isOpen ? "navbar-responsive" : ""}`}>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-xl-2 col-lg-3 col-md-9 col-sm-9 col-9">
                                <HeaderLogo openMenu={openMenu} />
                            </div>
                            <div className="col-xl-8 col-lg-7 col-md-3 col-sm-3 col-3 d-lg-flex justify-content-end">
                                <div className={`collapse navbar-collapse collapse-mobile justify-content-end d-lg-flex ${isOpen ? "show" : ""}`} id="navbar-menu">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu} style={{ position: 'absolute', top: '10px', right: '15px', zIndex: 99 }}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                    <div className="d-block d-lg-none" style={{ height: '70px' }}></div>
                                    <MainMenu navbarPlacement="navbar-right" isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                                    <div className="d-lg-none" style={{ padding: '20px 15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                        <AuthButton href="/join-us" isMobile={true}>Đăng ký ngay</AuthButton>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 d-none d-lg-flex justify-content-end align-items-center">
                                <ul className="d-none d-lg-flex" style={{ flexDirection: 'row', alignItems: 'center', gap: '15px', margin: 0, padding: 0, listStyle: 'none' }}>
                                    <li className="button">
                                        <AuthButton href="/join-us">Đăng ký ngay</AuthButton>
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