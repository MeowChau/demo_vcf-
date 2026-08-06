"use client"
import React from 'react';
import MentoringRequestForm from '../../components/event/MentoringRequestForm';
import Breadcrumb from '../../components/breadCrumb/BreadCrumb';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';

const DangKyEventPage = () => {
    return (
        <LayoutStyle1>
            <Breadcrumb title="Đăng ký Event / Mentoring" pageName="Đăng ký Event" />
            <section className="login-area pt-100 pb-100">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <MentoringRequestForm />
                        </div>
                    </div>
                </div>
            </section>
        </LayoutStyle1>
    );
};

export default DangKyEventPage;
