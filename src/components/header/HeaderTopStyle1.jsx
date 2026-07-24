import React from 'react';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';

const HeaderTopStyle1 = () => {
    return (
        <>
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 pl-30 pl-md-15 pl-xs-15">
                            <ul className="item-flex" style={{ gap: '25px', listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                                <li><Link href="/about-us" className="text-light text-uppercase font-weight-bold" style={{ fontSize: '13px', fontWeight: 600 }}>ABOUT US</Link></li>
                                <li><Link href="/partnership" className="text-light text-uppercase font-weight-bold" style={{ fontSize: '13px', fontWeight: 600 }}>PARTNERSHIP</Link></li>
                                <li><Link href="/global-chapters" className="text-light text-uppercase font-weight-bold" style={{ fontSize: '13px', fontWeight: 600 }}>GLOBAL CHAPTERS</Link></li>
                            </ul>
                        </div>
                        <div className="col-xl-3 col-lg-4 text-end">
                            <div className="social">
                                <ul>
                                    <SocialShare />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HeaderTopStyle1;