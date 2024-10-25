'use client'
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
import SocialSignIn from '@/components/Shared/SocialSignIn';

const page = () => {
    const handleSignUp = async(e) => {
        e.preventDefault()
        const newUser = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value,
        }

        const res = await axios.post('http://localhost:3000/signup/api', newUser)
        if(res.data.insertedId)(
            alert('user created')
        )

    }
    return (
        <div className='flex flex-col md:flex-row gap-10 items-center justify-between h-screen'>
            <div className='flex justify-center items-center w-full'>
                <Image src={`/assets/images/login/login.svg`} height={1080} width={1080} alt='login image' className='mx-auto h-auto w-[60%]' />
            </div>

            <div className="w-full">
                <div className="mx-auto w-96 border-2 p-10">
                    <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">Sign Up </h1>

                    <form onSubmit={handleSignUp} className="mb-0 mt-6 space-y-4 ">
                        <div>
                            <label htmlFor="name" className="text-black font-semibold">Name</label>

                            <div className="relative">
                                <input
                                    type="text"
                                    name='name'
                                    className="w-full input input-bordered"
                                    placeholder="Your name"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div>
                            <label htmlFor="email" className="text-black font-semibold">Email</label>

                            <div className="relative">
                                <input
                                    type="email"
                                    name='email'
                                    className="w-full input input-bordered"
                                    placeholder="Your email"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="font-semibold text-black">Comfirm Password</label>

                            <div className="relative">
                                <input
                                    type="password"
                                    name='password'
                                    className="w-full input input-bordered"
                                    placeholder="Your password"
                                />

                                <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="size-4 text-gray-400"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                        />
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>

                        <button
                            type="submit"
                            className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
                        >
                            Sign Up
                        </button>

                        <div className='flex flex-col gap-5 items-center justify-center'>
                            <h1>Or Sign Up with</h1>
                           <SocialSignIn/>
                        </div>

                        <p className="text-center text-sm text-gray-500">
                            Already have account?
                            <Link className="underline" href="/login">Login</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default page;