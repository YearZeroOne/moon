import Logout from "@/components/logout";
import db from "@/db";
import { cookies } from "next/headers";
import { use } from "react";
const getUser = async () => {
  const cookieStore = cookies();

  const result = await db.getUser(cookieStore);

  return result as any;
}
export default function Home() {
  const user = use(getUser())

  return (
    <main>
    <h1>Home</h1>

    <p>Hi, {user?.username}</p>

  </main>
  );
}
