import React from 'react';

const posts = [
    {
        text: "Asia CEO COMMUNITY is proud to announce that we have entered into a momentous partnership with the prestigious All India Management Association (AIMA)!",
        image: "/assets/img/membersArea/AIMA.avif"
    },
    {
        text: "MEET-UP with Mohamed Sharat - Chief Operating Officer (COO) of the Dubai Department of Economy and Tourism, and Sultan Belshalat Senior Manager of Investment Attraction of the Dubai Department of Economy and Tourism.",
        image: "/assets/img/membersArea/421678610_10161433417750050_2271196189181032400_n.avif"
    },
    {
        text: "MEET-UP with Cyprus Chamber of Commerce and industry - Mr. Marios Tsiakkis",
        image: "/assets/img/membersArea/393671032_10161277914290050_7165949024774496998_n.avif"
    },
    {
        text: "Asia Ceo Community - MEETING WITH HONG KONG FINANCIAL SECRETARY",
        image: "/assets/img/membersArea/376879351_10161186595785050_1125848553538599368_n.avif"
    },
    {
        text: "Asia Ceo Community - MEETING WITH Krisztina Dóra Koletár - Trade Commissioner of Consulate General of Hungary in Hong Kong",
        image: "/assets/img/membersArea/unnamed (4).avif"
    },
    {
        text: "Asia CEO COMMUNITY Luncheon with Shannon Powell - Senior Trade and Investment Commissioner/Deputy Consul General (Commercial) at Australian Trade and Investment Commission (Austrade)",
        image: "/assets/img/membersArea/COMMITTEE (4).avif"
    },
    {
        text: "Asia CEO COMMUNITY & Stephen Phillips (Director General at Invest Hong Kong) MeetUp",
        image: "/assets/img/membersArea/InvestHK.avif"
    },
    {
        text: "Asia CEO COMMUNITY & The Consulate General of Ireland Hong Kong & Macau MeetUp",
        image: "/assets/img/membersArea/WhatsApp Image 2019-06-04 at 15_32_18_jp.avif"
    },
    {
        text: "Asia CEO COMMUNITY & The Consulate General of Israel Hong Kong & Macau MeetUp",
        image: "/assets/img/membersArea/248216010_10159727894960050_7142296270823105414_n.avif"
    },
    {
        text: "Asia CEO COMMUNITY & Malaysia External Trade Development Corporation MeetUp",
        image: "/assets/img/membersArea/MDEC.avif"
    },
    {
        text: "Asia CEO COMMUNITY & Julia Herries (Queensland Trade & Investment commissioner Hong Kong & Macau) MeetUp",
        image: "/assets/img/membersArea/318173967_484764467075136_1043761909925906148_n.avif"
    },
    {
        text: "Asia CEO COMMUNITY & The Former HK SAR Chief Executive MeetUp",
        image: "/assets/img/membersArea/45679061_1074093546098864_84045581040830.avif"
    },
    {
        text: "Asia CEO COMMUNITY Meeting with CEO of British Chamber of Commerce Myanmar",
        image: "/assets/img/membersArea/79483218_10157836255510050_3939138554130.avif"
    },
    {
        text: "Meeting with Alice, the General Manager of ShenZhen Financial Chamber of Commerce \n\nWe are happy to announce our partnership with ShenZhen financial chamber of commerce We are looking forward to further support our members to expand their businesses in China."
    },
    {
        text: "Ezzwanee Ahmad - Trade Commissioner at the Consulate-General of Malaysia (Trade Section), Hong Kong and Macao \n\nThank you for our special guest Ezzwanee for supporting CxO Q4 RoundTable 2020 event at PwC",
        image: "/assets/img/membersArea/126061385_1668661196642093_4672848493518.avif"
    },
    {
        text: "ASIA CEO Community - Appointed as business adviser for the Hong Kong Representative Office of Zhu Hai (珠海市驻香港经贸代表处招商顾问)\n\nWe are happy to annouce we have been appointed as business advisor for the Hong Kong Representative Office of Zhu Hai .Our main job is to assist our members to enter into the zhu hai market and enjoy the huge economic benefits of bridge linking Hong Kong, ZhuHai and Macau \n\nSpecially thanks to Ms. Judy Zhu - the Chief Representative of the Hong Kong Representative Office of Zhuhai for trusting us."
    },
    {
        text: "Meeting with Malaysia Digital Economy Corporation\n\nHappy to meet with Paranee Damodaran & Fadzli Hisham Mohd Aini from Malaysia Digital Economy Corporation to discuss about how our Startup members could leverage their experiences and connection to enter into the Malaysia Market. If you are interested in setting up your Tech company in Malaysia, please feel free to contact us and/or MDEC"
    },
    {
        isTitle: true,
        text: "Other Events"
    },
    {
        text: "Asia Ceo Community invited as one of the Guest Speakers for Building Startup Community with Global Impact at startup grind shenzhen powered by Google"
    },
    {
        text: "Thank You for HKGCC 香港总商會and EventBank inviting Asia CEO Community to be one of the panelists for the Membership and Community Engagement Best Practices",
        image: "/assets/img/membersArea/38689396_1013975798777306_70956304766137.avif"
    }
];

const CommunityGovRelations = () => {
    return (
        <div className="community-gov-relations-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                {/* Header Section */}
                <div className="row text-center mb-5">
                    <div className="col-12">
                        <h2 style={{ color: '#e91e63', fontWeight: 'bold', marginBottom: '30px' }}>Community & Government Relations</h2>
                        
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

                {/* Posts Section */}
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        {posts.map((post, index) => (
                            <div key={index} className="mb-5 pb-4">
                                {post.isTitle ? (
                                    <h4 style={{ color: '#333', fontWeight: 'bold', fontSize: '22px', marginTop: '40px' }}>
                                        {post.text}
                                    </h4>
                                ) : (
                                    <>
                                        <div style={{ color: '#555', fontWeight: 'bold', fontSize: '17px', lineHeight: '1.6', marginBottom: '15px' }}>
                                            {post.text.split('\n').map((paragraph, pIndex) => (
                                                <React.Fragment key={pIndex}>
                                                    {paragraph}
                                                    {pIndex !== post.text.split('\n').length - 1 && <br />}
                                                </React.Fragment>
                                            ))}
                                        </div>
                                        {post.image && (
                                            <div className="text-center mt-3">
                                                <img 
                                                    src={post.image} 
                                                    alt="Event" 
                                                    style={{ 
                                                        width: '100%', 
                                                        maxWidth: '800px', 
                                                        height: 'auto', 
                                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                                                        borderRadius: '4px'
                                                    }} 
                                                />
                                            </div>
                                        )}
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CommunityGovRelations;
