"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CeoVideoCarousel from '../home/CeoVideoCarousel';

const KnowledgeContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [allNews, setAllNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                const response = await fetch(`${API_URL}/api/articles?populate=*&pagination[limit]=100`);
                const json = await response.json();
                
                if (json.data) {
                    const parseDateStr = (dStr) => {
                        if (!dStr) return 0;
                        const m = String(dStr).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                        if (m) return new Date(m[3], m[2] - 1, m[1]).getTime();
                        return new Date(dStr).getTime() || 0;
                    };
                    const formattedData = json.data
                        .map(item => {
                            const attr = item.attributes || item;
                            let imageUrl = '/assets/img/baiVietMau/bai1.png';
                            if (attr.image && attr.image.data) {
                                imageUrl = `${API_URL}${attr.image.data.attributes.url}`;
                            } else if (attr.image && attr.image.url) {
                                imageUrl = `${API_URL}${attr.image.url}`;
                            } else if (attr.imageUrl) {
                                imageUrl = attr.imageUrl;
                            }
                            
                            return {
                                id: item.documentId || item.id,
                                title: attr.title,
                                desc: attr.desc || attr.title,
                                tags: attr.tags,
                                time: attr.time || new Date(attr.createdAt).toLocaleDateString('vi-VN'),
                                comments: attr.comments || 0,
                                image: imageUrl
                            };
                        })
                        .sort((a, b) => parseDateStr(b.time) - parseDateStr(a.time));
                    
                    setAllNews(formattedData);
                }
            } catch (error) {
                console.error("Error fetching articles:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchArticles();
    }, []);

    // Calculate items for current page
    const startIndex = (currentPage - 1) * 9;
    const gridItems = allNews.slice(startIndex, startIndex + 9);

    // Total pages calculation
    const totalPages = Math.ceil(allNews.length / 9);

    const handlePageChange = (page) => {
        setCurrentPage(page);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="container">
            <style dangerouslySetInnerHTML={{
                __html: `
                .news-title {
                    color: #333;
                    font-weight: 700;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .news-title:hover {
                    color: #da151a;
                }
                .news-time {
                    color: #888;
                    font-size: 17px;
                }
                .news-desc {
                    color: #555;
                    font-size: 16px;
                    line-height: 1.6;
                }
                .pagination-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 15px;
                    border: 1px solid #ddd;
                    background-color: #fff;
                    color: #333;
                    cursor: pointer;
                    border-radius: 4px;
                    transition: all 0.3s;
                }
                .pagination-btn:hover:not(:disabled) {
                    background-color: #f0f0f0;
                }
                .pagination-btn.active {
                    background-color: #002b5e;
                    color: #fff;
                    border-color: #002b5e;
                }
                .pagination-btn:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
            `}} />

            {/* Video Carousel - Only on Page 1 */}
            {currentPage === 1 && (
                <div className="mb-5">
                    <CeoVideoCarousel />
                </div>
            )}

            {/* Grid Items */}
            {isLoading ? (
                <div className="text-center py-5">
                    <div className="spinner-border text-danger" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : (
                <div className="row g-4">
                    {gridItems.map((item) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                        {item.image && (
                            <Link href={`/tri-thuc/${item.id}`} className="d-block mb-3" style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </Link>
                        )}
                        <Link href={`/tri-thuc/${item.id}`}>
                            <h4 className="news-title mb-2" style={{ fontSize: '22px', lineHeight: '1.4', fontWeight: 700 }}>
                                {item.title}
                            </h4>
                        </Link>
                        <div className="news-time d-flex align-items-center mt-2">
                            {item.time && <span>{item.time}</span>}
                        </div>
                    </div>
                ))}
            </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
                <div className="row mt-5 pt-3">
                    <div className="col-12 d-flex justify-content-center flex-wrap" style={{ gap: '10px' }}>
                        <button
                            className="pagination-btn"
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            Trang trước
                        </button>

                        {[...Array(totalPages)].map((_, idx) => (
                            <button
                                key={idx}
                                className={`pagination-btn ${currentPage === idx + 1 ? 'active' : ''}`}
                                onClick={() => handlePageChange(idx + 1)}
                            >
                                {idx + 1}
                            </button>
                        ))}

                        <button
                            className="pagination-btn"
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            Trang sau
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default KnowledgeContent;
