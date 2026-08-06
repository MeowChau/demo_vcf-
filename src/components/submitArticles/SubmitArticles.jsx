import React from 'react';
import Link from 'next/link';

const SubmitArticles = () => {
    return (
        <div className="submit-articles-page pt-80 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '1000px' }}>
                
                {/* Introduction Section */}
                <div className="text-center mb-5">
                    <h1 style={{ color: '#555', fontSize: '36px', marginBottom: '20px', fontWeight: '400' }}>
                        CEO Bloggers
                    </h1>
                    <p style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', maxWidth: '800px', margin: '0 auto 40px auto' }}>
                        A CEO is almost always the best single human asset a company has, particularly start-ups and smaller companies. Yet many businesses hide their top asset behind a marketing curtain. A short website bio, usually without contact information, makes most CEOs appear inaccessible. If your goal is to be a customer-facing and customer-focused organization, a CEO blog can create a public face for a company. Showcasing your company's personality can go a long way toward defining your values.
                    </p>
                    <div className="d-flex justify-content-center gap-3 mb-5" style={{ flexWrap: 'nowrap', overflowX: 'auto' }}>
                        <Link href="#" className="btn rounded-0 px-4 py-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff', border: '1px solid #666', color: '#555', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px', whiteSpace: 'nowrap', flex: 1, maxWidth: '250px' }}>VIEW ALL ARTICLES</Link>
                        <Link href="#" className="btn rounded-0 px-4 py-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff', border: '1px solid #666', color: '#555', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px', whiteSpace: 'nowrap', flex: 1, maxWidth: '250px' }}>SUBMIT YOUR ARTICLE</Link>
                        <Link href="#" className="btn rounded-0 px-4 py-3 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#fff', border: '1px solid #666', color: '#555', fontSize: '13px', fontWeight: 'bold', letterSpacing: '1px', whiteSpace: 'nowrap', flex: 1, maxWidth: '250px' }}>JOIN US</Link>
                    </div>
                </div>

                {/* Form Section */}
                <div className="mb-5">
                    <h2 style={{ color: '#555', fontSize: '30px', marginBottom: '15px', fontWeight: '400' }}>
                        Submit Your Article
                    </h2>
                    <p style={{ color: '#555', fontSize: '15px', marginBottom: '30px' }}>
                        Please provide the following contact information and we will follow up with you soon.
                    </p>

                    <div className="row">
                        <div className="col-lg-7 mb-4">
                            <form>
                                <div className="row mb-3">
                                    <div className="col-md-6 pr-md-2 mb-3 mb-md-0">
                                        <input type="text" className="form-control" placeholder="Name *" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} required />
                                    </div>
                                    <div className="col-md-6 pl-md-2">
                                        <input type="text" className="form-control" placeholder="Company Name *" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} required />
                                    </div>
                                </div>
                                <div className="form-group mb-3">
                                    <input type="email" className="form-control" placeholder="Email *" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} required />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="tel" className="form-control" placeholder="Phone" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} />
                                </div>
                                <div className="form-group mb-3">
                                    <input type="text" className="form-control" placeholder="Topic that you would like to talk about" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px' }} />
                                </div>
                                <div className="form-group mb-3">
                                    <textarea className="form-control" placeholder="Summary of the article" rows="5" style={{ backgroundColor: '#f5f5f5', border: 'none', padding: '12px 15px', fontSize: '14px', resize: 'none' }}></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary w-100" style={{ backgroundColor: '#4a90e2', border: 'none', padding: '12px', fontSize: '16px', fontWeight: '500' }}>
                                    Send
                                </button>
                            </form>
                        </div>
                        <div className="col-lg-5 mb-4 text-center">
                            <img 
                                src="/assets/img/aboutUs/1b6426a353dc42a08e864660ae82d1a1.avif" 
                                alt="Submit Article Graph" 
                                style={{ width: '100%', maxWidth: '350px', borderRadius: '20px', objectFit: 'cover' }} 
                            />
                        </div>
                    </div>
                </div>

                {/* Contact Info Box */}
                <div className="row text-center mt-4">
                    <div className="col-md-6 mb-4 mb-md-0 d-flex flex-column align-items-center justify-content-center">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                            <i className="fas fa-envelope-open-text" style={{ fontSize: '35px', color: '#885e3a', marginRight: '15px' }}></i>
                            <h3 style={{ fontSize: '24px', fontWeight: '600', margin: 0, color: '#000' }}>EMAIL US:</h3>
                        </div>
                        <a href="mailto:ceo@asiaceo.club" style={{ fontSize: '22px', color: '#3366cc', textDecoration: 'none', marginLeft: '50px' }}>ceo@asiaceo.club</a>
                    </div>
                    <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '5px' }}>
                            <i className="fab fa-whatsapp" style={{ fontSize: '35px', color: '#d99d6a', marginRight: '15px' }}></i>
                            <h3 style={{ fontSize: '24px', fontWeight: '600', margin: 0, color: '#000' }}>CALL US:</h3>
                        </div>
                        <a href="tel:+85221935057" style={{ fontSize: '22px', color: '#3366cc', textDecoration: 'none', marginLeft: '50px' }}>+852 2193 5057</a>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SubmitArticles;
