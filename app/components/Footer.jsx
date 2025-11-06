import SiteConfig from '@/app/config/site';
import Logo from "@/public/logo.png";
import Image from 'next/image';
import Link from 'next/link';
import { FaDev, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Container from './Container';

const Footer = () => {
    return (
        <Container>
            <footer className="footer p-0 m-0">
                <div className='mx-auto flex  flex-wrap items-center justify-center py-4 w-full sm:justify-between '>
                    <nav className="flex grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                        {FooterMedia.map(item => {
                            const Icon = item.icon
                            return (
                                (
                                    <a className='cursor-pointer' href={item.url} key={item.name} target='_blank'>
                                        <Icon size={24} className="fill-current hover:text-red-700" />
                                    </a>
                                )
                            )
                        })}
                        <a className='cursor-pointer' href='https://tailwindflex.com/@homayunmmdy' target='_blank'>
                            <img className='h-6 w-6 rounded-full hover:bg-red-700' src='image/tailwindflex-logo.svg' />
                        </a>
                    </nav>
                    <aside className="flex grid-flow-col items-center gap-4">
                        <p>© {new Date().getFullYear()} - <Link href="/" className='font-bold hover:text-red-700'>{SiteConfig.name}</Link></p>
                        <button className='btn btn-circle btn-ghost hover:bg-red-600'>
                            <Image src={Logo} width={40} height={40} alt="red tickets" title="Tickets" />
                        </button>
                    </aside>

                </div>
            </footer>
        </Container>
    )
}

export default Footer;

const FooterMedia = [
    {
        name: 'Linkedin',
        url: 'https://www.linkedin.com/in/homayounmmdy/',
        icon: FaLinkedinIn
    },
    {
        name: 'GitHub',
        url: 'https://github.com/homayounmmdy',
        icon: FaGithub
    },
    {
        name: 'Dev Community',
        url: 'https://dev.to/homayounmmdy',
        icon: FaDev
    },
]