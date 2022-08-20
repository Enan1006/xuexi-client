import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(Response => Response.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='mx-20 my-20'>
            <h1 className='text-4xl text-blue-600 font-semibold text-center mb-10'>Services</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                {
                    services.map(service => <Service
                        service={service}
                        key={service._id}
                    >
                    </Service>)
                }
            </div>
        </div>
    );
};

export default Services;