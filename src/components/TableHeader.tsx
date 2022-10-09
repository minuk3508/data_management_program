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
              <option value='null'>All</option>
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
const Sorter = styled.div<CustomSorter>`
  width: ${({ width }) => width};
  cursor: ${({ isSortable }) => (isSortable ? 'pointer' : 'default')};
`;
const ColumnFilter = styled.div`
  select {
    border: none;
    background-color: transparent;
  }
`;

export default TableHeader;
