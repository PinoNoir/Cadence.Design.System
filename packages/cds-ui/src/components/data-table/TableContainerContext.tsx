import { createContext } from 'react';

interface TableContextType {
  titleId?: string;
  descriptionId?: string;
}

export const TableContainerContext = createContext({
  titleId: undefined,
  descriptionId: undefined,
} as TableContextType);
