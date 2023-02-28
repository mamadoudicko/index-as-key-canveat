import React, { type ReactElement, type ReactNode } from "react";

export const TableBody = ({ children }: { children: ReactNode }): ReactElement => {
  return (
    <tbody className="bg-white-200 text-gray-600 uppercase text-sm leading-normal">
      {children}
    </tbody>
  );
};
