"use client";

import { Box, Flex, SimpleGrid, Spacer, Stack } from '@chakra-ui/react';
import CategoryCard from './categoryCard';
import ProductCartCard from './productCartCard';

export default function CategoryGrid({ categories }: any) {
  return (
      <Stack direction={['column', 'row']} spacing='10px'>

      <Box flex="1">
        <SimpleGrid columns={{ base: 2, md: 3, lg: 3, xl: 5}} spacing='10px' >
          {categories?.map((data: any) => (
            <CategoryCard key={data.id} categoryData={data} />
          ))}
        </SimpleGrid>
      </Box>
      <Box flex="1">
      <SimpleGrid columns={{ base: 1, md: 1, lg: 1,}} spacing={10}>

        <ProductCartCard />
        </SimpleGrid>

      </Box>
      </Stack>
  );
}
