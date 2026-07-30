import React from 'react';

const AseanBusinessHub = () => {
    const btnStyleOrange = {
        background: 'linear-gradient(to bottom, #f59c25, #df7811)',
        color: '#fff',
        border: '1px solid #c96b0d',
        borderRadius: '4px',
        padding: '10px 50px',
        margin: '0 15px 15px',
        fontSize: '22px',
        fontFamily: 'var(--font-montserrat)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer'
    };

    const btnStyleBlue = {
        background: 'linear-gradient(to bottom, #72baef, #439ae0)',
        color: '#fff',
        border: '1px solid #3388cd',
        borderRadius: '4px',
        padding: '10px 50px',
        margin: '0 15px 15px',
        fontSize: '22px',
        fontFamily: 'var(--font-montserrat)',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer'
    };

    return (
        <div className="asean-business-hub-page pt-80 pb-100" style={{ backgroundColor: '#fcfcfc', color: '#333' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                
                {/* Title and Share */}
                <div className="position-relative mb-5 text-center px-2">
                    <h2 style={{ color: '#555', fontSize: '28px', fontWeight: '400', lineHeight: '1.4' }}>
                        Asia Ceo Community x Invest Selangor Berhad x Malaysia Digital Economy Corporation (MDEC) x Cyberview Sdn Bhd - Q1 2021
                    </h2>
                    <div style={{ position: 'absolute', top: '5px', right: '-60px' }} className="d-none d-xl-block">
                        <button style={{ backgroundColor: '#4267B2', color: '#fff', border: '1px solid #365899', padding: '3px 8px', fontSize: '11px', borderRadius: '3px', cursor: 'pointer', display: 'flex', alignItems: 'center', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
                            <i className="fab fa-facebook-f" style={{ marginRight: '5px' }}></i> Share
                        </button>
                    </div>
                </div>

                {/* Intro Text */}
                <div className="intro-text mb-5" style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', padding: '0 15px' }}>
                    <p>It was my great pleasure and honour to represent ASIA CEO COMMUNITY to give the welcoming remarks for this great event! Always happy to introduce investment Opportunities in Malaysia to all our members and friends</p>
                    
                    <p className="mt-4">Topic: How The Golden State of Malaysia, Selangor is Thriving as the ASEAN Business Hub</p>
                    
                    <p className="mt-4 mb-1" style={{ fontWeight: 'bold' }}>Event Moderator:</p>
                    <p>Yamilette Cano - Founder at LOUDER GLOBAL</p>

                    <p className="mt-4 mb-1" style={{ fontWeight: 'bold' }}>Event Speakers:</p>
                    <div style={{ paddingLeft: '0' }}>
                        1. The Hon. Dato' Chang Khim Teng - Selangor State Executive Councillor<br/>
                        2. Dato' hasan azhari Hj. Idris - Chief Executive Officer at Invest Selangor Berhad<br/>
                        3. Mr Raymond Siva - Chief Marketing Officer & Senior Vice President Investment & Brand at Malaysia Digital Economy Corporation<br/>
                        4. Mr. Mohd Najib Ibrahim - Managing Director at Cyberview Sdn. Bhd.
                    </div>
                </div>

                {/* Video Embed */}
                <div className="video-section mb-5 text-center mt-5">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', margin: '0 auto', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', backgroundColor: '#000' }}>
                        <iframe 
                            src="https://www.youtube.com/embed/i1h9r0AGdCU" 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            title="ASEAN Business Hub Video"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Text */}
                <div className="contact-text text-center mb-5" style={{ fontSize: '15px', color: '#555', marginTop: '40px' }}>
                    <p style={{ marginBottom: '5px' }}>If you have any questions regarding our Event or would like to sponsor, please contact us via</p>
                    <a href="mailto:ceo@asiaceo.club" style={{ color: '#333', textDecoration: 'underline' }}>ceo@asiaceo.club</a>
                </div>

                {/* Buttons */}
                <div className="action-buttons d-flex justify-content-center flex-wrap mb-5 pb-4">
                    <button style={btnStyleOrange}>Join us Now!</button>
                    <button style={btnStyleBlue}>Partnership</button>
                    <button style={btnStyleBlue}>Sponsorship</button>
                </div>

                {/* Testimonials */}
                <div className="testimonials-section mt-5 pt-3">
                    <h2 style={{ fontFamily: 'var(--font-montserrat)', fontSize: '42px', color: '#297fb8', marginBottom: '10px', marginLeft: '10px' }}>Testimonials</h2>
                    
                    <div className="testimonial-slider position-relative text-center d-flex align-items-center justify-content-center" style={{ backgroundColor: '#8a8a8a', padding: '0', minHeight: '300px' }}>
                        {/* Mock left arrow */}
                        <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', padding: '30px 15px', cursor: 'pointer', zIndex: 2 }}>
                            <i className="fas fa-chevron-left" style={{ fontSize: '20px' }}></i>
                        </div>
                        
                        <img src="/assets/img/leadershipWorkshops/075a97_3c9fc50be87440acb5565fdfb2b1046d~mv2.avif" alt="Testimonial" style={{ maxWidth: '600px', width: '90%', display: 'block', margin: '0 auto', padding: '40px 0' }} />
                        
                        {/* Mock right arrow */}
                        <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', padding: '30px 15px', cursor: 'pointer', zIndex: 2 }}>
                            <i className="fas fa-chevron-right" style={{ fontSize: '20px' }}></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AseanBusinessHub;
