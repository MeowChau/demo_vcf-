import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleBanner1 = ({ banner }) => {
    const { bgThumb, title, title1, title2, shapeThumb, btnText } = banner

    return (
        <>
            <div className="banner-thumb bg-cover shadow dark" style={{ background: `url(/assets/img/banner/${bgThumb})` }}></div>
            {/* The text and shape overlays have been removed as per user request */}
        </>
    );
};

export default SingleBanner1;