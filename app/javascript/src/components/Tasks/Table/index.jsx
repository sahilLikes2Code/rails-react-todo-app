import React from "react";

import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const Table = ({ data, showTask, destroyTask }) => {
  return (
    <div className="flex flex-col mt-10">
      <div className="overflow-x-auto my-2 sm:-mx-6 lg:-mx-8">
        <div className="inline-block py-2 min-w-full align-middle sm:px-6 lg:px-8">
          <div className="overflow-hidden border-b border-gray-200 shadow md:custom-box-shadow">
            <table className="min-w-full divide-y divide-gray-200">
              <TableHeader />
              <TableRow
                data={data}
                showTask={showTask}
                destroyTask={destroyTask}
              />
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
