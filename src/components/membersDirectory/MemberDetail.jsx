import React from 'react';
import Link from 'next/link';

const MemberDetail = ({ id }) => {
    // For now, using the same layout based on the user's mockup.
    // In the future, this data can be fetched dynamically based on the 'id'.
    const imageSrc = `/assets/img/membersArea/Image-empty-state (${parseInt(id) + 1 > 1 && parseInt(id) + 1 <= 11 ? parseInt(id) + 1 : 2}).avif`;

    return (
        <div className="member-detail-area pt-100 pb-100" style={{ backgroundColor: '#fff2df' }}>
            <div className="container" style={{ maxWidth: '900px' }}>
                <div className="row mb-4">
                    <div className="col-12 text-center">
                        <h2 style={{ color: '#3170b5', fontWeight: 'bold', textTransform: 'uppercase', fontSize: '32px', marginBottom: '20px' }}>MEMBER DIRECTORY</h2>
                    </div>
                </div>

                {/* Top Nav */}
                <div className="row mb-4">
                    <div className="col-12 d-flex justify-content-between">
                        <Link href={`/member-directory/${Math.max(1, parseInt(id) - 1)}`} className="btn flex-fill text-center" style={{ backgroundColor: '#e0e0e0', border: '1px solid #999', color: '#666', borderRadius: 0, marginRight: '10px' }}>Previous</Link>
                        <Link href="/member-directory" className="btn flex-fill text-center" style={{ backgroundColor: '#fff2df', border: '1px solid #333', color: '#000', fontWeight: 'bold', borderRadius: 0, marginRight: '10px' }}>Back to Search</Link>
                        <Link href={`/member-directory/${parseInt(id) + 1}`} className="btn flex-fill text-center" style={{ backgroundColor: '#e0e0e0', border: '1px solid #999', color: '#666', borderRadius: 0 }}>Next</Link>
                    </div>
                </div>

                {/* Main Card Image */}
                <div className="row mb-4">
                    <div className="col-12">
                        <img src={imageSrc} alt="Member" style={{ width: '100%', height: 'auto', border: '1px solid #ddd' }} />
                    </div>
                </div>

                {/* Content */}
                <div className="row mb-5">
                    <div className="col-12">
                        <h4 style={{ color: '#555', marginBottom: '5px' }}>Founder & CEO</h4>
                        <h4 style={{ color: '#555', marginBottom: '20px' }}>EB Producciones</h4>
                        
                        <p style={{ color: '#555', lineHeight: '1.8', fontSize: '16px', marginBottom: '30px' }}>
                            Eduardo Basagana is a Argentine music executive, manager, and producer, recognized as the founder and CEO of EB Producciones—an intercontinental entertainment company—and the immersive streaming platform +VIVO. Named by Forbes Latin America in their "Top 20 Power Minds" lineup, Basagaña has built an elite reputation running a highly successful, independent boutique corporate model. A graduate of the Harvard Business School, his career features successful touring and management collaborations with global Latin and Spanish superstars like Karol G, Mon Laferte, Aitana, and Ana Mena. Renowned for breaking historical industry boundaries, he engineered Ana Mena's historic headline performance at Japan's a-nation Festival, the first ever a female latin artist headline a musical festival in Asia. Today, Basagaña remains at the absolute forefront of global music expansion, actively bridging Latin entertainment with the world, including the uncharted markets of Asia, India, and Africa.
                        </p>
                        
                        {/* Action Buttons */}
                        <div className="d-flex justify-content-between gap-3">
                            <Link href="/signup" className="btn flex-fill" style={{ background: 'linear-gradient(180deg, #6bb0ff 0%, #3582e6 100%)', color: '#fff', border: 'none', borderRadius: '5px', padding: '12px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>SIGNUP TO CONNECT</Link>
                            <Link href="/login" className="btn flex-fill" style={{ background: 'linear-gradient(180deg, #6bb0ff 0%, #3582e6 100%)', color: '#fff', border: 'none', borderRadius: '5px', padding: '12px', fontWeight: 'bold', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>LOGIN</Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Nav */}
                <div className="row">
                    <div className="col-12 d-flex justify-content-between">
                        <Link href={`/member-directory/${Math.max(1, parseInt(id) - 1)}`} className="btn flex-fill text-center" style={{ backgroundColor: '#e0e0e0', border: '1px solid #999', color: '#666', borderRadius: 0, marginRight: '10px' }}>Previous</Link>
                        <Link href="/member-directory" className="btn flex-fill text-center" style={{ backgroundColor: '#fff2df', border: '1px solid #333', color: '#000', fontWeight: 'bold', borderRadius: 0, marginRight: '10px' }}>Back to Search</Link>
                        <Link href={`/member-directory/${parseInt(id) + 1}`} className="btn flex-fill text-center" style={{ backgroundColor: '#e0e0e0', border: '1px solid #999', color: '#666', borderRadius: 0 }}>Next</Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MemberDetail;
