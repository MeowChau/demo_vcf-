"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import SocialShare from '../utilities/SocialShare';
import MembershipLoginModal from '@/components/membership/MembershipLoginModal';

const HeaderTopStyle1 = () => {
    const [isLoginModalOpen, setLoginModalOpen] = useState(false);
    return (
        <>
            <div className="top-bar-area top-bar-style-one bg-dark text-light">
                <div className="container">
                    <div className="row align-center">
                        <div className="col-xl-6 col-lg-8 offset-xl-3 pl-30 pl-md-15 pl-xs-15">
                            <ul className="item-flex" style={{ gap: '25px', listStyle: 'none', padding: 0, margin: 0, display: 'flex' }}>
                                <li className="dropdown">
                                    <Link href="/about-us" className="text-light text-uppercase font-weight-bold" style={{ fontSize: '13px', fontWeight: 600 }}>ABOUT US</Link>
                                    <ul className="dropdown-menu" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                        <li><Link href="/media-coverage">MEDIA COVERAGE</Link></li>
                                        <li><Link href="/social-responsibility">SOCIAL RESPONSIBILITY</Link></li>
                                        <li><Link href="/testimonials">TESTIMONIALS</Link></li>
                                        <li><Link href="/terms-and-conditions">TERMS AND CONDITIONS</Link></li>
                                        <li><Link href="/privacy-policy">PRIVACY POLICY</Link></li>
                                        <li><Link href="/contact-us">CONTACT US</Link></li>
                                        <li><Link href="/submit-articles">SUBMIT ARTICLES</Link></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="/partnership" className="text-light text-uppercase font-weight-bold" style={{ fontSize: '13px', fontWeight: 600 }}>PARTNERSHIP</Link>
                                    <ul className="dropdown-menu" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                        <li><Link href="/referral-program">REFERRAL PROGRAM</Link></li>
                                        <li><Link href="/partner-with-us">PARTNER WITH US</Link></li>
                                        <li><Link href="/sponsor-our-event">SPONSOR OUR EVENT</Link></li>
                                        <li><Link href="/advertise-with-us">ADVERTISE WITH US</Link></li>
                                        <li><Link href="/ceo-monthly-lunch-party">CEO MONTHLY LUNCH PARTY</Link></li>
                                        <li><Link href="/2023-year-book-sponsorship">2023 YEAR BOOK - SPONSORSHIP</Link></li>
                                        <li><a href="#" onClick={(e) => { e.preventDefault(); setLoginModalOpen(true); }}>SUBMIT YOUR PROJECT</a></li>
                                        <li><a href="#" onClick={(e) => { e.preventDefault(); setLoginModalOpen(true); }}>POST A MESSAGE</a></li>
                                    </ul>
                                </li>
                                <li className="dropdown">
                                    <Link href="/global-chapters" className="text-light text-uppercase font-weight-bold" style={{ fontSize: '13px', fontWeight: 600 }}>GLOBAL CHAPTERS</Link>
                                    <ul className="dropdown-menu" style={{ maxHeight: '60vh', overflowY: 'auto' }}>
                                        <li><Link href="#">OUR STEERING COMMITTEE</Link></li>
                                        <li><Link href="#">ASIA - HONORARY ADVISORS</Link></li>
                                        <li><Link href="#">AUSTRALIA CHAPTER</Link></li>
                                        <li><Link href="#">THE METAVERSE CHAPTER</Link></li>
                                        <li><Link href="#">BANGLADESH CHAPTER</Link></li>
                                        <li><Link href="#">CAMBODIA CHAPTER</Link></li>
                                        <li><Link href="#">CANADA CHAPTER</Link></li>
                                        <li><Link href="#">MIDDLE EAST CHAPTER</Link></li>
                                        <li><Link href="#">MEXICO CHAPTER</Link></li>
                                        <li><Link href="#">GBA CHINA CHAPTER</Link></li>
                                        <li><Link href="#">HONG KONG CHAPTER</Link></li>
                                        <li><Link href="#">SOUTH AFRICA CHAPTER</Link></li>
                                        <li><Link href="#">U.S. CHAPTER</Link></li>
                                        <li><Link href="#">SHANGHAI CHAPTER</Link></li>
                                        <li><Link href="#">TAIPEI CHAPTER</Link></li>
                                        <li><Link href="#">AFRICA CHAPTER</Link></li>
                                        <li><Link href="#">JAPAN CHAPTER</Link></li>
                                        <li><Link href="#">PHILIPPINES CHAPTER</Link></li>
                                        <li><Link href="#">LONDON CHAPTER</Link></li>
                                        <li><Link href="#">USA (SILICON VALLEY) - HONORARY ADVISORS</Link></li>
                                        <li><Link href="#">VIETNAM CHAPTER</Link></li>
                                        <li><Link href="#">INDIA CHAPTER</Link></li>
                                    </ul>
                                </li>
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
            <style dangerouslySetInnerHTML={{__html: `
                .top-bar-area .dropdown {
                    position: relative;
                }
                .top-bar-area .dropdown:hover .dropdown-menu {
                    display: block;
                    margin-top: 0;
                    border-radius: 0;
                }
                .top-bar-area .dropdown-menu {
                    display: none;
                    position: absolute;
                    top: 100%;
                    left: 0;
                    background-color: #333;
                    min-width: 250px;
                    z-index: 9999;
                    padding: 0;
                    margin: 0;
                    list-style: none;
                }
                .top-bar-area .dropdown-menu li {
                    margin: 0 !important;
                    padding: 0 !important;
                    border: none !important;
                }
                .top-bar-area .dropdown-menu li a {
                    display: block;
                    padding: 10px 20px;
                    color: #fff;
                    font-size: 13px;
                    font-weight: 600;
                    text-transform: uppercase;
                    border-bottom: 1px solid #444;
                }
                .top-bar-area .dropdown-menu li a:hover {
                    color: #ffcc00;
                    background-color: #222;
                }
            `}} />
            <MembershipLoginModal isOpen={isLoginModalOpen} onClose={() => setLoginModalOpen(false)} />
        </>
    );
};

export default HeaderTopStyle1;