import React from "react";

const Table = ({ columns = [], rows = [] }) => {
  return (
    <table className="w-full border">
      <thead>
        <tr>
          {columns.map((col, index) => (
            <th key={index} className="border p-2">
              {col}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>
            {row.map((cell, j) => (
              <td key={j} className="border p-2 text-center">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;