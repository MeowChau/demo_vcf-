import React from 'react';

const FounderMagazines = () => {
    // Array of placeholder magazines based on the screenshots
    const magazines = Array(6).fill({
        title: 'Founder Magazine',
        img: '/assets/img/publications/1 (2).avif'
    });

    return (
        <div className="founder-magazines-page pt-80 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Title */}
                <h1 style={{ color: '#555', fontSize: '32px', fontWeight: 'bold', marginBottom: '30px', textTransform: 'uppercase', textAlign: 'center' }}>
                    THE ADVENTUROUS ENTREPRENEUR WEEKLY
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

                {/* Magazine Grid - Centered similar to Asia CEO Magazine for consistency */}
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

export default FounderMagazines;
