import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import RegisterForm from '@/components/auth/RegisterForm';

export const metadata = {
    title: "Đăng ký tham gia - CEO Mentoring"
}

const RegisterPage = () => {
    return (
        <LayoutStyle1>
            <div style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#ffffff' }}>
                <RegisterForm />
            </div>
        </LayoutStyle1>
    );
};

export default RegisterPage;
