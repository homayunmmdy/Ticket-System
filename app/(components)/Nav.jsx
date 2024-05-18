
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
          <div className="dropdown">
            <label tabIndex={0} role="button" className="btn btn-ghost lg:hidden  btn-circle swap swap-rotate">

              <input type="checkbox" />
              <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>
              <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {nav?.map((item) => {
                return (
                  <li key={item.id} className="mb-2">
                    {pathname === item.link ? <Link href={item.link} className="bg-red-600 hover:bg-red-600">{item.name}</Link> :
                      <Link href={item.link} className='hover:bg-red-600'>{item.name}</Link>}
                  </li>
                )
              })}
              <li>
                <Link className="flex sm:hidden btn btn-outline btn-error" href="/TicketPage/new">New Tickets</Link>
              </li>
            </ul>
          </div>
          <Link className="flex gap-3 items-center" href="/">
            <Image src={Logo} width={40} height={40} alt="red tickets" title="Tickets" />
            <span className="font-bold hover:text-red-700">{SiteConfig.name}</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-3">
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
          <Link className="hidden sm:flex btn btn-outline btn-error" href="/TicketPage/new">New Tickets</Link>
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Theme
              <svg width="12px" height="12px" className="h-2 w-2 fill-current opacity-60 inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
            </div>
            <ul tabIndex={0} className="dropdown-content absolute right-0 z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52">
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Default" value="cupcake" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Dark" value="dark" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Forest" value="forest" /></li>
              <li><input type="radio" name="theme-dropdown" className="theme-controller btn btn-sm btn-block btn-ghost justify-start" aria-label="Halloween" value="halloween" /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
