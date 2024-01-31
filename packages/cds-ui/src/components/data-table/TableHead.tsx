import React, { ThHTMLAttributes } from 'react';

export type TableHeadProps = ThHTMLAttributes<HTMLTableSectionElement>;

const TableHead = ({ children, ...props }: TableHeadProps): React.JSX.Element => {
  return <thead {...props}>{children}</thead>;
};

TableHead.displayName = 'TableHead';

export default TableHead;
