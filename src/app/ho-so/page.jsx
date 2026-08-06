"use client"
import React, { useEffect, useState } from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import { useRouter } from 'next/navigation';

const ProfilePage = () => {
    const [user, setUser] = useState(null);
    const [ceoProfile, setCeoProfile] = useState(null);
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const jwt = localStorage.getItem('jwt');
        const userData = localStorage.getItem('user');

        if (!jwt || !userData) {
            router.push('/dang-nhap');
            return;
        }

        try {
            const parsedUser = JSON.parse(userData);
            setUser(parsedUser);
            
            // Fetch CEO profile data
            const fetchCeoProfile = async () => {
                try {
                    const API_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337';
                    const res = await fetch(`${API_URL}/api/ceo-profiles?filters[user][id][$eq]=${parsedUser.id}`, {
                        headers: {
                            Authorization: `Bearer ${jwt}`
                        }
                    });
                    const resData = await res.json();
                    if (resData.data && resData.data.length > 0) {
                        setCeoProfile(resData.data[0]);
                    }
                } catch (e) {
                    console.error("Lỗi khi tải thông tin CEO:", e);
                }
            };
            
            fetchCeoProfile();
            
        } catch (e) {
            router.push('/dang-nhap');
        } finally {
            setIsLoading(false);
        }
    }, [router]);

    if (isLoading || !user) {
        return (
            <LayoutStyle1>
                <div style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#fcf4e4', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className="spinner-border text-danger" role="status">
                        <span className="sr-only">Đang tải...</span>
                    </div>
                </div>
            </LayoutStyle1>
        );
    }

    const styles = {
        bg: {
            backgroundColor: '#fcf4e4',
            minHeight: '100vh',
            paddingTop: '150px',
            paddingBottom: '80px'
        },
        card: {
            backgroundColor: '#fff',
            borderRadius: '12px',
            padding: '30px',
            boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            maxWidth: '600px',
            margin: '0 auto'
        },
        avatarWrapper: {
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '30px'
        },
        avatar: {
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#ffeeee',
            color: '#da151a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '40px',
            border: '3px solid #da151a'
        },
        title: {
            textAlign: 'center',
            fontSize: '24px',
            fontWeight: '600',
            color: '#222',
            marginBottom: '5px'
        },
        subtitle: {
            textAlign: 'center',
            fontSize: '15px',
            color: '#777',
            marginBottom: '30px'
        },
        infoRow: {
            display: 'flex',
            padding: '15px 0',
            borderBottom: '1px solid #eee'
        },
        infoLabel: {
            width: '140px',
            fontWeight: '600',
            color: '#555',
            fontSize: '15px'
        },
        infoValue: {
            flex: 1,
            color: '#222',
            fontSize: '15px'
        }
    };

    return (
        <LayoutStyle1>
            <div style={styles.bg}>
                <div className="container">
                    <div style={styles.card}>
                        
                        <div style={styles.avatarWrapper}>
                            <div style={styles.avatar}>
                                <i className="fas fa-user-tie"></i>
                            </div>
                        </div>

                        <h2 style={styles.title}>{user.fullName || user.username || 'Người dùng'}</h2>
                        <div style={styles.subtitle}>Thành viên CEO Mentoring</div>

                        <div style={{ marginTop: '20px' }}>
                            <div style={styles.infoRow}>
                                <div style={styles.infoLabel}>Email:</div>
                                <div style={styles.infoValue}>{user.email}</div>
                            </div>
                            <div style={styles.infoRow}>
                                <div style={styles.infoLabel}>Họ và tên:</div>
                                <div style={styles.infoValue}>{user.fullName || 'Chưa cập nhật'}</div>
                            </div>
                            <div style={styles.infoRow}>
                                <div style={styles.infoLabel}>Số điện thoại:</div>
                                <div style={styles.infoValue}>{user.phone || 'Chưa cập nhật'}</div>
                            </div>
                            <div style={styles.infoRow}>
                                <div style={styles.infoLabel}>Công ty:</div>
                                <div style={styles.infoValue}>{user.companyName || 'Chưa cập nhật'}</div>
                            </div>
                            <div style={styles.infoRow}>
                                <div style={styles.infoLabel}>Ngày sinh:</div>
                                <div style={styles.infoValue}>{user.dob || 'Chưa cập nhật'}</div>
                            </div>
                            
                            {ceoProfile && (
                                <div style={{ marginTop: '20px', borderTop: '2px dashed #eee', paddingTop: '20px' }}>
                                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '15px', color: '#da151a' }}>Thông tin doanh nghiệp (CEO)</h3>
                                    <div style={styles.infoRow}>
                                        <div style={styles.infoLabel}>Kinh nghiệm quản lý:</div>
                                        <div style={styles.infoValue}>{ceoProfile.managementExperience || 'Chưa cập nhật'}</div>
                                    </div>
                                    <div style={styles.infoRow}>
                                        <div style={styles.infoLabel}>Lĩnh vực hoạt động:</div>
                                        <div style={styles.infoValue}>{ceoProfile.industry || 'Chưa cập nhật'}</div>
                                    </div>
                                    <div style={styles.infoRow}>
                                        <div style={styles.infoLabel}>Năm thành lập:</div>
                                        <div style={styles.infoValue}>{ceoProfile.foundedYear || 'Chưa cập nhật'}</div>
                                    </div>
                                    <div style={styles.infoRow}>
                                        <div style={styles.infoLabel}>Doanh thu hàng năm:</div>
                                        <div style={styles.infoValue}>{ceoProfile.annualRevenue || 'Chưa cập nhật'}</div>
                                    </div>
                                    <div style={styles.infoRow}>
                                        <div style={styles.infoLabel}>Số lượng nhân sự:</div>
                                        <div style={styles.infoValue}>{ceoProfile.employeeCount || 'Chưa cập nhật'}</div>
                                    </div>
                                    <div style={styles.infoRow}>
                                        <div style={styles.infoLabel}>Vốn chủ sở hữu:</div>
                                        <div style={styles.infoValue}>{ceoProfile.equity ? `${ceoProfile.equity} tỷ VND` : 'Chưa cập nhật'}</div>
                                    </div>
                                    <div style={styles.infoRow}>
                                        <div style={styles.infoLabel}>Loại hình doanh nghiệp:</div>
                                        <div style={styles.infoValue}>{ceoProfile.companyType || 'Chưa cập nhật'}</div>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </LayoutStyle1>
    );
};

export default ProfilePage;
