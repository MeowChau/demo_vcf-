import LayoutStyle1 from '@/components/Layouts/LayoutStyle1';
import React from 'react';
import TrainerList from '@/components/trainers/TrainerList';

export const metadata = {
    title: "Diễn đàn CEO Việt Nam - Certified Trainer & Coach"
}

const TrainersPage = () => {
    return (
        <LayoutStyle1>
            <TrainerList />
        </LayoutStyle1>
    );
};

export default TrainersPage;
