'use client';
import React from 'react';

const CorporateRegistrationForm = () => {
    return (
        <div className="registration-form-area pt-150 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <style>{`
                .upload-btn-custom {
                    color: #000;
                    border: 1px solid #eee;
                    box-shadow: 0 2px 10px rgba(0,0,0,0.05);
                    background-color: #fff;
                    padding: 15px 20px;
                    font-weight: bold;
                    width: 100%;
                    margin-bottom: 10px;
                    transition: all 0.3s ease;
                    border-radius: 5px;
                }
                .upload-btn-custom:hover {
                    background-color: var(--color-primary);
                    color: #fff;
                }
            `}</style>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 style={{ fontWeight: 'bold', margin: 0 }}>Corporate Membership Registration Form</h2>
                    <input type="text" className="form-control" defaultValue="25/07/2026" style={{ width: '200px', border: '1px solid #ccc', borderRadius: '0' }} />
                </div>
                
                <div className="mb-5">
                    <h5 style={{ color: '#d9232d', fontWeight: 'bold', fontSize: '15px' }}>Annual Fee (USD) 5,000</h5>
                </div>

                <form>
                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Title Mr/Ms/Mrs/Prof/Dr</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Title" style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Name <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="First Name" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <input type="text" className="form-control" placeholder="Last Name" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Company Name <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Company Name" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Business Title <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Business Title" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Email <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="email" className="form-control" placeholder="Email" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Contact Number <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Contact Number" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 mt-4">
                        <div className="col-md-4">
                            <label style={{ marginTop: '10px' }}>Company Address <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <div style={{ border: '1px solid #999', borderRadius: '0' }}>
                                {/* Mock Toolbar */}
                                <div style={{ borderBottom: '1px solid #999', padding: '10px', backgroundColor: '#fafafa', display: 'flex', gap: '15px' }}>
                                    <span style={{ fontWeight: 'bold', cursor: 'pointer' }}>B</span>
                                    <span style={{ fontStyle: 'italic', cursor: 'pointer' }}>I</span>
                                    <span style={{ textDecoration: 'underline', cursor: 'pointer' }}>U</span>
                                    <span style={{ cursor: 'pointer' }}>Normal Text</span>
                                    <span style={{ cursor: 'pointer' }}>|</span>
                                    <span style={{ cursor: 'pointer' }}><i className="fas fa-align-left"></i></span>
                                    <span style={{ cursor: 'pointer' }}><i className="fas fa-list-ul"></i></span>
                                    <span style={{ cursor: 'pointer' }}><i className="fas fa-list-ol"></i></span>
                                    <span style={{ cursor: 'pointer' }}>|</span>
                                    <span style={{ cursor: 'pointer' }}><i className="fas fa-link"></i></span>
                                </div>
                                <textarea className="form-control" placeholder="Company info" required style={{ border: 'none', borderRadius: '0', minHeight: '150px' }}></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-3 mt-4 align-items-center">
                        <div className="col-md-4">
                            <label>Industry <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">Industry</option>
                            </select>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <input type="text" className="form-control" placeholder="Other Industry" style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Areas of special interest <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">Areas of special interest</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>How did you hear us? <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">How did you hear us?</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Company Website <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Company Website" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-5 align-items-center mt-4">
                        <div className="col-md-4">
                            <label>Referred By:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Referred By (if any)" style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-5 mt-5">
                        <div className="col-md-4">
                            <label>Upload Company Logo</label>
                        </div>
                        <div className="col-md-4 text-center">
                            <input type="file" id="corpLogo" style={{ display: 'none' }} />
                            <button type="button" className="upload-btn-custom" onClick={() => document.getElementById('corpLogo').click()}>+ UPLOAD COMPANY LOGO</button>
                            <small style={{ color: '#999' }}>Max File Size 15MB</small>
                        </div>
                    </div>

                    <div className="row mb-4 mt-5">
                        <div className="col-md-4">
                            <label>Sign up for Receiving ASIA CEO COMMUNITY Latest News, Promotions and Offers <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <div style={{ position: 'relative', paddingLeft: '30px' }}>
                                <input type="checkbox" style={{ position: 'absolute', left: 0, top: '2px', width: '16px', height: '16px', cursor: 'pointer' }} defaultChecked />
                                <p style={{ fontSize: '13px', lineHeight: '1.4', margin: 0 }}>I acknowledge that I have read and understand the <a href="#" style={{ textDecoration: 'underline' }}>Personal Information Collection Statement</a> and the <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a> and I agree to the use of my personal data for direct marketing purposes by email in the manner set out in the <a href="#" style={{ textDecoration: 'underline' }}>Personal Information Collection Statement</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-4">
                            <label>Terms of Services <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <div style={{ position: 'relative', paddingLeft: '30px' }}>
                                <input type="checkbox" style={{ position: 'absolute', left: 0, top: '2px', width: '16px', height: '16px', cursor: 'pointer' }} defaultChecked />
                                <p style={{ fontSize: '13px', margin: 0 }}>By creating an account, I agree and accept to the <a href="#" style={{ textDecoration: 'underline' }}>Terms and condition</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="submit" className="btn" style={{ backgroundColor: '#d9232d', color: '#fff', fontWeight: 'bold', padding: '10px 60px', fontSize: '18px', borderRadius: '0' }}>Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CorporateRegistrationForm;
