"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';

const cardImages = [
    "/assets/img/membersArea/b0c53e67-88c7-47a9-aae7-d49a9c7e5cb9.jpg",
    "/assets/img/membersArea/c984a759-b12c-472c-9685-df6a2d86215d.jpg",
    "/assets/img/membersArea/f9c04a0a-d62e-4e5d-9ee7-227649743a16.jpg"
];

const JoinUsCards = () => {
    return (
        <div className="join-us-cards-area pb-100">
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h4 style={{ color: '#e67e22', fontWeight: 'bold' }}>ASIA CEO Community - Virtual Membership Card available soon!</h4>
                    </div>
                </div>
                
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                            <Swiper
                            modules={[Autoplay, Pagination]}
                            spaceBetween={30}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            breakpoints={{
                                768: {
                                    slidesPerView: 2,
                                }
                            }}
                            className="card-slider"
                        >
                            {cardImages.map((imgSrc, index) => (
                                <SwiperSlide key={index}>
                                    <div className="card-item text-center">
                                        <img src={imgSrc} alt={`Membership Card ${index + 1}`} style={{ width: '100%', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }} />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* Some CSS to style the slider pagination */}
            <style dangerouslySetInnerHTML={{__html: `
                .card-slider {
                    padding-bottom: 50px;
                    padding-left: 20px;
                    padding-right: 20px;
                }
                .card-slider .swiper-pagination {
                    bottom: 0px !important;
                }
                .card-slider .swiper-pagination-bullet {
                    width: 12px;
                    height: 12px;
                }
                .card-slider .swiper-pagination-bullet-active {
                    background-color: #e67e22;
                }
            `}} />
        </div>
    );
};

export default JoinUsCards;
