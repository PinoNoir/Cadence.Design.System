import clsx from 'clsx';
import React from 'react';
import { ReactAttr } from '../../types/common';
import { TableColumnProps } from '../../types/data-table-generics';
import { useTableContext } from './TableContext';
import * as styles from './styles/DataTable.css';

type TableRowsProps<T> = {
  data: T;
  columns: TableColumnProps<T>[];
  isSelected?: boolean;
  isSortable?: boolean;
} & CustomTableRowProps;

export interface CustomTableRowProps extends ReactAttr<HTMLTableRowElement> {
  /**
   * Specify a unique id for the row
   */
  id?: string;

  /**
   * Pass in children that will be rendered in the table row
   */
  children?: React.ReactNode;

  /**
   * Provide an optional onClick handler that is called on click
   */
  onClick?: () => void;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}
const TableRows = <T extends { id?: string }>({
  id,
  className,
  data,
  columns,
  isSelected,
  isSortable,
  children,
  ...props
}: TableRowsProps<T> & CustomTableRowProps) => {
  const { selectedRow, handleSelectRow } = useTableContext<T>();
  const rowStyles = clsx(styles.dataTableRow);
  return (
    <tr
      id={id}
      className={`${rowStyles} ${selectedRow === data.id ? styles.selected : ''}`}
      {...props}
      onClick={() => handleSelectRow(data.id, data)}
    >
      {columns.map((column, columnIndex) => {
        return <td key={`cell-${columnIndex}`}>{column.render(data as T, isSelected, isSortable)}</td>;
      })}
    </tr>
  );
};

TableRows.displayName = 'TableRows';

export default TableRows;
