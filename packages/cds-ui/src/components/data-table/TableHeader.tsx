/* -------------------------------------------------------------------------------------------------
 * Table Header
 * -----------------------------------------------------------------------------------------------*/
import { Icon } from '@iconify/react';
import React from 'react';
import { TableColumnProps } from '../../types/data-table-generics';
import * as styles from './styles/DataTable.css';
import { useId } from '../../utilities/use-id';
import TableHead from './TableHead';
import { DataTableSortState } from '../../types/data-table-state';

const defaultScope = 'col';

interface TableHeaderProps<T> extends React.HTMLAttributes<HTMLTableCellElement> {
  columns: TableColumnProps<T>[];
  children?: React.ReactNode;
  className?: string;
  sortKey?: string;
  sortDirection?: DataTableSortState;
  scope?: string;
  colSpan?: number;
  onSort?: (key: string) => void;
  /**
   * Specify the width of the TableHeader cell as a percentage
   */
  widthRef?: React.RefObject<HTMLTableCellElement>;
}

const TableHeader = <T,>({
  columns,
  colSpan,
  sortDirection,
  widthRef,
  scope = defaultScope,
  onSort,
  sortKey,
  id,
  ...props
}: TableHeaderProps<T>): React.ReactElement => {
  const uniqueId = useId('table-sort');

  const handleSort = (key: string) => {
    if (onSort) {
      onSort(key);
      // eslint-disable-next-line no-console
      console.log('sort key', key);
    }
  };

  const headers = columns.map((column) => {
    const isCurrentSortColumn = sortKey === column.key;
    let iconState: DataTableSortState = 'none';
    if (isCurrentSortColumn) {
      iconState = sortDirection === 'ascending' || sortDirection === 'descending' ? sortDirection : 'none';
    }

    return (
      <th
        key={column.key}
        scope={defaultScope}
        ref={widthRef}
        style={{ width: column.width }}
        onClick={() => handleSort(column.key)}
        colSpan={colSpan}
        {...props}
      >
        <div className={styles.dataTableHeader}>
          {column.isSortable ? (
            <button type="button" aria-describedby={uniqueId}>
              {column.header}
              <Icon className={styles.sortIcon} icon="mdi:menu-down" width="20px" data-state={iconState} />
            </button>
          ) : (
            column.header
          )}
        </div>
      </th>
    );
  });

  return (
    <TableHead>
      <tr>{headers}</tr>
    </TableHead>
  );
};

TableHeader.displayName = 'TableHeader';

export default TableHeader;
