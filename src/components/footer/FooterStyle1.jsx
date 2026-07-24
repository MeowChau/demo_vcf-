import React from 'react';
import Link from 'next/link';

const FooterStyle1 = () => {
    return (
        <>
            <footer className="bg-dark text-light" style={{ padding: '60px 0', fontSize: '15px', lineHeight: '1.6' }}>
                <div className="container">
                    {/* Top Row: Copyright and Socials */}
                    <div className="row align-items-center mb-4">
                        <div className="col-lg-8 col-md-12 mb-3 mb-lg-0">
                            <p style={{ margin: 0 }}>&copy; Copyright 2024 ASIA CEO COMMUNITY LIMITED. All Rights Reserved.</p>
                        </div>
                        <div className="col-lg-4 col-md-12">
                            <ul className="footer-social" style={{ display: 'flex', gap: '5px', listStyle: 'none', padding: 0, margin: 0, justifyContent: 'flex-start' }}>
                                <li><a href="#" style={{ display: 'inline-flex', width: '35px', height: '35px', backgroundColor: '#3b5998', color: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="#" style={{ display: 'inline-flex', width: '35px', height: '35px', backgroundColor: '#007bb5', color: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="#" style={{ display: 'inline-flex', width: '35px', height: '35px', backgroundColor: '#bb0000', color: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><i className="fab fa-youtube"></i></a></li>
                                <li><a href="#" style={{ display: 'inline-flex', width: '35px', height: '35px', backgroundColor: '#55acee', color: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><i className="fab fa-twitter"></i></a></li>
                                <li><a href="#" style={{ display: 'inline-flex', width: '35px', height: '35px', backgroundColor: '#333333', color: '#fff', alignItems: 'center', justifyContent: 'center', borderRadius: '4px' }}><i className="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    {/* Links */}
                    <div className="row mb-4 mt-5">
                        <div className="col-12">
                            <Link href="#" style={{ color: '#fff', textDecoration: 'underline', marginRight: '30px' }}>Privacy Policy</Link>
                            <Link href="#" style={{ color: '#fff', textDecoration: 'underline' }}>Terms &amp; Conditions</Link>
                        </div>
                    </div>

                    {/* Contact Us */}
                    <div className="row mb-4">
                        <div className="col-12">
                            <p style={{ margin: '0 0 5px 0' }}>CONTACT US</p>
                            <p style={{ margin: '0 0 5px 0' }}>Address: Lemmi Centre, unit 1703, 17/F, No. 50 Hoi Yuen Rd, Kwun Tong, Hong Kong</p>
                            <p style={{ margin: 0 }}>Email : ceo@asiaceo.club<span style={{ marginLeft: '10px' }}>Tel : + 852 3590 3939</span></p>
                        </div>
                    </div>

                    {/* Disclaimer */}
                    <div className="row mt-5">
                        <div className="col-12">
                            <p style={{ marginBottom: '20px' }}>Disclosure and Disclaimer for Asia CEO Community Website www.asiaceo.club</p>
                            <p style={{ marginBottom: '10px' }}>1. Accuracy of Information: The Asia CEO Community website (hereinafter referred to as "the Website") strives to provide accurate and reliable information. However, we cannot guarantee the absolute accuracy, completeness, or reliability of the information presented on the Website. The content provided on the Website is for general informational purposes only and should not be considered as professional advice.</p>
                            <p style={{ marginBottom: '10px' }}>2. No Liability for Misinformation: The Website and its administrators, employees, contributors, and affiliates shall not be held liable for any errors, omissions, or inaccuracies in the information provided on the Website. Users of the Website are solely responsible for verifying the accuracy, suitability, and appropriateness of the information and should not rely solely on the information provided on the Website when making any financial or investment decisions.</p>
                            <p style={{ marginBottom: '10px' }}>3. Independent Research and Due Diligence: The Website encourages all members and viewers to conduct their own research and due diligence before making any investment decisions or taking any actions based on the information found on the Website. It is essential to seek advice from qualified professionals or financial advisors who can provide personalized guidance based on individual circumstances.</p>
                            <p style={{ marginBottom: '10px' }}>4. Personal Responsibility: The use of any information or materials obtained from the Website is at the user's own risk. The Website and its administrators, employees, contributors, and affiliates shall not be held responsible for any losses, damages, or liabilities incurred as a result of using or relying on the information provided on the Website.</p>
                            <p style={{ marginBottom: '15px' }}>5. Third-Party Content and External Links: The Website may contain links to external websites or resources that are not under our control. We do not endorse or assume any responsibility for the content, accuracy, or availability of these external sites. Users should exercise caution and review the terms and conditions and privacy policies of any third-party websites they visit.</p>
                            <p style={{ margin: 0 }}>By accessing and using the Asia CEO Community Website, users acknowledge and agree to the above disclosure and disclaimer. It is recommended to review this disclosure and disclaimer periodically, as it may be subject to change without prior notice.</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterStyle1;