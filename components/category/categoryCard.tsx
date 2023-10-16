"use client"

import { Card, CardBody, Heading, Stack, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function CategoryCard({categoryData }: any) {
    const { category, id} = categoryData || {};
  
    return (
      <Stack direction="column" gap="20px">
      <LinkBox as="article" maxW="sm" >
      <Card id={id} height="150px">
          <CardBody>
          <Stack mt='6' spacing='3'>

                  <Heading size='md'>
                   <LinkOverlay href={`/products/${id}`}>{category}</LinkOverlay>
                  </Heading>
                  </Stack>

          </CardBody>

      </Card>
  </LinkBox>
  </Stack>

    );
  }