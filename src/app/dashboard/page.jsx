import React from 'react';
import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import UserDashboard from '@/components/dashboard/UserDashboard';

export const metadata = {
    title: "Trang cá nhân - Diễn đàn CEO Việt Nam"
}

const DashboardPage = () => {
    return (
        <LayoutStyle1>
            <UserDashboard />
        </LayoutStyle1>
    );
};

export default DashboardPage;
