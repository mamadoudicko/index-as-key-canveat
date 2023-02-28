import React, { type ReactElement, type ReactNode } from "react";

export * from "./TableDataCell";
export * from "./TableHead";
export * from "./TableHeaderCell";
export * from "./TableBody";
export * from "./TableRow";
export const Table = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <table className="table-auto border-collapse w-full bg-white rounded-lg">{children}</table>
  );
};
