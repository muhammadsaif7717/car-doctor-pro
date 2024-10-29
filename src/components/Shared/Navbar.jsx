'use client'
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
    const session  = useSession();
    console.log(session)
    const pathName = usePathname();

    const links = <div className=' font-semibold  flex flex-col lg:flex-row gap-5'>
        <Link href={`/`} className={`${pathName === '/' && 'text-primary'}`}>Home</Link>
        <Link href={`#about`}>About</Link>
        <Link href={`#projects`}>Services</Link>
        <Link href={`/my-bookings`} className={`${pathName === '/my-bookings' && 'text-primary'}`}>My Bookings</Link>
        <Link href={`#contact`}>Contact</Link>
    </div>
    return (
        <div className='flex justify-center'>
            <div className="navbar flex justify-evenly bg-base-100  bg-opacity-80 fixed max-w-screen-xl mx-auto z-50 py-2">
                <div className="navbar-start">
                    <div className="dropdown items-center">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                    </div>
                    <Link href={`/`} className="btn btn-ghost text-2xl font-bold">
                        <Image src={'/assets/logo.svg'} height={70} width={70} alt='logo' />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex ">
                    <ul className="menu menu-horizontal px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <MdOutlineShoppingBag className='text-xl' />
                    <IoIosSearch className='text-xl' />
                    <button className='btn btn-primary bg-transparent text-red-500 '>Appointment</button>
                    {
                        session?.data?.user?.image &&
                        <Image src={session?.data?.user?.image} height={50} width={50} alt='logo' className='rounded-full' />
                    }
                    {
                        !session?.data ?
                            <Link href={`/login`} className='btn btn-primary text-white bg-blue-500 border-none'>Login</Link>
                            :
                            <button onClick={() => signOut()} className='btn btn-primary text-white border-none'>SignOut</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;