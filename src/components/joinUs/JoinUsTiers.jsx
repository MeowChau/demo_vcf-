import React from 'react';
import Link from 'next/link';

const tiers = [
    {
        id: 'global',
        title: 'Global Business\nAlliance\nRegistration',
        intro: 'Hội viên Tiêu chuẩn sẽ được hưởng các dịch vụ dưới đây:',
        features: [
            'Cập nhật Tin tức CEO Executive',
            'Bản tin CEO Executive Hàng tháng',
            'Chia sẻ Kiến thức CEO Executive',
            'Cửa hàng CEO',
            'Hội thảo trực tuyến CEO',
            'Thư mời tham gia Nhóm Whatsapp CEO',
            'Thư mời tham gia Nhóm Linkedin',
            'Thư mời tham gia Nhóm FaceBook'
        ],
        extraNotice: '',
        extraNoticeBottom: '',
        extraFeatures: [],
        fee: 'Phí Thường niên: 180 USD',
        qualificationText: [
            "Standard Membership is open to all, and is a great way to start your ASIA CEO COMMUNITY journey. With Standard membership you can access the ASIA CEO COMMUNITY's online resources and expertise, including our Monthly business updates and online business forum."
        ]
    },
    {
        id: 'clevel',
        title: 'C-level\nRegistration',
        intro: 'Hội viên C-level sẽ được hưởng các dịch vụ dưới đây:',
        features: [
            'Cập nhật Tin tức CEO Executive',
            'Bản tin CEO Executive Hàng tháng',
            'Chia sẻ Kiến thức CEO Executive',
            'Cửa hàng CEO',
            'Hội thảo trực tuyến CEO',
            'Sự kiện Thử rượu',
            'Thư mời tham gia Nhóm Whatsapp CEO',
            'Thư mời tham gia Nhóm Linkedin',
            'Thư mời tham gia Nhóm FaceBook',
            'Danh bạ CEO Executive',
            'Hội thảo trực tuyến CEO',
            'Diễn đàn CEO Executive',
            'Thư mời tham gia Tiệc trưa Hàng tháng'
        ],
        extraNotice: '',
        extraNoticeBottom: 'Dành riêng cho Hội viên Ban điều hành (C-Level)',
        extraFeatures: [
            'Dịch vụ Kết nối & Giới thiệu Kinh doanh',
            'Kết nối Nhà đầu tư',
            'Bàn tròn C-Level',
            'Bàn tròn Chủ Doanh nghiệp',
            'Lời mời Phỏng vấn CEO',
            'Miễn phí tham gia Tiệc trưa Hàng tháng',
            'Tham gia Chương trình Giới thiệu Kinh doanh',
            'Special Discount to our Cửa hàng CEO',
            'Kết nối Nhà đầu tư'
        ],
        fee: 'Phí Thường niên: 2.200 USD',
        qualificationText: [
            "Hội viên C-Level dành riêng cho ban quản lý cấp cao của công ty, những người đang tìm kiếm cơ hội trao đổi ý tưởng, đổi mới và thực tiễn tốt nhất.",
            "Include but not limited to\n- Chief People Officer (CPO)\n- Chief Marketing Officer (CMO)\n- Chief Information Officer (CIO)\n- Chief Technology Officer (CTO)\n- Chief Executive Officer (CEO)\n- Chief Operation Officer (COO)\n- Chief Finance Officer (CFO)\n- Vice Presidents (VPs)\n- President\n- Executive Director\n- Managing Director\n- Managing Partner\n- General Manager"
        ]
    },
    {
        id: 'corporate',
        title: 'Corporate Membership\nRegistration',
        intro: 'Hội viên Doanh nghiệp sẽ được hưởng các dịch vụ dưới đây:',
        extraNotice: 'Tất cả đặc quyền của Hội viên C-Level cộng thêm',
        features: [
            'Tất cả các quản lý cấp cao trực thuộc có thể tham gia các ủy ban và sự kiện.',
            'Chương trình Giảm giá nội bộ - Công ty của bạn có cơ hội cung cấp mức giá và chương trình đặc biệt cho các thành viên khác, tạo ra cơ hội kinh doanh.',
            'Logo công ty của bạn trên trang web của chúng tôi.',
            'Miễn phí tài trợ hỗ trợ cho Hội nghị Bàn tròn CEO.',
            'Giảm 50% cho các cơ hội tài trợ khác.',
            'Truy cập không giới hạn vào danh bạ Doanh nghiệp Kết nối CEO.',
            'Hỗ trợ Tổ chức Sự kiện',
            'Hỗ trợ Tiếp thị Sản phẩm & Dịch vụ',
            'Dịch vụ Kết nối & Giới thiệu Kinh doanh',
            'Kết nối Nhà đầu tư'
        ],
        extraNoticeBottom: '',
        extraFeatures: [],
        fee: 'Phí Thường niên: 5.000 USD',
        qualificationText: []
    }
];

