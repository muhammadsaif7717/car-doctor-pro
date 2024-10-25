import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price, _id } = service || {};
    return (
        <div className="card bg-base-100 w-full shadow-xl">
            <figure className="p-5">
                <Image
                    height={1080}
                    width={1080}
                    src={service.img}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <div className="card-actions justify-between items-center">
                    <h1>{price} $</h1>
                    <Link href={`/services/${_id}`} className="btn btn-primary bg-red-500">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;