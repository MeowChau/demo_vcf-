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
                    }
                    .logo-vcf {
                        height: 100px;
                        width: auto;
                        max-width: none;
                        transform: scale(1.4);
                        transform-origin: left center;
                        margin-left: -10px;
                    }
                    
                    @media (max-width: 991px) {
                        .header-logo-container {
                            transform: scale(0.7);
                            gap: 5px;
                        }
                    }
                `}</style>
                <Link className="navbar-brand header-logo-container" href="/">
                    <img src="/assets/img/logo/logoPTIT.png" className="logo-ptit" alt="PTIT Logo" />
                    <img src="/assets/img/logo/logo%20VLGM%20final-01.jpg" className="logo-vlgm" alt="VLGM Logo" />
                    <img src="/assets/img/logo/Logo%20VCF.png" className="logo-vcf" alt="VCF Logo" />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;