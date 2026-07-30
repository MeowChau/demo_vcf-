import React from 'react';

const PastEvents = () => {
    const btnStyleBlue = {
        background: 'linear-gradient(to bottom, #6db3ee, #439ae0)',
        color: '#fff',
        border: '1px solid #3388cd',
        borderRadius: '4px',
        padding: '12px 30px',
        margin: '0 10px 15px',
        fontSize: '20px',
        fontWeight: 'bold',
        fontFamily: '"Pacifico", "Comic Sans MS", "Chalkboard SE", "Comic Neue", sans-serif',
        textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        boxShadow: '0 3px 6px rgba(0,0,0,0.15)',
        cursor: 'pointer',
        minWidth: '220px'
    };

    const cardStyle = {
        border: '1px solid #e0e0e0',
        padding: '25px 20px',
        marginBottom: '20px',
        backgroundColor: '#fff2df',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    };

    const imgStyle = {
        width: '100%',
        display: 'block',
        marginBottom: '20px',
        border: '1px solid #e0e0e0',
        boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
    };

    const listItemStyle = {
        fontSize: '13px',
        color: '#333',
        marginBottom: '8px',
        textAlign: 'center'
    };

    return (
        <div className="past-events-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                
                {/* Header Area */}
                <div className="mb-5">
                    <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#555', marginBottom: '30px' }}>
                        Past Events
                    </h1>
                    <div className="text-center">
                        <h2 style={{ fontSize: '46px', fontWeight: 'bold', color: '#990000', marginBottom: '30px', fontFamily: 'Arial, sans-serif' }}>
                            "We rise by lifting others."
                        </h2>
                        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto 40px' }}>
                            ASIA CEO Community Monthly Luncheon Parties provides a unique opportunity to discuss business and meet peers. It is a great opportunity for our members to showcase their business, promote their products and services, and find that next business partner or unexpected supplier for their business needs.
                        </p>
                        <div className="d-flex justify-content-center flex-wrap mt-4">
                            <button style={btnStyleBlue}>Join Us</button>
                            <button style={btnStyleBlue}>Upcoming Events</button>
                            <button style={btnStyleBlue}>Sponsorship</button>
                        </div>
                    </div>
                </div>

                {/* Masonry Grid */}
                <div className="row mt-5 pt-4">
                    
                    {/* Column 1 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <img src="/assets/img/pastEvents/075a97_e68baafaa5ac47e7ad95d90c90657840~mv2_d_4608_3456_s_4_2.jpg" alt="Past Event 1" style={imgStyle} />
                        <div style={cardStyle}>
                            <p style={listItemStyle}>6. Carrie Anne Yu - CEO at YU Ignite Ltd. (Top 10 Wechat Influencer in HK district)</p>
                            <p style={listItemStyle}>7. Florian Simmendinger - CEO & Founder at Soundbrenner</p>
                        </div>
                        <div style={cardStyle}>
                            <h5 style={{ textAlign: 'center', fontSize: '15px', marginBottom: '20px' }}>The Future is Now 2018 Event</h5>
                            <p style={listItemStyle}>19. Calvin Lim - Regional CFO at Amazon Papyrus Chemicals Ltd</p>
                            <p style={listItemStyle}>20. Christopher Wong - CEO & Executive Director at Multi-B Sdn Bhd & M Power International Ltd</p>
                            <p style={listItemStyle}>21. Chole C. - COO & Head of Compliance at Pins Asset Management (Asia) Ltd</p>
                            <p style={listItemStyle}>22. Chan Ng - Founder and CEO at nwStor Limited</p>
                            <p style={listItemStyle}>23. Daniel Fong - CEO at Skywork intl</p>
                            <p style={listItemStyle}>24. Dominic Su - MD at Kengtech Industrial Limited</p>
                            <p style={listItemStyle}>25. Donald Soo - Group CEO and Founder at Malabar AI Limited</p>
                        </div>
                    </div>

                    {/* Column 2 */}
                    <div className="col-lg-4 col-md-6 mb-4">
                        <img src="/assets/img/pastEvents/075a97_fb2839e6c76c41dda7074c4b284ddd00~mv2_d_4608_3456_s_4_2.jpg" alt="Past Event 2" style={imgStyle} />
                        <div style={cardStyle}>
                            <h5 style={{ textAlign: 'center', fontSize: '15px', marginBottom: '20px' }}>The Future is Now 2018 Event</h5>
                            <p style={listItemStyle}>11. Ajurn, Tang-Chun Wong</p>
                            <p style={listItemStyle}>12. Belinder Lee - Owner at G-Tech Consultants Ltd.</p>
                            <p style={listItemStyle}>13. Benson Lau - Marketing Director at Zencode Technologies</p>
                            <p style={listItemStyle}>14. Bass Chiu - InstaRem</p>
                            <p style={listItemStyle}>15. Ben Berenson - CryptAm.Fund</p>
                            <p style={listItemStyle}>16. Charles Levy - CFO at Healthy Loved Ones</p>
                            <p style={listItemStyle}>17. Canio Pang - Audit Partner at ZHONGHUI ANDA CPA Limited</p>
                            <p style={listItemStyle}>18. Colin Sze - Senior Advisor at Freestart Trading Limited</p>
                        </div>
                    </div>

                    {/* Column 3 */}
                    <div className="col-lg-4 col-md-12 mb-4">
                        <img src="/assets/img/pastEvents/075a97_521a44a52aaa47398970ba069124e854~mv2_d_5184_2912_s_4_2.jpg" alt="Past Event 3" style={imgStyle} />
                        <div style={cardStyle}>
                            <h5 style={{ textAlign: 'center', fontSize: '15px', marginBottom: '20px' }}>Association</h5>
                            <p style={listItemStyle}>2. Alexander Walker - Co-Founder & CEO at ODYSSEY CAPITAL GROUP</p>
                            <p style={listItemStyle}>3. Anson Suen - CEO & Co-founder at FundPark</p>
                            <p style={listItemStyle}>4. Andrew Kwon - CEO at Quinvir Investment & CEO at Oracle Medical</p>
                            <p style={listItemStyle}>5. Andy Chung, The Founder of IFTA</p>
                            <p style={listItemStyle}>6. Anthony Chan - co-founder of Aroma Audio Limited</p>
                            <p style={listItemStyle}>7. Alan Law - Blockchain Lab</p>
                            <p style={listItemStyle}>8. Anthony Yiu - Creative Executive Officer 東山創見</p>
                            <p style={listItemStyle}>9. Anna Cheng - BD at UZABASE Inc.</p>
                        </div>
                        <div style={cardStyle}>
                            <h5 style={{ textAlign: 'center', fontSize: '15px', marginBottom: '20px' }}>The Future is Now 2018 Event</h5>
                            <p style={listItemStyle}>26. Dennis Shi - Founder & CEO at Mojodomo</p>
                            <p style={listItemStyle}>27. Dinah Ilagan - COO & Director at Asian Mergers & Acquisition Links</p>
                            <p style={listItemStyle}>28. Davis Chau - Blockchain Lab</p>
                            <p style={listItemStyle}>29. Donald Ho - Blockchain Lab</p>
                            <p style={listItemStyle}>30. Eric Poon - Managing Director at Nexsoft Technology Ltd.</p>
                            <p style={listItemStyle}>31. Fletcher Ng - CEO & co-Founder at Deskvault</p>
                            <p style={listItemStyle}>32. Felix Oen - Co-Founder, CEO at Kang Healthcare</p>
                            <p style={listItemStyle}>33. Falco So - BD Director at Payment Asia</p>
                            <p style={listItemStyle}>34. Franky - MD at Sun Lawyers LLP</p>
                            <p style={listItemStyle}>35. Gordon Chiu - Executive Director at henven</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PastEvents;
