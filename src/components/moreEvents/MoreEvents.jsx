import React from 'react';

const MoreEvents = () => {
    return (
        <div className="more-events-page pt-80 pb-100" style={{ backgroundColor: '#fff', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Header Area */}
                <div className="mb-4 text-center text-md-start">
                    <h1 style={{ fontSize: '54px', fontWeight: 'bold', color: '#1a3673', textTransform: 'uppercase', marginBottom: '5px' }}>
                        MORE EVENTS
                    </h1>
                    <div style={{ marginLeft: '120px', marginBottom: '20px' }} className="d-none d-md-block">
                        <span style={{ backgroundColor: '#5de0b2', color: '#fff', padding: '6px 20px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', display: 'inline-block' }}>CONNECT. MEET. GROW.</span>
                    </div>
                    <div style={{ marginBottom: '20px' }} className="d-block d-md-none">
                        <span style={{ backgroundColor: '#5de0b2', color: '#fff', padding: '6px 20px', borderRadius: '20px', fontSize: '14px', fontWeight: 'bold', display: 'inline-block' }}>CONNECT. MEET. GROW.</span>
                    </div>
                </div>

                {/* Description Text */}
                <div className="mb-5 text-center text-md-start" style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
                    <p>
                        Events organized by partners or third parties and being supported by ASIA CEO COMMUNITY, offering benefits to the Members, such as VIP invitations and special offers/rates.
                    </p>
                </div>

                {/* Action Buttons */}
                <div className="d-flex flex-wrap gap-3 mt-5 justify-content-center justify-content-md-start">
                    <button style={{ backgroundColor: '#e91e63', color: '#fff', border: 'none', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textTransform: 'uppercase', flex: '1 1 auto', maxWidth: '300px' }}>
                        SUBMIT YOUR EVENT
                    </button>
                    <button style={{ backgroundColor: '#e91e63', color: '#fff', border: 'none', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textTransform: 'uppercase', flex: '1 1 auto', maxWidth: '300px' }}>
                        OUR EVENTS
                    </button>
                    <button style={{ backgroundColor: '#e91e63', color: '#fff', border: 'none', padding: '12px 30px', fontSize: '16px', fontWeight: 'bold', borderRadius: '30px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', cursor: 'pointer', textTransform: 'uppercase', flex: '1 1 auto', maxWidth: '300px' }}>
                        OUR PAST EVENTS
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MoreEvents;
