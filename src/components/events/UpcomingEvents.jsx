import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

const UpcomingEvents = () => {
    return (
        <div className="upcoming-events-area" style={{ backgroundColor: '#fff2df', paddingTop: '20px', paddingBottom: '60px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center mb-50">
                        <h2 style={{ color: '#E20613', fontWeight: 800, textTransform: 'uppercase', fontSize: '2.5rem' }}>Upcoming Events</h2>
                    </div>
                </div>

                {/* Event 1 */}
                <div className="row align-items-center mb-50" style={{ paddingBottom: '30px' }}>
                    <div className="col-lg-9 col-md-12 mb-30 mb-lg-0">
                        <Image 
                            src="/assets/img/upcoming/cff353a0-03b6-40fe-ab70-8b7d70d524ce.avif" 
                            width={1200} 
                            height={600} 
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }} 
                            alt="Gala Dinner 2026" 
                        />
                    </div>
                    <div className="col-lg-3 col-md-12 text-center text-lg-center">
                        <h5 style={{ color: '#E20613', marginBottom: '5px' }}>18th Sept, 2026</h5>
                        <p style={{ color: '#666', marginBottom: '20px' }}>06:00pm - 11:00pm</p>
                        <h6 style={{ color: '#003366', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px', lineHeight: '1.5' }}>
                            GALA DINNER 2026 - KL MALAYSIA <br /> (NETWORKING EVENT) <br /> MALAYSIA
                        </h6>
                        <Link href="/gala-dinner-2026" className="btn" style={{ backgroundColor: '#3b9bf0', color: '#fff', borderRadius: '30px', padding: '10px 30px', fontWeight: 'bold', border: 'none' }}>
                            Register Now
                        </Link>
                    </div>
                </div>

                {/* Event 2 */}
                <div className="row align-items-center">
                    <div className="col-lg-9 col-md-12 mb-30 mb-lg-0">
                        <Image 
                            src="/assets/img/upcoming/FBL - Jennifer Chan (1).avif" 
                            width={1200} 
                            height={600} 
                            style={{ width: '100%', height: 'auto', borderRadius: '5px' }} 
                            alt="Co-Investment & Strategic Partnerships" 
                        />
                    </div>
                    <div className="col-lg-3 col-md-12 text-center text-lg-center">
                        <h5 style={{ color: '#E20613', marginBottom: '5px' }}>29th May, 2026</h5>
                        <p style={{ color: '#666', marginBottom: '20px' }}>11:30am - 2:00pm</p>
                        <h6 style={{ color: '#003366', fontWeight: 700, textTransform: 'uppercase', marginBottom: '20px', lineHeight: '1.5' }}>
                            Co-Investment & Strategic Partnerships <br /> (LUNCHEON EVENT) <br /> HONG KONG
                        </h6>
                        <Link href="/hk-monthly-event" className="btn" style={{ backgroundColor: '#3b9bf0', color: '#fff', borderRadius: '30px', padding: '10px 30px', fontWeight: 'bold', border: 'none' }}>
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingEvents;
