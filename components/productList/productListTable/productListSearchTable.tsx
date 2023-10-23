"use client";

import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect } from "react";
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";

type Product = {
  expand: {
    category: {
      category: string;
      collectionId: string;
      collectionName: string;
      created: string;
      id: string;
      taxRate: number;
      updated: string;
    };
  };
  name: string;
  price: number;
  category: string;
  action: string;
};

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor("category", {
    cell: (info) => {
      const categoryName = info.row.original.expand.category.category;
      return <span>{categoryName}</span>;
    },
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("action", {
    cell: (info) => info.getValue(),
  }),
];

export default function ProductListSearchTable() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/productList");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const categories = data.map(
          (product: any) => product.expand.category.category
        );
        setData(data);

        console.log(categories);
        console.log("hello", data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);

  const [data, setData] = React.useState(() => []);

  // console.log(products)
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex justify-center h-screen">
      <TableContainer  >
        <Table variant="simple" className="bg-white" >
          
          <Thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <Tr
                key={headerGroup.id}
                className="border-b text-gray-800 uppercase"
              >
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    className="px-4 pr-2 py-4 font-medium text-left"
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id} className="border-b">
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
}
