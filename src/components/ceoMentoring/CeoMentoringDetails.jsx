"use client"
import React from 'react';
import Link from 'next/link';

const CeoMentoringDetails = () => {
    return (
        <div className="ceo-mentoring-details-area" style={{ backgroundColor: '#ffffff', fontFamily: "'Manrope', sans-serif" }}>
            <div className="container py-5" style={{ maxWidth: '900px' }}>
                {/* Header Section */}
                <div className="text-center mb-5">
                    <h1 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '36px', fontFamily: 'var(--font-montserrat)', marginBottom: '20px' }}>
                        CEO MENTORING
                    </h1>
                    <h3 style={{ color: '#002b5e', fontWeight: '700', fontSize: '22px', marginBottom: '15px' }}>
                        Đối thoại thực chiến cùng những nhà lãnh đạo giàu kinh nghiệm
                    </h3>
                    <p style={{ fontSize: '16px', color: '#555', marginBottom: '15px' }}>
                        Không phải một buổi chia sẻ lý thuyết hay networking đại trà.
                    </p>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                        <strong>CEO Mentoring</strong> là không gian đối thoại chuyên sâu, nơi CEO, Founder và nhà quản lý trực tiếp đưa những bài toán thật của doanh nghiệp vào trao đổi cùng Mentor và các CEO đồng cấp.
                    </p>
                    <h4 style={{ color: '#da151a', fontWeight: '700', fontSize: '18px', marginBottom: '30px' }}>
                        Nhìn đúng vấn đề — Mở rộng góc nhìn — Tìm hướng hành động phù hợp
                    </h4>
                    <Link href="/dang-ky" className="btn btn-theme effect btn-md" style={{ backgroundColor: '#da151a', color: '#fff', padding: '12px 30px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '5px' }}>
                        ĐĂNG KÝ THAM GIA
                    </Link>
                    <p style={{ fontSize: '14px', color: '#777', fontStyle: 'italic', marginTop: '15px' }}>
                        Số lượng tham gia mỗi phiên được giới hạn để bảo đảm chiều sâu trao đổi.
                    </p>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Upcoming Classes */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '700', fontSize: '20px', marginBottom: '20px' }}>Các chương trình sắp tới</h3>
                    
                    <div className="mb-4">
                        <p style={{ color: '#da151a', fontWeight: '600', marginBottom: '5px' }}>Lớp 17:</p>
                        <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '5px' }}>14/08/2026 - Hà Nội</h4>
                        <p style={{ color: '#555' }}>Mentor: Ông Nguyễn Mạnh Hùng, Nguyên Bộ trưởng Bộ Khoa học và Công nghệ</p>
                    </div>

                    <div className="mb-4">
                        <p style={{ color: '#da151a', fontWeight: '600', marginBottom: '5px' }}>Lớp 18:</p>
                        <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '5px' }}>15/08/2026 - TP Hồ Chí Minh</h4>
                        <p style={{ color: '#555' }}>Mentor: Ông Võ Quang Huệ, Chủ tịch Foundry AI Việt Nam, Nguyên Phó tổng Giám đốc Tập đoàn VinGroup</p>
                    </div>

                    <div className="mb-4">
                        <p style={{ color: '#da151a', fontWeight: '600', marginBottom: '5px' }}>Lớp 19:</p>
                        <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '5px' }}>21/08/2026 - Hà Nội</h4>
                        <p style={{ color: '#555' }}>Mentor: Ông Nguyễn Mạnh Hùng, Nguyên Bộ trưởng Bộ Khoa học và Công nghệ</p>
                    </div>

                    <div className="mb-4">
                        <p style={{ color: '#da151a', fontWeight: '600', marginBottom: '5px' }}>Lớp 20:</p>
                        <h4 style={{ fontWeight: '700', fontSize: '16px', marginBottom: '5px' }}>28/08/2026 - Hà Nội</h4>
                        <p style={{ color: '#555' }}>Mentor: Ông Nguyễn Mạnh Hùng, Nguyên Bộ trưởng Bộ Khoa học và Công nghệ</p>
                    </div>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 2 */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>KHI DOANH NGHIỆP ĐỨNG TRƯỚC NHỮNG QUYẾT ĐỊNH KHÓ</h3>
                    <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Mở rộng hay tập trung?</p>
                    <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px' }}>Tăng trưởng hay tái cấu trúc?</p>
                    <p style={{ fontSize: '16px', color: '#333', marginBottom: '20px' }}>Tiếp tục cách làm hiện tại hay thay đổi mô hình vận hành?</p>
                    
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '15px' }}>
                        Trong quá trình điều hành, CEO thường phải đưa ra những quyết định có ảnh hưởng lớn nhưng lại thiếu một không gian đủ tin cậy để:
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#333', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                        <li>Nhìn lại vấn đề từ nhiều góc độ</li>
                        <li>Trao đổi thẳng thắn với người có kinh nghiệm thực chiến</li>
                        <li>Soi chiếu quyết định của mình với kinh nghiệm của các CEO khác</li>
                        <li>Nhận diện điểm nghẽn trước khi vấn đề trở thành khủng hoảng</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#da151a', fontWeight: '600' }}>CEO Mentoring được xây dựng để tạo ra không gian đối thoại đó.</p>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 3 */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>CEO MENTORING LÀ GÌ?</h3>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '15px' }}>
                        CEO Mentoring là chuỗi chương trình phi lợi nhuận do <strong>Viện Lãnh đạo, Quản trị và Quản lý Việt Nam</strong> tổ chức, thuộc hệ chương trình của Vietnam CEO Forum.
                    </p>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '15px' }}>
                        Đây không phải một lớp học truyền thống.
                    </p>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                        Tại mỗi phiên, CEO tham dự mang theo chính những bài toán doanh nghiệp đang gặp phải để cùng:
                    </p>
                    
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Phân tích trực tiếp cùng Mentor</strong>
                        <p style={{ color: '#555', marginTop: '5px' }}>Nhìn rõ bản chất vấn đề thay vì chỉ xử lý những biểu hiện bên ngoài.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Soi chiếu từ kinh nghiệm thực tế</strong>
                        <p style={{ color: '#555', marginTop: '5px' }}>Tham khảo cách những nhà lãnh đạo giàu kinh nghiệm đã từng đối diện và xử lý các tình huống tương tự.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Trao đổi đa chiều giữa các CEO</strong>
                        <p style={{ color: '#555', marginTop: '5px' }}>Mỗi người tham dự không chỉ lắng nghe mà còn đóng góp góc nhìn từ chính trải nghiệm điều hành của mình.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Xác định hướng hành động</strong>
                        <p style={{ color: '#555', marginTop: '5px' }}>Chuyển những trao đổi trong phiên thành cách tiếp cận phù hợp với bối cảnh riêng của từng doanh nghiệp.</p>
                    </div>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 4 */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>GIÁ TRỊ CEO CÓ THỂ NHẬN ĐƯỢC</h3>
                    
                    <div className="mb-4">
                        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#002b5e', marginBottom: '10px' }}>01. Nhìn rõ hơn bài toán của doanh nghiệp</h4>
                        <p style={{ color: '#333', marginBottom: '5px' }}>Nhiều vấn đề trong doanh nghiệp không nằm ở nơi chúng biểu hiện.</p>
                        <p style={{ color: '#333', marginBottom: '5px' }}>Một vấn đề về doanh thu có thể bắt nguồn từ tổ chức.</p>
                        <p style={{ color: '#333', marginBottom: '5px' }}>Một vấn đề về nhân sự có thể bắt nguồn từ cách trao quyền.</p>
                        <p style={{ color: '#333', marginBottom: '10px' }}>Một vấn đề về vận hành có thể bắt nguồn từ quyết định chiến lược.</p>
                        <p style={{ color: '#555', fontStyle: 'italic' }}>Phiên mentoring giúp CEO lùi lại một bước để nhìn toàn cảnh trước khi lựa chọn giải pháp.</p>
                    </div>

                    <div className="mb-4">
                        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#002b5e', marginBottom: '10px' }}>02. Tiếp cận kinh nghiệm điều hành thực chiến</h4>
                        <p style={{ color: '#333' }}>Mentor không chỉ chia sẻ kiến thức, mà cùng người tham dự phân tích những tình huống đã và đang diễn ra trong doanh nghiệp.</p>
                    </div>

                    <div className="mb-4">
                        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#002b5e', marginBottom: '10px' }}>03. Mở rộng góc nhìn trước các quyết định quan trọng</h4>
                        <p style={{ color: '#333' }}>CEO có cơ hội đối chiếu tư duy của mình với Mentor và những người đang trực tiếp điều hành doanh nghiệp khác.</p>
                    </div>

                    <div className="mb-4">
                        <h4 style={{ fontSize: '18px', fontWeight: '700', color: '#002b5e', marginBottom: '10px' }}>04. Kết nối với cộng đồng CEO đồng cấp</h4>
                        <p style={{ color: '#333' }}>CEO Mentoring hướng tới xây dựng một mạng lưới CEO tin cậy, có thể học hỏi, chia sẻ kinh nghiệm và cùng phát triển trong dài hạn. Đây cũng là một trong những định hướng cốt lõi của Vietnam CEO Forum.</p>
                    </div>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 5 */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>CÁC CHỦ ĐỀ CEO MENTORING</h3>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '15px' }}>
                        Mỗi phiên tập trung vào một nhóm bài toán cụ thể trong quá trình lãnh đạo và điều hành doanh nghiệp, chẳng hạn:
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#333', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                        <li>Chiến lược tăng trưởng và lựa chọn hướng đi</li>
                        <li>Lãnh đạo trong giai đoạn biến động</li>
                        <li>Xây dựng đội ngũ và năng lực quản lý kế cận</li>
                        <li>Trao quyền và hệ thống ra quyết định</li>
                        <li>Tái cấu trúc tổ chức và vận hành</li>
                        <li>Truyền thông và xây dựng niềm tin</li>
                        <li>Phát triển hệ sinh thái kinh doanh</li>
                        <li>Đổi mới mô hình kinh doanh</li>
                        <li>Quản trị tăng trưởng bền vững</li>
                        <li>Những điểm nghẽn thực tế do CEO tham dự đề xuất</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#555', fontStyle: 'italic' }}>Chủ đề và Mentor sẽ thay đổi theo từng phiên.</p>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 6 */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>VÌ SAO MỖI PHIÊN GIỚI HẠN SỐ LƯỢNG?</h3>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '10px' }}>
                        CEO Mentoring không được thiết kế như một hội thảo đông người.
                    </p>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '20px' }}>
                        Để mỗi CEO có đủ thời gian trình bày vấn đề, trao đổi cùng Mentor và tham gia đối thoại, số lượng người tham dự được giới hạn theo từng phiên.
                    </p>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '10px' }}>
                        Việc giới hạn số lượng giúp:
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#333', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                        <li>Cuộc trao đổi đi vào chiều sâu</li>
                        <li>Mentor có thể phản hồi trực tiếp</li>
                        <li>Người tham dự có không gian chia sẻ vấn đề thật</li>
                        <li>Nội dung bám sát nhu cầu của nhóm CEO trong phiên</li>
                        <li>Tạo môi trường trao đổi tập trung và tin cậy</li>
                    </ul>
                    <p style={{ fontSize: '15px', color: '#666', fontStyle: 'italic', backgroundColor: '#f9f9f9', padding: '15px', borderLeft: '4px solid #da151a' }}>
                        Theo thông tin chương trình, các CEO đăng ký sẽ được khảo sát về tình hình doanh nghiệp, vấn đề đang gặp phải và nhu cầu trao đổi trước khi BTC sắp xếp nhóm phù hợp.
                    </p>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 7 */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>QUY TRÌNH THAM GIA</h3>
                    
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Bước 1 — Đăng ký</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>CEO cung cấp thông tin cơ bản và nhu cầu tham gia chương trình.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Bước 2 — Khảo sát thông tin</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>BTC tìm hiểu về doanh nghiệp, vai trò của người đăng ký và bài toán mong muốn trao đổi.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Bước 3 — Lựa chọn phiên phù hợp</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>BTC đối chiếu nhu cầu của CEO với chủ đề, Mentor và thành phần của từng phiên.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Bước 4 — Xác nhận tham dự</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Các CEO phù hợp sẽ được BTC chủ động liên hệ qua điện thoại hoặc email.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Bước 5 — Tham gia phiên Mentoring</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>CEO trực tiếp trao đổi vấn đề cùng Mentor và các thành viên trong nhóm.</p>
                    </div>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 8 */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>CEO MENTORING PHÙ HỢP VỚI AI?</h3>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '15px' }}>
                        Chương trình phù hợp với:
                    </p>
                    <ul style={{ paddingLeft: '20px', color: '#333', fontSize: '16px', lineHeight: '1.8' }}>
                        <li>Chủ tịch doanh nghiệp</li>
                        <li>CEO và Tổng Giám đốc</li>
                        <li>Founder, Co-founder</li>
                        <li>Chủ doanh nghiệp</li>
                        <li>Lãnh đạo cấp cao trực tiếp tham gia điều hành</li>
                        <li>Người đang đứng trước một quyết định chiến lược hoặc bài toán quản trị cụ thể</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#da151a', fontStyle: 'italic', marginTop: '15px', fontWeight: '600' }}>
                        CEO Mentoring đặc biệt phù hợp với những người sẵn sàng chia sẻ vấn đề thật, lắng nghe góc nhìn khác biệt và chuyển trao đổi thành hành động trong doanh nghiệp.
                    </p>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 9: KHÔNG PHẢI LÀ */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>CEO MENTORING KHÔNG PHẢI LÀ</h3>
                    
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Không phải một buổi diễn thuyết một chiều</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Người tham dự được khuyến khích đặt câu hỏi và trực tiếp tham gia đối thoại.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Không phải hoạt động networking đại trà</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Việc kết nối diễn ra trên nền tảng của những vấn đề và trải nghiệm quản trị thực tế.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Không phải nơi cung cấp một đáp án chung cho mọi doanh nghiệp</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Mỗi doanh nghiệp có bối cảnh khác nhau. Chương trình giúp CEO mở rộng góc nhìn và tìm hướng phù hợp, thay vì áp đặt một công thức duy nhất.</p>
                    </div>
                    <div className="mb-3">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Không phải chương trình thương mại ngắn hạn</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>CEO Mentoring nằm trong định hướng dài hạn của Vietnam CEO Forum nhằm kết nối cộng đồng CEO, truyền lại tri thức lãnh đạo giữa các thế hệ và phát triển hệ tri thức quản trị mang bản sắc Việt Nam.</p>
                    </div>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 10: MỘT PHIÊN BẮT ĐẦU TỪ... */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>MỘT PHIÊN MENTORING CÓ THỂ BẮT ĐẦU TỪ MỘT CÂU HỎI</h3>
                    <ul style={{ paddingLeft: '20px', color: '#333', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px' }}>
                        <li>Doanh nghiệp nên tiếp tục tăng trưởng hay cần tái cấu trúc trước?</li>
                        <li>Vì sao đã có quy trình nhưng mọi quyết định vẫn phải chờ CEO?</li>
                        <li>Làm thế nào để trao quyền mà không mất kiểm soát?</li>
                        <li>Khi nào nên giữ vững giá trị cốt lõi và khi nào cần thay đổi?</li>
                        <li>Điểm nghẽn thực sự đang nằm ở con người, hệ thống hay chiến lược?</li>
                        <li>Làm thế nào để doanh nghiệp vận hành được khi người sáng lập lùi lại?</li>
                    </ul>
                    <p style={{ fontSize: '16px', color: '#333', fontStyle: 'italic', marginBottom: '5px' }}>
                        Anh/chị không cần đến chương trình với một bài trình bày hoàn chỉnh.
                    </p>
                    <p style={{ fontSize: '16px', color: '#da151a', fontWeight: '700' }}>
                        Chỉ cần bắt đầu từ một vấn đề thật mà doanh nghiệp đang cần tháo gỡ.
                    </p>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 11: FAQ */}
                <div className="mb-5">
                    <h3 style={{ color: '#002b5e', fontWeight: '800', fontSize: '22px', marginBottom: '20px', textTransform: 'uppercase' }}>CÂU HỎI THƯỜNG GẶP</h3>
                    
                    <div className="mb-4">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>CEO Mentoring do đơn vị nào tổ chức?</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Chương trình do Viện Lãnh đạo, Quản trị và Quản lý Việt Nam tổ chức, thuộc hệ chương trình của Vietnam CEO Forum.</p>
                    </div>
                    <div className="mb-4">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Chương trình có thu phí không?</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Nguồn thông tin hiện tại xác định CEO Mentoring là chương trình phi lợi nhuận. Mức phí hoặc chính sách cụ thể của từng phiên cần được BTC công bố trong thông tin phiên tương ứng.</p>
                    </div>
                    <div className="mb-4">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Đăng ký có chắc chắn được tham gia không?</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}><span style={{ color: '#da151a', fontWeight: '700' }}>Không.</span> Sau khi đăng ký, BTC sẽ khảo sát thông tin và lựa chọn nhóm CEO phù hợp với chủ đề và cấu trúc của từng phiên.</p>
                    </div>
                    <div className="mb-4">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>Vì sao số lượng người tham dự bị giới hạn?</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Để bảo đảm mỗi người có cơ hội trao đổi trực tiếp, giúp cuộc thảo luận đi sâu vào bài toán thực tế thay vì trở thành một buổi chia sẻ đại trà.</p>
                    </div>
                    <div className="mb-4">
                        <strong style={{ fontSize: '16px', color: '#002b5e' }}>CEO Mentoring được tổ chức bao lâu một lần?</strong>
                        <p style={{ color: '#333', marginTop: '5px' }}>Thông tin giới thiệu hiện tại cho biết chương trình được tổ chức thường xuyên với nhiều chủ đề và Mentor khác nhau. Lịch cụ thể được công bố theo từng phiên.</p>
                    </div>
                </div>

                <hr style={{ borderColor: '#ddd', marginBottom: '40px' }} />

                {/* Section 12: CTA */}
                <div className="text-center mt-5 mb-5 p-5" style={{ backgroundColor: '#fdf3f3', borderRadius: '10px' }}>
                    <h3 style={{ color: '#da151a', fontWeight: '800', fontSize: '24px', marginBottom: '15px' }}>Một góc nhìn đúng có thể thay đổi cách CEO nhìn toàn bộ bài toán</h3>
                    <p style={{ fontSize: '16px', color: '#333', lineHeight: '1.6', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
                        CEO Mentoring tạo ra không gian để những người đang trực tiếp điều hành doanh nghiệp cùng đối thoại, soi chiếu kinh nghiệm và tìm ra hướng đi phù hợp hơn cho những quyết định quan trọng.
                    </p>
                    <Link href="/dang-ky" className="btn btn-theme effect btn-md" style={{ backgroundColor: '#da151a', color: '#fff', padding: '15px 40px', fontWeight: 'bold', textTransform: 'uppercase', borderRadius: '5px', fontSize: '18px', display: 'inline-block' }}>
                        ĐĂNG KÝ CEO MENTORING
                    </Link>
                    
                    <div className="mt-4" style={{ textAlign: 'center' }}>
                        <p style={{ fontSize: '16px', color: '#333', marginBottom: '10px', fontWeight: '600' }}>Hoặc liên hệ BTC để được hỗ trợ:</p>
                        <p style={{ margin: '0 0 5px 0' }}><strong>Email:</strong> contact@vietceo.vn</p>
                        <p style={{ margin: '0 0 5px 0' }}><strong>Hotline:</strong> 0877 459 777</p>
                        <p style={{ margin: '0' }}><strong>Fanpage:</strong> Vietnam CEO Forum</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CeoMentoringDetails;
