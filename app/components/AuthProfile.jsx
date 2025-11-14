import { useUser } from "@clerk/nextjs";
import Link from "next/link";

const AuthProfile = ({ pathname }) => {
    const { user } = useUser();

    return !user ? (
        <div className="join join-vertical lg:join-horizontal">
            <Link href="/sign-in" className={`${pathname === '/sign-in' ? '' : 'btn-outline'} hidden lg:flex btn btn-error rounded-l-4xl p-3 join-item`}>Login</Link>
            <Link href="/sign-up" className={`${pathname === '/sign-up' ? '' : 'btn-outline'} btn btn-outline btn-error rounded-full lg:rounded-l-4xl p-3 join-item`}>sign up</Link>
        </div>
    ) : (
            <Link href="/user-profile">
                <div className="avatar">
                    <div className="w-10 h-10 rounded-full">
                        <img src={user.imageUrl} alt="user profile" />
                    </div>
                </div>
            </Link>
    )

}

export default AuthProfile