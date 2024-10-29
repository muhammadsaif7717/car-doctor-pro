import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import { getServices } from '@/Services/getServices';


const Services = async () => {
    const services = await getServices() || [];
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