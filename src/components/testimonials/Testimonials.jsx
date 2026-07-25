import React from 'react';

const testimonialImages = [
    '/assets/img/aboutUs/075a97_5077a728c4c844c59a1ef3dcecd24249~mv2.avif',
    '/assets/img/aboutUs/075a97_c6afd482a07c40b8bb4e413a5b661b70~mv2.avif',
    '/assets/img/aboutUs/075a97_3c9fc50be87440acb5565fdfb2b1046d~mv2 (1).avif'
];

const Testimonials = () => {
    return (
        <div className="testimonials-page pt-80 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Title */}
                <h2 style={{ color: '#335084', fontSize: '32px', marginBottom: '40px', fontWeight: '400', textTransform: 'uppercase' }}>
                    MEMBERS TESTIMONIALS
                </h2>

                <div className="row">
                    {/* Left Column - Testimonial Images */}
                    <div className="col-lg-8 mb-4">
                        {testimonialImages.map((src, index) => (
                            <div key={index} className="mb-4 text-center">
                                <img 
                                    src={src} 
                                    alt={`Member Testimonial ${index + 1}`} 
                                    style={{ width: '100%', maxWidth: '600px', borderRadius: '5px' }} 
                                />
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Text Description */}
                    <div className="col-lg-4">
                        <div className="sticky-top" style={{ top: '100px' }}>
                            <h3 style={{ color: '#555', fontSize: '28px', marginBottom: '20px', fontWeight: '400' }}>
                                Monthly Event
                            </h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                                ASIA CEO Community Monthly Luncheon Event is the community event for 
                                ASIA CEO COMMUNITY members to connect with each other for potential 
                                collaboration, ideas exchange & fun.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Testimonials;
