import React from 'react';
import Link from 'next/link';

const MemberRequests = () => {
    const requestItems = [
        {
            category: "Hats",
            title: "The Sun-Smart Collection",
            desc: "Click here to edit the text and include the information you would like to feature.",
            img: "/assets/img/membersArea/shutterstock_1898354080.avif"
        },
        {
            category: "Shoes",
            title: "Comfort X Design",
            desc: "Click here to edit the text and include the information you would like to feature.",
            img: "/assets/img/membersArea/shutterstock_1888104232.avif"
        },
        {
            category: "Bags",
            title: "Transport In Style",
            desc: "Click here to edit the text and include the information you would like to feature.",
            img: "/assets/img/membersArea/shutterstock_1804383838-copy.avif"
        }
    ];

    return (
        <div className="member-requests-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="text-center mb-5">
                    <h2 style={{ color: '#1a3b70', fontWeight: 'bold', fontSize: '48px', marginBottom: '20px', textTransform: 'uppercase' }}>
                        Members Requests
                    </h2>
                    <div className="d-flex justify-content-center gap-4">
                        <Link href="#" className="btn" style={{ 
                            backgroundColor: '#f2e46c', 
                            color: '#333', 
                            fontWeight: '600',
                            padding: '10px 30px',
                            borderRadius: '25px',
                            border: '1px solid #e0d050',
                            fontSize: '13px',
                            letterSpacing: '1px'
                        }}>
                            JOIN CHAT GROUP <i className="fas fa-chevron-right ml-1" style={{ fontSize: '10px' }}></i>
                        </Link>
                        <Link href="#" className="btn" style={{ 
                            backgroundColor: '#f2e46c', 
                            color: '#333', 
                            fontWeight: '600',
                            padding: '10px 30px',
                            borderRadius: '25px',
                            border: '1px solid #e0d050',
                            fontSize: '13px',
                            letterSpacing: '1px'
                        }}>
                            CONTACT MEMBERS <i className="fas fa-chevron-right ml-1" style={{ fontSize: '10px' }}></i>
                        </Link>
                    </div>
                </div>

                <div className="row justify-content-center mb-5">
                    {requestItems.map((item, index) => (
                        <div className="col-lg-4 col-md-6 mb-5" key={index}>
                            <div className="text-center">
                                <div style={{ position: 'relative', marginBottom: '30px' }}>
                                    <div style={{ 
                                        width: '100%', 
                                        paddingBottom: '100%', 
                                        position: 'relative', 
                                        overflow: 'hidden' 
                                    }}>
                                        <img 
                                            src={item.img} 
                                            alt={item.category} 
                                            style={{ 
                                                position: 'absolute', 
                                                top: 0, 
                                                left: 0, 
                                                width: '100%', 
                                                height: '100%', 
                                                objectFit: 'cover' 
                                            }} 
                                        />
                                    </div>
                                    <div style={{ 
                                        position: 'absolute',
                                        bottom: '-20px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        backgroundColor: '#fff',
                                        border: '1px solid #ccc',
                                        padding: '8px 30px',
                                        minWidth: '120px',
                                        zIndex: 2
                                    }}>
                                        <span style={{ color: '#666', fontSize: '13px', letterSpacing: '1px' }}>{item.category}</span>
                                    </div>
                                </div>
                                
                                <h4 style={{ fontWeight: 'bold', fontSize: '18px', color: '#111', marginBottom: '15px', marginTop: '40px' }}>
                                    {item.title}
                                </h4>
                                <p style={{ color: '#777', fontSize: '13px', lineHeight: '1.8', marginBottom: '25px', padding: '0 20px' }}>
                                    {item.desc}
                                </p>
                                
                                <Link href="#" className="btn" style={{ 
                                    backgroundColor: '#333', 
                                    color: '#fff', 
                                    fontSize: '12px',
                                    padding: '8px 25px',
                                    borderRadius: '0',
                                    fontWeight: 'bold'
                                }}>
                                    Read More <i className="fas fa-chevron-right ml-1" style={{ fontSize: '10px' }}></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row justify-content-center mt-4">
                    <div className="col-lg-10">
                        <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
                            <Link href="#" className="btn w-100" style={{ 
                                backgroundColor: '#162e54', 
                                color: '#fff', 
                                border: '1px solid #162e54',
                                position: 'relative',
                                padding: '15px',
                                fontWeight: '500',
                                letterSpacing: '1px'
                            }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '3px', 
                                    left: '3px', 
                                    right: '3px', 
                                    bottom: '3px', 
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    pointerEvents: 'none'
                                }}></div>
                                SUBMIT YOUR REQUEST
                            </Link>
                            
                            <Link href="#" className="btn w-100" style={{ 
                                backgroundColor: '#162e54', 
                                color: '#fff', 
                                border: '1px solid #162e54',
                                position: 'relative',
                                padding: '15px',
                                fontWeight: '500',
                                letterSpacing: '1px'
                            }}>
                                <div style={{ 
                                    position: 'absolute', 
                                    top: '3px', 
                                    left: '3px', 
                                    right: '3px', 
                                    bottom: '3px', 
                                    border: '1px solid rgba(255,255,255,0.4)',
                                    pointerEvents: 'none'
                                }}></div>
                                JOIN ASIA CEO COMMUNITY
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemberRequests;
