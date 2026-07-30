import Image from 'next/image';
import React from 'react';

const HomeImageBanner = () => {
    return (
        <div className="home-image-banner-area" style={{ background: '#fff2df', paddingBottom: '60px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Image 
                            src="/assets/img/upcoming/gemini-3_1-flash-image-preview (nano-banana-2) [web-search]_a_Generate_a_8k_photo_ (6).avif" 
                            width={1200} 
                            height={400} 
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }} 
                            alt="Banner" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeImageBanner;
