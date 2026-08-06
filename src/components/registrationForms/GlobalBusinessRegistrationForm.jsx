'use client';
import React from 'react';

const GlobalBusinessRegistrationForm = () => {
    return (
        <div className="registration-form-area pt-150 pb-100" style={{ backgroundColor: '#fff', color: '#333' }}>
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
                    <h2 style={{ fontWeight: 'bold', margin: 0 }}>Global Business Alliance<br/>Membership Registration Form</h2>
                    <input type="text" className="form-control" defaultValue="25/07/2026" style={{ width: '200px', border: '1px solid #ccc', borderRadius: '0' }} />
                </div>
                
                <div className="mb-5">
                    <h5 style={{ color: '#d9232d', fontWeight: 'bold', fontSize: '15px' }}>Annual Fee: &nbsp;&nbsp;&nbsp;&nbsp; 1,400 HKD / 180 USD</h5>
                </div>

                <form>
                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Danh xưng Ông/Bà/Giáo sư/Tiến sĩ</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Danh xưng" style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Họ tên <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-4">
                            <input type="text" className="form-control" placeholder="Tên" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <input type="text" className="form-control" placeholder="Họ" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Tên Công ty <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Tên Công ty" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Chức danh <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Chức danh" required style={{ borderRadius: '0', border: '1px solid #999' }} />
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
                            <label>Số điện thoại di động <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Số điện thoại di động" required style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Trình độ Học vấn <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">Trình độ Học vấn</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Ngành nghề <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-4">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">Ngành nghề</option>
                            </select>
                        </div>
                        <div className="col-md-4 mt-3 mt-md-0">
                            <input type="text" className="form-control" placeholder="Ngành nghề khác" style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Lĩnh vực đặc biệt quan tâm <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">Lĩnh vực đặc biệt quan tâm</option>
                            </select>
                        </div>
                    </div>

                    <div className="row mb-3 align-items-center">
                        <div className="col-md-4">
                            <label>Bạn biết đến chúng tôi từ đâu? <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <select className="form-select" required style={{ borderRadius: '0', border: '1px solid #999' }}>
                                <option value="">Bạn biết đến chúng tôi từ đâu?</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="row mb-3 align-items-center mt-5">
                        <div className="col-md-4">
                            <label>Bạn đã đủ 18 tuổi chưa? <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8 d-flex align-items-center gap-4">
                            <div className="d-flex align-items-center"><input type="radio" name="age" id="ageYes" style={{marginRight: '5px', marginTop: 0}}/> <label htmlFor="ageYes" style={{marginBottom: 0}}>Có</label></div>
                            <div className="d-flex align-items-center"><input type="radio" name="age" id="ageNo" style={{marginRight: '5px', marginTop: 0}}/> <label htmlFor="ageNo" style={{marginBottom: 0}}>Không</label></div>
                        </div>
                    </div>

                    <div className="row mb-5 align-items-center mt-4">
                        <div className="col-md-4">
                            <label>Người giới thiệu:</label>
                        </div>
                        <div className="col-md-8">
                            <input type="text" className="form-control" placeholder="Người giới thiệu (nếu có)" style={{ borderRadius: '0', border: '1px solid #999' }} />
                        </div>
                    </div>

                    <div className="row mb-5 mt-5">
                        <div className="col-md-4">
                            <label>Tải lên Danh thiếp của bạn</label>
                        </div>
                        <div className="col-md-4 text-center">
                            <input type="file" id="gBusinessCard" style={{ display: 'none' }} />
                            <button type="button" className="upload-btn-custom" onClick={() => document.getElementById('gBusinessCard').click()}>+ TẢI LÊN DANH THIẾP</button>
                            <small style={{ color: '#999' }}>Kích thước tệp tối đa 15MB</small>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-4">
                            <label>Tải lên Ảnh Hồ sơ của bạn</label>
                        </div>
                        <div className="col-md-4 text-center">
                            <input type="file" id="gProfilePhoto" style={{ display: 'none' }} />
                            <button type="button" className="upload-btn-custom" onClick={() => document.getElementById('gProfilePhoto').click()}>+ TẢI LÊN ẢNH HỒ SƠ</button>
                            <small style={{ color: '#999' }}>Kích thước tệp tối đa 15MB</small>
                        </div>
                    </div>

                    <div className="row mb-4 mt-5">
                        <div className="col-md-4">
                            <label>Đăng ký nhận Tin tức, Khuyến mãi và Ưu đãi mới nhất từ ASIA CEO COMMUNITY <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <div style={{ position: 'relative', paddingLeft: '30px' }}>
                                <input type="checkbox" style={{ position: 'absolute', left: 0, top: '2px', width: '16px', height: '16px', cursor: 'pointer' }} defaultChecked />
                                <p style={{ fontSize: '13px', lineHeight: '1.4', margin: 0 }}>Tôi xác nhận rằng tôi đã đọc và hiểu <a href="#" style={{ textDecoration: 'underline' }}>Tuyên bố Thu thập Thông tin Cá nhân</a> và <a href="#" style={{ textDecoration: 'underline' }}>Chính sách Bảo mật</a> và tôi đồng ý với việc sử dụng dữ liệu cá nhân của mình cho các mục đích tiếp thị trực tiếp qua email theo cách được nêu trong <a href="#" style={{ textDecoration: 'underline' }}>Tuyên bố Thu thập Thông tin Cá nhân</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row mb-5">
                        <div className="col-md-4">
                            <label>Điều khoản Dịch vụ <span style={{ color: 'red' }}>*</span></label>
                        </div>
                        <div className="col-md-8">
                            <div style={{ position: 'relative', paddingLeft: '30px' }}>
                                <input type="checkbox" style={{ position: 'absolute', left: 0, top: '2px', width: '16px', height: '16px', cursor: 'pointer' }} defaultChecked />
                                <p style={{ fontSize: '13px', margin: 0 }}>Bằng cách tạo tài khoản, tôi đồng ý và chấp nhận <a href="#" style={{ textDecoration: 'underline' }}>Điều khoản và điều kiện</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <button type="submit" className="btn" style={{ backgroundColor: '#d9232d', color: '#fff', fontWeight: 'bold', padding: '10px 60px', fontSize: '18px', borderRadius: '0' }}>Gửi đi</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default GlobalBusinessRegistrationForm;
