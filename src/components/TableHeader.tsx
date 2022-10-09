import styled from 'styled-components';
import { flexRender, SortDirection } from '@tanstack/react-table';
import { useMemo } from 'react';
import { FaSort, FaSortUp, FaSortDown } from 'react-icons/fa';
import { CustomHeader, CustomSorter } from 'types';

function TableHeader({ header }: CustomHeader) {
  const sortedUniqueValues = useMemo(
    () =>
      Array.from(header.column.getFacetedUniqueValues().keys()).sort(
        (a, b) => a - b
      ),
    [header.column]
  );

  const onFilterChange = (value: string) => {
    if (value === 'null') {
      header.column.setFilterValue(null);
    } else {
      header.column.setFilterValue(value);
    }
  };

  return (
    <th key={header.id}>
      <ThWrapper>
        <Sorter
          width={header.getSize()}
          isSortable={header.column.getCanSort()}
          onClick={header.column.getToggleSortingHandler()}
        >
          {header.isPlaceholder
            ? null
            : flexRender(header.column.columnDef.header, header.getContext())}
          {
            {
              asc: <FaSortUp />,
              desc: <FaSortDown />,
            }[header.column.getIsSorted() as SortDirection]
          }
          {header.column.getCanSort() && !header.column.getIsSorted() ? (
            <FaSort />
          ) : null}
        </Sorter>
        <ColumnFilter>
          {header.column.getCanFilter() ? (
            <select
              onChange={({ currentTarget: { value } }) => onFilterChange(value)}
            >
              <option value="null">All</option>
              {sortedUniqueValues.map((value) => (
                <option key={value}>{value}</option>
              ))}
            </select>
          ) : null}
        </ColumnFilter>
      </ThWrapper>
    </th>
  );
}

const ThWrapper = styled.div`
  background-color: aliceblue;
  border-radius: 5px;
`;
const Sorter = styled.div<CustomSorter>`
  width: ${({ width }) => width};
  cursor: ${({ isSortable }) => (isSortable ? 'pointer' : 'default')};
  background-color: #be6a2e;
  border-radius: 2px;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.2);
  color: whitesmoke;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  @media ${({ theme }) => theme.device.tabletL} {
    font-size: 14px;
    padding: 5px;
  }
  @media ${({ theme }) => theme.device.mobile} {
    font-size: 13px;
  }
`;
const ColumnFilter = styled.div`
  select {
    border: none;
    background-color: transparent;
    width: 100%;
    padding: 5px;
    color: #be6a2e;
    @media ${({ theme }) => theme.device.tabletL} {
      font-size: 13px;
      padding: 3px;
    }
    @media ${({ theme }) => theme.device.mobile} {
      font-size: 11px;
    }
  }
`;

export default TableHeader;
