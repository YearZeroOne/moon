import { POCKET_BASE_URL } from "@/db";
import PocketBase from "pocketbase";
import ProductListSearchTable from "@/components/productList/productListTable/productListSearchTable";

async function getProductList() {
  const pb = new PocketBase(POCKET_BASE_URL);

  const records = await pb.collection("Products").getFullList({
    sort: "-created",
    cache: "no-store",
    expand: "category",
  });

  return records;
}

export default async function ProductList() {
  const product = await getProductList();
  console.log(product);
  return (
    <div>
      <ProductListSearchTable />
    </div>
  );
}
