"use client";

import {
  Card,
  CardBody,
  Heading,
  Stack,
  LinkBox,
  LinkOverlay,
  CardFooter,
} from "@chakra-ui/react";

export default function ProductCard({ productData }: any) {
  const { name, category, price } = productData || {};

  return (
    <Stack direction="column" gap="20px">
      <LinkBox as="article" maxW="sm">
        <Card id={category} height="150px">
          <Stack spacing="3">
            <CardBody>
              <Heading size="sm">
                <LinkOverlay>{name}</LinkOverlay>
              </Heading>
            </CardBody>
            <CardFooter>{price} €</CardFooter>
          </Stack>
        </Card>
      </LinkBox>
    </Stack>
  );
}
