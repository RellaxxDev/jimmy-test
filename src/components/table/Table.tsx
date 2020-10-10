import React from "react";
import { ITableData } from "../../types/ITableData";

type TableProps<T> = {
  data: T[]
}

const Table: React.FC<TableProps<ITableData>> = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map(({ id, name, country }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{country}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
