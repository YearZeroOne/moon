"use client"

import { SimpleGrid } from '@chakra-ui/react';
import CategoryCard from './categoryCard';


export default function CategoryGrid({categories} : any) {
return(
<>
<SimpleGrid columns={{ base: 1, md: 5 }} spacing={10}>
    {categories?.map((data : any) => (
      <CategoryCard key={data.id} categoryData={data} />
    ))}
  </SimpleGrid>
</>


);

}

