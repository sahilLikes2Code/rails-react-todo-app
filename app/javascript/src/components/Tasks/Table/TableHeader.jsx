import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th className="w-1"></th>
        <th className="px-6 py-3 text-xs font-bold tracking-wider leading-4 text-left text-opacity-50 uppercase bg-gray-50 text-bb-gray-600">
          Title
        </th>
        <th className="px-6 py-3 text-sm font-bold tracking-wider leading-4 text-left text-opacity-50 bg-gray-50 text-bb-gray-600">
          Assigned To
        </th>
        <th className="px-6 py-3 bg-gray-50"></th>
      </tr>
    </thead>
  );
};

export default TableHeader;
