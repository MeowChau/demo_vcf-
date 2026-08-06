import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import LoginForm from '@/components/auth/LoginForm';

export const metadata = {
    title: "Đăng nhập - CEO Mentoring"
}

const LoginPage = () => {
    return (
        <LayoutStyle1>
            <div style={{ paddingTop: '150px', paddingBottom: '100px', backgroundColor: '#ffffff' }}>
                <LoginForm />
            </div>
        </LayoutStyle1>
    );
};

export default LoginPage;
