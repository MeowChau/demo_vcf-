import React from 'react';

const SingaporeNewYearDinner2026 = () => {
    const btnStyleLightTeal = {
        backgroundColor: '#bdf1e6', // light teal color matching screenshot
        color: '#333',
        border: 'none',
        borderRadius: '5px',
        padding: '12px 30px',
        margin: '0 10px 15px',
        fontSize: '15px',
        fontWeight: 'bold',
        cursor: 'pointer',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        flex: '1 1 auto',
        minWidth: '220px'
    };

    const attendedMembers = [
        "1. Gary Lam - Founder at ASIA CEO COMMUNITY",
        "2. Joseph Lee - President at Global Business Chambers",
        "3. Dr. Michelle Kwan -Secretary General of Hong Kong Legal Exchange Foundation",
        "4. Allan Tsang, MSc - Principal Negotiation Advisor at 88 Owls",
        "5. Raymond Lim - Founder and CEO at Vanguard Financial Group Pte Ltd",
        "6. Darrell Lim - Vice President at UOB Kay Hian Singapore",
        "7. Danial Ong - Regional Director at ti&m Pte. Ltd.",
        "8. Alan LIM, MBA - Founding Member at Artificial Intelligence International Institute (AIII) | Co-Founder & Director at Southmead",
        "9. Chan Vincent - CEO at Hong Cai Color Tech Pte Ltd",
        "10. Soo Wei Toong - General Manager at mm2 entertainment Pte Ltd",
        "11. George C Tan - Advisor to the Board at RenalWorks Pte Ltd | Chief Advisor at Mayrui Techology & Management Pte Ltd",
        "12. Jerry Tan - Founder & Holistic Lifestyle Strategist at Kingdom Lifestyle Management Services",
        "13. Jameson Koh - Member of ASIA CEO COMMUNITY",
        "14. Jack Ellis - Head of Product (APAC) at Intuition",
        "15. David Cheang - Chief Executive Officer and Founder at DC13 Group of Companies",
        "16. Johnson Chng - Chairman Asia at VenCap International plc | Co-Chief Executive Officer at Llewellyn & Partners Co. Ltd. (LPC)",
        "17. Kenny Ng - Group Managing Director at Oakwood & Drehem Capital Pte Ltd",
        "18. James Cheng, FCMA, CGMA, FIPA，HKCPA - Chief Financial Officer at Canaan Inc",
        "19. Jamie Lim - Vice President at Offshore Banking in Citi, International Personal Bank",
        "20. Rina Pua - CEO of Nation Care entities",
        "21. Davy Goh - CEO at Passion Venture Capital Pte Ltd",
        "22. Pei-Han Chuang 莊沛翰 - Founder at Morpheus Labs",
        "23. Nicholas Tan - Co-Founder and CEO at Sino Aerospace Ventures",
        "24. Samuel Eyo - Managing Director at Lighthouse Property Consultants Pte Ltd",
        "25. Zen Chen - Founder at Hover X Space",
        "26. Sofan Tan - Consultant at Financial Alliance",
        "27. Elva Zou, PhD - Head of Gojek Strategy at Gojek",
        "28. Wayne Soo - Chairman at FIDUCIA LLP",
        "29. Dickson Mah - Group CEO at Joyre Group",
        "30. Keith Toh at OCBC Bank",
        "31. Peter Lim - Managing Director / Chief Executive Officer at Promise Land Pte Ltd",
        "32. Ferris Chan - Director, Business Development at VISTRA, CPA",
        "33. Lawrence Tan - Assoc Director at Brilliance Capital",
        "34. Janet Lee - Managing Director at Venture Capital Network pte ltd",
        "35. Camillus Yang - Managing Director at ANew Energy Pte Ltd",
        "36. Mark Burnard - Founder CDAIO Guild; Board Advisor TopSchool.ai",
        "37. Simon Monteiro at List Sotheby’s international Singapore",
        "38. George C Tan - Advisor to CEO at RenalWorks Pte Ltd",
        "39. Davy Lau - Founder at Next-Gen Leaders (NGL) Group | Board Member at Hong Kong-ASEAN Economic Cooperation Foundation",
        "40. Srihari Sikhakollu - Asia CEO Community member",
        "41. Ivy Wong - Executive Committee at Asia-ISAC",
        "42. Simon Wong - Managing Director at Sonexa Capital"
    ];

    return (
        <div className="singapore-new-year-dinner-page pt-80 pb-100" style={{ backgroundColor: '#fff2df', color: '#333' }}>
            <div className="container" style={{ maxWidth: '1100px' }}>
                
                {/* Header Area */}
                <div className="mb-5 text-center text-md-start">
                    <h1 style={{ fontSize: '46px', fontWeight: 'bold', color: '#a61c34', textTransform: 'uppercase', marginBottom: '10px' }}>
                        SINGAPORE NEW YEAR DINNER 2026
                    </h1>
                    <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#555', marginBottom: '30px' }}>
                        Powered By: ASIA CEO COMMUNITY X GLOBAL CEO COMMUNITY
                    </h2>
                    
                    <div className="d-flex justify-content-center justify-content-md-start flex-wrap mt-4" style={{ gap: '15px' }}>
                        <button style={btnStyleLightTeal}>Upcoming Events</button>
                        <button style={btnStyleLightTeal}>Guest Speaker Registration</button>
                        <button style={btnStyleLightTeal}>Sponsor Our Events</button>
                    </div>
                </div>

                {/* Images */}
                <div className="mb-5">
                    <img src="/assets/img/pastEvents/IMG_9073_JPG.avif" alt="Singapore New Year Dinner Group Photo" style={{ width: '100%', display: 'block', boxShadow: '0 4px 15px rgba(0,0,0,0.1)', marginBottom: '15px' }} />
                </div>

                {/* Attended Members */}
                <div className="attended-members-section" style={{ fontSize: '15px', color: '#444', lineHeight: '1.6' }}>
                    <h4 style={{ fontWeight: 'bold', fontSize: '18px', color: '#333', marginBottom: '10px' }}>Attended Members:</h4>
                    {attendedMembers.map((member, index) => (
                        <p key={index} style={{ marginBottom: '3px' }}>{member}</p>
                    ))}
                    <p style={{ marginTop: '15px', fontWeight: 'normal' }}>and more..</p>
                </div>

            </div>
        </div>
    );
};

export default SingaporeNewYearDinner2026;
