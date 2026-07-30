import React from 'react';
import Link from 'next/link';

const AsiaCeoMagazine = () => {
    const magazines = [
        { title: 'Jan 2021 - C-Suite Magazine', img: '/assets/img/publications/1 (1).avif' },
        { title: 'Sept 2021 - C-Suite Magazine', img: '/assets/img/publications/1 (1).avif' },
        { title: 'Mar 2021 - C-Suite Magazine', img: '/assets/img/publications/1 (1).avif' },
        { title: 'Sept 2022 - C-Suite Magazine', img: '/assets/img/publications/1 (1).avif' },
        { title: 'Jun 2021 - C-Suite Magazine', img: '/assets/img/publications/1 (1).avif' }
    ];

    return (
        <div className="asia-ceo-magazine-page pt-80 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Title */}
                <h1 style={{ color: '#555', fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase', textAlign: 'center' }}>
                    MONTHLY MAGAZINE
                </h1>

                {/* Pill Buttons */}
                <div className="row mb-5 justify-content-center">
                    <div className="col-md-3 col-sm-4 mb-3">
                        <button style={{
                            width: '100%',
                            background: 'linear-gradient(to bottom, #7db9e8 0%, #3e9ce3 100%)',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            padding: '8px 0',
                            fontSize: '18px',
                            fontFamily: "'Dancing Script', cursive, sans-serif"
                        }}>
                            Join Us
                        </button>
                    </div>
                    <div className="col-md-3 col-sm-4 mb-3">
                        <button style={{
                            width: '100%',
                            background: 'linear-gradient(to bottom, #7db9e8 0%, #3e9ce3 100%)',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            padding: '8px 0',
                            fontSize: '18px',
                            fontFamily: "'Dancing Script', cursive, sans-serif"
                        }}>
                            Upcoming Parties
                        </button>
                    </div>
                    <div className="col-md-3 col-sm-4 mb-3">
                        <button style={{
                            width: '100%',
                            background: 'linear-gradient(to bottom, #7db9e8 0%, #3e9ce3 100%)',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            padding: '8px 0',
                            fontSize: '18px',
                            fontFamily: "'Dancing Script', cursive, sans-serif"
                        }}>
                            Sponsorship
                        </button>
                    </div>
                </div>

                {/* Magazine Grid - Centered items as requested */}
                <div className="d-flex flex-wrap justify-content-center" style={{ gap: '40px 60px' }}>
                    {magazines.map((item, index) => (
                        <div key={index} style={{ width: '280px', textAlign: 'center' }}>
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                style={{ width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)', marginBottom: '15px' }} 
                            />
                            <a href="#" style={{ color: '#777', fontSize: '15px', textDecoration: 'underline' }}>
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default AsiaCeoMagazine;
