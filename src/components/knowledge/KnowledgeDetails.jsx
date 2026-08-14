"use client"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const KnowledgeDetails = ({ id }) => {
    const [article, setArticle] = useState(null);
    const [relatedArticles, setRelatedArticles] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                
                // Fetch current article
                const res = await fetch(`${API_URL}/api/articles/${id}?populate=*`);
                const data = await res.json();
                
                const getImageUrl = (imgObj) => {
                    if (!imgObj) return null;
                    const url = imgObj.url || imgObj.data?.attributes?.url;
                    if (!url) return null;
                    return url.startsWith('http') ? url : `${API_URL}${url}`;
                };

                if (data && data.data) {
                    const item = data.data;
                    setArticle({
                        id: item.documentId || item.id,
                        title: item.title,
                        desc: item.desc,
                        image: getImageUrl(item.image) || item.imageUrl || null,
                        time: item.time,
                        tags: item.tags,
                        comments: item.comments
                    });
                }

                // Fetch related articles
                const relRes = await fetch(`${API_URL}/api/articles?populate=*`);
                const relJson = await relRes.json();
                if (relJson.data) {
                    const parseDateStr = (dStr) => {
                        if (!dStr) return 0;
                        const m = String(dStr).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/);
                        if (m) return new Date(m[3], m[2] - 1, m[1]).getTime();
                        return new Date(dStr).getTime() || 0;
                    };
                    const formattedRelData = relJson.data
                        .filter(item => (item.documentId || item.id) != id)
                        .map(item => {
                            const attr = item.attributes || item;
                            return {
                                id: item.documentId || item.id,
                                title: attr.title,
                                time: attr.time || new Date(attr.createdAt).toLocaleDateString('vi-VN'),
                                image: attr.image?.data?.attributes?.url 
                                    ? `${API_URL}${attr.image.data.attributes.url}`
                                    : attr.image?.url 
                                        ? `${API_URL}${attr.image.url}` 
                                        : attr.imageUrl || '/assets/img/baiVietMau/bai1.png'
                            };
                        })
                        .sort((a, b) => parseDateStr(b.time) - parseDateStr(a.time))
                        .slice(0, 6);
                    setRelatedArticles(formattedRelData);
                }
            } catch (error) {
                console.error("Error fetching article details:", error);
            } finally {
                setIsLoading(false);
            }
        };

        if (id) {
            fetchData();
        }
    }, [id]);

    if (isLoading) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    if (!article) {
        return (
            <div className="container text-center py-5">
                <h3>Không tìm thấy bài viết!</h3>
                <Link href="/tri-thuc" className="btn btn-danger mt-3">Quay lại danh sách</Link>
            </div>
        );
    }

    return (
        <div className="container">
            <style dangerouslySetInnerHTML={{
                __html: `
                .article-main-title {
                    color: #da151a;
                    font-size: 32px;
                    font-weight: 700;
                    margin-bottom: 15px;
                    line-height: 1.3;
                }
                .article-meta {
                    color: #555;
                    font-size: 14px;
                    margin-bottom: 25px;
                    display: flex;
                    align-items: center;
                    gap: 15px;
                }
                .article-meta i {
                    color: #da151a;
                    margin-right: 5px;
                }
                .article-content {
                    font-size: 16px;
                    line-height: 1.8;
                    color: #333;
                }
                .article-content p {
                    margin-bottom: 20px;
                }
                .article-content strong {
                    font-weight: 700;
                }
                .sidebar-title {
                    color: #da151a;
                    font-size: 20px;
                    font-weight: 700;
                    margin-bottom: 25px;
                    padding-bottom: 10px;
                    border-bottom: 2px solid #f0f0f0;
                }
                .related-item {
                    display: flex;
                    align-items: center;
                    margin-bottom: 20px;
                    transition: transform 0.2s;
                }
                .related-item:hover {
                    transform: translateX(5px);
                }
                .related-thumb {
                    flex-shrink: 0;
                    width: 120px;
                    height: 80px;
                    position: relative;
                    border-radius: 4px;
                    overflow: hidden;
                    margin-right: 15px;
                }
                .related-info {
                    flex-grow: 1;
                }
                .related-title {
                    font-weight: 700;
                    font-size: 15px;
                    color: #333;
                    line-height: 1.4;
                    margin-bottom: 5px;
                    display: -webkit-box;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                    overflow: hidden;
                    text-decoration: none;
                }
                .related-title:hover {
                    color: #da151a;
                }
                .related-date {
                    color: #888;
                    font-size: 12px;
                }
            `}} />

            <div className="row">
                {/* Main Content */}
                <div className="col-lg-8 pe-lg-5 mb-5 mb-lg-0">
                    <h1 className="article-main-title">{article.title}</h1>
                    
                    <div className="article-meta">
                        <span><i className="fas fa-tags"></i> {article.tags}</span>
                        <span><i className="far fa-calendar-alt"></i> {article.time}</span>
                    </div>

                    {article.image && (
                        <div className="mb-4" style={{ position: 'relative', width: '100%', aspectRatio: '16/9', overflow: 'hidden', borderRadius: '4px' }}>
                            <Image 
                                src={article.image} 
                                alt={article.title} 
                                fill 
                                style={{ objectFit: 'cover' }} 
                            />
                        </div>
                    )}

                    <div 
                        className="article-content" 
                        dangerouslySetInnerHTML={{ __html: article.desc || "" }}
                    />
                </div>

                {/* Sidebar */}
                <div className="col-lg-4">
                    <h3 className="sidebar-title">Bài viết liên quan</h3>
                    
                    <div className="related-list">
                        {relatedArticles.map((item) => (
                            <Link href={`/tri-thuc/${item.id}`} key={item.id} className="related-item" style={{ textDecoration: 'none' }}>
                                {item.image && (
                                    <div className="related-thumb">
                                        <Image 
                                            src={item.image} 
                                            alt={item.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                )}
                                <div className="related-info">
                                    <div className="related-title">{item.title}</div>
                                    <div className="related-date">{item.time}</div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KnowledgeDetails;
