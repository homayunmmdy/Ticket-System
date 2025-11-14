import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (<>
    <div className="flex py-3 justify-center"><SignIn path="/sign-in" /></div>
  </>);
}