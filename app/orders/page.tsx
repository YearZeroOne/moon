import { POCKET_BASE_URL } from "@/db";
import db from "@/db";
import PocketBase from "pocketbase";
import { cookies } from 'next/headers';

async function getCartList() {
  const pb = new PocketBase(POCKET_BASE_URL);
  const cookieStore = cookies();
  const res : any = await db.getUser(cookieStore);
  console.log(res)
const records = await pb.collection("Cart").getFullList({
    sort: "-created",
    cache: "no-store",
    filter: `user.id="${res?.id}"`

  });

  return records;
}
export default async function Orders() {
const res = await getCartList();
console.log(res);
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <h1>Orders</h1>
          <h1>Test</h1>
        </div>
      </main>
    )
  }
  