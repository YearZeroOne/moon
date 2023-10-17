import { POCKET_BASE_URL } from "@/db";
import PocketBase from "pocketbase";
import ProductGrid from "@/components/product/productGrid";
import { getCategories } from "@/app/page";
interface Props {
  params: {
    id: string;
  };
}

async function getProducts({ params }: Props) {
  const pb = new PocketBase(POCKET_BASE_URL);

  const record = await pb.collection("Products").getFullList({
    sort: "-created",
    filter: `category = "${params.id}" `,
    cache: "no-store",
  });

  console.log(record);
  return record;
}

export default async function Products({ params }: Props) {
  const data = await getProducts({ params });
  const categories = await getCategories();
  return <ProductGrid product={data} />;
}
