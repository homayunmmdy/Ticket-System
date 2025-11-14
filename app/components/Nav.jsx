
"use client"
import Logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SiteConfig from "../config/site";
import ThemeToggle from "./ThemeToggle";
import Container from "./Container";
import { useUser } from "@clerk/nextjs";

const Nav = () => {
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  const { user } = useUser();
  return (
    <Container>
      <div className="navbar bg-base-100 p-0 m-0">
        <div className="navbar-start">
          <Link className="flex items-center gap-3" href="/">
            <Image src={Logo} width={40} height={40} alt="red tickets" title="Tickets" />
            <span className="font-bold hover:text-red-700">{SiteConfig.name}</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-3 px-1">
            {nav?.map((item) => {
              return (
                <li key={item.id} className="mb-2">
                  {pathname === item.link ? <Link href={item.link} className="bg-red-600 hover:bg-red-600">{item.name}</Link> :
                    <Link href={item.link} className='hover:bg-red-600'>{item.name}</Link>}
                </li>
              )
            })}
          </ul>
        </div>
        <div className="navbar-end gap-2">
           {user ? (<>
             <div className="mb-2">
               <Link href="/sign-in">Log in</Link>
             </div>
             <div className="mb-2">
               <Link href="/sign-up">sign up</Link>
             </div>
           </>) : (
             <div className="mb-2">
               <Link href="/user-profile">profile</Link>
             </div>
           )
           }
          <ThemeToggle />
        </div>
      </div>
    </Container>
  );
};

export default Nav;
