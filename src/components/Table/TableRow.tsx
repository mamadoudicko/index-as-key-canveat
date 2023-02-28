import { ReactNode } from "react";

export const TableRow = ({ children }: { children: ReactNode }) => {
  return (
    <tr className="hover:bg-gray-100 border-b border-gray-200">{children}</tr>
  );
};
