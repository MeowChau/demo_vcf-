import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const ProcessStyle1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`process-style-one-area text-center default-padding ${sectionClass ? sectionClass : ""}`} style={{ backgroundColor: '#fff2df' }}>
                <div className="container">
                    <div className="row mb-50">
                        <div className="col-12 text-center">
                            <h2 style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '2.5rem', color: '#555' }}>
                                ASIA CEO COMMUNITY <br />
                                <span style={{ color: '#E20613' }}>NEWLY JOINED MEMBERS</span>
                            </h2>
                        </div>
                    </div>
                    
                    <div className="row mb-40">
                        <div className="col-lg-6 col-md-6 mb-30 text-center">
                            <Link href="/member-directory/1">
                                <Image 
                                    src="/assets/img/RECENT PUBLICATIONS/Image-empty-state.avif" 
                                    width={600} 
                                    height={400} 
                                    style={{ width: '100%', height: 'auto', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} 
                                    alt="Newly Joined Member 1" 
                                />
                            </Link>
                        </div>
                        <div className="col-lg-6 col-md-6 mb-30 text-center">
                            <Link href="/member-directory/2">
                                <Image 
                                    src="/assets/img/RECENT PUBLICATIONS/Image-empty-state (1).avif" 
                                    width={600} 
                                    height={400} 
                                    style={{ width: '100%', height: 'auto', boxShadow: '0 5px 15px rgba(0,0,0,0.1)' }} 
                                    alt="Newly Joined Member 2" 
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-12 text-center">
                            <Link href="/member-directory" style={{ display: 'inline-flex', alignItems: 'center', color: '#e67e22', fontWeight: 800, textTransform: 'uppercase', fontSize: '20px' }}>
                                <i className="fas fa-database" style={{ marginRight: '10px', fontSize: '24px' }}></i>
                                <span style={{ textDecoration: 'underline' }}>MEMBERS DIRECTORY</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProcessStyle1;