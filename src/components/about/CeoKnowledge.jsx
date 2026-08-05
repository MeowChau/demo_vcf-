import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { knowledgeData } from '@/components/knowledge/knowledgeData';

const CeoKnowledge = () => {
    const featuredPost = knowledgeData[0];
    const olderPosts = knowledgeData.slice(1, 5);
    return (
        <div className="ceo-knowledge-area pb-5" style={{ backgroundColor: '#fff2df', fontFamily: "'Manrope', sans-serif", paddingTop: '150px' }}>
            <style dangerouslySetInnerHTML={{__html: `
                .knowledge-card {
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                }
                .knowledge-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 10px 25px rgba(0,0,0,0.08);
                }
                .knowledge-title:hover {
                    color: #da151a !important;
                }
                .older-post-card {
                    transition: background-color 0.3s ease;
                }
                .older-post-card:hover {
                    background-color: #f8f9fa;
                }
            `}} />
            <div className="container pt-4 pb-4">
                <div className="row mb-5">
                    <div className="col-12">
                        <h2 style={{ color: '#da151a', fontWeight: '800', textTransform: 'uppercase', fontSize: '32px', fontFamily: 'var(--font-montserrat)' }}>
                            TRI THỨC NỔI BẬT
                        </h2>
                        <div style={{ width: '150px', height: '2px', backgroundColor: '#da151a', marginTop: '15px' }}></div>
                    </div>
                </div>

                <div className="row g-4">
                    {/* Left Column - Featured Post */}
                    <div className="col-lg-7">
                        <Link href={`/tri-thuc/${featuredPost.id}`} style={{ textDecoration: 'none' }}>
                            <div className="knowledge-card" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column', backgroundColor: '#fff', cursor: 'pointer' }}>
                                <div style={{ position: 'relative', width: '100%', aspectRatio: '16/10', overflow: 'hidden' }}>
                                    <Image src={featuredPost.image} alt={featuredPost.title} fill style={{ objectFit: 'cover' }} />
                                </div>
                                <div style={{ padding: '30px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                    <div style={{ color: '#da151a', fontSize: '13px', fontWeight: '700', marginBottom: '10px', textTransform: 'uppercase', letterSpacing: '1px' }}>{featuredPost.tags || 'Bài viết mới'}</div>
                                    <h3 className="knowledge-title" style={{ color: '#002b5e', fontWeight: '800', fontSize: '26px', marginBottom: '15px', transition: 'color 0.3s' }}>
                                        {featuredPost.title}
                                    </h3>
                                    <p style={{ color: '#666', fontSize: '16px', lineHeight: '1.7', marginBottom: '20px', flexGrow: 1 }}>
                                        {featuredPost.desc}
                                    </p>
                                    <div style={{ display: 'flex', alignItems: 'center', color: '#888', fontSize: '14px' }}>
                                        <span style={{ fontWeight: '600' }}>Admin</span>
                                        <span style={{ margin: '0 10px' }}>•</span>
                                        <span>{featuredPost.time}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* Right Column - Older Posts */}
                    <div className="col-lg-5">
                        <div className="d-flex flex-column h-100">
                            <div className="d-flex flex-column" style={{ gap: '15px', flexGrow: 1 }}>
                                {olderPosts.map((post) => (
                                    <Link key={post.id} href={`/tri-thuc/${post.id}`} style={{ textDecoration: 'none' }}>
                                        <div className="older-post-card d-flex align-items-center" style={{ border: '1px solid rgba(0,0,0,0.1)', borderRadius: '10px', overflow: 'hidden', padding: '15px', cursor: 'pointer' }}>
                                            <div style={{ position: 'relative', width: '120px', height: '90px', borderRadius: '6px', flexShrink: 0, overflow: 'hidden' }}>
                                                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                            </div>
                                            <div style={{ paddingLeft: '20px', flexGrow: 1 }}>
                                                <h4 className="knowledge-title" style={{ color: '#002b5e', fontWeight: '700', fontSize: '16px', marginBottom: '8px', lineHeight: '1.5', transition: 'color 0.3s' }}>
                                                    {post.title}
                                                </h4>
                                                <span style={{ color: '#888', fontSize: '13px' }}>{post.time}</span>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className="text-end mt-4">
                                <Link href="/tri-thuc" style={{ color: '#da151a', fontSize: '15px', fontWeight: '700', textDecoration: 'none', fontStyle: 'italic', display: 'inline-block', transition: 'opacity 0.3s' }} className="see-more-link">
                                    Xem thêm... <i className="fas fa-arrow-right ms-1" style={{ fontSize: '13px' }}></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CeoKnowledge;
