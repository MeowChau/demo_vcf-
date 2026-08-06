"use client"
import React, { useState, useEffect } from 'react';

const RegisterForm = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        // Step 1
        fullName: '',
        dob: '',
        phone: '',
        email: '',
        password: '',
        companyName: '',
        // Step 2
        managementExperience: '',
        industry: '',
        industryOther: '',
        foundedYear: '',
        annualRevenue: '',
        employeeCount: '',
        equity: '',
        companyType: '',
        companyTypeOther: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState('');

    useEffect(() => {
        if (isSuccess) {
            const timer = setTimeout(() => {
                window.location.href = '/dang-nhap';
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [isSuccess]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleNextStep = (e) => {
        e.preventDefault();
        if (!formData.fullName || !formData.email || !formData.password || !formData.companyName) {
            setError('Vui lòng điền đầy đủ các thông tin bắt buộc.');
            return;
        }
        setError('');
        setStep(2);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        if (!formData.managementExperience || !formData.foundedYear || !formData.annualRevenue || !formData.employeeCount || !formData.equity) {
            setError('Vui lòng điền đầy đủ các trường có đánh dấu (*)');
            setIsSubmitting(false);
            return;
        }

        try {
            const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
            // 1. Call Strapi Register API (Only accept default fields)
            const registerResponse = await fetch(`${API_URL}/api/auth/local/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: formData.email, // using email as username
                    email: formData.email,
                    password: formData.password
                })
            });

            const registerData = await registerResponse.json();

            if (!registerResponse.ok) {
                // Translate common Strapi errors to Vietnamese
                let errorMsg = 'Đăng ký tài khoản thất bại.';
                const strapiError = registerData.error?.message || '';
                
                if (strapiError.includes('Email or Username are already taken')) {
                    errorMsg = 'Email này đã được sử dụng. Vui lòng chọn email khác.';
                } else if (strapiError.includes('password must be at least')) {
                    errorMsg = 'Mật khẩu phải có ít nhất 6 ký tự.';
                } else {
                    errorMsg = `Lỗi hệ thống: ${strapiError}`;
                }
                throw new Error(errorMsg);
            }

            const jwt = registerData.jwt;
            const userId = registerData.user.id;

            // 2. Call PUT to update custom fields
            const updateUserResponse = await fetch(`${API_URL}/api/users/${userId}`, {
                method: 'PUT',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify({
                    fullName: formData.fullName,
                    dob: formData.dob,
                    phone: formData.phone,
                    companyName: formData.companyName
                })
            });

            if (!updateUserResponse.ok) {
                console.warn('Could not update extra user fields, but account was created.');
            }

            // 3. Create CEO Profile connected to this user
            const profileResponse = await fetch(`${API_URL}/api/ceo-profiles`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${jwt}`
                },
                body: JSON.stringify({
                    data: {
                        managementExperience: formData.managementExperience,
                        industry: formData.industry === 'Other' ? formData.industryOther : formData.industry,
                        foundedYear: parseInt(formData.foundedYear),
                        annualRevenue: formData.annualRevenue,
                        employeeCount: formData.employeeCount,
                        equity: parseFloat(formData.equity),
                        companyType: formData.companyType === 'Other' ? formData.companyTypeOther : formData.companyType
                    }
                })
            });

            const profileData = await profileResponse.json();

            if (!profileResponse.ok) {
                throw new Error('Tài khoản đã được tạo nhưng không thể lưu form khảo sát. Vui lòng liên hệ hỗ trợ.');
            }

            setIsSuccess(true);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    // Google Form specific styles
    const styles = {
        container: {
            backgroundColor: '#ffffff',
            minHeight: '100vh',
            padding: '40px 15px',
            fontFamily: '"Google Sans", Roboto, Arial, sans-serif'
        },
        formWrapper: {
            maxWidth: '640px',
            margin: '0 auto',
        },
        headerCard: {
            backgroundColor: '#fff',
            borderTop: '8px solid #002b5e',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '12px',
            border: '1px solid #dadce0',
            borderTopWidth: '8px'
        },
        questionCard: {
            backgroundColor: '#fff',
            borderRadius: '8px',
            padding: '24px',
            marginBottom: '12px',
            border: '1px solid #dadce0',
        },
        title: {
            fontSize: '32px',
            color: '#202124',
            marginBottom: '10px'
        },
        desc: {
            fontSize: '14px',
            color: '#5f6368',
            borderBottom: '1px solid #dadce0',
            paddingBottom: '15px',
            marginBottom: '15px'
        },
        requiredText: {
            fontSize: '13px',
            color: '#d93025'
        },
        questionTitle: {
            fontSize: '16px',
            fontWeight: '500',
            color: '#202124',
            marginBottom: '16px'
        },
        input: {
            width: '100%',
            border: 'none',
            borderBottom: '1px solid #ccc',
            borderRadius: '0',
            padding: '8px 0',
            fontSize: '15px',
            color: '#202124',
            outline: 'none',
            backgroundColor: 'transparent'
        },
        radioLabel: {
            fontSize: '15px',
            color: '#202124',
            marginLeft: '12px',
            cursor: 'pointer'
        },
        radioWrapper: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px'
        },
        submitBtn: {
            backgroundColor: '#002b5e',
            color: '#fff',
            padding: '10px 24px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '14px',
            fontWeight: '500',
            cursor: 'pointer'
        }
    };

    if (isSuccess) {
        return (
            <div style={styles.container}>
                <div style={styles.formWrapper}>
                    <div style={styles.headerCard}>
                        <h1 style={styles.title}>Đăng ký thành công</h1>
                        <p style={{ fontSize: '15px', color: '#202124', marginTop: '20px' }}>
                            Tài khoản của bạn đã được tạo thành công! Hệ thống sẽ tự động chuyển hướng đến trang Đăng nhập trong giây lát...
                        </p>
                        <div style={{ marginTop: '30px' }}>
                            <a href="/dang-nhap" style={{ backgroundColor: '#002b5e', color: '#fff', padding: '10px 24px', borderRadius: '4px', textDecoration: 'none', fontWeight: '500', display: 'inline-block' }}>Đến trang Đăng nhập ngay</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.container}>
            <div style={styles.formWrapper}>
                
                <form onSubmit={step === 1 ? handleNextStep : handleSubmit}>
                    
                    {/* Header */}
                    <div style={styles.headerCard}>
                        <h1 style={styles.title}>{step === 1 ? 'Đăng ký thành viên' : 'Khảo sát thông tin CEO'}</h1>
                        <div style={styles.desc}>
                            {step === 1 ? 'Vui lòng cung cấp thông tin cá nhân và tài khoản để tạo hồ sơ.' : 'Vui lòng cung cấp thêm thông tin doanh nghiệp để hoàn tất đăng ký CEO Mentoring.'}
                        </div>
                        <div style={styles.requiredText}>* Required</div>
                    </div>

                    {/* ---------------- STEP 1 ---------------- */}
                    {step === 1 && (
                        <>
                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>Họ và tên <span style={styles.requiredText}>*</span></div>
                                <input type="text" style={styles.input} name="fullName" value={formData.fullName} onChange={handleChange} required placeholder="Câu trả lời của bạn" />
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>Ngày sinh</div>
                                <input type="date" style={styles.input} name="dob" value={formData.dob} onChange={handleChange} />
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>Số điện thoại</div>
                                <input type="tel" style={styles.input} name="phone" value={formData.phone} onChange={handleChange} placeholder="Câu trả lời của bạn" />
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>Email <span style={styles.requiredText}>*</span></div>
                                <input type="email" style={styles.input} name="email" value={formData.email} onChange={handleChange} required placeholder="Câu trả lời của bạn" />
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>Mật khẩu <span style={styles.requiredText}>*</span></div>
                                <input type="password" style={styles.input} name="password" value={formData.password} onChange={handleChange} required placeholder="Câu trả lời của bạn" />
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>Tên công ty <span style={styles.requiredText}>*</span></div>
                                <input type="text" style={styles.input} name="companyName" value={formData.companyName} onChange={handleChange} required placeholder="Câu trả lời của bạn" />
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'flex-start', marginTop: '20px' }}>
                                <button type="submit" style={styles.submitBtn}>Tiếp</button>
                            </div>
                        </>
                    )}

                    {/* ---------------- STEP 2 ---------------- */}
                    {step === 2 && (
                        <>
                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>1. Số năm kinh nghiệm quản lý điều hành <span style={styles.requiredText}>*</span></div>
                                {['Dưới 1 năm', 'Từ 1-5 năm', 'Từ 5-10 năm', 'Trên 10 năm'].map(option => (
                                    <div style={styles.radioWrapper} key={option}>
                                        <input type="radio" name="managementExperience" id={`exp_${option}`} value={option} checked={formData.managementExperience === option} onChange={handleChange} />
                                        <label style={styles.radioLabel} htmlFor={`exp_${option}`}>{option}</label>
                                    </div>
                                ))}
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>2. Lĩnh vực hoạt động (ngành nghề) <span style={styles.requiredText}>*</span></div>
                                {[
                                    'Sản xuất, công nghiệp', 'Thương mại, phân phối', 'Dịch vụ', 
                                    'Tài chính, ngân hàng, bảo hiểm', 'Bất động sản, xây dựng', 
                                    'Công nghệ thông tin, chuyển đổi số', 'Giáo dục, đào tạo', 
                                    'Y tế, chăm sóc sức khỏe', 'Nông nghiệp, thực phẩm', 
                                    'Logistics, vận tải', 'Du lịch, khách sạn', 
                                    'Truyền thông, marketing', 'Cơ quan nhà nước', 'Hiệp hội, tổ chức xã hội'
                                ].map(option => (
                                    <div style={styles.radioWrapper} key={option}>
                                        <input type="radio" name="industry" id={`ind_${option}`} value={option} checked={formData.industry === option} onChange={handleChange} />
                                        <label style={styles.radioLabel} htmlFor={`ind_${option}`}>{option}</label>
                                    </div>
                                ))}
                                <div style={styles.radioWrapper}>
                                    <input type="radio" name="industry" id="ind_other" value="Other" checked={formData.industry === 'Other'} onChange={handleChange} />
                                    <label style={styles.radioLabel} htmlFor="ind_other">Other:</label>
                                    <input type="text" name="industryOther" value={formData.industryOther} onChange={handleChange} disabled={formData.industry !== 'Other'} style={{ ...styles.input, marginLeft: '10px', width: '200px' }} />
                                </div>
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>3. Năm thành lập <span style={styles.requiredText}>*</span></div>
                                <input type="text" style={{...styles.input, width: '50%'}} name="foundedYear" value={formData.foundedYear} onChange={handleChange} placeholder="Short answer text" />
                            </div>

                            <div style={styles.questionCard}>
                                <div style={{ fontSize: '18px', fontWeight: '500', color: '#202124', marginBottom: '8px' }}>4. Quy mô</div>
                                <div style={{ fontSize: '14px', color: '#5f6368', marginBottom: '20px' }}>Description (optional)</div>
                                
                                {/* 4.1 Doanh thu */}
                                <div style={{ marginTop: '20px', marginBottom: '30px' }}>
                                    <div style={{...styles.questionTitle, fontSize: '15px', fontStyle: 'italic'}}>4.1 Doanh thu trên năm <span style={styles.requiredText}>*</span></div>
                                    {['Chưa có doanh thu', 'Dưới 5 tỷ VND', 'Từ 5 tỷ đến 20 tỷ VND', 'Từ 20 tỷ đến 100 tỷ VND', 'Từ 100 tỷ đến 500 tỷ VND', 'Trên 500 tỷ VND'].map(option => (
                                        <div style={styles.radioWrapper} key={option}>
                                            <input type="radio" name="annualRevenue" id={`rev_${option}`} value={option} checked={formData.annualRevenue === option} onChange={handleChange} />
                                            <label style={styles.radioLabel} htmlFor={`rev_${option}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>

                                {/* 4.2 Nhân sự */}
                                <div style={{ marginBottom: '30px' }}>
                                    <div style={{...styles.questionTitle, fontSize: '15px', fontStyle: 'italic'}}>4.2 Số lượng nhân sự <span style={styles.requiredText}>*</span></div>
                                    {['Không quá 10 người', 'Từ 11-50 người', 'Từ 51-100 người', 'Từ 101-200 người', 'Trên 200 người'].map(option => (
                                        <div style={styles.radioWrapper} key={option}>
                                            <input type="radio" name="employeeCount" id={`emp_${option}`} value={option} checked={formData.employeeCount === option} onChange={handleChange} />
                                            <label style={styles.radioLabel} htmlFor={`emp_${option}`}>{option}</label>
                                        </div>
                                    ))}
                                </div>

                                {/* 4.3 Vốn */}
                                <div>
                                    <div style={{...styles.questionTitle, fontSize: '15px', fontStyle: 'italic'}}>4.3 Vốn chủ sở hữu (đơn vị: tỷ VND, Ví dụ: 10.5) <span style={styles.requiredText}>*</span></div>
                                    <input type="text" style={{...styles.input, width: '50%'}} name="equity" value={formData.equity} onChange={handleChange} placeholder="Short answer text" />
                                </div>
                            </div>

                            <div style={styles.questionCard}>
                                <div style={styles.questionTitle}>5. Loại hình doanh nghiệp <span style={styles.requiredText}>*</span></div>
                                {['Doanh nghiệp tư nhân', 'Công ty TNHH 1 thành viên', 'Công ty TNHH 2 thành viên trở lên', 'Công ty cổ phần', 'Công ty hợp danh'].map(option => (
                                    <div style={styles.radioWrapper} key={option}>
                                        <input type="radio" name="companyType" id={`type_${option}`} value={option} checked={formData.companyType === option} onChange={handleChange} />
                                        <label style={styles.radioLabel} htmlFor={`type_${option}`}>{option}</label>
                                    </div>
                                ))}
                                <div style={styles.radioWrapper}>
                                    <input type="radio" name="companyType" id="type_other" value="Other" checked={formData.companyType === 'Other'} onChange={handleChange} />
                                    <label style={styles.radioLabel} htmlFor="type_other">Other:</label>
                                    <input type="text" name="companyTypeOther" value={formData.companyTypeOther} onChange={handleChange} disabled={formData.companyType !== 'Other'} style={{ ...styles.input, marginLeft: '10px', width: '200px' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                                <button type="button" onClick={() => setStep(1)} style={{ ...styles.submitBtn, backgroundColor: 'transparent', color: '#002b5e', border: '1px solid #dadce0' }}>Quay lại</button>
                                <button type="submit" disabled={isSubmitting} style={styles.submitBtn}>
                                    {isSubmitting ? 'Đang gửi...' : 'Gửi'}
                                </button>
                            </div>

                            {/* Global Error Moved Below Submit Button */}
                            {error && (
                                <div className="alert alert-danger" style={{ borderRadius: '8px', marginTop: '20px', marginBottom: '0' }}>
                                    {error}
                                </div>
                            )}
                        </>
                    )}
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
