import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <><div className="flex py-3 justify-center"><SignUp path="/sign-up" /></div></>
  )
}