
import Link from "next/link";

const Nav = () => {
  return (
    <div className="navbar bg-base-100">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">Ticket System</a>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal px-1">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/TicketPage/new">New Ticket</Link></li>
        <li><Link href="/Category">category</Link></li>
        <li><Link href="/Website">Website</Link></li>
      
      </ul>
    </div>
  </div>
  );
};

export default Nav;
