import React from 'react';
import Link from 'next/link';

const AmbassadorPortalForm = () => {
    return (
        <div className="ambassador-portal-area pt-100 pb-100" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-8">
                        <div style={{ 
                            backgroundColor: '#0d1e34', 
                            border: '1px solid #d3a84b', 
                            borderRadius: '15px', 
                            padding: '50px 40px',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                        }}>
                            <div className="text-center mb-4">
                                <div style={{ color: '#d3a84b', fontSize: '30px', marginBottom: '15px' }}>
                                    {/* Using a star and some small shapes to mimic the logo */}
                                    <i className="fas fa-star"></i>
                                </div>
                                <h3 style={{ color: '#d3a84b', fontWeight: 'bold', fontFamily: 'serif', letterSpacing: '1px' }}>Ambassador Portal</h3>
                                <p style={{ color: '#9ba9b4', fontSize: '15px', marginTop: '10px' }}>Exclusive access for Asia CEO Partners</p>
                            </div>
                            
                            <form>
                                <div className="form-group mb-4">
                                    <label style={{ color: '#9ba9b4', fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>REGISTERED EMAIL</label>
                                    <input type="email" className="form-control" style={{ 
                                        backgroundColor: '#081220', 
                                        border: '1px solid #1d3354', 
                                        color: '#fff',
                                        borderRadius: '6px',
                                        height: '50px'
                                    }} />
                                </div>
                                
                                <div className="form-group mb-4">
                                    <label style={{ color: '#9ba9b4', fontSize: '13px', fontWeight: 'bold', letterSpacing: '0.5px', marginBottom: '8px', display: 'block' }}>MASTER PASSWORD</label>
                                    <input type="password" className="form-control" style={{ 
                                        backgroundColor: '#081220', 
                                        border: '1px solid #1d3354', 
                                        color: '#fff',
                                        borderRadius: '6px',
                                        height: '50px'
                                    }} />
                                </div>
                                
                                <button type="button" className="btn w-100 mt-2" style={{ 
                                    backgroundColor: '#d3a84b', 
                                    color: '#000', 
                                    fontWeight: 'bold', 
                                    fontSize: '16px',
                                    borderRadius: '6px',
                                    padding: '12px',
                                    textTransform: 'none'
                                }}>
                                    Secure Login
                                </button>
                                
                                <div className="text-center mt-4 pt-2">
                                    <Link href="#" style={{ color: '#d3a84b', textDecoration: 'underline', fontWeight: 'bold', fontSize: '14px' }}>
                                        Not a partner yet? Apply here.
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AmbassadorPortalForm;
