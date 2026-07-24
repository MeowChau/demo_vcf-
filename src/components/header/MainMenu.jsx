import React from 'react';
import Link from 'next/link';

const MainMenu = ({ toggleSubMenu, navbarPlacement }) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li><Link href="/" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>HOME</Link></li>
                <li><Link href="/members-area" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>MEMBERS AREA</Link></li>
                <li><Link href="/events-networking" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>EVENTS & NETWORKING</Link></li>
                <li><Link href="/leadership-workshops" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>LEADERSHIP WORKSHOPS</Link></li>
                <li><Link href="/past-events" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>PAST EVENTS</Link></li>
                <li><Link href="/publications" className="text-uppercase" style={{ fontSize: '13px', fontWeight: 600 }}>PUBLICATIONS</Link></li>
            </ul>
        </>
    );
};

export default MainMenu;