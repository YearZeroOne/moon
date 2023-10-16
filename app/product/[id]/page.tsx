import { POCKET_BASE_URL } from "@/db";
import PocketBase from 'pocketbase';

interface Props {
    params: {
      id: string;
    };
  }

  async function getProduct({ params }: Props){
    const pb = new PocketBase(POCKET_BASE_URL);

    const record = await pb.collection('Products').getOne(params.id, {
        expand: 'relField1,relField2.subRelField',
    });
    console.log(record)
    return record;

  }

  export default async function Product({ params }: Props) {
    const product = getProduct({params});
    console.log(product)
    return (
      <div>
        <h1>hello</h1>
      </div>
    );
  }