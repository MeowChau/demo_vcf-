"use client"
import React, { useState, useEffect } from 'react';

const MentoringRequestForm = () => {
    const [formData, setFormData] = useState({
        desiredClasses: [],
        mainProblemCategory: '',
        otherProblemCategory: '',
        problemDescription: '',
        problemImportance: '',
        triedSolutions: '',
        consideredOptions: '',
        mainQuestionForMentor: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [jwt, setJwt] = useState(null);
    const [registeredClasses, setRegisteredClasses] = useState([]);

    useEffect(() => {
        // Retrieve JWT to check if user is logged in
        const token = localStorage.getItem('jwt');
        const userStr = localStorage.getItem('user');
        if (!token || !userStr) {
            window.location.href = '/dang-nhap';
            return;
        } else {
            setJwt(token);
        }

        const fetchUserEvents = async () => {
            try {
                const user = JSON.parse(userStr);
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                const res = await fetch(`${API_URL}/api/mentoring-requests/me`, {
                    headers: { 'Authorization': `Bearer ${token}` }
                });
                
                if (res.ok) {
                    const data = await res.json();
                    let classes = [];
                    data.data.forEach(req => {
                        if (req.desiredClasses) {
                            classes = [...classes, ...req.desiredClasses];
                        }
                    });
                    setRegisteredClasses(classes);
                }
            } catch (err) {
                console.error(err);
            }
        };

        fetchUserEvents();
    }, []);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        
        if (type === 'checkbox') {
            const updatedClasses = checked
                ? [...formData.desiredClasses, value]
                : formData.desiredClasses.filter(c => c !== value);
            setFormData(prev => ({ ...prev, desiredClasses: updatedClasses }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError('');

        if (formData.desiredClasses.length === 0 || !formData.mainProblemCategory || !formData.problemDescription || !formData.problemImportance || !formData.triedSolutions || !formData.consideredOptions || !formData.mainQuestionForMentor) {
            setError('Vui lòng điền đầy đủ các thông tin bắt buộc (*).');
            setIsSubmitting(false);
            return;
        }

        try {
            const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
            
            // Format data for Strapi v5
            const mapCategoryToEnum = (label) => {
                if (label === 'Other') return 'Khác';
                if (label.startsWith('Chiến lược')) return 'Chiến lược';
                if (label.startsWith('Tăng trưởng')) return 'Tăng trưởng';
                if (label.startsWith('Marketing')) return 'Marketing';
                if (label.startsWith('Nhân sự')) return 'Nhân sự';
                if (label.startsWith('Phân quyền')) return 'Phân quyền';
                if (label.startsWith('Quản lý & vận hành')) return 'Quản lý & vận hành';
                if (label.startsWith('Tài chính')) return 'Tài chính';
                if (label.startsWith('AI & chuyển đổi số')) return 'AI & chuyển đổi số';
                if (label.startsWith('Sản phẩm')) return 'Sản phẩm';
                if (label.startsWith('Quốc tế hóa')) return 'Quốc tế hóa';
                if (label.startsWith('Pháp lý')) return 'Pháp lý';
                return 'Khác';
            };

            const payload = {
                data: {
                    desiredClasses: formData.desiredClasses,
                    mainProblemCategory: mapCategoryToEnum(formData.mainProblemCategory),
                    otherProblemCategory: formData.otherProblemCategory,
                    problemDescription: formData.problemDescription,
                    problemImportance: formData.problemImportance,
                    triedSolutions: formData.triedSolutions,
                    consideredOptions: formData.consideredOptions,
                    mainQuestionForMentor: formData.mainQuestionForMentor
                }
            };

            const response = await fetch(`${API_URL}/api/mentoring-requests`, {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('jwt')}`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                const errData = await response.json();
                console.error(errData);
                throw new Error('Có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại.');
            }

            setSuccess(true);
            setTimeout(() => {
                window.location.href = '/dashboard-su-kien';
            }, 2000);

        } catch (err) {
            setError(err.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const problemCategories = [
        "Chiến lược (thiếu năng lực đổi mới, tăng trưởng, định hướng, mô hình, lợi thế cạnh tranh)",
        "Tăng trưởng (mở rộng quy mô, thị trường, doanh thu)",
        "Marketing, thương hiệu & bán hàng (thiếu khách hàng, thu hút khách hàng, kênh bán, định giá)",
        "Nhân sự (tuyển dụng, giữ người, thiếu quản lý cấp trung, đào tạo, văn hóa)",
        "Phân quyền & cơ cấu tổ chức (quản lý công ty con, ủy quyền, đội ngũ kế cận)",
        "Quản lý & vận hành (thiếu hệ thống quản trị, quy trình, KPI, năng suất, chất lượng)",
        "Tài chính (dòng tiền, chi phí, lợi nhuận, huy động vốn)",
        "AI & chuyển đổi số (AI, tự động hóa, dữ liệu, ERP/CRM)",
        "Sản phẩm, sản xuất & chuỗi cung ứng (thiếu sản phẩm, phát triển sản phẩm, kho, logistics)",
        "Quốc tế hóa (xuất khẩu, bán hàng cho nước ngoài, mở thị trường quốc tế)",
        "Pháp lý & quản trị rủi ro (hợp đồng, thuế, tuân thủ, tranh chấp)"
    ];

    const styles = {
        card: {
            backgroundColor: '#fff',
            borderTop: '8px solid #e60000',
            borderRadius: '8px',
            padding: '40px 30px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            border: '1px solid #dadce0',
            borderTopWidth: '8px'
        },
        title: {
            fontSize: '32px',
            color: '#202124',
            marginBottom: '15px',
            fontWeight: '600'
        },
        desc: {
            fontSize: '16px',
            color: '#5f6368',
            marginBottom: '30px'
        },
        questionBlock: {
            marginBottom: '35px',
            backgroundColor: '#fafafa',
            padding: '25px',
            borderRadius: '8px',
            border: '1px solid #eee'
        },
        questionTitle: {
            fontSize: '18px',
            fontWeight: '600',
            color: '#202124',
            marginBottom: '10px'
        },
        questionSub: {
            fontSize: '14px',
            color: '#5f6368',
            marginBottom: '15px',
            fontStyle: 'italic'
        },
        req: {
            color: '#e60000'
        },
        radioLabel: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '12px',
            fontSize: '15px',
            color: '#202124',
            cursor: 'pointer'
        },
        textarea: {
            width: '100%',
            border: '1px solid #dadce0',
            borderRadius: '4px',
            padding: '15px',
            fontSize: '15px',
            color: '#202124',
            minHeight: '120px',
            outline: 'none',
            resize: 'vertical'
        },
        submitBtn: {
            backgroundColor: '#e60000',
            color: '#fff',
            padding: '14px 30px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'background-color 0.2s'
        }
    };

    if (success) {
        return (
            <div style={styles.card}>
                <div className="alert alert-success">
                    <h4>Đăng ký thành công!</h4>
                    <p>Cảm ơn bạn đã gửi yêu cầu. Chúng tôi đang chuyển hướng bạn về trang quản lý...</p>
                </div>
            </div>
        );
    }

    return (
        <div style={styles.card}>
            <h2 style={styles.title}>Đăng ký event</h2>

            {error && (
                <div className="alert alert-danger" style={{ marginBottom: '25px' }}>
                    {error}
                </div>
            )}

            <form onSubmit={handleSubmit}>
                
                {/* Checkbox section */}
                <div style={styles.questionBlock}>
                    <div style={styles.questionTitle}>
                        Quý Anh/Chị mong muốn đăng ký tham gia chương trình nào sau đây? <span style={styles.req}>*</span>
                    </div>
                    <div style={styles.questionSub}>Vui lòng lựa chọn tất cả những ngày có thể tham gia</div>
                    
                    {['Lớp 17', 'Lớp 18', 'Lớp 19', 'Lớp 20'].map((lop) => {
                        const isRegistered = registeredClasses.includes(lop);
                        return (
                            <label key={lop} style={{...styles.radioLabel, color: isRegistered ? '#999' : '#202124'}}>
                                <input 
                                    type="checkbox" 
                                    name="desiredClasses" 
                                    value={lop} 
                                    checked={formData.desiredClasses.includes(lop)}
                                    onChange={handleChange}
                                    disabled={isRegistered}
                                    style={{ marginRight: '10px', marginTop: '0', width: 'auto' }}
                                />
                                <span>{lop} {isRegistered && <span style={{color: '#e60000', fontSize: '13px', marginLeft: '5px'}}>(Bạn đã đăng ký lớp này)</span>}</span>
                            </label>
                        );
                    })}
                </div>

                {/* Radio section */}
                <div style={styles.questionBlock}>
                    <div style={styles.questionTitle}>
                        Bài toán chính của doanh nghiệp thuộc nhóm nào? <span style={styles.req}>*</span>
                    </div>
                    <div style={styles.questionSub}>(Ưu tiên chọn vấn đề vướng mắc nhất)</div>
                    
                    {problemCategories.map((cat, idx) => {
                        const shortName = cat.split('(')[0].trim();
                        return (
                            <label key={idx} style={styles.radioLabel}>
                                <input 
                                    type="radio" 
                                    name="mainProblemCategory" 
                                    value={shortName}
                                    checked={formData.mainProblemCategory === shortName}
                                    onChange={handleChange}
                                    style={{ marginRight: '10px', marginTop: '0', width: 'auto' }}
                                />
                                <span>{cat}</span>
                            </label>
                        );
                    })}
                    
                    <label style={{...styles.radioLabel, display: 'flex', alignItems: 'center'}}>
                        <input 
                            type="radio" 
                            name="mainProblemCategory" 
                            value="Other"
                            checked={formData.mainProblemCategory === 'Other'}
                            onChange={handleChange}
                            style={{ marginRight: '10px', marginTop: '0', width: 'auto' }}
                        />
                        <span>Khác:</span>
                        <input 
                            type="text"
                            name="otherProblemCategory"
                            value={formData.otherProblemCategory}
                            onChange={handleChange}
                            disabled={formData.mainProblemCategory !== 'Other'}
                            style={{ marginLeft: '10px', border: 'none', borderBottom: '1px solid #dadce0', outline: 'none', width: '250px', padding: '5px' }}
                            placeholder="Nhập vấn đề khác..."
                        />
                    </label>
                </div>

                {/* Textarea 1 */}
                <div style={styles.questionBlock}>
                    <div style={styles.questionTitle}>Mô tả một vấn đề/bài toán mà CEO đang vướng mắc và cần tháo gỡ <span style={styles.req}>*</span></div>
                    <div style={styles.questionSub}>
                        Phần này cần viết cụ thể, càng chi tiết càng tốt (tối thiểu 3-5 câu)<br/>
                        (Vấn đề đã kéo dài tối thiểu 6 tháng, lý tưởng là trên 1 năm. Lưu ý: Chỉ nêu một vấn đề duy nhất, không đề cập đến các vấn đề dự kiến thực hiện trong tương lai)
                    </div>
                    <textarea 
                        name="problemDescription"
                        value={formData.problemDescription}
                        onChange={handleChange}
                        style={styles.textarea}
                        rows={5}
                        placeholder="Nhập câu trả lời của bạn..."
                    ></textarea>
                </div>

                {/* Textarea 2 */}
                <div style={styles.questionBlock}>
                    <div style={styles.questionTitle}>Vì sao bài toán này quan trọng lúc này? <span style={styles.req}>*</span></div>
                    <div style={styles.questionSub}>(Nếu không giải trong 6-12 tháng thì hậu quả là gì?)</div>
                    <textarea 
                        name="problemImportance"
                        value={formData.problemImportance}
                        onChange={handleChange}
                        style={styles.textarea}
                        rows={5}
                        placeholder="Nhập câu trả lời của bạn..."
                    ></textarea>
                </div>

                {/* Textarea 3 */}
                <div style={styles.questionBlock}>
                    <div style={styles.questionTitle}>Tôi đã thử làm gì rồi? <span style={styles.req}>*</span></div>
                    <div style={styles.questionSub}>(Các giải pháp đã thử, cái gì có tác dụng, cái gì thất bại)</div>
                    <textarea 
                        name="triedSolutions"
                        value={formData.triedSolutions}
                        onChange={handleChange}
                        style={styles.textarea}
                        rows={5}
                        placeholder="Nhập câu trả lời của bạn..."
                    ></textarea>
                </div>

                {/* Textarea 4 */}
                <div style={styles.questionBlock}>
                    <div style={styles.questionTitle}>Tôi đang phân vân giữa những lựa chọn nào? <span style={styles.req}>*</span></div>
                    <div style={styles.questionSub}>(Ví dụ: tự làm hay thuê ngoài; tăng trưởng hay giữ biên lợi nhuận; tuyển người ngoài hay đào tạo người trong)</div>
                    <textarea 
                        name="consideredOptions"
                        value={formData.consideredOptions}
                        onChange={handleChange}
                        style={styles.textarea}
                        rows={5}
                        placeholder="Nhập câu trả lời của bạn..."
                    ></textarea>
                </div>

                {/* Textarea 5 */}
                <div style={styles.questionBlock}>
                    <div style={styles.questionTitle}>Câu hỏi chính tôi muốn hỏi Mentor là gì? <span style={styles.req}>*</span></div>
                    <div style={styles.questionSub}>(Tối đa 2 câu hỏi. Tốt nhất là chọn 1 câu. Phải là câu hỏi liên quan đến vấn đề đã mô tả, không phải câu hỏi liên quan đến nội dung khác)</div>
                    <textarea 
                        name="mainQuestionForMentor"
                        value={formData.mainQuestionForMentor}
                        onChange={handleChange}
                        style={styles.textarea}
                        rows={5}
                        placeholder="Nhập câu trả lời của bạn..."
                    ></textarea>
                </div>

                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                    <button type="submit" style={styles.submitBtn} disabled={isSubmitting}>
                        {isSubmitting ? 'Đang gửi...' : 'Gửi'}
                    </button>
                </div>
            </form>
        </div>
    );
};

export default MentoringRequestForm;
