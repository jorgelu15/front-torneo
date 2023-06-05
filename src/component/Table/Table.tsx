import React, { FC } from 'react';

interface RowProps {
  row: {
    [key: string]: string | number | JSX.Element;
  };
  columns: {
    [key: string]: string;
  };
}

const Row: FC<RowProps> = ({ row, columns }) => {
  return (
    <div className="row">
      {Object.entries(columns).map(([key, value]) => (
        <div className="col" key={key}>
          {row[key]}
        </div>
      ))}
    </div>
  );
};

interface TableProps {
  rows: Array<{
    row: {
      [key: string]: string  | number | JSX.Element;
    };
  }>;
  columns: {
    [key: string]: string;
  };
}

const Table: FC<TableProps> = ({ rows, columns }) => (
  <div className="table-container ">
    <div className="header-row">
      {Object.entries(columns).map(([key, value]) => (
        <div className="col" key={key}>
          {value}
        </div>
      ))}
    </div>
    <div className="table-body scroll">
      {rows.map(({ row }, index) => (
        <Row key={index} row={row} columns={columns} />
      ))}
    </div>
  </div>
);

export default Table;
