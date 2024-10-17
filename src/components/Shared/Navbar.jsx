'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { IoIosSearch } from "react-icons/io";
import { MdOutlineShoppingBag } from "react-icons/md";

const Navbar = () => {
    const pathName = usePathname();
    const links = <div className=' font-semibold uppercase flex flex-col lg:flex-row gap-5'>
        <Link href={`/`} className={`${pathName === '/' && 'text-primary'}`}>Home</Link>
        <Link href={`#about`}>About</Link>
        <Link href={`#projects`}>Services</Link>
        <Link href={`#projects`}>Blog</Link>
        <Link href={`#contact`}>Contact</Link>
    </div>
    return (
        <div className='flex justify-center  '>
            <div className="navbar flex justify-evenly bg-base-100  bg-opacity-80 fixed max-w-screen-xl mx-auto z-50 ">
                <div className="navbar-start">
                    <div className="dropdown">
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
                    <MdOutlineShoppingBag className='text-xl'/>
                    <IoIosSearch className='text-xl'/>
                    <button className='btn btn-primary text-white'>Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;