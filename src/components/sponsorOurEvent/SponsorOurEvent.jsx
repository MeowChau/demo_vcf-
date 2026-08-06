import React from 'react';

const SponsorOurEvent = () => {
    const btnStyle = {
        background: 'linear-gradient(to bottom, #6cb2f2, #499bee)',
        color: '#fff',
        border: '1px solid #499bee',
        borderRadius: '4px',
        padding: '12px 20px',
        fontSize: '22px',
        fontWeight: '500',
        fontFamily: 'var(--font-montserrat)',
        flex: '1',
        minWidth: '200px',
        maxWidth: '300px',
        textShadow: '1px 1px 2px rgba(0,0,0,0.2)'
    };

    return (
        <div className="sponsor-our-event-page pt-80 pb-100" style={{ backgroundColor: '#fff', minHeight: '60vh' }}>
            <div className="container text-center">
                
                <h1 style={{ color: '#555', fontSize: '42px', fontWeight: 'bold', marginBottom: '30px', textTransform: 'none' }}>
                    Sponsorship Package 2025 - GALA DINNER
                </h1>

                <div className="d-flex justify-content-center flex-wrap" style={{ gap: '15px' }}>
                    <button style={btnStyle}>Join Us</button>
                    <button style={btnStyle}>Upcoming Parties</button>
                    <button style={btnStyle}>Sponsorship</button>
                </div>

            </div>
        </div>
    );
};

export default SponsorOurEvent;
