"use client"

import { Card, CardBody, Heading, Stack, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function CategoryCard({categoryData }: any) {
    const { category, id} = categoryData || {};
  
    return (
      <Stack direction="column" gap="20px">
      <LinkBox as="article" maxW="sm">
      <Card id={id} height="150px" width="170px" >
          <CardBody>

                  <Heading size='md' whiteSpace="nowrap">
                   <LinkOverlay href={`/products/${id}`}>{category}</LinkOverlay>
                  </Heading>

          </CardBody>

      </Card>
  </LinkBox>
  </Stack>

    );
  }