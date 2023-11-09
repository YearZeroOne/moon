import PocketBase from 'pocketbase';
import db, { POCKET_BASE_URL } from '@/db';
import CategoryGrid from '@/components/category/categoryGrid';
import { cookies } from 'next/headers';
export async function getCategories() {
  const pb = new PocketBase(POCKET_BASE_URL);

  const records = await pb.collection('Categories').getFullList({
    sort: '-created',
});
return records;


}

async function getCartList() {
  const pb = new PocketBase(POCKET_BASE_URL);
  const cookieStore = cookies();
  const res : any = await db.getUser(cookieStore);
  console.log(res)
const records = await pb.collection("Cart").getFullList({
    sort: "-created",
    cache: "no-store",
    filter: `user.id="${res?.id}"`,
    expand: "product"

  });

  return records;
}


export default async function Home() {
  const cartData = await getCartList();
  const data = await getCategories();
  console.log(cartData)
  console.log(data)
  return <CategoryGrid categories={data} cart={cartData}/>;
}
