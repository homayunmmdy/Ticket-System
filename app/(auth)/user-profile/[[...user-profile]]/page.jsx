import { UserProfile } from "@clerk/nextjs";

const UserProfilePage = () => {
  return (
    <div className="flex py-3 justify-center"> <UserProfile path="/user-profile" /></div>
  )
}

export default UserProfilePage