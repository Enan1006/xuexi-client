import React from 'react';
import courseImg from '../../Images/course-img-bg.jpg';

const Banner = () => {
    return (
        <section style={{ background: `url(${courseImg})`, backgroundSize: "cover", backgroundColor: '#ffffff' }} className='px-3 md:px-20 py-20 md:py-40'>
            <h3 className='text-blue-600 text-lg'>Best Learning Platform</h3>
            <h1 className='text-white font-bold text-6xl pr-0 md:pr-40'>The Best Place For The Best Career.</h1>
        </section>
    );
};

export default Banner;