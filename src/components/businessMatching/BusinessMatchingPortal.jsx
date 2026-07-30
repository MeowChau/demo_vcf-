import React from 'react';
import Link from 'next/link';

const BusinessMatchingPortal = () => {
    return (
        <div className="business-matching-portal-area pt-100 pb-100" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div style={{ 
                            backgroundColor: '#0f2038', 
                            borderRadius: '8px', 
                            padding: '40px 30px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
                        }}>
                            <div className="text-center mb-4">
                                <p style={{ color: '#688eb3', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '15px' }}>VIP ACCESS</p>
                                
                                <button type="button" className="btn w-100 mb-4" style={{ 
                                    backgroundColor: 'transparent', 
                                    border: '1px solid #d3a84b', 
                                    color: '#d3a84b', 
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    borderRadius: '6px',
                                    padding: '10px'
                                }}>
                                    ✨ Claim Pre-Built Profile
                                </button>
                                
                                <h4 style={{ color: '#d3a84b', fontWeight: 'bold', letterSpacing: '1px', marginBottom: '10px', fontSize: '18px' }}>ASIA CEO COMMUNITY</h4>
                                <h2 style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'var(--font-montserrat)', marginBottom: '20px' }}>Member Portal</h2>
                            </div>
                            
                            <form>
                                <div className="form-group mb-3">
                                    <label style={{ color: '#9ba9b4', fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>EMAIL ADDRESS</label>
                                    <input type="email" className="form-control" style={{ 
                                        backgroundColor: '#081220', 
                                        border: '1px solid #1a2c47', 
                                        color: '#fff',
                                        borderRadius: '6px',
                                        height: '45px'
                                    }} />
                                </div>
                                
                                <div className="form-group mb-3">
                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                        <label style={{ color: '#9ba9b4', fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.5px', margin: 0 }}>PASSWORD</label>
                                        <Link href="#" style={{ color: '#d3a84b', fontSize: '13px', textDecoration: 'none' }}>Forgot Password?</Link>
                                    </div>
                                    <input type="password" className="form-control" style={{ 
                                        backgroundColor: '#081220', 
                                        border: '1px solid #1a2c47', 
                                        color: '#fff',
                                        borderRadius: '6px',
                                        height: '45px'
                                    }} />
                                </div>
                                
                                <div className="form-group mb-4 d-flex align-items-center">
                                    <input type="checkbox" id="keepSignedIn" style={{ width: '18px', height: '18px', marginRight: '10px', cursor: 'pointer' }} />
                                    <label htmlFor="keepSignedIn" style={{ color: '#9ba9b4', fontSize: '14px', margin: 0, cursor: 'pointer' }}>Keep me signed in</label>
                                </div>

                                <div className="p-3 mb-4" style={{ border: '1px solid #1a2c47', borderRadius: '6px', backgroundColor: '#0c1a2e' }}>
                                    <label style={{ color: '#9ba9b4', fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '10px', display: 'block' }}>
                                        SECURITY: WHAT IS <span style={{ color: '#d3a84b' }}>4 + 7</span>?
                                    </label>
                                    <input type="text" className="form-control" style={{ 
                                        backgroundColor: '#081220', 
                                        border: '1px solid #1a2c47', 
                                        color: '#fff',
                                        borderRadius: '6px',
                                        height: '45px'
                                    }} />
                                </div>
                                
                                <button type="button" className="btn w-100 mb-3" style={{ 
                                    backgroundColor: '#cca343', 
                                    color: '#000', 
                                    fontWeight: 'bold', 
                                    fontSize: '16px',
                                    borderRadius: '6px',
                                    padding: '12px'
                                }}>
                                    Secure Log In
                                </button>
                                
                                <button type="button" className="btn w-100 mb-4" style={{ 
                                    backgroundColor: '#162b47', 
                                    border: 'none',
                                    color: '#fff', 
                                    fontWeight: 'bold', 
                                    fontSize: '15px',
                                    borderRadius: '6px',
                                    padding: '12px'
                                }}>
                                    Sign in with Passcode
                                </button>
                                
                                <div className="text-center mt-3 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
                                    <p style={{ color: '#688eb3', fontSize: '14px', marginBottom: '15px' }}>Don't have an account yet?</p>
                                    <button type="button" className="btn" style={{ 
                                        backgroundColor: '#0b1627', 
                                        border: '1px solid #2a4163', 
                                        color: '#d3a84b', 
                                        fontWeight: 'bold', 
                                        fontSize: '14px',
                                        borderRadius: '20px',
                                        padding: '8px 25px'
                                    }}>
                                        Register Here
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessMatchingPortal;
