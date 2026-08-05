"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { knowledgeData } from './knowledgeData';

const KnowledgeDetails = ({ id }) => {
    const [article, setArticle] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);

    useEffect(() => {
        // Find current article
        const currentId = parseInt(id);
        const currentArticle = knowledgeData.find(item => item.id === currentId) || knowledgeData[0];
        setArticle(currentArticle);

        // Get related articles (exclude current, take next 5)
        const related = knowledgeData.filter(item => item.id !== currentId).slice(0, 5);
        setRelatedArticles(related);
    }, [id]);

    if (!article) return null;

    // Hardcode full content for demonstration if id is 1 as requested,
    // otherwise use generic text.
    const isFirstArticle = article.id === 1;

    return (
        <div className="container">
            <style dangerouslySetInnerHTML={{
                __html: `
                .article-main-title {
                    color: #da151a;
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 15px;
                    line-height: 1.3;
                }
                .article-meta {
                    color: #555;
                    font-size: 14px;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .article-meta i {
                    color: #da151a;
                    margin-right: 5px;
                }
                .article-content {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #333;
                }
                .article-content p {
                    margin-bottom: 20px;
                }
                .article-content strong {
                    font-weight: 700;
                }
                .sidebar-title {
                    color: #da151a;
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 25px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #f0f0f0;
                }
                .related-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    transition: transform 0.2s;
                }
                .related-item:hover {
                    transform: translateX(5px);
                }
                .related-thumb {
                    flex-shrink: 0;
                    width: 120px;
                    height: 80px;
                    position: relative;
                    border-radius: 4px;
                    overflow: hidden;
                    margin-right: 15px;
                }
                .related-info {
                    flex-grow: 1;
                }
                .related-title {
                    font-weight: 700;
                    font-size: 15px;
                    color: #333;
                    line-height: 1.4;
                    margin-bottom: 5px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-decoration: none;
                }
                .related-title:hover {
                    color: #da151a;
                }
                .related-date {
                    color: #888;
                    font-size: 12px;
                }
            `}} />

            <div className="row">
                {/* Main Content */}
                <div className="col-lg-8 pe-lg-5 mb-5 mb-lg-0">
                    <h1 className="article-main-title">{article.title}</h1>
                    
                    <div className="article-meta">
                        <span><i className="fas fa-tags"></i> {article.tags}</span>
                        <span><i className="far fa-calendar-alt"></i> {article.time}</span>
                    </div>

                    <div className="mb-4" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '4px' }}>
                        <Image 
                            src={article.image} 
                            alt={article.title} 
                            fill 
                            style={{ objectFit: 'cover' }} 
                        />
                    </div>

                    <div className="article-content">
                        {article.id === 1 ? (
                            <>
                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>
                                    Nếu thực thi chiến lược không hiệu quả thì lỗi ở chiến lược hay lỗi ở thực thi?
                                </p>
                                <p>
                                    Trước đây hay cho rằng, chiến lược thất bại là do thực thi. Nay, để chiến lược được thực thi hiệu quả thì đầu tiên chiến lược phải đúng: đúng về xác định mục tiêu, về tạo nguồn lực cho thực thi, về cách thức thực thi, về cán bộ cho thực thi. Chiến lược phải chọn đúng trận đánh, có vũ khí đặc biệt, cách đánh độc đáo và có tướng giỏi. Nếu thực thi không hiệu quả thì đầu tiên phải xem lại chiến lược. Thí dụ, chiến lược đặt ra mục tiêu bẩy trái đất mà trong chiến lược lại không chỉ ra điểm tựa ở đâu thì thực thi sẽ không thể hiệu quả.
                                </p>
                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>
                                    Chiến lược và thực thi có phải 2 việc, 2 người không?
                                </p>
                                <p>
                                    Trước đây, chiến lược và thực thi là 2 việc khác nhau, là 2 giai đoạn tách biệt. Nay, chiến lược là thực thi và thực thi là chiến lược. Chiến lược hình thành trong thực thi, và thực thi liên tục điều chỉnh chiến lược. Chiến lược và thực thi là 1. Chiến lược và thực thi là 1 vòng lặp liên tục. Người xây dựng chiến lược phải là người chịu trách nhiệm thực thi.
                                </p>
                                <p>
                                    Vậy vai trò của HĐQT và CEO trong xây dựng và thực thi chiến lược thế nào? Mô hình trước đây: HĐQT làm chiến lược, CEO thực thi. Nay, HĐQT giữ phương hướng, CEO sở hữu chiến lược và kết quả. HĐQT là người đặt câu hỏi chiến lược và quyết định các lựa chọn chiến lược. CEO là người biến các lựa chọn đó thành chiến lược sống và kết quả thực tế. HĐQT quyết định: đi ngành nào, đầu tư bao nhiêu, chấp nhận rủi ro đến đâu. CEO quyết định: cạnh tranh bằng cách nào, tổ chức ra sao, dùng người nào, xác định các thứ tự ưu tiên và điều chỉnh.
                                </p>
                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>
                                    Thực thi hiệu quả có phải là điều hành hàng ngày không?
                                </p>
                                <p>
                                    Trước đây, thường chú trọng vào việc điều hành hàng ngày của CEO. Nay, CEO phải tập trung xác định đúng việc, đúng người, đúng tổ chức, đúng nhịp, đúng kết quả. Thực thi chiến lược của CEO không phải là làm nhiều việc hơn, mà là làm ít việc hơn, làm đúng vài việc quan trọng, bởi đúng người, với đúng nhịp điều hành, cho đến khi tạo ra kết quả. Cụ thể như sau:
                                </p>
                                <ul>
                                    <li className="mb-2"><strong>Về đúng việc:</strong> Biến chiến lược thành 3-5 ưu tiên cụ thể, mọi nguồn lực, ngân sách và lãnh đạo đều tập trung vào những ưu tiên đó.</li>
                                    <li className="mb-2"><strong>Về đúng người:</strong> Chiến lược phải có người sở hữu, có chủ, ở tất cả các cấp. Tức là có người lo nghĩ ngày đêm về chiến lược, chính sự lo nghĩ ngày đêm này mà ra cách làm đột phá giúp chiến lược thành công. CEO phải là người dẫn dắt trực tiếp. Thực thi chiến lược trước hết là vấn đề lãnh đạo, sau đó mới là vấn đề quản lý. Chiến lược phải có đội quản lý cấp trung cốt cán làm nòng cốt thực thi. Thiếu cái này là thiếu xương sống của tổ chức để thực thi chiến lược hiệu quả.</li>
                                    <li className="mb-2"><strong>Về đúng tổ chức:</strong> Đồng bộ toàn bộ tổ chức theo chiến lược. Các bộ phận phải đồng hướng, thực hiện điều chỉnh để toàn bộ Cty đồng hướng theo chiến lược. Đây là việc CEO phải làm.</li>
                                    <li className="mb-2"><strong>Về đúng nhịp:</strong> Thực thi theo chu kỳ ngắn, học nhanh, điều chỉnh nhanh. Làm -&gt; Đo -&gt; Học -&gt; Điều chỉnh -&gt; Làm tiếp. Người Việt Nam nếu thiếu nhịp điều hành tuần/tháng/quý thì rất khó hoàn thành các công việc dài hơi. Đây là sự khác biệt rất căn bản giữa phương Tây và phương Đông, quản lý phương tây ưu tiên nhiều hơn đến hệ thống, mà ít nói đến nhịp điều hành.</li>
                                    <li className="mb-2"><strong>Về đúng KPI kết quả:</strong> Xác định đúng các kết quả cần đạt được (các outcome, chứ không phải output), và dùng KPI để đo các kết quả đó.</li>
                                </ul>
                            </>
                        ) : article.id === 2 ? (
                            <>
                                <p>
                                    Đối với người lãnh đạo thì thay đổi tư duy trước rồi mới đến đổi cơ chế. Nhưng với tổ chức thì phải làm ngược lại: đổi cơ chế trước để buộc mọi người hành động theo cách mới, từ đó đến hành vi được lặp lại, sau đó hành vi lặp lại trở thành thói quen, thói quen hình thành nên văn hoá, và khi sống và làm việc trong văn hoá mới đủ lâu mới làm thay đổi tư duy, niềm tin của con người và tổ chức. Nhiều tổ chức thất bại trong thay đổi vì nghĩ rằng tổ chức vận hành giống như người lãnh đạo. CEO thay đổi tư duy trước, rồi thiết kế lại hệ thống của doanh nghiệp theo tư duy mới. Chính hệ thống mới này khi được vận hành triệt để sẽ thay đổi tổ chức. Nhiều tổ chức quá chú trọng vào thay đổi tư duy mà không thiết kế lại hệ thống nên thất bại. Nếu muốn thay đổi tư duy trước thì chỉ nên tới cấp quản lý N-1. 
                                </p>
                                <p>
                                    Muốn thay đổi tư duy, văn hoá, hành vi của tổ chức thì không thể chỉ truyền thông hay đào tạo, mà chủ yếu là thông qua hành động: Thay đổi cách lãnh đạo, thay đổi cơ chế, thay đổi hành vi lặp lại. Thay đổi tư duy, văn hoá là những việc rất lớn, có thể nói là lớn nhất của một tổ chức, nhưng nó lại được quyết định bởi những việc nhỏ nhất trong tổ chức. Đây là nhận thức rất quan trọng.
                                </p>
                                
                                <p style={{ fontWeight: 600 }}>5 bước thực hiện:</p>
                                
                                <p className="mb-2"><strong>1- Chọn một số ít hành vi cốt lõi để thay đổi,</strong> khoảng 3-5, làm tốt rồi mới mở rộng. Không nói chung chung, như đổi mới, như lấy khách hàng làm trung tâm, mà phải chuyển thành một số ít hành vi quan sát được, thí dụ:</p>
                                <ul>
                                    <li>Không giao việc nếu chưa nêu kết quả cần đạt được</li>
                                    <li>Có vấn đề thì phải kèm theo phương án, không chỉ nêu vấn đề</li>
                                    <li>Việc liên phòng ban thì vẫn phải có 1 người chịu trách nhiệm cuối cùng</li>
                                    <li>Họp phải kết thúc bằng 1 kết luận, có người làm, có thời hạn.</li>
                                </ul>

                                <p className="mb-2 mt-3"><strong>2- Lãnh đạo phải làm trước.</strong> Tổ chức châu Á không tin khẩu hiệu, mà nhìn vào hành vi của người đứng đầu. CEO nói giao quyền nhưng vẫn duyệt từng việc nhỏ thì văn hoá thật vẫn là xin-cho. CEO nói trọng kết quả nhưng vẫn hỏi bên dưới đã làm những gì thì tổ chức vẫn chạy theo đầu việc. Vì vậy, lãnh đạo phải thay đổi cách: giao việc, họp, ra quyết định, kiểm tra, khen thưởng, xử lý sai phạm.</p>

                                <p className="mb-2 mt-3"><strong>3- Đưa hành vi mới cấy vào cơ chế vận hành.</strong> Không thay cơ chế thì tư duy cũ sẽ quay lại. Văn hoá chỉ bền khi được cấy vào, đóng vào hệ thống, vào các quy định nội bộ của tổ chức. Ví dụ, muốn chuyển từ giao việc sang giao kết quả thì:</p>
                                <ul>
                                    <li>Mẫu giao việc phải có kết quả, có chỉ số, thời hạn.</li>
                                    <li>Báo cáo tuần phải báo cáo kết quả, không chỉ liệt kê hoạt động.</li>
                                    <li>KPI phải đo đầu ra.</li>
                                    <li>Họp rà soát phải hỏi chênh lệch giữa mục tiêu và kết quả.</li>
                                    <li>Thưởng phải gắn với kết quả.</li>
                                </ul>

                                <p className="mb-2 mt-3"><strong>4- Tạo nhịp lặp lại đủ lâu.</strong> Không nên phát động rầm rộ 1-2 tháng rồi bỏ. Thói quen của tổ chức được hình thành bằng sự lặp lại có lỷ luật. Phải có nhịp cố định:</p>
                                <ul>
                                    <li>Hàng tuần: rà soát các cam kết.</li>
                                    <li>Hàng tháng: xem hành vi nào đã thay đổi.</li>
                                    <li>Hàng quý: xử lý điểm nghẽn hệ thống.</li>
                                    <li>Công khai một số ví dụ làm tốt và chưa tốt</li>
                                </ul>

                                <p className="mb-3 mt-3"><strong>5- Thưởng đúng, xử lý đúng để củng cố hành vi, thay người khi cần.</strong> Tổ chức sẽ nhìn xem ai được thăng tiến, ai được thưởng và ai được bỏ qua. Nếu người đạt doanh số cao nhưng phá sự phối hợp vẫn được trọng dụng thì văn hoá &ldquo;kết quả bằng mọi giá&rdquo; sẽ được hình thành. Nếu người chịu trách nhiệm nhưng không bị xử lý thì thông điệp truyền đi là &ldquo;cứ làm đại đi không sao đâu&rdquo;.</p>

                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>Tóm lại, công thức là:</p>
                                <ul>
                                    <li>Tư duy mới được hình thành qua trải nghiệm mới.</li>
                                    <li>Văn hoá mới được hình thành qua hành vi lặp lại.</li>
                                    <li>Hành vi mới được duy trì nhờ cơ chế và lãnh đạo nhất quán.</li>
                                </ul>
                            </>
                        ) : article.id === 3 ? (
                            <>
                                <p style={{ fontWeight: 700, fontSize: '18px' }}>Thước đo của một tổ chức không nằm ở số lượng phòng ban, mà ở khả năng tự vận hành</p>
                                <p>Nhiều doanh nghiệp bước vào giai đoạn tăng trưởng với một cơ cấu tổ chức ngày càng hoàn chỉnh: thêm phòng ban, thêm quản lý, thêm quy trình và nhiều cuộc họp hơn.</p>
                                <p>Nhìn từ bên ngoài, tổ chức có vẻ đã được mở rộng tương xứng với quy mô.</p>
                                <p>Nhưng thực tế quản trị cho thấy, sự đầy đủ về mặt cơ cấu không đồng nghĩa với năng lực vận hành của hệ thống.</p>
                                <p>Không ít doanh nghiệp vẫn rơi vào tình trạng mọi quyết định quan trọng phải chờ CEO, các cuộc họp kéo dài nhưng không tạo ra quyết định, quản lý cấp trung có chức danh nhưng chưa đủ thẩm quyền, và khi người sáng lập vắng mặt, nhịp vận hành của doanh nghiệp lập tức chậm lại.</p>
                                <p>Điểm yếu không nằm ở từng cá nhân. Điểm yếu nằm ở thiết kế của hệ thống.</p>
                                <p>Đó cũng là lý do vì sao, khi đánh giá sức khỏe của doanh nghiệp, câu hỏi quan trọng không phải là &ldquo;Doanh nghiệp có bao nhiêu người?&rdquo;, mà là:</p>
                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>Nếu CEO không có mặt trong hai tuần, doanh nghiệp có tiếp tục vận hành hiệu quả hay không?</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Hiệu lực của cuộc họp phản ánh chất lượng của cơ chế ra quyết định</p>
                                <p>Một trong những biểu hiện rõ nhất của năng lực tổ chức là cách doanh nghiệp tổ chức các cuộc họp.</p>
                                <p>Ở nhiều doanh nghiệp, số lượng cuộc họp tăng lên cùng với quy mô. Tuy nhiên, nhiều cuộc họp chỉ dừng lại ở việc chia sẻ thông tin hoặc thảo luận vấn đề mà không tạo ra quyết định cụ thể.</p>
                                <p>Một cuộc họp hiệu quả cần trả lời được ba câu hỏi:</p>
                                <ul>
                                    <li>Quyết định cuối cùng là gì?</li>
                                    <li>Ai là người chịu trách nhiệm thực hiện?</li>
                                    <li>Khi nào kết quả cần được hoàn thành?</li>
                                </ul>
                                <p>Nếu ba câu hỏi này không có câu trả lời rõ ràng, cuộc họp rất dễ trở thành nơi chuyển tiếp công việc thay vì giải quyết công việc.</p>
                                <p>Trong nhiều trường hợp, việc một cuộc họp quan trọng bị hoãn nhiều lần không đơn thuần là vấn đề lịch làm việc. Đó có thể là tín hiệu cho thấy tổ chức đang thiếu cơ chế ra quyết định đủ hiệu quả, hoặc quyền hạn giữa các cấp quản lý chưa được xác lập rõ ràng.</p>
                                <p>Khi số lượng quyết định bị tồn đọng ngày càng nhiều, tốc độ phản ứng của doanh nghiệp trước thị trường cũng giảm theo.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Quản lý kế cận không phải để thay CEO, mà để doanh nghiệp không phụ thuộc vào CEO</p>
                                <p>Một tổ chức trưởng thành không thể vận hành dựa trên năng lực của một cá nhân, dù cá nhân đó là người sáng lập.</p>
                                <p>Khi doanh nghiệp tăng trưởng, CEO cần chuyển dần vai trò từ người trực tiếp giải quyết vấn đề sang người thiết kế hệ thống có khả năng tự giải quyết vấn đề.</p>
                                <p>Điều này chỉ có thể thực hiện nếu doanh nghiệp xây dựng được đội ngũ quản lý kế cận đủ năng lực.</p>
                                <p>Nguồn quản lý kế cận không đơn thuần là danh sách những người có thể thay thế vị trí lãnh đạo trong tương lai.</p>
                                <p>Quan trọng hơn, đó là đội ngũ có đủ năng lực chuyên môn, quyền hạn và sự tin cậy để đưa ra quyết định trong phạm vi được giao mà không cần chờ CEO phê duyệt cho mọi tình huống.</p>
                                <p>Nếu mỗi quyết định cuối cùng vẫn phải quay trở lại bàn làm việc của CEO, doanh nghiệp sẽ rất khó mở rộng quy mô.</p>
                                <p>Lúc này, giới hạn tăng trưởng không còn nằm ở thị trường hay sản phẩm, mà nằm ở sức chịu của chính người lãnh đạo.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Tổ chức bền vững được xây dựng trên năng lực phân tán trách nhiệm</p>
                                <p>Một trong những nghịch lý phổ biến của doanh nghiệp tăng trưởng là càng phát triển, CEO càng bận hơn.</p>
                                <p>Điều này thường được xem như dấu hiệu của sự thành công.</p>
                                <p>Thực tế, đó có thể là dấu hiệu cho thấy tổ chức chưa hoàn thành quá trình chuyển đổi từ mô hình phụ thuộc vào người sáng lập sang mô hình vận hành bằng hệ thống.</p>
                                <p>Một hệ thống bền vững không yêu cầu CEO phải có mặt trong mọi cuộc họp, phê duyệt mọi quyết định hay giải quyết mọi xung đột.</p>
                                <p>Ngược lại, hệ thống đó được thiết kế để quyền hạn được phân bổ rõ ràng, trách nhiệm được gắn với từng cấp quản lý và thông tin được lưu chuyển minh bạch. Khi đó, CEO có thể dành thời gian cho những quyết định mang tính chiến lược thay vì liên tục xử lý các vấn đề vận hành.</p>
                                <p>Đó không phải là giảm vai trò của CEO, mà là nâng vai trò của CEO lên đúng vị trí của người lãnh đạo hệ thống.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Từ góc nhìn quản trị đến đối thoại thực tiễn tại CEO Dialogue 01</p>
                                <p>Trong khuôn khổ CEO Dialogue 01, phiên &ldquo;Điểm gãy 1 – Con người &amp; Tổ chức&rdquo; sẽ đi sâu vào những câu hỏi mà hầu hết doanh nghiệp tăng trưởng đều phải đối mặt:</p>
                                <ul>
                                    <li>Điều gì khiến các cuộc họp ngày càng nhiều nhưng tốc độ ra quyết định lại chậm hơn?</li>
                                    <li>Vì sao nhiều doanh nghiệp có đủ quản lý nhưng CEO vẫn phải xử lý hầu hết các vấn đề quan trọng?</li>
                                    <li>Làm thế nào để xây dựng lớp quản lý kế cận đủ năng lực, giúp tổ chức vận hành ổn định khi quy mô tiếp tục mở rộng?</li>
                                </ul>
                                <p>Phiên đối thoại không chỉ chia sẻ những mô hình quản trị, mà còn phân tích các tình huống thực tế, những dấu hiệu cảnh báo sớm và kinh nghiệm xử lý của các CEO đã trải qua giai đoạn hệ thống chịu áp lực tăng trưởng.</p>
                                <p>Đối với nhiều doanh nghiệp, câu hỏi quan trọng nhất không phải là &ldquo;Làm thế nào để tăng trưởng nhanh hơn?&rdquo;</p>
                                <p>Mà là:</p>
                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>&ldquo;Làm thế nào để doanh nghiệp vẫn tiếp tục tăng trưởng ngay cả khi mọi quyết định không còn phải bắt đầu từ CEO?&rdquo;</p>

                                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '30px', borderLeft: '4px solid #da151a' }}>
                                    <h4 style={{ color: '#da151a', fontWeight: 700, marginBottom: '15px' }}>CEO Dialogue 01</h4>
                                    <p className="mb-2"><strong>Chủ đề:</strong> CEO và bài toán: Tăng trưởng nhanh mà không vỡ hệ thống của doanh nghiệp</p>
                                    <p className="mb-2"><strong>Thời gian:</strong> 14h00, ngày 08/08/2026</p>
                                    <p className="mb-2"><strong>Địa điểm:</strong> Hà Nội</p>
                                    <p className="mb-2"><strong>Đối tượng:</strong> CEO, Founder và Lãnh đạo doanh nghiệp</p>
                                    <p className="mb-0"><strong>Đăng ký tham gia:</strong> <a href="http://dialogue.vietceo.vn/" target="_blank" rel="noopener noreferrer" style={{ color: '#002b5e', fontWeight: 600 }}>http://dialogue.vietceo.vn/</a></p>
                                </div>
                            </>
                        ) : article.id === 4 ? (
                            <>
                                <p style={{ fontWeight: 700, fontSize: '18px' }}>Khi doanh nghiệp tăng trưởng, điểm gãy đầu tiên thường nằm ở quyền hạn và trách nhiệm</p>
                                <p>Ở giai đoạn khởi nghiệp, việc CEO trực tiếp tham gia vào hầu hết các quyết định là điều bình thường. Quy mô còn nhỏ, thông tin tập trung và tốc độ phản hồi phụ thuộc nhiều vào người sáng lập.</p>
                                <p>Tuy nhiên, khi doanh nghiệp bước vào giai đoạn tăng trưởng, cách điều hành này dần trở thành giới hạn của chính hệ thống.</p>
                                <p>Doanh thu có thể tăng, nhân sự có thể mở rộng, khách hàng có thể nhiều hơn. Nhưng nếu mọi quyết định quan trọng vẫn phải đi qua CEO, tốc độ phát triển của doanh nghiệp sẽ bị giới hạn bởi năng lực xử lý của một cá nhân.</p>
                                <p>Đây chính là một trong những điểm gãy đầu tiên mà nhiều doanh nghiệp gặp phải.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Ba câu hỏi giúp CEO nhận diện điểm gãy về Con người & Tổ chức</p>
                                <p>Trong bộ công cụ chẩn đoán của CEO Dialogue, trục Con người & Tổ chức bắt đầu từ một câu hỏi rất thực tế:</p>
                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>Ai được quyền quyết, ai chịu trách nhiệm và bộ máy còn theo kịp người sáng lập không?</p>
                                <p>Để trả lời câu hỏi này, CEO có thể tự đánh giá thông qua ba khía cạnh.</p>

                                <p className="mt-3 mb-2"><strong>1. Mức độ tập trung quyền quyết định</strong></p>
                                <p>Có bao nhiêu quyết định trong doanh nghiệp vẫn phải chờ CEO phê duyệt?</p>
                                <p>Nếu từ những vấn đề chiến lược đến các quyết định vận hành hằng ngày đều phải đi qua một người, doanh nghiệp sẽ dần hình thành &ldquo;nút thắt cổ chai&rdquo;. Khi khối lượng công việc tăng lên, tốc độ ra quyết định sẽ giảm, kéo theo tốc độ phản ứng với thị trường cũng chậm lại.</p>

                                <p className="mt-3 mb-2"><strong>2. Thẩm quyền thực sự của đội ngũ quản lý</strong></p>
                                <p>Quản lý cấp trung đang thực sự được trao quyền hay chỉ được giao trách nhiệm?</p>
                                <p>Nhiều doanh nghiệp yêu cầu cấp quản lý chịu trách nhiệm về kết quả nhưng lại không trao đủ quyền để họ đưa ra quyết định. Khi đó, mọi vấn đề cuối cùng vẫn quay về CEO, làm giảm tính chủ động của tổ chức và khiến bộ máy khó mở rộng.</p>
                                <p>Trao quyền không chỉ là phân công công việc mà còn là thiết kế rõ ràng phạm vi quyết định, trách nhiệm và cơ chế chịu trách nhiệm của từng vị trí.</p>

                                <p className="mt-3 mb-2"><strong>3. Mức độ phụ thuộc vào cá nhân</strong></p>
                                <p>Nếu một nhân sự chủ chốt vắng mặt trong một tuần, điều gì sẽ xảy ra?</p>
                                <ul>
                                    <li>Khách hàng có bị chậm phản hồi?</li>
                                    <li>Những quyết định quan trọng có bị đình lại?</li>
                                    <li>Kiến thức, dữ liệu hay mối quan hệ có đang tập trung vào một vài cá nhân?</li>
                                </ul>
                                <p>Đây là dấu hiệu cho thấy doanh nghiệp đang phụ thuộc vào con người nhiều hơn là dựa trên hệ thống. Khi quy mô tiếp tục tăng, rủi ro này sẽ ngày càng lớn.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Khi quy mô thay đổi, mô hình quản trị cũng phải thay đổi</p>
                                <p>Theo mô hình tăng trưởng của Larry Greiner, mỗi giai đoạn phát triển của doanh nghiệp đều đi kèm một cuộc khủng hoảng về quản trị.</p>
                                <p>Doanh nghiệp có thể lần lượt đối mặt với khủng hoảng lãnh đạo, khủng hoảng về quyền tự chủ hay khủng hoảng kiểm soát nếu mô hình tổ chức không được điều chỉnh phù hợp với quy mô mới.</p>
                                <p>Điều đó cho thấy, tăng trưởng không chỉ là bài toán tuyển thêm người.</p>
                                <p>Quan trọng hơn là thiết kế lại cấu trúc tổ chức, phân quyền, cơ chế phối hợp và hệ thống ra quyết định để bộ máy có thể vận hành hiệu quả mà không phụ thuộc vào người sáng lập.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Từ nhận diện điểm gãy đến xây dựng hệ thống bền vững</p>
                                <p>Một doanh nghiệp khỏe mạnh không phải là doanh nghiệp mà CEO xử lý được mọi việc.</p>
                                <p>Đó là doanh nghiệp có một hệ thống đủ năng lực để đưa ra những quyết định đúng, đúng người, đúng thời điểm và đúng thẩm quyền.</p>
                                <p>Khả năng phân quyền hiệu quả không làm giảm vai trò của CEO. Ngược lại, nó giúp CEO tập trung vào những quyết định mang tính chiến lược, thay vì liên tục giải quyết các vấn đề vận hành hằng ngày.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>CEO Dialogue 01: Cùng nhìn vào &ldquo;Điểm gãy 1 – Con người & Tổ chức&rdquo;</p>
                                <p>Tại CEO Dialogue 01 diễn ra vào ngày 08/08, phiên chuyên đề &ldquo;Điểm gãy 1 – Con người & Tổ chức&rdquo; sẽ tập trung phân tích những dấu hiệu cho thấy năng lực lãnh đạo và cấu trúc tổ chức không còn theo kịp tốc độ phát triển của doanh nghiệp.</p>
                                <p>Thông qua các phiên chia sẻ và đối thoại, CEO sẽ có cơ hội tiếp cận khung tư duy để đánh giá mức độ tập trung quyền lực, khả năng phân quyền và sức chịu của bộ máy trước áp lực tăng trưởng.</p>
                                <p>Đây không chỉ là câu chuyện về quản trị nhân sự, mà là nền tảng để xây dựng một hệ thống có thể tiếp tục tăng trưởng mà không bị giới hạn bởi chính người lãnh đạo.</p>
                                <p>Doanh nghiệp của bạn hiện đang gặp trở ngại ở đâu: quyền quyết định còn quá tập trung vào CEO, quản lý cấp trung chưa được trao đủ quyền hay bộ máy vẫn đang phụ thuộc vào một vài cá nhân chủ chốt?</p>

                                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '30px', borderLeft: '4px solid #da151a' }}>
                                    <h4 style={{ color: '#da151a', fontWeight: 700, marginBottom: '15px' }}>CEO Dialogue 01</h4>
                                    <p className="mb-2"><strong>Thời gian:</strong> 14h00 ngày 08/8/2026</p>
                                    <p className="mb-2"><strong>Địa điểm:</strong> Hà Nội</p>
                                    <p className="mb-2"><strong>Đối tượng:</strong> CEO/Founder/Lãnh đạo doanh nghiệp</p>
                                    <p className="mb-0"><strong>Đăng ký tham gia:</strong> <a href="http://dialogue.vietceo.vn/" target="_blank" rel="noopener noreferrer" style={{ color: '#002b5e', fontWeight: 600 }}>http://dialogue.vietceo.vn/</a></p>
                                </div>
                            </>
                        ) : article.id === 5 ? (
                            <>
                                <p style={{ fontStyle: 'italic', fontWeight: 600 }}>Chuyển đổi số không phải là chuyển đổi công nghệ. Chuyển đổi số là chuyển đổi cách doanh nghiệp tạo ra giá trị và vận hành doanh nghiệp bằng công nghệ số.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Chuyển đổi số doanh nghiệp: Thành công không nằm ở công nghệ, mà ở cách làm</p>
                                <p>Trong hơn mười năm qua, hàng nghìn doanh nghiệp đã đầu tư rất lớn cho chuyển đổi số. ERP được triển khai, CRM được mua, dữ liệu được số hóa, AI được thử nghiệm, hàng loạt phần mềm mới được đưa vào vận hành. Nhưng kết quả lại rất khác nhau.</p>
                                <p>Có doanh nghiệp đầu tư hàng chục tỷ đồng nhưng hiệu quả rất thấp. Hệ thống chạy được nhưng nhân viên vẫn làm Excel. Dữ liệu có rất nhiều nhưng lãnh đạo vẫn ra quyết định theo cảm tính. AI được triển khai nhưng ít ai dùng.</p>
                                <p>Ngược lại, có những doanh nghiệp đầu tư không lớn nhưng tăng trưởng rất nhanh nhờ chuyển đổi số.</p>
                                <p>Điều khác biệt nằm ở đâu? Không phải ở công nghệ. Mà ở cách tiếp cận.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Sai lầm lớn nhất: bắt đầu từ công nghệ</p>
                                <p>Rất nhiều doanh nghiệp bắt đầu bằng câu hỏi: &ldquo;Cần mua phần mềm gì?&rdquo;, &ldquo;Có nên dùng AI không?&rdquo;, &ldquo;ERP nào tốt nhất?&rdquo;.</p>
                                <p>Đó là câu hỏi sai.</p>
                                <p>Công nghệ chỉ là công cụ. Nếu chưa biết mình muốn thay đổi điều gì thì công nghệ chỉ làm cho những quy trình cũ chạy trên máy tính. Một quy trình kém hiệu quả khi được số hóa vẫn là một quy trình kém hiệu quả. Một tổ chức ra quyết định chậm thì sau khi có ERP vẫn ra quyết định chậm. Một doanh nghiệp không lấy khách hàng làm trung tâm thì dù có AI vẫn chưa chắc phục vụ khách hàng tốt hơn.</p>
                                <p>Bởi vậy, nguyên tắc đầu tiên của chuyển đổi số là: Đừng số hóa cái cũ. Hãy thiết kế lại cách doanh nghiệp tạo ra giá trị rồi mới số hóa.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Mục tiêu của chuyển đổi số không phải là số hóa</p>
                                <p>Doanh nghiệp không chuyển đổi số để có nhiều phần mềm hơn. Doanh nghiệp chuyển đổi số để tạo ra bốn kết quả.</p>
                                <ul>
                                    <li className="mb-2"><strong>Thứ nhất, tăng doanh thu.</strong> Thông qua việc hiểu khách hàng hơn, bán hàng nhanh hơn, mở thêm kênh bán hàng, tạo ra sản phẩm và dịch vụ mới.</li>
                                    <li className="mb-2"><strong>Thứ hai, giảm chi phí.</strong> Tự động hóa quy trình, giảm thao tác thủ công, giảm sai sót, giảm tồn kho, tối ưu nguồn lực.</li>
                                    <li className="mb-2"><strong>Thứ ba, ra quyết định nhanh hơn.</strong> Thông tin được cập nhật theo thời gian thực, dữ liệu minh bạch, lãnh đạo nhìn thấy vấn đề ngay lập tức.</li>
                                    <li className="mb-2"><strong>Thứ tư, đổi mới mô hình kinh doanh.</strong> Đây mới là giá trị lớn nhất. Uber không chỉ là một công ty taxi có ứng dụng. Airbnb không chỉ là một chuỗi khách sạn số. Amazon không chỉ là cửa hàng trực tuyến. Họ thay đổi hoàn toàn cách tạo ra giá trị.</li>
                                </ul>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Thành công bắt đầu từ chiến lược</p>
                                <p>Chuyển đổi số phải xuất phát từ chiến lược kinh doanh. CEO cần trả lời trước ba câu hỏi. Doanh nghiệp sẽ tạo ra giá trị gì trong 5 năm tới? Khách hàng sẽ thay đổi như thế nào? Công nghệ sẽ giúp tạo lợi thế cạnh tranh ở đâu? Nếu chưa trả lời được ba câu hỏi này thì chưa nên nói đến AI hay ERP.</p>
                                <p>Công nghệ phải phục vụ chiến lược. Không phải chiến lược chạy theo công nghệ.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Chuyển đổi số phải bắt đầu từ bài toán kinh doanh</p>
                                <p>Một sai lầm phổ biến là triển khai theo phòng ban. Phòng kế toán làm phần mềm kế toán. Kho làm phần mềm kho. Bán hàng làm CRM. Marketing làm CDP. Kết quả là mỗi nơi một hệ thống. Dữ liệu không kết nối. Không ai có bức tranh toàn diện.</p>
                                <p>Cách làm đúng là bắt đầu từ bài toán kinh doanh. Ví dụ: Làm thế nào giảm thời gian giao hàng từ ba ngày xuống một ngày? Làm thế nào tăng tỷ lệ khách hàng quay lại thêm 20%? Làm thế nào giảm tồn kho 30%? Làm thế nào tăng năng suất lao động gấp đôi?</p>
                                <p>Sau đó mới xác định công nghệ nào giúp giải quyết. Như vậy, công nghệ luôn đi sau mục tiêu kinh doanh.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Dữ liệu là nền tảng</p>
                                <p>AI ngày nay rất mạnh. Nhưng AI chỉ thông minh bằng dữ liệu mà doanh nghiệp có. Nếu dữ liệu rời rạc, sai lệch, không đầy đủ thì AI sẽ đưa ra kết quả sai. Bởi vậy, trước khi nói đến AI, doanh nghiệp phải xây dựng dữ liệu.</p>
                                <p>Một khách hàng chỉ nên có một hồ sơ. Một sản phẩm chỉ nên có một mã. Một nguồn dữ liệu phải có người chịu trách nhiệm. Dữ liệu phải được cập nhật liên tục.</p>
                                <p>Nói cách khác: Không có dữ liệu tốt thì không có AI tốt.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>AI không thay thế doanh nghiệp</p>
                                <p>AI đang trở thành động lực mới của chuyển đổi số. Nhưng nhiều doanh nghiệp kỳ vọng quá mức. AI không tự tạo ra lợi nhuận. AI chỉ làm tốt những quy trình đã được chuẩn hóa. Nếu quy trình hỗn loạn thì AI chỉ làm hỗn loạn nhanh hơn. AI làm cái tốt tốt hơn nhưng cũng làm cái xấu xấu hơn.</p>
                                <p>AI nên được triển khai theo ba cấp.</p>
                                <ul>
                                    <li className="mb-2"><strong>Cấp một là AI hỗ trợ công việc của nhân viên.</strong> Ví dụ viết email, tổng hợp báo cáo, phân tích tài liệu.</li>
                                    <li className="mb-2"><strong>Cấp hai là AI hỗ trợ ra quyết định.</strong> Dự báo nhu cầu, phân tích rủi ro, gợi ý phương án.</li>
                                    <li className="mb-2"><strong>Cấp ba là AI tham gia vận hành.</strong> Chatbot, tự động chăm sóc khách hàng, điều phối logistics, kiểm soát chất lượng.</li>
                                </ul>
                                <p>Đa số doanh nghiệp Việt Nam hiện nay nên làm tốt cấp một và cấp hai trước.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Con người quyết định thành công</p>
                                <p>Thống kê trên thế giới cho thấy phần lớn các dự án chuyển đổi số thất bại không phải vì công nghệ mà vì con người. Nhân viên không muốn thay đổi. Quản lý cấp trung sợ mất quyền lực. Lãnh đạo không kiên trì.</p>
                                <p>Bởi vậy, chuyển đổi số trước hết là chuyển đổi tư duy. Người lãnh đạo phải là người sử dụng hệ thống đầu tiên. Nếu CEO vẫn yêu cầu báo cáo giấy thì không ai tin vào chuyển đổi số. Nếu lãnh đạo vẫn quyết định theo cảm tính thì dữ liệu sẽ không bao giờ có giá trị.</p>
                                <p>Muốn thay đổi tổ chức, người lãnh đạo phải thay đổi trước.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Làm từng bước, nhưng làm đến cùng</p>
                                <p>Một sai lầm khác là muốn làm tất cả cùng lúc. ERP, CRM, MES, AI, IoT, Data Warehouse, Data Lake, Dashboard… Sau vài năm, doanh nghiệp có rất nhiều hệ thống nhưng rất ít kết quả.</p>
                                <p>Cách làm hiệu quả là chọn một vài bài toán quan trọng nhất. Làm thành công. Đo được kết quả. Sau đó nhân rộng.</p>
                                <p>Thành công nhỏ sẽ tạo niềm tin cho toàn tổ chức. Niềm tin sẽ tạo động lực cho các giai đoạn tiếp theo.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Đo bằng kết quả kinh doanh</p>
                                <p>Nhiều doanh nghiệp đánh giá chuyển đổi số bằng số lượng phần mềm. Điều đó không đúng. Thành công phải được đo bằng kết quả. Ví dụ:</p>
                                <ul>
                                    <li>Doanh thu tăng bao nhiêu.</li>
                                    <li>Chi phí giảm bao nhiêu.</li>
                                    <li>Thời gian xử lý đơn hàng giảm bao nhiêu.</li>
                                    <li>Năng suất lao động tăng bao nhiêu.</li>
                                    <li>Khách hàng hài lòng hơn bao nhiêu.</li>
                                    <li>Tỷ lệ quyết định dựa trên dữ liệu tăng bao nhiêu.</li>
                                </ul>
                                <p>Nếu các chỉ số kinh doanh không thay đổi thì dù hệ thống hiện đại đến đâu cũng chưa thể coi là chuyển đổi số thành công.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Đích đến cuối cùng là doanh nghiệp số</p>
                                <p>Nhiều người nghĩ chuyển đổi số kết thúc khi mọi quy trình được số hóa. Thực ra đó mới chỉ là giai đoạn đầu.</p>
                                <p>Đích đến cuối cùng là doanh nghiệp số (Digital Enterprise). Ở đó:</p>
                                <ul>
                                    <li>Mọi quyết định dựa trên dữ liệu.</li>
                                    <li>AI trở thành trợ lý của mọi nhân viên.</li>
                                    <li>Các hệ thống được kết nối thành một nền tảng thống nhất.</li>
                                    <li>Khách hàng được phục vụ theo thời gian thực.</li>
                                    <li>Sản phẩm và dịch vụ liên tục được cải tiến nhờ dữ liệu.</li>
                                    <li>Doanh nghiệp có thể mở rộng quy mô mà không cần tăng tương ứng số lượng nhân sự.</li>
                                </ul>
                                <p>Xa hơn nữa, nhiều doanh nghiệp sẽ phát triển từ một doanh nghiệp số thành doanh nghiệp nền tảng (Platform Company), nơi không chỉ bán sản phẩm mà còn kết nối khách hàng, đối tác và nhà cung cấp trên cùng một hệ sinh thái. Khi đó, dữ liệu, AI và nền tảng số trở thành lợi thế cạnh tranh bền vững.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Kết luận</p>
                                <p>Chuyển đổi số không phải là một dự án CNTT, cũng không phải là việc mua thêm phần mềm hay áp dụng AI.</p>
                                <p>Đó là quá trình chuyển đổi mô hình tạo giá trị, mô hình vận hành và mô hình quản trị của doanh nghiệp bằng công nghệ số.</p>
                                <p style={{ fontWeight: 600, fontStyle: 'italic', color: '#da151a' }}>Công nghệ là phương tiện. Dữ liệu là nền tảng. AI là động lực mới.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>CEO mới là người quyết định thành công</p>
                                <p>Một CEO thành công trong chuyển đổi số không phải là người hiểu nhiều nhất về công nghệ, mà là người biết đặt đúng bài toán kinh doanh, dẫn dắt sự thay đổi của con người và kiên trì biến công nghệ thành kết quả kinh doanh.</p>
                                <p>Trong thời đại AI, lợi thế cạnh tranh sẽ không còn thuộc về doanh nghiệp sở hữu nhiều công nghệ nhất, mà thuộc về doanh nghiệp biết chuyển công nghệ thành năng lực tạo ra giá trị nhanh hơn, tốt hơn và bền vững hơn đối thủ.</p>
                            </>
                        ) : article.id === 6 ? (
                            <>
                                <p>Có nhiều người cho rằng CEO là người có quyền lực cao nhất trong doanh nghiệp. Nhưng nếu chỉ nhìn CEO qua quyền lực thì mới thấy một nửa của nghề. Bản chất của CEO không phải là người có nhiều quyền nhất, mà là người chịu trách nhiệm cuối cùng về sự tồn tại và phát triển của doanh nghiệp.</p>
                                <p>Một nhân viên có thể chịu trách nhiệm cho một công việc. Một trưởng phòng chịu trách nhiệm cho một bộ phận. Một giám đốc chịu trách nhiệm cho một lĩnh vực. Nhưng CEO phải chịu trách nhiệm cho toàn bộ kết quả của tổ chức: doanh thu, lợi nhuận, dòng tiền, khách hàng, con người, văn hóa, đổi mới, rủi ro và tương lai của doanh nghiệp. Không có ai khác để đổ lỗi.</p>
                                <p>Đó là lý do nghề CEO là một trong những nghề khó nhất.</p>

                                <p className="mt-4"><strong style={{ fontSize: '18px' }}>Dẫn dắt chiến lược.</strong> Điều đầu tiên CEO phải làm không phải là điều hành công việc hằng ngày, mà là xác định doanh nghiệp sẽ đi đâu. Một tổ chức có thể làm việc rất chăm chỉ nhưng vẫn thất bại nếu đi sai hướng. Vì vậy, CEO trước hết là người lựa chọn chiến lược: chọn thị trường nào, chọn khách hàng nào, chọn sản phẩm nào, chọn điều gì sẽ không làm. Trong thời đại thay đổi nhanh, lựa chọn đúng quan trọng hơn làm nhiều.</p>
                                
                                <p className="mt-3"><strong style={{ fontSize: '18px' }}>Thực thi chiến lược.</strong> Tuy nhiên, chiến lược chỉ có ý nghĩa khi được thực thi. Nhiều doanh nghiệp không thất bại vì thiếu chiến lược mà vì chiến lược không đi được vào hành động. CEO giỏi không chỉ nói về tầm nhìn mà còn biến tầm nhìn thành mục tiêu, mục tiêu thành kế hoạch, kế hoạch thành kết quả. Họ luôn tự hỏi: &ldquo;Làm thế nào để chiến lược xuất hiện trong công việc của từng người vào sáng mai?&rdquo;</p>
                                
                                <p className="mt-3"><strong style={{ fontSize: '18px' }}>Phân bổ nguồn lực.</strong> CEO cũng là người phân bổ nguồn lực. Tiền luôn có giới hạn. Con người luôn có giới hạn. Thời gian càng có giới hạn hơn. Một quyết định đầu tư đúng có thể đưa doanh nghiệp lên một tầm cao mới; một quyết định sai có thể làm mất nhiều năm tích lũy. Vì vậy, CEO phải liên tục lựa chọn: đầu tư vào đâu, dừng việc gì, ưu tiên việc gì trước. Nói &ldquo;không&rdquo; với những cơ hội không phù hợp đôi khi còn quan trọng hơn nói &ldquo;có&rdquo; với những cơ hội hấp dẫn.</p>
                                
                                <p className="mt-3"><strong style={{ fontSize: '18px' }}>Đào tạo đội ngũ quản lý.</strong> Một nhiệm vụ khác của CEO là xây dựng đội ngũ lãnh đạo. Một doanh nghiệp không thể phát triển nhanh nếu mọi việc đều phải qua CEO. Khi tổ chức lớn lên, công việc quan trọng nhất không còn là tự mình giải quyết vấn đề, mà là xây dựng những người có thể giải quyết vấn đề tốt hơn mình ở từng lĩnh vực. CEO thành công không đo bằng số việc mình làm, mà bằng số người có thể làm được việc lớn mà không cần mình có mặt.</p>
                                <p>Điều này dẫn đến một nghịch lý thú vị: CEO càng giỏi thì tổ chức càng ít phụ thuộc vào CEO, nhất là những việc hàng ngày.</p>

                                <p className="mt-3"><strong style={{ fontSize: '18px' }}>Xây dựng văn hoá doanh nghiệp.</strong> Bên cạnh con người là văn hóa. Văn hóa không được tạo ra bởi những khẩu hiệu treo trên tường mà được hình thành từ những quyết định của người đứng đầu. CEO khen thưởng điều gì thì điều đó sẽ phát triển. CEO bỏ qua điều gì thì điều đó cũng sẽ lan rộng. Nếu CEO chỉ nói về khách hàng nhưng chỉ thưởng doanh số, tổ chức sẽ chạy theo doanh số. Nếu CEO nói về đổi mới nhưng trừng phạt mọi sai lầm, sẽ không ai dám sáng tạo. Văn hóa chính là hành vi của người lãnh đạo được lặp đi lặp lại theo thời gian.</p>
                                
                                <p className="mt-3"><strong style={{ fontSize: '18px' }}>Kiến tạo tương lai mới.</strong> Một CEO giỏi còn phải biết cân bằng giữa hiện tại và tương lai. Nếu chỉ tập trung vào lợi nhuận ngắn hạn, doanh nghiệp sẽ mất năng lực cạnh tranh dài hạn. Nếu chỉ đầu tư cho tương lai mà quên dòng tiền hôm nay, doanh nghiệp có thể không tồn tại để nhìn thấy tương lai đó. Vì vậy, CEO luôn phải giữ hai đường chân trời: bảo đảm doanh nghiệp khỏe mạnh hôm nay và chuẩn bị cho doanh nghiệp mạnh hơn trong nhiều năm tới.</p>
                                
                                <p className="mt-3"><strong style={{ fontSize: '18px' }}>Học nhanh, thích nghi nhanh.</strong> Trong bối cảnh AI, chuyển đổi số và cạnh tranh toàn cầu, nghề CEO đang thay đổi rất nhanh. Trước đây, CEO có thể thành công nhờ kinh nghiệm. Ngày nay, kinh nghiệm vẫn quan trọng nhưng không còn đủ. CEO phải học nhanh hơn, thay đổi nhanh hơn và ra quyết định nhanh hơn. Điều quan trọng không phải là biết tất cả câu trả lời, mà là biết đặt đúng câu hỏi và xây dựng một tổ chức có khả năng học hỏi liên tục.</p>
                                
                                <p className="mt-3"><strong style={{ fontSize: '18px' }}>Xây dựng hệ thống và trao quyền.</strong> CEO hiện đại cũng không còn là người kiểm soát mọi việc. Khi môi trường biến động từng ngày, mô hình &ldquo;chỉ huy – kiểm soát&rdquo; dần nhường chỗ cho mô hình &ldquo;trao quyền – chịu trách nhiệm&rdquo;. CEO phải xây dựng hệ thống, quy trình và đội ngũ để doanh nghiệp có thể vận hành hiệu quả ngay cả khi người đứng đầu không trực tiếp can thiệp vào từng quyết định.</p>
                                
                                <p className="mt-4">Nhưng có lẽ điều khó nhất của nghề CEO là sự cô đơn. Những quyết định lớn thường không có đáp án hoàn hảo. Có những lúc phải lựa chọn giữa những phương án đều không tốt. Có những quyết định đúng hôm nay nhưng chỉ nhiều năm sau mới được chứng minh. Có những áp lực không thể chia sẻ với tất cả mọi người. CEO phải đủ bản lĩnh để ra quyết định trong điều kiện thông tin chưa đầy đủ và đủ dũng cảm để chịu trách nhiệm về quyết định đó.</p>

                                <p>Cuối cùng, giá trị lớn nhất của một CEO không phải là xây dựng một doanh nghiệp lớn, mà là xây dựng một tổ chức có thể tiếp tục phát triển ngay cả khi mình không còn điều hành. Một CEO xuất sắc không chỉ tạo ra doanh thu và lợi nhuận; họ tạo ra đội ngũ lãnh đạo kế tiếp, tạo ra văn hóa mạnh, tạo ra hệ thống vận hành bền vững và tạo ra năng lực đổi mới liên tục.</p>

                                <p>Một doanh nghiệp thành công có thể là kết quả của một CEO giỏi. Nhưng một doanh nghiệp trường tồn chỉ xuất hiện khi CEO biết xây dựng một tổ chức mạnh hơn chính mình.</p>

                                <p style={{ fontStyle: 'italic', fontWeight: 600, color: '#da151a', marginTop: '20px' }}>Đó cũng là thước đo cao nhất của nghề CEO: không phải doanh nghiệp phụ thuộc vào CEO, mà là CEO làm cho doanh nghiệp không còn phụ thuộc vào một cá nhân nào nữa.</p>
                            </>
                        ) : article.id === 7 ? (
                            <>
                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '10px' }}>Vì sao nhiều bài toán quản trị không có đáp án là &ldquo;hoặc&rdquo;?</p>
                                <p>Trong quá trình điều hành doanh nghiệp, CEO thường xuyên phải đối mặt với những quyết định tưởng như buộc phải lựa chọn giữa hai phương án đối lập.</p>

                                <ul>
                                    <li className="mb-2">Nên xây dựng hệ thống hay trao quyền cho con người?</li>
                                    <li className="mb-2">Nên đề cao kỷ luật hay khuyến khích sáng tạo?</li>
                                    <li className="mb-2">Nên tập trung giải quyết hiện tại hay đầu tư cho tương lai?</li>
                                    <li className="mb-2">Nên ưu tiên tăng trưởng hay hướng đến phát triển bền vững?</li>
                                    <li className="mb-2">Nên học hỏi mô hình quản trị phương Tây hay phát triển dựa trên kinh nghiệm doanh nghiệp Việt Nam?</li>
                                </ul>

                                <p>Đây đều là những câu hỏi quen thuộc trong quản trị doanh nghiệp. Tuy nhiên, nếu nhìn sâu hơn vào thực tiễn vận hành của các tổ chức, có thể thấy phần lớn những bài toán này không tồn tại một đáp án tuyệt đối.</p>
                                <p>Vấn đề không nằm ở việc lựa chọn một phía, mà nằm ở khả năng kết hợp các yếu tố tưởng chừng đối lập để tạo ra một mô hình quản trị phù hợp.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Khi tư duy &ldquo;hoặc&rdquo; trở thành giới hạn của doanh nghiệp</p>
                                <p>Không ít doanh nghiệp gặp khó khăn trong quá trình phát triển vì lựa chọn cực đoan.</p>
                                <p>Một doanh nghiệp chỉ chú trọng xây dựng hệ thống mà thiếu sự linh hoạt sẽ dần trở nên cứng nhắc, chậm thích ứng với sự thay đổi của thị trường.</p>
                                <p>Ngược lại, nếu chỉ dựa vào sự linh hoạt của từng cá nhân mà không có hệ thống quản trị đủ rõ ràng, tổ chức sẽ vận hành theo cảm tính, thiếu tính nhất quán và khó mở rộng quy mô.</p>
                                <p>Tương tự, nếu chỉ theo đuổi tăng trưởng, doanh nghiệp có thể phải đánh đổi nguồn lực, chất lượng sản phẩm, văn hóa và sự bền vững trong dài hạn.</p>
                                <p>Nếu chỉ ưu tiên sự an toàn, doanh nghiệp lại dễ đánh mất những cơ hội quan trọng để bứt phá.</p>
                                <p>Trong học hỏi và phát triển, việc sao chép nguyên mẫu các mô hình quản trị phương Tây có thể tạo ra khoảng cách với bối cảnh văn hóa Việt Nam. Nhưng nếu chỉ dựa trên kinh nghiệm bản địa mà thiếu tư duy quản trị hiện đại, doanh nghiệp cũng khó nâng cao năng lực cạnh tranh trong môi trường toàn cầu.</p>
                                <p>Những giới hạn đó cho thấy, nhiều vấn đề trong quản trị không thể được giải quyết bằng tư duy lựa chọn một trong hai.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Nguyên lý chữ &ldquo;VÀ&rdquo; – Tư duy tích hợp trong quản trị</p>
                                <p>Đó là cách tiếp cận quản trị dựa trên tư duy tích hợp, thay vì tư duy loại trừ.</p>

                                <ul>
                                    <li className="mb-2">Không phải hệ thống <strong>hoặc</strong> linh hoạt, mà là hệ thống <strong>và</strong> linh hoạt.</li>
                                    <li className="mb-2">Không phải kỷ luật <strong>hoặc</strong> sáng tạo, mà là kỷ luật <strong>và</strong> sáng tạo.</li>
                                    <li className="mb-2">Không phải hiện tại <strong>hoặc</strong> tương lai, mà là hiện tại <strong>và</strong> tương lai.</li>
                                    <li className="mb-2">Không phải Tây <strong>hoặc</strong> Ta, mà là Tây <strong>và</strong> Ta.</li>
                                </ul>

                                <p>Tư duy này không phủ nhận sự khác biệt giữa các yếu tố, mà tìm cách dung hòa để mỗi yếu tố bổ trợ cho nhau, tạo nên một mô hình vận hành hiệu quả hơn.</p>
                                <p>Một hệ thống tốt cần đủ chặt chẽ để đảm bảo tính nhất quán, nhưng cũng đủ linh hoạt để thích ứng với thay đổi.</p>
                                <p>Một tổ chức muốn đổi mới cần khuyến khích sáng tạo, nhưng sáng tạo chỉ tạo ra giá trị khi được đặt trong khuôn khổ của kỷ luật và mục tiêu chung.</p>
                                <p>Một doanh nghiệp muốn phát triển bền vững phải giải quyết tốt bài toán của hiện tại, đồng thời chuẩn bị năng lực cho tương lai.</p>
                                <p>Và một mô hình quản trị phù hợp với doanh nghiệp Việt Nam không phải là sao chép hoàn toàn phương Tây hay chỉ dựa trên kinh nghiệm trong nước, mà là biết tiếp thu tinh hoa quản trị toàn cầu để vận dụng phù hợp với văn hóa, con người và bối cảnh Việt Nam.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Tư duy của nhà lãnh đạo không phải là lựa chọn, mà là tích hợp</p>
                                <p>Trong bối cảnh doanh nghiệp ngày càng đối mặt với nhiều biến động và thách thức, năng lực của một CEO không chỉ nằm ở khả năng đưa ra quyết định, mà còn ở khả năng dung hòa những yếu tố tưởng chừng đối lập.</p>
                                <p>Quản trị hiện đại không phải là nghệ thuật chọn một thái cực, mà là nghệ thuật kết nối các giá trị để tạo nên một hệ thống vận hành cân bằng và bền vững.</p>
                                <p>Đó cũng là tinh thần mà LGM Việt Nam theo đuổi trong các hoạt động đào tạo, nghiên cứu và phát triển đội ngũ lãnh đạo: xây dựng những CEO có tư duy tích hợp, biết kết hợp thay vì cực đoan, biết dung hòa thay vì loại trừ, để dẫn dắt doanh nghiệp phát triển bền vững trong một môi trường luôn thay đổi.</p>
                            </>
                        ) : article.id === 8 ? (
                            <>
                                <p>Tăng trưởng nhanh là mục tiêu của mọi doanh nghiệp. Nhưng nếu hệ thống quản trị không theo kịp tốc độ phát triển, chính tăng trưởng lại trở thành nguyên nhân khiến doanh nghiệp mất kiểm soát. Đây cũng là chủ đề được đưa ra đối thoại tại CEO Dialogue #01 thuộc Vietnam CEO Forum, nơi các CEO, Founder và nhà lãnh đạo cùng trao đổi về những thách thức quản trị khi doanh nghiệp bước vào giai đoạn tăng trưởng.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Khi tăng trưởng trở thành áp lực đối với hệ thống quản trị</p>
                                <p>Trong giai đoạn đầu, nhiều doanh nghiệp có thể phát triển rất nhanh nhờ sản phẩm phù hợp, sự nhạy bén của nhà sáng lập hoặc những cơ hội thuận lợi từ thị trường. Khi quy mô còn nhỏ, CEO có thể trực tiếp tham gia vào hầu hết các quyết định quan trọng, xử lý nhanh các vấn đề phát sinh và giữ được sự linh hoạt trong vận hành.</p>
                                <p>Tuy nhiên, khi doanh nghiệp bước sang một quy mô mới, những phương thức quản trị cũ bắt đầu bộc lộ giới hạn.</p>
                                <p>Không ít doanh nghiệp rơi vào tình trạng doanh thu tăng liên tục nhưng lợi nhuận không cải thiện tương xứng. CEO dành phần lớn thời gian để xử lý các công việc sự vụ thay vì tập trung vào chiến lược. Các phòng ban phối hợp thiếu hiệu quả, quy trình tồn tại nhưng không được thực thi thống nhất, còn đội ngũ quản lý cấp trung chưa đủ năng lực để làm chủ kết quả.</p>
                                <p>Đồng thời, tốc độ phục vụ khách hàng giảm khi quy mô mở rộng, nhân sự mới mất nhiều thời gian hòa nhập, nhân sự cũ quá tải và những người giỏi bắt đầu cân nhắc rời đi. Điều đáng chú ý là doanh nghiệp càng có nhiều người thì tốc độ ra quyết định và xử lý vấn đề lại càng chậm.</p>
                                <p>Đây không đơn thuần là vấn đề về nhân sự hay công nghệ. Đó là dấu hiệu cho thấy hệ thống quản trị chưa phát triển tương xứng với tốc độ tăng trưởng của doanh nghiệp.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Doanh nghiệp không thể lớn hơn năng lực của hệ thống</p>
                                <p>Trong quản trị, tăng trưởng không chỉ là mở rộng doanh số hay quy mô nhân sự. Tăng trưởng bền vững đòi hỏi toàn bộ hệ thống phải đủ năng lực để hấp thụ và vận hành hiệu quả sự phát triển đó.</p>
                                <p>Một doanh nghiệp có thể tăng trưởng nhờ một sản phẩm tốt hoặc một đội ngũ xuất sắc trong giai đoạn đầu. Nhưng khi số lượng khách hàng, nhân sự, dự án và quy trình tăng lên, doanh nghiệp không thể tiếp tục phụ thuộc vào năng lực của một vài cá nhân.</p>
                                <p>Lúc này, hệ thống quản trị trở thành yếu tố quyết định. Hệ thống không chỉ bao gồm quy trình hay phần mềm, mà còn là cách doanh nghiệp phân quyền, ra quyết định, phối hợp giữa các phòng ban, phát triển đội ngũ quản lý và duy trì văn hóa tổ chức khi quy mô ngày càng mở rộng.</p>
                                <p>Nếu hệ thống không đủ mạnh, tăng trưởng càng nhanh thì áp lực càng lớn. Mọi điểm yếu trong vận hành sẽ bị khuếch đại, kéo theo chi phí gia tăng, chất lượng suy giảm và tốc độ phản ứng với thị trường chậm lại.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Câu hỏi CEO cần đặt ra không phải là &ldquo;làm sao để tăng trưởng nhanh hơn?&rdquo;</p>
                                <p>Phần lớn doanh nghiệp đều đặt mục tiêu tăng trưởng. Tuy nhiên, một câu hỏi quan trọng hơn mà CEO cần tự trả lời là:</p>
                                <p style={{ fontStyle: 'italic', fontWeight: 600, color: '#da151a', textAlign: 'center', margin: '20px 0' }}>Doanh nghiệp đã có một hệ thống đủ vững để chịu được tốc độ tăng trưởng đó hay chưa?</p>
                                <p>Bởi nếu hệ thống chưa sẵn sàng, mỗi bước tăng trưởng sẽ đồng nghĩa với việc CEO phải xử lý nhiều việc hơn, tổ chức vận hành phức tạp hơn và rủi ro cũng lớn hơn.</p>
                                <p>Ngược lại, khi doanh nghiệp xây dựng được nền tảng quản trị phù hợp, tăng trưởng sẽ không còn phụ thuộc vào sự có mặt của CEO trong mọi quyết định. Đó là lúc tổ chức có thể mở rộng quy mô mà vẫn duy trì được chất lượng, hiệu quả vận hành và bản sắc văn hóa.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>CEO Dialogue #01: Đối thoại về bài toán tăng trưởng nhanh mà không vỡ hệ thống của doanh nghiệp</p>
                                <p>Với chủ đề &ldquo;CEO và bài toán tăng trưởng nhanh mà không vỡ hệ thống của doanh nghiệp&rdquo;, CEO Dialogue #01 thuộc Vietnam CEO Forum sẽ mang đến không gian trao đổi dành cho các CEO, Founder và lãnh đạo doanh nghiệp đang đứng trước những thách thức của giai đoạn tăng trưởng.</p>
                                <p>Chương trình tập trung vào những vấn đề mà nhiều doanh nghiệp đang gặp phải khi mở rộng quy mô: làm thế nào để tăng tốc nhưng không rối, mở rộng nhưng không gãy, phát triển nhanh nhưng vẫn giữ được chất lượng dịch vụ, văn hóa doanh nghiệp và năng lực vận hành.</p>
                                <p>Thông qua những góc nhìn thực tiễn từ các nhà lãnh đạo và chuyên gia, chương trình kỳ vọng giúp CEO nhận diện rõ hơn những &ldquo;điểm nghẽn&rdquo; trong hệ thống quản trị, từ đó có cách tiếp cận phù hợp để xây dựng một doanh nghiệp có khả năng tăng trưởng bền vững.</p>

                                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '30px', borderLeft: '4px solid #da151a' }}>
                                    <h4 style={{ color: '#da151a', fontWeight: 700, marginBottom: '15px' }}>Thông tin chương trình CEO Dialogue #01</h4>
                                    <p className="mb-2"><strong>Chủ đề:</strong> CEO và bài toán: Tăng trưởng nhanh mà không vỡ hệ thống của doanh nghiệp</p>
                                    <p className="mb-2"><strong>Thời gian:</strong> 14h00, ngày 08/08/2026</p>
                                    <p className="mb-2"><strong>Địa điểm:</strong> Hà Nội</p>
                                    <p className="mb-2"><strong>Đối tượng:</strong> CEO, Founder và lãnh đạo doanh nghiệp</p>
                                    <p className="mb-0"><strong>Đăng ký tham gia:</strong> <a href="http://dialogue.vietceo.vn/" target="_blank" rel="noopener noreferrer" style={{ color: '#002b5e', fontWeight: 600 }}>http://dialogue.vietceo.vn/</a></p>
                                </div>
                                <p className="mt-4">Tăng trưởng nhanh luôn là cơ hội để doanh nghiệp bứt phá. Tuy nhiên, chỉ những doanh nghiệp sở hữu một hệ thống quản trị đủ mạnh mới có thể biến tốc độ tăng trưởng thành lợi thế cạnh tranh bền vững. Đó cũng là trọng tâm của cuộc đối thoại tại CEO Dialogue #01 – nơi các nhà lãnh đạo cùng chia sẻ kinh nghiệm và tìm lời giải cho bài toán tăng trưởng trong bối cảnh mới.</p>
                            </>
                        ) : article.id === 9 ? (
                            <>
                                <p>Ngày 18/7/2026, chương trình CEO Mentoring do Viện Lãnh đạo, Quản trị và Quản lý Việt Nam (VLGM) phối hợp cùng Sở Khoa học và Công nghệ tỉnh Quảng Ninh tổ chức đã chính thức diễn ra, đánh dấu lần đầu tiên mô hình cố vấn lãnh đạo dành cho doanh nghiệp được triển khai tại tỉnh Quảng Ninh.</p>
                                
                                <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#666', marginTop: '20px', marginBottom: '20px' }}>Mentor và các CEO chụp ảnh tập thể tại chương trình</p>

                                <p>Chương trình quy tụ các CEO trên địa bàn tỉnh, cùng nhau trao đổi những vấn đề thực tiễn trong quá trình điều hành doanh nghiệp. Không dừng lại ở việc chia sẻ kinh nghiệm, CEO Mentoring hướng đến phương pháp cố vấn chuyên sâu, nơi từng CEO trực tiếp trình bày bài toán của doanh nghiệp mình và cùng Mentor tìm ra hướng giải quyết phù hợp.</p>

                                <p>Đồng hành xuyên suốt chương trình là Mentor Nguyễn Mạnh Hùng – Chủ tịch Sáng lập Viện Lãnh đạo, Quản trị và Quản lý Việt Nam (VLGM). Theo Mentor Nguyễn Mạnh Hùng, Mentoring là quá trình người đi trước đồng hành, hỗ trợ người đi sau bằng những kinh nghiệm thực tiễn. Đối với CEO, những vấn đề đặt ra thường là các bài toán quản trị chưa có trong sách vở, rất khó chia sẻ hoặc tìm được lời khuyên phù hợp nếu không có sự kết nối với cộng đồng những nhà lãnh đạo có cùng trải nghiệm.</p>

                                <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#666', marginTop: '20px', marginBottom: '20px' }}>Mentor Nguyễn Mạnh Hùng chia sẻ cùng các CEO tại chương trình</p>

                                <p>Trong khuôn khổ chương trình, nhiều doanh nghiệp thuộc các lĩnh vực du lịch, nông nghiệp, chế biến thực phẩm, thủy sản, sản xuất, công nghệ và dịch vụ đã mang đến những vấn đề cụ thể đang gặp phải như tái cấu trúc mô hình kinh doanh, tối ưu chi phí, xây dựng thương hiệu, phát triển đội ngũ quản lý, quản trị dòng tiền, chuyển đổi số và mở rộng thị trường. Mỗi bài toán đều được Mentor cùng các CEO phân tích từ nhiều góc độ, giúp doanh nghiệp nhận diện đúng nguyên nhân cốt lõi trước khi đưa ra giải pháp.</p>

                                <p>Điểm đặc biệt của CEO Mentoring là cách tiếp cận &ldquo;giải quyết từng vấn đề của từng CEO&rdquo;. Thay vì đưa ra những công thức chung, chương trình tập trung vào việc đặt câu hỏi, phân tích bối cảnh thực tế của từng doanh nghiệp và xây dựng các định hướng phù hợp với điều kiện, nguồn lực cũng như mục tiêu phát triển của doanh nghiệp đó.</p>

                                <p>Bên cạnh những giải pháp về quản trị, chương trình cũng nhấn mạnh vai trò của đổi mới sáng tạo, khoa học công nghệ và tư duy lãnh đạo trong việc nâng cao năng lực cạnh tranh. Những chia sẻ về xây dựng năng lực lõi, đào tạo đội ngũ quản lý, thiết kế lại mô hình kinh doanh, phát triển thương hiệu hay tận dụng khó khăn của thị trường để tái cấu trúc doanh nghiệp đã mang đến nhiều góc nhìn mới cho các CEO tham dự.</p>

                                <p style={{ textAlign: 'center', fontStyle: 'italic', color: '#666', marginTop: '20px', marginBottom: '20px' }}>Các CEO trực tiếp trao đổi vấn đề với Mentor</p>

                                <p>Việc CEO Mentoring lần đầu tiên được tổ chức tại Quảng Ninh không chỉ mở ra diễn đàn kết nối giữa các nhà lãnh đạo doanh nghiệp trong tỉnh mà còn khẳng định cam kết của Viện Lãnh đạo, Quản trị và Quản lý Việt Nam (VLGM) cùng Sở Khoa học và Công nghệ tỉnh Quảng Ninh trong việc đồng hành với cộng đồng doanh nghiệp, góp phần nâng cao năng lực quản trị, thúc đẩy đổi mới sáng tạo và phát triển doanh nghiệp bền vững trong kỷ nguyên số.</p>
                            </>
                        ) : article.id === 10 ? (
                            <>
                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '10px' }}>CEO DIALOGUE #01 chính thức mở đăng ký</p>

                                <p>Khi doanh nghiệp tăng trưởng nhanh, điều tạo nên lợi thế cạnh tranh không chỉ là doanh thu, thị phần hay tốc độ mở rộng, mà còn là năng lực quản trị hệ thống.</p>
                                <p>Không ít doanh nghiệp đạt được tăng trưởng ấn tượng nhưng lại đối mặt với những &ldquo;điểm gãy&rdquo; trong vận hành: quy trình không theo kịp tốc độ phát triển, đội ngũ mở rộng nhưng thiếu sự đồng bộ, năng lực lãnh đạo bị thử thách và chất lượng dịch vụ dần suy giảm.</p>
                                <p>Nhằm mang đến một không gian trao đổi chuyên sâu về những bài toán quản trị cốt lõi của doanh nghiệp, CEO DIALOGUE #01 được tổ chức với chủ đề:</p>

                                <h3 style={{ color: '#da151a', fontWeight: 800, textAlign: 'center', margin: '30px 0', textTransform: 'uppercase' }}>TĂNG TRƯỞNG NHANH MÀ KHÔNG VỠ HỆ THỐNG CỦA DOANH NGHIỆP</h3>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>CEO DIALOGUE – Chuỗi đối thoại chuyên sâu trong Vietnam CEO Forum</p>
                                <p>CEO DIALOGUE là chuỗi đối thoại chuyên sâu trong khuôn khổ Vietnam CEO Forum, quy tụ các CEO, chuyên gia, nhà lãnh đạo doanh nghiệp và các nhà hoạch định chính sách cùng trao đổi về những vấn đề chiến lược của doanh nghiệp và nền kinh tế.</p>
                                <p>Mỗi chương trình tập trung vào một chủ đề trọng tâm, phản ánh những thách thức quản trị đang đặt ra đối với cộng đồng doanh nghiệp Việt Nam. Thông qua các góc nhìn đa chiều và những chia sẻ thực tiễn từ các chuyên gia hàng đầu, CEO DIALOGUE hướng tới việc kết nối tri thức, lan tỏa kinh nghiệm quản trị và đồng hành cùng các doanh nghiệp trên hành trình phát triển bền vững.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>CEO DIALOGUE 01: Tăng trưởng nhanh mà không vỡ hệ thống của doanh nghiệp</p>
                                <p>&ldquo;Tăng trưởng nhanh mà không vỡ hệ thống của doanh nghiệp&rdquo; là chủ đề đầu tiên của chuỗi CEO DIALOGUE, tập trung vào một trong những thách thức lớn nhất của các doanh nghiệp trong giai đoạn scale-up.</p>
                                <p>Khi quy mô doanh nghiệp mở rộng, những hạn chế về mô hình quản trị, tổ chức nhân sự và quy trình vận hành thường bộc lộ rõ rệt. Nếu không được nhận diện và xử lý kịp thời, các &ldquo;điểm gãy&rdquo; này có thể trở thành rào cản đối với sự phát triển lâu dài của doanh nghiệp.</p>
                                <p>Tại chương trình, các diễn giả sẽ cùng phân tích những dấu hiệu cho thấy hệ thống đang quá tải, chia sẻ kinh nghiệm thực tiễn từ quá trình điều hành doanh nghiệp và thảo luận các giải pháp xây dựng nền tảng quản trị đủ vững để doanh nghiệp có thể tăng trưởng nhanh nhưng vẫn duy trì hiệu quả vận hành.</p>

                                <p style={{ fontWeight: 700, fontSize: '18px', marginTop: '30px' }}>Quy tụ các chuyên gia và nhà lãnh đạo hàng đầu</p>
                                <p>CEO DIALOGUE 01 có sự tham gia của những chuyên gia giàu kinh nghiệm trong lĩnh vực quản trị, chính sách và điều hành doanh nghiệp.</p>

                                <ul style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                    <li className="mb-3">
                                        <strong>Ông Nguyễn Mạnh Hùng</strong><br/>
                                        Nguyên Bộ trưởng Bộ Khoa học và Công nghệ<br/>
                                        Chủ tịch Sáng lập Viện Lãnh đạo, Quản trị và Quản lý Việt Nam (VLGM)
                                    </li>
                                    <li className="mb-3">
                                        <strong>Host: TS. Võ Trí Thành</strong><br/>
                                        Viện trưởng Viện Nghiên cứu Phát triển Thương hiệu và Cạnh tranh
                                    </li>
                                    <li className="mb-3">
                                        <strong>Diễn giả:</strong>
                                        <ul style={{ marginTop: '10px' }}>
                                            <li className="mb-2"><strong>GS.TS. Vũ Minh Khương</strong> – Trường Chính sách công Lý Quang Diệu, Đại học Quốc gia Singapore (NUS)</li>
                                            <li className="mb-2"><strong>TS. Giản Tư Trung</strong> – Chủ tịch Sáng lập Học viện Quản lý PACE, Viện trưởng IRED</li>
                                            <li className="mb-2"><strong>TS. Lê Quang Đạm</strong> – Tổng Giám đốc Marvell Việt Nam</li>
                                        </ul>
                                    </li>
                                </ul>

                                <p className="mt-4">Nếu doanh nghiệp của bạn đang chuẩn bị bước vào giai đoạn tăng trưởng mạnh hoặc đang tìm kiếm lời giải cho những thách thức trong quản trị hệ thống, CEO DIALOGUE #01 sẽ là cơ hội để lắng nghe những góc nhìn chuyên sâu, kết nối với cộng đồng CEO và cùng trao đổi về các giải pháp quản trị cho sự phát triển bền vững.</p>

                                <div style={{ backgroundColor: '#f9f9f9', padding: '20px', borderRadius: '8px', marginTop: '30px', borderLeft: '4px solid #da151a', textAlign: 'center' }}>
                                    <p className="mb-0" style={{ fontSize: '16px' }}><strong>Đăng ký tham dự tại:</strong> <a href="http://dialogue.vietceo.vn/" target="_blank" rel="noopener noreferrer" style={{ color: '#da151a', fontWeight: 700 }}>http://dialogue.vietceo.vn/</a></p>
                                </div>
                            </>
                        ) : (
                            <p>{article.desc} Đây là nội dung mẫu cho các bài viết khác.</p>
                        )}
                    </div>
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                    <h3 className="sidebar-title">Bài viết liên quan</h3>
                    
                    <div className="related-list">
                        {relatedArticles.map((item) => (
                            <Link href={`/tri-thuc/${item.id}`} key={item.id} className="related-item" style={{ textDecoration: 'none' }}>
                                <div className="related-thumb">
                                    <Image 
                                        src={item.image} 
                                        alt={item.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="related-info">
                                    <div className="related-title">{item.title}</div>
                                    <div className="related-date">{item.time}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeDetails;
