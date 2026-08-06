import React from 'react';
import Link from 'next/link';

const CeoBusinessAwards = () => {
    const awards = [
        {
            header: "Eliza Ng - Chief People & Culture Officer at HKPC - Hong Kong Productivity Council",
            image: "/assets/img/membersArea/Award3.avif",
            title: "Eliza Ng - Chief People & Culture Officer at HKPC - Hong Kong Productivity Council",
            specialThanks: "Special thanks to Albert Yip, MH, FCPA Aust., MSc(IS) - Chairman of Syndicate Capital & Chief Strategy Officer of BOA International Financial Group to present this award to Eliza",
            aboutTitle: "About Eliza:",
            aboutText: "Eliza is currently Chief People & Culture Officer at Hong Kong Productivity Council. She holds a Master Degree in HR Development and Training with over 30 years all round HR experience as Senior HR Executive in US Fortune 500 Listed Company, Investment Banking and Hong Kong Listed IT Company. She also serves as a member of the Hong Kong Management Association’s (HKMA) HR Development Management Committee since 2011; a Board of Examiner of HKMA’s Award for Excellence in Training and Development since 2012; Executive Committee of the Chamber’s Women Executives Club of The Hong Kong General Chamber of Commerce (HKGCC) since 2014; Manpower Committee of HKGCC in 2017."
        },
        {
            header: "Amit Raheja GM – MD, Johnson & Johnson – Hong Kong",
            image: "/assets/img/membersArea/Award1.avif",
            title: "Amit Raheja is the GM – MD, Johnson & Johnson – Hong Kong",
            specialThanks: "Special thanks to Hoffman Ma - Deputy Chairman at Success Universe Group to present this award to Amit",
            aboutTitle: "About Amit Raheja",
            aboutText: "Amit Raheja is the GM – MD, Johnson & Johnson – Hong Kong. He is responsible for the overall business for Medical Devices for Johnson & Johnson in Hong Kong & Macau. He serves as Director on the Board of Directors of J&J Hong Kong. Amit joined J&J in 2004 and has served in various commercial leadership roles across the healthcare medical device sector.<br/><br/>He completed his MBA from ISB (Indian School of Business) in 2004 and graduated the ‘Value Based Healthcare’ program from Harvard Business School in 2017. Prior to joining Johnson & Johnson, Amit was an entrepreneur for 5 years"
        },
        {
            header: "Victor Law - General Manager Cybersecurity, Greater China Region at DXC Technology",
            image: "/assets/img/membersArea/Award2.avif",
            title: "Victor Law - General Manager Cybersecurity, Greater China Region at DXC Technology",
            specialThanks: "Special thanks to Horace Ma - CFO at S Culture to present this award to Victor",
            aboutTitle: "About Victor Law",
            aboutText: "Victor Law is the General Manager Cybersecurity, Greater China Region at DXC Technology. He is responsible for the overall business strategy and delivery of cybersecurity services for DXC in China, Hong Kong & Macau and Taiwan. Victor has extensive experience in handling cybersecurity matters and is a seasoned speaker in industry conferences and events. He is also the recipient of the Cyber Security Professionals Gold Award (2017) by the Hong Kong Government."
        }
    ];

    return (
        <div className="ceo-business-awards-area pt-100 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="mb-5 text-center">
                    <h2 style={{ color: '#555', fontSize: '32px', marginBottom: '40px', fontWeight: '300' }}>
                        Asia CEO COMMUNITY - The Most Popular Business<br/>
                        Leaders Award Winner Award 2020
                    </h2>
                </div>

                <div className="awards-list">
                    {awards.map((award, index) => (
                        <div className="award-item mb-5 pb-5" key={index}>
                            <h5 style={{ fontWeight: 'bold', color: '#444', fontSize: '18px', marginBottom: '20px' }}>
                                {award.header}
                            </h5>
                            
                            <div className="row">
                                <div className="col-md-7 mb-4 mb-md-0">
                                    <img 
                                        src={award.image} 
                                        alt={award.header} 
                                        style={{ width: '100%', height: 'auto', display: 'block', marginBottom: '20px' }} 
                                    />
                                </div>
                                <div className="col-md-5">
                                    <p style={{ color: '#555', fontSize: '15px', marginBottom: '20px' }}>
                                        {award.title}
                                    </p>
                                    <p style={{ color: '#555', fontSize: '15px', marginBottom: '30px' }}>
                                        {award.specialThanks}
                                    </p>
                                    <h6 style={{ fontWeight: 'bold', color: '#000', fontSize: '16px', marginBottom: '10px' }}>
                                        {award.aboutTitle}
                                    </h6>
                                    <div style={{ color: '#555', fontSize: '15px', lineHeight: '1.6' }} dangerouslySetInnerHTML={{ __html: award.aboutText }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-4">
                    <p style={{ color: '#e67e22', fontSize: '16px', fontWeight: '500' }}>
                        For additional information, please <Link href="/contact" style={{ color: '#e67e22', textDecoration: 'underline' }}>contact us</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CeoBusinessAwards;
