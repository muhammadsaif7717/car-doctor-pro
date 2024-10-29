'use client';
import { getBookings } from '@/Services/getBookings';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const MyBookings = () => {
    const { data: session } = useSession();


    const { data: bookings, refetch } = useQuery({
        queryKey: ['bookings', session.user.email],
        queryFn: async () => {
            const res = await getBookings(session.user.email);
            return res;
        }
    })


    console.log('Bookings:', bookings);


    const handleEdit = (id) => {
        console.log(id)
    }
    const handleDelete = async (id) => {
        const res = await axios.delete(`http://localhost:3000/my-bookings/api/delete-booking/${id}`)
        if (res.data.deletedCount > 0) {
            alert('Deleted')
            refetch();
        }
    }

    return (
        <div className='py-20 max-w-screen-xl mx-auto'>
            {bookings && bookings.length > 0 ? (
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {bookings.map(booking => (
                        <div key={booking._id} className='card bg-base-100 w-full shadow-xl '>
                            <figure className="p-5">
                                <Image
                                    className=" h-full w-full rounded-xl"
                                    src={booking.service.img}
                                    alt="service"
                                    width={1920}
                                    height={1080}
                                />
                            </figure>
                            <div className="card-body px-5 pb-5 pt-0">
                                <h2 className="card-title">{booking.service.title}</h2>
                                <p><span className="font-bold">Booking Date:</span>{booking.date}</p>
                                <div className="card-actions">
                                    <button onClick={() => handleEdit(booking._id)} className="btn btn-primary bg-blue-500 border-none text-white">Edit</button>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-primary border-none text-white">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No bookings found.</p>
            )}
        </div>
    );
};

export default MyBookings;
