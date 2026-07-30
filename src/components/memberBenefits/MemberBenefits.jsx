"use client";
import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const MemberBenefits = () => {
    const partners = [
        {
            title: "KorumLegal Special Discount to ASIA CEO COMMUNITY's members",
            logo: null, 
            desc: `<strong>About KorumLegal</strong><br/>
KorumLegal is a legal solutions innovator. They are changing the way legal solutions are created and delivered. KorumLegal offers value-driven People, Process and Technology as well as Managed Legal Services solutions to a broad range of customers from start-ups and SMEs, to multinationals, financial institutions, and professional services firms. They work hard at being seamless extensions of our customers’ teams. Partnering with KorumLegal you will get:
<br/><br/>
A breadth of expertise from experienced practitioners<br/>
Transparent pricing model – fixed price across all products<br/>
Personalised key account management<br/>
A trusted advisor<br/>
A team that is always exploring innovative ways to add value<br/>
A team dedicated to delivering exactly what you need
<br/><br/>
<span style="color: #e51d5c;">KorumLegal are pleased to offer members of the CEO Asia Community a 5% discount on our all of our services. Please go to <a href="http://www.korumlegal.com" style="color: #e51d5c; text-decoration: underline;">www.korumlegal.com</a> to find out more or contact:</span>
<br/><br/>
Natasha Norton<br/>
General Manager – North Asia and Global Growth<br/>
Natasha.Norton@korumlegal.com<br/>
+852 9445 9568
<br/><br/>
Titus Rahiri<br/>
CEO<br/>
Titus.Rahiri@korumlegal.com<br/>
+852 5725 5755`
        },
        {
            title: "Hong Kong Productivity Council (HKPC) - Inno Space x ASIA CEO COMMUNITY Partnership",
            logo: null,
            desc: `Inno Space is a startup platform established by the Hong Kong Productivity Council (HKPC) and commissioned by the Government of the Hong Kong Special Administrative Region to support local startups and inventors by translating their innovative ideas into industrial designs, prototypes and products so they can turn concepts into reality.
<br/><br/>
ASIA CEO COMMUNITY members will enjoy 50% off Inno Space full monthly membership fee;
<br/><br/>
Join Inno Space to get the following benefits:<br/>
Make your idea a reality with Inno Space equipment, workshops and services<br/>
Find potential partners and network with thought leaders<br/>
Stay on top of the industry trends through Inno Space seminars<br/>
Protect your ideas and startup through Inno Space IP advisory services<br/>
Connect with trusted service providers with Inno Space project management services<br/>
Take advantage of government support schemes
<br/><br/>
For more information, please visit: <a href="https://innospace.hkpc.org/" target="_blank">https://innospace.hkpc.org/</a>`
        },
        {
            title: "Platform E x ASIA CEO COMMUNITY Partnership",
            logo: null,
            desc: `Platform E is an entire entrepreneurship ecosystem offering a unique blend of knowledge, industry practicum, mentorship, incubation, start-up business support and funding. Meet, discover and grow with our community of entrepreneurs.
<br/><br/>
Members benefit:<br/>
ACC’s Committee members and/or paid members will get 20% discount of the standard rate of the SIM AEC’s co-working space for the 1st year.
<br/><br/>
For more information, please visit: <a href="https://platforme.asia/" target="_blank">https://platforme.asia/</a>`
        },
        {
            title: "Kam Hing WINE & SPIRITS x ASIA CEO COMMUNITY Partnership",
            logo: null,
            desc: `Being our valued members of ASIA CEO Community, we always work diligently to provide you with wonderful experiences including wine tasting events, private tastings and privilege discounts.
<br/><br/>
We have partnered with Kam Hing Wine & Spirits to offer you great wines from all over the world with competitive price. You are honored to enjoy an exclusive offer of 5% off for each purchase*. What’s more, you will also enjoy a selected complimentary bottle of wine for purchase over HK$15,000.
<br/><br/>
For more information, please visit our CEO Shop`
        },
        {
            title: "Avvanz x ASIA CEO COMMUNITY Partnership",
            logo: null,
            desc: `An Employee Lifecycle Management company that prides in its 3 business pillars – Screen, On-board and Develop. Avvanz helps to screen for the “right” and “safe” candidates through background checks and predictive assessments. Avvanz then helps to integrate the new joiners through comprehensive new employee on-boarding solutions leveraging mobile technologies. Avvanz enhances the talents through uniquely differentiated blending learning solutions aimed at surpassing the business KPIs. Avvanz has received several award nominations for differentiated and disruptive solutions.`
        },
        {
            title: "Global Sources STARTUPLAUNCHPAD",
            logo: "/assets/img/membersArea/Startup Launchpad -RGB-ForDigitalUse.avif",
            desc: `Exclusive 20% off discount of STARTUPLAUNCHPAD conference to Asia CEO COMMUNITY's members<br/>
(18th – 21st October at Hall 2 Asia World Expo)<br/>
<a href="https://launchpadhk.com/FutureOfRetail/" target="_blank">https://launchpadhk.com/FutureOfRetail/</a>
<br/><br/>
Discount Code: asiaceo20
<br/><br/>
Exclusive 20% discount rate for startups (mid-late stage, hardware/retail-solutions) referred by Asia CEO Community in STARTUPLAUNCHPAD upcoming exhibition in Oct 2018 and Apr 2019 (standard rates starting at USD 2,000 for 4 days including setup and carpeting).
<br/><br/>
Please contact us via email ceo@asiaceo.club for more information regarding to STARTUPLAUNCHPAD conference.`
        },
        {
            title: "LinkWorld Hong Kong Group Ltd",
            logo: "/assets/img/membersArea/075a97_c0c496a17b6a46f7bcbc54356c74224b~mv2.gif",
            desc: `Exclusive 10% off discount of Link World Hong Kong Group Ltd to Asia CEO COMMUNITY's members
<br/><br/>
<a href="http://www.linkworldhk.com" target="_blank">www.linkworldhk.com</a><br/>
Discount Code: asiaceocommunity
<br/><br/>
Link World Hong Kong Group Ltd , have own factory in China for production of USB flash drive , all kinds of computer accessories with packaging. With length of specialized services provided to the market, Link World have gained a great achievement and favorable response from the public in the market of Hong Kong and overseas. Now the distribution of products of the Company have been diversified into different kind of varieties, such as gift and premium, stationery, innovative souvenir, acrylic/metal work with custom made design.
<br/><br/>
Please contact us via email ceo@asiaceo.club for more information regarding to Link World Hong Kong Group Ltd conference.`
        },
        {
            title: "Overseas Chinese Enterprise Association (O.C.E.A)",
            logo: "/assets/img/membersArea/OCEA Logo.avif",
            desc: `<strong>About O.C.E.A</strong><br/>
O.C.E.A is a non-political organization established in the Hong Kong Special Administrative Region.
<br/><br/>
O.C.E.A provide a suite of services that is designed to lead foreign investors through the market entry process and stay with them to develop long-term success in China Market.
<br/><br/>
Members' Benefits Include:
<br/><br/>
 - 30% off OCEA events;<br/>
 - 30% off in rental OCEA’s hot desks, facilities or spaces
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        },
        {
            title: "LKK Health Products Group - Autopilot Leadership Model",
            logo: "/assets/img/membersArea/allab_staticlogo_eng.avif",
            desc: `Guided by the core values of “Si Li Ji Ren”, Lee Kum Kee grew into a century-old enterprise of sauces with products sold to over 200 countries and regions around the world. But it did not rest contented on its laurels but put forward its second mission, that is, sharing worldwide the premium Chinese regimen culture through its Chinese herbal health products. To this end, Infinitus was founded.
<br/><br/>
Website:<br/>
<a href="https://www.lkkhpg.com/en-us/corporate-culture/detail/auto-pilot-leadership" target="_blank">https://www.lkkhpg.com/en-us/corporate-culture/detail/auto-pilot-leadership</a>
<br/><br/>
Members Benefit:<br/>
- 15% discount offer on Autopilot Leadership Programs
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        },
        {
            title: "Tradewind International Factoring Ltd.",
            logo: "/assets/img/membersArea/tradewind_logo.avif",
            desc: `Tradewind International Factoring Ltd. are a Germany-based finance organization that provides liquidity for international small- and middle-market enterprises. Tradewind International Factoring Ltd. transact across all continents and provide tailored working capital solutions to drive global trade.
<br/><br/>
Founded in 2000, with more than 20 offices in 13 countries including the headquarters in Germany, Tradewind is at the forefront of international trade finance. Combining financing, credit protection, and collections into a single suite of trade finance products, Tradewind brings streamlined, flexible and best-in-class services to the world’s exporters and importers.
<br/><br/>
· ACCELERATED CASH FLOW Tradewind International Factoring Ltd. advance up to 95% of invoice value and fund within 24-48 hours of receiving your request.<br/>
· COLLECTIONS AND REPORTING Tradewind International Factoring Ltd. perform collections, buyer credit reviews, and accounts receivable bookkeeping on your behalf.<br/>
· CREDIT PROTECTION (NON-RECOURSE) Tradewind International Factoring Ltd. eliminate buyer credit risk by insuring your accounts receivable and covering the risk of shortfall of payment due to buyer’s insolvency.<br/>
· OFFER LONGER PAYMENT TERMS You can generate more sales by offering longer payment terms without disrupting cash flow.
<br/><br/>
Website:<br/>
tradewindfinance.com
<br/><br/>
Members Benefit:<br/>
Free checking five buyers credit grading
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        },
        {
            title: "Itopia",
            logo: "/assets/img/membersArea/itopia.avif",
            desc: `Itopia is a one-stop shared platform, which connects talents from education, business, professional field, etc. It provides business matching, services promotion, network expansion, partnership collaboration and long-term corporate strategies building.
<br/><br/>
We work with over 100 merchants to provide special privileges. With video interviews with elites from various sectors, we provide a high-quality entertainment to members.
<br/><br/>
Members Benefits:<br/>
Join in Itopia platform (free of charge)<br/>
- Promote their products/services<br/>
- Invite members for video interview shooting<br/>
- Publish the videos on our social media channels
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        },
        {
            title: "Wise at Work",
            logo: "/assets/img/membersArea/image.avif",
            desc: `Wise At Work was founded on the belief that dreams and potential don't expire when people turn 50. And that in this rapidly ageing world, it is absolutely essential to make efforts to stay relevant and build age-inclusive organizations
<br/><br/>
Wise At Work work closely with organisations to build a culture where collaboration and innovation thrive through multi-generational teams and work closely with older, seasoned professionals to help them stay relevant through continuous learning programmes.
<br/><br/>
Website:<br/>
<a href="https://www.wiseatwork.co/pages/aboutus" target="_blank">https://www.wiseatwork.co/pages/aboutus</a>
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        },
        {
            title: "KaChick",
            logo: "/assets/img/membersArea/Partner.avif",
            desc: `KaChick is a Hong Kong based technology startup using Ai to recommend the right photographers / videographers to customers in Asia. It is a marketplace where you can book visual creatives anywhere, anytime, for anything. Currently we are working with over 1,500 photographers and provide services to corporates such as Grand Hyatt, HKTDC, Cathay Pacific, OpenRice, and many other SMEs.
<br/><br/>
Website:<br/>
<a href="https://www.kachick.com/en/about.php" target="_blank">https://www.kachick.com/en/about.php</a>
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        },
        {
            title: "GIANTHOUSE",
            logo: "/assets/img/membersArea/GIANTHOUSE.avif",
            desc: `Gianthouse was started by the spirit of turning imaginations into reality. It is a software house specialized in design and development of web and mobile applications, as well as providing customized IT solutions. <br/>
Their vision is to offer affordable and quality IT services so as to promote the wider adoption of technology in the society. Backed by venture capital firm T12M Ventures, their clienteles range from large corporate including WPP, Oxford University Press, HKUST to early-stage startups. With deep understanding in technology and business, they develop or even invest in interesting projects.
<br/><br/>
Asia CEO Community members can enjoy free consultation with Gianthouse. Leave us a message and Gianthouse team will be in touch with you shortly.
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        },
        {
            title: "Euromonitor International",
            logo: null,
            desc: `Euromonitor International is a global market research company providing strategic intelligence on industries, companies, economies and consumers around the world. Comprehensive international coverage and insights across consumer goods, business-to-business and service industries make our research an essential resource for businesses of all sizes. Bridging methodologies based on data science and on-the-ground research, we distill strategic and tactical data through flexible solutions, giving real-world context for business decisions.
<br/><br/>
Website:<br/>
<a href="https://www.euromonitor.com/store" target="_blank">https://www.euromonitor.com/store</a>
<br/><br/>
Members Benefit:<br/>
Exclusive discount to ASIA CEO COMMUNITY members<br/>
Up to 25% discount on purchasing Euromonitor International market report(s) valued over USD 1,200
<br/><br/>
Offer period:<br/>
6 months (1st September, 2020 to  28th February, 2021)
<br/><br/>
Please contact Sabrina Sakhrani at info-hongkong@euromonitor.com for redemption.<br/>
T&Cs: When purchasing our report, you would be accepting our T&C’s as listed on our website: <a href="https://www.euromonitor.com/terms-and-conditions" target="_blank">https://www.euromonitor.com/terms-and-conditions</a>
<br/><br/>
For more information, please contact us via email ceo@asiaceo.club`
        }
    ];

    return (
        <div className="member-benefits-area pt-100 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .member-benefits-slider .swiper-button-next,
                .member-benefits-slider .swiper-button-prev {
                    color: #fff;
                    text-shadow: 0px 0px 5px rgba(0,0,0,0.5);
                }
                .member-benefits-slider .swiper-button-next:after,
                .member-benefits-slider .swiper-button-prev:after {
                    font-size: 32px;
                }
            `}} />
            <div className="container">
                <div className="mb-5">
                    <h2 style={{ color: '#336699', fontSize: '32px', marginBottom: '15px' }}>
                        Member Benefits
                    </h2>
                    <p style={{ color: '#555', fontSize: '15px', marginBottom: '15px', paddingLeft: '40px' }}>
                        ASIA CEO COMMUNITY Member's Benefit Program rewards our members with valuable services and savings.
                    </p>
                    <p style={{ color: '#555', fontSize: '15px', paddingLeft: '40px' }}>
                        Current ASIA CEO COMMUNITY rewards programs and resources include:
                    </p>
                </div>

                <div className="mb-5">
                    <h3 style={{ color: '#336699', fontSize: '26px', marginBottom: '20px' }}>
                        This Month Benefits
                    </h3>
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        className="member-benefits-slider"
                    >
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <img src="/assets/img/membersArea/f8dc48c6-6d14-4cb1-bc12-45bdf8d59459.jpg" alt="American Airlines Benefit" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <img src="/assets/img/membersArea/d9b33884-7730-477a-a7f7-657f83696705.jpg" alt="Gift Voucher Benefit" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="row">
                                <div className="col-md-6 mb-4">
                                    <img src="/assets/img/membersArea/2c26d85e-e0e6-4b92-8497-128459d2c0f1.jpg" alt="Spa-Tacular Benefit" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                                <div className="col-md-6 mb-4">
                                    <img src="/assets/img/membersArea/22c83619-9017-4672-aca4-2f6802a85264.jpg" alt="Mercedes-Benz Benefit" style={{ width: '100%', height: 'auto', display: 'block' }} />
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>

                <div className="partners-list mt-5">
                    {partners.map((partner, index) => (
                        <div className="row mb-5 pb-4 align-items-center" key={index} style={{ borderBottom: index < partners.length - 1 ? '1px solid #eee' : 'none' }}>
                            <div className="col-md-4 text-center mb-4 mb-md-0">
                                {partner.logo && (
                                    <img src={partner.logo} alt={partner.title} style={{ maxWidth: '100%', maxHeight: '150px', objectFit: 'contain' }} />
                                )}
                            </div>
                            <div className="col-md-8">
                                <h5 style={{ fontWeight: 'bold', color: '#444', fontSize: '16px', marginBottom: '15px' }}>
                                    {partner.title}
                                </h5>
                                <div style={{ color: '#666', fontSize: '14px', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: partner.desc }}>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="d-flex justify-content-center gap-3 mt-5 pt-4">
                    <Link href="#" className="btn" style={{ 
                        backgroundColor: '#e51d5c', 
                        color: '#fff', 
                        fontWeight: '600',
                        padding: '12px 35px',
                        borderRadius: '8px',
                        fontSize: '15px',
                        minWidth: '180px',
                        border: 'none'
                    }}>
                        Contact us
                    </Link>
                    <Link href="#" className="btn" style={{ 
                        backgroundColor: '#e51d5c', 
                        color: '#fff', 
                        fontWeight: '600',
                        padding: '12px 35px',
                        borderRadius: '8px',
                        fontSize: '15px',
                        minWidth: '180px',
                        border: 'none'
                    }}>
                        Join us!
                    </Link>
                    <Link href="#" className="btn" style={{ 
                        backgroundColor: '#e51d5c', 
                        color: '#fff', 
                        fontWeight: '600',
                        padding: '12px 35px',
                        borderRadius: '8px',
                        fontSize: '15px',
                        minWidth: '180px',
                        border: 'none'
                    }}>
                        Partner with us!
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MemberBenefits;
