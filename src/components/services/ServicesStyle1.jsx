import React from 'react';
import Image from 'next/image';
import shape10 from '@/assets/img/shape/10.png'
import Link from 'next/link';

const ServicesStyle1 = () => {
    return (
        <>
            <div className="services-style-one-area default-padding bg-gray" style={{ position: 'relative' }}>
                <div className="center-shape" style={{ backgroundImage: `url(/assets/img/shape/5.png)` }}></div>
                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div className="row mb-50">
                        <div className="col-12 text-center">
                            <h2 style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '2.5rem', color: '#444' }}>
                                ASIA CEO COMMUNITY <span style={{ color: '#E20613' }}>RECENT PUBLICATIONS</span>
                            </h2>
                            <p style={{ color: '#7cb342', fontSize: '18px', fontWeight: 600, marginTop: '10px' }}>
                                Discover the inspiring paths taken by some of our 28,000+ talented members as they share their journeys with you
                            </p>
                        </div>
                    </div>
                    
                    <div className="row">
                        {/* Magazine 1 */}
                        <div className="col-lg-4 col-md-6 mb-30 text-center">
                            <div className="publication-item">
                                <Image 
                                    src="/assets/img/RECENT PUBLICATIONS/392790849_10161265754565050_8903077224513915103_n.avif" 
                                    width={400} 
                                    height={550} 
                                    style={{ width: '100%', height: 'auto' }} 
                                    alt="Founder Magazine" 
                                />
                            </div>
                            <Link href="/founder-magazines" style={{ display: 'inline-block', marginTop: '20px', color: '#666', fontWeight: 600, textDecoration: 'underline', textTransform: 'uppercase', fontSize: '15px' }}>
                                FOUNDER MAGAZINE
                            </Link>
                        </div>

                        {/* Magazine 2 */}
                        <div className="col-lg-4 col-md-6 mb-30 text-center">
                            <div className="publication-item">
                                <Image 
                                    src="/assets/img/RECENT PUBLICATIONS/394937632_10161287901920050_7650544904442014948_n.avif" 
                                    width={400} 
                                    height={550} 
                                    style={{ width: '100%', height: 'auto' }} 
                                    alt="Venture Capitalist" 
                                />
                            </div>
                            <Link href="/venture-capitalist-magazines" style={{ display: 'inline-block', marginTop: '20px', color: '#666', fontWeight: 600, textDecoration: 'underline', textTransform: 'uppercase', fontSize: '15px' }}>
                                VENTURE CAPITALIST
                            </Link>
                        </div>

                        {/* Magazine 3 */}
                        <div className="col-lg-4 col-md-6 mb-30 text-center">
                            <div className="publication-item">
                                <Image 
                                    src="/assets/img/RECENT PUBLICATIONS/1.avif" 
                                    width={400} 
                                    height={550} 
                                    style={{ width: '100%', height: 'auto' }} 
                                    alt="C-Suite Magazine" 
                                />
                            </div>
                            <Link href="/c-suite-magazines" style={{ display: 'inline-block', marginTop: '20px', color: '#666', fontWeight: 600, textDecoration: 'underline', textTransform: 'uppercase', fontSize: '15px' }}>
                                C-SUITE MAGAZINE
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServicesStyle1;