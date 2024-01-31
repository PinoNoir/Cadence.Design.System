import clsx from 'clsx';
import { useRef } from 'react';
import { useCustomTableApi } from '../../hooks/useCustomTableApi';
import { TableColumnProps, TableDataProps } from '../../types/data-table-generics';
import TableHeader from './TableHeader';
import TableRows from './TableRows';
import * as styles from './styles/DataTable.css';
import { DataTableSortState } from '../../types/data-table-state';

export interface TableProps<T> extends React.HTMLAttributes<HTMLTableElement> {
  /**
   * Specify an optional id of the `<Table>` component
   */
  id?: string;
  /**
   * Pass a ReactNode to render as a child of the `<Table>` component
   */
  children?: React.ReactNode;
  /**
   * Pass an array of objects to populate the rows of the `<Table>` component
   */
  data: TableDataProps<T>;
  /**
   * Pass a key, header, and optional width into the columns prop
   */
  columns: TableColumnProps<T>[];

  /**
   * Provide an optional class name for the `<Table>` component
   */
  className?: string;

  /**
   * Handler for when a column is sorted on the `<Table>` component
   */
  onSort?: (key: string) => void;

  /**
   * Specify the sort direction of the `<Table>` component
   */
  sortDirection?: DataTableSortState;

  /**
   * Specify the sort key of the `<Table>` component
   */
  sortKey?: string;

  /**
   * Optionally specify an automation id for testing purposes.
   */
  ['automation-id']?: string;
}

const Table = <T extends { id?: string }>({
  id,
  onSort,
  sortDirection,
  sortKey,
  data,
  columns,
  children,
  ...otherProps
}: TableProps<T>): JSX.Element => {
  const tableRef = useRef<HTMLTableElement>(null);
  const baseStyles = clsx(styles.dataTable);
  const { selectedRow, handleSelectedRow } = useCustomTableApi<T>();

  return (
    <div className={styles.content}>
      <table id={id} ref={tableRef} className={baseStyles} {...otherProps}>
        <TableHeader columns={columns} onSort={onSort} sortDirection={sortDirection} sortKey={sortKey} />
        <tbody>
          {data.map((item, index) => (
            <TableRows
              key={`row-${index}`}
              id={`row-${item.id}`}
              data={item}
              columns={columns}
              isSelected={selectedRow === item.id}
              onClick={() => handleSelectedRow(item.id, item)}
            />
          ))}
          {children}
        </tbody>
      </table>
    </div>
  );
};

Table.displayName = 'Table';

export default Table;
