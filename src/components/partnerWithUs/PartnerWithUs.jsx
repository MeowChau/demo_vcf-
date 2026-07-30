import React from 'react';

const PartnerWithUs = () => {
    return (
        <div className="partner-with-us-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                <div className="row mb-5">
                    <div className="col-12 mb-4">
                        <h1 style={{ color: '#2962ff', fontSize: '36px', fontWeight: 'normal', marginBottom: '20px' }}>
                            Partner With Us
                        </h1>
                    </div>

                    <div className="col-md-7 mb-4 pr-md-4">
                        <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                            Thanks for your interest in a partnership with ASIA CEO COMMUNITY. Please fill out the form below and we will be in touch with more information.
                        </p>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <div className="d-flex" style={{ gap: '10px' }}>
                                <input type="text" placeholder="Name *" required style={{ flex: 1, padding: '12px', backgroundColor: '#f5f5f5', border: 'none' }} />
                                <input type="email" placeholder="Email *" required style={{ flex: 1, padding: '12px', backgroundColor: '#f5f5f5', border: 'none' }} />
                            </div>
                            <input type="text" placeholder="Phone" style={{ width: '100%', padding: '12px', backgroundColor: '#f5f5f5', border: 'none' }} />
                            <input type="text" placeholder="Company" style={{ width: '100%', padding: '12px', backgroundColor: '#f5f5f5', border: 'none' }} />
                            <input type="text" placeholder="Company Website" style={{ width: '100%', padding: '12px', backgroundColor: '#f5f5f5', border: 'none' }} />
                            <textarea placeholder="Message (Partnership)" rows="6" style={{ width: '100%', padding: '12px', backgroundColor: '#f5f5f5', border: 'none', resize: 'none' }}></textarea>
                            <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#4285F4', color: '#fff', border: 'none', marginTop: '10px', fontSize: '15px', cursor: 'pointer' }}>
                                Submit
                            </button>
                        </form>
                    </div>

                    <div className="col-md-5 mb-4">
                        <img src="/assets/img/partnership/7ca7f9c7020240ed8c41d6d22d9cf08c.avif" alt="Partnership Handshake" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                </div>

                <hr style={{ margin: '80px 0', borderColor: '#eee' }} />

                {/* Partners Logo Section */}
                <div className="text-center mb-5">
                    <h2 style={{ color: '#444', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase' }}>
                        ASIA CEO COMMUNITY <span style={{ color: '#d32f2f' }}>PARTNERS</span>
                    </h2>
                </div>

                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-6 col-md-4 mb-4">
                        <img src="/assets/img/partnership/075a97_5b720ac9ae0f4c9eac8260cee5ef8d17~mv2.avif" alt="Partner Logo" style={{ maxWidth: '100%', maxHeight: '100px' }} />
                    </div>
                    <div className="col-6 col-md-4 mb-4">
                        <img src="/assets/img/partnership/075a97_65eb994d469d4671bdeea9bdb0b982e7~mv2.avif" alt="Partner Logo" style={{ maxWidth: '100%', maxHeight: '100px' }} />
                    </div>
                    <div className="col-6 col-md-4 mb-4">
                        <img src="/assets/img/partnership/075a97_5915595046c343f2af75545db73ba412~mv2.avif" alt="Partner Logo" style={{ maxWidth: '100%', maxHeight: '100px' }} />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PartnerWithUs;
