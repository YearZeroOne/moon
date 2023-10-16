"use client";

import { Box, Flex, Text, Spinner } from "@chakra-ui/react";

export default function Loading() {
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      width="100vw"
      position="fixed"
      top="0"
      left="0"
    >
      <Spinner
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
        size='xl'
      />
      <Box mt={4}>
        <Text>Loading...</Text>
      </Box>
    </Flex>
  );
}