import React from 'react';

const CeoMonthlyLunchParty = () => {
    return (
        <div className="ceo-lunch-party-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                
                {/* Intro Section */}
                <h1 style={{ color: '#3b71ca', fontSize: '32px', marginBottom: '30px' }}>
                    Monthly CEO Lunch Party Sponsorship Opportunities
                </h1>

                <h3 style={{ color: '#555', fontSize: '28px', textTransform: 'none', marginBottom: '15px', fontFamily: 'var(--font-montserrat)', letterSpacing: '0.5px' }}>
                    Connect with your target audience
                </h3>
                
                <p style={{ color: '#555', fontSize: '15px', marginBottom: '10px' }}>
                    Partnering with ASIA CEO COMMUNITY means:
                </p>
                <ul style={{ color: '#555', fontSize: '15px', marginBottom: '20px', paddingLeft: '20px' }}>
                    <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Engagement with Business leaders in many difference industries and sectors</li>
                    <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Access to decision-makers in ASIA</li>
                    <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Positioning your organization as a leader with a globally respected organization</li>
                </ul>

                <p style={{ color: '#555', fontSize: '15px', marginBottom: '15px', lineHeight: '1.6' }}>
                    Our advertising and sponsorship packages are designed to provide a solid platform to help you stand out and make an impact. Our programs allow you to achieve your marketing goals and deliver a maximum return on your investment.
                </p>
                <p style={{ color: '#555', fontSize: '15px', marginBottom: '30px', lineHeight: '1.6' }}>
                    Showcase your products and services with a highly desirable and motivated audience at ASIA CEO Community Luncheon event.
                </p>

                <p style={{ color: '#f39c12', fontSize: '16px', fontWeight: 'bold', marginBottom: '10px' }}>
                    Sponsorship benefits
                </p>
                <ul style={{ color: '#555', fontSize: '15px', marginBottom: '40px', paddingLeft: '20px' }}>
                    <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Three complimentary seats to the sponsored Lunch session.</li>
                    <li style={{ listStyleType: 'disc', marginBottom: '5px' }}>Sponsor speaking opportunity during the Lunch Session</li>
                </ul>

                {/* Pricing Boxes */}
                <div className="row mb-5 justify-content-center">
                    {/* Monthly Sponsor */}
                    <div className="col-md-5 mb-4 px-3">
                        <div style={{ border: '1px solid #b3d4fc', padding: '40px 25px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '25px' }}>
                                <span style={{ backgroundColor: '#76d7c4', color: '#fff', padding: '10px 30px', borderRadius: '25px', fontSize: '18px' }}>Monthly Sponsor</span>
                            </div>
                            <h4 style={{ color: '#555', fontSize: '24px', marginBottom: '5px', fontWeight: 'normal' }}>Monthly CEOs Lunch</h4>
                            <h4 style={{ color: '#555', fontSize: '24px', marginBottom: '10px', fontWeight: 'normal' }}>Party (two available)</h4>
                            <h3 style={{ color: '#666', fontSize: '32px', marginBottom: '30px', fontWeight: 'normal' }}>$25,000 HKD</h3>
                            
                            <div style={{ color: '#666', fontSize: '13px', textAlign: 'center', marginBottom: '25px', flex: 1, lineHeight: '1.5' }}>
                                • Cater to the entire delegation during lunch. Includes signage and display of your logo on napkins. Sponsor also has opportunity to provide marketing collateral or a giveaway at the lunch tables.
                            </div>
                            
                            <p style={{ color: '#d9534f', fontSize: '13px', marginBottom: '30px', fontStyle: 'italic' }}>
                                Please note that all artwork, logos or informational pieces must be provided by the sponsor.
                            </p>

                            <button style={{ backgroundColor: '#fff2df', color: '#d9534f', border: '2px solid #76d7c4', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', width: '100%', cursor: 'pointer' }}>
                                Sign Up Montly Sponsor
                            </button>
                        </div>
                    </div>

                    {/* Yearly Sponsor */}
                    <div className="col-md-5 mb-4 px-3">
                        <div style={{ border: '1px solid #b3d4fc', padding: '40px 25px', textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ marginBottom: '25px' }}>
                                <span style={{ backgroundColor: '#76d7c4', color: '#fff', padding: '10px 30px', borderRadius: '25px', fontSize: '18px' }}>Yearly Sponsor</span>
                            </div>
                            <h4 style={{ color: '#555', fontSize: '24px', marginBottom: '5px', fontWeight: 'normal' }}>Monthly CEOs Lunch</h4>
                            <h4 style={{ color: '#555', fontSize: '24px', marginBottom: '10px', fontWeight: 'normal' }}>Party (two available)</h4>
                            <h3 style={{ color: '#666', fontSize: '32px', marginBottom: '30px', fontWeight: 'normal' }}>$250,000 HKD</h3>
                            
                            <div style={{ color: '#666', fontSize: '13px', textAlign: 'center', marginBottom: '25px', flex: 1, lineHeight: '1.5' }}>
                                • Cater to the entire delegation during lunch. Includes signage and display of your logo on napkins. Sponsor also has opportunity to provide marketing collateral or a giveaway at the lunch tables.
                            </div>
                            
                            <p style={{ color: '#d9534f', fontSize: '13px', marginBottom: '30px', fontStyle: 'italic' }}>
                                Please note that all artwork, logos or informational pieces must be provided by the sponsor.
                            </p>

                            <button style={{ backgroundColor: '#fff2df', color: '#d9534f', border: '2px solid #76d7c4', padding: '10px 20px', fontSize: '16px', fontWeight: 'bold', width: '100%', cursor: 'pointer' }}>
                                Sign Up Yearly Sponsor
                            </button>
                        </div>
                    </div>
                </div>

                {/* Contact Us Button */}
                <div className="text-center mb-5">
                    <button style={{ border: '2px solid #c86bba', color: '#c86bba', backgroundColor: '#fff2df', padding: '6px 35px', borderRadius: '25px', fontSize: '18px', fontWeight: 'bold', cursor: 'pointer' }}>
                        Contact us
                    </button>
                </div>

                {/* Testimonial */}
                <div className="text-center mt-5 pt-3">
                    <h2 style={{ color: '#d32f2f', fontSize: '26px', fontWeight: 'bold', textTransform: 'none', marginBottom: '30px', fontFamily: 'var(--font-montserrat)', letterSpacing: '0.5px' }}>
                        What people are saying about our parties
                    </h2>
                    
                    <div style={{ display: 'flex', alignItems: 'stretch', justifyContent: 'center', margin: '0 auto', maxWidth: '700px' }}>
                        <button style={{ width: '40px', backgroundColor: '#888', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <i className="fas fa-chevron-left"></i>
                        </button>
                        <div style={{ flex: 1, padding: '0', backgroundColor: '#f8f8f8' }}>
                            <img src="/assets/img/partnership/075a97_3c9fc50be87440acb5565fdfb2b1046d~mv2.avif" alt="Testimonial" style={{ width: '100%', display: 'block' }} />
                        </div>
                        <button style={{ width: '40px', backgroundColor: '#888', color: '#fff', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                            <i className="fas fa-chevron-right"></i>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CeoMonthlyLunchParty;
