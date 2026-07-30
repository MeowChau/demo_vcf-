import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutUs = () => {
    return (
        <div className="about-us-page-area pt-80 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                
                {/* Title */}
                <h2 style={{ color: '#335084', fontSize: '36px', marginBottom: '30px' }}>
                    About Us
                </h2>

                {/* Video Embed */}
                <div className="video-container mb-5">
                    <iframe 
                        width="100%" 
                        height="550" 
                        src="https://www.youtube.com/embed/-jAZ5vMDYhw" 
                        title="YouTube video player" 
                        frameBorder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        allowFullScreen
                        style={{ borderRadius: '5px' }}
                    ></iframe>
                </div>

                {/* Content Sections */}
                <div className="row">
                    {/* Left Column - Text Content */}
                    <div className="col-lg-8 pr-50 pr-md-15 pr-xs-15 mb-4">
                        <div className="content-box mb-40">
                            <h3 style={{ color: '#555', marginBottom: '15px', fontWeight: '400' }}>Background</h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                                ASIA CEO COMMUNITY is a pioneering prestigious club in ASIA specially 
                                catered for entrepreneurs and CEOs. The Community has long been creating a 
                                nurturing environment for ASIA CEOs and is dedicated to improving the 
                                profitability and quality of their enterprises through shared insights 
                                and experience. It also serves as a unique platform to facilitate knowledge 
                                transfer between different industries.
                            </p>
                        </div>

                        <div className="content-box mb-40">
                            <h3 style={{ color: '#555', marginBottom: '15px', fontWeight: '400' }}>Objectives</h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                                Build a strongly knitted community of CEOs across Asia and be a powerful 
                                force for change through meaningful business and social relationships
                            </p>
                        </div>

                        <div className="content-box mb-40">
                            <h3 style={{ color: '#555', marginBottom: '15px', fontWeight: '400' }}>Mission & Vision Statement</h3>
                            <ul style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', paddingLeft: '20px' }}>
                                <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>To grow nationally, representing the diversity of business in Asia, the academia and the "not for profit" sector</li>
                                <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>To provide opportunities for learning, fellowship and camaraderie in a supportive and completely secure environment</li>
                                <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>To act as a bipartisan think tank on policy issues involving community, business and, and to be a force for common good</li>
                                <li style={{ listStyleType: 'disc', marginBottom: '10px' }}>To make our members to be more productive and successful, and steer clear of trouble</li>
                            </ul>
                        </div>

                        <div className="content-box mb-40">
                            <h3 style={{ color: '#555', marginBottom: '15px', fontWeight: '400' }}>Our core values</h3>
                            <ul style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', paddingLeft: '20px' }}>
                                <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Striving for excellence</li>
                                <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Working together</li>
                                <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Compassionate care</li>
                                <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Enjoying Participation</li>
                                <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Achieving ambitions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Connect Sidebar & Image */}
                    <div className="col-lg-4">
                        <div className="connect-box p-4" style={{ backgroundColor: '#555', color: '#fff', borderRadius: '5px', marginBottom: '30px' }}>
                            <h3 style={{ color: '#fff', fontSize: '24px', marginBottom: '30px', fontWeight: '400' }}>Connect with Us</h3>
                            
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '14px', lineHeight: '2' }}>
                                <li className="mb-2"><Link href="#" style={{ color: '#ddd' }}>Join Our <span style={{ textDecoration: 'underline' }}>Whatsapp Group</span></Link></li>
                                <li className="mb-2"><Link href="#" style={{ color: '#ddd' }}>Join Our <span style={{ textDecoration: 'underline' }}>FaceBook Group</span></Link></li>
                                <li className="mb-2"><Link href="#" style={{ color: '#ddd' }}>Join Our Linkedin Group<br/><span style={{ textDecoration: 'underline' }}>Asia CEO Community</span></Link></li>
                                <li className="mb-4"><Link href="#" style={{ color: '#ddd' }}>Join Our Linkedin Group<br/><span style={{ textDecoration: 'underline' }}>Asia Investors Network</span></Link></li>
                            </ul>

                            <div className="follow-us">
                                <h5 style={{ color: '#fff', fontSize: '14px', marginBottom: '10px', textTransform: 'uppercase' }}>FOLLOW US:</h5>
                                <div className="social-icons" style={{ display: 'flex', gap: '15px', fontSize: '18px' }}>
                                    <Link href="#" style={{ color: '#fff' }}><i className="fab fa-linkedin-in"></i></Link>
                                    <Link href="#" style={{ color: '#fff' }}><i className="fab fa-twitter"></i></Link>
                                    <Link href="#" style={{ color: '#fff' }}><i className="fab fa-facebook-f"></i></Link>
                                    <Link href="#" style={{ color: '#fff' }}><i className="fab fa-instagram"></i></Link>
                                </div>
                            </div>
                        </div>

                        <div className="sidebar-image">
                            <img 
                                src="/assets/img/aboutUs/16366a164cdf42c08d53b2e2f575f01e.avif" 
                                alt="Asia CEO Community Group" 
                                style={{ width: '100%', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
