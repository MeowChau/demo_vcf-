import React from 'react';
import Link from 'next/link';

const coverageData = [
  {
    type: 'image',
    src: '/assets/img/aboutUs/IMG_5731_JPG.avif',
    caption: 'SHARING AT BLOOMBERG ASIA CEO COMMUNITY'
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/aGBXg5tpZpo',
    caption: 'Interview with ViuTV 智富通 創業軍師'
  },
  {
    type: 'image',
    src: '/assets/img/aboutUs/1747028868901.avif',
    caption: 'Interview with RTHK RADIO'
  },
  {
    type: 'image',
    src: '/assets/img/aboutUs/New 3.avif',
    caption: '商識滿天下｜林港豐創辦亞洲董事會開拓創業路 - 統籌：香港中文大學EMBA課程 | 頭條日報 (stheadline.com)'
  },
  {
    type: 'image',
    src: '/assets/img/aboutUs/News - Gary.avif',
    caption: '首屆亞洲元宇宙博覽會今開幕　元宇宙為碳中和提供巨大潛能 - 港聞 - 大公文匯網 (tkww.hk)'
  },
  {
    type: 'image',
    src: '/assets/img/aboutUs/New 4.avif',
    caption: '商識滿天下｜林港豐以開明態度領導團隊 - 統籌：香港中文大學EMBA課程 | 頭條日報 (stheadline.com)'
  },
  {
    type: 'image',
    src: '/assets/img/aboutUs/New 5.avif',
    caption: 'https://www.dotdotnews.com/a/202210/17/AP634d6046e4b0adad9d6250a7.html',
    link: 'https://www.dotdotnews.com/a/202210/17/AP634d6046e4b0adad9d6250a7.html'
  },
  {
    type: 'image',
    src: '/assets/img/aboutUs/Interview.avif',
    caption: 'https://www.businessleader.co.uk/2024-global-fintech-magnet/',
    link: 'https://www.businessleader.co.uk/2024-global-fintech-magnet/'
  },
  {
    type: 'video',
    src: 'https://www.youtube.com/embed/qx81cHYrRh0',
    caption: 'Bob Low Interview'
  },
  {
    type: 'image',
    src: '/assets/img/aboutUs/news 2024.avif',
    caption: 'BERNAMA - Qube Integrated Malaysia Inks MoU With Asia CEO Community, Unveils MITEC Card'
  }
];

const MediaCoverage = () => {
    return (
        <div className="media-coverage-page-area pt-80 pb-100" style={{ backgroundColor: '#fff' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                
                {/* Title */}
                <h1 style={{ color: '#09274b', fontSize: '42px', fontWeight: 'bold', marginBottom: '40px', textTransform: 'uppercase', textAlign: 'center', letterSpacing: '2px' }}>
                    MEDIA COVERAGE
                </h1>

                <div className="media-list">
                    {coverageData.map((item, index) => (
                        <div key={index} className="media-item mb-5" style={{ textAlign: 'left' }}>
                            {/* Media Object */}
                            <div className="media-content mb-3" style={{ textAlign: 'center' }}>
                                {item.type === 'video' ? (
                                    <iframe 
                                        width="100%" 
                                        height="450" 
                                        src={item.src} 
                                        title={item.caption} 
                                        frameBorder="0" 
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                        allowFullScreen
                                        style={{ borderRadius: '5px' }}
                                    ></iframe>
                                ) : (
                                    <img 
                                        src={item.src} 
                                        alt={item.caption} 
                                        style={{ width: '100%', maxHeight: '600px', objectFit: 'contain', borderRadius: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }} 
                                    />
                                )}
                            </div>

                            {/* Caption */}
                            <div className="media-caption">
                                {item.link ? (
                                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ color: '#555', fontSize: '20px', textDecoration: 'underline' }}>
                                        {item.caption}
                                    </a>
                                ) : (
                                    <p style={{ color: '#555', fontSize: '20px', textDecoration: item.type === 'video' ? 'underline' : 'none' }}>
                                        {item.caption}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default MediaCoverage;
