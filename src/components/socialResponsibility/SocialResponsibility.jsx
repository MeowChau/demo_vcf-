import React from 'react';

const galleryImages = [
    '/assets/img/aboutUs/075a97_b55fb12c83d3488b9439c17e50cf14c9~mv2_d_1920_1920_s_2.avif',
    '/assets/img/aboutUs/075a97_b2b2dfc8f8dc4df69eb2af1a31b2ad77~mv2_d_2048_2048_s_2.avif',
    '/assets/img/aboutUs/075a97_a477e2d6e866470dba52044ef780541d~mv2.avif',
    '/assets/img/aboutUs/075a97_9ac4d71736874287852c9d9b355081ce~mv2_d_1440_1440_s_2.avif',
    '/assets/img/aboutUs/075a97_25e50149dc9e4007811944833f41a814~mv2_d_2560_1920_s_2.avif',
    '/assets/img/aboutUs/075a97_6ba7a1aa3add4fbca2b9e4681f8bbe96~mv2_d_2048_2048_s_2.avif'
];

const SocialResponsibility = () => {
    return (
        <div className="social-responsibility-page pt-80 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                
                {/* Title */}
                <h1 style={{ color: '#2a5390', fontSize: '36px', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase', textAlign: 'center' }}>
                    ASIA CEO COMMUNITY - SOCIAL RESPONSIBILITY
                </h1>

                {/* ESG Image */}
                <div className="mb-5" style={{ textAlign: 'center' }}>
                    <img 
                        src="/assets/img/aboutUs/ESG.avif" 
                        alt="Stripe Climate member - At ASIA CEO COMMUNITY, we contribute 0.5% of our revenue to carbon removal" 
                        style={{ width: '100%', borderRadius: '5px' }} 
                    />
                </div>

                {/* Section: Anti COVID 19 */}
                <div className="mb-5" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: '#555', marginBottom: '20px', fontWeight: '500' }}>
                        Asia CEO COMMUNITY - Anti~COVID~19 Action day
                    </h4>
                    <img 
                        src="/assets/img/aboutUs/88241878_10158073305910050_9111485123726.avif" 
                        alt="Anti COVID 19 Action day" 
                        style={{ width: '100%', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                    />
                </div>

                {/* Section: Visit Underprivileged School in China */}
                <div className="mb-5" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: '#555', marginBottom: '20px', fontWeight: '500' }}>
                        Visit Underprivileged School in China
                    </h4>
                    <img 
                        src="/assets/img/aboutUs/China.avif" 
                        alt="Visit Underprivileged School in China" 
                        style={{ width: '100%', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                    />
                </div>

                {/* Section: Donation & Visit Elderly */}
                <div className="mb-5" style={{ textAlign: 'center' }}>
                    <h4 style={{ color: '#555', marginBottom: '10px', fontWeight: '500' }}>
                        Donation to Children's Cancer Foundation
                    </h4>
                    <h4 style={{ color: '#555', marginBottom: '20px', fontWeight: '500' }}>
                        Visit elderly at Christmas
                    </h4>
                    <img 
                        src="/assets/img/aboutUs/Cancer.avif" 
                        alt="Donation to Children's Cancer Foundation and Visit elderly at Christmas" 
                        style={{ width: '100%', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                    />
                </div>

                {/* Section: Students are our future */}
                <div className="mb-5 text-center">
                    <h4 style={{ color: '#555', marginBottom: '15px', fontWeight: '500' }}>
                        Asia CEO Community & Hong Kong Federation of business students 34th Inauguration ceremony.
                    </h4>
                    <h3 style={{ color: '#335084', marginBottom: '20px', fontWeight: 'bold' }}>
                        Students are our future
                    </h3>
                    
                    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.8', marginBottom: '20px', textAlign: 'justify' }}>
                        We understand that students are our future. By connecting business leaders with students, our main target is to help student to discover their interest and the industry that they would like work in the future. their lives outside of school or their future careers.
                    </p>
                    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.8', marginBottom: '40px', textAlign: 'justify' }}>
                        Industry visits from schools and universities are encouraged by ASIA CEO COMMUNITY because they offer students early exposure to the business world and encourages them to develop their career path.
                    </p>

                    {/* Image Gallery */}
                    <div className="row">
                        {galleryImages.map((src, index) => (
                            <div className="col-md-6 mb-4" key={index}>
                                <img 
                                    src={src} 
                                    alt={`Student Initiative ${index + 1}`} 
                                    style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SocialResponsibility;
