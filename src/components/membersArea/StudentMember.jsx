import React from 'react';
import Link from 'next/link';

const StudentMember = () => {
    return (
        <div className="student-member-area pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div style={{ backgroundColor: '#f5d6b3', borderRadius: '15px', padding: '50px', textAlign: 'center' }}>
                            <h2 style={{ fontFamily: '"Dancing Script", cursive, sans-serif', color: '#0056b3', fontSize: '42px', marginBottom: '20px' }}>
                                Student Member
                            </h2>
                            
                            <p style={{ color: '#555', fontSize: '16px', maxWidth: '600px', margin: '0 auto 30px auto' }}>
                                Students can register here for a free internships.com account, where they can access and apply for the latest internship job listings.
                            </p>

                            <div style={{ marginBottom: '30px' }}>
                                <img 
                                    src="/assets/img/membersArea/06f3622f4e8e4ae09430370bcc7117fc.avif" 
                                    alt="Student Member" 
                                    style={{ maxWidth: '100%', height: 'auto', borderRadius: '5px' }} 
                                />
                            </div>

                            <Link href="/contact-us" className="btn" style={{ backgroundColor: '#e91e63', color: '#fff', padding: '12px 40px', fontSize: '18px', fontWeight: 'bold', borderRadius: '25px', textTransform: 'none' }}>
                                Free Student Member Registration
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentMember;
