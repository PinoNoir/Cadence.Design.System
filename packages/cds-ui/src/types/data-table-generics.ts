import { ReactNode } from 'react';

export type TableDataProps<T> = T[];

export type TableColumnProps<T> = {
  key: string;
  header: string | ReactNode;
  width?: React.CSSProperties['width'];
  isSortable?: boolean;
  render?: (data: T, isSelected: boolean, isSortable: boolean) => ReactNode;
};
