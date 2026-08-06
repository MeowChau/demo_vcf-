import Image from 'next/image';
import React from 'react';

const HomeVideoSection = () => {
    return (
        <div className="home-video-section text-center" style={{ paddingTop: '80px', paddingBottom: '20px', backgroundColor: '#fff' }}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-10 offset-xl-1">
                        <h2 style={{ color: '#E20613', fontWeight: 800, textTransform: 'uppercase', marginBottom: '15px' }}>
                            ASIA CEO COMMUNITY
                        </h2>
                        <p style={{ fontSize: '18px', color: '#555', marginBottom: '40px', lineHeight: '1.6' }}>
                            Transforming the way the World's TOP CXOs learn and share expertise <br />
                            Build Friendships, Share Ideas, & Make Connections
                        </p>
                        <div className="video-container" style={{ position: 'relative', width: '100%', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <Image 
                                src="/assets/img/video/45047a4a1dcc9c92c5dd.jpg" 
                                width={1200} 
                                height={675} 
                                style={{ width: '100%', height: 'auto', display: 'block' }} 
                                alt="Asia CEO Community Video" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeVideoSection;
