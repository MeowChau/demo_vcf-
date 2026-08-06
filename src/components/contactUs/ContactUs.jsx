import React from 'react';

const ContactUs = () => {
    return (
        <div className="contact-us-page pt-80 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                <h1 style={{ color: '#335084', fontSize: '36px', marginBottom: '15px', fontWeight: '400' }}>
                    Contact Us
                </h1>
                <p style={{ color: '#555', fontSize: '15px', marginBottom: '40px' }}>
                    Please provide the following contact information and we will follow up with you soon.
                </p>

                {/* Form and Image Section */}
                <div className="row mb-5">
                    <div className="col-lg-7 mb-4">
                        <form>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Name *" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="email" className="form-control" placeholder="Email *" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} required />
                            </div>
                            <div className="form-group mb-3">
                                <input type="tel" className="form-control" placeholder="Phone" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control" placeholder="Subject" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} />
                            </div>
                            <div className="form-group mb-3">
                                <textarea className="form-control" placeholder="CONTACT ASIA CEO COMMUNITY" rows="5" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px', resize: 'none' }}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#4a90e2', border: 'none', padding: '12px', fontSize: '16px', fontWeight: '500' }}>
                                Send
                            </button>
                        </form>
                    </div>
                    <div className="col-lg-5 mb-4 text-center">
                        <img 
                            src="/assets/img/aboutUs/Glass Conference Room.avif" 
                            alt="Contact Us Meeting" 
                            style={{ width: '100%', maxWidth: '350px', borderRadius: '20px', objectFit: 'cover' }} 
                        />
                    </div>
                </div>

                {/* Contact Info Box */}
                <div className="contact-info-box mb-5" style={{ backgroundColor: '#f2f2f2', padding: '40px 20px', borderRadius: '5px' }}>
                    <div className="row text-center">
                        <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                                <i className="fas fa-envelope-open-text" style={{ fontSize: '30px', color: '#885e3a', marginRight: '15px' }}></i>
                                <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: '#000' }}>EMAIL</h3>
                            </div>
                            <a href="mailto:ceo@asiaceo.club" style={{ fontSize: '18px', color: '#3366cc', textDecoration: 'none' }}>ceo@asiaceo.club</a>
                        </div>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '10px' }}>
                                <i className="fas fa-phone-alt" style={{ fontSize: '30px', color: '#f39c12', marginRight: '15px' }}></i>
                                <h3 style={{ fontSize: '20px', fontWeight: '600', margin: 0, color: '#000' }}>PHONE</h3>
                            </div>
                            <a href="tel:+85235903939" style={{ fontSize: '18px', color: '#3366cc', textDecoration: 'none' }}>+852 3590 3939</a>
                        </div>
                    </div>
                </div>

                {/* Office Address Section */}
                <div className="office-address text-center">
                    <h2 style={{ color: '#000', fontSize: '24px', fontWeight: '600', marginBottom: '30px' }}>OFFICE ADDRESS</h2>
                    <div className="row">
                        {/* Hong Kong Office */}
                        <div className="col-md-6 mb-4">
                            <img 
                                src="/assets/img/aboutUs/HK.avif" 
                                alt="Hong Kong Office" 
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '20px' }} 
                            />
                            <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#000', marginBottom: '10px' }}>HONG KONG</h3>
                            <p style={{ color: '#3366cc', fontSize: '18px', margin: 0, lineHeight: '1.5' }}>
                                Unit 1703, 17/F, Lemmi Centre,<br/>
                                No. 50 Hoi Yurn Road, kwun tong,<br/>
                                Hong Kong
                            </p>
                        </div>
                        {/* Shenzhen Office */}
                        <div className="col-md-6 mb-4">
                            <img 
                                src="/assets/img/aboutUs/SZ.avif" 
                                alt="Shenzhen Office" 
                                style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '20px' }} 
                            />
                            <h3 style={{ fontSize: '20px', fontWeight: '500', color: '#000', marginBottom: '10px' }}>SHENZHEN</h3>
                            <p style={{ color: '#3366cc', fontSize: '18px', margin: 0, lineHeight: '1.5' }}>
                                深圳市福田区深南大道6009号绿景广<br/>
                                场NEO大厦B座18H
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactUs;
