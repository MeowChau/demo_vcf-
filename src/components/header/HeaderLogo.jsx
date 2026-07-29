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
                <Link className="navbar-brand" href="/" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <img src="/assets/img/logo/logoPTIT.png" style={{ height: '42px', width: 'auto', maxWidth: 'none' }} alt="PTIT Logo" />
                    <img src="/assets/img/logo/logo%20VLGM%20final-01.jpg" style={{ height: '74px', width: 'auto', maxWidth: 'none' }} alt="VLGM Logo" />
                    <img src="/assets/img/logo/Logo%20VCF.png" style={{ height: '96px', width: 'auto', maxWidth: 'none' }} alt="VCF Logo" />
                </Link>
            </div>
        </>
    );
};

export default HeaderLogo;