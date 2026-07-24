import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const TeamStyle1 = ({ sectionClass }) => {
    return (
        <>
            <div className={`team-style-one-area default-padding-top pb-70 pb-xs-0 bg-contain-center ${sectionClass ? sectionClass : ""}`} style={{ backgroundImage: `url(/assets/img/shape/18.png)` }}>
                <div className="container">
                    <div className="row mb-30">
                        <div className="col-12 text-center">
                            <h2 style={{ fontWeight: 800, textTransform: 'uppercase', fontSize: '2.5rem', color: '#555' }}>
                                ASIA CEO COMMUNITY <span style={{ color: '#E20613' }}>SPONSORS & PARTNERS</span>
                            </h2>
                            <p style={{ color: '#666', fontSize: '16px', maxWidth: '900px', margin: '15px auto 0' }}>
                                Thank You Asia CEO COMMUNITY Sponsors for your continued support of ASIA CEO COMMUNITY education, events and initiatives. Our Sponsorship program offers the opportunity to sponsor single and/or multiple events throughout the calendar year. <Link href="#" style={{ color: '#E20613', textDecoration: 'underline' }}>Click here</Link> to learn more about how your company can become a sponsor.
                            </p>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-12 text-center">
                            <Image 
                                src="/assets/img/RECENT PUBLICATIONS/New Partnership_edited.avif" 
                                width={1200} 
                                height={800} 
                                style={{ width: '100%', height: 'auto', display: 'inline-block' }} 
                                alt="Sponsors and Partners" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamStyle1;