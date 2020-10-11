import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { ITableData } from "../../types/ITableData";

const StyledTable = styled.table`
  tbody {  
    tr:nth-child(odd) {
      background-color: #323C50;
    }
    tr:nth-child(even) {
      background-color: #2C3446;
    }
  }
  
`;

const StyledBodyRow = styled.tr`
  &&:hover {
    background-color: #464A52;
    box-shadow: 0 6px 6px -6px #0E1119;
  }
`;

const StyledBodyCell = styled.td`
  padding: 12px;
  &:hover {
    background-color: #FFF842;
    color: #403E10;
    font-weight: bold;
    box-shadow: #7F7C21 -1px 1px, #7F7C21 -2px 2px, #7F7C21 -3px 3px, #7F7C21 -4px 4px, #7F7C21 -5px 5px, #7F7C21 -6px 6px;
    transform: translate3d(6px, -6px, 0);
    transition-delay: 0s;
    transition-duration: 0.4s;
    transition-property: all;
  }
`;

const Table: React.FC<TableProps<ITableData>> = ({columns, data}) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          {columns.map(({title, key}) => {
            return (
              <th key={key}>{title}</th>
            );
          })}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <StyledBodyRow key={`${row.id}-${index}`}>
            {columns.map(({key, render}, index) => {
              return (
                <StyledBodyCell key={key}>{render ? render(row.id) : row[key]}</StyledBodyCell>
              );
            })}
          </StyledBodyRow>
        ))}
      </tbody>
    </StyledTable>
  );
};

type TableProps<T> = {
  data: T[];
  columns: ColumnsType[]
}

type ColumnsType = {
  title: string;
  key: string;
  render?: (...args: any[]) => JSX.Element
}

export default Table;
