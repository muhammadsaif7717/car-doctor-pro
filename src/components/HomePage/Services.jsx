import React from 'react';
import { services } from '../../lib/services'
import ServiceCard from '../Cards/ServiceCard';

const Services = () => {
    // console.log(services)
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    services.map(service => (
                        <ServiceCard service={service} key={service._id} />
                    ))
                }
            </div>
        </div>
    );
};

export default Services;