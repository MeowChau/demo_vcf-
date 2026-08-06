import React from 'react';

const YearbookSponsorship = () => {
    return (
        <div className="yearbook-sponsorship-page pt-80 pb-100" style={{ backgroundColor: '#fff', color: '#333' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                
                <h1 style={{ color: '#4b5563', fontSize: '36px', fontWeight: 'bold', marginBottom: '25px', letterSpacing: '0.5px' }}>
                    2023 Yearbook Sponsorship
                </h1>

                <p style={{ color: '#4b5563', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>
                    We would like to offer you a chance to sponsor a page in the ASIA CEO COMMUNITY 2023 yearbook. Your contribution allows you to promote your business and enables us to sell our book at a lower cost to our members. When you sponsor a page we will send you a receipt of payment. Our book is hardcover, full-color, and 140 pages. Yearbooks are distributed in late October. Your business card will be placed at the bottom of a page or we can type the following:<br/>
                    <i style={{ color: '#6b7280' }}>This page is sponsored by ABC Limited.</i>
                </p>

                <p style={{ color: '#4b5563', fontSize: '16px', marginBottom: '35px' }}>
                    Each page is 1,200 HKD to sponsor. Please fill out the information below.
                </p>

                <div className="text-center mb-5">
                    <img src="/assets/img/partnership/315722425_10160532080065050_2181915695294618973_n.avif" alt="Global Directory" style={{ width: '100%', maxWidth: '850px', margin: '0 auto', display: 'block' }} />
                </div>

                {/* Contact Form */}
                <div className="mx-auto" style={{ maxWidth: '850px' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div className="d-flex" style={{ gap: '8px' }}>
                            <input type="text" placeholder="Name *" required style={{ flex: 1, padding: '15px', backgroundColor: '#f3f4f6', border: 'none' }} />
                            <input type="text" placeholder="Company Name *" required style={{ flex: 1, padding: '15px', backgroundColor: '#f3f4f6', border: 'none' }} />
                        </div>
                        <input type="email" placeholder="Email *" required style={{ width: '100%', padding: '15px', backgroundColor: '#f3f4f6', border: 'none' }} />
                        <input type="text" placeholder="Phone" style={{ width: '100%', padding: '15px', backgroundColor: '#f3f4f6', border: 'none' }} />
                        <input type="text" placeholder="Subject" style={{ width: '100%', padding: '15px', backgroundColor: '#f3f4f6', border: 'none' }} />
                        <textarea placeholder="Message" rows="8" style={{ width: '100%', padding: '15px', backgroundColor: '#f3f4f6', border: 'none', resize: 'none' }}></textarea>
                        
                        <div className="mt-2">
                            <button type="submit" style={{ width: '100%', padding: '15px', backgroundColor: '#5b8aed', color: '#fff', border: 'none', fontSize: '16px', cursor: 'pointer', transition: 'background-color 0.3s' }}>
                                Send
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
};

export default YearbookSponsorship;
