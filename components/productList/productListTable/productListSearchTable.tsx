"use client"

import * as React from "react";

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

type Product = {
  category: string;
  collectionName: string;
  name: string;
  price: number;
};

const columnHelper = createColumnHelper<Product>();

const columns = [
  columnHelper.accessor("category", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("collectionName", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("price", {
    cell: (info) => info.getValue(),
  }),
  // you can use different aproach here
//   columnHelper.accessor((row) => row.collectionName, {
//     id: "c",
//     cell: (info) => <i>{info.getValue()}</i>,
//     header: () => <span>Email</span>,
//   }),
];

export default function ProductListSearchTable({ products }: any) {

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
