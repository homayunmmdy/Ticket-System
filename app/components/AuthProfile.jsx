import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const AuthProfile = ({ pathname }) => {
    const { user } = useUser();

    return !user ? (
        <div className="join join-vertical lg:join-horizontal">
            <Link href="/sign-in" className={`${pathname === '/sign-in' ? '' : 'btn-outline'} btn  btn-error rounded-l-4xl p-3 join-item`}>Login</Link>
            <Link href="/sign-up" className={`${pathname === '/sign-up' ? '' : 'btn-outline'} btn btn-outline btn-error rounded-r-4xl p-3 join-item`}>sign up</Link>
        </div>
    ) : (
        <div className="mb-2">
            <Link href="/user-profile">profile</Link>
        </div>
    )

}

export default AuthProfile