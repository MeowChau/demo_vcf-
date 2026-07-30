import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import SocialShareStyle3 from '../utilities/SocialShareStyle3';

const SingleTeam2 = ({ team, isTaller }) => {
    const { id, memberThumb, name, designation } = team

    return (
        <>
            <div className="custom-team-card" style={{ textAlign: 'center', marginBottom: '30px', position: 'relative', width: '277px', display: 'inline-block' }}>
                <div className="thumb" style={{ borderRadius: '15px', overflow: 'hidden', marginBottom: '20px', position: 'relative', display: 'block', width: '100%', maxWidth: '277px', aspectRatio: isTaller ? '277/440' : '277/405', margin: isTaller ? '-35px auto 20px auto' : '0 auto 20px auto' }}>
                    <Image src={memberThumb.includes('/') ? memberThumb : `/assets/img/team/${memberThumb}`} width={277} height={isTaller ? 440 : 405} style={{ objectFit: 'cover', width: '100%', height: '100%', borderRadius: '15px' }} alt="Thumb" />
                    <style>{`
                        .custom-team-card .thumb .social-custom {
                            position: absolute;
                            bottom: -60px;
                            left: 0;
                            width: 100%;
                            background-color: #df0a0a;
                            margin: 0;
                            padding: 15px 0;
                            list-style: none;
                            display: flex;
                            justify-content: center;
                            gap: 45px;
                            transition: all 0.3s ease-in-out;
                            z-index: 10;
                            opacity: 0;
                        }
                        .custom-team-card .thumb:hover .social-custom {
                            bottom: 0;
                            opacity: 1;
                        }
                        .custom-team-card .thumb .social-custom li {
                            display: inline-block;
                            margin: 0;
                        }
                        .custom-team-card .thumb .social-custom li a {
                            color: #ffffff !important;
                            font-size: 16px;
                            transition: all 0.3s ease;
                            display: block;
                        }
                        .custom-team-card .thumb .social-custom li a:hover {
                            opacity: 0.8;
                        }
                    `}</style>
                    <ul className="social-custom">
                        <SocialShareStyle3 />
                    </ul>
                </div>
                <div className="info" style={{ position: 'static', background: 'transparent', padding: '0', boxShadow: 'none' }}>
                    <div className="content">
                        <h4 className="title" style={{ color: '#cc0000', fontWeight: 'bold', fontSize: '16px', textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Montserrat', sans-serif" }}>
                            <Link href={`/team-details/${id}`} style={{ color: 'inherit' }}>{name}</Link>
                        </h4>
                        <span style={{ color: '#555', fontSize: '14px', display: 'block', fontFamily: "'Montserrat', sans-serif" }}>{designation}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleTeam2;