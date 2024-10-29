'use client';
import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import React, { use } from 'react';
import axios from 'axios';

const UpdateBooking = ({ params }) => {
    const { data: sessionData } = useSession();
    const unwrappedParams = use(params);
    const id = unwrappedParams?.id;

    const { data: booking = [], refetch } = useQuery({
        queryKey: ['booking', id],
        queryFn: async () => {
            const res = await axios.get(`https://car-doctor-pro-five.vercel.app/my-bookings/api/get-bookings-by-id/${id}`);
            return res.data.data;
        }
    });

    console.log(booking);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const updatedData = {
            date: e.target.date.value,
            phone: e.target.phone.value,
            address: e.target.address.value,
        }
        console.log(updatedData)

        const res = await axios.patch(`https://car-doctor-pro-five.vercel.app/my-bookings/api/update-booking/${id}`, updatedData)
        if (res.data.modifiedCount > 0) {
            alert('updated');
            refetch();
        }
    }

    return (
        <div className='pt-20 max-w-screen-xl mx-auto min-h-[calc(100vh-300px)]'>
            <div className="container mx-auto">
                <div className="my-12 bg-slate-300 p-12">
                    <form onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    defaultValue={sessionData?.user?.name}
                                    type="text"
                                    name="name"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Date</span>
                                </label>
                                <input
                                    defaultValue={booking.date}
                                    type="date"
                                    name="date"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    defaultValue={sessionData?.user?.email}
                                    type="text"
                                    name="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Due amount</span>
                                </label>
                                <input
                                    defaultValue={booking.price}
                                    readOnly
                                    type="text"
                                    name="price"
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Phone</span>
                                </label>
                                <input
                                    required
                                    type="text"
                                    name="phone"
                                    defaultValue={booking.phone}
                                    className="input input-bordered"
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Present Address</span>
                                </label>
                                <input
                                    type="text"
                                    name="address"
                                    defaultValue={booking.address}
                                    className="input input-bordered"
                                />
                            </div>
                        </div>
                        <div className="form-control mt-6">
                            <input
                                className="btn btn-primary btn-block"
                                type="submit"
                                value="Order Confirm"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateBooking;
