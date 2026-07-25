import React from 'react';
import Link from 'next/link';

const tiers = [
    {
        id: 'standard',
        title: 'Standard\nRegistration',
        intro: 'Standard membership members will be able to enjoy our services below:',
        features: [
            'CEO Executive UP-TO-DATE',
            'CEO Executive Monthly newsletter',
            'CEO Executive Knowledge Sharing',
            'CEO Shop',
            'CEO Webinar',
            'Invitation to our CEO Whatsapp Group',
            'Invitation to our Linkedin Group',
            'Invitation to our FaceBook Group'
        ],
        extraNotice: '',
        fee: 'Annual Fee: 180 USD',
        qualificationText: [
            "Standard Membership is open to all, and is a great way to start your ASIA CEO COMMUNITY journey. With Standard membership you can access the ASIA CEO COMMUNITY's online resources and expertise, including our Monthly business updates and online business forum."
        ]
    },
    {
        id: 'clevel',
        title: 'C-level\nRegistration',
        intro: 'C-level membership members will be able to enjoy our services below:',
        features: [
            'CEO Executive UP-TO-DATE',
            'CEO Executive Monthly newsletter',
            'CEO Executive Knowledge Sharing',
            'CEO Shop',
            'CEO Webinar',
            'Wine Tasting Events',
            'Invitation to our CEO Whatsapp Group',
            'Invitation to our Linkedin Group',
            'Invitation to our FaceBook Group',
            'CEO Executive Directory',
            'Invitation to Annual Asia CEO Executive Awards',
            'CEO Webinar',
            'Mobile App - CEO Coffee (to be launched in 2018)',
            'CEO Executive Forum',
            'Invitation to Monthly Luncheon Event',
            'Source importers, distributors or resellers for your products/services'
        ],
        extraNotice: '',
        fee: 'Annual Fee: 2,200USD',
        qualificationText: [
            "C-Level Membership is open specially for the top management of the company who is looking for exchange of ideas, innovation, and best practice.",
            "Include but not limited to:\n- Chief People Officer (CPO)\n- Chief Marketing Officer (CMO)\n- Chief Information Officer (CIO)\n- Chief Technology Officer (CTO)\n- Chief Executive Officer (CEO)\n- Chief Operation Officer (COO)\n- Chief Finance Officer (CFO)\n- Vice Presidents (VPs)\n- President\n- Executive Director\n- Managing Director\n- Managing Partner\n- General Manager"
        ]
    },
    {
        id: 'corporate',
        title: 'Corporate Membership\nRegistration',
        intro: 'Corporate membership members will be able to enjoy our services below:',
        extraNotice: 'All privileges of C-Level Membership plus',
        features: [
            'All your C-level direct reports can participate in committees and events.',
            'ASIA CEO COMMUNITY Member-to-Member Discount Program - Your company has the opportunity to offer special pricing and programs to ASIA CEO COMMUNITY members, generating business for you.',
            'Your company logo on our web site.',
            'A free supporting sponsorship for the ASIA CEO COMMUNITY CEO Round-table.',
            'A 50% discount on other ASIA CEO COMMUNITY sponsorship opportunities.',
            'Unlimited access to CEO Connection Business directory.'
        ],
        fee: 'Annual Fee: 5,000 USD',
        qualificationText: []
    }
];

