import React, { type ReactElement, type ReactNode } from "react";

export const TableHead = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">{children}</tr>
    </thead>
  );
};
