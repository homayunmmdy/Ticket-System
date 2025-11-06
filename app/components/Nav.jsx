
"use client"
import Link from "next/link";
import Logo from "@/public/logo.png"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import SiteConfig from "../config/site";

const Nav = () => {
  const router = useRouter();
  const pathname = usePathname();
  const nav = SiteConfig.nav;
  return (
    <>
      <div className="navbar bg-base-100">
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
        <div className="navbar-end">
          <Link className="btn btn-outline btn-error hidden sm:flex" href="/TicketPage/new">New Tickets</Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg width="12px" height="12px" className="inline-block h-2 w-2 fill-current opacity-60" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content absolute right-0 z-1 w-52 rounded-box bg-base-300 p-2 shadow-2xl">
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-ghost btn-sm btn-block justify-start" aria-label="Default" value="cupcake" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-ghost btn-sm btn-block justify-start" aria-label="Dark" value="dark" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-ghost btn-sm btn-block justify-start" aria-label="Forest" value="forest" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-ghost btn-sm btn-block justify-start" aria-label="Halloween" value="halloween" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
