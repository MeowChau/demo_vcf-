import React from 'react';

const SubmitAnEvent = () => {
    return (
        <div className="submit-an-event-page pt-80 pb-100" style={{ backgroundColor: '#fff', color: '#333' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                
                {/* Header Area */}
                <div className="text-center mb-5">
                    <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1b3664', margin: '0' }}>SUBMIT YOUR EVENT</h1>
                    <h1 style={{ fontSize: '42px', fontWeight: 'bold', color: '#1b3664', margin: '0' }}>
                        WITH <span style={{ color: '#e67e22' }}>ASIA CEO</span> COMMUNITY
                    </h1>
                </div>

                {/* Form Container */}
                <div className="form-container mb-5 p-5" style={{ border: '1px solid #e0e0e0', borderRadius: '30px', boxShadow: '0 5px 15px rgba(0,0,0,0.05)' }}>
                    <form>
                        <div className="mb-4">
                            <input type="text" className="form-control" placeholder="Company Name" style={{ borderRadius: '0', border: '1px solid #ccc', padding: '12px' }} />
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <input type="text" className="form-control" placeholder="First Name" style={{ borderRadius: '0', border: '1px solid #ccc', padding: '12px' }} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Industry" style={{ borderRadius: '0', border: '1px solid #ccc', padding: '12px' }} />
                            </div>
                        </div>
                        <div className="row mb-4">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <input type="text" className="form-control" placeholder="Mobile Number" style={{ borderRadius: '0', border: '1px solid #ccc', padding: '12px' }} />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className="form-control" placeholder="Email Address" style={{ borderRadius: '0', border: '1px solid #ccc', padding: '12px' }} />
                            </div>
                        </div>
                        <div className="row mb-5">
                            <div className="col-md-6 mb-4 mb-md-0">
                                <input type="text" className="form-control" placeholder="Event Fee" style={{ borderRadius: '0', border: '1px solid #ccc', padding: '12px' }} />
                            </div>
                            <div className="col-md-6">
                                <input type="text" className="form-control" placeholder="Registration Link" style={{ borderRadius: '0', border: '1px solid #ccc', padding: '12px' }} />
                            </div>
                        </div>

                        {/* Date Time Section */}
                        <div className="mb-4">
                            <h5 style={{ color: '#1b3664', fontWeight: 'bold', marginBottom: '15px' }}>Event Start Date & Time:</h5>
                            <div className="row">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="input-group" style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                        <input type="text" className="form-control" placeholder="SELECT A DATE" style={{ border: 'none', padding: '12px', fontWeight: 'bold' }} />
                                        <span className="input-group-text bg-white" style={{ border: 'none' }}><i className="far fa-calendar-alt" style={{ color: '#aaa' }}></i></span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.05)', backgroundColor: '#fff', padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#000' }}>
                                        14:30
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mb-5">
                            <h5 style={{ color: '#1b3664', fontWeight: 'bold', marginBottom: '15px' }}>Event End Date & Time:</h5>
                            <div className="row">
                                <div className="col-md-6 mb-3 mb-md-0">
                                    <div className="input-group" style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.05)' }}>
                                        <input type="text" className="form-control" placeholder="SELECT A DATE" style={{ border: 'none', padding: '12px', fontWeight: 'bold' }} />
                                        <span className="input-group-text bg-white" style={{ border: 'none' }}><i className="far fa-calendar-alt" style={{ color: '#aaa' }}></i></span>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.05)', backgroundColor: '#fff', padding: '12px', textAlign: 'center', fontWeight: 'bold', color: '#000' }}>
                                        14:30
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Upload Poster */}
                        <div className="d-flex align-items-center mb-5 flex-wrap">
                            <h5 style={{ color: '#1b3664', fontWeight: 'bold', marginRight: '30px', marginBottom: '0' }}>Event Poster:</h5>
                            <button type="button" className="btn btn-light" style={{ boxShadow: '0 2px 5px rgba(0,0,0,0.05)', backgroundColor: '#fff', border: 'none', padding: '10px 30px', fontWeight: 'bold' }}>
                                <i className="fas fa-plus" style={{ marginRight: '8px' }}></i> UPLOAD
                            </button>
                        </div>

                        {/* Location and Description */}
                        <div className="mb-0">
                            <input type="text" className="form-control" placeholder="Event Location" style={{ borderRadius: '0', border: '1px solid #555', borderBottom: 'none', padding: '12px' }} />
                            <textarea className="form-control" placeholder="Event Description" rows="8" style={{ borderRadius: '0', border: '1px solid #555', padding: '12px' }}></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center mt-5">
                            <button type="submit" className="btn" style={{ backgroundColor: '#555', color: '#fff', borderRadius: '0', padding: '12px 50px', fontSize: '16px', minWidth: '200px' }}>SUBMIT</button>
                        </div>
                    </form>
                </div>

                {/* Footer Section */}
                <div className="mt-5 pt-4 text-center text-md-start">
                    <h3 className="text-center mb-3" style={{ color: '#1b3664', fontWeight: 'bold', textTransform: 'uppercase' }}>THERE IS ALWAYS A GOOD REASON FOR PARTY</h3>
                    <p className="text-center mb-5" style={{ fontSize: '18px', color: '#555' }}>
                        Reach new audiences and get your event seen. <a href="mailto:ceo@asiaceo.club" style={{ color: '#e74c3c', textDecoration: 'underline' }}>Contact us</a> now!
                    </p>

                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <p style={{ fontSize: '20px', color: '#555', marginBottom: '20px', lineHeight: '1.4' }}>Do you have an upcoming workshop, conference, or party that would be of interest to our members?</p>
                            <p style={{ fontSize: '20px', color: '#555', lineHeight: '1.4' }}>We'll promote your event to our members. ASIA CEO COMMUNITY has several options available to promote your event; ranging from website promotion to distribution through our yearbook, social networks, and newsletters. Please contact us for more information</p>
                        </div>
                        <div className="col-md-6">
                            <img src="/assets/img/eventsNetworking/dadfb09091a94356850ecc528e626098.avif" alt="Party" style={{ width: '100%', borderRadius: '10px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default SubmitAnEvent;
