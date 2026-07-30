import React from 'react';

const HkMonthlyEvent = () => {
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
        <div className="hk-monthly-event-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
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
                <div className="hero-image mb-4 text-center">
                    <img src="/assets/img/eventsNetworking/1782272643153-019ef7b9-1c56-7dea-90bd-f672425e64aa (1).avif" alt="HK Monthly Event" style={{ width: '100%', maxWidth: '900px', display: 'inline-block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                </div>

                {/* Event Info Text */}
                <div className="event-info mb-5 position-relative" style={{ fontSize: '15px', color: '#555', lineHeight: '1.6' }}>
                    <div className="mb-4" style={{ fontSize: '14px', color: '#777' }}>
                        <p className="mb-3">1. All of our events are strictly private event and entry only for registered members and guests (No walk in)</p>
                        <p className="mb-3">2. Official e-receipt will be issued for business reimbursement claim or income tax deductible</p>
                        <p className="mb-3">3. Tickets once sold are non-refundable</p>
                        <p className="mb-4">4. This event is strictly for Professional Investors as defined under the Securities and Futures Ordinance (Cap. 571, Laws of Hong Kong). By registering, you confirm that you meet the definition of a Professional Investor and agree to verify your status at the event venue.</p>
                    </div>

                    <div style={{ position: 'absolute', top: '0', right: '0' }}>
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
                            <h4 style={{ color: '#555', fontWeight: 'bold', fontSize: '24px', marginBottom: '5px' }}>Ticket Price</h4>
                            <h4 style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', minHeight: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Non-Member</h4>
                            <div style={{ ...pricingBoxStyle, flex: 1 }}>
                                <div style={innerBoxStyle}>
                                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '40px', fontWeight: '500' }}>Event Ticket Price</p>
                                    <div style={{ marginBottom: '40px' }}>
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>750 HKD Per</p>
                                        <p style={{ color: '#e74c3c', fontSize: '16px', margin: '5px 0 0 0', fontWeight: '500' }}>Person</p>
                                    </div>
                                    <button style={{ backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '10px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', width: '100%', whiteSpace: 'nowrap' }}>Register Now</button>
                                </div>
                            </div>
                        </div>

                        {/* Box 2 */}
                        <div className="col-lg-4 col-md-6 mb-5 text-center px-4 d-flex flex-column">
                            <h4 style={{ color: '#555', fontWeight: 'bold', fontSize: '24px', marginBottom: '5px' }}>Ticket Price</h4>
                            <h4 style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', minHeight: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>ACC Member Only</h4>
                            <div style={{ ...pricingBoxStyle, flex: 1 }}>
                                <div style={innerBoxStyle}>
                                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '40px', fontWeight: '500' }}>Event Ticket Price</p>
                                    <div style={{ marginBottom: '40px' }}>
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>580 HKD Per</p>
                                        <p style={{ color: '#e74c3c', fontSize: '16px', margin: '5px 0 0 0', fontWeight: '500' }}>Person</p>
                                    </div>
                                    <button style={{ backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '10px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', width: '100%', whiteSpace: 'nowrap' }}>Register Now</button>
                                </div>
                            </div>
                        </div>

                        {/* Box 3 */}
                        <div className="col-lg-4 col-md-6 mb-5 text-center px-4 d-flex flex-column">
                            <h4 style={{ color: '#555', fontWeight: 'bold', fontSize: '24px', marginBottom: '5px' }}>Ticket Price</h4>
                            <h4 style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '24px', marginBottom: '15px', minHeight: '65px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Membership<br/>Package</h4>
                            <div style={{ ...pricingBoxStyle, flex: 1 }}>
                                <div style={innerBoxStyle}>
                                    <p style={{ color: '#666', fontSize: '16px', marginBottom: '20px', fontWeight: '500', lineHeight: '1.5' }}>Package Ticket<br/>1 Year Standard Membership +<br/>Event Fee</p>
                                    <div style={{ marginBottom: '40px' }}>
                                        <p style={{ color: '#e74c3c', fontSize: '18px', margin: '0', fontWeight: 'bold' }}>1,800 HKD</p>
                                    </div>
                                    <button style={{ backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '10px 15px', fontSize: '14px', fontWeight: 'bold', textTransform: 'uppercase', width: '100%', whiteSpace: 'nowrap' }}>Register Now</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Question & Action Buttons Section */}
                <div className="text-center my-5">
                    <p style={{ fontSize: '16px', color: '#555', marginBottom: '20px' }}>
                        If you have any questions regarding our Event or would like to sponsor, please contact us via<br/>
                        <a href="mailto:ceo@asiaceo.club" style={{ color: '#333', textDecoration: 'underline', fontWeight: '500' }}>ceo@asiaceo.club</a>
                    </p>
                    <div className="d-flex justify-content-center flex-wrap mt-4">
                        <button style={btnStyleOrange}>Join us Now!</button>
                        <button style={btnStyleBlue}>Partnership</button>
                        <button style={btnStyleBlue}>Sponsorship</button>
                    </div>
                </div>
                
                {/* Testimonials */}
                <div className="testimonials-section mt-5 pt-3 mb-5">
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

export default HkMonthlyEvent;
