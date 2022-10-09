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
      <TableBox>
        <Header>
          {Table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHeader header={header} key={header.id} />
              ))}
            </tr>
          ))}
        </Header>
        <Body>
          {Table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                  <td
                    key={cell.id}
                    style={{
                      color: row.original.shadow.batLvl <= 20 ? "red" : "black",
                    }}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                );
              })}
            </tr>
          ))}
        </Body>
      </TableBox>
    </Wapper>
  );
};

export default Table;

const Wapper = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding: 20px 50px;
  @media ${({ theme }) => theme.device.tabletL} {
    padding: 15px;
  }
`;
const TableBox = styled.table`
  border: 1.5px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  overflow: scroll;
  display: inline-block;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  tbody tr:hover {
    background: rgba(0, 0, 0, 0.3);
    font-weight: 600;
  }
`;
const Header = styled.thead`
  background-color: rgba(0, 0, 0, 0.15);
  tr {
    th {
      padding: 7px;
      border-bottom: 1.5px solid rgba(0, 0, 0, 0.3);
      @media ${({ theme }) => theme.device.tabletL} {
        padding: 5px;
      }
    }
  }
`;
const Body = styled.tbody`
  overflow: scroll;
  white-space: nowrap;
  tr {
    background-color: white;
    border-top: 0.5px solid rgba(0, 0, 0, 0.3);
    :nth-child(even) {
      background-color: rgba(0, 0, 0, 0.05);
    }
    td {
      padding: 10px 5px;
      @media ${({ theme }) => theme.device.tabletL} {
        font-size: 14px;
        padding: 10px 3px;
      }
      @media ${({ theme }) => theme.device.mobile} {
        font-size: 12px;
      }
    }
  }
`;