const MembershipTiers = () => {
    return (
        <div className="membership-tiers-area pb-100">
            <div className="container">
                {/* DESKTOP LAYOUT (Perfectly Aligned Rows) */}
                <div className="d-none d-lg-block">
                    <div className="row text-center mb-4">
                        {tiers.map(tier => (
                            <div className="col-4" key={`title-${tier.id}`}>
                                <h4 style={{ color: '#666', lineHeight: '1.4', whiteSpace: 'pre-line', minHeight: '85px', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>{tier.title}</h4>
                            </div>
                        ))}
                    </div>
                    <div className="row text-center mb-5">
                        {tiers.map(tier => (
                            <div className="col-4" key={`btn-${tier.id}`}>
                                <Link href={tier.id === 'standard' ? '/global-business-registration' : tier.id === 'clevel' ? '/c-level-registration' : '/corporate-membership-registration'} className="btn" style={{ backgroundColor: '#00c3b3', color: '#fff', padding: '10px 40px', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0, 195, 179, 0.4)' }}>
                                    Join Now
                                </Link>
                            </div>
                        ))}
                    </div>
                    <div className="row text-center mb-4">
                        {tiers.map(tier => (
                            <div className="col-4" key={`intro-${tier.id}`}>
                                <p style={{ fontWeight: 'bold', fontSize: '15px', padding: '0 15px' }}>{tier.intro}</p>
                                {tier.extraNotice && (
                                    <p style={{ color: '#d9534f', fontSize: '14px', marginBottom: '0' }}>{tier.extraNotice}</p>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="row mb-5">
                        {tiers.map(tier => (
                            <div className="col-4" key={`features-${tier.id}`}>
                                <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555' }}>
                                    {tier.features.map((feature, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className="row text-center mb-4">
                        {tiers.map(tier => (
                            <div className="col-4" key={`fee-${tier.id}`}>
                                <h5 style={{ fontWeight: 'bold', color: '#555' }}>{tier.fee}</h5>
                            </div>
                        ))}
                    </div>
                    <div className="row">
                        {tiers.map(tier => (
                            <div className="col-4" key={`qual-${tier.id}`}>
                                {tier.qualificationText.length > 0 && (
                                    <>
                                        <h5 style={{ color: '#e67e22', fontWeight: 'bold', marginBottom: '20px', textAlign: 'center' }}>Qualification</h5>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555' }}>
                                            {tier.qualificationText.map((text, index) => (
                                                <li key={index} style={{ marginBottom: '15px' }}>
                                                    {text.split('\n').map((line, i) => (
                                                        <span key={i}>
                                                            {line}
                                                            {i < text.split('\n').length - 1 && <br />}
                                                        </span>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* MOBILE LAYOUT (Stacked) */}
                <div className="d-block d-lg-none">
                    <div className="row">
                        {tiers.map((tier) => (
                            <div className="col-md-12 mb-5 text-center" key={tier.id}>
                                <h4 style={{ color: '#666', lineHeight: '1.4', whiteSpace: 'pre-line' }}>{tier.title}</h4>
                                
                                <div className="text-center mb-4">
                                    <Link href={tier.id === 'standard' ? '/global-business-registration' : tier.id === 'clevel' ? '/c-level-registration' : '/corporate-membership-registration'} className="btn mt-3 mb-5" style={{ backgroundColor: '#00c3b3', color: '#fff', padding: '10px 40px', fontSize: '18px', fontWeight: 'bold', boxShadow: '0 5px 15px rgba(0, 195, 179, 0.4)' }}>
                                        Join Now
                                    </Link>
                                </div>

                                <p style={{ fontWeight: 'bold', fontSize: '15px', padding: '0 15px' }}>
                                    {tier.intro}
                                </p>

                                {tier.extraNotice && (
                                    <p style={{ color: '#d9534f', fontSize: '14px', marginBottom: '15px' }}>{tier.extraNotice}</p>
                                )}

                                <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555', marginBottom: '40px' }}>
                                    {tier.features.map((feature, index) => (
                                        <li key={index} style={{ marginBottom: '8px' }}>{feature}</li>
                                    ))}
                                </ul>

                                <h5 style={{ fontWeight: 'bold', color: '#555', marginTop: '50px', marginBottom: '30px' }}>{tier.fee}</h5>

                                {tier.qualificationText.length > 0 && (
                                    <>
                                        <h5 style={{ color: '#e67e22', fontWeight: 'bold', marginBottom: '20px' }}>Qualification</h5>
                                        <ul style={{ listStyleType: 'disc', paddingLeft: '30px', textAlign: 'left', fontSize: '14px', color: '#555' }}>
                                            {tier.qualificationText.map((text, index) => (
                                                <li key={index} style={{ marginBottom: '15px' }}>
                                                    {text.split('\n').map((line, i) => (
                                                        <span key={i}>
                                                            {line}
                                                            {i < text.split('\n').length - 1 && <br />}
                                                        </span>
                                                    ))}
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="row text-center mt-5 pt-3">
                    <div className="col-12">
                        <h5 style={{ color: '#e67e22', fontWeight: 'bold' }}>Your membership will be personally reviewed by ASIA CEO Community</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MembershipTiers;
