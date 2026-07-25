import React from 'react';
import Link from 'next/link';

const ReferralProgram = () => {
    return (
        <div className="referral-program-page" style={{ 
            backgroundImage: 'url("/assets/img/partnership/Referrals program.avif")', 
            backgroundSize: 'cover', 
            backgroundPosition: 'center', 
            minHeight: '80vh', 
            display: 'flex', 
            alignItems: 'center' 
        }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-8">
                        <div className="bg-white" style={{ padding: '60px 50px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                            <h1 style={{ fontSize: '42px', fontWeight: 'normal', color: '#333', lineHeight: '1.2', marginBottom: '20px' }}>
                                Get 100 points for each<br />friend you refer
                            </h1>
                            <p style={{ fontSize: '18px', color: '#555', marginBottom: '30px' }}>
                                Get special perks for you and your friends
                            </p>
                            
                            <ol style={{ paddingLeft: '20px', color: '#444', fontSize: '15px', lineHeight: '1.8', marginBottom: '40px' }}>
                                <li style={{ paddingLeft: '10px' }}>Give your friends 500 points.</li>
                                <li style={{ paddingLeft: '10px' }}>Get 100 points for each friend who buys a plan.</li>
                            </ol>
                            
                            <Link href="#" className="btn btn-primary" style={{ backgroundColor: '#4a90e2', borderColor: '#4a90e2', padding: '12px 30px', fontSize: '15px', fontWeight: '500', borderRadius: '3px' }}>
                                Log in to refer
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReferralProgram;
