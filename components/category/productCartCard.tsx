"use client";

import {
  Card,
  CardBody,
  Heading,
  Stack,
  LinkBox,
  LinkOverlay,
  CardFooter,
  TableContainer,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  Button,
} from "@chakra-ui/react";

export default function ProductCartCard({ cartData }: any) {
  console.log("hello", cartData);
  return (
    <Card>
      <TableContainer>
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Product</Th>
              <Th>Quantity</Th>
              <Th isNumeric>Price</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {cartData?.map((data: any) => (
              <Tr key={data.id}>
                <Td>{data.expand.product.name}</Td>
                <Td>{data.quantity}</Td>
                <Td>{(data.expand.product.price * data.quantity).toFixed(2)}</Td> {/* assuming price needs to be fixed to 2 decimal places */}
                <Td>
                  <Button>X</Button>
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Card>
  );
}
