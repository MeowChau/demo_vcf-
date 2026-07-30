import React from 'react';

const Publications = () => {
    return (
        <div className="publications-page pt-80 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Title */}
                <h1 style={{ color: '#555', fontSize: '36px', fontWeight: 'bold', marginBottom: '30px' }}>
                    OUR PUBLICATIONS
                </h1>

                {/* Pill Buttons */}
                <div className="row mb-5">
                    <div className="col-md-4 mb-3">
                        <button style={{
                            width: '100%',
                            background: 'linear-gradient(to bottom, #7db9e8 0%, #3e9ce3 100%)',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            padding: '10px 0',
                            fontSize: '20px',
                            fontFamily: "'Dancing Script', cursive, sans-serif"
                        }}>
                            Join Us
                        </button>
                    </div>
                    <div className="col-md-4 mb-3">
                        <button style={{
                            width: '100%',
                            background: 'linear-gradient(to bottom, #7db9e8 0%, #3e9ce3 100%)',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            padding: '10px 0',
                            fontSize: '20px',
                            fontFamily: "'Dancing Script', cursive, sans-serif"
                        }}>
                            Upcoming Parties
                        </button>
                    </div>
                    <div className="col-md-4 mb-3">
                        <button style={{
                            width: '100%',
                            background: 'linear-gradient(to bottom, #7db9e8 0%, #3e9ce3 100%)',
                            border: 'none',
                            borderRadius: '5px',
                            color: '#fff',
                            padding: '10px 0',
                            fontSize: '20px',
                            fontFamily: "'Dancing Script', cursive, sans-serif"
                        }}>
                            Sponsorship
                        </button>
                    </div>
                </div>

                {/* Magazine List */}
                <div className="magazine-list mb-5">
                    
                    {/* Venture Capitalist */}
                    <div className="row mb-4 align-items-start">
                        <div className="col-md-3 col-sm-4 mb-3">
                            <img src="/assets/img/publications/394937632_10161287901920050_7650544904442014948_n (1).avif" alt="Venture Capitalist Magazine" style={{ width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div className="col-md-9 col-sm-8">
                            <h3 style={{ color: '#555', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Venture Capitalist Magazine</h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                                Unleash your investment potential! VC Magazine is your gateway to the world of venture capital. Explore market insights, funding strategies, and profiles of game-changing startups. Whether you're an investor, founder, or curious enthusiast, subscribing to VC Magazine opens doors to lucrative opportunities. Join the VC community
                            </p>
                        </div>
                    </div>

                    {/* Csuite */}
                    <div className="row mb-4 align-items-start">
                        <div className="col-md-3 col-sm-4 mb-3">
                            <img src="/assets/img/publications/1 (1).avif" alt="Csuite Magazine" style={{ width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div className="col-md-9 col-sm-8">
                            <h3 style={{ color: '#555', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Csuite Magazine</h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                                Elevate your leadership game! Csuite Magazine is your compass in the corporate world. Discover thought-provoking articles on leadership, organizational culture, and disruptive innovation. From C-suite executives to aspiring managers, our content empowers you to lead with impact. Don't miss out
                            </p>
                        </div>
                    </div>

                    {/* Founder */}
                    <div className="row mb-4 align-items-start">
                        <div className="col-md-3 col-sm-4 mb-3">
                            <img src="/assets/img/publications/1 (2).avif" alt="Founder Magazine" style={{ width: '100%', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }} />
                        </div>
                        <div className="col-md-9 col-sm-8">
                            <h3 style={{ color: '#555', fontSize: '24px', fontWeight: 'bold', marginBottom: '15px' }}>Founder Magazine</h3>
                            <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6' }}>
                                A beacon for visionary entrepreneurs! Dive into exclusive interviews with trailblazing founders, in-depth analyses of industry trends, and success stories that inspire. Whether you're a startup enthusiast or a seasoned business leader, Founder Magazine equips you with the knowledge and strategies to thrive in today's dynamic landscape.
                            </p>
                        </div>
                    </div>

                </div>

                {/* Subscribe Form */}
                <div className="mx-auto mt-5" style={{ maxWidth: '500px' }}>
                    <div style={{ backgroundColor: '#4a90e2', padding: '15px', position: 'relative' }}>
                        <h4 style={{ color: '#fff', fontSize: '18px', margin: '0 0 10px 0', fontWeight: 'normal' }}>Subscribe for Updates</h4>
                        <div style={{ display: 'flex', backgroundColor: '#fff2df', padding: '0' }}>
                            <input type="email" placeholder="Email" style={{ flex: 1, border: 'none', padding: '10px 15px', fontSize: '14px', outline: 'none' }} />
                        </div>
                        <div className="mt-2 text-right" style={{ textAlign: 'right' }}>
                            <button style={{ backgroundColor: '#555', color: '#fff', border: 'none', padding: '8px 20px', fontSize: '14px', cursor: 'pointer' }}>
                                Subscribe Now
                            </button>
                        </div>
                        
                        {/* Little decorative triangles on bottom corners */}
                        <div style={{ position: 'absolute', bottom: '-8px', left: '0', width: '0', height: '0', borderTop: '8px solid #3366a3', borderRight: '8px solid transparent' }}></div>
                        <div style={{ position: 'absolute', bottom: '-8px', right: '0', width: '0', height: '0', borderTop: '8px solid #3366a3', borderLeft: '8px solid transparent' }}></div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Publications;
