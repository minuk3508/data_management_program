import { useState } from "react";
import styled from "styled-components";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  getFacetedUniqueValues,
  getFilteredRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { DataType } from "types";
import TableHeader from "./TableHeader";

interface Props {
  results: DataType[];
}

const Table = ({ results }: Props) => {
  const [data] = useState([...results]);
  const columnHelper = createColumnHelper<DataType>();

  const columns = [
    columnHelper.accessor("thingName", {
      header: "Sensor ID",
    }),
    columnHelper.accessor("shadow.batLvl", {
      header: "Bat.(%)",
      filterFn: "weakEquals",
    }),
    columnHelper.accessor("shadow.connAt", {
      enableColumnFilter: false,
      header: "Connected at",
    }),
    columnHelper.accessor("shadow.disconnAt", {
      enableColumnFilter: false,
      header: "Disconnected at",
    }),
    columnHelper.accessor("shadow.disconnReason", {
      header: "Reason",
      filterFn: "weakEquals",
    }),
    columnHelper.accessor("shadow.connCardNum", {
      header: "Card No",
      filterFn: "weakEquals",
    }),
    columnHelper.accessor("shadow.connGW", {
      header: "Gateway",
    }),
    columnHelper.accessor("shadow.rawSentCnt", {
      header: "Raw sent",
      filterFn: "weakEquals",
    }),
    columnHelper.accessor("shadow.remainData", {
      header: "Remain",
      filterFn: "weakEquals",
    }),
    columnHelper.accessor("shadow.rssi", {
      header: "RSSI",
      filterFn: "weakEquals",
    }),
    columnHelper.accessor("shadow.fwVer", {
      header: "F/W ver.",
    }),
    columnHelper.accessor("shadow.hwVer", {
      header: "H/W ver.",
    }),
  ];

  const Table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
  });

  return (
    <Wapper>
      <table>
        <thead>
          {Table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader header={header} key={header.id} />
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {Table.getRowModel().rows.map((row) => (
            <Row key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <Cell
                    key={cell.id}
                    style={{
                      color: row.original.shadow.batLvl <= 20 ? "red" : "black",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </Cell>
                );
              })}
            </Row>
          ))}
        </tbody>
      </table>
    </Wapper>
  );
};

export default Table;

const Wapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 10px;

  table {
    border: 1px solid black;
    tr {
      :nth-child(even) {
        background-color: rgba(232, 232, 232);
      }
      td {
        padding: 10px;
      }
    }
  }
`;

const Row = styled.tr`
  :hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

const Cell = styled.td``;
