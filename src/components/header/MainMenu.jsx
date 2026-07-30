import React, { useState } from 'react';
import Link from 'next/link';
import MembershipLoginModal from '@/components/membership/MembershipLoginModal';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    const [isMembershipModalOpen, setMembershipModalOpen] = useState(false);
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement} force-right`} data-in="fadeInDown" data-out="fadeOutUp" >
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700;800&subset=vietnamese&display=swap');
                    
                    .navbar-default .navbar-nav > li > a {
                        font-family: var(--font-montserrat), sans-serif !important;
                    }

                    @media (min-width: 992px) {
                        .force-right {
                            display: flex !important;
                            flex-direction: row !important;
                            margin-left: auto !important;
                            justify-content: flex-start !important;
                            flex-wrap: wrap !important;
                            max-width: 750px !important;
                            margin-top: 20px !important;
                            row-gap: 5px !important;
                            padding-bottom: 15px !important;
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
`}</style>
                <li><Link href="/" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Trang chủ</Link></li>
                <li className="dropdown">
                    <Link href="/members-area" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Khu vực Hội viên</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/join-us">Tham gia</Link></li>
                        <li><Link href="/ambassadors">Đại sứ</Link></li>
                        <li><Link href="/certified-trainer-and-coach">Huấn luyện viên & Coach chứng nhận</Link></li>
                        <li><Link href="/members-directory">Danh bạ Hội viên</Link></li>
                        <li><Link href="/community-and-government-relations">Quan hệ Cộng đồng & Chính phủ</Link></li>
                        <li><Link href="/business-matching">Kết nối Kinh doanh</Link></li>
                        <li>
                            <a href="#" onClick={(e) => { e.preventDefault(); setMembershipModalOpen(true); }}>Hội viên của tôi</a>
                        </li>
                        <li><Link href="/member-requests">Yêu cầu Mentoring</Link></li>
                        <li><Link href="/weekly-newsletter">Bản tin Hàng tuần</Link></li>
                        <li><Link href="/member-benefits">Quyền lợi Hội viên</Link></li>
                        <li><Link href="/ceo-business-awards">Giải thưởng CEO Business</Link></li>
                        <li><Link href="/global-business-alliance">Liên minh Doanh nghiệp Toàn cầu</Link></li>
                        <li><Link href="/connection-3">Kết nối 3.0</Link></li>
                        <li><Link href="/contact-our-members">Liên hệ Hội viên</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/events-networking" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Sự kiện & Kết nối</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/singapore-coffee-meetup">Giao lưu Cà phê Singapore</Link></li>
                        <li><Link href="/gala-dinner-2026">Gala Dinner 2026</Link></li>
                        <li><Link href="/hk-monthly-event">Sự kiện Hàng tháng HK</Link></li>
                        <li><Link href="/guest-speaker-registration">Đăng ký Diễn giả khách mời</Link></li>
                        <li><Link href="/more-events">Các sự kiện khác</Link></li>
                        <li><Link href="/submit-an-event">Gửi Sự kiện</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/leadership-workshops" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Hội thảo Lãnh đạo</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/aiim-ai-x-ei">AIIM - AI X EI</Link></li>
                        <li><Link href="/aiim-accelerating-ai-leadership">AIIM - Thúc đẩy Lãnh đạo AI</Link></li>
                        <li><Link href="/leadership-workshops-sub">Hội thảo Lãnh đạo</Link></li>
                        <li><Link href="/leadership-workshops">Trò chuyện với VCS</Link></li>
                        <li><Link href="/cios-outlook-for-tech">Tầm nhìn Tech của CIO 2021</Link></li>
                        <li><Link href="/asean-business-hub">Trung tâm Kinh doanh ASEAN - Selangor Malaysia</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/past-events" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Sự kiện Đã qua</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/singapore-2026-new-year-dinner">Tiệc Năm mới Singapore 2026</Link></li>
                        <li><Link href="#">Tiệc trưa CNY HK 2026</Link></li>
                        <li><Link href="#">Hội thảo Định giá Startup</Link></li>
                        <li><Link href="#">Lễ ký kết MOU - MATRADE</Link></li>
                        <li><Link href="#">Malaysia - Đối thoại với YBRS. Abu Bakar</Link></li>
                        <li><Link href="#">Gala Dinner 2025</Link></li>
                        <li><Link href="#">Tiệc trưa CNY 2025</Link></li>
                        <li><Link href="#">Tiệc tối Nhà đầu tư & Chủ tịch</Link></li>
                        <li><Link href="#">Sự kiện Kết nối Tiền Gala</Link></li>
                        <li><Link href="#">Tmall Global - Thương mại điện tử tại Trung Quốc</Link></li>
                        <li><Link href="#">Đêm Kết nối Indonesia</Link></li>
                        <li><Link href="#">Giao lưu Singapore 2025</Link></li>
                        <li><Link href="#">Đầu tư Thay thế 2025</Link></li>
                        <li><Link href="#">Hội nghị Bàn tròn CXO Q2 2025</Link></li>
                        <li><Link href="#">Cập nhật Thị trường Việt Nam - Aquis Capital</Link></li>
                        <li><Link href="#">Sự kiện TP.HCM, Việt Nam</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="/publications" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Ấn phẩm</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/asia-ceo-magazine">Tạp chí Asia CEO</Link></li>
                        <li><Link href="/founder-magazines">Tạp chí Founder</Link></li>
                        <li><Link href="/venture-capitalist-magazines">Tạp chí Venture Capitalist</Link></li>
                        <li><Link href="/c-suite-magazines">Tạp chí C-Suite</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/about-us" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Giới thiệu</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/media-coverage">Truyền thông</Link></li>
                        <li><Link href="/social-responsibility">Trách nhiệm Xã hội</Link></li>
                        <li><Link href="/testimonials">Đánh giá của Khách hàng</Link></li>
                        <li><Link href="/terms-and-conditions">Điều khoản và Điều kiện</Link></li>
                        <li><Link href="/privacy-policy">Chính sách Bảo mật</Link></li>
                        <li><Link href="/contact-us">Liên hệ</Link></li>
                        <li><Link href="/submit-articles">Gửi Bài viết</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/partnership" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Hợp tác</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="/referral-program">Chương trình Giới thiệu</Link></li>
                        <li><Link href="/partner-with-us">Trở thành Đối tác</Link></li>
                        <li><Link href="/sponsor-our-event">Tài trợ Sự kiện</Link></li>
                        <li><Link href="/advertise-with-us">Quảng cáo</Link></li>
                        <li><Link href="/ceo-monthly-lunch-party">Tiệc trưa CEO Hàng tháng</Link></li>
                        <li><Link href="/2023-year-book-sponsorship">Sách Thường niên 2023 - Tài trợ</Link></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setMembershipModalOpen(true); }}>Gửi Dự án của Bạn</a></li>
                        <li><a href="#" onClick={(e) => { e.preventDefault(); setMembershipModalOpen(true); }}>Gửi Tin nhắn</a></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link href="/global-chapters" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>Chi nhánh Toàn cầu</Link>
                    <span className="d-lg-none" onClick={toggleSubMenu} style={{ position: 'absolute', right: 0, top: 0, height: '45px', width: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 10, fontSize: '16px', color: '#333' }}><i className="fas fa-angle-down"></i></span>
                    <ul className="dropdown-menu mobile-scroll-menu">
                        <li><Link href="#">Ban Chỉ đạo</Link></li>
                        <li><Link href="#">Châu Á - Cố vấn Danh dự</Link></li>
                        <li><Link href="#">Chi nhánh Úc</Link></li>
                        <li><Link href="#">Chi nhánh Metaverse</Link></li>
                        <li><Link href="#">Chi nhánh Bangladesh</Link></li>
                        <li><Link href="#">Chi nhánh Campuchia</Link></li>
                        <li><Link href="#">Chi nhánh Canada</Link></li>
                        <li><Link href="#">Chi nhánh Trung Đông</Link></li>
                        <li><Link href="#">Chi nhánh Mexico</Link></li>
                        <li><Link href="#">Chi nhánh GBA Trung Quốc</Link></li>
                        <li><Link href="#">Chi nhánh Hồng Kông</Link></li>
                        <li><Link href="#">Chi nhánh Nam Phi</Link></li>
                        <li><Link href="#">Chi nhánh Hoa Kỳ</Link></li>
                        <li><Link href="#">Chi nhánh Thượng Hải</Link></li>
                        <li><Link href="#">Chi nhánh Đài Bắc</Link></li>
                        <li><Link href="#">Chi nhánh Châu Phi</Link></li>
                        <li><Link href="#">Chi nhánh Nhật Bản</Link></li>
                        <li><Link href="#">Chi nhánh Philippines</Link></li>
                        <li><Link href="#">Chi nhánh London</Link></li>
                        <li><Link href="#">Hoa Kỳ (Thung lũng Silicon) - Cố vấn Danh dự</Link></li>
                        <li><Link href="#">Chi nhánh Việt Nam</Link></li>
                        <li><Link href="#">Chi nhánh Ấn Độ</Link></li>
                    </ul>
                </li>

            </ul>
            <style dangerouslySetInnerHTML={{
                __html: `
                .mobile-scroll-menu {
                    max-height: 50vh !important;
                    overflow-y: auto !important;
                    overflow-x: hidden !important;
                }
                /* Custom scrollbar to make it look nicer */
                .mobile-scroll-menu::-webkit-scrollbar {
                    width: 6px;
                }
                .mobile-scroll-menu::-webkit-scrollbar-thumb {
                    background-color: #ccc;
                    border-radius: 4px;
                }
            `}} />
            <MembershipLoginModal 
                isOpen={isMembershipModalOpen} 
                onClose={() => setMembershipModalOpen(false)} 
            />
        </>
    );
};

export default MainMenu;