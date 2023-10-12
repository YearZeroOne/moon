"use client"

import { Card, CardBody, Heading, Stack, LinkBox, LinkOverlay } from '@chakra-ui/react';

export default function CategoryCard({categoryData }: any) {
    const { category, collectionId} = categoryData || {};
  
    return (
      <Stack direction="column" gap="20px">
      <LinkBox as="article" maxW="sm" >
      <Card id={collectionId} height="150px">
          <CardBody>
          <Stack mt='6' spacing='3'>

                  <Heading size='md'>
                      <LinkOverlay href="/desired-link-path">{category}</LinkOverlay>
                  </Heading>
                  </Stack>

          </CardBody>

      </Card>
  </LinkBox>
  </Stack>

    );
  }