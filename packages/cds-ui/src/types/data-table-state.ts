export type DataTableSortState = 'none' | 'descending' | 'ascending';

/**
 * We currently support the following sorting states for DataTable headers,
 * namely: `NONE` for no sorting being applied, and then `DESC` and `ASC` for
 * the corresponding direction of the sorting order.
 */
export const sortStates: Record<DataTableSortState, DataTableSortState> = {
  none: 'none',
  descending: 'descending',
  ascending: 'ascending',
};
