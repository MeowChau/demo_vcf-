import React from 'react';

const GuestSpeakerRegistration = () => {
    return (
        <div className="guest-speaker-registration-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Header Area */}
                <div className="d-flex justify-content-between align-items-center mb-5 flex-wrap gap-3">
                    <h1 style={{ fontSize: '38px', fontWeight: '300', color: '#3a70b5', margin: '0' }}>
                        Guest Speaker Registration
                    </h1>
                    <button style={{ backgroundColor: 'transparent', color: '#e71c24', border: '2px solid #e71c24', padding: '6px 30px', fontSize: '24px', fontWeight: 'bold', borderRadius: '40px', fontFamily: 'var(--font-montserrat)', textTransform: 'none', cursor: 'default' }}>
                        Our Past Guest Speakers
                    </button>
                </div>

                {/* Form Intro Text */}
                <div className="mb-4" style={{ fontSize: '18px', color: '#555', lineHeight: '1.6' }}>
                    <p className="mb-3">Do you have something to share with ASIA CEO COMMUNITY?</p>
                    <p className="mb-3">Whether you're an adventurer, journalist, historian or expert, ASIA CEO COMMUNITY members would love to hear all about you and what you do.</p>
                    <p>Fill out the form below to go onto our list of available speakers.</p>
                </div>

                {/* Registration Form */}
                <div className="registration-form mb-5 pb-5">
                    <form>
                        <div className="row mb-3">
                            <div className="col-md-6 mb-3 mb-md-0">
                                <input type="text" className="form-control" placeholder="Speak Name *" required style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', borderRadius: '0' }} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Company Name *" required style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', borderRadius: '0' }} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" placeholder="Email *" required style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', borderRadius: '0' }} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Phone" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', borderRadius: '0' }} />
                        </div>
                        <div className="mb-3">
                            <input type="text" className="form-control" placeholder="Topic" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', borderRadius: '0' }} />
                        </div>
                        <div className="mb-4">
                            <textarea className="form-control" placeholder="Presentation Summary" rows="6" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', borderRadius: '0' }}></textarea>
                        </div>
                        <button type="submit" className="btn w-100 text-white font-weight-bold" style={{ backgroundColor: '#4a90e2', padding: '12px', fontSize: '16px', border: 'none', borderRadius: '0' }}>Send</button>
                    </form>
                </div>
                
                {/* Past Speakers */}
                <div className="past-speakers mt-5 pt-4">
                    
                    {/* Speaker 1 */}
                    <div className="row align-items-center mb-5 pb-4">
                        <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                            <h4 style={{ fontWeight: 'bold', color: '#555', fontSize: '18px', marginBottom: '20px' }}>Jan 2017 - Monthly Luncheon Event</h4>
                            <p style={{ color: '#555', fontSize: '16px', marginBottom: '5px' }}>Title: Consul General of Ireland to Hong Kong & Macau</p>
                            <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px' }}>Name: Mr. Peter Ryan</p>
                            
                            <p style={{ color: '#555', fontSize: '15px', lineHeight: '1.6', marginBottom: '20px' }}>
                                A career diplomat, Ryan joined the foreign service more than 20 years ago and moved to Hong Kong August 2014 to take up his first post as a consul general. Since joining the Department of Foreign Affairs and Trade in 1994, Peter has served in Dublin, New York, Singapore, Seoul & Tokyo. He attended Synge Street, Belvedere College and University College Dublin.
                            </p>
                            
                            <p style={{ color: '#555', fontSize: '16px', marginBottom: '0' }}>Topic discussed: Ireland and Hong Kong Investment opportunities 2017</p>
                        </div>
                        <div className="col-lg-5 col-md-6 text-center">
                            <img src="/assets/img/eventsNetworking/075a97_8f91aee3902f4c4ca4cdea733cbc2564~mv2.avif" alt="Mr. Peter Ryan" style={{ width: '100%', maxWidth: '350px', borderRadius: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                    {/* Speaker 2 */}
                    <div className="row align-items-center mb-5 pb-4">
                        <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
                            <h4 style={{ fontWeight: 'bold', color: '#555', fontSize: '18px', marginBottom: '20px' }}>Feb 2017 - Monthly Luncheon Event</h4>
                            <p style={{ color: '#555', fontSize: '16px', marginBottom: '5px' }}>Title: Advisory Board Member of Asia Pacific International Schools Conference & Board member of Direct Subsidy School Council & Primary School Principal</p>
                            <p style={{ color: '#555', fontSize: '16px', marginBottom: '20px' }}>Name: Ms. Eva Charisa Hsu</p>
                            
                            <p style={{ color: '#555', fontSize: '16px', marginBottom: '0' }}>Topic discussed: Finance & Education Industry cooperation opportunities</p>
                        </div>
                        <div className="col-lg-5 col-md-6 text-center">
                            <img src="/assets/img/eventsNetworking/075a97_5fba2de8fb1942dbb3367481c6653b82~mv2.avif" alt="Ms. Eva Charisa Hsu" style={{ width: '100%', maxWidth: '350px', borderRadius: '40px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default GuestSpeakerRegistration;
