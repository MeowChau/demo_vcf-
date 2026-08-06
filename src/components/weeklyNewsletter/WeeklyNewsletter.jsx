import React from 'react';
import Link from 'next/link';

const WeeklyNewsletter = () => {
    return (
        <div className="weekly-newsletter-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="mb-5">
                    <h2 style={{ color: '#555', fontWeight: 'bold', fontSize: '32px', marginBottom: '30px', textTransform: 'uppercase' }}>
                        COMMUNITY UPDATES
                    </h2>
                    <div className="d-flex flex-wrap gap-3">
                        <Link href="#" className="btn" style={{ 
                            background: 'linear-gradient(to bottom, #63a8eb, #3588d9)',
                            color: '#fff', 
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '22px',
                            padding: '8px 40px',
                            borderRadius: '4px',
                            border: '1px solid #4b9ae2',
                            minWidth: '200px'
                        }}>
                            Join Us
                        </Link>
                        <Link href="#" className="btn flex-grow-1" style={{ 
                            background: 'linear-gradient(to bottom, #63a8eb, #3588d9)',
                            color: '#fff', 
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '22px',
                            padding: '8px 40px',
                            borderRadius: '4px',
                            border: '1px solid #4b9ae2',
                            textAlign: 'center'
                        }}>
                            Upcoming Parties
                        </Link>
                        <Link href="#" className="btn" style={{ 
                            background: 'linear-gradient(to bottom, #63a8eb, #3588d9)',
                            color: '#fff', 
                            fontFamily: 'var(--font-montserrat)',
                            fontSize: '22px',
                            padding: '8px 40px',
                            borderRadius: '4px',
                            border: '1px solid #4b9ae2',
                            minWidth: '250px'
                        }}>
                            Sponsorship
                        </Link>
                    </div>
                </div>
                
                {/* Content area placeholder */}
                <div className="row justify-content-center mt-5">
                    <div className="col-lg-8 text-center">
                        <p style={{ color: '#777', fontSize: '16px' }}>Newsletter content will be displayed here...</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WeeklyNewsletter;
