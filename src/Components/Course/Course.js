import React from 'react';

const Course = (props) => {
    const { image, name, duration, lectures, level } = props.course;
    return (
        <div class="card bg-base-100 shadow-xl mt-20">
            <figure><img src={image} alt={name} /></figure>
            <div class="card-body">
                <h2 class="card-title">{name}</h2>
                <div className='grid grid-cols-1 md:grid-cols-3 mt-10'>
                    <span><i className="fa-solid fa-clock text-blue-600 mr-2"></i>{duration}</span>
                    <span><i className="fa-solid fa-video text-blue-600 mr-2"></i>{lectures}</span>
                    <span><i className="fa-solid fa-list text-blue-600 mr-2"></i>{level}</span>
                </div>
                <div class="card-actions justify-end">
                    <button class="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Course;