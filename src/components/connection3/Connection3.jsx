"use client";
import React, { useState } from 'react';

const Connection3 = () => {
    const [joinChat, setJoinChat] = useState(false);
    const [agreeTerms, setAgreeTerms] = useState(false);

    const inputStyle = {
        backgroundColor: '#f2f2f2',
        border: 'none',
        borderRadius: '0',
        padding: '12px 15px',
        fontSize: '14px',
        color: '#555',
        width: '100%',
        outline: 'none'
    };

    const checkboxStyle = (checked) => ({
        width: '16px',
        height: '16px',
        backgroundColor: checked ? '#ccc' : '#f2f2f2',
        border: 'none',
        display: 'inline-block',
        marginRight: '10px',
        cursor: 'pointer',
        verticalAlign: 'middle'
    });

    return (
        <div className="connection-3-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 style={{ color: '#555', fontSize: '32px', fontWeight: '300' }}>
                        CONNECTION PLUS 3.0 - COMING SOON THIS YEAR
                    </h2>
                </div>

                <div className="row">
                    <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                        <h5 style={{ fontWeight: 'bold', color: '#444', fontSize: '16px', marginBottom: '25px', textTransform: 'uppercase' }}>
                            SIGN UP NOW! THE FUTURE OF BUSINESS CONNECTION - CONNECTION PLUS 3.0
                        </h5>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <input type="text" placeholder="Name *" style={inputStyle} required />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email *" style={inputStyle} required />
                                </div>
                            </div>

                            <div className="row mb-3">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <input type="text" placeholder="Mobile Number" style={inputStyle} />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" placeholder="Country" style={inputStyle} />
                                </div>
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder="Company Name" style={inputStyle} />
                            </div>

                            <div className="mb-3">
                                <input type="text" placeholder="Job Title" style={inputStyle} />
                            </div>

                            <div className="mb-4">
                                <input type="text" placeholder="Industry" style={inputStyle} />
                            </div>

                            <div className="mb-4 d-flex align-items-center">
                                <div 
                                    style={checkboxStyle(joinChat)} 
                                    onClick={() => setJoinChat(!joinChat)}
                                >
                                    {joinChat && <i className="fas fa-check" style={{ fontSize: '10px', color: '#555', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}></i>}
                                </div>
                                <span style={{ fontSize: '14px', color: '#555' }}>Join ASIA CEO COMMUNITY's Chat Group</span>
                            </div>

                            <div className="mb-2">
                                <a href="#" style={{ fontSize: '14px', color: '#333', textDecoration: 'underline', marginRight: '30px', fontWeight: '500' }}>Privacy Policy</a>
                                <a href="#" style={{ fontSize: '14px', color: '#333', textDecoration: 'underline', fontWeight: '500' }}>Terms & Conditions</a>
                            </div>

                            <div className="mb-4 d-flex align-items-center mt-3">
                                <div 
                                    style={checkboxStyle(agreeTerms)} 
                                    onClick={() => setAgreeTerms(!agreeTerms)}
                                >
                                    {agreeTerms && <i className="fas fa-check" style={{ fontSize: '10px', color: '#555', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}></i>}
                                </div>
                                <span style={{ fontSize: '14px', color: '#555' }}>I agree to the terms & conditions & Privacy Policy</span>
                            </div>

                            <div className="mb-4">
                                <div style={{ border: '1px solid #ddd', borderRadius: '3px', width: '250px', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f9f9f9' }}>
                                    <div className="d-flex align-items-center">
                                        <div style={{ width: '24px', height: '24px', border: '2px solid #ccc', borderRadius: '2px', backgroundColor: '#fff', marginRight: '10px' }}></div>
                                        <span style={{ fontSize: '12px', color: '#333' }}>I'm not a robot</span>
                                    </div>
                                    <div className="text-center">
                                        <img src="/assets/img/recaptcha-logo.png" alt="reCAPTCHA" style={{ height: '24px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://www.gstatic.com/recaptcha/api2/logo_48.png"; }} />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="btn w-100" style={{ backgroundColor: '#4c8bf5', color: '#fff', padding: '12px', fontSize: '16px', fontWeight: '500', border: 'none', borderRadius: '2px' }}>
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>

                    <div className="col-lg-5">
                        <img 
                            src="/assets/img/membersArea/Business People Mingling.avif" 
                            alt="Business People Mingling" 
                            style={{ width: '100%', height: 'auto', marginBottom: '20px', display: 'block', objectFit: 'cover' }} 
                        />
                        <img 
                            src="/assets/img/membersArea/Business Conference.avif" 
                            alt="Business Conference" 
                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Connection3;
