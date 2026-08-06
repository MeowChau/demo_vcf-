"use client";
import React from 'react';
import logo from '@/assets/img/logo.png';
import Image from 'next/image';
import Link from 'next/link';

const HeaderLogo = ({ openMenu }) => {
    return (
        <>
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-menu" onClick={openMenu}>
                    <i className="fa fa-bars"></i>
                </button>
                <style>{`
                    .header-logo-container {
                        display: flex;
                        align-items: center;
                        gap: 10px;
                        transform: scale(1.4);
                        transform-origin: left center;
                        margin: 0;
                    }
                    .logo-ptit {
                        height: 40px;
                        width: auto;
                        max-width: none;
                    }
                    .logo-vlgm {
                        height: 78px;
                        width: auto;
                        max-width: none;
                        mix-blend-mode: multiply;
                    }
                    .logo-vcf {
                        height: 100px;
                        width: auto;
                        max-width: none;
                        transform: scale(1.4);
                        transform-origin: left center;
                        margin-left: -10px;
                    }
                    
                    @media (max-width: 1300px) {
                        nav.navbar {
                            height: auto !important;
                            min-height: 80px !important;
                            padding: 15px 0 !important;
                            display: flex !important;
                            align-items: center !important;
                        }
                        nav.navbar > .container {
                            width: 100% !important;
                        }
                        .navbar-header {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            width: 100%;
                            position: relative;
                            padding: 0 !important;
                        }
                        .header-logo-container {
                            transform: none;
                            gap: 15px;
                            margin: 0;
                        }
                        .logo-ptit { height: 34px !important; } /* Balanced size */
                        .logo-vlgm { height: 78px; }
                        .logo-vcf { height: 140px; transform: none; margin-left: -5px; }

                        .navbar-toggle {
                            display: block !important;
                            position: absolute !important;
                            left: 15px;
                            top: 50%;
                            transform: translateY(-50%);
                            margin: 0 !important;
                            float: none !important;
                            z-index: 99;
                        }
                    }
                    @media (max-width: 991px) {
                        nav.navbar {
                            padding: 10px 0 !important;
                        }
                        .navbar-header {
                            padding: 0 !important;
                        }
                        .header-logo-container {
                            gap: 10px;
                        }
                        .logo-ptit { height: 36px !important; }
                        .logo-vlgm { height: 58px !important; }
                        .logo-vcf { height: 126px; }
                    }
                    @media (min-width: 1301px) {
                        .navbar-toggle {
                            display: none !important;
                        }
                    }
                `}</style>
                <Link className="navbar-brand header-logo-container" href="/" style={{ mixBlendMode: 'multiply' }}>
                    <img src="/assets/img/logo/logoPTIT.png" className="logo-ptit" alt="PTIT Logo" />
                    <img src="/assets/img/logo/logo%20VLGM%20final-01.jpg" className="logo-vlgm" alt="VLGM Logo" />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;