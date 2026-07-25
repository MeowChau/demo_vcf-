import React from 'react';

const trainersData = [
    {
        name: "Allan Tsang",
        firstName: "Allan",
        title: "MSc - Founder and CEO, 88 Owls",
        aboutTitle: "About Allan Tsang, MSc",
        aboutText: "Allan Tsang is an experienced negotiation Coach and the founder of 88Owls.com. With over a decade and a half of experience training professionals from around the world, he brings a diverse background to the table. His expertise in negotiations and knowledge of business dynamics enables him to identify and address areas of potential risk or opportunity, providing customized solutions to his clients' needs.",
        image: "/assets/img/membersArea/Allan Tsang (2).avif"
    },
    {
        name: "Tracy Ho",
        firstName: "Tracy",
        title: "Personal Branding & Image Consultant, Executive Presence Coach at Frame & Fame Personal Branding",
        aboutTitle: "About Tracy Ho",
        aboutText: "With certifications as an International Business Etiquette and Multicultural Communication Specialist, Image Consultant, Gallup CliftonStrengths Coach, DiSC Trainer, and Visual Facilitator, Tracy brings a diverse skill set to guide clients through the intricacies of the global workplace.\nSpecializing in coaching, consulting, and training, her goal is to empower individuals not only to assert their presence but also to communicate messages with unwavering confidence and compelling conviction.",
        image: "/assets/img/membersArea/1679953614960.avif"
    },
    {
        name: "David Yeh Jr",
        firstName: "David",
        title: "Founder & Chief Empowerment Officer, Destiny Research Institute",
        aboutTitle: "About David Yeh Jr",
        aboutText: "As a co-founder of Destiny Research institute, David believes that through coaching, they provide individuals, teams and organizations more structured steps to develop the right mindset, handle different hurdles and challenges as well as strengthen relationships, personal and professional.\nDavid also transformed with his own personal growth for the past decade because of his engagement with various coaching mentors and also dealing with different walks of life. He experienced losing two of the most important women in his life, this opportunity to make a difference in their family business and going through several bouts of losing businesses.",
        image: "/assets/img/membersArea/1692584410773.avif"
    }
];

const TrainerList = () => {
    return (
        <div className="trainers-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 style={{ color: '#003366', fontWeight: 'bold', marginBottom: '30px' }}>ASIA CEO COMMUNITY CERTIFIED TRAINER & COACH</h2>
                        
                        <div className="d-flex justify-content-center flex-wrap gap-2 mb-5">
                            <button className="btn" style={{ 
                                background: 'linear-gradient(to bottom, #74b9ff, #0984e3)', 
                                border: 'none', 
                                color: '#fff', 
                                padding: '10px 40px',
                                fontFamily: 'cursive',
                                fontSize: '18px',
                                borderRadius: '4px',
                                width: '220px',
                                margin: '0 5px'
                            }}>Join Us</button>
                            <button className="btn" style={{ 
                                background: 'linear-gradient(to bottom, #74b9ff, #0984e3)', 
                                border: 'none', 
                                color: '#fff', 
                                padding: '10px 40px',
                                fontFamily: 'cursive',
                                fontSize: '18px',
                                borderRadius: '4px',
                                width: '220px',
                                margin: '0 5px'
                            }}>Upcoming Parties</button>
                            <button className="btn" style={{ 
                                background: 'linear-gradient(to bottom, #74b9ff, #0984e3)', 
                                border: 'none', 
                                color: '#fff', 
                                padding: '10px 40px',
                                fontFamily: 'cursive',
                                fontSize: '18px',
                                borderRadius: '4px',
                                width: '220px',
                                margin: '0 5px'
                            }}>Sponsorship</button>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {trainersData.map((trainer, index) => (
                            <div className="row mb-5" key={index}>
                                <div className="col-md-4 position-relative text-center mb-4 mb-md-0">
                                    <img src={trainer.image} alt={trainer.name} style={{ width: '100%', maxWidth: '350px', height: 'auto', objectFit: 'cover' }} />
                                    <button style={{ 
                                        position: 'absolute', 
                                        bottom: '15px', 
                                        left: '50%', 
                                        transform: 'translateX(-50%)', 
                                        backgroundColor: '#fcd3b6', 
                                        color: '#e25822', 
                                        border: 'none', 
                                        padding: '8px 25px', 
                                        borderRadius: '4px', 
                                        fontWeight: 'bold', 
                                        fontSize: '14px', 
                                        whiteSpace: 'nowrap',
                                        boxShadow: '0 2px 5px rgba(0,0,0,0.2)'
                                    }}>
                                        Contact {trainer.firstName} <i className="far fa-comment-dots ml-1"></i>
                                    </button>
                                </div>
                                <div className="col-md-8 pl-md-4">
                                    <h3 style={{ color: '#333', fontWeight: 'bold', margin: 0, fontSize: '24px' }}>{trainer.name}</h3>
                                    <h4 style={{ color: '#333', fontWeight: 'bold', fontSize: '18px', marginTop: '5px', marginBottom: '20px' }}>{trainer.title}</h4>
                                    
                                    <h6 style={{ color: '#555', fontWeight: 'bold', fontSize: '15px', marginBottom: '10px' }}>{trainer.aboutTitle}</h6>
                                    {trainer.aboutText.split('\n').map((paragraph, pIndex) => (
                                        <p key={pIndex} style={{ color: '#666', fontSize: '15px', lineHeight: '1.6', marginBottom: '10px' }}>
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrainerList;
