"use client";

import { SimpleGrid, Box } from "@chakra-ui/react";
import ProductCard from "./productCard";

export default function ProductGrid({ product }: any) {
  return (
    <Box display="flex">
      <SimpleGrid columns={{ base: 1, md: 5 }} spacing={10}>
        {product.map((data: any) => (
          <ProductCard key={data.id} productData={data} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
