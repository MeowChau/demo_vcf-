"use client"
import React, { useState } from 'react';
import Link from 'next/link';

const MemberRequests = () => {
    const [rating, setRating] = useState(4);
    const [hoverRating, setHoverRating] = useState(0);

    const handleForm = (event) => {
        event.preventDefault();
        event.target.reset();
        alert("Form submitted!");
    }

    return (
        <div className="mentoring-area pt-100 pb-100 bg-gray">
            <div className="container">
                <div className="text-center mb-50">
                    <h2 className="title text-uppercase font-weight-bold">
                        Mentoring Requests
                    </h2>
                    <p style={{ color: '#666', fontSize: '16px', maxWidth: '700px', margin: '0 auto' }}>
                        Create a new mentoring request to solve your business problems, or leave a review for completed sessions.
                    </p>
                </div>

                <div className="row">
                    {/* Left Column: Pain Point Form */}
                    <div className="col-lg-6 mb-5">
                        <div className="mentoring-form-box contact-style-one-info" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', height: '100%' }}>
                            <h3 className="text-primary" style={{ fontWeight: '800', marginBottom: '35px' }}><i className="fas fa-hands-helping mr-2 text-warning"></i> Report a Problem (Pain Point)</h3>
                            <form className="contact-form" onSubmit={handleForm}>
                                <div className="row mb-4">
                                    <div className="col-lg-6 form-group mb-4 mb-lg-0">
                                        <input type="text" className="form-control" placeholder="Full Name *" required />
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <input type="text" className="form-control" placeholder="Company / Position *" required />
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-lg-6 form-group mb-4 mb-lg-0">
                                        <select className="form-control" required style={{ paddingLeft: '15px' }}>
                                            <option value="">-- Select an area for support --</option>
                                            <option value="marketing">Marketing & Sales</option>
                                            <option value="operation">Operations</option>
                                            <option value="finance">Finance & Fundraising</option>
                                            <option value="hr">Human Resources (HR)</option>
                                            <option value="strategy">General Strategy</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-6 form-group">
                                        <select className="form-control" required style={{ paddingLeft: '15px' }}>
                                            <option value="">-- Urgency Level --</option>
                                            <option value="normal">Normal (1-2 weeks)</option>
                                            <option value="urgent">Urgent (Within this week)</option>
                                            <option value="very_urgent">Very Urgent (Immediately)</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-lg-12 form-group comments">
                                        <textarea className="form-control" placeholder="Describe your pain point in detail... *" rows="4" required></textarea>
                                    </div>
                                </div>
                                <div className="row mb-4">
                                    <div className="col-lg-12 form-group">
                                        <label style={{ fontSize: '14px', color: '#333', marginBottom: '8px', display: 'block', fontWeight: '600' }}><i className="fas fa-paperclip mr-2"></i> Attachment (if any)</label>
                                        <input type="file" className="form-control" style={{ paddingTop: '10px' }} />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-theme effect btn-md w-100">
                                            SUBMIT MENTORING REQUEST
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right Column: Follow-up Form */}
                    <div className="col-lg-6 mb-5">
                        <div className="mentoring-form-box contact-style-one-info" style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', height: '100%' }}>
                            <h3 className="text-primary" style={{ fontWeight: '800', marginBottom: '35px' }}><i className="fas fa-star mr-2 text-warning"></i> Mentoring Session Review (Follow-up)</h3>
                            <form className="contact-form" onSubmit={handleForm}>
                                <div className="row mb-4">
                                    <div className="col-lg-12 form-group">
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', fontSize: '15px', color: '#444' }}>Select recent mentoring session *</label>
                                        <select className="form-control" required style={{ paddingLeft: '15px' }}>
                                            <option value="">-- Select Mentor you met --</option>
                                            <option value="1">20/10/2026 - Mr. John Doe (Marketing Strategy)</option>
                                            <option value="2">15/09/2026 - Ms. Jane Smith (Finance)</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-lg-12 form-group">
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '10px', fontSize: '15px', color: '#444' }}>How do you rate this mentoring session? *</label>
                                        <div className="star-rating" style={{ display: 'flex', gap: '8px', fontSize: '24px', cursor: 'pointer' }}>
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <i 
                                                    key={star}
                                                    className={star <= (hoverRating || rating) ? "fas fa-star text-warning" : "far fa-star text-warning"}
                                                    onMouseEnter={() => setHoverRating(star)}
                                                    onMouseLeave={() => setHoverRating(0)}
                                                    onClick={() => setRating(star)}
                                                ></i>
                                            ))}
                                            <span style={{ fontSize: '15px', color: '#555', marginLeft: '15px', lineHeight: '1.8' }}>
                                                {rating}/5 {rating >= 4 ? 'Good' : rating === 3 ? 'Average' : 'Poor'}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row mb-4">
                                    <div className="col-lg-12 form-group comments mt-3">
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px', color: '#444' }}>Key Takeaways</label>
                                        <textarea className="form-control" placeholder="What did you learn after the session?" rows="2"></textarea>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-lg-12 form-group comments">
                                        <label style={{ display: 'block', fontWeight: '600', marginBottom: '8px', fontSize: '15px', color: '#444' }}>Additional feedback for Mentor or Organizers</label>
                                        <textarea className="form-control" placeholder="Leave a message..." rows="2"></textarea>
                                    </div>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-lg-12 form-group d-flex align-items-center">
                                        <input type="checkbox" style={{ width: '18px', height: '18px', marginRight: '10px', marginTop: '0' }} />
                                        <label style={{ fontWeight: '500', color: '#444', fontSize: '15px', margin: '0' }}>I would like to schedule a follow-up with this Mentor</label>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-lg-12">
                                        <button type="submit" className="btn btn-theme effect btn-md w-100">
                                            SUBMIT REVIEW
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberRequests;
