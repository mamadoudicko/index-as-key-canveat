import React, { type ReactElement, type ReactNode } from "react";

export const TableDataCell = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <td className="py-4 px-6 border-b border-gray-200 content-start text-center w-1/4">
      {children}
    </td>
  );
};
