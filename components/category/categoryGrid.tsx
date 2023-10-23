"use client";

import { Box, Flex, SimpleGrid, Spacer, Stack } from '@chakra-ui/react';
import CategoryCard from './categoryCard';
import ProductCartCard from './productCartCard';

export default function CategoryGrid({ categories }: any) {
  return (
      <Stack direction={['column', 'row']} spacing='24px'>

      <Box flex="1">
        <SimpleGrid columns={{ base: 2, md: 2, lg: 1,}} spacing={10}>
          {categories?.map((data: any) => (
            <CategoryCard key={data.id} categoryData={data} />
          ))}
        </SimpleGrid>
      </Box>
      <Box flex="1">
        <ProductCartCard />
      </Box>
      </Stack>
  );
}
