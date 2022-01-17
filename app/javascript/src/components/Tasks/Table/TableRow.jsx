import React from "react";

import PropTypes from "prop-types";

const TableRow = ({ data }) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {data.map(rowData => (
        <tr key={rowData.id}>
          <td className="block px-6 py-4 w-64 text-sm font-medium leading-8 capitalize truncate text-bb-purple">
            {rowData.title}
          </td>
        </tr>
      ))}
    </tbody>
  );
};

TableRow.propTypes = {
  data: PropTypes.array.isRequired,
};

export default TableRow;
