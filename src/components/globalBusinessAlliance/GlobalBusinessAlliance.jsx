"use client";
import React, { useState } from 'react';

const GlobalBusinessAlliance = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [declaration, setDeclaration] = useState(false);

    const shareOptions = [
        { id: 'website', title: "Website", image: "/assets/img/membersArea/ACC Website.avif", desc: "Available for Chat Group, Standard, Business referral, C-level, & Corporate Members" },
        { id: 'social_media', title: "Social Media", image: "/assets/img/membersArea/Social Media.avif", desc: "Available for Standard, Business referral, C-level, & Corporate Members" },
        { id: 'newsletter', title: "Newsletter", image: "/assets/img/membersArea/AAPoster.avif", desc: "Available for Business referral, C-level, & Corporate Members" },
        { id: 'events', title: "Events", image: "/assets/img/membersArea/Event CxO.avif", desc: "Available for C-level, & Corporate Members" },
        { id: 'magazine', title: "Magazine", image: "/assets/img/membersArea/Magazine2.avif", desc: "Available for Corporate Members" },
    ];

    const toggleOption = (id) => {
        if (selectedOptions.includes(id)) {
            setSelectedOptions(selectedOptions.filter(item => item !== id));
        } else {
            setSelectedOptions([...selectedOptions, id]);
        }
    };

    return (
        <div className="global-business-alliance-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
                    <h2 style={{ color: '#4d4d4d', fontWeight: 'bold', fontSize: '32px' }}>GLOBAL BUSINESS ALLIANCE</h2>
                    <div style={{ minWidth: '200px' }}>
                        <div className="input-group" style={{ border: '1px solid #b3b3ff', borderRadius: '4px', overflow: 'hidden' }}>
                            <input type="text" className="form-control" defaultValue="07/24/2026" style={{ border: 'none', color: '#666', outline: 'none', boxShadow: 'none' }} />
                            <span className="input-group-text" style={{ backgroundColor: '#fff', border: 'none', color: '#b3b3ff' }}>
                                <i className="far fa-calendar-alt"></i>
                            </span>
                        </div>
                    </div>
                </div>

                <div style={{ border: '2px solid #8cb3d9', borderRadius: '15px', padding: '40px', backgroundColor: '#fff' }}>
                    <form onSubmit={(e) => e.preventDefault()}>
                        <div className="row mb-4">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <input type="text" className="form-control" placeholder="Country" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <input type="text" className="form-control" placeholder="Company Name" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                            <div className="col-md-4">
                                <select className="form-select" style={{ border: '1px solid #999', borderRadius: '0', color: '#666' }}>
                                    <option value="">Industry</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-4 mb-3 mb-md-0">
                                <input type="text" className="form-control" placeholder="First Name" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                            <div className="col-md-4 mb-3 mb-md-0">
                                <input type="text" className="form-control" placeholder="Last Name" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Business Title" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-md-8 mb-3 mb-md-0">
                                <input type="email" className="form-control" placeholder="Email Address" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                            <div className="col-md-4">
                                <input type="text" className="form-control" placeholder="Contact No." style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                        </div>

                        <div className="row mb-4">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Website" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                        </div>

                        <div className="mb-4" style={{ border: '1px solid #999' }}>
                            <div style={{ borderBottom: '1px solid #999', padding: '10px 15px', display: 'flex', gap: '15px', alignItems: 'center', color: '#666' }}>
                                <span style={{ fontWeight: 'bold', cursor: 'pointer', color: '#000' }}>B</span>
                                <span style={{ fontStyle: 'italic', cursor: 'pointer', color: '#000', fontWeight: 'bold' }}>I</span>
                                <span style={{ textDecoration: 'underline', cursor: 'pointer', color: '#000', fontWeight: 'bold' }}>U</span>
                                <span style={{ fontSize: '14px', cursor: 'pointer' }}>Normal Text</span>
                                <span style={{ borderLeft: '1px solid #ccc', height: '15px' }}></span>
                                <i className="fas fa-align-left" style={{ cursor: 'pointer' }}></i>
                                <i className="fas fa-list-ol" style={{ cursor: 'pointer' }}></i>
                                <i className="fas fa-list-ul" style={{ cursor: 'pointer' }}></i>
                                <span style={{ borderLeft: '1px solid #ccc', height: '15px' }}></span>
                                <i className="fas fa-link" style={{ cursor: 'pointer' }}></i>
                            </div>
                            <textarea className="form-control" placeholder="Company Background" style={{ border: 'none', borderRadius: '0', minHeight: '200px', resize: 'vertical', outline: 'none', boxShadow: 'none' }}></textarea>
                        </div>

                        <div className="row mb-4">
                            <div className="col-12">
                                <input type="text" className="form-control" placeholder="Other Info" style={{ border: '1px solid #999', borderRadius: '0' }} />
                            </div>
                        </div>

                        <div className="mb-5">
                            <label style={{ fontWeight: 'bold', display: 'block', marginBottom: '15px', color: '#555', fontSize: '18px' }}>Company Logo</label>
                            <button type="button" style={{ cursor: 'pointer', border: '1px solid #eee', backgroundColor: '#fff', color: '#000', padding: '10px 30px', fontWeight: 'bold', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                <i className="fas fa-plus" style={{ marginRight: '8px' }}></i> UPLOAD
                            </button>
                        </div>

                        <h4 style={{ fontWeight: 'bold', marginBottom: '30px', color: '#555' }}>Where do you want to share this promotion?</h4>
                        <div className="row text-center mb-5">
                            {shareOptions.map((option, index) => (
                                <div className="col" key={index} style={{ minWidth: '150px', marginBottom: '20px' }}>
                                    <h5 style={{ color: '#ff4d4d', fontWeight: 'bold', fontSize: '16px', marginBottom: '15px' }}>{option.title}</h5>
                                    <img src={option.image} alt={option.title} style={{ width: '100%', height: '120px', objectFit: 'cover', marginBottom: '15px', border: '1px solid #eee' }} />
                                    <p style={{ fontSize: '12px', color: '#555', minHeight: '60px', marginBottom: '15px', lineHeight: '1.4' }}>{option.desc}</p>
                                    
                                    <div style={{ position: 'relative', margin: '0 auto', width: '80%' }}>
                                        <div style={{ borderTop: '2px solid #40e0d0', position: 'absolute', top: '50%', left: '0', right: '0', zIndex: '1' }}></div>
                                        <div 
                                            onClick={() => toggleOption(option.id)}
                                            style={{ 
                                                width: '24px', 
                                                height: '24px', 
                                                borderRadius: '50%', 
                                                backgroundColor: '#fff', 
                                                border: '2px solid #40e0d0', 
                                                margin: '0 auto', 
                                                position: 'relative', 
                                                zIndex: '2', 
                                                display: 'flex', 
                                                alignItems: 'center', 
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                color: '#40e0d0'
                                            }}
                                        >
                                            {selectedOptions.includes(option.id) && <i className="fas fa-check" style={{ fontSize: '12px' }}></i>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-4 d-flex align-items-start">
                            <div 
                                onClick={() => setDeclaration(!declaration)}
                                style={{ 
                                    width: '24px', 
                                    height: '24px', 
                                    minWidth: '24px',
                                    backgroundColor: declaration ? '#4CAF50' : '#fff', 
                                    border: '1px solid #4CAF50',
                                    display: 'flex', 
                                    alignItems: 'center', 
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    marginRight: '15px',
                                    marginTop: '2px'
                                }}
                            >
                                {declaration && <i className="fas fa-check" style={{ color: '#fff', fontSize: '14px' }}></i>}
                            </div>
                            <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0 }}>
                                Declaration: I declare that the information provided by me on the above form is true and correct to the best of my knowledge and belief. I also confirm that in the event of any information provided by me is not true and incomplete and also in the event of any violation of Government Regulation, ASIA CEO COMMUNITY LIMITED will be well within its right to take necessary action including discontinuation of membership & removing of the promotion post
                            </p>
                        </div>

                        <div className="mb-5">
                            <div style={{ border: '1px solid #ddd', borderRadius: '3px', width: '300px', padding: '10px 15px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', backgroundColor: '#f9f9f9' }}>
                                <div className="d-flex align-items-center">
                                    <div style={{ width: '28px', height: '28px', border: '2px solid #ccc', borderRadius: '2px', backgroundColor: '#fff', marginRight: '10px' }}></div>
                                    <span style={{ fontSize: '14px', color: '#333' }}>I'm not a robot</span>
                                </div>
                                <div className="text-center">
                                    <img src="/assets/img/recaptcha-logo.png" alt="reCAPTCHA" style={{ height: '30px' }} onError={(e) => { e.target.onerror = null; e.target.src = "https://www.gstatic.com/recaptcha/api2/logo_48.png"; }} />
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn w-50" style={{ backgroundColor: '#f06292', color: '#fff', padding: '12px', fontSize: '16px', fontWeight: '500', border: 'none', borderRadius: '4px' }}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GlobalBusinessAlliance;
