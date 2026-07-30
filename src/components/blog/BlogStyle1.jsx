import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const BlogStyle1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`home-blog-area default-padding bottom-less ${sectionClass ? sectionClass : ""}`} style={{ backgroundColor: '#fff2df', paddingBottom: '60px' }}>
                <div className="container">
                    <div className="row mb-40">
                        <div className="col-12 text-center">
                            <h2 style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '2.5rem', color: '#555' }}>
                                ASIA CEO COMMUNITY <span style={{ color: '#E20613' }}>Special Offer</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 mb-30 text-center">
                            <Image 
                                src="/assets/img/RECENT PUBLICATIONS/e46fc162c1e440ba19f5.jpg" 
                                width={800} 
                                height={600} 
                                style={{ width: '100%', height: 'auto', display: 'inline-block' }} 
                                alt="Special Offer 1" 
                            />
                        </div>
                        <div className="col-lg-6 col-md-6 mb-30 text-center">
                            <Image 
                                src="/assets/img/RECENT PUBLICATIONS/e46fc162c1e440ba19f5.jpg" 
                                width={800} 
                                height={600} 
                                style={{ width: '100%', height: 'auto', display: 'inline-block' }} 
                                alt="Special Offer 2" 
                            />
                        </div>
                    </div>
                    
                    <div className="row mt-40">
                        <div className="col-12 text-center">
                            <Link href="/member-benefits" style={{ display: 'inline-block', padding: '10px 30px', border: '1px solid #000', color: '#000', fontWeight: 'bold', fontSize: '18px', marginBottom: '30px' }}>
                                More Benefits..
                            </Link>
                            <br />
                            <Link href="/join-us" style={{ display: 'inline-block', padding: '15px 50px', backgroundColor: '#E20613', color: '#fff', fontWeight: 800, fontSize: '24px', textTransform: 'uppercase' }}>
                                JOIN ASIA CEO COMMUNITY
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStyle1;