import React from 'react';
import Link from 'next/link';

const GlobalChapters = () => {
    const mapContainerStyle = {
        position: 'relative',
        width: '100%',
        maxWidth: '1200px',
        margin: '0 auto',
        paddingTop: '30px',
        paddingBottom: '30px'
    };

    const imgStyle = {
        width: '100%',
        height: 'auto',
        display: 'block',
        borderRadius: '10px',
        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
    };

    const getBtnStyle = (top, left) => ({
        position: 'absolute',
        top: `${top}%`,
        left: `${left}%`,
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#1b3f54', // Dark blue/teal from screenshot
        color: '#ff8a65', // Salmon/orange text
        border: 'none',
        borderRadius: '20px',
        padding: '5px 15px',
        fontSize: '12px',
        fontWeight: 'bold',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
        boxShadow: '0 2px 5px rgba(0,0,0,0.3)',
        transition: 'all 0.3s ease',
        cursor: 'pointer'
    });

    // Approximate positions
    const locations = [
        { name: "Steering Committee", top: 15, left: 25 },
        { name: "Honorary Advisory Board", top: 15, left: 50 },
        { name: "Women's Leadership Committee", top: 15, left: 75 },
        { name: "Canada", top: 38, left: 22 },
        { name: "U.S.A.", top: 48, left: 28 },
        { name: "Silicon Valley", top: 52, left: 18 },
        { name: "Mexico", top: 62, left: 24 },
        { name: "London", top: 46, left: 42 },
        { name: "Europe", top: 36, left: 48 },
        { name: "Dubai", top: 54, left: 45 },
        { name: "Africa", top: 62, left: 45 },
        { name: "South Africa", top: 78, left: 48 },
        { name: "India", top: 41, left: 60 },
        { name: "Cambodia", top: 48, left: 56 },
        { name: "Bangladesh", top: 55, left: 58 },
        { name: "Malaysia", top: 62, left: 58 },
        { name: "Singapore", top: 68, left: 62 },
        { name: "Shang Hai", top: 34, left: 74 },
        { name: "Macau", top: 41, left: 71 },
        { name: "Hong Kong", top: 47, left: 68 },
        { name: "Taipei", top: 52, left: 72 },
        { name: "Vietnam", top: 59, left: 68 },
        { name: "Philippines", top: 60, left: 82 },
        { name: "Malaysia (East)", top: 66, left: 73 }, 
        { name: "Indonesia", top: 72, left: 81 },
        { name: "Australia", top: 78, left: 72 },
        { name: "JAPAN", top: 46, left: 82 },
    ];

    return (
        <div className="global-chapters-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1200px' }}>
                <div className="text-center mb-5">
                    <h1 style={{ fontSize: '38px', color: '#555', fontWeight: 'normal' }}>
                        Asia CEO Community - GLOBAL CHAPTERS
                    </h1>
                </div>

                <div style={mapContainerStyle} className="map-container-wrapper">
                    <img src="/assets/img/globalChapters/Map in Grass.avif" alt="Global Chapters Map" style={imgStyle} />
                    
                    {/* The logo box at the bottom */}
                    <div style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        backgroundColor: '#fff2df',
                        padding: '10px 20px',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '5px'
                    }}>
                        <div style={{ fontSize: '20px', fontWeight: 'bold', color: '#1b3f54', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <span style={{ fontStyle: 'italic', color: '#3498db' }}>ASIA CEO <span style={{ fontWeight: 'normal' }}>COMMUNITY</span></span>
                            <span style={{ fontSize: '12px', color: '#c0392b' }}>Discover the world of Success</span>
                        </div>
                    </div>

                    {/* Interactive buttons */}
                    <div className="map-buttons d-none d-lg-block">
                        {locations.map((loc, index) => {
                            const slug = loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                            return (
                                <Link href={`/global-chapters/${slug}`} key={index}>
                                    <div style={getBtnStyle(loc.top, loc.left)} className="map-btn">
                                        {loc.name}
                                    </div>
                                </Link>
                            )
                        })}
                    </div>
                </div>
                
                {/* Mobile list view for the buttons (since absolute positioning text will overlap on tiny screens) */}
                <div className="d-lg-none mt-4 text-center">
                    <h4 className="mb-4">Select a Chapter:</h4>
                    <div className="d-flex flex-wrap justify-content-center" style={{ gap: '10px' }}>
                        {locations.map((loc, index) => {
                            const slug = loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
                            return (
                                <Link href={`/global-chapters/${slug}`} key={index}>
                                    <button style={{
                                        backgroundColor: '#1b3f54', color: '#ff8a65', border: 'none', 
                                        borderRadius: '20px', padding: '8px 15px', fontSize: '13px', fontWeight: 'bold'
                                    }}>
                                        {loc.name}
                                    </button>
                                </Link>
                            )
                        })}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GlobalChapters;
