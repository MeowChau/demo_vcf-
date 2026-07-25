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

const MainHeaderStyle1 = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);

    const isMenuSticky = useStickyMenu();
    const toggleSubMenu = useSubMenuToggle();
    const { isOpen, openMenu, closeMenu } = useSidebarMenu();
    const pathname = usePathname();

    return (
        <>
            <header>
                <nav className={`navbar mobile-sidenav navbar-style-one navbar-sticky navbar-default validnavs ${pathname === '/' || pathname === '/home1' ? 'white' : ''} navbar-fixed on menu-center no-full ${isMenuSticky ? 'sticked' : 'no-background'} ${isOpen ? "navbar-responsive force-sticky" : ""}`}>
                    <div className="container">
                        <div className="row align-center">
                            <div className="col-xl-2 col-lg-2 col-md-2 col-sm-1 col-1">
                                <HeaderLogo openMenu={openMenu} />
                            </div>
                            <div className="col-xl-8 col-lg-8 col-md-4 col-sm-4 col-4">
                                <div className={`collapse navbar-collapse collapse-mobile ${isOpen ? "show" : ""}`} id="navbar-menu">
                                    <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={closeMenu}>
                                        <i className="fa fa-times"></i>
                                    </button>
                                    <div className="d-block d-lg-none" style={{ height: '40px' }}></div>
                                    <MainMenu navbarPlacement="navbar-center" isOpen={isOpen} closeMenu={closeMenu} toggleSubMenu={toggleSubMenu} />
                                    <div className="d-lg-none" style={{ padding: '20px 15px', display: 'flex', gap: '10px', justifyContent: 'center' }}>
                                        <Link href="/sign-up" style={{ backgroundColor: '#e20613', color: '#fff', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>Sign Up</Link>
                                        <a href="#" onClick={(e) => { e.preventDefault(); setLoginModalOpen(true); }} style={{ backgroundColor: '#e20613', color: '#fff', padding: '10px 20px', borderRadius: '4px', fontWeight: 'bold', textDecoration: 'none' }}>Login</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-7 col-7 d-flex justify-content-end align-items-center">
                                <ul className="d-none d-lg-flex" style={{ flexDirection: 'row', alignItems: 'center', gap: '15px', margin: 0, padding: 0, listStyle: 'none' }}>
                                    <li className="button">
                                        <Link href="/sign-up" style={{ whiteSpace: 'nowrap', backgroundColor: '#e20613', color: '#fff', padding: '8px 20px', borderRadius: '4px', fontWeight: 'bold' }}>Sign Up</Link>
                                    </li>
                                    <li className="button">
                                        <a href="#" onClick={(e) => { e.preventDefault(); setLoginModalOpen(true); }} style={{ whiteSpace: 'nowrap', backgroundColor: '#e20613', color: '#fff', padding: '8px 20px', borderRadius: '4px', fontWeight: 'bold' }}>Login</a>
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