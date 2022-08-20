import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Courses from '../Courses/Courses';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner />
            <Services />
            <Courses />
            <About />
        </div>
    );
};

export default Home;