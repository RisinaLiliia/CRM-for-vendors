import React from 'react';
import clsx from 'clsx';

export interface SummaryTableProps {
  headers: React.ReactNode;
  children?: React.ReactNode;
  className?: string; 
}

export default function SummaryTable({ headers, children, className }: SummaryTableProps) {
  return (
    <table className={clsx("table-auto w-full border-separate border-spacing-0", className)}>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody className="[&>tr:nth-child(2n)]:bg-gray-100 [&>tr:nth-child(2n+1)]:bg-white">
        {children}
      </tbody>
    </table>
  );
}
