import React from 'react';

const MembershipIntro = () => {
    return (
        <div className="membership-intro-area pt-100 pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-4 text-left">
                            <h2 style={{ color: '#2a5a9c', fontWeight: 600 }}>Asia CEO Community Membership</h2>
                            <p style={{ fontSize: '14px', color: '#666' }}>Helping you become a smarter, better, and more trustworthy business professional</p>
                        </div>
                        
                        <div className="content">
                            <h5 style={{ fontWeight: 'bold', marginBottom: '15px' }}>Why you should join Asia CEO Community?</h5>
                            <p>Join Asia CEO Community and become part of a leading global business leaders community. If you are business leaders with global vision and management excellence, striving for continuous improvement, we are delighted to ask you to join us and experience the incredible networking opportunities.</p>
                            <p className="mt-3">Building on more than 4 years of experience, Asia CEO Community provides exclusive development opportunities, resources, and connections to more than 8,500+ Members.</p>
                            
                            <h5 style={{ fontWeight: 'bold', marginTop: '40px', marginBottom: '25px' }}>Your Asia CEO Community Member Benefits</h5>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                <li className="mb-4 d-flex align-items-start">
                                    <i className="fas fa-cog" style={{ color: '#5cb85c', fontSize: '24px', marginRight: '15px', marginTop: '2px' }}></i>
                                    <span style={{ fontSize: '15px' }}>Invitation to our monthly Exclusive Industry event</span>
                                </li>
                                <li className="mb-4 d-flex align-items-start">
                                    <i className="fas fa-cog" style={{ color: '#5cb85c', fontSize: '24px', marginRight: '15px', marginTop: '2px' }}></i>
                                    <span style={{ fontSize: '15px' }}>Unparalleled peer-to-peer consulting</span>
                                </li>
                                <li className="mb-4 d-flex align-items-start">
                                    <i className="fas fa-cog" style={{ color: '#5cb85c', fontSize: '24px', marginRight: '15px', marginTop: '2px' }}></i>
                                    <span style={{ fontSize: '15px' }}>Portrayed on asiaceo.club, a comprehensive listing of Asia’s finance elite.</span>
                                </li>
                                <li className="mb-4 d-flex align-items-start">
                                    <i className="fas fa-cog" style={{ color: '#5cb85c', fontSize: '24px', marginRight: '15px', marginTop: '2px' }}></i>
                                    <span style={{ fontSize: '15px' }}>Invitation to attend the CFO Awards ceremony, the annual landmark event showcasing insights and best practices and celebrating excellence</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipIntro;
