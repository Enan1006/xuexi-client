import React from 'react';
import instuctorImg from '../../Images/instructor.png';

const About = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 my-20 px-20'>
            <div>
                <img src={instuctorImg} alt="" srcset="" />
            </div>
            <div>
                <h4 className='text-blue-600 text-2xl ml[-120px]'>About Us</h4>
                <h1 className='text-5xl font-semibold'>Smart Tutoring Program for <span className='text-blue-600'>Success People</span></h1>
                <div className='grid grid-cols-2 mt-20'>
                    <span className='font-semibold'><i className="fa-solid fa-circle-check text-blue-600 mr-2"></i>Consistency</span>
                    <span className='font-semibold'><i className="fa-solid fa-circle-check text-blue-600 mr-2"></i>Improvement</span>
                    <span className='font-semibold'><i className="fa-solid fa-circle-check text-blue-600 mr-2"></i>Remote Learning</span>
                    <span className='font-semibold'><i className="fa-solid fa-circle-check text-blue-600 mr-2"></i>Branching</span>
                </div>
            </div>
        </div>
    );
};

export default About;