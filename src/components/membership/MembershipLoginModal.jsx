import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const MembershipLoginModal = ({ isOpen, onClose }) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!isOpen || !mounted) return null;

    const modalContent = (
        <div style={{
            position: 'fixed',
            top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(255, 255, 255, 0.95)',
            zIndex: 999999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Close Button */}
            <div 
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '30px',
                    right: '40px',
                    fontSize: '50px',
                    cursor: 'pointer',
                    color: '#333',
                    lineHeight: 1,
                    zIndex: 1000000
                }}
            >
                &times;
            </div>

            {/* Modal Content */}
            <div style={{
                background: 'radial-gradient(circle at top left, #a1b88e, transparent 40%), radial-gradient(circle at top right, #f8b577, transparent 40%), radial-gradient(circle at bottom right, #d4ccff, transparent 50%), radial-gradient(circle at bottom left, #a9bead, transparent 50%)',
                backgroundColor: '#e6eaf0',
                width: '100%',
                maxWidth: '450px',
                padding: '50px',
                borderRadius: '8px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                textAlign: 'center',
                position: 'relative'
            }}>
                <h2 style={{ color: '#333', marginBottom: '10px', fontSize: '32px' }}>Log In</h2>
                <p style={{ color: '#444', fontSize: '14px', marginBottom: '30px' }}>
                    New to this site? <a href="#" style={{ textDecoration: 'underline', color: '#333' }}>Sign Up</a>
                </p>

                <div style={{ textAlign: 'left' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', fontSize: '12px', color: '#333', marginBottom: '5px' }}>Email *</label>
                        <input type="email" style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: '#fff',
                            color: '#333'
                        }} />
                    </div>

                    <div style={{ marginBottom: '10px' }}>
                        <label style={{ display: 'block', fontSize: '12px', color: '#333', marginBottom: '5px' }}>Password *</label>
                        <input type="password" style={{
                            width: '100%',
                            padding: '12px',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            fontSize: '14px',
                            backgroundColor: '#fff',
                            color: '#333'
                        }} />
                    </div>

                    <div style={{ marginBottom: '30px' }}>
                        <a href="#" style={{ fontSize: '13px', color: '#333', textDecoration: 'underline' }}>Forgot password?</a>
                    </div>

                    <div 
                        style={{
                            width: '100%',
                            backgroundColor: '#333',
                            color: '#fff',
                            padding: '12px',
                            borderRadius: '4px',
                            fontSize: '15px',
                            cursor: 'pointer',
                            marginBottom: '20px',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}
                    >
                        Log In
                    </div>
                </div>

                <p style={{ color: '#555', fontSize: '13px', marginBottom: '15px' }}>or Log In with</p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
                    <div style={{ 
                        width: '35px', height: '35px', 
                        borderRadius: '50%', backgroundColor: '#fff', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)', cursor: 'pointer'
                    }}>
                        <i className="fab fa-google" style={{ color: '#db4437', fontSize: '16px' }}></i>
                    </div>
                    <div style={{ 
                        width: '35px', height: '35px', 
                        borderRadius: '50%', backgroundColor: '#1877F2', 
                        display: 'flex', justifyContent: 'center', alignItems: 'center',
                        boxShadow: '0 2px 5px rgba(0,0,0,0.1)', cursor: 'pointer'
                    }}>
                        <i className="fab fa-facebook-f" style={{ color: '#fff', fontSize: '16px' }}></i>
                    </div>
                </div>
            </div>
        </div>
    );

    return createPortal(modalContent, document.body);
};

export default MembershipLoginModal;
