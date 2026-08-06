"use client"
import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const UserDropdown = ({ isMobile }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('jwt');
        localStorage.removeItem('user');
        window.location.href = '/dang-nhap';
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef} style={{ position: 'relative', display: 'inline-block' }}>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: isMobile ? '40px' : '45px',
                    height: isMobile ? '40px' : '45px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
                    color: '#da151a',
                    fontSize: '20px',
                    transition: 'all 0.3s'
                }}
                title="Tài khoản của tôi"
            >
                <i className="fas fa-user-circle"></i>
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: isMobile ? 'auto' : 0,
                    left: isMobile ? '50%' : 'auto',
                    transform: isMobile ? 'translateX(-50%)' : 'none',
                    marginTop: '10px',
                    backgroundColor: '#fff',
                    minWidth: '200px',
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    zIndex: 1000,
                    border: '1px solid #eee'
                }}>
                    <ul style={{ listStyle: 'none', margin: 0, padding: '10px 0' }}>
                        <li>
                            <Link href="/ho-so" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '15px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                                <i className="fas fa-user" style={{ marginRight: '10px', width: '20px', textAlign: 'center', color: '#666' }}></i> Hồ sơ cá nhân
                            </Link>
                        </li>
                        <li style={{ borderTop: '1px solid #eee', margin: '5px 0' }}></li>
                        <li>
                            <Link href="/dashboard-su-kien" onClick={() => setIsOpen(false)} style={{ display: 'block', padding: '10px 20px', color: '#333', textDecoration: 'none', fontSize: '15px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#f5f5f5'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                                <i className="fas fa-chart-bar" style={{ marginRight: '10px', width: '20px', textAlign: 'center', color: '#666' }}></i> Dashboard Sự kiện
                            </Link>
                        </li>
                        <li style={{ borderTop: '1px solid #eee', margin: '5px 0' }}></li>
                        <li>
                            <button onClick={handleLogout} style={{ width: '100%', textAlign: 'left', background: 'none', border: 'none', padding: '10px 20px', color: '#da151a', cursor: 'pointer', fontSize: '15px', transition: 'background 0.2s' }} onMouseEnter={(e) => e.target.style.backgroundColor = '#fff0f0'} onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                                <i className="fas fa-sign-out-alt" style={{ marginRight: '10px', width: '20px', textAlign: 'center' }}></i> Đăng xuất
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default UserDropdown;
