"use client"

import { Card, CardBody, Heading, Stack, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function CategoryCard({categoryData }: any) {
    const { category, id} = categoryData || {};
  
    return (     
      <Stack direction="column" gap="10px">

      <LinkBox as="article" maxW="sm">

      <Card id={id} height="120px" width="120px" >
          <CardBody>

                  <Heading size='sm' whiteSpace="nowrap">
                   <LinkOverlay href={`/products/${id}`}>{category}</LinkOverlay>
                  </Heading>

          </CardBody>

      </Card>
  </LinkBox>
  </Stack>


    );
  }