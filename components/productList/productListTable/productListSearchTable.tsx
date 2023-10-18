"use client"

import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useEffect } from "react";

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
    };  };
  name: string;
  price: number;
  category: string;
};

const columnHelper = createColumnHelper<Product>();

const columns = [

  columnHelper.accessor("expand", {    
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
];

export default function ProductListSearchTable({ products }: any) {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/productList");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        const categories = data.map((product : any) => product.expand.category.category);

        // setUser(newData);
        console.log(categories)
        console.log("hello", data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchData();
  }, []);



  
// console.log(products)
  const table = useReactTable({
    data: products,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="flex justify-center h-screen">
      <table className="my-auto border">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr
              key={headerGroup.id}
              className="border-b text-gray-800 uppercase"
            >
              {headerGroup.headers.map((header) => (
                <th
                  key={header.id}
                  className="px-4 pr-2 py-4 font-medium text-left"
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="px-4 pt-[14px] pb-[18px]">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div />
    </div>
  );
}
