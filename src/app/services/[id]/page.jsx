import { getServiceDetails } from '@/Services/getServices';
import React from 'react';

export const metadata = {
    title: 'Details',
    description: "Generated by create next app",
  };

const page = async ({ params }) => {
    const service = await getServiceDetails(params.id);
    console.log(service)
    return (
        <div>
            {service._id}
        </div>
    );
};

export default page;