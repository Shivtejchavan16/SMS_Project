const Table = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        
        <thead className="bg-gray-200">
          <tr>
            {columns.map((col, index) => (
              <th
                key={index}
                className="text-left px-4 py-2 text-sm font-semibold text-gray-700"
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t hover:bg-gray-50 transition"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-4 py-2 text-gray-600">
                  {row[col.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default Table;