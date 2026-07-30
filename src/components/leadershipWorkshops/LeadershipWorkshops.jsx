import React from 'react';
import Link from 'next/link';

const LeadershipWorkshops = () => {
    return (
        <div className="leadership-workshops-area pt-100 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container">
                {/* Header & Poster */}
                <div className="text-center mb-5">
                    <h2 style={{ color: '#444', fontSize: '24px', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '30px', borderBottom: '1px solid #444', paddingBottom: '5px', display: 'inline-block', fontWeight: '400' }}>
                        ASIA CEO COMMUNITY - PODCAST CHANNEL
                    </h2>
                    <div>
                        <img 
                            src="/assets/img/leadershipWorkshops/Wendy.avif" 
                            alt="Wendy Kok Poster" 
                            style={{ width: '100%', maxWidth: '900px', height: 'auto', display: 'block', margin: '0 auto' }} 
                        />
                    </div>
                </div>

                {/* Episode 1 */}
                <div className="mb-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h3 style={{ color: '#555', fontSize: '28px', marginBottom: '20px', fontWeight: '400' }}>
                        "Talk to VCs" Hosted by Wendy Kok<br/>Season 1 episode 1
                    </h3>
                    <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                        <p style={{ textDecoration: 'underline', fontWeight: 'bold', marginBottom: '5px' }}>Event Guests:</p>
                        <ol style={{ paddingLeft: '20px', marginBottom: '0', listStyleType: 'decimal' }}>
                            <li>Carman Chan Founder and Managing Partner at Click Ventures (Top 5 Women to watch in Asia Tech - Nikkei Asian Review )</li>
                            <li>Anne DeGheest - Managing Director at HealthTech Capital - Founder & MD at Medstars</li>
                            <li>Dr. Chenyang Xu - Managing Partner at Brightway Future Capital - Managing Board Director at PVmed - Co-Founder at Silicon Valley Future Academy - Ex General Manager, Siemens Technology to Business</li>
                            <li>Andrea (Lamari) Walne - General Partner at Manhattan Venture Partners (MVP.vc).</li>
                        </ol>
                    </div>
                    <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', backgroundColor: '#000' }}>
                        <iframe 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/PmHvl7yHoXU" 
                            title="Talk to VCs Episode 1" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                {/* Episode 2 */}
                <div className="mb-5" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <h3 style={{ color: '#555', fontSize: '28px', marginBottom: '20px', fontWeight: '400' }}>
                        "Talk to VCs" Hosted by Wendy Kok<br/>Season 1 episode 2
                    </h3>
                    <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '25px' }}>
                        <p style={{ textDecoration: 'underline', fontWeight: 'bold', marginBottom: '5px' }}>Event Guest:</p>
                        <p style={{ marginBottom: '0' }}>Jay Zhao - Founding partner at Leonis Capital</p>
                    </div>
                    <div className="video-container" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', maxWidth: '100%', backgroundColor: '#000' }}>
                        <iframe 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/13Cdh12qKTI" 
                            title="Talk to VCs Episode 2" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="row mt-5 pt-4" style={{ maxWidth: '900px', margin: '0 auto' }}>
                    <div style={{ width: '100%', borderTop: '2px dotted #4CAF50', marginBottom: '40px' }}></div>
                    
                    <div className="col-md-8 pr-md-5 mb-4 mb-md-0">
                        <h3 style={{ color: '#555', fontSize: '32px', marginBottom: '20px', fontWeight: '400' }}>
                            We make it easy to start investing
                        </h3>
                        <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', marginBottom: '30px' }}>
                            We help investors and entrepreneurs build lasting and profitable relationships. Funding from angel investors is a great solution for entrepreneurs looking to grow their business. Investors will bring a wealth of expertise and an extensive network of contacts to the table, as well as capital. Join Our community and get connected with our investors community!
                        </p>
                        <button className="btn" style={{ backgroundColor: '#e62b2b', color: '#fff', padding: '12px 30px', fontWeight: 'bold', borderRadius: '2px', fontSize: '16px', border: 'none' }}>
                            JOIN ASIA CEO COMMUNITY
                        </button>
                    </div>
                    
                    <div className="col-md-4">
                        <div style={{ backgroundColor: '#555', padding: '30px', color: '#fff', height: '100%' }}>
                            <h4 style={{ fontSize: '20px', marginBottom: '20px', fontWeight: '400', color: '#fff' }}>Connect with Us</h4>
                            
                            <div className="mb-3">
                                <p style={{ fontSize: '12px', margin: 0, color: '#ccc' }}>Join Our <a href="#" style={{ color: '#ccc', textDecoration: 'underline' }}>Facebook Group</a></p>
                            </div>
                            
                            <div className="mb-3">
                                <p style={{ fontSize: '12px', margin: 0, color: '#ccc' }}>Join Our Linkedin Group</p>
                                <a href="#" style={{ fontSize: '12px', color: '#ccc', textDecoration: 'underline' }}>Asia Investors Network</a>
                            </div>

                            <div className="mb-4">
                                <p style={{ fontSize: '12px', margin: 0, color: '#ccc' }}>Join Our Linkedin Group</p>
                                <a href="#" style={{ fontSize: '12px', color: '#ccc', textDecoration: 'underline' }}>Asia CEO Community</a>
                            </div>

                            <div>
                                <p style={{ fontSize: '12px', color: '#ccc', marginBottom: '15px', textTransform: 'uppercase' }}>FOLLOW US:</p>
                                <div className="d-flex" style={{ gap: '15px' }}>
                                    <a href="#" style={{ color: '#fff', fontSize: '14px' }}><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#" style={{ color: '#fff', fontSize: '14px' }}><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" style={{ color: '#fff', fontSize: '14px' }}><i className="fab fa-youtube"></i></a>
                                    <a href="#" style={{ color: '#fff', fontSize: '14px' }}><i className="fab fa-twitter"></i></a>
                                    <a href="#" style={{ color: '#fff', fontSize: '14px' }}><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadershipWorkshops;
