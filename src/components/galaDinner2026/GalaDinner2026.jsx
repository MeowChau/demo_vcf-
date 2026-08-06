import React from 'react';

const GalaDinner2026 = () => {
    const pricingBoxStyle = {
        border: '1px solid #00a896', // teal border
        padding: '4px', // Inner space for double border effect
        height: '100%',
        margin: '0 10px'
    };
    
    const innerBoxStyle = {
        border: '1px solid #00a896',
        padding: '40px 20px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    };

    return (
        <div className="gala-dinner-2026-page pt-80 pb-100" style={{ backgroundColor: '#fff', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Header Area */}
                <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap gap-3">
                    <div className="d-flex align-items-center flex-wrap gap-3">
                        <h2 style={{ fontSize: '36px', fontWeight: '300', color: '#444', margin: '0' }}>Upcoming Event</h2>
                        <span style={{ backgroundColor: '#5de0b2', color: '#fff', padding: '6px 20px', borderRadius: '20px', fontSize: '13px', fontWeight: 'bold' }}>CONNECT. MEET. GROW.</span>
                    </div>
                    <button style={{ backgroundColor: '#00bfa5', color: '#fff', border: 'none', padding: '12px 35px', fontSize: '16px', fontWeight: 'bold', boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)', textTransform: 'uppercase' }}>
                        Join Asia CEO Community!
                    </button>
                </div>

                {/* Hero Image */}
                <div className="hero-image mb-4">
                    <img src="/assets/img/eventsNetworking/5cd1297b-fcfe-4b60-afac-057779c1684c.avif" alt="Gala Dinner 2026" style={{ width: '100%', display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                </div>

                {/* Event Info Text */}
                <div className="event-info mb-5" style={{ fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    <p>You're Cordially Invited! 🌟 Join the Asia CEO Community and the Global CEO Community for an unforgettable evening of elegance and inspiration at our Gala Dinner.</p>
                    <br />
                    <p>🎉 This exclusive gathering of visionaries and trailblazers is the perfect opportunity to connect, celebrate achievements, and share our aspirations for the future. Expect an evening filled with engaging conversations, exquisite cuisine, and exceptional networking.</p>
                    <br />
                    <p>Let's come together to honor leadership, innovation, and the spirit of collaboration. We can't wait to welcome you to this extraordinary event!</p>
                    <br />
                    <div className="mt-4" style={{ fontSize: '14px', color: '#777' }}>
                        <p className="mb-3">1. All of our events are strictly private event and entry only for registered members and guests (No walk in)</p>
                        <p className="mb-3">2. Official e-receipt will be issued for business reimbursement claim or income tax deductible</p>
                        <p className="mb-4">3. Tickets once sold are non-refundable</p>
                    </div>

                    <div className="text-end mt-4">
                        <button style={{ backgroundColor: '#4267B2', color: '#fff', border: '1px solid #365899', padding: '3px 8px', fontSize: '11px', borderRadius: '3px', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}>
                            <i className="fab fa-facebook-f" style={{ marginRight: '5px' }}></i> Share
                        </button>
                    </div>
                </div>

                {/* Pricing Section */}
                <div className="pricing-section my-5 pt-4">
                    <div className="row justify-content-center align-items-stretch">
                        {/* Box 1 */}
                        <div className="col-lg-4 col-md-6 mb-5 text-center px-4 d-flex flex-column">
                            <h4 style={{ color: '#666', fontWeight: 'bold', fontSize: '20px', marginBottom: '5px' }}>Ticket Price</h4>
                            <h4 style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', minHeight: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Non-Member</h4>
                            <div style={{ ...pricingBoxStyle, flex: 1 }}>
                                <div style={innerBoxStyle}>
                                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '40px', fontWeight: '500' }}>Event Ticket Price</p>
                                    <div style={{ marginBottom: '40px' }}>
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>150 USD</p>
                                    </div>
                                    <button style={{ backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '10px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', width: '100%', whiteSpace: 'nowrap' }}>Register Now</button>
                                </div>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="col-lg-4 col-md-6 mb-5 text-center px-4 d-flex flex-column">
                            <h4 style={{ color: '#666', fontWeight: 'bold', fontSize: '20px', marginBottom: '5px' }}>Ticket Price</h4>
                            <h4 style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', minHeight: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ACC Member Only</h4>
                            <div style={{ ...pricingBoxStyle, flex: 1 }}>
                                <div style={innerBoxStyle}>
                                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '40px', fontWeight: '500' }}>Event Ticket Price</p>
                                    <div style={{ marginBottom: '40px' }}>
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>120 USD</p>
                                    </div>
                                    <button style={{ backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '10px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', width: '100%', whiteSpace: 'nowrap' }}>Register Now</button>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="col-lg-4 col-md-6 mb-5 text-center px-4 d-flex flex-column">
                            <h4 style={{ color: '#666', fontWeight: 'bold', fontSize: '20px', marginBottom: '5px' }}>Package Price</h4>
                            <h4 style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', minHeight: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Ticket +<br/>Membership</h4>
                            <div style={{ ...pricingBoxStyle, flex: 1 }}>
                                <div style={innerBoxStyle}>
                                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px', fontWeight: '500', lineHeight: '1.5' }}>Event Ticket + 1 Year Basic<br/>Membership</p>
                                    <div style={{ marginBottom: '40px' }}>
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>250 USD</p>
                                    </div>
                                    <button style={{ backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '10px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', width: '100%', whiteSpace: 'nowrap' }}>Register Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Section */}
                <div className="video-section my-5">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: '0', overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }}>
                        <iframe 
                            style={{ position: 'absolute', top: '0', left: '0', width: '100%', height: '100%' }}
                            src="https://www.youtube.com/embed/sYW7FyRHt1g" 
                            title="YouTube video player" 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen>
                        </iframe>
                    </div>
                </div>
                
                {/* Testimonials */}
                <div className="testimonials-section mt-5 pt-3 mb-5">
                    <div className="testimonial-slider position-relative text-center d-flex align-items-center justify-content-center" style={{ backgroundColor: '#8a8a8a', padding: '0', minHeight: '300px' }}>
                        {/* Mock left arrow */}
                        <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', padding: '30px 15px', cursor: 'pointer', zIndex: 2 }}>
                            <i className="fas fa-chevron-left" style={{ fontSize: '20px' }}></i>
                        </div>
                        
                        <img src="/assets/img/eventsNetworking/075a97_3c9fc50be87440acb5565fdfb2b1046d~mv2.avif" alt="Testimonial" style={{ maxWidth: '600px', width: '90%', display: 'block', margin: '0 auto', padding: '40px 0' }} />
                        
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

export default GalaDinner2026;
