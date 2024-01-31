import { TablePagination, TablePaginationProps } from '@mui/base/TablePagination';
import React from 'react';
import { tablePagination } from './Pagination.css';

export interface PaginationProps extends TablePaginationProps {
  // add custom props here
}

const Pagination: React.FC<PaginationProps> = (props) => {
  return <TablePagination {...props} className={`${tablePagination}`} slots={{ root: 'div' }} />;
};

Pagination.displayName = 'Pagination';

export default Pagination;
