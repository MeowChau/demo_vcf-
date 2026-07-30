import React from 'react';

const CeoVideos = () => {
    return (
        <div className="ceo-videos-area pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container">
                {/* Row 1 */}
                <div className="row align-items-center mb-5">
                    <div className="col-lg-6 mb-4 mb-lg-0">
                        <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                            <iframe 
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/Gz04SqjW5_M" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div style={{ padding: '0 15px' }}>
                            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8', marginBottom: '25px', textAlign: 'justify' }}>
                                Những doanh nghiệp hùng cường bắt đầu từ những nhà lãnh đạo không ngừng học hỏi. CEO Mentoring là chương trình kết nối các CEO, Founder và lãnh đạo doanh nghiệp với những Mentor hàng đầu Việt Nam, cùng trao đổi về chiến lược, quản trị và tương lai doanh nghiệp.
                            </p>
                            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8', margin: 0, textAlign: 'justify' }}>
                                Mỗi cuộc đối thoại không chỉ tạo giá trị cho một doanh nghiệp, mà còn góp phần xây dựng một cộng đồng doanh nhân vững mạnh vì một Việt Nam hùng cường.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="row align-items-center flex-column-reverse flex-lg-row pt-4">
                    <div className="col-lg-6 mt-4 mt-lg-0">
                        <div style={{ padding: '0 15px' }}>
                            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8', marginBottom: '25px', textAlign: 'justify' }}>
                                Những người dẫn dắt cũng cần người dẫn đường. Doanh nghiệp càng phát triển, quyết định càng khó. Không phải mọi quyết định đều có thể mang ra phòng họp. Không phải mọi áp lực đều có thể chia sẻ với đội ngũ.
                            </p>
                            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.8', margin: 0, textAlign: 'justify' }}>
                                Điều CEO cần không phải nhiều lời khuyên hơn. Mà là những góc nhìn từ những người đã từng trực tiếp lãnh đạo, điều hành và chuyển đổi các tổ chức lớn. CEO Mentoring kết nối những nhà lãnh đạo để cùng học hỏi từ thực tiễn.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="video-wrapper" style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
                            <iframe 
                                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                                src="https://www.youtube.com/embed/a0LTyTNBFtI" 
                                title="YouTube video player" 
                                frameBorder="0" 
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                allowFullScreen>
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoVideos;
