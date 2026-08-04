import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import RegistrationForm from '@/components/registration/RegistrationForm';

export const metadata = {
    title: "Đăng ký tham dự - Diễn đàn CEO Việt Nam"
}

const RegistrationPage = () => {
    return (
        <LayoutStyle1>
            <RegistrationForm />
        </LayoutStyle1>
    );
};

export default RegistrationPage;
