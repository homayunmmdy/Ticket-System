'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoHomeOutline, IoSettingsOutline, IoTicketOutline } from "react-icons/io5";

const Dock = () => {
    const pathname = usePathname();
    console.log(pathname)
    return (
        <div className="dock dock-lg sm:hidden bg-base-200">
            {DockItems.map(item => {
                const Icon = item.icon
                return (
                    <Link className={`${pathname === item.url ? "dock-active after:bg-red-700 after:border-red-700" : ''}`} href={item.url} title={item.title} key={item.name}>
                        <Icon size={25} color={`${pathname === item.url ? "red" : 'black'}`} />
                    </Link>

                )
            })}
        </div>
    )
}

export default Dock

const DockItems = [
    {
        title: 'Home',
        url: '/',
        icon: IoHomeOutline,
    },
    {
        title: 'Tickets',
        url: '/Tickets',
        icon: IoTicketOutline,
    },
    {
        title: 'Setting',
        url: '/Setting',
        icon: IoSettingsOutline,
    },
]