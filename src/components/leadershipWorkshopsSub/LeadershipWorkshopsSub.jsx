import React from 'react';

const LeadershipWorkshopsSub = () => {
    const btnStyle = {
        backgroundColor: '#c1efe0',
        color: '#000',
        border: 'none',
        padding: '10px 20px',
        fontWeight: 'bold',
        fontSize: '14px',
        borderRadius: '5px',
        width: '100%',
        textAlign: 'center',
        marginBottom: '15px'
    };

    const inputStyle = {
        backgroundColor: '#f5f5f5',
        border: '1px solid #eee',
        padding: '12px 15px',
        fontSize: '14px',
        width: '100%',
        marginBottom: '15px',
        borderRadius: '0'
    };

    return (
        <div className="leadership-training-page pt-100 pb-100" style={{ backgroundColor: '#fff', color: '#555' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <h1 className="text-center mb-5" style={{ color: '#8a1c1c', fontWeight: 'bold', fontSize: '32px', textTransform: 'uppercase' }}>
                    ASIA CEO COMMUNITY - TRAINING PROGRAM
                </h1>

                <div className="row mb-5">
                    <div className="col-md-4">
                        <button style={btnStyle}>Upcoming Events</button>
                    </div>
                    <div className="col-md-4">
                        <button style={btnStyle}>Guest Speaker Registration</button>
                    </div>
                    <div className="col-md-4">
                        <button style={btnStyle}>Sponsor Our Events</button>
                    </div>
                </div>

                <div className="main-image mb-4">
                    <img src="/assets/img/leadershipWorkshops/11062b_d8f8b89f19004835b6ed70114811a8f9~mv2.avif" alt="Training Program" style={{ width: '100%', display: 'block' }} />
                </div>

                <div className="intro-text mb-5" style={{ fontSize: '15px', lineHeight: '1.6' }}>
                    <p>ASIA CEO COMMUNITY builder training course is a program designed to teach individuals the skills and knowledge needed to successfully build, manage, and grow a business community.</p>
                    <p>We cover topics such as community management best practices, how to build and maintain relationships with members, how to foster collaboration and support, how to run events and programs, and how to measure the success of a community.</p>
                    <p>The course will be delivered in a variety of formats, including in-person workshops and online classes. The program is designed for a specific audience, such as startup founders, community managers, corporate C-level Executives, and aspiring community builders.</p>
                    <p>The goal of a startup community builder training course is to equip individuals with the skills and knowledge they need to effectively build, manage, and grow a thriving business community. Whether you are a startup founder looking to build a network of support, a corporate C-level looking to improve your skills, or someone interested in starting a career in community building, a startup community builder training course can help you achieve your goals.</p>
                </div>

                <div className="registration-section mb-5">
                    <h3 style={{ color: '#255a9b', fontWeight: '600', marginBottom: '20px' }}>Register for Our Workshop(s):</h3>
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                                <input type="text" placeholder="Name *" style={inputStyle} required />
                            </div>
                            <div className="col-md-6">
                                <input type="text" placeholder="Company Name *" style={inputStyle} required />
                            </div>
                        </div>
                        <input type="email" placeholder="Email *" style={inputStyle} required />
                        <input type="text" placeholder="Phone" style={inputStyle} />
                        <input type="text" placeholder="Subject" style={inputStyle} />
                        <textarea placeholder="Message" style={{ ...inputStyle, minHeight: '150px' }}></textarea>
                        <button type="submit" style={{ width: '100%', backgroundColor: '#4a90e2', color: '#fff', border: 'none', padding: '12px', fontSize: '16px', fontWeight: 'bold' }}>Send</button>
                    </form>
                </div>

                <div className="past-workshops-section mt-5">
                    <h2 style={{ color: '#255a9b', fontWeight: 'bold', fontSize: '36px', marginBottom: '30px' }}>Past Workshops</h2>
                    
                    {/* 3x3 Photo Grid */}
                    <div className="row mb-5" style={{ margin: '0 -5px' }}>
                        {[...Array(9)].map((_, i) => (
                            <div className="col-4 mb-2 px-1" key={i}>
                                <img src="/assets/img/leadershipWorkshops/2be637194b9acac4938b.jpg" alt={`Past Workshop ${i+1}`} style={{ width: '100%', height: '180px', objectFit: 'cover' }} />
                            </div>
                        ))}
                    </div>

                    <div className="workshop-details">
                        <img src="/assets/img/leadershipWorkshops/448450213_10161699530085050_8723269253492681450_n.avif" alt="ESG Workshop" style={{ width: '100%', marginBottom: '20px' }} />
                        <h4 style={{ color: '#d35400', fontWeight: 'bold', textTransform: 'uppercase' }}>ESG FOR EMERGING TECHNOLOGY ROUNDTABLE WORKSHOP</h4>
                        <h5 style={{ color: '#34495e', fontWeight: 'bold' }}>GLOBAL CEO COMMUNITY x Asia CEO COMMUNITY x PwC Mainland China and Hong Kong</h5>
                        
                        <p className="mt-4 mb-2"><strong>Workshop Speakers:</strong></p>
                        <ol style={{ paddingLeft: '20px' }}>
                            <li>Jacqueline Teo (Top 10 Most Powerful Women in Technology | IBM's Top 100 Women in Technology)</li>
                            <li>Fletcher Ng (CEO at MindYoga Asia)</li>
                            <li>Cyrus Cheung (Partner at PwC)</li>
                        </ol>

                        <p className="mt-4 mb-2"><strong>Topics discussed during the workshop</strong></p>
                        <ul style={{ listStyleType: 'none', padding: 0 }}>
                            <li>#1 Where and how does technology impact E, S & G</li>
                            <li>#2 Considerations for assessing risk of new technologies and how to govern such initiatives.</li>
                            <li>#3 Pain points in capturing, measuring and reporting.</li>
                        </ul>

                        <p className="mt-4 mb-2"><strong>Attended Members:</strong></p>
                        <ol style={{ paddingLeft: '20px', fontSize: '14px' }}>
                            <li>Benedict Cheng - Group Chief Risk Officer & Group Data Protection Officer at PCCW and HKT</li>
                            <li>Millie P. - Alternate Chief Executive & Chief Compliance Officer at WeLab Bank</li>
                            <li>Prof Jeslie Chui - Managing Director at Miramar Capital Asia Pacific</li>
                            <li>Tim Koo - Founder and CEO at Normsun</li>
                            <li>Rory Chen - Executive Director at China Smarter Energy</li>
                            <li>Elsa Tang - Regional Director at The CFO CENTRE</li>
                            <li>Mandy Mak - COO at Swivel Software Limited</li>
                            <li>Luis Go (IESE MBA, HKU PhD) - Associate Director at IESE Business School</li>
                            <li>Joanna Kwok 郭美德 - Founder & CEO at Asia Executive Development Association</li>
                            <li>Jesa - Redhill Communications Pte. Ltd</li>
                            <li>Victoria - online shoo at techni beauty</li>
                            <li>Angela Cheng - ESG consultant at Ben McQuhae</li>
                            <li>Ellen Ng - Director of Business Development at Vistra</li>
                            <li>Jo Lodder - Founding Partner at JNW Properties Ltd</li>
                            <li>Khaled chabouni - President at Leo progress</li>
                            <li>Winsor Lam - Chief Culture Officer at Geome Green Hospitality</li>
                            <li>Penn - Redhill Communications Pte. Ltd</li>
                            <li>Ada Wang - General Manager at 深圳金旗媒體有限公司</li>
                            <li>Mimi Ho - Founder at The Global Private Search</li>
                            <li>Andrew Lee - Co-Founder and VP of BD at Deepen</li>
                            <li>Ricky Lam - Chief Executive Officer at Good Family Office</li>
                            <li>Andy liu - Investment Director at CRE Alliance (HK) Company Limited</li>
                            <li>Andy Ong - Co Founder and CEO at Super Bamboo</li>
                            <li>Andy Law - Partner at Climate & Sustainability</li>
                            <li>Michael Chan - Director at R2G</li>
                            <li>Lena Chao - Director at Novax</li>
                            <li>Colin Sze - Group CEO at Freestar Trading and Academie Liberalite 用心學院</li>
                            <li>tony m. cheung - Director at Lida Enterprise</li>
                            <li>Fiona ho - Head of Commercial Growth at EviroEvents Co., Ltd</li>
                            <li>Vanessa Gibson - Founder and CEO at illio</li>
                        </ol>

                        <h4 style={{ color: '#255a9b', fontWeight: 'bold', marginTop: '40px' }}>Hong Kong University - Entrepreneur Leadship Workshop</h4>
                        <img src="/assets/img/leadershipWorkshops/314951192_10160446482695050_5275771606057344068_n.avif" alt="HKU Workshop" style={{ width: '100%', marginBottom: '20px', marginTop: '10px' }} />
                        
                        <h4 style={{ color: '#255a9b', fontWeight: 'bold', marginTop: '40px' }}>Hong Kong Federation of Youth Groups - Executive Leadership programs</h4>
                        <img src="/assets/img/leadershipWorkshops/Workshop 2023.avif" alt="HKFYG Workshop" style={{ width: '100%', marginBottom: '20px', marginTop: '10px' }} />

                        <img src="/assets/img/leadershipWorkshops/23_09_2022, 15_36_16.avif" alt="Leadership Workshop Part 1" style={{ width: '100%', marginBottom: '20px', marginTop: '20px' }} />
                        <h4 style={{ color: '#255a9b', fontWeight: 'bold', marginTop: '10px' }}>The Leadership Workshop - Part 1</h4>
                        <h5 style={{ fontWeight: 'bold' }}>ASIA CEO COMMUNITY X Autopilot Leadership Lab Limited</h5>
                        <p>It was great to have Autopilot Leadership Lab to give this leadership workshop to our members. It is very informative and useful. Looking forward to more workshop in the near future</p>
                        
                        <p className="mt-3 mb-2"><strong>Organizer:</strong></p>
                        <p>John Lee - Corporate Culture Architect at Autopilot Leadership Lab</p>

                        <p className="mt-4 mb-2"><strong>Attended Members:</strong></p>
                        <ol style={{ paddingLeft: '20px', fontSize: '14px' }}>
                            <li>Peter I. - Founder, Deputy Chairman & CEO of Carbon Credit Xchange & Founding Member of OXBC - Oxford Blockchain Foundation</li>
                            <li>Tim Koo - Managing Partner at Normsun & Co., Certified Public Accountants (Practising)</li>
                            <li>Nancy Wong - Normsun & Co.</li>
                            <li>Kathy Wong - Normsun & Co.</li>
                            <li>Ken Chu - Cofounder at imBee</li>
                            <li>Johnson Chng - Partner, Asia head of RBB at Oliver Wyman</li>
                            <li>Amanda Lim - Director at ACH Worldwide Limited</li>
                            <li>Franky Kin Wah Fung - Partner at Sun Lawyers LLP Hong Kong</li>
                            <li>Thomas Lee - Co-founder and COO at AsiaTop Loyalty</li>
                            <li>Andrew Kwan - EVP at Maxx Group</li>
                            <li>Katherine Cheung - Partner at Dorsey & Whitney LLP</li>
                            <li>Daniel Yu - Asia Channel management ( C&K switch )</li>
                            <li>Kat Lai at Kat Lai Wellness ltd</li>
                            <li>Fifi Law - Partner at ASPENWOOD Real estate investment Fund LPF</li>
                            <li>Kathy Man - Managing Director at VAT IT (Hong Kong) Limited</li>
                            <li>Anthony Yuen - 晉港青年交流促進會 創會主席</li>
                            <li>Dennis Shi - Founder & CEO at Mojodomo Group</li>
                            <li>Kimmi Cheng - Founder at Team work advertising Co Ltd</li>
                            <li>Anny Cheung - VP at Hua Liang Financial Holding</li>
                            <li>Sharon Cheung - AsiaTop Loyalty</li>
                            <li>James ho - CEO at Linpons</li>
                        </ol>

                        <h4 style={{ color: '#255a9b', fontWeight: 'bold', marginTop: '40px' }}>The Leadership Workshop - Part 2</h4>
                        <h5 style={{ fontWeight: 'bold' }}>Asia Ceo Community X theDesk x Autopilot Leadership Lab Limited (ALLab)</h5>
                        <p>It was great to have Autopilot Leadership Lab to give this leadership workshop to our members. It is very informative and useful. Looking forward to more workshop in the near future</p>
                        
                        <p className="mt-3 mb-2"><strong>Organizer:</strong></p>
                        <p>Jowie Yu - General Manager at Autopilot Leadership Lab</p>

                        <p className="mt-4 mb-2"><strong>Attended Members:</strong></p>
                        <ol style={{ paddingLeft: '20px', fontSize: '14px' }}>
                            <li>Raymond Chan - Director at Merit Entrepreneur Limited</li>
                            <li>Yolane Japhet - Partner, Head of Hong Kong, China at PANAMASIA Financial Services Limited</li>
                            <li>Ben Berenson - Managing Partner at Asia SGE</li>
                            <li>JB Deal - Founder & Managing Director at AvantAgents</li>
                            <li>Elena Galli Giallini - Co-Founder of EGGL</li>
                            <li>Stacy Ho - Founder & Chief Executive Officer at LearnFi</li>
                            <li>Patrick Wong - Co-Founder & Chief Executive Officer at Cloop Limited</li>
                            <li>Joyce Kwok - Regional Corporate & New Business leader, APAC at American Airlines</li>
                            <li>Syed Shakeel Ahmed - Chief Technology Officer at Spidfier</li>
                            <li>Umair Butt - Founder and CEO of UGOKI</li>
                            <li>Stanley Cheung at UBS</li>
                            <li>Sam Naqvi - CEO & Founder at Otel Fitness</li>
                            <li>Chechung Chang - CEO at Axial Partners Limited</li>
                            <li>Monisha Daryanani - Head Luxury Specialist | Investor Relations | Vice President Private VIP Sales & Buyer</li>
                            <li>Jenny Chan at HSBC</li>
                            <li>Marie Averion - Founder-Director at TheBLackSwanInc Limited</li>
                            <li>Kenneth Ma - Director at Moore Transaction Services Limited</li>
                            <li>Syed Shakeel Ahmed - Chief Technology Officer at Spidfier</li>
                            <li>Alex Chan - Regional Head M&A and Strategy, Greater China and ASEAN, Asia Regional Office</li>
                        </ol>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeadershipWorkshopsSub;
