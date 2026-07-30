import React from 'react';

const SingaporeCoffeeMeetup = () => {
    const btnStyleOrange = {
        background: 'linear-gradient(to bottom, #f59c25, #df7811)',
        color: '#fff',
        border: '1px solid #c96b0d',
        borderRadius: '4px',
        padding: '12px 45px',
        margin: '0 15px 15px',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'var(--font-montserrat)',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
        cursor: 'pointer'
    };

    const btnStyleBlue = {
        background: 'linear-gradient(to bottom, #6db3ee, #439ae0)',
        color: '#fff',
        border: '1px solid #3388cd',
        borderRadius: '4px',
        padding: '12px 45px',
        margin: '0 15px 15px',
        fontSize: '24px',
        fontWeight: 'bold',
        fontFamily: 'var(--font-montserrat)',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
        cursor: 'pointer'
    };

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
        <div className="singapore-coffee-meetup-page pt-80 pb-100" style={{ backgroundColor: '#fcfcfc', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Title */}
                <div className="text-center mb-5 position-relative">
                    <h1 style={{ color: '#1a365d', fontSize: '42px', fontWeight: 'bold', marginBottom: '5px' }}>COFFEE MEETUP</h1>
                    <h2 style={{ color: '#1a365d', fontSize: '32px', fontWeight: 'normal' }}>SINGAPORE CHAPTER</h2>
                    
                    <div style={{ position: 'absolute', top: '10px', right: '0' }} className="d-none d-lg-block">
                        <button style={{ backgroundColor: '#4267B2', color: '#fff', border: '1px solid #365899', padding: '3px 8px', fontSize: '11px', borderRadius: '3px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                            <i className="fab fa-facebook-f" style={{ marginRight: '5px' }}></i> Share
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hero-image mb-5 text-center">
                    <img src="/assets/img/eventsNetworking/gemini-3_1-flash-lite-image (nano-banana-2-lite)_a_draft_a_linkedin_eve (1).avif" alt="Singapore Coffee Meetup" style={{ width: '100%', maxWidth: '900px', display: 'inline-block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
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
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>65 USD</p>
                                        <p style={{ color: '#e74c3c', fontSize: '16px', margin: '5px 0 0 0', fontWeight: '500' }}>Per Person</p>
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
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>25 USD</p>
                                        <p style={{ color: '#e74c3c', fontSize: '16px', margin: '5px 0 0 0', fontWeight: '500' }}>Per Person</p>
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
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>200 USD Per</p>
                                        <p style={{ color: '#e74c3c', fontSize: '16px', margin: '5px 0 0 0', fontWeight: '500' }}>Person</p>
                                    </div>
                                    <button style={{ backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '10px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', width: '100%', whiteSpace: 'nowrap' }}>Register Now</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Big Join Button */}
                <div className="text-center my-5">
                    <button style={{ 
                        backgroundColor: '#00bfa5', 
                        color: '#fff', 
                        border: 'none', 
                        padding: '15px 60px', 
                        fontSize: '18px', 
                        fontWeight: 'bold', 
                        boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
                        textTransform: 'uppercase'
                    }}>
                        Join Asia CEO Community!
                    </button>
                </div>

                {/* Contact Text */}
                <div className="contact-text text-center mb-5" style={{ fontSize: '15px', color: '#555', marginTop: '60px' }}>
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

export default SingaporeCoffeeMeetup;
