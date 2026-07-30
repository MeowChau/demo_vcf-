const fs = require('fs');

const path = 'd:\\duanma\\Consua v1.3\\source\\src\\components\\header\\MainMenu.jsx';
let content = fs.readFileSync(path, 'utf8');

const translations = {
    '>HOME<': '>Trang chủ<',
    '>MEMBERS AREA<': '>Khu vực Hội viên<',
    '>JOIN US<': '>Tham gia<',
    '>AMBASSADORS<': '>Đại sứ<',
    '>CERTIFIED TRAINER & COACH<': '>Huấn luyện viên & Coach chứng nhận<',
    '>MEMBERS DIRECTORY<': '>Danh bạ Hội viên<',
    '>COMMUNITY & GOVERNMENT RELATIONS<': '>Quan hệ Cộng đồng & Chính phủ<',
    '>BUSINESS MATCHING<': '>Kết nối Kinh doanh<',
    '>MY MEMBERSHIP<': '>Hội viên của tôi<',
    '>MENTORING REQUESTS<': '>Yêu cầu Mentoring<',
    '>WEEKLY NEWSLETTER<': '>Bản tin Hàng tuần<',
    '>MEMBER BENEFITS<': '>Quyền lợi Hội viên<',
    '>CEO BUSINESS AWARDS<': '>Giải thưởng CEO Business<',
    '>GLOBAL BUSINESS ALLIANCE<': '>Liên minh Doanh nghiệp Toàn cầu<',
    '>CONNECTION 3.0<': '>Kết nối 3.0<',
    '>CONTACT OUR MEMBERS<': '>Liên hệ Hội viên<',
    '>EVENTS & NETWORKING<': '>Sự kiện & Kết nối<',
    '>SINGAPORE COFFEE MEETUP<': '>Giao lưu Cà phê Singapore<',
    '>GALA DINNER 2026<': '>Gala Dinner 2026<',
    '>HK MONTHLY EVENT<': '>Sự kiện Hàng tháng HK<',
    '>GUEST SPEAKER REGISTRATION<': '>Đăng ký Diễn giả khách mời<',
    '>MORE EVENTS<': '>Các sự kiện khác<',
    '>SUBMIT AN EVENT<': '>Gửi Sự kiện<',
    '>LEADERSHIP WORKSHOPS<': '>Hội thảo Lãnh đạo<',
    '>AIIM - AI X EI<': '>AIIM - AI X EI<',
    '>AIIM - ACCELERATING AI LEADERSHIP<': '>AIIM - Thúc đẩy Lãnh đạo AI<',
    '>TALK TO VCS<': '>Trò chuyện với VCS<',
    '>CIOs OUTLOOK FOR TECH 2021<': '>Tầm nhìn Tech của CIO 2021<',
    '>ASEAN BUSINESS HUB - SELANGOR MALAYSIA<': '>Trung tâm Kinh doanh ASEAN - Selangor Malaysia<',
    '>PAST EVENTS<': '>Sự kiện Đã qua<',
    '>SINGAPORE 2026 NEW YEAR DINNER<': '>Tiệc Năm mới Singapore 2026<',
    '>HK CNY LUNCHEON 2026<': '>Tiệc trưa CNY HK 2026<',
    '>STARTUP VALUATION WORKSHOP<': '>Hội thảo Định giá Startup<',
    '>MOU SIGNING CEREMONY - MATRADE<': '>Lễ ký kết MOU - MATRADE<',
    '>MALAYSIA - Dialogue with YBRS. ABU BAKAR<': '>Malaysia - Đối thoại với YBRS. Abu Bakar<',
    '>GALA DINNER 2025<': '>Gala Dinner 2025<',
    '>2025 CNY LUNCHEON<': '>Tiệc trưa CNY 2025<',
    '>INVESTORS & PRESIDENTS DINNER<': '>Tiệc tối Nhà đầu tư & Chủ tịch<',
    '>PRE-GALA NETWORKING EVENT<': '>Sự kiện Kết nối Tiền Gala<',
    '>TMALL GLOBAL - E-COMMERCE IN CHINA<': '>Tmall Global - Thương mại điện tử tại Trung Quốc<',
    '>INDONESIA NETWORKING NIGHT<': '>Đêm Kết nối Indonesia<',
    '>SINGAPORE MEETUP 2025<': '>Giao lưu Singapore 2025<',
    '>ALTERNATIVE INVESTMENT 2025<': '>Đầu tư Thay thế 2025<',
    '>CXO ROUNDTABLE Q2 2025<': '>Hội nghị Bàn tròn CXO Q2 2025<',
    '>VIETNAM MARKET UPDATE - AQUIS CAPITAL<': '>Cập nhật Thị trường Việt Nam - Aquis Capital<',
    '>VIETNAM HCMC EVENT<': '>Sự kiện TP.HCM, Việt Nam<',
    '>PUBLICATIONS<': '>Ấn phẩm<',
    '>ASIA CEO MAGAZINE<': '>Tạp chí Asia CEO<',
    '>FOUNDER MAGAZINES<': '>Tạp chí Founder<',
    '>VENTURE CAPITALIST MAGAZINES<': '>Tạp chí Venture Capitalist<',
    '>C-SUITE MAGAZINES<': '>Tạp chí C-Suite<',
    '>ABOUT US<': '>Giới thiệu<',
    '>MEDIA COVERAGE<': '>Truyền thông<',
    '>SOCIAL RESPONSIBILITY<': '>Trách nhiệm Xã hội<',
    '>TESTIMONIALS<': '>Đánh giá của Khách hàng<',
    '>TERMS AND CONDITIONS<': '>Điều khoản và Điều kiện<',
    '>PRIVACY POLICY<': '>Chính sách Bảo mật<',
    '>CONTACT US<': '>Liên hệ<',
    '>SUBMIT ARTICLES<': '>Gửi Bài viết<',
    '>PARTNERSHIP<': '>Hợp tác<',
    '>REFERRAL PROGRAM<': '>Chương trình Giới thiệu<',
    '>PARTNER WITH US<': '>Trở thành Đối tác<',
    '>SPONSOR OUR EVENT<': '>Tài trợ Sự kiện<',
    '>ADVERTISE WITH US<': '>Quảng cáo<',
    '>CEO MONTHLY LUNCH PARTY<': '>Tiệc trưa CEO Hàng tháng<',
    '>2023 YEAR BOOK - SPONSORSHIP<': '>Sách Thường niên 2023 - Tài trợ<',
    '>SUBMIT YOUR PROJECT<': '>Gửi Dự án của Bạn<',
    '>POST A MESSAGE<': '>Gửi Tin nhắn<',
    '>GLOBAL CHAPTERS<': '>Chi nhánh Toàn cầu<',
    '>OUR STEERING COMMITTEE<': '>Ban Chỉ đạo<',
    '>ASIA - HONORARY ADVISORS<': '>Châu Á - Cố vấn Danh dự<',
    '>AUSTRALIA CHAPTER<': '>Chi nhánh Úc<',
    '>THE METAVERSE CHAPTER<': '>Chi nhánh Metaverse<',
    '>BANGLADESH CHAPTER<': '>Chi nhánh Bangladesh<',
    '>CAMBODIA CHAPTER<': '>Chi nhánh Campuchia<',
    '>CANADA CHAPTER<': '>Chi nhánh Canada<',
    '>MIDDLE EAST CHAPTER<': '>Chi nhánh Trung Đông<',
    '>MEXICO CHAPTER<': '>Chi nhánh Mexico<',
    '>GBA CHINA CHAPTER<': '>Chi nhánh GBA Trung Quốc<',
    '>HONG KONG CHAPTER<': '>Chi nhánh Hồng Kông<',
    '>SOUTH AFRICA CHAPTER<': '>Chi nhánh Nam Phi<',
    '>U.S. CHAPTER<': '>Chi nhánh Hoa Kỳ<',
    '>SHANGHAI CHAPTER<': '>Chi nhánh Thượng Hải<',
    '>TAIPEI CHAPTER<': '>Chi nhánh Đài Bắc<',
    '>AFRICA CHAPTER<': '>Chi nhánh Châu Phi<',
    '>JAPAN CHAPTER<': '>Chi nhánh Nhật Bản<',
    '>PHILIPPINES CHAPTER<': '>Chi nhánh Philippines<',
    '>LONDON CHAPTER<': '>Chi nhánh London<',
    '>USA (SILICON VALLEY) - HONORARY ADVISORS<': '>Hoa Kỳ (Thung lũng Silicon) - Cố vấn Danh dự<',
    '>VIETNAM CHAPTER<': '>Chi nhánh Việt Nam<',
    '>INDIA CHAPTER<': '>Chi nhánh Ấn Độ<'
};

