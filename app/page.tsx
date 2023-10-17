import PocketBase from 'pocketbase';
import { POCKET_BASE_URL } from '@/db';
import CategoryGrid from '@/components/category/categoryGrid';
export async function getCategories() {
  const pb = new PocketBase(POCKET_BASE_URL);

  const records = await pb.collection('Categories').getFullList({
    sort: '-created',
});
return records;


}
export default async function Home() {
  const data = await getCategories();
  console.log(data)
  return <CategoryGrid categories={data} />;
}
