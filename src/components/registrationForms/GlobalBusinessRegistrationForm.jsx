import React from 'react';

const GlobalBusinessRegistrationForm = () => {
    return (
        <div className="registration-form-area pt-150 pb-100" style={{ backgroundColor: '#fff', color: '#333' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <h2 style={{ fontWeight: 'bold', margin: 0 }}>Global Business Alliance<br/>Membership Registration Form</h2>
                    <input type="text" className="form-control" defaultValue="25/07/2026" style={{ width: '200px', border: '1px solid #ccc', borderRadius: '0' }} />
                </div>
                
                <div className="mb-5">
                    <h5 style={{ color: '#d9232d', fontWeight: 'bold', fontSize: '15px' }}>Annual Fee: &nbsp;&nbsp;&nbsp;&nbsp; 1,400 HKD / 180 USD</h5>
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
                            <label>Mobile <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Mobile" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Educational Level <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">Educational Level</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
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
                    
                    <div className="row mb-3 align-items-center mt-5">
                        <div className="col-md-4">
                            <label>Are you 18 years old or older? <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <div><input type="radio" name="age" id="ageYes" /> <label htmlFor="ageYes">Yes</label></div>
                            <div><input type="radio" name="age" id="ageNo" /> <label htmlFor="ageNo">No</label></div>
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
                            <label>Upload Your Business Card</label>
                        </div>
                        <div className="col-md-4 text-center">
                            <button type="button" className="btn" style={{ border: '1px solid #eee', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', backgroundColor: '#fff', padding: '15px 20px', fontWeight: 'bold', width: '100%', marginBottom: '10px' }}>+ UPLOAD BUSINESS CARD</button>
                            <small style={{ color: '#999' }}>Max File Size 15MB</small>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-4">
                            <label>Upload Your Profile Photo</label>
                        </div>
                        <div className="col-md-4 text-center">
                            <button type="button" className="btn" style={{ border: '1px solid #eee', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', backgroundColor: '#fff', padding: '15px 20px', fontWeight: 'bold', width: '100%', marginBottom: '10px' }}>+ UPLOAD PROFILE PHOTO</button>
                            <small style={{ color: '#999' }}>Max File Size 15MB</small>
                        </div>
                    </div>

                    <div className="row mb-4 mt-5">
                        <div className="col-md-4">
                            <label>Sign up for Receiving ASIA CEO COMMUNITY Latest News, Promotions and Offers <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8 d-flex">
                            <input type="checkbox" style={{ width: '25px', height: '25px', marginRight: '15px', marginTop: '3px' }} defaultChecked />
                            <p style={{ fontSize: '13px', lineHeight: '1.4' }}>I acknowledge that I have read and understand the <a href="#" style={{ textDecoration: 'underline' }}>Personal Information Collection Statement</a> and the <a href="#" style={{ textDecoration: 'underline' }}>Privacy Policy</a> and I agree to the use of my personal data for direct marketing purposes by email in the manner set out in the <a href="#" style={{ textDecoration: 'underline' }}>Personal Information Collection Statement</a></p>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-4">
                            <label>Terms of Services <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8 d-flex align-items-center">
                            <input type="checkbox" style={{ width: '25px', height: '25px', marginRight: '15px' }} defaultChecked />
                            <p style={{ fontSize: '13px', margin: 0 }}>By creating an account, I agree and accept to the <a href="#" style={{ textDecoration: 'underline' }}>Terms and condition</a></p>
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

export default GlobalBusinessRegistrationForm;
