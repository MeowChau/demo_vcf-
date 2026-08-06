"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { membersText } from './membersData';
import Link from 'next/link';

const announcementImages = [
    "/assets/img/membersArea/Image-empty-state (2).avif",
    "/assets/img/membersArea/Image-empty-state (3).avif",
    "/assets/img/membersArea/Image-empty-state (4).avif",
    "/assets/img/membersArea/Image-empty-state (5).avif",
    "/assets/img/membersArea/Image-empty-state (6).avif",
    "/assets/img/membersArea/Image-empty-state (7).avif",
    "/assets/img/membersArea/Image-empty-state (8).avif",
    "/assets/img/membersArea/Image-empty-state (9).avif",
    "/assets/img/membersArea/Image-empty-state (10).avif",
    "/assets/img/membersArea/Image-empty-state (11).avif"
];

const renderMembersText = (text) => {
    return text.split('\n').map((line, index) => {
        const trimmed = line.trim();
        if (trimmed.startsWith('Group') || trimmed.startsWith('Weekly New Members') || trimmed.startsWith('Hong Kong') || trimmed.startsWith('United Kingdom') || trimmed.startsWith('Malaysia') || trimmed.startsWith('Singapore') || trimmed.startsWith('Australia') || trimmed.startsWith('United Arab Emirates') || trimmed.startsWith('United States') || trimmed.startsWith('Japan') || trimmed.startsWith('INDIA') || trimmed.startsWith('PAKISTAN') || trimmed.startsWith('TAIWAN')) {
            return <h4 key={index} style={{ color: '#4eb0c9', marginTop: trimmed.startsWith('Group') || trimmed.startsWith('Weekly New Members') ? '40px' : '15px', marginBottom: '5px', fontSize: '20px' }}>{trimmed}</h4>;
        } else if (trimmed.startsWith('*')) {
            return <p key={index} style={{ fontWeight: 'bold', color: '#333', marginBottom: '15px', fontSize: '15px' }}>{trimmed.replace(/\*/g, '')}</p>;
        } else if (trimmed === '') {
            return null;
        } else if (trimmed === 'and more..') {
            return <p key={index} style={{ color: '#666', marginTop: '10px', fontSize: '15px', fontStyle: 'italic' }}>{trimmed}</p>;
        } else {
            return <p key={index} style={{ color: '#555', marginBottom: '3px', fontSize: '14px', lineHeight: '1.5' }}>{trimmed}</p>;
        }
    });
};

const MembersDirectory = () => {
    return (
        <div className="members-directory-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                {/* Title */}
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h2 style={{ color: '#3170b5', fontWeight: 'bold', borderBottom: '3px solid #3170b5', display: 'inline-block', paddingBottom: '5px' }}>MEMBERS DIRECTORY</h2>
                    </div>
                </div>

                {/* Swiper Slider */}
                <div className="row justify-content-center mb-3">
                    <div className="col-lg-12">
                        <Swiper
                            modules={[Autoplay, Navigation]}
                            spaceBetween={20}
                            slidesPerView={1}
                            navigation
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                768: { slidesPerView: 2 },
                                992: { slidesPerView: 2 }
                            }}
                            className="announcement-slider"
                            style={{
                                '--swiper-navigation-color': '#ffffff',
                                '--swiper-navigation-size': '35px',
                                textShadow: '0 0 5px rgba(0,0,0,0.5)'
                            }}
                        >
                            {announcementImages.map((imgSrc, index) => (
                                <SwiperSlide key={index}>
                                    <div className="announcement-card text-center">
                                        <Link href={`/member-directory/${index + 1}`}>
                                            <img src={imgSrc} alt={`Announcement ${index + 1}`} style={{ width: '100%', height: 'auto', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} />
                                        </Link>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                {/* More Members Text */}
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <Link href="#">
                            <h5 style={{ color: '#b34700', fontWeight: 'bold', textDecoration: 'underline' }}>MORE MEMBERS..</h5>
                        </Link>
                    </div>
                </div>

                {/* Chat Group Directory Section */}
                <div className="row mb-5 justify-content-center">
                    <div className="col-lg-8 text-center">
                        <h2 style={{ color: '#3170b5', fontWeight: 'bold', borderBottom: '3px solid #3170b5', display: 'inline-block', paddingBottom: '5px', marginBottom: '30px' }}>CHAT GROUP DIRECTORY</h2>
                        
                        <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mb-4">
                            <select className="form-select" style={{ width: '100%', maxWidth: '400px', border: '1px solid #999', borderRadius: '0', padding: '10px' }}>
                                <option>Weekly New Members</option>
                                <option>Group 82</option>
                                <option>Group 113</option>
                                <option>Group 73</option>
                                <option>Group 62</option>
                                <option>Group 98</option>
                                <option>Group 89</option>
                            </select>
                            <button className="btn" style={{ border: '1px solid #333', backgroundColor: '#fff', padding: '10px 40px', fontWeight: 'bold', width: '200px' }}>Search</button>
                        </div>
                        
                        <div className="d-flex flex-column flex-md-row justify-content-center gap-4">
                            <button style={{ backgroundColor: '#f2e46c', color: '#333', fontWeight: 'bold', padding: '10px 40px', borderRadius: '25px', whiteSpace: 'nowrap', border: 'none', cursor: 'pointer' }}>JOIN CHAT GROUP &gt;</button>
                            <button style={{ backgroundColor: '#f2e46c', color: '#333', fontWeight: 'bold', padding: '10px 40px', borderRadius: '25px', whiteSpace: 'nowrap', border: 'none', cursor: 'pointer' }}>CONTACT MEMBERS &gt;</button>
                        </div>
                    </div>
                </div>

                {/* Members List */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {renderMembersText(membersText)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembersDirectory;
