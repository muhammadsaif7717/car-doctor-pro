'use client'
import React, { Suspense } from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa6";
import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';

const SocialSignIn = () => {
    const searchParams = useSearchParams();
    const path = searchParams.get('redirect');

    const handleSocialLogin = async (provider) => {
        const res = await signIn(provider, {
            redirect: true,
            callbackUrl: path ? path : '/'
        });

        if (res?.error) {
            console.error('Error signing in:', res.error);
        }
    };


    return (
        <div className="flex gap-5 items-center justify-center">
            <button onClick={() => handleSocialLogin('google')} className='bg-[#F5F5F8] p-4 rounded-full'><FcGoogle /></button>
            <button onClick={() => handleSocialLogin('github')} className='bg-[#F5F5F8] p-4 rounded-full'><FaGithub /></button>
        </div>
    );
};

const Page = () => (
    <Suspense fallback={<div>Loading...</div>}>
        <SocialSignIn />
    </Suspense>
);

export default Page;