"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });
    const [showPassword, setShowPassword] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        if (!formData.email || !formData.password) {
            setError('Vui lòng nhập tài khoản và mật khẩu.');
            setIsSubmitting(false);
            return;
        }

        try {
            const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
            const response = await fetch(`${API_URL}/api/auth/local`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    identifier: formData.email,
                    password: formData.password
                })
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error('Tài khoản hoặc mật khẩu không chính xác.');
            }

            // Save token (in real app, use secure cookies)
            localStorage.setItem('jwt', data.jwt);
            localStorage.setItem('user', JSON.stringify(data.user));

            // Redirect to Form
            window.location.href = '/dang-ky-event';

        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const styles = {
        container: {
            backgroundColor: '#ffffff',
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 15px',
            fontFamily: '"Google Sans", Roboto, Arial, sans-serif'
        },
        formWrapper: {
            width: '100%',
            maxWidth: '450px',
        },
        card: {
            backgroundColor: '#fff',
            borderTop: '8px solid #e60000',
            borderRadius: '8px',
            padding: '30px 24px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: '1px solid #dadce0',
            borderTopWidth: '8px'
        },
        title: {
            fontSize: '28px',
            color: '#202124',
            marginBottom: '25px',
            textAlign: 'center',
            fontWeight: '600'
        },
        inputGroup: {
            marginBottom: '20px'
        },
        label: {
            display: 'block',
            fontSize: '15px',
            fontWeight: '500',
            color: '#202124',
            marginBottom: '8px'
        },
        input: {
            width: '100%',
            border: '1px solid #dadce0',
            borderRadius: '4px',
            padding: '12px 15px',
            fontSize: '15px',
            color: '#202124',
            outline: 'none',
            transition: 'border-color 0.2s'
        },
        submitBtn: {
            width: '100%',
            backgroundColor: '#e60000',
            color: '#fff',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '10px'
        },
        cancelBtn: {
            width: '100%',
            backgroundColor: '#e0e0e0',
            color: '#333',
            padding: '12px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '10px'
        },
        linksWrapper: {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '20px',
            fontSize: '14px'
        },
        link: {
            color: '#e60000',
            textDecoration: 'none',
            fontWeight: '500'
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                <div style={styles.card}>
                    <h1 style={styles.title}>Đăng nhập</h1>
                    
                    {error && (
                        <div className="alert alert-danger" style={{ borderRadius: '4px', marginBottom: '20px', fontSize: '14px' }}>
                            {error}
                        </div>
                    )}

                    <form onSubmit={handleSubmit}>
                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Tài khoản (Email)</label>
                            <input 
                                type="email" 
                                name="email" 
                                style={styles.input} 
                                value={formData.email} 
                                onChange={handleChange} 
                                placeholder="Nhập tài khoản"
                                required 
                            />
                        </div>

                        <div style={styles.inputGroup}>
                            <label style={styles.label}>Mật khẩu</label>
                            <input 
                                type={showPassword ? 'text' : 'password'} 
                                name="password" 
                                style={styles.input} 
                                value={formData.password} 
                                onChange={handleChange} 
                                placeholder="Nhập mật khẩu"
                                required 
                            />
                        </div>
                        
                        <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                            <input 
                                type="checkbox" 
                                id="showPassword" 
                                checked={showPassword} 
                                onChange={(e) => setShowPassword(e.target.checked)} 
                                style={{ marginRight: '8px', cursor: 'pointer' }}
                            />
                            <label htmlFor="showPassword" style={{ fontSize: '14px', color: '#333', cursor: 'pointer', userSelect: 'none' }}>
                                Hiển thị mật khẩu
                            </label>
                        </div>

                        <div style={{ display: 'flex', gap: '10px' }}>
                            <button type="submit" style={styles.submitBtn} disabled={isSubmitting}>
                                {isSubmitting ? 'Đang xử lý...' : 'Đăng nhập'}
                            </button>
                        </div>

                        <div style={styles.linksWrapper}>
                            <Link href="/quen-mat-khau" style={styles.link}>Quên mật khẩu?</Link>
                            <Link href="/dang-ky" style={styles.link}>Tạo tài khoản mới</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
