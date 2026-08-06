"use client"
import React from 'react';
import TeamData from '@/assets/jsonData/team/TeamData.json'
import SingleTeam2 from './SingleTeam2';
import TeamHeading1 from './TeamHeading1';
import TeamHeading2 from './TeamHeading2';

const TeamStyle2 = ({ hasText }) => {
    return (
        <>
            <div className="team-style-two-area secondary" style={{ backgroundColor: '#fff', backgroundImage: `url(/assets/img/shape/27.png)`, paddingTop: '30px', paddingBottom: '80px' }}>
                <style>{`
                    @media (max-width: 767px) {
                        .mobile-order-0 { order: 2; }
                        .mobile-order-1 { order: 1; }
                        .mobile-order-2 { order: 3; }
                        .mobile-order-3 { order: 5; }
                        .mobile-order-4 { order: 4; }
                        .mobile-order-5 { order: 6; }
                    }
                `}</style>

                {hasText ? <TeamHeading1 /> : <TeamHeading2 />}

                <div className="container">
                    <div className="row">
                        {TeamData.slice(0, 6).map((team, index) => {
                            let alignClass = 'text-center';
                            if (index % 3 === 0) alignClass = 'text-center text-lg-start';
                            else if (index % 3 === 2) alignClass = 'text-center text-lg-end';
                            return (
                                <div className={`col-lg-4 col-md-6 mb-30 ${alignClass} mobile-order-${index}`} key={team.id}>
                                    <SingleTeam2 team={team} isTaller={index === 1} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
};

export default TeamStyle2;