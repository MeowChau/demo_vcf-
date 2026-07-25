"use client"
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Keyboard, Navigation } from 'swiper/modules';

const testimonialData = [
    {
        id: 1,
        name: "Horace Ma",
        title: "CFO of S. Culture International Holdings Limited",
        time: "1d",
        text: "Thanks Gary for organising the lunch. Very good catch-up with old friends and sharing with new acquaintances.",
        image: "/assets/img/membersArea/075a97_7744562be1ac4affaa348580cb6b2f62~mv2.avif"
    },
    {
        id: 2,
        name: "Thomas Jackson",
        title: "Founder - Bayes Digital Solutions",
        time: "1h",
        text: "Thanks for organizing Gary Lam (Master of Applied finance), it was good to meet the group and i look forward to some followup and future events.",
        image: "/assets/img/membersArea/075a97_7744562be1ac4affaa348580cb6b2f62~mv2.avif"
    }
];

const CustomTestimonial = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="custom-testimonial-area pb-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10" style={{ position: 'relative', overflow: 'hidden' }}>
                        {/* Gray side blocks */}
                        <div 
                            ref={prevRef}
                            className="custom-prev" 
                            style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '100px', backgroundColor: '#a3a3a3', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        >
                            <div style={{ backgroundColor: '#4a4a4a', color: '#fff', width: '40px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-chevron-left"></i>
                            </div>
                        </div>
                        
                        <div 
                            ref={nextRef}
                            className="custom-next" 
                            style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '100px', backgroundColor: '#a3a3a3', zIndex: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                        >
                            <div style={{ backgroundColor: '#4a4a4a', color: '#fff', width: '40px', height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <i className="fas fa-chevron-right"></i>
                            </div>
                        </div>

                        <div style={{ position: 'relative', zIndex: 5, padding: '0 100px' }}>
                <Swiper
                    modules={[Keyboard, Autoplay, Navigation]}
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    slidesPerView={1}
                    spaceBetween={30}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    keyboard={{ enabled: true }}
                >
                    {testimonialData.map((testimonial) => (
                        <SwiperSlide key={testimonial.id}>
                            <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '5px', display: 'flex', alignItems: 'flex-start' }}>
                                <img 
                                    src={testimonial.image} 
                                    alt={testimonial.name} 
                                    style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover', marginRight: '20px' }} 
                                />
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <h4 style={{ margin: 0, fontWeight: 'bold', fontSize: '18px', color: '#333' }}>{testimonial.name}</h4>
                                            <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>{testimonial.title}</p>
                                            <p style={{ margin: '5px 0 15px 0', fontSize: '13px', color: '#999' }}>{testimonial.time}</p>
                                        </div>
                                        <i className="fas fa-ellipsis-v" style={{ color: '#999', cursor: 'pointer' }}></i>
                                    </div>
                                    <p style={{ fontSize: '16px', color: '#444', lineHeight: '1.6' }}>
                                        {testimonial.text}
                                    </p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomTestimonial;
