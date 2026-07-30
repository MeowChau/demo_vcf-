import React from 'react';
import Link from 'next/link';

const ChapterCommittee = ({ countryName }) => {
    // Generate some placeholder members based on the screenshot
    const placeholders = [
        { name: 'Doron Shachar', title: 'Founder & CEO', sub: 'at Renova Cloud' },
        { name: 'Kenny Chiang', title: 'Managing Director, ACSI', sub: 'at Accentus Capital Partners Company' },
        { name: 'Khue Dinh', title: 'Country President', sub: 'Vietnam at Chubb' },
        { name: 'Markus Patrick Chan 陳宏傑博士', title: 'Chief Education Officer', sub: 'at ...' }
    ];

    const formattedCountryName = countryName
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="chapter-committee-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                <div className="text-center mb-5">
                    <h1 style={{ fontSize: '38px', color: '#555', fontWeight: 'normal' }}>
                        Asia CEO Community - {formattedCountryName} Chapter Committee
                    </h1>
                </div>

                <div className="mb-5">
                    <h4 style={{ color: '#e67e22', fontWeight: 'bold', fontSize: '16px', textTransform: 'uppercase', marginBottom: '15px' }}>
                        OUR OBJECTIVE:
                    </h4>
                    <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.6' }}>
                        Build a strongly knitted community of CxOs across Asia and be a powerful force for change through meaningful business and social relationships
                    </p>
                </div>

                <div className="row mt-5">
                    {placeholders.map((member, index) => (
                        <div className="col-lg-3 col-md-6 mb-5" key={index}>
                            {/* Placeholder for image since user said not to add actual images yet */}
                            <div style={{ position: 'relative', width: '100%', paddingBottom: '100%', backgroundColor: '#f0f0f0', marginBottom: '20px', border: '1px dashed #ccc', borderRadius: '5px' }}>
                                <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#aaa', fontSize: '14px', textAlign: 'center' }}>
                                    Image<br/>Placeholder
                                </div>
                            </div>
                            
                            <div className="text-center">
                                <h4 style={{ color: '#d32f2f', fontSize: '20px', marginBottom: '10px' }}>{member.name}</h4>
                                <p style={{ fontSize: '14px', color: '#333', marginBottom: '5px' }}>{member.title}</p>
                                <p style={{ fontSize: '14px', color: '#555' }}>{member.sub}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-5">
                    <Link href="/global-chapters">
                        <button className="btn btn-secondary" style={{ padding: '10px 30px', backgroundColor: '#1b3f54', border: 'none', borderRadius: '20px' }}>
                            Back to Global Chapters
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ChapterCommittee;
