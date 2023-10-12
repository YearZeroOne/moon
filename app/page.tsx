import PocketBase from 'pocketbase';
import { POCKET_BASE_URL } from '@/db';
import CategoryGrid from '@/components/category/categoryGrid';
async function getProducts() {
  const pb = new PocketBase(POCKET_BASE_URL);

  const records = await pb.collection('Categories').getFullList({
    sort: '-created',
});
return records;


}
export default async function Home() {
  const data = await getProducts();
  return <CategoryGrid categories={data} />;
}
