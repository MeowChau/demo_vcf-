import React from 'react';

const AdvertiseWithUs = () => {
    return (
        <div className="advertise-with-us-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Advertising Section */}
                <div className="text-center mb-5">
                    <h1 style={{ color: '#3b71ca', fontSize: '36px', fontWeight: 'normal', marginBottom: '20px' }}>
                        ADVERTISE with ASIA CEO COMMUNITY
                    </h1>
                    <h4 style={{ fontWeight: 'bold', color: '#444', marginBottom: '15px' }}>
                        ASIA CEO COMMUNITY - Main Page
                    </h4>
                    <p style={{ color: '#555', fontSize: '15px', marginBottom: '20px' }}>
                        Advertising on ASIA CEO COMMUNITY helps your businesses achieve your goals.
                    </p>
                    <p style={{ color: '#666', fontSize: '14px', marginBottom: '20px' }}>
                        Advertising Rates (HK Dollar )
                    </p>
                    <div style={{ maxWidth: '100%', overflowX: 'auto' }}>
                        <img src="/assets/img/partnership/075a97_4f7f6bafa622444e82f71a87f249a78c~mv2.avif" alt="Advertising Rates" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }} />
                    </div>
                </div>

                <hr style={{ margin: '60px 0', borderColor: '#eee' }} />

                {/* Social Media Section */}
                <div className="text-center mb-5">
                    <h2 style={{ color: '#d32f2f', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '15px', fontFamily: 'var(--font-montserrat)', letterSpacing: '1px' }}>
                        Our Social Media
                    </h2>
                    <p style={{ color: '#555', fontSize: '15px', marginBottom: '20px' }}>
                        Linkedin post analytics for our Post
                    </p>
                    <div className="mb-4">
                        <img src="/assets/img/partnership/LinkedinFirst.avif" alt="Linkedin Post" style={{ width: '100%', maxWidth: '600px', margin: '0 auto', display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div>
                        <img src="/assets/img/partnership/LinkedAdsData.avif" alt="Linkedin Analytics" style={{ width: '100%', maxWidth: '800px', margin: '0 auto', display: 'block' }} />
                    </div>
                </div>

                <hr style={{ margin: '60px 0', borderColor: '#eee' }} />

                {/* Contact Us Form */}
                <div className="mx-auto" style={{ maxWidth: '700px' }}>
                    <h2 className="text-center mb-4" style={{ color: '#d32f2f', fontSize: '32px', fontWeight: 'bold', textTransform: 'uppercase', fontFamily: 'var(--font-montserrat)', letterSpacing: '1px' }}>
                        CONTACT US
                    </h2>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <input type="text" placeholder="Name *" required style={{ width: '100%', padding: '12px 15px', backgroundColor: '#ebf1fa', border: '1px solid #fff' }} />
                        <input type="email" placeholder="Email *" required style={{ width: '100%', padding: '12px 15px', backgroundColor: '#ebf1fa', border: '1px solid #fff' }} />
                        <input type="text" placeholder="Phone" style={{ width: '100%', padding: '12px 15px', backgroundColor: '#ebf1fa', border: '1px solid #fff' }} />
                        <input type="text" placeholder="Company Name" style={{ width: '100%', padding: '12px 15px', backgroundColor: '#ebf1fa', border: '1px solid #fff' }} />
                        <input type="text" placeholder="Advertise Subject" style={{ width: '100%', padding: '12px 15px', backgroundColor: '#ebf1fa', border: '1px solid #fff' }} />
                        <textarea placeholder="Message" rows="6" style={{ width: '100%', padding: '12px 15px', backgroundColor: '#ebf1fa', border: '1px solid #fff', resize: 'none' }}></textarea>
                        <div className="d-flex justify-content-end mt-2">
                            <button type="submit" style={{ padding: '8px 30px', backgroundColor: '#5b8aed', color: '#fff', border: 'none', fontSize: '15px', cursor: 'pointer', borderRadius: '2px' }}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default AdvertiseWithUs;
