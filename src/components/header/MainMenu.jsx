import React, { useState } from 'react';
import Link from 'next/link';
import MembershipLoginModal from '@/components/membership/MembershipLoginModal';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const [isMembershipModalOpen, setMembershipModalOpen] = useState(false);
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp" style={{ marginLeft: '-2px' }}>
                <style>{`
                    @media (min-width: 992px) {
                        .navbar-default .navbar-nav > li > a {
                            padding: 30px 12px !important;
                        }
                    }
                    @media (min-width: 1200px) {
                        .navbar-default .navbar-nav > li > a {
                            padding: 30px 15px !important;
                        }
                    }
                `}</style>
                <li><Link href="/" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>HOME</Link></li>
                <li className="dropdown">
                    <Link href="/members-area" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>MEMBERS AREA</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/join-us">JOIN US</Link></li>
                        <li><Link href="/ambassadors">AMBASSADORS</Link></li>
                        <li><Link href="/certified-trainer-and-coach">CERTIFIED TRAINER & COACH</Link></li>
                        <li><Link href="/members-directory">MEMBERS DIRECTORY</Link></li>
                        <li><Link href="/community-and-government-relations">COMMUNITY & GOVERNMENT RELATIONS</Link></li>
                        <li><Link href="/business-matching">BUSINESS MATCHING</Link></li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); setMembershipModalOpen(true); }}>MY MEMBERSHIP</a>
                        </li>
                        <li><Link href="/member-requests">MENTORING REQUESTS</Link></li>
                        <li><Link href="/weekly-newsletter">WEEKLY NEWSLETTER</Link></li>
                        <li><Link href="/member-benefits">MEMBER BENEFITS</Link></li>
                        <li><Link href="/ceo-business-awards">CEO BUSINESS AWARDS</Link></li>
                        <li><Link href="/global-business-alliance">GLOBAL BUSINESS ALLIANCE</Link></li>
                        <li><Link href="/connection-3">CONNECTION 3.0</Link></li>
                        <li><Link href="/contact-our-members">CONTACT OUR MEMBERS</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/events-networking" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>EVENTS & NETWORKING</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/singapore-coffee-meetup">SINGAPORE COFFEE MEETUP</Link></li>
                        <li><Link href="/gala-dinner-2026">GALA DINNER 2026</Link></li>
                        <li><Link href="/hk-monthly-event">HK MONTHLY EVENT</Link></li>
                        <li><Link href="/guest-speaker-registration">GUEST SPEAKER REGISTRATION</Link></li>
                        <li><Link href="/more-events">MORE EVENTS</Link></li>
                        <li><Link href="/submit-an-event">SUBMIT AN EVENT</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/leadership-workshops" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>LEADERSHIP WORKSHOPS</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/aiim-ai-x-ei">AIIM - AI X EI</Link></li>
                        <li><Link href="/aiim-accelerating-ai-leadership">AIIM - ACCELERATING AI LEADERSHIP</Link></li>
                        <li><Link href="/leadership-workshops-sub">LEADERSHIP WORKSHOPS</Link></li>
                        <li><Link href="/leadership-workshops">TALK TO VCS</Link></li>
                        <li><Link href="/cios-outlook-for-tech">CIOs OUTLOOK FOR TECH 2021</Link></li>
                        <li><Link href="/asean-business-hub">ASEAN BUSINESS HUB - SELANGOR MALAYSIA</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/past-events" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>PAST EVENTS</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/singapore-2026-new-year-dinner">SINGAPORE 2026 NEW YEAR DINNER</Link></li>
                        <li><Link href="#">HK CNY LUNCHEON 2026</Link></li>
                        <li><Link href="#">STARTUP VALUATION WORKSHOP</Link></li>
                        <li><Link href="#">MOU SIGNING CEREMONY - MATRADE</Link></li>
                        <li><Link href="#">MALAYSIA - Dialogue with YBRS. ABU BAKAR</Link></li>
                        <li><Link href="#">GALA DINNER 2025</Link></li>
                        <li><Link href="#">2025 CNY LUNCHEON</Link></li>
                        <li><Link href="#">INVESTORS & PRESIDENTS DINNER</Link></li>
                        <li><Link href="#">PRE-GALA NETWORKING EVENT</Link></li>
                        <li><Link href="#">TMALL GLOBAL - E-COMMERCE IN CHINA</Link></li>
                        <li><Link href="#">INDONESIA NETWORKING NIGHT</Link></li>
                        <li><Link href="#">SINGAPORE MEETUP 2025</Link></li>
                        <li><Link href="#">ALTERNATIVE INVESTMENT 2025</Link></li>
                        <li><Link href="#">CXO ROUNDTABLE Q2 2025</Link></li>
                        <li><Link href="#">VIETNAM MARKET UPDATE - AQUIS CAPITAL</Link></li>
                        <li><Link href="#">VIETNAM HCMC EVENT</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="/publications" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>PUBLICATIONS</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/asia-ceo-magazine">ASIA CEO MAGAZINE</Link></li>
                        <li><Link href="/founder-magazines">FOUNDER MAGAZINES</Link></li>
                        <li><Link href="/venture-capitalist-magazines">VENTURE CAPITALIST MAGAZINES</Link></li>
                        <li><Link href="/c-suite-magazines">C-SUITE MAGAZINES</Link></li>
                    </ul>
                </li>
                <li className="dropdown d-block d-lg-none">
                    <Link href="/about-us" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>ABOUT US</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/media-coverage">MEDIA COVERAGE</Link></li>
                        <li><Link href="/social-responsibility">SOCIAL RESPONSIBILITY</Link></li>
                        <li><Link href="/testimonials">TESTIMONIALS</Link></li>
                        <li><Link href="/terms-and-conditions">TERMS AND CONDITIONS</Link></li>
                        <li><Link href="/privacy-policy">PRIVACY POLICY</Link></li>
                        <li><Link href="/contact-us">CONTACT US</Link></li>
                        <li><Link href="/submit-articles">SUBMIT ARTICLES</Link></li>
                    </ul>
                </li>
                <li className="dropdown d-block d-lg-none">
                    <Link href="/partnership" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>PARTNERSHIP</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/referral-program">REFERRAL PROGRAM</Link></li>
                        <li><Link href="/partner-with-us">PARTNER WITH US</Link></li>
                        <li><Link href="/sponsor-our-event">SPONSOR OUR EVENT</Link></li>
                        <li><Link href="/advertise-with-us">ADVERTISE WITH US</Link></li>
                        <li><Link href="/ceo-monthly-lunch-party">CEO MONTHLY LUNCH PARTY</Link></li>
                        <li><Link href="/2023-year-book-sponsorship">2023 YEAR BOOK - SPONSORSHIP</Link></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setMembershipModalOpen(true); }}>SUBMIT YOUR PROJECT</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setMembershipModalOpen(true); }}>POST A MESSAGE</a></li>
                    </ul>
                </li>
                <li className="dropdown d-block d-lg-none">
                    <Link href="/global-chapters" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>GLOBAL CHAPTERS</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
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