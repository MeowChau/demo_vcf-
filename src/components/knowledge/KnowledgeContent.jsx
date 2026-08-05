"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { knowledgeData as allNews } from './knowledgeData';

const KnowledgeContent = () => {
    const [currentPage, setCurrentPage] = useState(1);

    // Calculate items for current page
    let currentItems = [];
    let featuredItem = null;
    let gridItems = [];

    if (currentPage === 1) {
        featuredItem = allNews[0];
        gridItems = allNews.slice(1, 10); // 9 items
    } else {
        // Page 2 starts at index 10. Page 3 at 19.
        const startIndex = 10 + (currentPage - 2) * 9;
        gridItems = allNews.slice(startIndex, startIndex + 9);
    }

    // Total pages calculation
    // Page 1 takes 10 items. Remaining items take 9 per page.
    const remainingItems = Math.max(0, allNews.length - 10);
    const totalPages = 1 + Math.ceil(remainingItems / 9);

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

            {/* Featured Item - Only on Page 1 */}
            {currentPage === 1 && featuredItem && (
                <div className="row mb-5 pb-4" style={{ borderBottom: '1px solid #eee' }}>
                    <div className="col-lg-8 col-md-7 mb-4 mb-md-0">
                        <Link href={`/tri-thuc/${featuredItem.id}`} className="d-block" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden' }}>
                            <Image
                                src={featuredItem.image}
                                alt={featuredItem.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Link>
                    </div>
                    <div className="col-lg-4 col-md-5 d-flex flex-column justify-content-center">
                        <Link href={`/tri-thuc/${featuredItem.id}`}>
                            <h2 className="news-title mb-3" style={{ fontSize: '36px', lineHeight: '1.3', fontWeight: 800 }}>
                                {featuredItem.title}
                            </h2>
                        </Link>
                        <p className="news-desc mb-4">
                            {featuredItem.desc}
                        </p>
                        <div className="news-time">
                            {featuredItem.time}
                        </div>
                    </div>
                </div>
            )}

            {/* Grid Items */}
            <div className="row g-4">
                {gridItems.map((item) => (
                    <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                        <Link href={`/tri-thuc/${item.id}`} className="d-block mb-3" style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </Link>
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
