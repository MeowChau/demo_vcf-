"use client";
import React from 'react';

const ContactOurMembers = () => {
    const inputStyle = {
        backgroundColor: '#f2f2f2',
        border: 'none',
        borderRadius: '0',
        padding: '12px 15px',
        fontSize: '14px',
        color: '#555',
        width: '100%',
        outline: 'none',
        marginBottom: '15px'
    };

    return (
        <div className="contact-our-members-area pt-100 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container">
                <div className="mb-4">
                    <h2 style={{ color: '#4c8bf5', fontSize: '36px', fontWeight: '400', marginBottom: '25px' }}>
                        Contact Our Members
                    </h2>
                </div>

                <div className="row">
                    <div className="col-lg-7 pr-lg-5 mb-5 mb-lg-0">
                        <div style={{ color: '#555', fontSize: '16px', lineHeight: '1.6', marginBottom: '30px' }}>
                            <p className="mb-4">
                                Members can send messages to each other through ASIA CEO COMMUNITY. We encourage open communication between our members but we don't allow our members to use these options to send spam, threats, profanity, or hate speech.
                            </p>
                            <p>
                                Make sure you follow these guidelines. If you don't, you may be subject to a range of actions, including your messages being blocked and suspension of your account.
                            </p>
                        </div>

                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="row">
                                <div className="col-md-6">
                                    <input type="text" placeholder="Name *" style={inputStyle} required />
                                </div>
                                <div className="col-md-6">
                                    <input type="email" placeholder="Email *" style={inputStyle} required />
                                </div>
                            </div>

                            <input type="text" placeholder="Company Name & Job Title" style={inputStyle} />
                            
                            <input type="text" placeholder="Phone" style={inputStyle} />
                            
                            <input type="text" placeholder="Who you would like to contact?" style={inputStyle} />
                            
                            <textarea placeholder="Message" style={{ ...inputStyle, minHeight: '150px', resize: 'vertical' }}></textarea>

                            <button type="submit" className="btn w-100" style={{ backgroundColor: '#4c8bf5', color: '#fff', padding: '12px', fontSize: '16px', fontWeight: '500', border: 'none', borderRadius: '2px', cursor: 'pointer' }}>
                                Send
                            </button>
                        </form>
                    </div>

                    <div className="col-lg-5">
                        <img 
                            src="/assets/img/membersArea/86da6968c96d4516959e0f9cbce5252e.avif" 
                            alt="Members eating" 
                            style={{ width: '100%', height: 'auto', marginBottom: '25px', display: 'block', objectFit: 'cover' }} 
                            onError={(e) => { e.target.onerror = null; e.target.style.display = 'none'; }}
                        />
                        <img 
                            src="/assets/img/membersArea/Business Conference.avif" 
                            alt="Business Meeting" 
                            style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover' }} 
                            onError={(e) => { e.target.onerror = null; e.target.src = '/assets/img/membersArea/Image-empty-state (2).avif'; }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactOurMembers;
