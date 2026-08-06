"use client"
import React, { useState } from 'react';

const RegistrationForm = () => {
    const [step, setStep] = useState(1);
    const totalSteps = 5;

    // Form states
    const [formData, setFormData] = useState({
        // Step 1
        name: '',
        position: '',
        company: '',
        field: '',
        phone: '',
        email: '',
        // Step 2
        groupType: '',
        // Step 3
        otherCompany: '',
        referrer: '',
        // Step 4
        targetGroups: [],
        // Step 5
        shareReady: '',
        confirmData: false
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            if (name === 'targetGroups') {
                const updatedGroups = [...formData.targetGroups];
                if (checked) {
                    updatedGroups.push(value);
                } else {
                    const index = updatedGroups.indexOf(value);
                    if (index > -1) updatedGroups.splice(index, 1);
                }
                setFormData({ ...formData, [name]: updatedGroups });
            } else {
                setFormData({ ...formData, [name]: checked });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const nextStep = () => {
        if (step < totalSteps) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setStep(step + 1);
        }
    };

    const prevStep = () => {
        if (step > 1) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setStep(step - 1);
        }
    };

    const resetForm = () => {
        if(window.confirm("Bạn có chắc chắn muốn xóa hết câu trả lời?")) {
            setFormData({
                name: '', position: '', company: '', field: '', phone: '', email: '',
                groupType: '', otherCompany: '', referrer: '', targetGroups: [], shareReady: '', confirmData: false
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setStep(1);
        }
    };

    const renderHeader = (title) => (
        <div style={{ padding: '25px 25px 15px 25px' }}>
            <h3 style={{ margin: 0, fontSize: '20px', fontWeight: '600', fontFamily: 'var(--font-montserrat)', color: '#333' }}>{title}</h3>
        </div>
    );

    const renderCard = (children, isHeader = false) => (
        <div style={{ 
            backgroundColor: '#fff', 
            borderRadius: '8px', 
            padding: isHeader ? '0' : '25px', 
            marginBottom: '20px', 
            boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
            border: '1px solid #e0e0e0'
        }}>
            {children}
        </div>
    );

    const inputStyle = {
        width: '100%',
        border: 'none',
        borderBottom: '1px solid #ccc',
        padding: '10px 0',
        fontSize: '15px',
        outline: 'none',
        backgroundColor: 'transparent',
        transition: 'border-color 0.3s'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '16px',
        fontWeight: '600',
        color: '#333',
        marginBottom: '15px'
    };

    const radioStyle = {
        marginRight: '10px',
        accentColor: '#da151a',
        width: '18px',
        height: '18px'
    };

    const checkboxStyle = {
        marginRight: '10px',
        accentColor: '#da151a',
        width: '18px',
        height: '18px'
    };

    const radioLabelStyle = {
        display: 'flex',
        alignItems: 'center',
        marginBottom: '15px',
        fontSize: '15px',
        color: '#444',
        cursor: 'pointer'
    };

    return (
        <div className="registration-area pb-5" style={{ backgroundColor: '#fff', fontFamily: "'Manrope', sans-serif", minHeight: '100vh', paddingTop: '150px' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .form-input:focus {
                    border-bottom: 2px solid #da151a !important;
                }
                .form-select {
                    width: 100%;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    font-size: 15px;
                    outline: none;
                    margin-top: 10px;
                }
                .form-select:focus {
                    border-color: #da151a;
                }
                .btn-form {
                    padding: 10px 25px;
                    background-color: #fff;
                    border: 1px solid #ccc;
                    border-radius: 4px;
                    color: #da151a;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .btn-form:hover {
                    background-color: #f5f5f5;
                }
                .btn-primary-form {
                    padding: 10px 25px;
                    background-color: #da151a;
                    border: 1px solid #da151a;
                    border-radius: 4px;
                    color: #fff;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .btn-primary-form:hover {
                    background-color: #b81014;
                }
                .clear-btn {
                    color: #da151a;
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 14px;
                    font-weight: 500;
                }
                .clear-btn:hover {
                    text-decoration: underline;
                }
                .progress-bar-container {
                    flex-grow: 1;
                    height: 8px;
                    background-color: #e0e0e0;
                    border-radius: 4px;
                    margin: 0 20px;
                    overflow: hidden;
                }
                .progress-bar-fill {
                    height: 100%;
                    background-color: #da151a;
                    transition: width 0.3s ease;
                }
                .action-buttons {
                    display: flex;
                    gap: 15px;
                }
                .form-footer {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    padding: 10px 0;
                    margin-top: 20px;
                }
                @media (max-width: 768px) {
                    .form-footer {
                        flex-direction: column;
                        align-items: stretch;
                        gap: 20px;
                    }
                    .form-footer .progress-section {
                        padding: 0 !important;
                        max-width: 100% !important;
                        order: 1;
                    }
                    .form-footer .action-buttons {
                        justify-content: space-between;
                        order: 2;
                        width: 100%;
                    }
                    .form-footer .clear-section {
                        order: 3;
                        display: flex;
                        justify-content: flex-end;
                    }
                }
            `}} />
            
            <div className="container" style={{ maxWidth: '800px' }}>
                
                {/* STEP 1 */}
                {step === 1 && (
                    <div className="step-1">
                        {renderCard(
                            <div>
                                <h1 style={{ margin: 0, fontSize: '32px', fontWeight: '800', fontFamily: 'var(--font-montserrat)', color: '#333' }}>Đăng ký tham dự sự kiện</h1>
                                <p style={{ marginTop: '15px', color: '#666', fontSize: '15px', lineHeight: '1.6' }}>Vui lòng điền đầy đủ thông tin bên dưới. Các trường có dấu * là bắt buộc.</p>
                                <hr style={{ margin: '20px 0' }} />
                                <h3 style={{ fontSize: '18px', fontWeight: '600', color: '#333', margin: 0 }}>PHẦN 1. THÔNG TIN NGƯỜI ĐĂNG KÝ</h3>
                            </div>
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>1. Họ và tên <span style={{color: 'red'}}>*</span></label>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="form-input" style={inputStyle} placeholder="Câu trả lời của bạn" />
                            </div>
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>2. Chức vụ hiện tại <span style={{color: 'red'}}>*</span></label>
                                <label style={radioLabelStyle}>
                                    <input type="radio" name="position" value="Chủ tịch Hội đồng quản trị / Chủ tịch Hội đồng thành viên" onChange={handleInputChange} checked={formData.position === "Chủ tịch Hội đồng quản trị / Chủ tịch Hội đồng thành viên"} style={radioStyle} />
                                    Chủ tịch Hội đồng quản trị / Chủ tịch Hội đồng thành viên
                                </label>
                                <label style={radioLabelStyle}>
                                    <input type="radio" name="position" value="CEO/Tổng Giám đốc/ Giám đốc" onChange={handleInputChange} checked={formData.position === "CEO/Tổng Giám đốc/ Giám đốc"} style={radioStyle} />
                                    CEO/Tổng Giám đốc/ Giám đốc
                                </label>
                                <label style={radioLabelStyle}>
                                    <input type="radio" name="position" value="Đại diện cơ quan/hiệp hội" onChange={handleInputChange} checked={formData.position === "Đại diện cơ quan/hiệp hội"} style={radioStyle} />
                                    Đại diện cơ quan/hiệp hội
                                </label>
                                <label style={radioLabelStyle}>
                                    <input type="radio" name="position" value="Khác" onChange={handleInputChange} checked={formData.position === "Khác"} style={radioStyle} />
                                    Khác
                                </label>
                            </div>
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>3. Tên doanh nghiệp, cơ quan hoặc đơn vị công tác <span style={{color: 'red'}}>*</span></label>
                                <input type="text" name="company" value={formData.company} onChange={handleInputChange} className="form-input" style={inputStyle} placeholder="Câu trả lời của bạn" />
                            </div>
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>4. Lĩnh vực hoạt động chính <span style={{color: 'red'}}>*</span></label>
                                <select name="field" value={formData.field} onChange={handleInputChange} className="form-select">
                                    <option value="">Chọn</option>
                                    <option value="Tài chính, ngân hàng, bảo hiểm">Tài chính, ngân hàng, bảo hiểm</option>
                                    <option value="Sản xuất, công nghiệp">Sản xuất, công nghiệp</option>
                                    <option value="Công nghệ thông tin">Công nghệ thông tin</option>
                                    <option value="Thương mại, bán lẻ">Thương mại, bán lẻ</option>
                                    <option value="Bất động sản, xây dựng">Bất động sản, xây dựng</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div>
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>5. Số điện thoại <span style={{color: 'red'}}>*</span></label>
                                <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>Vui lòng nhập số điện thoại có thể liên hệ trực tiếp.</p>
                                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} className="form-input" style={inputStyle} placeholder="Câu trả lời của bạn" />
                            </div>
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>6. Email <span style={{color: 'red'}}>*</span></label>
                                <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="form-input" style={inputStyle} placeholder="Câu trả lời của bạn" />
                            </div>
                        )}
                    </div>
                )}

                {/* STEP 2 */}
                {step === 2 && (
                    <div className="step-2">
                        {renderCard(
                            <>
                                {renderHeader("PHẦN 2. NHÓM ĐỐI TƯỢNG THAM DỰ")}
                                <div style={{ padding: '0 25px 25px 25px' }}>
                                    <label style={labelStyle}>7. Anh/Chị thuộc nhóm đối tượng nào dưới đây? <span style={{color: 'red'}}>*</span></label>
                                    <label style={radioLabelStyle}>
                                        <input type="radio" name="groupType" value="Nhóm 1 – CEO đã tham gia Chương trình CEO Mentoring" onChange={handleInputChange} checked={formData.groupType === "Nhóm 1 – CEO đã tham gia Chương trình CEO Mentoring"} style={radioStyle} />
                                        Nhóm 1 – CEO đã tham gia Chương trình CEO Mentoring
                                    </label>
                                    <label style={radioLabelStyle}>
                                        <input type="radio" name="groupType" value="Nhóm 2 – Khách mời từ Hiệp hội doanh nghiệp" onChange={handleInputChange} checked={formData.groupType === "Nhóm 2 – Khách mời từ Hiệp hội doanh nghiệp"} style={radioStyle} />
                                        Nhóm 2 – Khách mời từ Hiệp hội doanh nghiệp
                                    </label>
                                    <label style={radioLabelStyle}>
                                        <input type="radio" name="groupType" value="Nhóm 3 – Khách mời từ Sở Khoa học và Công nghệ" onChange={handleInputChange} checked={formData.groupType === "Nhóm 3 – Khách mời từ Sở Khoa học và Công nghệ"} style={radioStyle} />
                                        Nhóm 3 – Khách mời từ Sở Khoa học và Công nghệ
                                    </label>
                                    <label style={radioLabelStyle}>
                                        <input type="radio" name="groupType" value="Nhóm 4 – Khách mời khác theo thư mời của Ban Tổ chức" onChange={handleInputChange} checked={formData.groupType === "Nhóm 4 – Khách mời khác theo thư mời của Ban Tổ chức"} style={radioStyle} />
                                        Nhóm 4 – Khách mời khác theo thư mời của Ban Tổ chức
                                    </label>
                                </div>
                            </>, true
                        )}
                    </div>
                )}

                {/* STEP 3 */}
                {step === 3 && (
                    <div className="step-3">
                        {renderCard(
                            <>
                                {renderHeader("PHẦN 3. KHÁCH MỜI KHÁC")}
                                <div style={{ padding: '0 25px 25px 25px' }}>
                                    <label style={labelStyle}>26. Tên cơ quan, tổ chức hoặc doanh nghiệp <span style={{color: 'red'}}>*</span></label>
                                    <input type="text" name="otherCompany" value={formData.otherCompany} onChange={handleInputChange} className="form-input" style={inputStyle} placeholder="Câu trả lời của bạn" />
                                </div>
                            </>, true
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>27. Người hoặc đơn vị giới thiệu</label>
                                <input type="text" name="referrer" value={formData.referrer} onChange={handleInputChange} className="form-input" style={inputStyle} placeholder="Câu trả lời của bạn" />
                            </div>
                        )}
                    </div>
                )}

                {/* STEP 4 */}
                {step === 4 && (
                    <div className="step-4">
                        {renderCard(
                            <>
                                {renderHeader("PHẦN 4. NHU CẦU THAM GIA")}
                                <div style={{ padding: '0 25px 25px 25px' }}>
                                    <label style={labelStyle}>28. Anh/Chị mong muốn kết nối với nhóm đối tượng nào?</label>
                                    {[
                                        "CEO và chủ doanh nghiệp", 
                                        "Nhà đầu tư", 
                                        "Chuyên gia và Mentor", 
                                        "Cơ quan quản lý nhà nước", 
                                        "Hiệp hội doanh nghiệp", 
                                        "Đơn vị cung cấp giải pháp công nghệ", 
                                        "Đối tác kinh doanh", 
                                        "Khác"
                                    ].map((target, idx) => (
                                        <label key={idx} style={radioLabelStyle}>
                                            <input type="checkbox" name="targetGroups" value={target} onChange={handleInputChange} checked={formData.targetGroups.includes(target)} style={checkboxStyle} />
                                            <span style={{ marginLeft: '5px' }}>{target}</span>
                                        </label>
                                    ))}
                                </div>
                            </>, true
                        )}
                    </div>
                )}

                {/* STEP 5 */}
                {step === 5 && (
                    <div className="step-5">
                        {renderCard(
                            <>
                                {renderHeader("PHẦN 5. XÁC NHẬN ĐĂNG KÝ")}
                                <div style={{ padding: '0 25px 25px 25px' }}>
                                    <label style={labelStyle}>29. Anh/Chị có sẵn sàng chia sẻ ít nhất 01 bài viết từ Fanpage chương trình để đồng hành lan tỏa giá trị của CEO Dialogue 2026?</label>
                                    <label style={radioLabelStyle}>
                                        <input type="radio" name="shareReady" value="Có, tôi rất sẵn lòng" onChange={handleInputChange} checked={formData.shareReady === "Có, tôi rất sẵn lòng"} style={radioStyle} />
                                        Có, tôi rất sẵn lòng
                                    </label>
                                    <label style={radioLabelStyle}>
                                        <input type="radio" name="shareReady" value="Tiếc quá, tôi chưa thể hỗ trợ lúc này" onChange={handleInputChange} checked={formData.shareReady === "Tiếc quá, tôi chưa thể hỗ trợ lúc này"} style={radioStyle} />
                                        Tiếc quá, tôi chưa thể hỗ trợ lúc này
                                    </label>
                                </div>
                            </>, true
                        )}

                        {renderCard(
                            <div>
                                <label style={labelStyle}>30. Xác nhận thông tin và đồng ý sử dụng dữ liệu <span style={{color: 'red'}}>*</span></label>
                                <label style={{...radioLabelStyle, alignItems: 'flex-start'}}>
                                    <input type="checkbox" name="confirmData" checked={formData.confirmData} onChange={handleInputChange} style={{...checkboxStyle, marginTop: '4px'}} />
                                    <span style={{ lineHeight: '1.5', marginLeft: '5px' }}>Tôi xác nhận các thông tin đã cung cấp là chính xác và đồng ý để Ban Tổ chức sử dụng thông tin này phục vụ công tác tổ chức CEO Dialogue 2026, gửi thông báo sự kiện và kết nối các hoạt động phù hợp của Diễn đàn CEO Việt Nam.</span>
                                </label>
                            </div>
                        )}

                        {renderCard(
                            <div>
                                <h4 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '10px' }}>Lưu ý của Ban Tổ chức</h4>
                                <ul style={{ paddingLeft: '20px', margin: 0, color: '#555', fontSize: '14px', lineHeight: '1.6' }}>
                                    <li>Việc hoàn thành biểu mẫu không thay thế Thư xác nhận tham dự.</li>
                                    <li>CEO đã tham gia Chương trình CEO Mentoring được đăng ký tối đa 02 cán bộ quản lý tham dự cùng.</li>
                                    <li>Số lượng khách mời từ hiệp hội, cơ quan nhà nước và các tổ chức khác được thực hiện theo thư mời của Ban Tổ chức.</li>
                                    <li>Vui lòng không chuyển tiếp đường dẫn đăng ký cho người chưa thuộc nhóm khách mời.</li>
                                </ul>
                            </div>
                        )}
                    </div>
                )}

                {/* FOOTER CONTROLS */}
                <div className="form-footer">
                    <div className="action-buttons">
                        {step > 1 ? (
                            <button onClick={prevStep} className="btn-form">Quay lại</button>
                        ) : (
                            <div></div>
                        )}
                        
                        {step < totalSteps ? (
                            <button onClick={nextStep} className="btn-form">Tiếp</button>
                        ) : (
                            <button onClick={() => alert('Cảm ơn bạn đã đăng ký!')} className="btn-primary-form">Gửi</button>
                        )}
                    </div>

                    <div className="progress-section" style={{ display: 'flex', alignItems: 'center', flexGrow: 1, padding: '0 20px', maxWidth: '400px' }}>
                        <div className="progress-bar-container">
                            <div className="progress-bar-fill" style={{ width: (step / totalSteps) * 100 + '%' }}></div>
                        </div>
                        <span style={{ fontSize: '13px', color: '#555', whiteSpace: 'nowrap' }}>Trang {step} / {totalSteps}</span>
                    </div>

                    <div className="clear-section">
                        <button onClick={resetForm} className="clear-btn">Xóa hết câu trả lời</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default RegistrationForm;
