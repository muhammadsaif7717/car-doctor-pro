import Image from 'next/image';
import React from 'react';

const ServiceCard = ({ service }) => {
    const { title, img, price } = service || {};
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
                    <button className="btn btn-primary bg-red-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;