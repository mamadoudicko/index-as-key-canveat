import React, { type ReactElement } from "react";
import { TableDataCell, TableRow } from "./components/Table";

export const Mark = ({
  fullName,
  id,
  onRemove,
}: {
  fullName: string;
  id: string;
  onRemove: (removingMarkId: string) => void;
}): ReactElement => {
  const removeMark = (removingMarkId: string): void => {
    onRemove(removingMarkId);
  };

  const [mark, setMark] = React.useState<number | undefined>(undefined);

  return (
    <TableRow>
      <TableDataCell>
        <span className="text-gray-700 font-bold">{fullName}</span>
      </TableDataCell>
      <TableDataCell>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="number"
          placeholder="Enter marks obtained"
          value={mark}
          min="0"
          max="20"
          onChange={(event) => {
            setMark(Number(event.target.value));
          }}
        />
      </TableDataCell>
      <TableDataCell>
        <span
          className={`inline-block rounded-full px-3 py-1 text-sm font-semibold text-white ${
            mark === undefined ? "bg-orange-500" : mark >= 10 ? "bg-green-500" : "bg-red-500"
          }`}>
          {mark === undefined ? "-" : mark >= 10 ? "Passed" : "Failed"}
        </span>
      </TableDataCell>
      <TableDataCell>
        <button
          onClick={() => {
            removeMark(id);
          }}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-3 rounded">
          Remove
        </button>
      </TableDataCell>
    </TableRow>
  );
};
