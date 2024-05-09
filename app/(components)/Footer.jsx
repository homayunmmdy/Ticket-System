import React from 'react'
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import SiteConfig from '@/app/config/site';
import { FaLink } from "react-icons/fa";
import Link from 'next/link';
import Logo from "@/public/logo.png"
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="footer p-4">
            <div className='flex flex-wrap items-center justify-center sm:justify-between  px-5 w-[98%] md:w-[92%] mx-auto py-4'>
                <nav className="flex grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <a href='www.linkedin.com/in/homayunmmdy'><FaLinkedinIn size={24} className="fill-current hover:text-red-700" /></a>
                    <a href='https://youtube.com/@thehomayunmmdy'><IoLogoYoutube size={24} className="fill-current hover:text-red-700" /></a>
                    <a><FaGithub size={24} className="fill-current hover:text-red-700" /></a>
                </nav>
                <aside className="flex gap-4 items-center grid-flow-col">
                    <p>© {new Date().getFullYear()} - <Link href="/" className=' hover:text-red-700 font-bold'>{SiteConfig.name}</Link></p>
                    <button className='btn btn-ghost btn-circle hover:bg-red-600'>
                        <Image src={Logo} width={40} height={40} alt="red tickets" title="Tickets" />
                    </button>
                </aside>

            </div>
        </footer>
    )
}

export default Footer