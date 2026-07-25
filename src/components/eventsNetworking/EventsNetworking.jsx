import React from 'react';

const EventsNetworking = () => {
    return (
        <div className="events-networking-page pt-100 pb-100" style={{ backgroundColor: '#fff', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                <h1 className="text-center mb-5" style={{ color: '#d12f36', fontSize: '38px', fontWeight: 'bold', fontFamily: 'Impact, sans-serif', letterSpacing: '1px' }}>
                    Upcoming Events
                </h1>

                <div className="row">
                    {/* Event 1 */}
                    <div className="col-lg-4 col-md-6 mb-5 text-center px-3">
                        <img src="/assets/img/eventsNetworking/ASIA CEO DEC 2022 (91)_HEIC.avif" alt="Event 1" style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '20px' }} />
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <img src="https://flagcdn.com/w80/hk.png" alt="Hong Kong" style={{ width: '45px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '4px' }} />
                            <span style={{ color: '#d12f36', fontWeight: '500', fontSize: '15px' }}>23th May, 2025 | Friday</span>
                        </div>
                        <p style={{ color: '#555', fontSize: '15px', marginBottom: '20px' }}>9:30pm - 11:30pm</p>
                        <div style={{ minHeight: '120px' }}>
                            <h4 style={{ color: '#2574b3', fontSize: '16px', fontWeight: 'bold', lineHeight: '1.5', margin: 0 }}>
                                ASEAN MARKET SERIES<br/>VIETNAM<br/>- Economic Trends &<br/>Market Opportunities
                            </h4>
                            <p style={{ color: '#777', fontSize: '14px', marginTop: '5px' }}>(NETWORKING EVENT)</p>
                        </div>
                        <button style={{ backgroundColor: '#3ea1eb', color: '#fff', border: 'none', borderRadius: '25px', padding: '10px 35px', fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>
                            Register Now
                        </button>
                    </div>

                    {/* Event 2 */}
                    <div className="col-lg-4 col-md-6 mb-5 text-center px-3">
                        <img src="/assets/img/eventsNetworking/Yacht Deck.avif" alt="Event 2" style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '20px' }} />
                        <div className="d-flex align-items-center justify-content-center mb-3">
                            <img src="https://flagcdn.com/w80/sg.png" alt="Singapore" style={{ width: '45px', height: '30px', objectFit: 'cover', marginRight: '10px', borderRadius: '4px' }} />
                            <span style={{ color: '#d12f36', fontWeight: '500', fontSize: '15px' }}>23rd July, 2025 | Wednesday</span>
                        </div>
                        <p style={{ color: '#555', fontSize: '15px', marginBottom: '20px' }}>2:00pm - 5:00pm</p>
                        <div style={{ minHeight: '120px' }}>
                            <h4 style={{ color: '#2574b3', fontSize: '16px', fontWeight: 'bold', lineHeight: '1.5', margin: 0 }}>
                                Leadership in the Age of<br/>Disruption<br/>-- How CEOs can adapt to<br/>rapid change.
                            </h4>
                            <p style={{ color: '#777', fontSize: '14px', marginTop: '5px' }}>(NETWORKING EVENT)</p>
                        </div>
                        <button style={{ backgroundColor: '#3ea1eb', color: '#fff', border: 'none', borderRadius: '25px', padding: '10px 35px', fontWeight: 'bold', fontSize: '14px', marginTop: '10px' }}>
                            Register Now
                        </button>
                    </div>

                    {/* Event 3 */}
                    <div className="col-lg-4 col-md-6 mb-5 text-center px-3">
                        <img src="/assets/img/eventsNetworking/Dinner Party.avif" alt="Event 3" style={{ width: '100%', height: '240px', objectFit: 'cover', marginBottom: '0', display: 'block' }} />
                        <div style={{ border: '2px solid #e67e22', borderTop: 'none', padding: '25px 15px', minHeight: '275px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                            <h4 style={{ color: '#d12f36', fontSize: '16px', fontWeight: 'bold', margin: '0 0 20px 0', lineHeight: '1.4' }}>
                                ASIA CEO COMMUNITY - 10th Year<br/>Anniversary Gala Dinner<br/>28th November, 2025
                            </h4>
                            <p style={{ color: '#555', fontSize: '15px', marginBottom: '15px' }}>6:00pm - 10:00pm</p>
                            <p style={{ color: '#777', fontSize: '14px', marginBottom: '25px', lineHeight: '1.5' }}>
                                We are thrilled to invite you to the 10th Year Anniversary Gala Dinner as we commemorate a decade of excellence, leadership, and collaboration.
                            </p>
                            <div>
                                <button style={{ backgroundColor: '#de2a32', color: '#fff', border: 'none', borderRadius: '25px', padding: '10px 35px', fontWeight: 'bold', fontSize: '14px', textTransform: 'uppercase' }}>
                                    REGISTER NOW
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventsNetworking;