for (const [en, vi] of Object.entries(translations)) {
    content = content.replace(new RegExp(en, 'g'), vi);
}

// Ensure the font and styles from the newer version are applied
content = content.replace('style={{ marginLeft: \'-2px\' }}', '');
content = content.replace(/className=\{`nav navbar-nav \$\{navbarPlacement\}`\}/, 'className={`nav navbar-nav ${navbarPlacement} force-right`}');

const newStyles = `
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&subset=vietnamese&display=swap');
                    
                    .navbar-default .navbar-nav > li > a {
                        font-family: var(--font-montserrat), sans-serif !important;
                    }

                    @media (min-width: 992px) {
                        .force-right {
                            display: flex !important;
                            flex-direction: row !important;
                            margin-left: auto !important;
                            justify-content: flex-end !important;
                            flex-wrap: wrap !important;
                            max-width: 750px !important;
                            margin-top: 20px !important;
                            row-gap: 5px !important;
                        }
                        .navbar-default .navbar-nav > li > a {
                            padding: 0px 12px !important;
                        }
                    }
                    @media (min-width: 1200px) {
                        .navbar-default .navbar-nav > li > a {
                            padding: 0px 15px !important;
                        }
                    }
                    @media (max-width: 991px) {
                        .navbar-default .navbar-nav > li > a {
                            color: #333 !important;
                            padding: 12px 15px !important;
                            display: block !important;
                        }
                    }
`;
content = content.replace(/<style>\{`[\s\S]*?`\}<\/style>/, '<style>{`' + newStyles + '`}</style>');

// Make dropdowns visible on desktop
content = content.replace(/className="dropdown d-block d-lg-none"/g, 'className="dropdown"');

// Fix specific missing translation match
content = content.replace('USA (SILICON VALLEY) - HONORARY ADVISORS', 'Hoa Kỳ (Thung lũng Silicon) - Cố vấn Danh dự');


fs.writeFileSync(path, content, 'utf8');
console.log('Done translating and styling MainMenu.jsx');
