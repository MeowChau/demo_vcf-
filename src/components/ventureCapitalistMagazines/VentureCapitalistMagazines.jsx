import React from 'react';

const VentureCapitalistMagazines = () => {
    // Array of placeholder magazines based on the screenshots
    const magazines = Array(3).fill({
        title: 'Venture Capitalist Magazine',
        img: '/assets/img/publications/394937632_10161287901920050_7650544904442014948_n (1).avif'
    });

    return (
        <div className="venture-capitalist-magazines-page pt-80 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Title */}
                <h1 style={{ color: '#555', fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase', textAlign: 'center' }}>
                    VENTURE CAPITALIST MAGAZINE
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
                            fontFamily: 'var(--font-montserrat)'
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
                            fontFamily: 'var(--font-montserrat)'
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
                            fontFamily: 'var(--font-montserrat)'
                        }}>
                            Sponsorship
                        </button>
                    </div>
                </div>

                {/* Magazine Grid - Centered similarly for consistency */}
                <div className="d-flex flex-wrap justify-content-center" style={{ gap: '30px' }}>
                    {magazines.map((item, index) => (
                        <div key={index} style={{ width: '300px', textAlign: 'center' }}>
                            <img 
                                src={item.img} 
                                alt={item.title} 
                                style={{ width: '100%', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }} 
                            />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default VentureCapitalistMagazines;
