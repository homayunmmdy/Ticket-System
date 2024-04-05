
import Link from "next/link";

const navbar = [
  {
    id: 1,
    name: "home",
    href: "/"
  },
  {
    id: 2,
    name: "category",
    href: "/Category"
  },
  {
    id: 3,
    name: "website",
    href: "/Website"
  },
]
const Nav = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navbar.map(item => (
                <li key={item.id}><Link href={item.href}>{item.name}</Link></li>
              ))}
            </ul>
          </div>
          <Link href="/" >Tickets</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navbar.map(item => (
              <li key={item.id}><Link href={item.href}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/TicketPage/new">New Tickets</Link>
        </div>
      </div>
    </>
  );
};

export default Nav;