const JoinUsTiers = () => {
    return (
        <div className="join-us-tiers-area pb-100">
            <div className="container">
                {/* DESKTOP LAYOUT (Perfectly Aligned Rows) */}
                <div className="d-none d-lg-block">
                    <div className="row text-center mb-4">
                        {tiers.map(tier => (
                            <div className="col-4" key={`title-${tier.id}`}>
                                <h4 style={{ color: '#546e7a', lineHeight: '1.4', whiteSpace: 'pre-line', fontWeight: 'bold', minHeight: '85px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>{tier.title}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="row text-center mb-5">
                        {tiers.map(tier => (
                            <div className="col-4" key={`btn-${tier.id}`}>
                                <Link href={tier.id === 'global' ? '/global-business-registration' : tier.id === 'clevel' ? '/c-level-registration' : '/corporate-membership-registration'} className="btn" style={{ backgroundColor: '#00c3b3', color: '#fff', padding: '10px 40px', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0, 195, 179, 0.4)' }}>
                                    Join Now
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="row text-center mb-4">
                        {tiers.map(tier => (
                            <div className="col-4" key={`intro-${tier.id}`}>
                                <p style={{ fontWeight: 'bold', fontSize: '15px', padding: '0 15px' }}>{tier.intro}</p>
                                {tier.extraNotice && (
                                    <p style={{ color: '#d9534f', fontSize: '14px', marginBottom: '0' }}>{tier.extraNotice}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="row mb-5">
                        {tiers.map(tier => (
                            <div className="col-4" key={`features-${tier.id}`}>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555' }}>
                                    {tier.features.map((feature, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                                    ))}
                                </ul>
                                {tier.extraNoticeBottom && (
                                    <p style={{ color: '#d9534f', fontSize: '14px', marginBottom: '15px', textAlign: 'center' }}>{tier.extraNoticeBottom}</p>
                                )}
                                {tier.extraFeatures.length > 0 && (
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555' }}>
                                        {tier.extraFeatures.map((feature, index) => (
                                            <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="row text-center mb-4">
                        {tiers.map(tier => (
                            <div className="col-4" key={`fee-${tier.id}`}>
                                <h5 style={{ fontWeight: 'bold', color: '#555' }}>{tier.fee}</h5>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        {tiers.map(tier => (
                            <div className="col-4" key={`qual-${tier.id}`}>
                                {tier.qualificationText.length > 0 && (
                                    <>
                                        <h5 style={{ color: '#e67e22', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Điều kiện tham gia</h5>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555' }}>
                                            {tier.qualificationText.map((text, index) => (
                                                <li key={index} style={{ marginBottom: '15px' }}>
                                                    {text.split('\n').map((line, i) => (
                                                        <span key={i}>
                                                            {line}
                                                            {i > 0 && i < text.split('\n').length - 1 && <br />}
                                                            {i === 0 && text.split('\n').length > 1 && <br />}
                                                        </span>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE LAYOUT (Stacked) */}
                <div className="d-block d-lg-none">
                    <div className="row">
                        {tiers.map((tier) => (
                            <div className="col-md-12 mb-5 text-center" key={tier.id}>
                                <h4 style={{ color: '#546e7a', lineHeight: '1.4', whiteSpace: 'pre-line', fontWeight: 'bold' }}>{tier.title}</h4>
                                
                                <div className="text-center mb-4">
                                    <Link href={tier.id === 'global' ? '/global-business-registration' : tier.id === 'clevel' ? '/c-level-registration' : '/corporate-membership-registration'} className="btn mt-3 mb-5" style={{ backgroundColor: '#00c3b3', color: '#fff', padding: '10px 40px', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0, 195, 179, 0.4)' }}>
                                        Join Now
                                    </Link>
                                </div>

                                <p style={{ fontWeight: 'bold', fontSize: '15px', padding: '0 15px' }}>
                                    {tier.intro}
                                </p>

                                {tier.extraNotice && (
                                    <p style={{ color: '#d9534f', fontSize: '14px', marginBottom: '15px' }}>{tier.extraNotice}</p>
                                )}

                                <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555', marginBottom: tier.extraNoticeBottom ? '15px' : '40px' }}>
                                    {tier.features.map((feature, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                                    ))}
                                </ul>

                                {tier.extraNoticeBottom && (
                                    <p style={{ color: '#d9534f', fontSize: '14px', marginBottom: '15px' }}>{tier.extraNoticeBottom}</p>
                                )}

                                {tier.extraFeatures.length > 0 && (
                                    <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555', marginBottom: '40px' }}>
                                        {tier.extraFeatures.map((feature, index) => (
                                            <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                                        ))}
                                    </ul>
                                )}

                                <h5 style={{ fontWeight: 'bold', color: '#555', marginTop: '50px', marginBottom: '30px' }}>{tier.fee}</h5>

                                {tier.qualificationText.length > 0 && (
                                    <>
                                        <h5 style={{ color: '#e67e22', fontWeight: 'bold', marginBottom: '20px' }}>Điều kiện tham gia</h5>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555' }}>
                                            {tier.qualificationText.map((text, index) => (
                                                <li key={index} style={{ marginBottom: '15px' }}>
                                                    {text.split('\n').map((line, i) => (
                                                        <span key={i}>
                                                            {line}
                                                            {i > 0 && i < text.split('\n').length - 1 && <br />}
                                                            {i === 0 && text.split('\n').length > 1 && <br />}
                                                        </span>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinUsTiers;
