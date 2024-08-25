import { getServerSession } from "next-auth/next";
import Logout from "@/components/auth/Logout";
import AuthSessionBd from "./ui/page";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log(session);

  return (
    <div className="mt-20 p-4">
      <h1 className="text-2xl font-bold mb-4">getServerSession Result</h1>
      {session?.user ? (
        <div>
          <p>
            Welcome back,{" "}
            <span className="font-semibold">{session.user.name}</span>!
          </p>
          <p>User ID: {session.uid}</p>
          {/* Add more user details here if available */}
        </div>
      ) : (
        <div>
          <p>You are not currently logged in.</p>
        </div>
      )}
      <Logout />
    </div>
  );
}
