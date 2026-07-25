import React from 'react';

const CiosOutlookForTech = () => {
    const btnStyleOrange = {
        background: 'linear-gradient(to bottom, #f59c25, #df7811)',
        color: '#fff',
        border: '1px solid #c96b0d',
        borderRadius: '4px',
        padding: '10px 50px',
        margin: '0 15px 15px',
        fontSize: '22px',
        fontFamily: '"Pacifico", "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer'
    };

    const btnStyleBlue = {
        background: 'linear-gradient(to bottom, #72baef, #439ae0)',
        color: '#fff',
        border: '1px solid #3388cd',
        borderRadius: '4px',
        padding: '10px 50px',
        margin: '0 15px 15px',
        fontSize: '22px',
        fontFamily: '"Pacifico", "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        cursor: 'pointer'
    };

    return (
        <div className="cios-outlook-page pt-80 pb-100" style={{ backgroundColor: '#fcfcfc', color: '#333' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                
                {/* Title */}
                <h1 className="text-center mb-5" style={{ color: '#555', fontSize: '32px', fontWeight: '400', textTransform: 'uppercase' }}>
                    CIO'S OUTLOOK FOR TECH 2021
                </h1>

                {/* Poster Image */}
                <div className="poster-image mb-5 text-center">
                    <img src="/assets/img/leadershipWorkshops/Tech ACC & KPMG.avif" alt="CIOs Outlook for Tech 2021" style={{ width: '100%', display: 'inline-block', boxShadow: '0 2px 10px rgba(0,0,0,0.05)' }} />
                </div>

                {/* Video Embed */}
                <div className="video-section mb-5 text-center">
                    <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', margin: '0 auto', boxShadow: '0 2px 10px rgba(0,0,0,0.05)', backgroundColor: '#000' }}>
                        <iframe 
                            src="https://www.youtube.com/embed/jvgdPS-xyjA" 
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} 
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowFullScreen
                            title="CIOs Outlook for Tech 2021 Video"
                        ></iframe>
                    </div>
                </div>

                {/* Contact Text */}
                <div className="contact-text text-center mb-5" style={{ fontSize: '15px', color: '#555', marginTop: '40px' }}>
                    <p style={{ marginBottom: '5px' }}>If you have any questions regarding our Event or would like to sponsor, please contact us via</p>
                    <a href="mailto:ceo@asiaceo.club" style={{ color: '#333', textDecoration: 'underline' }}>ceo@asiaceo.club</a>
                </div>

                {/* Buttons */}
                <div className="action-buttons d-flex justify-content-center flex-wrap mb-5 pb-4">
                    <button style={btnStyleOrange}>Join us Now!</button>
                    <button style={btnStyleBlue}>Partnership</button>
                    <button style={btnStyleBlue}>Sponsorship</button>
                </div>

                {/* Testimonials */}
                <div className="testimonials-section mt-5 pt-3">
                    <h2 style={{ fontFamily: '"Pacifico", "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif', fontSize: '42px', color: '#297fb8', marginBottom: '10px', marginLeft: '10px' }}>Testimonials</h2>
                    
                    <div className="testimonial-slider position-relative text-center d-flex align-items-center justify-content-center" style={{ backgroundColor: '#8a8a8a', padding: '0', minHeight: '300px' }}>
                        {/* Mock left arrow */}
                        <div style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', padding: '30px 15px', cursor: 'pointer', zIndex: 2 }}>
                            <i className="fas fa-chevron-left" style={{ fontSize: '20px' }}></i>
                        </div>
                        
                        <img src="/assets/img/leadershipWorkshops/075a97_3c9fc50be87440acb5565fdfb2b1046d~mv2.avif" alt="Testimonial from Belinda Wong" style={{ maxWidth: '600px', width: '90%', display: 'block', margin: '0 auto', padding: '40px 0' }} />
                        
                        {/* Mock right arrow */}
                        <div style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', backgroundColor: 'rgba(0,0,0,0.4)', color: '#fff', padding: '30px 15px', cursor: 'pointer', zIndex: 2 }}>
                            <i className="fas fa-chevron-right" style={{ fontSize: '20px' }}></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CiosOutlookForTech;
