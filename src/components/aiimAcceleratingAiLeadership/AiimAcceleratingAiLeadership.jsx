"use client";
import React from 'react';

const AiimAcceleratingAiLeadership = () => {
    const inputStyle = {
        border: '1px solid #ccc',
        padding: '10px 15px',
        fontSize: '14px',
        color: '#555',
        width: '100%',
        marginBottom: '15px',
        borderRadius: '2px',
        outline: 'none'
    };

    const labelStyle = {
        fontSize: '14px',
        color: '#333',
        marginBottom: '5px',
        display: 'block',
        lineHeight: '1.4'
    };

    return (
        <div className="aiim-page pt-100 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Images Section */}
                <div className="images-section mb-5 position-relative">
                    <img src="/assets/img/leadershipWorkshops/AI Course.avif" alt="Accelerating AI Leadership" style={{ width: '100%', display: 'block', marginBottom: '30px' }} />
                    <div style={{ position: 'absolute', top: '20px', right: '-80px' }} className="d-none d-xl-block">
                        <button style={{ backgroundColor: '#4267B2', color: '#fff', border: '1px solid #365899', padding: '3px 8px', fontSize: '11px', borderRadius: '3px', cursor: 'pointer', display: 'flex', alignItems: 'center', boxShadow: '0 1px 1px rgba(0,0,0,0.1)' }}>
                            <i className="fab fa-facebook-f" style={{ marginRight: '5px' }}></i> Share
                        </button>
                    </div>
                </div>

                {/* Form Section */}
                <div className="form-section mt-5">
                    <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                        <h3 style={{ fontSize: '20px', fontWeight: '700', color: '#000', margin: 0, textTransform: 'uppercase' }}>AIIM - WORKSHOP REGISTRATION FORM</h3>
                        <div className="mt-3 mt-md-0">
                            <input type="text" defaultValue="24/07/2026" readOnly style={{ border: '1px solid #ccc', padding: '5px 10px', width: '150px', textAlign: 'center', fontSize: '14px', color: '#555', backgroundColor: '#f9f9f9' }} />
                            <i className="far fa-calendar-alt" style={{ position: 'relative', left: '-25px', color: '#aaa' }}></i>
                        </div>
                    </div>

                    <div style={{ color: '#d9232d', fontWeight: 'bold', marginBottom: '40px', fontSize: '14px', lineHeight: '1.6' }}>
                        WORKSHOP FEE<br/>
                        - Non Members Fee: HKD 900<br/>
                        - ACC Members Fee: HKD 750
                    </div>

                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Title Mr/Ms/Mrs/Prof/Dr</label></div>
                            <div className="col-md-9">
                                <input type="text" placeholder="Title" style={inputStyle} />
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Name <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-4">
                                <input type="text" placeholder="First Name" style={inputStyle} required />
                            </div>
                            <div className="col-md-5">
                                <input type="text" placeholder="Last Name" style={inputStyle} required />
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Company Name <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9">
                                <input type="text" placeholder="Company Name" style={inputStyle} required />
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Business Title <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9">
                                <input type="text" placeholder="Business Title" style={inputStyle} required />
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Email <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9">
                                <input type="email" placeholder="Email" style={inputStyle} required />
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Mobile <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9">
                                <input type="text" placeholder="Mobile" style={inputStyle} required />
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Educational Level <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9">
                                <select style={inputStyle} required>
                                    <option value="">Educational Level</option>
                                    <option value="bachelor">Bachelor</option>
                                    <option value="master">Master</option>
                                    <option value="phd">PhD</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Industry <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-4">
                                <select style={inputStyle} required>
                                    <option value="">Industry</option>
                                    <option value="tech">Technology</option>
                                    <option value="finance">Finance</option>
                                    <option value="healthcare">Healthcare</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="col-md-5">
                                <input type="text" placeholder="Other Industry" style={inputStyle} />
                            </div>
                        </div>

                        <div className="row align-items-center mb-1">
                            <div className="col-md-3"><label style={labelStyle}>Areas of special interest <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9">
                                <select style={inputStyle} required>
                                    <option value="">Areas of special interest</option>
                                    <option value="ai">AI</option>
                                    <option value="data">Data</option>
                                </select>
                            </div>
                        </div>

                        <div className="row align-items-center mb-5 pb-3">
                            <div className="col-md-3"><label style={labelStyle}>How did you hear us? <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9">
                                <select style={inputStyle} required>
                                    <option value="">How did you hear us?</option>
                                    <option value="social">Social Media</option>
                                    <option value="friend">Friend</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-4 mt-2">
                            <div className="col-md-3"><label style={labelStyle}>Terms of Services <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9 d-flex align-items-center">
                                <input type="checkbox" id="terms" className="mr-2" required style={{ width: '18px', height: '18px', accentColor: '#4caf50' }} />
                                <label htmlFor="terms" style={{ fontSize: '13px', color: '#555', marginLeft: '10px', marginBottom: 0 }}>
                                    By creating an account, I agree and accept to the <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Terms and condition</a>
                                </label>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-3"><label style={labelStyle}>Sign up for Receiving ASIA CEO COMMUNITY Latest News, Promotions and Offers <span style={{color: '#d9232d'}}>*</span></label></div>
                            <div className="col-md-9 d-flex align-items-start">
                                <input type="checkbox" id="news" className="mr-2 mt-1" required style={{ width: '18px', height: '18px', accentColor: '#4caf50' }} />
                                <label htmlFor="news" style={{ fontSize: '13px', color: '#555', marginLeft: '10px', lineHeight: '1.6' }}>
                                    I acknowledge that I have read and understand the <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Personal Information Collection Statement</a> and the <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Privacy Policy</a> and I agree to the use of my personal data for direct marketing purposes by email in the manner set out in the <a href="#" style={{ color: '#555', textDecoration: 'underline' }}>Personal Information Collection Statement</a>
                                </label>
                            </div>
                        </div>

                        <div className="text-center mb-4 mt-5">
                            <button type="submit" className="btn" style={{ backgroundColor: '#e21b22', color: '#fff', padding: '12px 50px', fontSize: '18px', fontWeight: 'bold', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>
                                Submit
                            </button>
                        </div>

                        <div className="text-center pb-5">
                            <p style={{ color: '#666', fontSize: '14px' }}>
                                Not sure if you're eligible? Send us an <a href="#" style={{ color: '#666', textDecoration: 'underline' }}>email</a> or give us a call at +852 2342 7851 and we'll help
                            </p>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AiimAcceleratingAiLeadership;
