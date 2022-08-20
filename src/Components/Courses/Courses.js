import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('courses.json')
            .then(Response => Response.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div className='my-10 md:my-20 mx-3 md:mx-20'>
            <h4 className='text-blue-600 text-2xl'>Online Courses</h4>
            <h1 className='text-5xl font-semibold'>Explore Featured <span className='text-blue-600'>Courses</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
                {
                    courses.map(course => <Course
                        course={course}
                    ></Course>)
                }
            </div>
        </div>
    );
};

export default Courses;