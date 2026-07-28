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
                        <svg viewBox="0 0 48 48" width="18" height="18">
                            <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.7 17.74 9.5 24 9.5z" />
                            <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
                            <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
                            <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
                            <path fill="none" d="M0 0h48v48H0z" />
                        </svg>
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
