import React, { type ReactElement, type ReactNode } from "react";

export const TableHeaderCell = ({ children }: { children: ReactNode }): ReactElement => {
  return <th className="py-3 px-6 text-center">{children}</th>;
};
