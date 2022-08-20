import React from 'react';

const Service = (props) => {
    const { _id, img, service, description } = props.service;
    return (
        <div>
            <figure><img className='mx-auto' src={img} alt={service} /></figure>
            <div class="card-body">
                <h2 class="card-title">{service}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default Service;